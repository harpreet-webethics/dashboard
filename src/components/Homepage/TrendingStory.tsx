import Image from "next/image";
import trendingStories from '@/assets/images/trendingstories-img.jpeg';
const TrendingStory = () => {

  return (
    <div className="flex flex-col md:flex-row w-full xl:w-[65%] mb-[40px]">
      <div className="flex-1">
        <Image
          src={trendingStories}
          width={419}
          height={250}
          alt="Trending Stories"
          className="w-full rounded mb-[15px] md:mb-0"
        />
      </div>
      <div className="flex flex-1 flex-col md:ps-5 md:pe-6">
        <div>
          <p className="text-[12px]">Craig Bator - <span className="text-[#393939] opacity-60">27 Dec 2020</span></p>
        </div>
        <div>
          <h2 className="text-[18px] text-[#393939] font-medium mt-1 md:mt-3">
            Solskjaer dismisses Klopp comments on Man Utd.
          </h2>
        </div>
        <div>
          <p className="text-[14px] text-[#717171] leading-[26px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate..
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrendingStory;