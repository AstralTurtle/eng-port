'use client'
import Image from "next/image"
import Link from 'next/link';

export default function Home() {
  return (
  <main className="">
  <div className="flex-auto flex-col align-middle min-h-10 p-5" >


  <h1 className="text-ellipsis overflow-hidden text-center"> Hi, I'm Aaron James. I'm a <span className="font-bold text-blue-500">gamer</span>, <span className="font-bold text-indigo-500">game dev</span>, and <span className="font-bold text-violet-500">software engineer</span>. I'm a student of the <span className="font-bold text-red-700">Macaulay Honors College</span> at <span className="font-bold text-purple-800">CCNY</span>...</h1>
  <h3 className="text-right">    - Read more in my <Link href="/works/job-packet" className="text-sky-300 underline decoration-sky-300">job packet</Link></h3>
  </div>

  <h1>Over the course of the semester...</h1>



  </main>

  );
}
  