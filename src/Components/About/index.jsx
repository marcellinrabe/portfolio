import { useContext } from 'react';
import Line from '../App/Line';
import SocialLink from './SocialLink';
import { dataContext } from '../App/DataProvider';
import Card from './Card';

export default function About() {
    const { About } = useContext(dataContext);
    const { img, biblio, location, mobileNumber, socialNavlink } = About;

    return (
        <div id="about" className="pt-5">
            <Card
                img={img}
                biblio={biblio}
                location={location}
                mobileNumber={mobileNumber}
            />
            <Line />
            <SocialLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
