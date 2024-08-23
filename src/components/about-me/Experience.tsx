import { useState } from "react";

type ExperienceProps = { company: string, timeSpan: { from: string, to: string }, description: string }

export const Experience = ({ company, timeSpan, description }: ExperienceProps) => {
    const { from, to } = timeSpan;
    const [expand, setExpand] = useState(false)
    return (
        <div className="experience">
            <div className="exp-intro">
                <div className="exp-intro-text">
                    <p>{company}</p>
                    <p>{from} - {to}</p>
                </div>
                <button onClick={() => setExpand(!expand)}>{!expand ? "⬇️" : "⬆️"}</button>
            </div>
            <div className={expand ? "expandable expandable-show" : "expandable"}>
                {description}
            </div>
        </div>
    )
}