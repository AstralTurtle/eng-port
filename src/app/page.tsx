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
  <h1 className="font-bold text-center text-3xl"> Reflection Essay | Due 12/13/24  </h1>
  <h3>Prompt: Your task is to reflect and then to show, with explicit claims and supporting evidence, how you’ve developed as a writer and thinker this semester. </h3>
  
  <div className="p-3">
  <p>During my first semester at CCNY, I had many opportunities and experiences that shaped my transition from high school to college student. One of the most useful of these experiences was English 21007, Writing for Engineers. In Writing for Engineers I learned how to research jobs, analyze rhetorical situations, communicate professionally, and find and cite sources.</p>
  <br />
  <p>I feel a portion of my getting an internship at Bloomberg in the summer of 2024 was due to luck. As my work on the job packet showed me, I did not do nearly as much research into the listing as I should’ve. Part of that was due to it being one of the few opportunities and the way it just fell into my lap before I held onto it for (metaphorically) dear life. A great example of this is my cover letter. The cover letter I wrote for the job packet acknowledges how long I have been working towards a career, stating “In the past 4 years, I have done much work on games in the form of personal and school projects. Through those projects, I gained experience with the Unity, Godot, and Unreal Engine. “ In contrast, my cover letter for Bloomberg stated only how the classes I was working on at the time would translate to their expectations.</p>
  <br />
  <p>Before this semester, I would not be able to tell you what a rhetorical situation was. I knew authors had biases, reasons to write, and audiences to write to, but if you gave me the term rhetorical situation or even exigence I would not be able to tell you what they were. Over the semester, I learned about exigence and rhetorical situations and used them to help organize my writing. In phase 2, I was able to analyze the exigence of a text and how it affected a writing situation, stating “The text responds to media coverage about the environmental dangers of the lithium mining for EV batteries as well as the concerns of EV buyers. It is published in 2024, and wants to alleviate concerns over EVs.” This helped me acknowledge the power of voice in writing.</p>
  <br />
  <p>It lead to me finding my voice, or more specifically developing a more professional voice in writing. At the start of phase 2, I described my writing voice as ‘similar to how I talk’. At the end of phase 4, I said my writing voice was “ succinct, and it kinda goes between really casual and formal depending on what I'm writing. I tend to prefer casual writing, and it takes me a while to get in the headspace for formal writing.” While it is not perfect, it shows that I made progress toward being more professional over the semester.</p>
  <br />
  <p>Lastly, for my phase 4 research essay, I took a week to find the 4 sources I cited for the essay. The difficulty of finding and reading sources led me to cut out part of the essay because it was too difficult to read and cite the source I had for it in the time frame to complete the essay. However, for my final speech in another class, my experience citing sources in led me to cite 4 sources covering different information to form my final speech.</p>
  <br />
  <p>In conclusion, I have greatly enjoyed my time in this class, and have learned many lessons over the semester that will be immensely useful for my professional career.
  </p>
  <br />
  </div>



  </main>

  );
}
  