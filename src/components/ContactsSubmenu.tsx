import { BiDotsVertical, BiPlus, BiSearch } from 'react-icons/bi'

const contacts = {
  a: [{ name: 'Adinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  b: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  c: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  d: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  e: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  f: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  g: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
  h: [{ name: 'Bdinda Kirana', avatarUrl: 'https://github.com/joaom00.png' }],
}

export const ContactsSubmenu = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-4 px-6 pb-7 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium">Contacs</p>
          <button className="inline-flex h-[28px] w-[30px] items-center justify-center rounded-[0.2rem] bg-[rgba(6,214,160,.1)] text-[#06d6a0]">
            <BiPlus className="h-3 w-3" />
          </button>
        </div>
        <div className="flex items-center gap-3 overflow-hidden rounded bg-[#f8f9fa] px-4 text-sm dark:bg-[#2a2f34]">
          <span className="text-[#212529] dark:text-[#eff2f7]">
            <BiSearch />
          </span>
          <input
            placeholder="Search contacts..."
            className="h-[37px] w-full bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col gap-5 overflow-y-auto">
        {Object.entries(contacts).map(([letter, contacts]) => (
          <div key={letter}>
            <div className="sticky top-0 z-10 flex items-center gap-4 bg-card pl-6">
              <span className="text-xs font-medium uppercase text-brand-primary">{letter}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ul className="px-6 pt-2">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <img src={contact.avatarUrl} className="h-[28.8px] w-[28.8px] rounded-full " />
                    <span>{contact.name}</span>
                  </div>
                  <span className="text-[#9397ab]">
                    <BiDotsVertical className="h-3.5 w-3.5" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
