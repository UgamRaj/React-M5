import React from "react";
import ContactInfoCard from "./ContactInfoCard";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="py-[60px] px-10 flex justify-between">
      <div>
        <p className="mb-[16px]">Contact Us</p>
        <h2 className="mb-[24px] text-[40px] font-bold">
          GET IN TOUCH WITH US
        </h2>
        <p className="mb-[36px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis
          <br /> nostrud exercitation ullamco
        </p>
        <div className="flex flex-col gap-8 ml-8">
          <ContactInfoCard
            icon={<RiHome2Line />}
            heading="Our Location"
            para="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
          />
          <ContactInfoCard
            icon={<FiPhone />}
            heading="Phone Number"
            para="(+62)81 414 257 9980"
          />
          <ContactInfoCard
            icon={<MdOutlineMail />}
            heading="Email Address"
            para="info@yourdomain.com"
          />
        </div>
      </div>
      <div className="relative border w-[570px] rounded-xl shadow-xl">
        <form className="flex flex-col p-[48px] gap-6">
          <input
            className="w-full p-2 py-3 border rounded-md focus:outline-blue-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 py-3 border rounded-md focus:outline-blue-500"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="w-full p-2 py-3 border rounded-md focus:outline-blue-500"
            type="phone"
            placeholder="Your Phone"
          />
          <textarea
            className="w-full px-2 py-3 border rounded-md focus:outline-blue-500 h-[160px]"
            placeholder="Your Message"
          />
          <div className="text-center">
            <button
              className="p-2 px-6 font-semibold text-white bg-[#1d4ed8] rounded-lg hover:bg-[#0e3dbd] w-max "
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
