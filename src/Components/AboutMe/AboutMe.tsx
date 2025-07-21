import './AboutMe.scss';

export function AboutMe({ className }: { className?: string }) {
    return (
        <section className={className}>
            <h2>About Me</h2>
            <p>
                I am a passionate developer with a keen interest in building scalable web applications.
                My experience covers both frontend and backend technologies, allowing me to deliver complete solutions.
            </p>
            <p>
                I enjoy working in collaborative teams, sharing knowledge, and learning from others.
                My strengths include problem-solving, attention to detail, and a drive for continuous improvement.
            </p>
            <p>
                In my free time, I explore new technologies, contribute to open-source projects, and write technical articles.
                I also like hiking, photography, and playing chess.
            </p>
            <p>
                My goal is to create software that makes a positive impact and helps people in their everyday lives.
            </p>
        </section>
    );
}