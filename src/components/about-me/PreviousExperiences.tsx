import { Experience } from "./Experience"

const PreviousExperiences = () => {
    const experiences = [{
        company: "Epical/Enfo",
        timeSpan: {
            from: "April 2021",
            to: "Now"
        },
        description: "I've been working as a consultant at Epical, previously part of Enfo before the divider. In that time I've been working the technologies such as Angular, React, Node.js, Git and a bit of AWS."
    }]
    return (
        <div className="previous-experiences">
            <h2>My previous work experiences</h2>
            {experiences.map((experience) => <Experience {...experience} key={0} />)}
        </div>
    )
}

export default PreviousExperiences