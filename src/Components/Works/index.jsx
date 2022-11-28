import Keyboard from '../../assets/keyboard-light.gif';
import Line from '../App/Line';
import Card from './Card';

const cards = [
    {
        key: 1,
        project: 'Project 1',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quas fugit saepe iure ullam quaerat omnis, quos accusantium nemo
         quae quis.`,
        github_link: 'https://www.github.com/marcellinrabe/didy-folo',
        img: {
            src: Keyboard,
            alt: 'didy folo web view',
        },
    },
    {
        key: 2,
        project: 'Project 2',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Non perferendis, ducimus, exercitationem cumque obcaecati facere 
         totam quasi dignissimos, ut cum perspiciatis sunt aliquid impedit
          rem architecto autem eos inventore laboriosam!`,
        github_link: 'https://www.github.com/marcellinrabe/api-didy-folo',
        img: {
            src: Keyboard,
            alt: 'didy folo web view',
        },
    },
    {
        key: 3,
        project: 'Project 3',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         eum inventore soluta laborum ipsa dolore sapiente fugiat sed?
           eos deleniti dignissimos ipsa.`,
        github_link: 'https://www.github.com/marcellinrabe/api-didy-folo',
        img: {
            src: Keyboard,
            alt: 'didy folo web view',
        },
    },
];
export default function Works() {
    return (
        <div id="works" className="vh-100 w-75 m-auto">
            <div className="grid grid-cols-3 gap-16">
                {cards.map(
                    ({ key, project, desc, github_link, img }, index) => (
                        <Card
                            key={key + index}
                            project={project}
                            desc={desc}
                            github_link={github_link}
                            img={img}
                        />
                    )
                )}
            </div>
            <div className="text-center my-5">
                <button className="bg-dark text-white p-2 rounded-1">
                    Voir tout sur github
                </button>
            </div>
            <Line />
        </div>
    );
}
