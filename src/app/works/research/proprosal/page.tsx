export default function Proprosal(){
    return(
        <main>
            <h1 className="p-1 text-center text-3xl">Research Essay Proprosal | 11/6</h1>
        
            <div className="p-3">
            <h2 className="text-center text-xl">Inquiry</h2>
            <br />
            
            <h3 className="font-bold text-green-300">Using the ideas you’ve generated so far, describe the evolution of your topic. Where did your idea come from? What reading, discussion or topic led you to this inquiry? (One paragraph)
            </h3> <p>I knew I wanted to do something computer science-related, but also knew I didn’t want it to be AI-related. I ended up looking down the game developer skill roadmap from roadmap.sh, where I found a mention of networking. While I knew how to implement networking, I don’t know how networking works, so I thought I would use this opportunity to research on rarely considered technology that is foundational to the modern internet</p>
            <br />
            <div className="text-left">
                <h3 className="font-bold text-blue-300">What is your inquiry? What do you want to know? Why is this inquiry important or why does it matter to you? Why does it matter to your readers? List three open-ended research questions that relate to your inquiry. (One paragraph)</h3>
                <p>My original question was ‘How do computers communicate?’ but since it has to be debatable, my inquiries are
                </p>
                <ol className="list-decimal">
                    <li>What are the pros and cons of three different forms of inter-computer communication (TCP, UDP, USB) (Note: USB did not make it into the final essay)
                    </li>
                    <li>What voids, if any, are left unfilled by these methods of communication?</li>
                    <li>How were the different protocols developed?</li>
                </ol>
                <p>These are important to me to gain a better understanding of how the technologies my projects are built upon work, while it might be interesting to learn more about how the products you use actually work.</p>
            </div>
            <br />
            <h2 className="text-center text-xl">Methodology</h2>
            <br />
            <div >
            <h3 className="font-bold text-indigo-300">Where will you be looking for secondary sources and why? Briefly review and discuss the most important source(s) you have found so far. What do you still need to find?
            </h3>
            <p>For secondary sources, I want to look at technical documents like the USB specs, which details specific information about what USB can do and how it does it.I also want to look at simpler explanations. I already found summaries about UDP and TCP from Cloudflare, which is a server hosting company. </p>
            </div>
            <br />
            <div >
            <h3 className="font-bold text-violet-300">Will you be using primary sources at all and why? (Not required). How will you conduct this research?</h3>
            <p>I don’t plan to use primary sources, I am unsure of who I would contact as a  primary source (a networking professor?). I will conduct research through the ccny library, google scholar, and google search.</p>
            </div>
            </div>
        </main>
    )
}