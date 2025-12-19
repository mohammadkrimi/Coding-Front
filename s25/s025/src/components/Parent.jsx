const Parent = ({ children }) => {
  return (
    <div className="bg-green-700 p-2">
      <div>Parent</div>
      <div>{children}</div>
    </div>
  );
};

export default Parent;
