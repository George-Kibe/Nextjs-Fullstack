'use client'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from "next/image"

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Homescreen() {
  return (
    <div className="h-full w-full overflow-hidden py-24 sm:py-32">
      <Image
        alt="background"
        src="/properties/p1.jpeg"
        fill
        className="-z-10 h-full bg-repeat w-full object-cover brightness-50 opacity-80"
      />    
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="">
          <Image
            src="/buni-logo.png"
            alt="logo"
            width={300}
            height={300}
            className="mb-4 md:mb-20 opacity-70"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">REAL ESTATE CONSULT</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="h-1 w-1/6 bg-white" />
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          </dl>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Your partner in sustainable property development</h2>
      </div>

      <div className="overflow-hidden mt-24 py-4 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
              alt="welcome-image"
              src="/properties/p2.jpeg"
              width={500}
              height={500}
              className="w-[24rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">WELCOME TO OUR COMPANY</p>
                <div className="h-1 mt-4 w-1/6 bg-white" />
                <p className="mt-6 text-lg leading-8 text-justify">
                Welcome to Buni Real Estate Consult, where
                sustainable practices meet real estate innovation. We
                are dedicated to providing comprehensive
                consultation services tailored to meet the evolving
                needs of the modern real estate market. With a focus
                on sustainability, green initiatives, and affordability,
                we offer a range of services including feasibility
                studies, land appraisals, project finance, land and
                property agency, and property marketing.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
