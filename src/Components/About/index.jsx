import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import Line from '../App/Line';
import SocialLink from './SocialLink';
import Card from './Card';

export default function About() {
    const { About } = useContext(dataContext);
    const { img, socialNavlink } = About;

    return (
        <div id="about" className="pt-5">
            <Card img={img} />
            <Line />
            <SocialLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
