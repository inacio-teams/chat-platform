import Image from 'next/image'
import Link from 'next/link'
import AvatarImg from '@/src/assets/avatar-1.jpg'
import Copyright from '@/src/components/Copyright'

const LockScreenPage = () => {
  return (
    <div className="m-2 flex h-fit w-full max-w-[807px] flex-col items-center place-self-center rounded-[16px] bg-white p-6 pb-8 pt-14 shadow-[0_1rem_3rem_rgba(0,0,0,.09)] sm:m-6">
      <div className="mb-12 flex flex-col items-center justify-center">
        <h3 className="mb-2 text-[24.5px] font-medium leading-[29.4px] text-[#495057]">
          Lock screen
        </h3>
        <p className="text-sm font-normal text-[#9397ab]">
          Enter your password to unlock the screen!
        </p>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-full border-4 border-gray-100">
          <Image src={AvatarImg} alt="" className="object-cover" />
        </div>

        <span className="mb-2 mt-4 text-[15px] font-medium leading-[18px] text-[#495057]">
          Kathryn Swarey
        </span>
      </div>

      <form className="w-full max-w-[369.5px] space-y-4">
        <div className="flex w-full flex-col gap-2">
          <label className="text-[14px] font-medium leading-[21px] text-[#495057]">Password</label>

          <input
            placeholder="Enter Password"
            type="password"
            className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex h-[39px] w-full max-w-full items-center justify-center rounded bg-brand-primary/90 text-white transition-colors duration-300 hover:bg-brand-primary"
        >
          Unlock
        </button>
      </form>

      <p className="my-12 text-sm font-normal text-[#9397ab]">
        Not you ? return{' '}
        <Link
          href={{ pathname: '/login' }}
          className="inline-flex font-medium text-brand-primary underline transition-colors duration-300 hover:text-brand-primary/90"
        >
          Login
        </Link>
      </p>

      <Copyright className="pt-10" />
    </div>
  )
}

export default LockScreenPage
