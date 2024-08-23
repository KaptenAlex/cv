import PreviousExperiences from "./PreviousExperiences"
import Skills from "./Skills"

export const AboutMe = () => {
    return (
        <div>
            <h1>About me</h1>
            <p>I love playing Magic the Gathering on my free time <em>(if the spinning card above this text didn't already spoil that already. 😉)</em></p>
            <p>Other than that I love cooking food, hanging out with friends and playing video games on my free time</p>
            <p>When I don't have free time <em>(work)</em> I like to work with frontend and backend, but recently this has been restricted to frontend, nothing wrong with that of course! 😃</p>
            
            <PreviousExperiences />
            <Skills />
        </div>
    )
}