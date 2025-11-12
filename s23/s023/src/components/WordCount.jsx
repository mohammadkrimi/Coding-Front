import { useMemo, useState } from "react";

const MAX_CHAR_LENGTH = 20;

const WordCount = () => {
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const charCount = useMemo(() => text.length, [text]);
  return (
    <div>
      <textarea value={text} onChange={onTextChange} />
      {charCount > MAX_CHAR_LENGTH ? (
        <strong style={{ color: "red" }}>Max char reached!</strong>
      ) : (
        <span>
          {charCount} / {MAX_CHAR_LENGTH}
        </span>
      )}
    </div>
  );
};

export default WordCount;
