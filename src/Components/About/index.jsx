import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import Line from '../App/Line';
import SocialLink from './SocialLink';
import Chat from './Chat';

export default function About() {
    const { About } = useContext(dataContext);
    const { socialNavlink } = About;

    return (
        <div id="about" className="pt-5">
            <Chat />
            <Line />
            <SocialLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
