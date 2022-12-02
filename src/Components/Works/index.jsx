import Line from '../App/Line';
import Card from './Card';
import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';

export default function Works() {
    const { Works } = useContext(dataContext);
    return (
        <div id="works">
            <Line />
            <div className="w-75 m-auto">
                <div className="row flex-wrap row-gap-16">
                    {Works.map(({ id, project, desc, github_link, img }) => (
                        <Card
                            key={id}
                            project={project}
                            desc={desc}
                            github_link={github_link}
                            img={img}
                        />
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="bg-dark text-white p-2 rounded-1">
                        Voir tout sur github
                    </button>
                </div>
                <Line />
            </div>
        </div>
    );
}
