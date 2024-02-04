import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <main>
      <nav className="w-full h-[5rem] pt-2 pb-2 flex items-center justify-between border-2 border-black">
        <div className="w-10">
          <a href="/">
            <img src="/assets/chatgpt-logo-png.png" alt="The Pustak logo" />
          </a>
        </div>
        <div>
          <div className="flex items-center justify-evenly gap-8">
            <div className="grid place-items-center cursor-pointer">
              <CgProfile />
              <h3>Library</h3>
            </div>
            <div className="grid place-items-center cursor-pointer"> 
              <CgProfile />
              <h3 className=" font-medium">Profile</h3>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
