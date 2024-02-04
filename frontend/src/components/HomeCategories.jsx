const HomeCategories = () => {
  return (
    <main className="mt-12 flex items-center justify-center">
      <div className="w-auto h-[10%] border-2 p-4 border-black">
        <div className="mb-2">
          <p>Categories</p>
        </div>
        <div className="grid grid-cols-5 place-items-center gap-4 flex-wrap overflow-hidden">
          <div>
            <div className="w-40 mb-2">
              <img src="/assets/chatgpt-logo-png.png" alt="" />
            </div>
            <div className="slide-details">
              <p>Lorem ipsum dolor.</p>
            </div>
          </div>

          <div>
            <div className="w-40 mb-2">
              <img src="/assets/chatgpt-logo-png.png" alt="" />
            </div>
            <div className="slide-details">
              <p>Lorem ipsum dolor.</p>
            </div>
          </div>

          <div>
            <div className="w-40 mb-2">
              <img src="/assets/chatgpt-logo-png.png" alt="" />
            </div>
            <div className="slide-details">
              <p>Lorem ipsum dolor.</p>
            </div>
          </div>

          <div>
            <div className="w-40 mb-2">
              <img src="/assets/chatgpt-logo-png.png" alt="" />
            </div>
            <div className="slide-details">
              <p>Lorem ipsum dolor.</p>
            </div>
          </div>

          <div>
            <div className="w-40 mb-2">
              <img src="/assets/chatgpt-logo-png.png" alt="" />
            </div>
            <div className="slide-details">
              <p>Lorem ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeCategories;
