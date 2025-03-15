import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'

export default function TopBar() {
    return (
        <div className='flex items-center justify-between bg-[#F4F6F6] p-4 px-14'>
            <div className=" flex items-center p-2 py-0 rounded-md w-96 border border-[#D9D9D9] text-[#212337]">
                <FaSearch />
                <input type="text" placeholder='Serch' className='py-2 pl-4 border-none outline-none w-full' />
            </div>

            <div className="">
                <Image
                    src="/assets/user-icon.png"
                    alt="User Profile"
                    width={40}
                    height={40}
                    className="rounded-full "
                />
            </div>
        </div>
    )
}
