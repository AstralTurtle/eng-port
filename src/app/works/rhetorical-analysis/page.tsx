import Image from "next/image"

export default function analysis() {
    return (
        <main>

            <h1 className="text-center font-bold text-3xl">Rhetorical Situation Analysis | Due 10/11</h1>
            <div className="flex align-middle justify-center">
                <Image alt="a fitbit sense 2" height={480} width={480} src={"/fitbit.png"}  ></Image>
            </div>
            <h2>Prompt: Write an informal, non-essayistic analysis of your chosen text’s (Fitbit Sense 2 user guide) rhetorical analysis. </h2>
            <div className="p-5">
                <div className="text-left p-2">
                    <h2 className="font-bold text-xl text-purple-300">Author</h2>
                    <h3 className="font-bold">Who wrote this text? What do we know about them?</h3>
                    <p>It’s written by the Fitbit support team at Google. They are specialists in giving information about this product.</p>
                    <h3 className="font-bold">What is their relationship to the content?</h3>
                    <p>Their company creates/owns the product.</p>
                    <h3 className="font-bold">What biases might they have? How might these biases determine the choices they made in the writing?</h3>
                    <p>They are biased toward the Fitbit and are unlikely to write anything that paints it in a negative light </p>
                </div>
                <div className="text-right p-2 ">
                    <h2 className="font-bold text-xl text-green-300">Audience</h2>
                    <h3 className="font-bold">Who is the intended audience of this text? What do we know about them?
                    </h3>
                    <p>The audience is users of a Fitbit. Fitbit users are invested in their health.</p>
                    <h3 className="font-bold"> What is their relationship to the content?</h3>
                    <p>They likely already own the product, and are seeking help with a specific feature</p>
                    <h3 className="font-bold">What do they already know about the content? What prior knowledge do they need to have in order to understand the text?</h3>
                    <p>They know what a fitbit is and why they should buy it, they just want support.</p>

                </div>
                <div className="text-left p-2 ">
                    <h2 className="font-bold text-xl text-sky-300">Text</h2>
                    <h3 className="font-bold">What is the genre?</h3>
                    <p>It is a user guide.</p>
                    <h3 className="font-bold"> How have the normal characteristics of this genre dictated the choices the author made?</h3>
                    <p>The team uses descriptive images to illustrate process and stays away from long blocks of text.
                    </p>
                    <h3 className="font-bold">Where was it published? What does this tell us about the text/author/audience/etc.?</h3>
                    <p>It was published online in the help center. It is likely also included in the packaging. This is user documentation for people who own the product.</p>
                </div>
                <div className="text-right p-2">
                    <h2 className="font-bold text-xl text-indigo-300">Purpose</h2>
                    <h3 className="font-bold">What is the purpose of this text?</h3>
                    <p>The text is designed to efficiently help people who have already purchased the product.</p>
                    <h3 className="font-bold">What does the author want the audience to take away from it?
                    </h3>
                    <p>The audience needs to take away how to use the features of the product.</p>
                    <h3 className="font-bold">How does the purpose of the text shape the way the text is written, published, etc?
                    </h3>
                    <p>They show the actions to take with images and include the guide with the product as well as online in case the user loses the guide.</p>
                </div>
                <div className="text-left p-2">
                    <h2 className="font-bold text-xl text-slate-300">Context & Exigence</h2>
                    <h3 className="font-bold">In what historical context does this document exist?</h3>
                    <p>It was written before the product was available and likely became available as the product did.</p>
                    <h3 className="font-bold">How might that impact the choices the authors made?</h3>
                    <p>The author has to explain every feature of the product as the only expert(s) on import {  } from "module";</p>
                    <h3 className="font-bold">What sociopolitical factors might impact the choices the authors made?</h3>
                    <p>The product has an established niche already and does not need to risk alienating customers at this point.</p>
                    <h3 className="font-bold">What is the motivating occasion/issue/concern that seems to have prompted this text to have been written? (Exigence)</h3>
                    <p>The product was releasing soon, and needed a guide so that users wouldn’t be confused. </p>
                </div>
            </div>


        </main>
    )
}