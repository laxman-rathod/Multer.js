const HomeSliders = () => {
  return (
    <main className="mt-12 flex items-center justify-center">
      <div className="w-[80%] h-[20%] border-2 p-4 border-black slider grid place-items-center gap-2 flex-wrap overflow-hidden">
        <div className="w-40">
          <img src="/assets/chatgpt-logo-png.png" alt="" />
        </div>
        <div className="slide-details">
          <p>Lorem ipsum dolor.</p>
        </div>
        <div className="text-5xl"><p>...</p></div>
      </div>
    </main>
  );
};

export default HomeSliders;
