import React from "react";

export default function Contact() {
    return (
        <>
            <div className="relative h-full dark:text-white">
                <img src="https://i.ibb.co/8sk93vs/Group-216-1.png" alt="Background image" className="" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54891.75795072595!2d76.68240660000001!3d30.6977349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711604563092!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="container mx-auto w-full z-30  absolute bottom-0 right-0 lg:mb-32 mb-56 xl:w-3/12 lg:w-1/2 sm:w-8/12 w-11/12 lg:mr-20 md:mr-32">
                    <div className=" flex justify-center lg:justify-end px-4">
                        <div className="bg-white shadow rounded-lg p-8 sm:p-12 w-full">
                            <h1 className="text-xl sm:text-2xl font-semibold leading-normal text-gray-800">How can we help?</h1>
                            <div className="mt-4 sm:mt-16 flex flex-col w-full space-y-10">
                                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Name" />
                                <input type="email" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="E-mail" />
                                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Phone" />
                                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Group Or Company" />
                                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="How can we help?" />
                                <div>
                                    <button className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4b5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                                            <polyline points="9 15 12 12 15 15" />
                                            <line x1="12" y1="12" x2="12" y2="21" />
                                        </svg>
                                        <p className="text-sm sm:text-base text-gray-600">Upload File</p>
                                    </button>
                                </div>
                                <button className="flex bg-indigo-700 rounded justify-center items-center py-2 sm:py-4 text-xs sm:text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full relative z-20 bg-indigo-700 pt-20 pb-8 md:pt-16 md:pb-8 px-4">
                    <div className="container mx-auto flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between">
                        <div className="flex space-x-6 flex-row lg:space-x-0 sm:items-start justify-between lg:justify-center">
                            <div className="pr-4">
                                <h1 className="text-base sm:text-2xl font-medium text-white">Address</h1>
                                <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">Sector 75, Mohali</p>
                            </div>
                            <div className="">
                                <h1 className="text-base sm:text-2xl font-medium text-white">Contact</h1>
                                <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">www.newsnetwork.com</p>
                                <p className="text-xs sm:text-base leading-normal text-white">100100100</p>
                            </div>
                        </div>
                        <div className="flex items-center lg:items-end justify-center space-x-6">
                            <a href="#" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
                                <svg aria-label="open instagram" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                            </a>
                            <a href="#" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
                                <svg aria-label="open drible" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-basketball h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
                                    <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
                                    <path d="M12 3a9 9 0 0 0 9 9" />
                                    <path d="M3 12a9 9 0 0 1 9 9" />
                                </svg>
                            </a>
                            <a href="#" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
                                <svg aria-label="open twitter" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
                                <svg aria-label="open youtube" xmlns="http://www.w3.org/2000/svg " className="icon icon-tabler icon-tabler-brand-youtube h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="3" y="5" width="18" height="14" rx="4" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}