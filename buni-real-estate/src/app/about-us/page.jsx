import Image from "next/image"

const people = [
    {
      name: 'Mary Mukabi',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/mary.png',
    },
    {
      name: 'Gilbert Gituku',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/gilbert.png',
    },
    {
      name: 'Joan Kamau',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/joan.png',
    },
    {
      name: 'George Kibe',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/george.png',
    },
    {
      name: 'Naomi Mwendwa',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/naomi.png',
    },
    {
      name: 'Hamphrey Malala',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/hamphrey.png',
    },
    {
      name: 'Sharon Tuti',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/sharon.png',
    },
    {
      name: 'Effie Zuma',
      role: 'Real Estate Consultant',
      imageUrl:
        '/people/effie.png',
    },
  ]
  
  export default function Example() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image width={128} height={128} alt="" src={person.imageUrl} className="h-32 w-32 rounded-md" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-white/80">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  