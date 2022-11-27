import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, fas } from '@fortawesome/free-solid-svg-icons';
import {
    far,
    faCalendarAlt,
    faBuilding,
} from '@fortawesome/free-regular-svg-icons';
import {
    faMapMarkerAlt,
    faMobile,
    faGlobe,
    faPaperPlane,
    faClone,
    faExternalLinkAlt,
    faUniversity,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { ParallaxProvider } from 'react-scroll-parallax';
import DataProvider from './DataProvider';
import 'bootstrap/dist/css/bootstrap.css';

import Cover from '../Cover';

import '../app.css';
import About from '../About';
import Parcours from '../Parcours';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';
library.add(
    fas,
    faMapMarkerAlt,
    faGlobe,
    faMobile,
    faPaperPlane,
    faClone,
    faExternalLinkAlt,
    faUniversity,
    faGraduationCap,
    faUserTie
);

library.add(far, faCalendarAlt, faBuilding);

function App() {
    return (
        <DataProvider>
            <ParallaxProvider>
                <div id="app" className="overflow-hidden">
                    <Cover />
                    <About />
                    <Parcours />
                    <Skills />
                    <Works />
                    <Contact />
                </div>
            </ParallaxProvider>
        </DataProvider>
    );
}

export default App;
