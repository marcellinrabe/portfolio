import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import DataProvider from './DataProvider';
import Header from './Header';
import Cover from '../Cover';
import Parcours from '../Parcours';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
/* import Particle from './Particles';
 */ import { useRef } from 'react';

library.add(fas, far, fab);

function App() {
    const particlesContainer = useRef(0);
    return (
        <DataProvider>
            <div id="app" className="overflow-hidden">
                <Header />
                <Cover ref={particlesContainer} />
                <Parcours />
                <Skills />
                <Works />
                <Contact />
            </div>
        </DataProvider>
    );
}

export default App;
