import { useContext } from 'react';
import { dataContext } from './DataProvider';

export default function Header() {
    const { Header } = useContext(dataContext);
    return (
        <header>
            <nav>
                <ul className="h-100 d-flex align-items-center">
                    {Header.navlinks.map(({ key, href, label }, index) => (
                        <li key={'Menu' + index + key}>
                            <a href={href}>{label}</a>
                            <div className="underline"></div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
