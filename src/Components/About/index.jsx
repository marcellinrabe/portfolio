import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import Line from '../App/Line';
import SocialLink from './SocialLink';
import Chat from './Chat';
import Menu from '../Cover/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    const { About, Cover } = useContext(dataContext);
    const { socialNavlink } = About;

    return (
        <div id="about">
            <Menu links={Cover.Menu.navLinks} />
            <div className="row mx-2">
                <div className="col-8" style={{ fontSize: 24 }}>
                    <div style={{ fontSize: 100 }}>Tongasoa</div>
                    <div>
                        Je suis{' '}
                        <span className="text-info">RABE Marcellin</span>
                    </div>
                    <div>Intégrateur web</div>
                    <div className="d-flex">
                        <div>
                            <button className="text-primary">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </button>
                        </div>
                        <div>
                            <button style={{ color: '#0d2e5f' }}>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </button>
                        </div>
                        <div>
                            <button className="text-dark">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <Chat />
                </div>
            </div>
            <Line />
            <SocialLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
