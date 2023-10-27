import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

type CopyrightProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {}

const Copyright = ({ ...props }: CopyrightProps) => {
  return (
    <p className={twMerge('pt-14 text-[14px] font-normal text-[#9397ab]', props.className)}>
      &copy; {new Date().getFullYear()} Vhato. Crafted with{' '}
      <BsFillHeartFill className="mx-[4px] inline-flex h-auto w-[11px] fill-[#ef476f]" /> by
      Themesbrand
    </p>
  )
}

export default Copyright
