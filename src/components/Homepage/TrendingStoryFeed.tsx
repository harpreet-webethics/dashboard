import Image from "next/image";
import TrendingStoryFeedImage from '@/assets/images/trending_stories_feed.svg';
const TrendingStoryFeed = () => {
  const TrendingStoryFeed = [
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    },
    {
      imageUrl: TrendingStoryFeedImage,
      label: {
        labelName: 'Craig Bator -',
        labelDate: '27 Dec 2020'
      },
      heading: 'South Africa hammer injury-hit Sri Lanka Player'
    }
  ]
  return (

    <div className="flex flex-col w-full xl:w-[35%] overflow-y-auto">
      <div className="md:max-h-[50vh] space-y-3">
      {
        TrendingStoryFeed.map((data, index) => {
          return (
            <div className="w-full flex justify-start items-center" key={index} >
              <div>
                <Image
                  src={data.imageUrl}
                  width={90}
                  height={70}
                  alt="Trending Story Feed"
                  className="rounded"
                />
              </div>
              <div className="ps-[14px]">
                <div>
                  <div className="text-[10px]">
                    {data.label.labelName} <span className="text-[#393939] opacity-60">{data.label.labelDate}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[15px] font-normal text-[#393939] mt-2">
                    {data.heading}
                  </h3>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default TrendingStoryFeed;