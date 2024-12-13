import Image from "next/image"

export default function JobPacketCover(){
    return (
        <main>
        <h1 className="font-bold text-center text-3xl"> Job Packet | Due 9/26/24  </h1>
        <div className="flex justify-center align-middle p-5">
        <Image height={640} width={800  } alt="riot games games graphic" src="/jobpacketcover.jpg"/>
        </div>
        <div className="pl-10 pr-10">
        <h2 className="text-center text-2xl">Sections:</h2>
        <ul className="list-disc underline text-sky-300 decoration-sky-300">
            <li><a href="/overview">Company Overview</a></li>
            <li><a href="/position-description">Position Description</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/cover-letter">Cover Letter</a></li>
            <li><a href="/email">Reference Request Email</a></li>
            <li><a href="/pitch">Elevator Pitch</a></li>
            <li><a href="/reflection">Reflection</a></li>
        </ul>
        </div>
    
        
        </main>
    )

}   