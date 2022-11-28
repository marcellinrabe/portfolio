import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import { Parallax } from 'react-scroll-parallax';
import Menu from './Menu';

export default function Cover() {
    const { Cover } = useContext(dataContext);

    return (
        <div className="cover">
            <div className="min-vh-100 overflow-hidden">
                <Parallax speed={30} translateY={['0', '200', 'easeInOut']}>
                    <div className="m-auto text-center">
                        <Menu links={Cover.Menu.navLinks} />
                    </div>
                </Parallax>
            </div>
        </div>
    );
}
