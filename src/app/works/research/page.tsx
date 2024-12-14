import Image from "next/image"
import Link from "next/link"




export default function research(){
    const height = 480 
    const width = 720 
    return(
        <main>
            <div className="p-1 text-center ">
            <h1 className=" text-3xl">Research Essay | 12/2</h1>
            <h2>Read the proprosal  <Link className="font-bold underline text-sky-300" href="/works/research/proprosal">here</Link></h2>
            
            </div>
            <h3>Prompt: Investigate a theme or issue related to your engineering concentration. <span className="font-bold text-green-300">(How do computers communicate? / Pros and Cons of TCP and UDP)</span> </h3>
            <h3 className="font-bold text-center" >Images from cloudflare</h3>
            <div className="p-3">
                <p>When you post to social media, you connect via TCP/IP to their server, as do the people who see and read your posts. When you watch a YouTube video or play a game online, you send data using UDP.  Our computers communicate constantly, based on decades-old research and development that form our 2 major communications specs. While none of them are truly perfect TCP/IP and UDP together form the backbone of all modern internet communication, allowing us to transfer files and data between each other. </p>
                <br />
                <p>UDP, or the User Datagram Protocol, is the second most common protocol on the internet. It is implemented in cases where speed is the priority. Common use cases are for gaming and video streaming. UDP is a connectionless protocol, meaning that there is no handshake between the sender and receiver,  but it does “provide checksums for data integrity, and port numbers for addressing different functions at the source and destination of the datagram” (MDN Project) .  These tools allow devel</p>
                <br />
                <p> The downside of UDP being connectionless is that there is the possibility of the packets not reaching their destination, referred to as packet loss. While the checksums allow developers to know whether data is received properly, there's no way to actually re-request the data that was missed. Another major downside of UDP is that it is vulnerable to DDoS attacks. According to Cloudflare, “A typical UDP flood attack sends a large number of UDP datagrams to random ports on its target computer. This forces the target to respond with an equally large number of ICMP packets, which indicate those ports were unreachable.” Since a UDP port will always respond to requests for data with data, they are forced to handle even ‘fake’ requests that don’t expect data back. By making a massive amount of these ‘fake’ requests, the system will be overloaded and unavailable for everyone as it tries to process these requests.</p>
                <br />
                <div className="flex justify-center align-middle">
                <Image alt="graph showing TCP vs UDP from cloudflare" src="/research1.png" width={width} height={height} />
                </div>
                <br />
                <p>TCP, or the Transmission Control Protocol, is the most common protocol on the internet. It is used for its stability, as its primary feature is that it makes sure that all data reaches its target, and is in the correct order. This gives the implementer confidence om that their implementation is secure and lowers the potential for side effects. This stability is achieved via a handshake process named syn/ack after its data packets, synchronization, and acknowledgment. According to the MDN web documentation, The syn/ack handshake “is designed so that two computers that want to pass information back and forth to each other can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.”. This allows reliability as both the sender and receiver must confirm a request before data is sent. </p>
                <br />
                <p>The handshake comes in three steps. First is Synchronization, where the sender tells the receiver that they will send data via a SYN packet. Next, there is Synchronization - Acknowledgement, where the receiver accepts the sender sending data. Lastly, in the acknowledgment step, the sender sends an ACK packet to open a connection. Now that the connection is open, the sender can begin sending data. Every time the sender sends data, the receiver must send back an ACK packet. If the sender doesn’t receive an ACK packet, they will resend the data. To close a TCP connection, the initiator sends a FIN data packet, to signal that there will be no more data sent from their side. The second member will send an ACK packet back to partially close the connection, preventing the initiator from sending any more data. However, the second member can still send data until they send a FIN packet and receive an ACK packet response.</p>
<br />
<div className="flex justify-center align-middle">
<Image alt="graph showing TCP vs UDP" src="/research2.png" width={width} height={height} />
</div>
<br />
                <p>However, the main downside of TCP connections is their speed. The starting handshake requires 3 transmissions before a connection is formed, which delays the initial sending of information. More importantly, the fact that every piece of data needs a corresponding ACK packet means that there is double the amount of data that needs to be sent for a single connection, which is unacceptable in many common use cases. As Cloudflare, an internet hosting provider puts it, “VoIP (voice over IP), which is used by many Internet-based telephone services, typically operates over UDP. This is because a static-y phone conversation is preferable to one that is crystal clear but heavily d</p>
<br />
                <p>Although these two protocols work together well, they do represent two extremes of communication needs. One potential space for an alternative protocol is one that only requires the handshakes of TCP. It would inherit the unreliability of UDP and the slower start of TCP, but the actual data communication would be at the same speed as UDP, maybe even faster as the sender and recipient would both agree on the form the data is taking, all while being less susceptible to DDoS attacks. </p>
      <br />
                <p>It is important to note that while TCP and UDP are the most common protocols on the internet, there are many other niche protocols being implemented. Anyone who sets up a server can implement their own protocol, though most stick to just UDP and TCP.</p>
            <br />
                <p>In conclusion, the internet is used every day by millions of people, but few people actually understand the underlying principles that make it work. TCP and UDP are two tools that developers who deal with networking have to choose between to make their applications work. However these two extremes don’t cover the full spectrum of applications, and so developers can and do make new protocols to fit their project.</p>
            </div>
        </main>
    )
}