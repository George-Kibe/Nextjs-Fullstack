import React from 'react'

import Image from 'next/image'
import { missions, visions } from '@/data/data'

const Services = () => {
  const stats = [
    { id: 1, name: 'Satisfied customers', value: '100+' },
    { id: 2, name: 'Worth of properties under Management', value: 'Kshs 119m' },
    { id: 3, name: 'Sucessful feasibilities', value: '10+' },
  ]

  return (
    <div>
      <div className="py-4 sm:py-4">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold">services</h2>
          <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight sm:text-5xl">
            OUR SERVICES
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
                    Feasibility Studies
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                  Our feasibility studies go beyond traditional
                  analysis to incorporate sustainability factors. We
                  assess the environmental impact, resource
                  efficiency, and long-term viability of real estate
                  projects, providing insights that align with our
                  clients&apos; goals and objectives.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden">
                    <img
                      className="size-full object-cover object-top"
                      src="/properties/p8.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
                    Land Appraisal
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                  Through meticulous evaluation and analysis, we
                  determine the fair market value of land assets. Our
                  appraisals adhere to industry standards and
                  regulations, providing clients with accurate
                  assessments essential for transactions, financing,
                  and investment decisions.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="/properties/p2.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">Joint Venture</p>
                  <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                  We specialize in facilitating joint ventures between
                  landowners and developers, creating mutually
                  beneficial partnerships that leverage the strengths
                  and resources of both parties. Our expertise in
                  structuring and managing joint ventures ensures
                  successful project execution and maximized returns
                  on investment.
                  </p>
                </div>
                <div className="flex flex-1 justify-center items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover object-center self-center"
                    src="/properties/p10.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">
                    Property Management
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center">
                  Leveraging innovative marketing strategies and
                  channels, we showcase properties to targeted
                  audiences, maximizing exposure and engagement.
                  From digital platforms to traditional marketing
                  avenues, we employ a multi-faceted approach to
                  attract qualified buyers and tenants, driving
                  demand and optimizing property value.
                  </p>
                </div>
                
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden">
                    <img
                      className="size-full object-cover object-top"
                      src="/properties/p4.jpeg"
                      alt=""
                    />
                  </div>
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">OUR VISION</p>
                <div className="h-1 mt-4 w-1/6 bg-white" />
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  {visions.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 " />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="welcome-image"
              src="/properties/p3.jpeg"
              width={500}
              height={500}
              className="w-[24rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
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
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">OUR MISSON</p>
                <div className="h-1 mt-4 w-1/6 bg-white" />
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  {missions.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 " />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services