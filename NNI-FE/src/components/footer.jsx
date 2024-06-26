import "../component-styles/footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="max-[769px]:hidden w-full flex">
          <div className="w-1/2 bg-[#F5F5F5] rounded-e-[50px] py-10 pr-10">
            <div className="flex flex-col">
              <div className="flex justify-around">
                <div className="flex flex-col">
                  <div className="w-[385px] text-justify pl-14 mb-5">
                    <div className="flex items-center mb-5">
                      <img
                        src="./images/red-icon.png"
                        alt=""
                        className="pr-2"
                      />
                      <h1 className="text-xl font-semibold">
                        News Network India
                      </h1>
                    </div>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                      cursus vitae congue mauris rhoncus aenean vel elit
                      scelerisque. In egestas erat imperdiet sed euismod nisi
                      porta lorem mollis. Morbi tristique senectus et netus.
                      Mattis pellentesque id nibh tortor id aliquet lectus proin
                    </p>
                  </div>
                  <div className="pl-14">
                    <h1 className="flex items-center text-xl font-semibold mb-3 mt-2">
                      <img
                        className="py-2 pr-2"
                        src="./images/red-icon.png"
                        alt=""
                      />
                      Newsletters
                    </h1>
                    <div class="relative mb-9">
                      <input
                        type="text"
                        id="input-group-1"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 dark:placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                      <div class="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-semibold flex">
                    <img
                      className="py-2 pr-2"
                      src="./images/red-icon.png"
                      alt=""
                    />
                    Categories
                  </h1>
                  <ul className="flex flex-col gap-2">
                    <li>Culture</li>
                    <li>Fashion</li>
                    <li>Featured</li>
                    <li>Food</li>
                    <li>Healthy Living</li>
                    <li>Technology</li>
                  </ul>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2 mt-16">
                      <img src="./images/red-icon.png" alt="" className="py-2"/>
                      <h1 className="text-xl font-semibold">Social Network</h1>
                    </div>
                    <div className="flex gap-5">
                      <button className="bg-[linear-gradient(263deg,#F45C9F_5.57%,#FF7563_73.65%)] text-white flex gap-5 items-center justify-center py-[10px] pl-[16px] pr-[24px] rounded-xl">
                        <img src="./images/instagram.png" alt="" />
                        <p>Instagram</p>
                      </button>
                      <button>
                        <img src="./images/twitter.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-5 gap-5 bg-[rgba(62,50,50,0.05)] w-[92%] rounded-e-[12px] pl-32">
                <div className="flex gap-2">
                  <h1 className="text-[14px]">Privacy Policy</h1>
                  <p>|</p>
                  <h1>Terms & Conditions</h1>
                </div>
                <div>
                  <h1 className="text-[14px]">All copyright (c) 2024 reserved</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 py-10 px-6 flex gap-5">
            <div className="w-1/2">
              <h1 className="flex text-xl font-semibold">
                <img src="./images/red-icon.png" alt="" className="py-2 pr-2"/>
                New Comments
              </h1>
              <div className="p-4 bg-[#F5F5F5] rounded-xl my-5">
                <h1 className="text-lg font-semibold">
                Ellsmartx
                </h1>
                <p>
                how nice does this look 😍 I feel it should be delicious, thank you
                </p>
              </div>
              <div className="p-4 bg-[#F5F5F5] rounded-xl my-5">
                <h1 className="text-lg font-semibold">
                cassia
                </h1>
                <p>
                Take a rest, i'll be cheer up you again in 2 next game go go go
                </p>
              </div>
              <div className="p-4 bg-[#F5F5F5] rounded-xl my-5">
                <h1 className="text-lg font-semibold">
                Amanda
                </h1>
                <p>
                you were stunning today, jan! 💗 great match 👍🏽👍🏽
                </p>
              </div>
              <div className="p-4 bg-[#F5F5F5] rounded-xl my-5">
                <h1 className="text-lg font-semibold">
                Denis Simonassi
                </h1>
                <p>
                It was a great match today Janzi! You did great😉🇩🇪
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="mb-5">
                <h1 className="flex text-xl font-semibold">
                  <img src="./images/red-icon.png" alt="" className="py-2 pr-2"/>
                  Follow our instagram
                </h1>
              </div>
              <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div>
                    <img className="rounded-xl" src="./images/car1.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/dance1.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/dog1.png" alt="" />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                    <img className="rounded-xl" src="./images/dance2.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/dog2.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/music.png" alt="" />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                    <img className="rounded-xl" src="./images/sport1.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/food1.png" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="./images/music1.png" alt="" />
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
