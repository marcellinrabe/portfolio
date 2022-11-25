import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
    faMapMarkerAlt,
    faMobile,
    faGlobe,
    faPaperPlane,
    faClone,
    faExternalLinkAlt,
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
    faMobile,
    faGlobe,
    faPaperPlane,
    faClone,
    faExternalLinkAlt
);

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
