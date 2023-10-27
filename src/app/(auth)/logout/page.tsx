import Copyright from '@/src/components/Copyright'
import { BsFillPersonFill } from 'react-icons/bs'

const LogoutPage = () => {
  return (
    <div className="m-2 flex h-fit w-full max-w-[492px] flex-col items-center space-y-5 place-self-center rounded-[16px] bg-white p-6 pb-8 pt-14 shadow-[0_1rem_3rem_rgba(0,0,0,.09)] sm:m-6">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#6153cc]/20">
        <BsFillPersonFill className="h-auto w-[35px] fill-[#6153cc]" />
      </div>

      <div className="mt-4 flex flex-col items-center justify-center">
        <h5 className="text-lg font-medium text-gray-700">You are Logged Out</h5>

        <p className="pt-2 text-[15px] font-normal text-[#9397ab]">
          Thank you for using{' '}
          <span className="font-semibold">
            <strong className="text-[#212529]">Vhato</strong>
          </span>
        </p>
      </div>

      <button className="mt-6 inline-flex h-[39px] w-full max-w-full items-center justify-center rounded bg-brand-primary/90 text-white transition-colors duration-300 hover:bg-brand-primary sm:max-w-[217px]">
        Sign In
      </button>

      <Copyright className="pt-10" />
    </div>
  )
}

export default LogoutPage
