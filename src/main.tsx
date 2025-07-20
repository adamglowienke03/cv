import { createRoot } from 'react-dom/client'
import './style.scss'
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Details } from './Components/Details';
import { Wrapper } from './Components/Wrapper';
import { AboutMe } from './Components/AboutMe';


createRoot(document.getElementById('root')!).render(
  <>
    <Wrapper className="cv-main">
      <Header className="cv-header" />
      <Personal className="cv-personal" />

      <AboutMe className='cv-aboutme' />
      <Details className="cv-details" />
    </Wrapper>
  </>
)
