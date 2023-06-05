import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import {notFound} from "next/navigation";

// Todo
// Create API to make blogs and specific blog pages dynamic

async function getBlogData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // next: { revalidate:10}, revalidate after every 10 seconds
    cache: "no-store"
  })
  if(!res.ok) {
    // throw new Error("Failed to fetch Data!")
    return notFound()
  }
  return res.json();
}

export async function generateMetadata({params}) {
  // const post = await getBlogData(params.id)
  return{
    title: params.id, //"This is the title", // post.title
    description: "Test Description" // post.description
  }
}


const BlogPage = async({params}) => {
  console.log(params)
  // const blog = await getBlogData(params.id)
  // console.log(blog)
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center mb-4">
        <div className="md:mx-10 relative h-64 w-64 md:h-80 md:w-80">
          <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
        </div>
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">RealHive Application</h1>
          <p className="mb-2 md:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae saepe sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
          </p>
          <div className="flex flex-row gap-2 items-center">
            <Image src={"/contact.png"} alt="Contact Image" width={50} height={50} 
              className='object-contain rounded-full'/>
            <p className="">John Doe</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos ratione quaerat similique beatae fuga explicabo aut, voluptas nostrum, fugiat natus, distinctio magni eveniet facilis. Recusandae, consectetur architecto vero officiis, excepturi explicabo dolorum natus, harum obcaecati possimus impedit? Quisquam, neque deleniti provident voluptatibus a inventore voluptates aperiam velit commodi doloribus, cupiditate id similique odit consequuntur error reiciendis sed aspernatur placeat accusamus, delectus dolores! Voluptates doloremque quidem, esse porro laborum necessitatibus enim quo. A odit nam dignissimos placeat explicabo! Illum labore temporibus sequi aut enim dolorem nesciunt dicta, quos eaque alias qui modi eligendi, suscipit soluta maxime voluptatibus aliquam? Beatae voluptatibus impedit adipisci dolorum excepturi suscipit et itaque, aut qui ea illum nostrum dolor ducimus a voluptatum hic! Autem, porro odio, reprehenderit rem, veritatis eveniet quidem error repudiandae vel adipisci quas eius reiciendis quia possimus at quae enim mollitia dolorem voluptas maxime. Omnis, in fuga laborum quis assumenda sit rerum vero adipisci veritatis eos maxime tenetur distinctio perspiciatis itaque animi libero accusantium quas doloremque dignissimos? Ipsam, voluptate facilis velit amet qui nesciunt a voluptatem impedit, eveniet voluptates quam quos? Aspernatur, enim sint. Dolorum, dolor explicabo. Perspiciatis et alias atque illum quod cumque iusto a libero? Facere debitis rem quis maiores nihil dignissimos ipsa sit obcaecati nulla in esse quo sed mollitia possimus eveniet ipsam reiciendis quos, repellendus eaque. Saepe voluptates libero inventore nobis temporibus, atque repudiandae beatae cum nihil enim. Dolorum sed illo, nobis minima a fugiat adipisci fuga excepturi! Nostrum minus reprehenderit nemo fugiat necessitatibus assumenda itaque, maxime earum totam rem debitis inventore qui velit ut, harum obcaecati vitae? Qui pariatur saepe placeat autem molestias, veritatis consequatur tenetur. Dolore, ducimus quo magni mollitia expedita praesentium! Tempora animi commodi quasi laboriosam repudiandae amet optio dolor porro, corrupti saepe molestiae debitis quia. Aut quaerat libero quo earum quis reiciendis ullam, ducimus blanditiis.
        </p>
      </div>
    </div>
  )
}

export default BlogPage