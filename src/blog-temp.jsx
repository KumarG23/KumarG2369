

const BlogHeader = ({ title }) =>
<h1 className="text-center">{title}</h1>;

//const BlogImage = ({ src }) => <img src{src} className="img-fluid max-width: 50% rounded mx-auto d-block mb-5" alt="Image"></img>;

const BlogQuestion = ({ question }) => (
    <div className="text-center fs-4 fst-italic">
        <u>{question}</u>
    </div>
);

const BlogAnswer = ({ answer }) => (
    <div className="text-center p-5 ms-5 me-5">{answer}</div>
);

// const NextButton = ({ buttonText, link }) => (
//     <div className="text-center">
//         <a href={link}>
//             <button type="button" className="btn btn-info btn-lg">{buttonText}</button>
//         </a>
//     </div>
// );

const BlogTemplate = ({ blogData }) => {
    const { title, questions, answers} = blogData;

    return (
        <div>
            <BlogHeader title={title} />
            {/* <BlogImage src={imageSrc} /> */}
            {questions.map((question, index) =>(
                <div key={index}>
                    <BlogQuestion question={question} />
                    <BlogAnswer answer={answers[index]} />
                </div>
            ))}
            {/* <NextButton buttonText={nextButtonText} link={nextButtonLink} /> */}
        </div>
    )
};

export default BlogTemplate;