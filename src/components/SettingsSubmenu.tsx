import React, { useState } from 'react'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'
import * as Select from '@radix-ui/react-select'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'
import {
  BiCheck,
  BiChevronDown,
  BiSolidCheckShield,
  BiSolidCircle,
  BiSolidHelpCircle,
  BiSolidLock,
  BiSolidPencil,
  BiSolidSave,
  BiSolidUser,
} from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'

import profileBanner from '../assets/4902908.jpg'
import { ScrollAreaDemo } from './ScrollArea'

export const SettingsSubmenu = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-[160px] grid-stack">
        <Image
          src={profileBanner}
          width={319}
          height={160}
          alt=""
          className="h-[160px] object-cover"
        />
        <div className="bg-[linear-gradient(180deg,rgba(0,0,0,.5)_10%,rgba(0,0,0,0)_60%,rgba(0,0,0,.5)_100%)] p-4">
          <div className="flex items-center justify-between text-white">
            <p className="text-lg font-medium leading-none">Settings</p>
            <button className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f9fa] text-[#495057] dark:bg-[#2a2f34] dark:text-[#ced4da]">
              <BiSolidPencil className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="-translate-y-10 border-b border-border pb-6">
        <img
          src="https://github.com/joaom00.png"
          alt=""
          className="mx-auto h-20 w-20 rounded-full bg-card p-1"
        />
        <div className="mt-4 flex items-center justify-center gap-1 text-center">
          <span className="text-[#06d6a0]">
            <BiSolidCircle className="h-2.5 w-2.5" />
          </span>
          <p className="text-sm text-[#9397ab]">Active</p>
          <span className="text-[#9397ab]">
            <BiChevronDown className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="-mt-10 flex-1 overflow-hidden">
        <ScrollAreaDemo>
          <Accordion.Root type="single" collapsible className="divide-y-[1px] divide-border">
            <Accordion.Item value="personal">
              <AccordionTrigger Icon={BiSolidUser}>Personal Info</AccordionTrigger>
              <AccordionContent>
                <PersonalContent />
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item value="privacy">
              <AccordionTrigger Icon={BiSolidLock}>Privacy</AccordionTrigger>
              <AccordionContent>
                <PrivacyContent />
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item value="security">
              <AccordionTrigger Icon={BiSolidCheckShield}>Security</AccordionTrigger>
              <AccordionContent>
                <SecurityContent />
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item value="help">
              <AccordionTrigger Icon={BiSolidHelpCircle}>Help</AccordionTrigger>
              <AccordionContent>
                <HelpContent />
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </ScrollAreaDemo>
      </div>
    </div>
  )
}

const AccordionTrigger = ({
  Icon,
  children,
}: {
  Icon: React.ComponentType<React.ComponentProps<'svg'>>
  children: React.ReactNode
}) => {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger className="group flex h-[53px] flex-1 items-center justify-between border-b-border px-5 leading-none text-[#495057] outline-none transition-colors  hover:text-brand-primary data-[state=open]:border-b dark:text-[#ced4da] dark:hover:text-brand-primary">
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="inline-flex h-[29px] w-[29px] items-center justify-center rounded bg-[rgba(80,165,241,.2)] text-[#50a5f1]">
            <Icon className="h-3.5 w-3.5" />
          </div>
          {children}
        </div>
        <RiArrowDownSLine className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
      <div className="p-5">{children}</div>
    </Accordion.Content>
  )
}

const PersonalContent = () => {
  const [readOnly, setReadOnly] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="text-[13px] font-medium text-[#9397ab]">
            Name
          </label>
          <button
            className="inline-flex h-[15px] w-[23px] items-center justify-center rounded bg-[#f8f9fa] text-[#9397ab] outline-none dark:bg-[#2a2f34]"
            onClick={() => setReadOnly(!readOnly)}
          >
            {readOnly ? (
              <BiSolidPencil className="h-2.5 w-2.5" />
            ) : (
              <BiSolidSave className="h-2.5 w-2.5" />
            )}
          </button>
        </div>
        <input
          id="name"
          readOnly={readOnly}
          value="Dushane Daniel"
          className="h-[39px] w-full rounded border border-input-border bg-transparent px-4 text-sm outline-none read-only:bg-input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="text-[13px] font-medium text-[#9397ab]">
            Email
          </label>
        </div>
        <input
          id="email"
          type="email"
          readOnly={readOnly}
          value="dashanedaniel@vhato.com"
          className="h-[39px] w-full rounded border border-input-border bg-transparent px-4 text-sm outline-none read-only:bg-input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="phone" className="text-[13px] font-medium text-[#9397ab]">
            Phone No
          </label>
        </div>
        <input
          id="phone"
          readOnly={readOnly}
          value="+(245) 4577 14523"
          className="h-[39px] w-full rounded border border-input-border bg-transparent px-4 text-sm outline-none read-only:bg-input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="location" className="text-[13px] font-medium text-[#9397ab]">
            Location
          </label>
        </div>
        <input
          id="location"
          readOnly={readOnly}
          value="California, USA"
          className="h-[39px] w-full rounded border border-input-border bg-transparent px-4 text-sm outline-none read-only:bg-input"
        />
      </div>
    </div>
  )
}

const PrivacyContent = () => {
  return (
    <div>
      <p className="mb-5 text-sm font-medium text-[#495057] dark:text-[#ced4da]">
        Who can see my personal info
      </p>
      <div className="flex flex-col gap-5 text-[13px]">
        <div className="flex items-center justify-between">
          <span className="font-medium">Profile photo</span>
          <SelectDemo />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Status</span>
          <SelectDemo />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Groups</span>
          <SelectDemo />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Last seen</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Read receipts</span>
          <Switch />
        </div>
      </div>
    </div>
  )
}

const Switch = () => {
  return (
    <SwitchPrimitive.Root
      className="relative h-[14px] w-[28px] rounded-full border border-border outline-none data-[state=checked]:bg-brand-primary"
      id="airplane-mode"
      style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
    >
      <SwitchPrimitive.Thumb className="block h-[8px] w-[8px] translate-x-0.5 rounded-full bg-white transition-transform duration-150 will-change-transform data-[state=checked]:translate-x-[16px]" />
    </SwitchPrimitive.Root>
  )
}

const SecurityContent = () => {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <span className="font-medium">Show security notification</span>
      <Switch />
    </div>
  )
}

const HelpContent = () => {
  return (
    <div className="flex flex-col gap-5 text-[13px]">
      <span className="font-medium">FAQs</span>
      <span className="font-medium">Contact</span>
      <span className="font-medium">Terms & Privacy policy</span>
    </div>
  )
}

const SelectDemo = () => (
  <Select.Root defaultValue="everyone">
    <Select.Trigger
      className="data-[placeholder]:text-violet9 inline-flex h-[28px] min-w-[88px] items-center justify-between gap-[5px] rounded-[0.2rem] border border-border px-2 text-[12px] leading-none outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="text-violet11">
        <BiChevronDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="w-[--radix-select-content-width] overflow-hidden rounded-md border border-border bg-card">
        <Select.Viewport className="p-[5px]">
          <SelectItem value="everyone">Everyone</SelectItem>
          <SelectItem value="selected">Selected</SelectItem>
          <SelectItem value="nobody">Nobody</SelectItem>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={clsx(
        'text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 relative flex select-none items-center rounded-[0.2rem] p-1 pl-6 text-[12px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-500 data-[highlighted]:outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[24px] items-center justify-center">
        <BiCheck />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

SelectItem.displayName = 'SelectItem'
