import { cvData } from "../types";

export function Details({ className }: { className?: string }) {
    return (
        <section className={className}>
            <h2>Experience</h2>
            <ul>
                {cvData.experience.map((experience) => (
                    <li key={experience.year}>
                        <strong>{experience.year}</strong> - {experience.description}
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {cvData.education.map((education, index) => (
                    <li key={index}>{education}</li>
                ))}
            </ul>
        </section>
    );
}
