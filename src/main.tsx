import { createRoot } from 'react-dom/client'
import './style.scss'
import { Header } from './Components/Header/Header';
import { Personal } from './Components/Personal/Personal';
import { Details } from './Components/Details/Details';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wrapper className="cv-main">
      <Header className="cv-header" />
      <Personal className="cv-personal" />

      <AboutMe className='cv-aboutme' />
      <Details className="cv-details" />
    </Wrapper>
  </StrictMode>
)
