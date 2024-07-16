import React from "react";
import { useTheme } from "../utils/ThemeContext";
import Breadcrumb from "../components/breadcrumb";
export default function AboutUs() {
  const { theme } = useTheme();
  return (
    <>
      <Breadcrumb />
      <div className="dark:text-white">
        <div className="min-[769px]:w-[80%] max-[769px]:mx-2 bg-[#F5F5F5] dark:bg-[#1F1F1F] rounded-xl my-10 p-8 min-[769px]:mx-44">
          <div className="mb-10">
            <h1 className="text-4xl max-[769px]:text-xl font-semibold text-justify">
              We pay attention to your needs and do the best design.
            </h1>
          </div>
          <div className="flex max-[769px]:flex-col text-justify gap-14">
            <div className="min-[769px]:w-1/2 text-lg">
              At Global News, we understand the importance of staying informed in
              today's fast-paced world. Our team of experienced journalists,
              writers, and editors works tirelessly to bring you the latest
              developments and trends, ensuring that you're always up-to-date
              with what's happening both locally and internationally. What sets
              us apart is our commitment to journalistic integrity and
              objectivity. We strive to present diverse perspectives and foster
              meaningful conversations on issues that matter most. Whether it's
              uncovering groundbreaking stories or providing in-depth analysis,
              we aim to empower our readers with knowledge and understanding. In
              addition to news coverage, Global News also features opinion pieces,
              interviews, and multimedia content to offer a comprehensive view
              of the world around us. Our goal is not only to inform but also to
              inspire and engage our audience in meaningful dialogue. Thank you
              for choosing Global News as your trusted source for news and information.
              Join us on this journey as we explore the stories shaping our
              world today and into the future.
            </div>
            <div className="min-[769px]:w-1/2">
              <img
                className="min-[769px]:w-[744px] min-[749px]:h-[444px] rounded-xl"
                src="./images/abstract-video.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex my-20 gap-12 max-[769px]:flex-col mx-2">
          <div className="min-[769px]:w-[60%] flex min-[769px]:justify-end min-[769px]:p-8  items-center min-[769px]:rounded-[0px_50px_50px_0px] max-[769px]:rounded-xl h-[361px] min-[769px]:bg-[#F5F5F5] dark:bg-[#1F1F1F]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018.4963018700189!2d76.68827997053899!3d30.69731441504843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe02b751aa3%3A0xe34a68768b59b3ac!2stecHangouts%20-%20Industrial%20Training%20Company%20in%20Mohali%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1719300683199!5m2!1sen!2sin"
              width="840"
              height="297"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="max-[769px]:rounded-xl"
            ></iframe>
          </div>
          <div>
            <div className="flex gap-2 mt-5 max-[769px]:mx-5">
              <img className="py-3" src="./images/red-icon.png" alt="" />
              <h1 className="text-lg font-semibold">NNI Information</h1>
            </div>
            <div className="border-l-4">
              <div className="flex gap-4 pl-3 my-7">
                <img
                  src={
                    theme === "light"
                      ? "./images/email-icon.png"
                      : "./images/mail-dark.png"
                  }
                  alt=""
                />
                <p className="font-semibold text-sm">
                  Email : management@nni.com
                </p>
              </div>
              <div className="flex gap-4 pl-3 my-7">
                <img
                  src={
                    theme === "light"
                      ? "./images/phone-icon.png"
                      : "./images/mobile-dark.png"
                  }
                  alt=""
                />
                <p className="font-semibold text-sm">
                  Phone number : +1(234) 567-8910
                </p>
              </div>
              <div className="flex gap-4 pl-3 my-7">
                <img
                  src={
                    theme === "light"
                      ? "./images/fax-icon.png"
                      : "./images/fax-dark.png"
                  }
                  alt=""
                />
                <p className="font-semibold text-sm">fax : +1(234) 567-8910</p>
              </div>
              <div className="flex gap-4 pl-3 my-7">
                <img
                  src={
                    theme === "light"
                      ? "./images/address-icon.png"
                      : "./images/address-dark.png"
                  }
                  alt=""
                />
                <p className="font-semibold text-sm">
                  Address : 1234 Foxrun St.New Lenox, IL 123456
                </p>
              </div>
            </div>
            <div className="flex gap-2 px-[22px] py-[10px] bg-[#F5F5F5] dark:bg-[#1F1F1F] rounded-xl items-center">
              <img
                className="h-[20px]"
                src={
                  theme === "light"
                    ? "./images/timer.png"
                    : "./images/timer-dark.png"
                }
                alt=""
              />
              <p className="font-semibold">
                Responding 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
        <div className="min-[769px]:mx-32 max-[769px]:mx-2 my-10">
          <div className="flex gap-2 my-10 items-center">
            <img className="py-3" src="./images/red-icon.png" alt="" />
            <h1 className="text-xl font-semibold">Global News Team</h1>
          </div>
          <div className="flex max-[769px]:flex-wrap gap-10 mb-20">
            
          <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
              <div>
                <img
                  className="w-[124px] h-[124px] rounded-xl border-2"
                  src="./images/aman.jpeg"
                  alt=""
                />
              </div>
              <div className="mt-[25px]">
                <h2>MERN Stack Developer</h2>
              </div>
              <div className="w-full mt-[25px]">
                <a target="_blank" href="https://kumar-aman-portfolio.netlify.app/">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">
                 Aman Kumar
                </button>
                </a>
              </div>
            </div>
            <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
              <div>
                <img
                  className="w-[124px] h-[124px] rounded-xl border-2"
                  src="./images/gaurav.jpeg"
                  alt=""
                />
              </div>
              <div className="mt-[25px]">
                <h2>MERN Stack Developer</h2>
              </div>
              <div className="w-full mt-[25px]">
                
                <a target="_blank" href="https://www.instagram.com/_thisgaurav/"><button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">
                 Gaurav Garg
                </button></a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
