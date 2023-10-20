import Image from 'next/image'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { MoreVerticalIcon } from 'lucide-react'
import {
  BiBookmarks,
  BiDotsHorizontal,
  BiShareAlt,
  BiSolidDownload,
  BiTrash,
  BiUser,
} from 'react-icons/bi'
import { RiMapPin2Line, RiMessage2Line, RiPhoneLine } from 'react-icons/ri'

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
          className="mx-auto h-20 w-20 rounded-full bg-card p-1"
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
              <BiUser width={19} height={19} />
            </span>
            <p className="text-sm text-[#495057] dark:text-[#eff2f7]">João Pedro</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <RiPhoneLine width={19} height={19} />
            </span>
            <p className="text-sm text-[#495057] dark:text-[#eff2f7]">+(365) 1456 12584</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <RiMessage2Line width={19} height={19} />
            </span>
            <p className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
              dushanedaniel@gmail.com
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-[#9397ab]">
              <RiMapPin2Line width={19} height={19} />
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
            <div className="overflow-hidden rounded grid-stack">
              <img
                src="https://github.com/joaom00.png"
                alt=""
                className="h-[76px] w-[85px] rounded object-cover"
              />
              <div className="flex items-center justify-center bg-black/40 text-white">
                <span className="text-sm">+ 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase text-[#9397ab]">Attached Files</p>
            <p className="text-xs font-medium text-brand-primary">Show all</p>
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex h-[58px] items-center gap-2 rounded border border-dashed border-border p-3"
              >
                <Image src="/pdf-file.png" alt="" width={29} height={29} />
                <div className="flex flex-1 flex-col">
                  <span className="line-clamp-1 text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                    design-phase-1-approved.pdf
                  </span>
                  <span className="text-[13px] text-[#9397ab]">12.5 MB</span>
                </div>
                <div className="flex items-center gap-3 text-[#9397ab]">
                  <button>
                    <BiSolidDownload className="h-3.5 w-3.5" />
                  </button>
                  <DropdownMenu>
                    <BiDotsHorizontal className="h-3.5 w-3.5" />
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger>{children}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          className="w-[160px] rounded border border-border bg-card py-2 text-sm"
        >
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Share
            <span className="text-[#9397ab]">
              <BiShareAlt className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Bookmark
            <span className="text-[#9397ab]">
              <BiBookmarks className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Separator className="my-2 h-[0px] w-full border-t border-border" />
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Delete
            <span className="text-[#9397ab]">
              <BiTrash className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
