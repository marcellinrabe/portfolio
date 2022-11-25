import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import { Parallax } from 'react-scroll-parallax';
import Menu from './Menu';

export default function Cover() {
    const { Cover } = useContext(dataContext);

    return (
        <div className="cover">
            <div className="min-h-screen bg-dark overflow-hidden">
                <Parallax speed={30} translateY={['0', '200', 'easeInOut']}>
                    <div className="w-half m-auto text-center">
                        <Menu links={Cover.Menu.navLinks} />
                        <p>
                            <span className="text-title text-white">
                                {Cover.textTitle}
                            </span>
                        </p>
                        <p className="text-info">{Cover.textInfo}</p>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}
