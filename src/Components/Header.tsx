import { cvData } from '../types';
export function Header({ className}: { className?: string}) {
  return (
    <header className={className}>
      <h1>CV {cvData.name} {cvData.lastName}</h1>
    </header>
  );
}