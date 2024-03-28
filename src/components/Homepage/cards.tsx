import TotalAssets from '@/assets/icons/total_assets.svg'
import ActiveClients from '@/assets/icons/active_clients.svg'
import Accounts from '@/assets/icons/accounts.svg'
import Wallets from '@/assets/icons/card_wallet.svg'
import UpDownArrow from '@/assets/icons/up_down_arrow.svg'
import Image from 'next/image'
const Cards = () => {

    const CardData = [
        {
            imageUrl: TotalAssets,
            amount: '$1,500,000',
            title: 'Total Assets',
        },
        {
            imageUrl: ActiveClients,
            amount: '178+',
            title: 'Active Clients',
        },
        {
            imageUrl: Accounts,
            amount: '20+',
            title: 'Accounts',
        },
        {
            imageUrl: Wallets,
            amount: '110+',
            title: 'Wallets',
        }
    ]

    return (
        <section>
            <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-[26px]'>
                {
                    CardData.map((data, index) => {
                        return (
                            <div className="py-8 rounded-[10px] shadow-md flex justify-center items-center bg-white" key={index}>
                                <div className='me-8'>
                                    <Image
                                        src={data.imageUrl}
                                        alt='Total Assets'
                                    />
                                </div>
                                <div>
                                    <div><p className='font-semibold text-[22px] text-[#030229] opacity-70'>{data.amount}</p></div>
                                    <div className='flex justify-center items-center'><p className='text-[14px] font-normal text-primary me-[24px]'>{data.title}</p>
                                        <Image
                                            src={UpDownArrow}
                                            alt='Up Down Arrow'
                                            width={17}
                                            height={11}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Cards;