import React from "react";
import { useTheme } from '../utils/ThemeContext';
export default function AboutUs() {
    const {theme} = useTheme();
    return (
        <>
            <div className="dark:text-white">
                <div className="min-[769px]:w-[80%] max-[769px]:mx-2 bg-[#F5F5F5] dark:bg-[#1F1F1F] rounded-xl my-10 p-8 min-[769px]:mx-44">
                    <div className="mb-10">
                        <h1 className="text-4xl max-[769px]:text-xl font-semibold text-justify">
                            We pay attention to your needs and do the best design.
                        </h1>
                    </div>
                    <div className="flex max-[769px]:flex-col text-justify gap-14">
                        <div className="min-[769px]:w-1/2 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                            congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
                            imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
                            senectus et netus. Mattis pellentesque id nibh tortor id aliquet
                            lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
                            vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
                            ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
                            vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
                            tortor pretium viverra suspendisse potenti nullam. Et molestie ac
                            feugiat sed lectus. Non nisi est sit amet facilisis magna.
                            Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
                            enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
                            est placerat in egestas erat.
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
                    <div >
                        <div className="flex gap-2 mt-5 max-[769px]:mx-5">
                            <img className="py-3" src="./images/red-icon.png" alt="" />
                            <h1 className="text-lg font-semibold">NNI Information</h1>
                        </div>
                        <div className="border-l-4">
                            <div className="flex gap-4 pl-3 my-7">
                                <img src={theme === 'light' ? "./images/email-icon.png" : "./images/mail-dark.png"} alt="" />
                                <p className="font-semibold text-sm">Email : management@nni.com</p>
                            </div>
                            <div className="flex gap-4 pl-3 my-7">
                            <img src={theme === 'light' ? "./images/phone-icon.png" : "./images/mobile-dark.png"} alt="" />
                                <p className="font-semibold text-sm">Phone number : +1(234) 567-8910</p>
                            </div>
                            <div className="flex gap-4 pl-3 my-7">
                            <img src={theme === 'light' ? "./images/fax-icon.png" : "./images/fax-dark.png"} alt="" />
                                <p className="font-semibold text-sm">fax : +1(234) 567-8910</p>
                            </div>
                            <div className="flex gap-4 pl-3 my-7">
                            <img src={theme === 'light' ? "./images/address-icon.png" : "./images/address-dark.png"} alt="" />
                                <p className="font-semibold text-sm">Address : 1234 Foxrun St.New Lenox, IL 123456</p>
                            </div>
                        </div>
                        <div className="flex gap-2 px-[22px] py-[10px] bg-[#F5F5F5] dark:bg-[#1F1F1F] rounded-xl items-center">
                        <img className="h-[20px]" src={theme === 'light' ? "./images/timer.png" : "./images/timer-dark.png"} alt="" />
                            <p className="font-semibold">Responding 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div className="min-[769px]:mx-32 max-[769px]:mx-2 my-10">
                    <div className="flex gap-2 my-10 items-center">
                        <img className="py-3" src="./images/red-icon.png" alt="" />
                        <h1 className="text-xl font-semibold">NNI Team</h1>
                    </div>
                    <div className="flex max-[769px]:flex-wrap gap-2 justify-between mb-20">
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>
                        <div className="min-[769px]:w-[232px] max-[796px]:w-[171px]  pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] dark:bg-[#1F1F1F]">
                            <div>
                                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
                            </div>
                            <div className="mt-[25px]">
                                <h2>designer</h2>
                            </div>
                            <div className="w-full mt-[25px]">
                                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] dark:bg-[#2A2C38] text-md font-semibold">Behzad pashei</button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}
