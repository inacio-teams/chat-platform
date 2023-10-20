import Image from 'next/image'

import cover from '../../assets/auth-img.jpg'

const LoginPage = () => {
  return (
    <div className="grid-stack">
      <Image src={cover} alt="" />
      <div className="m-6 mx-auto flex w-full max-w-[807px] flex-col items-center rounded-[16px] bg-white p-6 shadow-[0_1rem_3rem_rgba(0,0,0,.09)]">
        <div className="text-center">
          <p className="mb-2 text-2xl font-medium text-[#495057]">Welcome Back!</p>
          <p className="text-sm text-muted">Sign in to continue to Vhato.</p>
        </div>
        <div className="w-full max-w-[369px] text-sm">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#495057]">Username</label>
              <input className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-medium text-[#495057]">Password</label>
                <span className="text-muted">Forgot password?</span>
              </div>
              <input
                type="password"
                className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mt-4 flex gap-3">
              <input type="checkbox" className="rounded border border-[#dbe2f1] bg-white" />
              <span className="font-medium text-[#495057]">Remember me</span>
            </label>
          </div>
          <button className="mt-6 inline-flex h-[39px] w-full items-center justify-center rounded bg-brand-primary text-white">
            Log In
          </button>
          <div className="mt-6 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#dbe2f1]" />
            <span className="font-medium text-[#495057]">Sign in with</span>
            <div className="h-px flex-1 bg-[#dbe2f1]" />
          </div>
          <div>
            <button>Facebook</button>
            <button>Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
