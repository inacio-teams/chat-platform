import Link from 'next/link'
import Copyright from '@/src/components/Copyright'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

const RegisterPage = () => {
  return (
    <div className="m-6 flex h-fit w-full max-w-[807px] flex-col items-center place-self-center rounded-[16px] bg-white p-6 pb-5 pt-16 shadow-[0_1rem_3rem_rgba(0,0,0,.09)]">
      <div className="mb-10 text-center">
        <p className="mb-2 text-2xl font-medium text-[#495057]">Register Account!</p>
        <p className="text-sm text-muted">Get your free Vhato account now.</p>
      </div>
      <div className="w-full max-w-[369px] text-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#495057]">Email</label>
            <input
              placeholder="Enter email"
              className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#495057]">Username</label>
            <input
              placeholder="Enter username"
              className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#495057]">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
            />
          </div>
        </div>
        <p className="mt-4 text-[#495057]">
          By registering you agree to the Vhato <a className="text-brand-primary">Terms of Use</a>
        </p>
        <button className="mt-6 inline-flex h-[39px] w-full items-center justify-center rounded bg-brand-primary/90 text-white transition-colors duration-300 hover:bg-brand-primary">
          Register
        </button>
        <div className="my-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-[#dbe2f1]" />
          <span className="font-medium text-[#495057]">Sign up using</span>
          <div className="h-px flex-1 bg-[#dbe2f1]" />
        </div>
        <div className="flex gap-5">
          <button className="group inline-flex h-[38.6px] flex-1 items-center justify-center rounded bg-[rgba(80,165,241,.1)] text-[#50a5f1] transition-colors duration-300 hover:bg-[#50a5f1] hover:text-white">
            <BsFacebook className="mr-1 h-auto w-[14px] fill-[#50a5f1] transition-colors duration-300 group-hover:fill-white" />
            Facebook
          </button>
          <button className="group inline-flex h-[38.6px] flex-1 items-center justify-center rounded bg-[rgba(239,71,111,.1)] text-[#ef476f] transition-colors duration-300 hover:bg-[#ef476f] hover:text-white">
            <BsGoogle className="mr-1 h-auto w-[14px] fill-[#ef476f] transition-colors duration-300 group-hover:fill-white" />
            Google
          </button>
        </div>

        <p className="my-14 text-center text-muted">
          Already have an account?{' '}
          <Link
            href={{ pathname: '/login' }}
            className="inline-flex font-medium text-brand-primary underline transition-colors duration-300 hover:text-brand-primary/90"
          >
            Login
          </Link>
        </p>
      </div>

      <Copyright className="pt-10" />
    </div>
  )
}

export default RegisterPage
