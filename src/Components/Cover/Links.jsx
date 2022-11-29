import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';

export default function Links() {
    const { user } = useContext(dataContext);

    return (
        <div className="d-flex title-md">
            {user.externalLinks.map(({ key, url, icon, color }) => (
                <div key={key} className="mx-2">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={color}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </a>
                </div>
            ))}
        </div>
    );
}
