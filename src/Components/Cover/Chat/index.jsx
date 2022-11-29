import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { dataContext } from '../../App/DataProvider';

export default function Chat() {
    const { About } = useContext(dataContext);
    const { name, firstName, img } = About;
    const [messages, setMessages] = useState([]);

    return (
        <div className="chat new border m-auto">
            <div className="d-flex flex-column h-100">
                <header className="py-2">
                    <div className="d-flex align-items-center h-100">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="mx-2 rounded-circle"
                        />
                        <span>{`${name} ${firstName}`}</span>
                    </div>
                </header>
                <section className="h-100 overflow-auto">
                    {messages && (
                        <div className="d-flex align-items-end justify-content-center h-100">
                            <button className="bg-primary text-white p-2 rounded-5">
                                Démarrer
                            </button>
                        </div>
                    )}
                </section>
                <footer className="m-3">
                    <div className=" position-relative bg-light w-100 border rounded-5 py-2 px-3">
                        <input type="text" className="border-0 bg-light" />
                        <button className="position-absolute top-0 end-0">
                            <FontAwesomeIcon icon={['far', 'paper-plane']} />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}
