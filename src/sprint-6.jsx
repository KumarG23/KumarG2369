import { Navigation } from "./About";
import BlogTemplate from "./blog-temp";


const blogData = {
    title: 'Sprint 6',
    questions : [
        'Now that you are halfway through boot camp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?',
        'Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?',
        'What surprised you about your first week in Python and how was it different from your first week in JavaScript?'
    ],
    answers: [
        'The biggest hurdle to the boot camp so far for me has been the insane amount of information we are working through each week. The next thing to power through will be learning about back end. I know nothing about back end so it will be completely new.',
        'Earlier I was contemplating a zodiac type app. However, I am not interested in doing that anymore haha. I was talking to my father over the weekend and he is starting a new business. The business is going to try to sell homemade items in Nepal to a bigger customer base (The internet), rather than just tourists and people around town. I also was thinking maybe a movie app similar to netflix or disney plus type of thing. We shall see.',
        'What surprised me most about my first week of python is how much easier it came to me. There are a lot of similarities to JavaScript that made it much easier to get the hang of. I am far from being an expert but I can see how our experiences so far make it easier to learn the new stuff.'
    ]
}

const SprintSix = () => {
    return (
        <div>
            <Navigation />
            <div>
                <BlogTemplate blogData={blogData} />
            </div>
        </div>
    );
};

export default SprintSix;