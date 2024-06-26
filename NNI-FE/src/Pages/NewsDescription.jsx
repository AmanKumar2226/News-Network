import React from 'react'

function NewsDescription() {
  return (
    <>
    <section className='mx-52 mb-32'>
        <div className='w-full flex gap-6'>
            <div className='w-[70%] rounded-xl bg-[#F5F5F5] p-8 w-[1072px] h-[598px] mt-11'>
                <h1 className='text-[32px] font-normal'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                <img  className="w-[1072px] h-[598px] my-8 rounded-xl" src="./images/dog2.png" alt="" />
            </div>
            <aside className='w-[30%] mt-11 gap-6 flex flex-col'>
            <div className='flex gap-2'>
                <div className='bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium'>
                    <img src="./images/send-icon.png" className='' alt="" />
                    Share</div>
                <div className='bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium'>
                <img src="./images/saved-icon.png" alt="" />
                    Marking</div>
                <div className='bg-[#F5F5F5] flex items-center py-3 pl-4 pr-6 gap-2 rounded-xl text-[#3E3232BF] font-medium'>
                <img src="./images/comment-icon.png" alt="" />
                    Comment</div>
            </div>
            <div className='bg-[#F5F5F5] flex gap-3 p-4 rounded-xl w-[90%]'>
                <div>
                    <img className='rounded-xl' src="./images/dog2.png" alt="" />
                </div>
                <div className=''>
                    <div className='flex gap-14 '>
                    <h1 className='text-[16px] font-medium py-3'>Louis Hoebregts</h1>
                    <h1 className='py-3 text-[#3E3232BF]'>27 post</h1>
                    </div>
                    <button className='flex gap-2 bg-[#F81539BF] text-white items-center py-3 pl-4 pr-6 rounded-xl'>
                        <img src="./images/plus-icon.png" alt="" />
                        Follow
                    </button>
                </div>
            </div>
            </aside>
        </div>
    </section>
    </>
  )
}

export default NewsDescription
