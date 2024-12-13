import Image from "next/image"

export default function analysis(){
    return (
        <main>
        
        <h1 className="text-center font-bold text-3xl">Rhetorical Situation Analysis | Due 10/11</h1>
        <div>
            <Image alt="a fitbit" height={480} width={480} src={"/fitbit.png"}  ></Image>
        </div>
        <div className="p-5">
        <div className="text-left">
        <h2 className="font-bold text-xl">Author</h2>
        <h3 className="font-bold">Who wrote this text? What do we know about them?</h3>
        <p>It’s written by the Fitbit support team at Google. They are specialists in giving information about this product.</p>
        </div>
        <div className="text-right">
        <h2 className="font-bold text-xl">Audience</h2>
        <h3 className="font-bold"></h3>
        </div>
        <div className="text-left">
        <h2 className="font-bold text-xl">Text</h2>
        <h3 className="font-bold"></h3>
        <p></p>
        </div>
        <div className="text-right">
        <h2 className="font-bold text-xl">Purpose</h2>
        <h3 className="font-bold"></h3>
        <p></p>
        </div>
        <div className="text-left">
        <h2 className="font-bold text-xl">Context & Exigence</h2>
        <h3 className="font-bold"></h3>
        <p></p>
        </div>
        </div>
        
        
        </main>
    )
}