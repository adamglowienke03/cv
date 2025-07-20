import { cvData } from '../types';

export function Personal({ className}: { className?: string}) {
  return (
    <aside className={className}>
      <h2>Personal data</h2>
      <img className="cv-photo" src={cvData.photo} alt={`${cvData.name} ${cvData.lastName}`} />
      <p>{cvData.name} {cvData.lastName}</p>
      <small>{cvData.position}</small>
    </aside>
  );
}