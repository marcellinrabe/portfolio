import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ParallaxProvider } from 'react-scroll-parallax';
import DataProvider from './DataProvider';
import Cover from '../Cover';
import About from '../About';
import Parcours from '../Parcours';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';

library.add(fas, far, fab);

function App() {
    return (
        <DataProvider>
            <ParallaxProvider>
                <div id="app" className="overflow-hidden">
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
