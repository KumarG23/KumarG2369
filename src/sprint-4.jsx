import { Link } from "react-router-dom"
import { Navigation } from './About';
import BlogTemplate from "./blog-temp";

const blogData = {
    title: 'Sprint 4',
    questions: [
        'Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?',
        'What Frameworks or Libraries are you interested in learning more about?',
        'Find one emerging JavaScript tool that you would like to learn more about or use in your final project'
    ],
    answers: [
        'My experience with JavaScript Frameworks and Libraries so far have been great. They exist to make things easier and simpler. I need to learn to use them more in my projects.',
        'I still have a lot to learn when it comes to react but I can definitely see how it can simplify things and make our code much more DRY. I would like to learn more about Node.js because I see it all over the place, although I have no clue what it does yet.',
        'I am not sure what I want to do for my final project yet but when I do I am sure I will be using plenty of JavaScript tools.'
    ],
};


const SprintFour = () => {
    return (
        <div>
            <Navigation />
        <div>
            <BlogTemplate blogData={blogData} />
        </div>
        <Link id="icon" to='/sprint-5'>Sprint 5</Link>
        </div>
    );
};

export default SprintFour;