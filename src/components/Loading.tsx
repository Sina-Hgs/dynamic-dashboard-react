const Loading = () => {
  return (
    <div className="flex flex-col items-center w-full relative m-auto top-[45vh] gap-y-1">
      <div className="w-fit px-6 py-1 rounded-3xl  text-2xl text-lightPrimary transition-all font-RobotoMono">
        <div className="flex gap-2 items-baseline">
          Loading
          <span className="animate-bounce p-0.5 rounded-full bg-lightPrimary"></span>
          <span className="animate-bounce p-0.5 rounded-full bg-lightPrimary"></span>
          <span className="animate-bounce p-0.5 rounded-full bg-lightPrimary"></span>
        </div>
      </div>
      <hr className="w-[80%] border-lightSecondary" />
    </div>
  );
};

export default Loading;
