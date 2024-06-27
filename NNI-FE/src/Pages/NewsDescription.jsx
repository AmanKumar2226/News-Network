import React from "react";
import Four from "../components/carousel-with-four-cards";

function NewsDescription() {
  return (
    <>
      <section className="mx-44 mb-32 dark:text-white">
        <div className="w-full flex gap-6">
          <div className="w-[70%] flex flex-col">
            <div className="rounded-xl bg-[#F5F5F5] p-8 h-[598px] mt-11">
              <h1 className="text-[32px] font-semibold font-['Roboto_Flex']">
                How to Spend the Perfect Day on Croatia’s Most Magical Island
              </h1>
              <img
                className="w-[1072px] h-[598px] my-8 rounded-xl"
                src="./images/dog2.png"
                alt=""
              />
            </div>
            <div className="font-['Roboto_Flex'] text-[14px] font-medium capitalize flex gap-[79px] mx-[250px] pb-[50px] pt-[130px]">
              <div className="flex gap-2 items-center">
                <img src="./images/date.png" alt="" />
                <h1>July 14 , 2022</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="./images/comment.png" alt="" />
                <h1>comments : 35</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src="./images/category.png" alt="" />
                <h1>
                  Category : <span>sport</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] font-['Roboto_Flex'] px-8">
              <div>
                <h1 className="text-[20px] font-semibold capitalize">
                  Don’t wait. The purpose of our lives is to be happy!
                </h1>
              </div>
              <div>
                <p className="text-[18px] font-normal lowercase leading-[34px]">
                  Upon arrival, your senses will be rewarded with the pleasant
                  scent of lemongrass oil used to clean the natural wood found
                  throughout the room, creating a relaxing atmosphere within the
                  space. <br />A wonderful serenity has taken possession of my
                  entire soul, like these sweet mornings of spring which I enjoy
                  with my whole heart. I am alone, and feel the charm of
                  existence in this spot, which was created for the bliss of
                  souls like mine. I am so happy, my dear friend, so absorbed in
                  the exquisite.
                </p>
              </div>
            </div>
            <div className="pt-[40px] pb-[40px] px-[128px]">
              <img
                className="rounded-xl"
                src="./images/sketsboards.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[15px] font-['Roboto_Flex'] pb-[70px] px-8">
              <div>
                <h1 className="text-[20px] font-semibold capitalize">
                  Not how long, but how well you have lived is the main thing.
                </h1>
              </div>
              <div>
                <p className="text-[18px] font-normal lowercase leading-[34px]">
                  When you are ready to indulge your sense of excitement, check
                  out the range of water- sports opportunities at the resort’s
                  on-site water-sports center. Want to leave your stress on the
                  water? The resort has kayaks, paddleboards, or the low-key
                  pedal boats. Snorkeling equipment is available as well, so you
                  can experience the ever-changing undersea environment. <br />{" "}
                  Not only do visitors to a bed and breakfast get a unique
                  perspective on the place they are visiting, they have options
                  for special packages not available in other hotel settings.
                  Bed and breakfasts can partner easily with local businesses
                  for a smoothly organized and highly personalized vacation
                  experience. The Fife and Drum Inn offers options such as the
                  Historic Triangle Package that includes three nights at the
                  Inn, breakfasts, and admissions to historic Williamsburg,
                  Jamestown, and Yorktown. Bed and breakfasts also lend
                  themselves to romance. <br /> Part of the charm of a bed and
                  breakfast is the uniqueness; art, décor, and food are
                  integrated to create a complete experience. For example, the
                  Fife and Drum retains the colonial feel of the area in all its
                  guest rooms. Special features include antique furnishings,
                  elegant four poster beds in some guest rooms, as well folk art
                  and artifacts from the restoration period of the historic area
                  available for guests to enjoy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-2 pb-[30px]">
                <img src="./images/red-icon.png" alt="" className="py-3" />
                <h1 className="text-2xl font-semibold">Comments</h1>
              </div>
              <div className="px-[20px] pt-[15px] pb-[140px] rounded-xl bg-[#F5F5F5] flex gap-[15px] flex-col mb-[330px]">
                <div className="flex justify-between">
                  <div className="flex gap-[10px] items-center">
                    <img
                      className="rounded-xl"
                      src="./images/comment1.png"
                      alt=""
                    />
                    <div className="flex flex-col gap-[4px] font-['Roboto_Flex']">
                      <h1 className="text-[16px] text-[#3E3232] font-semibold">
                        Jon Kantner
                      </h1>
                      <div className="flex gap-[8px] items-center">
                        <img src="./images/date.png" alt="" />
                        <h1>2022 04 July</h1>
                      </div>
                    </div>
                  </div>
                  <button className="py-[10px] pl-[16px] pr-[24px] flex items-center gap-[8px] bg-[#3E32320D] rounded-xl font-['Roboto_Flex'] text-[14px] font-semibold">
                    <img src="./images/reply-icon.png" alt="" />
                    Reply
                  </button>
                </div>
                <div>
                  <p className="capitalize">
                    When you are ready to indulge your sense of excitement,
                    check out the range of water- sports opportunities at the
                    resort’s on-site water-sports center. Want to leave your
                    stress on the water? The resort has kayaks, paddleboards, or
                    the low-key pedal boats.
                  </p>
                </div>
              </div>
              <div className="px-[20px] pt-[15px] rounded-xl bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.07)] flex gap-[35px] mx-[128px]  flex-col absolute top-[28%]">
                <div className=" flex-col flex gap-[15px]">
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <img
                        className="rounded-xl"
                        src="./images/reply1.png"
                        alt=""
                      />
                      <div className="flex flex-col gap-[4px] font-['Roboto_Flex']">
                        <h1 className="text-[16px] text-[#3E3232] font-semibold">
                          Cassie Evans
                        </h1>
                        <div className="flex gap-[8px] items-center">
                          <img src="./images/date.png" alt="" />
                          <h1>2022 04 July</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="capitalize">
                      a river or a lake island may be called an eyot or ait, and
                      a small island off the coast may be called a holm.
                      Sedimentary islands in the Ganges delta are called chars.
                      A grouping of geographically or geologically related
                      islands, such as the Philippines, is referred to as an
                      archipelago.{" "}
                    </p>
                  </div>
                </div>
                <div className=" flex-col flex gap-[15px] pb-[20px]">
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <img
                        className="rounded-xl"
                        src="./images/reply2.png"
                        alt=""
                      />
                      <div className="flex flex-col gap-[4px] font-['Roboto_Flex']">
                        <h1 className="text-[16px] text-[#3E3232] capitalize font-semibold">
                          behzad pashaei
                        </h1>
                        <div className="flex gap-[8px] items-center">
                          <img src="./images/date.png" alt="" />
                          <h1>2022 04 July</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="capitalize">
                      Oceanic islands are often considered to be islands that do
                      not sit on continental shelves. Other definitions limit
                      the term to only refer to islands with no past geological
                      connections to a continental landmass.The vast majority
                      are volcanic in origin, such as Saint Helena in the South
                      Atlantic Ocean.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-[20px] pt-[15px] pb-[20px] mb-[62px] rounded-xl bg-[#F5F5F5] flex gap-[15px] flex-col ">
                <div className="flex justify-between">
                  <div className="flex gap-[10px] items-center">
                    <img
                      className="rounded-xl"
                      src="./images/comment2.png"
                      alt=""
                    />
                    <div className="flex flex-col gap-[4px] font-['Roboto_Flex']">
                      <h1 className="text-[16px] text-[#3E3232] font-semibold">Patricia</h1>
                      <div className="flex gap-[8px] items-center">
                        <img src="./images/date.png" alt="" />
                        <h1>2022 04 July</h1>
                      </div>
                    </div>
                  </div>
                  <button className="py-[10px] pl-[16px] pr-[24px] flex items-center gap-[8px] bg-[#3E32320D] rounded-xl font-['Roboto_Flex'] text-[14px] font-semibold">
                    <img src="./images/reply-icon.png" alt="" />
                    Reply
                  </button>
                </div>
                <div>
                  <p className="capitalize">
                    An island (or isle) is an isolated piece of habitat that is
                    surrounded by a dramatically different habitat, such as
                    water. Very small islands such as emergent land features on
                    atolls can be called islets, skerries, cays or keys.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-2">
                <img src="./images/red-icon.png" alt="" className="py-3" />
                <h1 className="text-2xl font-semibold">Add a comment</h1>
              </div>
              <div className="font-['Roboto_Flex'] text-[16px] flex gap-[24px]">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <label className="font-semibold" htmlFor="">Name</label>
                    <input type="text" className="bg-[#F5F5F5] rounded-xl w-[488px] h-[48px]" />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <label className="font-semibold" htmlFor="">Website</label>
                    <input type="text" className="bg-[#F5F5F5] rounded-xl w-[488px] h-[48px]" />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <label className="font-semibold" htmlFor="">Email</label>
                    <input type="text" className="bg-[#F5F5F5] rounded-xl w-[488px] h-[48px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] ">
                  <label className="font-semibold" htmlFor="">Comment</label>
                  <textarea className="bg-[#F5F5F5] font-normal p-5 text-[#3E3232BF] rounded-xl w-[535px] h-[262px]" placeholder="Search anything" />
                </div>
              </div>
            </div>
          </div>

          <aside className="w-[30%] mt-11 gap-6 flex flex-col">
            <div className="flex justify-between">
              <div className="bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium">
                <img src="./images/send-icon.png" className="" alt="" />
                Share
              </div>
              <div className="bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium">
                <img src="./images/saved-icon.png" alt="" />
                Marking
              </div>
              <div className="bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium">
                <img src="./images/comment-icon.png" alt="" />
                Comment
              </div>
            </div>
            <div className="bg-[#F5F5F5] flex gap-3 p-4 rounded-xl">
              <div>
                <img className="rounded-xl" src="./images/dog2.png" alt="" />
              </div>
              <div className="">
                <div className="flex gap-28">
                  <h1 className="text-[16px] font-medium py-3">
                    Louis Hoebregts
                  </h1>
                  <h1 className="py-3 text-[#3E3232BF]">27 post</h1>
                </div>
                <button className="flex gap-2 bg-[#F81539BF] text-white items-center py-3 pl-4 pr-6 rounded-xl">
                  <img src="./images/plus-icon.png" alt="" />
                  Follow
                </button>
              </div>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl">
              <div className="flex gap-2 py-5 pl-4">
                <img src="./images/red-icon.png" className="py-3" alt="" />
                <h1 className="capitalize text-[20px] font-semibold text-[#3E3232]">
                  tags
                </h1>
              </div>
              <div className="flex flex-wrap text-[#3E3232BF] font-medium gap-4 pl-4 pb-3">
                <h1>Montenegro</h1>
                <h1>Visit Croatia</h1>
                <h1>Luxury Travel</h1>
                <h1>Travel Log</h1>
                <h1>Paradise Island</h1>
                <h1>Travel Info</h1>
              </div>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl pb-[20px]">
              <div className="flex gap-2 py-5 pl-4">
                <img src="./images/red-icon.png" className="py-3" alt="" />
                <h1 className="capitalize text-[20px] font-semibold text-[#3E3232]">
                  top post
                </h1>
              </div>
              <div className="flex gap-2 pl-4 items-center">
                <div className="w-[30%]">
                  <img src="./images/05.png" className="rounded-xl " alt="" />
                </div>
                <div>
                  <h1 className="capitalize text-[16px] font-semibold text-[#3E3232] pr-6">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <h1 className="capitalize text-[12px] font-medium text-[#3E3232]">
                    Subhead
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 pl-4 mt-5 items-center">
                <div className="w-[30%]">
                  <img src="./images/04.png" className="rounded-xl " alt="" />
                </div>
                <div>
                  <h1 className="capitalize text-[16px] font-semibold text-[#3E3232] pr-6">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <h1 className="capitalize text-[12px] font-medium text-[#3E3232]">
                    Subhead
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 pl-4 mt-5 items-center">
                <div className="w-[30%]">
                  <img src="./images/03.png" className="rounded-xl " alt="" />
                </div>
                <div>
                  <h1 className="capitalize text-[16px] font-semibold text-[#3E3232] pr-6">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <h1 className="capitalize text-[12px] font-medium text-[#3E3232]">
                    Subhead
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 pl-4 mt-5 items-center">
                <div className="w-[30%]">
                  <img src="./images/02.png" className="rounded-xl " alt="" />
                </div>
                <div>
                  <h1 className="capitalize text-[16px] font-semibold text-[#3E3232] pr-6">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <h1 className="capitalize text-[12px] font-medium text-[#3E3232]">
                    Subhead
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 pl-4 mt-5 items-center">
                <div className="w-[30%]">
                  <img src="./images/01.png" className="rounded-xl " alt="" />
                </div>
                <div>
                  <h1 className="capitalize text-[16px] font-semibold text-[#3E3232] pr-6">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <h1 className="capitalize text-[12px] font-medium text-[#3E3232]">
                    Subhead
                  </h1>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Four title="Related Posts" />
    </>
  );
}

export default NewsDescription;
