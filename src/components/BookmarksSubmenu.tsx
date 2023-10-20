import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { BiDotsHorizontal, BiFolderOpen, BiPencil, BiSearch, BiTrash } from 'react-icons/bi'

const files = [
  {
    id: 1,
    name: 'design-phase-1-approved.pdf',
    size: '12.5 MB',
    type: 'pdf',
    image: '/pdf-file.png',
  },
  {
    id: 2,
    name: 'Image-001.jpg',
    size: '4.2 MB',
    type: 'image',
    image: '/image-file.png',
  },
]

export const BookmarksSubmenu = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium">Bookmark</p>
        </div>
        <div className="flex items-center gap-3 overflow-hidden rounded bg-[#f8f9fa] px-4 text-sm dark:bg-[#2a2f34]">
          <span className="text-[#212529] dark:text-[#eff2f7]">
            <BiSearch />
          </span>
          <input
            placeholder="Search here..."
            className="h-[37px] w-full bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col gap-5 overflow-y-auto">
        <ul>
          {files.map((file) => (
            <li
              key={file.id}
              className="flex items-center gap-4 border-b border-border px-6 py-2.5"
            >
              <img src={file.image} alt="" className="h-[29px] w-[29px]" />
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm font-medium text-brand-primary">{file.name}</p>
                <p className="text-[13px] text-[#9397ab]">{file.size}</p>
              </div>
              <DropdownMenu>
                <button className="text-[#9397ab]">
                  <BiDotsHorizontal />
                </button>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          className="w-[160px] rounded border border-border bg-card py-2 text-sm"
        >
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Open
            <span className="text-[#9397ab]">
              <BiFolderOpen className="h-3.5 w-3.5" />
            </span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-[32.19px] items-center justify-between px-6 outline-none data-[highlighted]:bg-[#f8f9fa]  data-[highlighted]:text-[#1f2327] dark:data-[highlighted]:bg-[#282d31] dark:data-[highlighted]:text-[#ced4da]">
            Edit
            <span className="text-[#9397ab]">
              <BiPencil className="h-3.5 w-3.5" />
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
