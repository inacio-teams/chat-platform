import { PlusIcon, SearchIcon } from 'lucide-react'

export const MessagesSubmenu = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-6 px-6 pb-4 pt-6">
        <p className="text-xl font-medium">
          Messages <span className="text-[13px] text-brand-primary">(128)</span>
        </p>
        <div className="flex items-center gap-3 overflow-hidden rounded bg-[#f8f9fa] px-4 text-sm dark:bg-[#2a2f34]">
          <span className="text-[#212529] dark:text-[#eff2f7]">
            <SearchIcon width={14} height={14} />
          </span>
          <input
            placeholder="Search here..."
            className="h-[37px] w-full bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="h-full flex-1 overflow-y-auto">
        <p className="mb-4 mt-6 px-6 text-[11px] font-medium uppercase text-[#9397ab]">
          Favourites
        </p>
        <ul className="flex flex-col">
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="line-clamp-1 text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="line-clamp-1 text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="line-clamp-1 text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of someting bigger large yeah yeah doidao
              </span>
            </div>
          </li>
        </ul>

        <div className="mb-4 mt-12 flex items-center justify-between px-6">
          <p className="text-[11px] font-medium uppercase text-[#9397ab]">Direct Messages</p>
          <button className="inline-flex h-[28px] w-[30px] items-center justify-center rounded-[0.2rem] bg-[#06d6a0]">
            <PlusIcon width={12} height={12} />
          </button>
        </div>
        <ul className="flex flex-col">
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
          <li className="flex gap-2 px-6 py-2.5">
            <img
              src="https://github.com/joaom00.png"
              alt=""
              className="h-[35px] w-[35px] rounded-full"
            />
            <div className="flex flex-col justify-between leading-none">
              <span className="text-sm font-medium text-[#495057] dark:text-[#eff2f7]">
                Victoria Lane
              </span>
              <span className="text-[13px] text-[#9397ab]">
                Hey, I&apos;m going to meet a friend of
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
