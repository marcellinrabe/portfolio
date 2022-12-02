import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';

export default function Skills() {
    const { Skills } = useContext(dataContext);

    const reducer = (array) =>
        array.length === 0 ? (
            '-'
        ) : array.length === 1 ? (
            array
        ) : (
            <div className="d-flex flex-wrap row-gap-4">
                {array.map((each) => (
                    <span>{each}</span>
                ))}
            </div>
        );

    return (
        <div id="skills" className="row justiy-content-center px-5 px-sm-0">
            <table className="bg-white col-11 col-md-8 border m-auto text-center">
                <thead>
                    <tr>
                        <th>Langages</th>
                        <th>Frameworks</th>
                        <th>Techniques</th>
                    </tr>
                </thead>
                <tbody>
                    {Skills.map(({ langage, frameworks, techniques }) => (
                        <tr>
                            <td>{langage}</td>
                            <td>{reducer(frameworks)}</td>
                            <td>{reducer(techniques)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
