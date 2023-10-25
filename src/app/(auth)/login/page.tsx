'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { RiCheckFill } from 'react-icons/ri'

const LoginPage = () => {
  return (
    <div className="m-6 flex h-fit w-full max-w-[807px] flex-col items-center place-self-center rounded-[16px] bg-white p-6 py-16 shadow-[0_1rem_3rem_rgba(0,0,0,.09)]">
      <div className="mb-10 text-center">
        <p className="mb-2 text-2xl font-medium text-[#495057]">Welcome Back!</p>
        <p className="text-sm text-muted">Sign in to continue to Vhato.</p>
      </div>
      <div className="w-full max-w-[369px] text-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#495057]">Username</label>
            <input
              placeholder="Enter username"
              className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-medium text-[#495057]">Password</label>
              <span className="text-muted">Forgot password?</span>
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
            />
          </div>
        </div>
        <div>
          <label className="mt-4 flex items-center gap-2">
            <Checkbox.Root className="flex h-4 w-4 items-center justify-center rounded border border-[#dbe2f1] text-white data-[state=checked]:bg-brand-primary">
              <Checkbox.Indicator>
                <RiCheckFill width={10} height={10} className="h-3 w-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="font-medium text-[#495057]">Remember me</span>
          </label>
        </div>
        <button className="mt-6 inline-flex h-[39px] w-full items-center justify-center rounded bg-brand-primary text-white">
          Log In
        </button>
        <div className="my-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-[#dbe2f1]" />
          <span className="font-medium text-[#495057]">Sign in with</span>
          <div className="h-px flex-1 bg-[#dbe2f1]" />
        </div>
        <div className="flex gap-5">
          <button className="inline-flex h-[38.6px] flex-1 items-center justify-center rounded bg-[rgba(80,165,241,.1)] text-[#50a5f1]">
            Facebook
          </button>
          <button className="inline-flex h-[38.6px] flex-1 items-center justify-center rounded bg-[rgba(239,71,111,.1)] text-[#ef476f]">
            Google
          </button>
        </div>

        <p className="my-14 text-center text-muted">
          Don&apos;t have an account ?{' '}
          <a className="font-medium text-brand-primary underline">Register</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
