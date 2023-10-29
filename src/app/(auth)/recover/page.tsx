import Link from 'next/link'
import Copyright from '@/src/components/Copyright'

const RecoverPage = () => {
  return (
    <div className="m-2 flex h-fit w-full max-w-[807px] flex-col items-center place-self-center rounded-[16px] bg-white p-6 pb-8 pt-14 shadow-[0_1rem_3rem_rgba(0,0,0,.09)] sm:m-6">
      <div className="mb-12 flex flex-col items-center justify-center">
        <h3 className="mb-2 text-[24.5px] font-medium leading-[29.4px] text-[#495057]">
          Reset Password
        </h3>
        <p className="text-sm font-normal text-[#9397ab]">Reset Password with Vhato.</p>
      </div>

      <div
        className="flex w-full max-w-[369.5px] items-center justify-center rounded bg-[#dcedfc] px-5 py-3 text-center text-sm font-normal text-[#306391]"
        role="alert"
      >
        Enter your Email and instructions will be sent to you!
      </div>

      <form className="mt-6 w-full max-w-[369.5px] space-y-4">
        <div className="flex w-full flex-col gap-2">
          <label className="text-[14px] font-medium leading-[21px] text-[#495057]">Email</label>

          <input
            placeholder="Enter Email"
            className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex h-[39px] w-full max-w-full items-center justify-center rounded bg-brand-primary/90 text-white transition-colors duration-300 hover:bg-brand-primary"
        >
          Reset
        </button>
      </form>

      <p className="my-12 text-sm font-normal text-[#9397ab]">
        Remember It ?{' '}
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

export default RecoverPage
