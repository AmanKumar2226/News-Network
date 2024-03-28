import React from "react";

export default function AboutUs() {
    return(
    <>
        <div className="xl:container xl:mx-auto py-10" >
            <div className=" flex flex-col md:flex-row items-strech justify-center">
                <div className="md:w-3/5 relative">
                        <img src="https://i.ibb.co/2Y2W5h2/florian-klauer-mk7-D-4-UCfmg-unsplash-1.png" alt="A typewriter" role="img" className="absolute inset-0 object-cover object-center w-full h-full hidden lg:block rounded" />
                        <img src="https://i.ibb.co/PZRDh0s/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1-1.png" alt="A typewriter" role="img" className="absolute inset-0 object-cover object-center w-full h-full lg:hidden rounded" />
                        <img src="https://i.ibb.co/CsYRYtk/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1.png" alt="A typewriter" role="img" className="object-cover object-center w-full h-full md:hidden rounded" />   
                </div>
                <div className="md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:-ml-12 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
                    <div className="bg-gray-800 p-8 lg:p-10">
                        <p role="heading" className="text-base leading-none lg:text-xl lg:leading-tight text-white">About us</p>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-white mt-6 md:mt-4 lg:mt-8" >Here is all you need to know about us</p>
                        <p className="text-base leading-normal text-white mt-4 lg:mt-6">Welcome to NNI(News Network India), your go-to destination for breaking news, insightful analysis, and thought-provoking features from around the globe. We are dedicated to delivering accurate and timely information on a wide range of topics, including politics, technology, science, business, culture, and more.</p>
                    </div>
                </div>
               
            </div>
            <div className="mt-10 mx-5 bg-gray-900 p-10 py-20 rounded-2xl">
                    <h1 className="text-white text-3xl text-base text-center font-semibold mb-5">Our mission</h1>
                    <p className="text-white ">At NNI, we understand the importance of staying informed in today's fast-paced world. Our team of experienced journalists, writers, and editors works tirelessly to bring you the latest developments and trends, ensuring that you're always up-to-date with what's happening both locally and internationally. What sets us apart is our commitment to journalistic integrity and objectivity. We strive to present diverse perspectives and foster meaningful conversations on issues that matter most. Whether it's uncovering groundbreaking stories or providing in-depth analysis, we aim to empower our readers with knowledge and understanding.

In addition to news coverage, NNI also features opinion pieces, interviews, and multimedia content to offer a comprehensive view of the world around us. Our goal is not only to inform but also to inspire and engage our audience in meaningful dialogue.

Thank you for choosing NNI as your trusted source for news and information. Join us on this journey as we explore the stories shaping our world today and into the future.</p>
            </div>
        </div>
    </>
);
}