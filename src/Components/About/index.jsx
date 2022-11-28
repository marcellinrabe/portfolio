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
            <div className="row">
                <div className="col-md-7 col-lg-8 my-5 my-md-0">
                    <div className="title-2xl mx-1 mx-sm-2">Tongasoa</div>
                    <div className="mx-2">
                        <div className="title-md">
                            Je suis{' '}
                            <span className="text-info title-md">
                                RABE Marcellin
                            </span>
                        </div>
                        <div className="title-md">Intégrateur web</div>
                        <div className="d-flex title-md">
                            <div>
                                <button className="text-primary">
                                    <FontAwesomeIcon
                                        icon={['fab', 'facebook']}
                                    />
                                </button>
                            </div>
                            <div>
                                <button style={{ color: '#0d2e5f' }}>
                                    <FontAwesomeIcon
                                        icon={['fab', 'linkedin']}
                                    />
                                </button>
                            </div>
                            <div>
                                <button className="text-dark">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4">
                    <Chat />
                </div>
            </div>
            <Line />
            <SocialLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
