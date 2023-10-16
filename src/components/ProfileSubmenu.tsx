import Image from 'next/image'
import { MapPinIcon, MessageSquareIcon, MoreVerticalIcon, PhoneIcon, UserIcon } from 'lucide-react'

import profileBanner from '../assets/4902908.jpg'

export const ProfileSubmenu = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-[160px] grid-stack">
        <Image
          src={profileBanner}
          width={319}
          height={160}
          alt=""
          className="h-[160px] object-cover"
        />
        <div className="bg-[linear-gradient(180deg,rgba(0,0,0,.5)_10%,rgba(0,0,0,0)_60%,rgba(0,0,0,.5)_100%)] p-2 pl-4">
          <div className="flex items-center justify-between text-white">
            <p className="text-lg font-medium leading-none">My Profile</p>
            <button className="inline-flex h-10 w-10 items-center justify-center">
              <MoreVerticalIcon width={22} height={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="-translate-y-10 border-b border-dashed border-border pb-6">
        <img
          src="https://github.com/joaom00.png"
          alt=""
          className="mx-auto h-20 w-20 rounded-full bg-white p-1 dark:bg-[#212529]"
        />
        <div className="mt-4 text-center">
          <p className="text-[17px] font-medium text-[#495057] dark:text-[#eff2f7]">João Pedro</p>
          <p className="text-sm text-[#9397ab]">Front end Developer</p>
        </div>
      </div>

      <div className="-mt-10 flex-1 overflow-y-auto p-6">
        <p className="text-sm leading-[21px] text-[#9397ab]">
          A professional profile is an introductory section on your resume that highlights your
          relevant qualifications and skills.
        </p>
        <ul className="mt-6 flex flex-col gap-6 border-b border-dashed border-border pb-5">
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <UserIcon width={19} height={19} />
            </span>
            <p className="text-sm text-[#495057] dark:text-[#eff2f7]">João Pedro</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <PhoneIcon width={19} height={19} />
            </span>
            <p className="text-sm text-[#495057] dark:text-[#eff2f7]">+(365) 1456 12584</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <MessageSquareIcon width={19} height={19} />
            </span>
            <p className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
              dushanedaniel@gmail.com
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <MapPinIcon width={19} height={19} />
            </span>
            <p className="text-sm text-[#495057] dark:text-[#eff2f7]">California, USA</p>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-4 border-b border-dashed border-border pb-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase text-[#9397ab]">Media</p>
            <p className="text-xs font-medium text-brand-primary">Show all</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[76px] w-[85px] rounded object-cover"
            />
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[76px] w-[85px] rounded object-cover"
            />
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[76px] w-[85px] rounded object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase text-[#9397ab]">Attached Files</p>
            <p className="text-xs font-medium text-brand-primary">Show all</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[58px] rounded border border-dashed border-border"></div>
            <div className="h-[58px] rounded border border-dashed border-border"></div>
            <div className="h-[58px] rounded border border-dashed border-border"></div>
            <div className="h-[58px] rounded border border-dashed border-border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
