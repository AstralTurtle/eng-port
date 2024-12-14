'use client'
import Image from "next/image"

export default function JobPacketCover(){
    return (
        <main>
        <h1 className="font-bold text-center text-3xl"> Job Packet | Due 9/26/24  </h1>
        <div className="flex justify-center align-middle p-5">
        <Image height={640} width={800  } alt="riot games games graphic" src="/jobpacketcover.jpg"/>
        </div>
        <div className="pl-10 pr-10">
        <h2>Prompt:</h2>
        <h2 className="text-center text-2xl">Sections:</h2>
        <ul className="list-disc underline text-sky-300 decoration-sky-300">
            <li><a href="/works/job-packet/overview">Company Overview</a></li>
            <li><a href="/works/job-packet/position-description">Position Description</a></li>
            <li><a href="/works/job-packet/resume">Resume</a></li>
            <li><a href="/works/job-packet/cover-letter">Cover Letter</a></li>
            <li><a href="/works/job-packet/email">Reference Request Email</a></li>
            <li><a href="/works/job-packet/pitch">Elevator Pitch</a></li>
            <li><a href="/works/job-packet/reflection">Reflection</a></li>
        </ul>
        </div>
    
        
        </main>
    )

}   