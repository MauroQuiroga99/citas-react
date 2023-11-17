const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-white text-center uppercase font-bold rounded-md p-3 mb-3">
      {children}
    </div>
  );
};

export default Error;
