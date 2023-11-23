'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const router=useRouter();
  return (
   <div className=" flex items-center bg-cover w-screen h-screen bg-[url('/assets/background.jpg')]">
    <div className=" ml-10 ">
    <div className="mb-10 ">
    <Image src={"/assets/logo.svg"} alt="" height={300} width={400}/>
    </div>
   <div className=" text-center text-2xl text-gray-200">
    <h1>Deal with good quality  </h1>
    <h1>Eat everyday and Be healthy</h1>
   </div>
   <div className=" text-center self-end mt-40  text-black">
    <button className="bg-green-600 w-28 rounded-2xl" onClick={()=>router.push('/login')}>LogIn</button>
   </div>
   </div>

   </div>
  )
}
