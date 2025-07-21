interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

export const cvData: CVData = {
  photo: 'https://placehold.co/400x400?text=AG',
  name: 'Adam',
  lastName: 'Głowienke',
  position: 'Developer',
  experience: [
    { year: 2020, description: 'Worked at Company A' },
    { year: 2021, description: 'Worked at Company B' }
  ],
  education: ['BSc in Computer Science', 'MSc in Software Engineering']
}