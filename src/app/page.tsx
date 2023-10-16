import {
  BookmarkIcon,
  Contact2Icon,
  MessageSquareIcon,
  MoonIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'

export default async function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="flex h-full w-[90px] flex-col px-2 shadow-[0_2px_4px_rgba(52,58,64,.12)]">
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
              <li>
                <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
                  <UserIcon width={20} height={20} />
                </a>
              </li>
              <li>
                <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
                  <MessageSquareIcon width={20} height={20} />
                </a>
              </li>
              <li>
                <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
                  <Contact2Icon width={20} height={20} />
                </a>
              </li>
              <li>
                <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
                  <BookmarkIcon width={20} height={20} />
                </a>
              </li>
              <li>
                <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
                  <SettingsIcon width={20} height={20} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-3.5">
            <a className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f9] text-[20px] leading-[42px] text-[#878a92]">
              <MoonIcon width={20} height={20} />
            </a>
            <div className="h-[42px] w-[42px] overflow-hidden rounded-full bg-[#f6f6f9]">
              <img
                src="https://github.com/joaom00.png"
                alt=""
                className="h-[42px] w-[42px] rounded-full p-[3px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[320px] border-r border-[#e6ebf5]">My Profile</div>
      <div className="h-full flex-1">Chat</div>
    </main>
  )
}
