import React from 'react'
import { Mail, MapPinIcon, PhoneCallIcon} from 'lucide-react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-center">
        <Image 
          src="/properties/p10.jpeg"
          width={500}
          height={500}
          className="md:m-4"
        />
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
            {/* <span className="mb-4 block text-base font-semibold text-primary">
                Contact Us
            </span> */}
            <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                OUR CONTACT
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Get in touch with us
            </p>
            <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <MapPinIcon />
                </div>
                <div className="w-full">
                <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                95 Riverside Drive, 
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                Keystone Park Block A, 3rd Floor
                </p>
                </div>
            </div>
            <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <PhoneCallIcon />
                </div>
                <div className="w-full">
                <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                    +254706908580
                </p>
                </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <Mail />
                </div>
                <div className="w-full">
                <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                bunirealestateconsult@gmail.com
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="">
          <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                    Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                    dolore.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Subscribe
                    </button>
                    </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </dd>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    <dt className="mt-4 font-semibold text-white">No spam</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                    </dd>
                    </div>
                </dl>
                </div>
            </div>
            <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
            </div>
            </div>

        </div>
    </div>
  )
}

export default ContactUs