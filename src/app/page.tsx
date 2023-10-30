'use client'

import { useState } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import {
  BiBookmark,
  BiCog,
  BiDotsHorizontalRounded,
  BiDotsVerticalRounded,
  BiLockOpen,
  BiLogOut,
  BiMicrophone,
  BiSearch,
  BiSmile,
  BiSolidInfoCircle,
  BiSolidPhoneCall,
  BiSolidSend,
  BiUserCircle,
  BiVideo,
} from 'react-icons/bi'
import {
  RiBookmark3Line,
  RiContactsBookLine,
  RiDiscussLine,
  RiMoonLine,
  RiSettings4Line,
  RiUser3Line,
} from 'react-icons/ri'

import { BookmarksSubmenu } from '../components/BookmarksSubmenu'
import { ContactsSubmenu } from '../components/ContactsSubmenu'
import { MessagesSubmenu } from '../components/MessagesSubmenu'
import { ProfileSubmenu } from '../components/ProfileSubmenu'
import { SettingsSubmenu } from '../components/SettingsSubmenu'

const submenus = {
  profile: <ProfileSubmenu />,
  messages: <MessagesSubmenu />,
  contacts: <ContactsSubmenu />,
  bookmarks: <BookmarksSubmenu />,
  settings: <SettingsSubmenu />,
} satisfies Record<string, React.ReactNode>

const submenusNavigation: Array<{ id: keyof typeof submenus; icon: React.ReactNode }> = [
  {
    id: 'profile',
    icon: <RiUser3Line width={20} height={20} />,
  },
  {
    id: 'messages',
    icon: <RiDiscussLine width={20} height={20} />,
  },
  {
    id: 'contacts',
    icon: <RiContactsBookLine width={20} height={20} />,
  },
  {
    id: 'bookmarks',
    icon: <RiBookmark3Line width={20} height={20} />,
  },
  {
    id: 'settings',
    icon: <RiSettings4Line width={20} height={20} />,
  },
]

const submenusNavigationMobile: Array<{ id: keyof typeof submenus; icon: React.ReactNode }> = [
  {
    id: 'messages',
    icon: <RiDiscussLine width={20} height={20} />,
  },
  {
    id: 'contacts',
    icon: <RiContactsBookLine width={20} height={20} />,
  },
  {
    id: 'bookmarks',
    icon: <RiBookmark3Line width={20} height={20} />,
  },
]

