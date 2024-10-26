
import PropTypes from 'prop-types';
const Navbar = ({coin}) => {
  return (
    <nav className="flex justify-between items-center px-3 shadow-custom-gray sticky top-0 bg-[#ffffffca] backdrop-blur-sm z-50">
      <div className="p-4 ">
        <img src="/assets/logo.png" alt="logo" />
      </div>

      <div className="flex gap-3 items-center text-[#131313B3] text-opacity-70">
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
        </ul>
        <button className="flex space-x-1 items-center border border-[#131313] border-opacity-10 py-4 px-5 rounded-xl">
          <span>{coin} coins</span>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/emoji/20/coin-emoji.png"
            alt="coin-emoji"
          />
        </button>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  coin: PropTypes.number
}
export default Navbar;
