import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="">
        <div className="w-[80%] bg-[#F5F5F5] rounded-xl my-10 p-8 mx-44">
          <div className="mb-10">
            <h1 className="text-4xl font-semibold">
              We pay attention to your needs and do the best design.
            </h1>
          </div>
          <div className="flex gap-14">
            <div className="w-1/2 text-lg">
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
            <div className="w-1/2">
              <img
                className="w-[744px] h-[444px] rounded-xl"
                src="./images/abstract-video.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex my-20 gap-12">
        <div className="w-[60%] flex justify-end p-8  items-center rounded-[0px_50px_50px_0px] h-[361px] bg-[#F5F5F5]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018.4963018700189!2d76.68827997053899!3d30.69731441504843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe02b751aa3%3A0xe34a68768b59b3ac!2stecHangouts%20-%20Industrial%20Training%20Company%20in%20Mohali%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1719300683199!5m2!1sen!2sin"
            width="840"
            height="297"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div >
            <div className="flex gap-2 mt-5">
                <img className="py-3" src="./images/red-icon.png" alt="" />
                <h1 className="text-lg font-semibold">NNI Information</h1>
            </div>
            <div className="border-l-4">
                <div className="flex gap-4 pl-3 my-7">
                    <img src="./images/email-icon.png" alt="" />
                    <p className="font-semibold text-sm">Email : management@nni.com</p>
                </div>
                <div className="flex gap-4 pl-3 my-7">
                    <img src="./images/phone-icon.png" alt="" />
                    <p className="font-semibold text-sm">Phone number : +1(234) 567-8910</p>
                </div>
                <div className="flex gap-4 pl-3 my-7">
                    <img src="./images/fax-icon.png" alt="" />
                    <p className="font-semibold text-sm">fax : +1(234) 567-8910</p>
                </div>
                <div className="flex gap-4 pl-3 my-7">
                    <img src="./images/address-icon.png" alt="" />
                    <p className="font-semibold text-sm">Address : 1234 Foxrun St.New Lenox, IL 123456</p>
                </div>
            </div>
            <div className="flex gap-2 px-[22px] py-[10px] bg-[#F5F5F5] rounded-xl items-center">
                <img className="h-[20px]" src="./images/timer.png" alt="" />
                <p className="font-semibold">Responding 24 hours a day, 7 days a week</p>
            </div>
        </div>
        </div>
        <div className="mx-32 my-10">
            <div className="flex gap-2 my-10 items-center">
                <img className="py-3" src="./images/red-icon.png" alt="" />
                <h1 className="text-xl font-semibold">NNI Team</h1>
            </div>
            <div className="flex justify-between mb-20">
            <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        <div className="w-[232px] pt-[20px] p-[10px] flex flex-col items-center rounded-xl shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)]">
            <div>
                <img className="w-[124px] h-[124px] rounded-xl border-2" src="./images/logo.jpg" alt="" />
            </div>
            <div className="mt-[25px]">
                <h2>designer</h2>
            </div>
            <div className="w-full mt-[25px]">
                <button className="rounded-xl py-[14px] w-full bg-[#F5F5F5] text-md font-semibold">Behzad pashei</button>
            </div>
        </div>
        
            </div>
           
            
        </div>
        
      </div>
    </>
  );
}
