

import { toast } from 'react-toastify';


const Banner = ({handleCoin}) => {
    const notify = () => toast.success("Hurrah You have earned free coins");
    

  return (
    <div className=" my-6 md:my-12 md:px-6 px-3">
      <div className="flex flex-col items-center justify-center text-white h-screen mx-auto rounded-xl bg-cover bg-center bg-custom-image  bg-black py-4 md:pt-14">
        <div>
          <img
            className="mx-auto"
            src="/assets/banner-main.png"
            alt="banner-img"
          />
        </div>
        <h1 className="w-4/5 mx-auto text-center my-3 md:mt-6 md:mb-4 text-xl md:text-2xl lg:text-[40px] font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[#ffffff] text-opacity-70 font-medium tracking-wider">
          Beyond Boundaries Beyond Limits
        </p>
        <button onClick={() => {
          notify()
          handleCoin()
        }} className="bg-[#E7FE29] py-3 px-5 rounded-xl mt-3 md:mt-6 text-black">
        Claim Free Credit
        </button>
   
      </div>
    </div>
  );
};

export default Banner;
