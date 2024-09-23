import Button from "@/components/Button";
import styles from "./page.module.css"
import Image from "next/image";
import HeroImage from "public/hero.png"

export default function Home() {
  return (
   <div className="flex flex-col md:flex-row items-center gap-5">
    <div className="flex-1 flex flex-col gap-2 md:gap-5 items-center">
      <h1 className="font-bold text-[25px] md:text-[50px]">
        Better design for your digital products.
      </h1>
      <p className="text">
        Turning your idea into a reality. We bring together teams from the tech industry.
      </p>
      <Button url={"./portfolio"} text={"See Our Works"}/>
    </div>
    <div className="flex-1">
      <Image src={HeroImage} alt="HeroImage" className={`w-full h-full ${styles.image}`} />
    </div>
   </div>
  )
}
