import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback, useEffect, useState } from "react";

const SignupForm = () => {
  const schema = z.object({
    num: z.number().min(10).max(100),
    // email: z.email(),
    // fullName: z.string().min(6, "min is 6 chars"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      num: 54,
    },
  });

  const [dep, setDep] = useState(1);

  const onSubmit = useCallback(
    (data) => {
      console.log("here", data, dep);
    },
    [dep]
  );

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="bg-gray-800 p-2">
      <div className="flex gap-3">
        {/* <div className="w-1/2">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            className="bg-white rounded-lg p-2 block w-full"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="w-1/2">
          <label htmlFor="fullName" className="block text-white mb-2">
            Full Name
          </label>
          <input
            {...register("fullName")}
            id="fullName"
            className="bg-white rounded-lg p-2 block w-full"
          />
          {errors.fullName && (
            <span className="text-red-600">{errors.fullName.message}</span>
          )}
        </div> */}

        <div className="w-1/2">
          <label htmlFor="num" className="block text-white mb-2">
            Your Number
          </label>
          <input
            {...register("num", { valueAsNumber: true })}
            id="num"
            type="number"
            className="bg-white rounded-lg p-2 block w-full"
          />
          {errors.num && (
            <span className="text-red-600">{errors.num.message}</span>
          )}
        </div>
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className="block bg-gray-400 rounded-lg p-2 w-full mt-2 font-black"
      >
        Submit
      </button>
      {watch("fullName")}
      <button onClick={() => setDep(dep + 1)}>set Dep</button>
    </div>
  );
};

export default SignupForm;
