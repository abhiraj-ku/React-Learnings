const ModernInputBox = () => {
  return (
    <div className="container">
      <div className="demo-flex-spacer"></div>
      <div className="relative flex justify-center items-center h-screen">
        <input
          type="email"
          placeholder="What's your email?"
          className="w-full py-2 pl-3 pr-10 text-indian-white placeholder-indian-green bg-indian-saffron text-lg rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
          style={{
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <i className="fa-solid fa-arrow-right text-indian-white hover:text-indian-green text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ModernInputBox;
