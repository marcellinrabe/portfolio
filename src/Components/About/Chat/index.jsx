import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState, useRef } from 'react';
import { dataContext } from '../../App/DataProvider';
import ThreeDot from './ThreeDot';
import Message from './Message';

export default function Chat() {
    const { About } = useContext(dataContext);
    const { biblio, location, mobileNumber } = About;
    const [onSend, toggleOnsend] = useState(false);
    const [messageList, updateMessages] = useState([]);

    const addMessage = (Message) => {
        updateMessages(Array(messageList).concat(Array(Message)));
    };

    const ref = useRef();

    const sendCV = (event) => {
        const element = <Message user>{event.target.textContent}</Message>;

        ref.current.classList.add('d-none');
        addMessage(element);
        toggleOnsend(true);
    };

    useEffect(() => {
        const threeDot = window.document.querySelector('.three-dot');

        if (onSend) {
            const cv = (
                <Message>
                    <a href="#cv-link">RABE Marcellin - CV.pdf</a>
                </Message>
            );
            if (threeDot.classList.contains('d-none')) {
                threeDot.classList.remove('d-none');
                setTimeout(() => {
                    threeDot.classList.add('d-none');
                    addMessage(cv);
                }, 2000);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSend]);

    return (
        <div className="chat">
            <div className="d-flex flex-column">
                <Message>
                    <p className="biblio">{biblio}</p>
                    <div className="d-flex flex-wrap">
                        <div className="location mx-2">
                            <span className="text-center">
                                <FontAwesomeIcon icon={location.iconClass} />{' '}
                                {location.label}
                            </span>
                        </div>
                        <div className="mobile-number mx-2">
                            <span className="text-center">
                                <FontAwesomeIcon
                                    icon={mobileNumber.iconClass}
                                />{' '}
                                {mobileNumber.label}
                            </span>
                        </div>
                    </div>
                </Message>
                {messageList}
                <div
                    ref={ref}
                    className="chat-options mt-3 mb-2 d-flex align-items-center"
                >
                    <button id="download-cv" onClick={sendCV}>
                        Télécharger mon CV
                    </button>
                    <button
                        id="send-message"
                        onClick={() => console.log('go to contact field')}
                    >
                        Envoyer moi un message
                    </button>
                </div>
                <ThreeDot />
                <div className="bg-light color-white p-3 rounded-5 h-100 position-relative">
                    Envoyer moi un message ...
                    <div className="position-absolute top-0 end-0 paper-plane">
                        <button className="btn-send rounded bg-white">
                            <FontAwesomeIcon icon="fa-paper-plane" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
