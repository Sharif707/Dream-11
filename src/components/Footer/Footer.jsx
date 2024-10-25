import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#06091A] py-8">
      <div className="flex flex-col gap-6 items-center mt-28">
        <img src="/assets/logo-footer.png" alt="footer-png" />

        <div className="flex justify-between mt-16 mb-18 text-white">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">About us</h3>
            <p className="mt-4 text-white text-opacity-60 w-3/5">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="-ml-4">Quick Links</h2>
            <ul className="space-y-3 mt-4">
                <li className="list-disc text-white text-opacity-60"><a href="#">Home</a></li>
                <li className="list-disc text-white text-opacity-60"><a href="#">Services</a></li>
                <li className="list-disc text-white text-opacity-60"><a href="#">About</a></li>
                <li className="list-disc text-white text-opacity-60"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex-1 ">
            <h2 className="text-lg font-semibold">Subscribe</h2>
            <p className="text-white text-opacity-60 my-4">Subscribe to our newsletter for the latest updates.</p>
            <label>
                <input className="border border-opacity-15 py-3 px-5" type="email" placeholder="Enter Your Email"/>
                <button className="py-3 px-5 rounded-xl text-center text-xl font-semibold bg-[#007BFF]">Subscribe</button>
            </label>
          </div>
        </div>
      </div>
      <div className="text-center py-8 border border-t-[#ffffff] border-opacity-5">
       <p className="text-[#ffffff] text-opacity-60">
       @2024 Your Company All Rights Reserved.
       </p>

      </div>

      <div className="absolute top-0 left-1/2 py-14 px-10 border-2 border-white -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 bg-newsletter-gradient w-2/3">
        <h2 className="text-[#131313] text-3xl font-bold text-center">Subscribe to our Newsletter</h2>
        <p className="text-xl font-medium mt-4 mb-6 text-center">Get the latest updates and news right in your inbox!</p>
        <div className=" flex justify-center gap-3">
            <input className="w-2/3 rounded-xl py-3 px-4" type="text" placeholder="Enter Your Email" />
            <button className="rounded-xl py-3 px-4 bg-subscribe-gradient font-bold text-lg">SubScribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
