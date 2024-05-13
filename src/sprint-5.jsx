import { Navigation } from "./About";
import BlogTemplate from "./blog-temp";
import { Link } from "react-router-dom";

const blogData = {
    title: 'Sprint 5',
    questions : [
        'What have you learned about CLIs? Do you think they are scary?',
        'If you were to build a CLI, what would it do?',
        'List some ideas that without a Framework, would take you a long time to code'
    ],
    answers: [
        'I have learned that the CLI is where we can use git and those many commands. We can also change different paths and etc. I do not have much experience working with the CLI',
        'Honestly I would have no idea where to even start. I know I would try to make a simple and easy to use for the user as possible.',
        'React definitely makes things easier by putting everything in one place. Also making things into components makes things so much easier to separate and also makes things cleaner. Doing our react projects without it would have taken much longer.'
    ]
}

const SprintFive = () => {
    return (
        <div>
            <Navigation />
        <div>
            <BlogTemplate blogData={blogData} />
        </div>
        <Link id='icon' to='/sprint-6'>Sprint 6</Link>
        </div>
    );
};

export default SprintFive;