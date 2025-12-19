import { useEffect, useRef, useState } from "react";

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

export default function useLocalStorage(key, initialValue) {
  const initialRef = useRef(true);

  const [value, setValue] = useState(() => {
    if (!isBrowser()) return typeof initialValue === "function" ? initialValue() : initialValue;

    const raw = window.localStorage.getItem(key);
    if (raw == null) return typeof initialValue === "function" ? initialValue() : initialValue;

    return safeParse(raw, typeof initialValue === "function" ? initialValue() : initialValue);
  });

  // write on change
  useEffect(() => {
    if (!isBrowser()) return;

    // جلوگیری از overwrite ناخواسته در اولین رندر بعضی سناریوها
    if (initialRef.current) {
      initialRef.current = false;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / private mode errors
    }
  }, [key, value]);

  // sync across tabs
  useEffect(() => {
    if (!isBrowser()) return;

    const onStorage = (e) => {
      if (e.key !== key) return;
      if (e.newValue == null) {
        setValue(typeof initialValue === "function" ? initialValue() : initialValue);
        return;
      }
      setValue(safeParse(e.newValue, value));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const remove = () => {
    if (!isBrowser()) return;
    try {
      window.localStorage.removeItem(key);
    } catch {}
    setValue(typeof initialValue === "function" ? initialValue() : initialValue);
  };

  return [value, setValue, remove];
}