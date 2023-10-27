'use client'

import { useState } from 'react'
import Image from 'next/image'
import AvatarImg from '@/src/assets/avatar-1.jpg'
import Copyright from '@/src/components/Copyright'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const ChangePasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="m-2 flex h-fit w-full max-w-[807px] flex-col items-center place-self-center rounded-[16px] bg-white p-6 pb-8 pt-14 shadow-[0_1rem_3rem_rgba(0,0,0,.09)] sm:m-6">
      <h3 className="mb-14 text-[24.5px] font-medium leading-[29.4px] text-[#495057]">
        Change Password
      </h3>

      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-full border-4 border-gray-100">
          <Image src={AvatarImg} alt="" className="object-cover" />
        </div>

        <span className="mb-2 mt-4 text-[15px] font-medium leading-[18px] text-[#495057]">
          Dushane Daniel
        </span>
      </div>

      <form className="w-full max-w-[369.5px] space-y-4">
        <div className="flex w-full flex-col gap-2">
          <label className="text-[14px] font-medium leading-[21px] text-[#495057]">
            Old Password
          </label>

          <input
            placeholder="Enter Old Password"
            type="password"
            className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
          />
        </div>

        <div className="relative flex w-full flex-col gap-2">
          <label className="text-[14px] font-medium leading-[21px] text-[#495057]">
            New Password
          </label>

          <input
            placeholder="Enter New Password"
            type={showPassword ? 'text' : 'password'}
            className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[71%] -translate-y-1/2 fill-[#9397ab] text-gray-500"
          >
            {!showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
          </button>
        </div>

        <div className="flex w-full flex-col gap-2">
          <label className="text-[14px] font-medium leading-[21px] text-[#495057]">
            Confirm New Password
          </label>

          <input
            placeholder="Enter Confirm Password"
            type="password"
            className="h-[39px] w-full rounded border border-[#dbe2f1] bg-transparent px-4 py-2 text-sm text-[#495057] outline-none"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-2 pt-2 sm:flex-row sm:justify-between sm:space-y-0">
          <button
            type="submit"
            className="h-[39px] w-full max-w-full items-center justify-center rounded bg-brand-primary/90 text-white transition-colors duration-300 hover:bg-brand-primary sm:max-w-[174.75px]"
          >
            Save
          </button>

          <button className="h-[39px] w-full max-w-full items-center justify-center rounded bg-[#f6f6f9] text-[#212529] sm:max-w-[174.75px]">
            Cancel
          </button>
        </div>
      </form>

      <Copyright />
    </div>
  )
}

export default ChangePasswordPage
