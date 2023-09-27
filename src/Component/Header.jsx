import logo from "../assets/logo.png";
import search from "../assets/search.png";
import login from "../assets/login.png";
import notification from "../assets/notification.png";
function Header() {
  return (
    <section className="bg-black w-screen h-14">
      <div className="container mx-auto px-10 text-white">
        <div className="flex items-center justify-between gap-10">
          <img src={logo} alt="" />
          <ul className="flex gap-10">
            <li>Service</li>
            <li className="border-b-2 border-red-600">Menu</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <ul className="flex items-center gap-10">
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={notification} alt="" />
            </li>
            <li className="bg-gray-800 px-2 py-1 rounded-full flex items-center  mx-auto gap-3 border-[1px] border-white">
              <img className="w-full h-fit" src={login} alt="" />
              login
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Header;