export default function Home() {
  const [submenu, setSubmenu] = useState<keyof typeof submenus>('profile')
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <main className="flex h-screen w-full">
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-white dark:bg-[#1a1d21] lg:hidden">
        <nav>
          <ul className="flex h-[59px] items-center justify-between gap-3.5 px-20">
            {submenusNavigationMobile.map((item) => (
              <li key={item.id} onClick={() => setSubmenu(item.id)}>
                <button
                  className={clsx(
                    'flex h-[42px] w-[42px] items-center justify-center rounded-full text-[20px] leading-[42px] outline-none',
                    submenu === item.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-[#f6f6f9] text-[#878a92] dark:bg-[#2a2f34]',
                  )}
                >
                  {item.icon}
                </button>
              </li>
            ))}
            <li>
              <button
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92] dark:bg-[#2a2f34]"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              >
                <RiMoonLine width={20} height={20} />
              </button>
            </li>
            <li>
              <DropdownMenu align="end">
                <button className="flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full bg-[#f6f6f9] dark:bg-[#2a2f34]">
                  <img
                    src="https://github.com/joaom00.png"
                    alt=""
                    className="h-[42px] w-[42px] rounded-full p-[3px]"
                  />
                </button>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
      </div>
      <div className="z-10 hidden h-full w-[90px] flex-col bg-white px-2 shadow-[0_2px_4px_rgba(52,58,64,.12)] dark:bg-[#1a1d21] lg:flex">
        <a className="flex h-[70px] items-center justify-center leading-none">
          <span className="text-brand-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" />
            </svg>
          </span>
        </a>

        <div className="flex flex-1 flex-col justify-between pb-[7px]">
          <nav>
            <ul className="flex flex-col items-center gap-3.5">
              {submenusNavigation.map((item) => (
                <li key={item.id} onClick={() => setSubmenu(item.id)}>
                  <button
                    className={clsx(
                      'flex h-[42px] w-[42px] items-center justify-center rounded-full text-[20px] leading-[42px] outline-none',
                      submenu === item.id
                        ? 'bg-brand-primary text-white'
                        : 'bg-[#f6f6f9] text-[#878a92] dark:bg-[#2a2f34]',
                    )}
                  >
                    {item.icon}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-3.5">
            <button
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92] dark:bg-[#2a2f34]"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            >
              <RiMoonLine width={20} height={20} />
            </button>
            <DropdownMenu>
              <button className="flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full bg-[#f6f6f9] dark:bg-[#2a2f34]">
                <img
                  src="https://github.com/joaom00.png"
                  alt=""
                  className="h-[42px] w-[42px] rounded-full p-[3px]"
                />
              </button>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-59px)] w-full border-r border-border bg-card lg:h-screen lg:w-[320px]">
        {submenus[submenu]}
      </div>

      <div className="hidden h-full flex-1 flex-col lg:flex">
        <header className="flex items-center justify-between border-b border-dashed border-border px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[39px] w-[39px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">João Pedro</p>
              <span className="text-xs text-[#9397ab]">Online</span>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-2">
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiSearch className="h-[22px] w-[22px]" />
                </button>
              </li>
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiSolidPhoneCall className="h-[22px] w-[22px]" />
                </button>
              </li>
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiVideo className="h-[22px] w-[22px]" />
                </button>
              </li>
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiBookmark className="h-[22px] w-[22px]" />
                </button>
              </li>
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiSolidInfoCircle className="h-[22px] w-[22px]" />
                </button>
              </li>
              <li>
                <button className="inline-flex h-10 w-10 items-center justify-center text-[#9397ab]">
                  <BiDotsVerticalRounded className="h-[22px] w-[22px]" />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-10 overflow-y-auto p-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-fit rounded bg-[#2a2f34] px-5 py-3 text-sm">
              <p>Good morning</p>
            </div>
          ))}
        </div>
        <div className="flex h-[92px] gap-1 border-t border-border p-6">
          <button className="inline-flex h-[43px] w-[43px] items-center justify-center text-[#9397ab]">
            <BiDotsHorizontalRounded className="h-[22px] w-[22px]" />
          </button>
          <button className="inline-flex h-[43px] w-[43px] items-center justify-center text-[#9397ab]">
            <BiSmile className="h-[22px] w-[22px]" />
          </button>
          <div className="flex-1">
            <input
              placeholder="Type your message..."
              className="h-[43px] w-full rounded bg-[#f8f9fa] px-4 py-2 text-sm outline-none dark:bg-[#2a2f34]"
            />
            <span className="pl-4 text-[11px] font-medium">Victoria Lane is typing</span>
          </div>
          <button className="inline-flex h-[43px] w-[43px] items-center justify-center text-[#9397ab]">
            <BiMicrophone className="h-[22px] w-[22px]" />
          </button>
          <button className="inline-flex h-[43px] w-[43px] items-center justify-center rounded bg-brand-primary text-white">
            <BiSolidSend className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>
    </main>
  )
}

const DropdownMenu = ({
  align = 'start',
  children,
}: {
  align?: DropdownMenuPrimitive.DropdownMenuContentProps['align']
  children: React.ReactNode
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          className="z-20 w-[180px] rounded border border-border bg-card py-2 text-sm"
        >
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Profile
            <span className="text-[#9397ab]">
              <BiUserCircle className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Setting
            <span className="text-[#9397ab]">
              <BiCog className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Change Password
            <span className="text-[#9397ab]">
              <BiLockOpen className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Separator className="my-2 h-[0px] w-full border-t border-border" />
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Log out
            <span className="text-[#9397ab]">
              <BiLogOut className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
