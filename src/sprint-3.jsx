import { Navigation } from "./About";



const SprintThree = () => {
    return (
        <div id="container" className="d-flex column flex-md-row">
            <Navigation />
            <div className="d-flex justify-content-center col-8">
                <h1>Sprint 3</h1>
                <h2 id="question" className="d-flex justify-content-center text-center">
                    What is Pseudocode and how does it help with programming?
                </h2>
                <div>
                <h3 id="mini" className="d-flex justify-content-center text-center">
                    Step 1: Ask Questions
                </h3>
                <div id="blog" className="d-flex justify-content-center text-center">
                    Before writing anything or drawing a WireFrame ask yourself some questions. What am I making? What do I want it to do? What are the requirements? etc. This step is important for the future of the project and lays out a clear direction of what needs to be done.
                </div>
                </div>
                <div>
                <h3 id="mini" className="d-flex justify-content-center text-center">Step 2: WireFrame</h3>
                <div id="blog" className="d-flex justify-content-center text-center">
                    After asking yourself the important questions, WireFrame the project. What should it look like? Where does the content go and how does it work together? Draw out what you want the project to look like and reference it throughout the project.
                </div>
                </div>
                <div>
                    <h3 id="mini" className="d-flex justify-content-center text-center">Step 3: Pseudocode</h3>
                    <div id="blog" className="d-flex justify-content-center text-center">
                        This is the most important step possibly in the whole project. This is where you put it all together from your mind into readable text. What do you need for the project? Write it down. What are the requirements? Write it down. What are some extras you want to add? Write it down. This step makes the whole project simpler by putting everything you will work on in human readable text. If the project needs something Write it down here.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SprintThree;