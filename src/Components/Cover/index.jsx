import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import Chat from './Chat';
import Line from '../App/Line';
import ExternalLink from '../App/ExternalLinks';
import Links from './Links';

export default function Cover() {
    const { About, Cover, user } = useContext(dataContext);
    const { socialNavlink } = About;

    return (
        <div id="cover">
            <div className="row">
                <div className="col-md-7 col-lg-8 my-5 my-md-0">
                    <div className="title-2xl mx-1 mx-sm-2">
                        {Cover.greeting}
                    </div>
                    <div className="mx-2">
                        <div className="title-md">
                            Je suis{' '}
                            <span className="text-info title-md">
                                {user.name} {user.first}
                            </span>
                        </div>
                        <div className="title-md">{user.post}</div>
                        <Links />
                    </div>
                </div>
                <div className="col-md-5 col-lg-4">
                    <Chat />
                </div>
            </div>
            <Line />
            <ExternalLink socialNavlink={socialNavlink} />
            <Line />
        </div>
    );
}
