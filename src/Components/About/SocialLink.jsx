import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink({ socialNavlink }) {
    const linkContainer = useRef(0);
    const [activeNavlink, setActiveNavlink] = useState({
        prevActive: null,
        active: null,
        link: null,
    });

    useEffect(() => {
        try {
            /**
             * Sans précedent donc au début donc mettre valeur par défaut
             * et on va dire linkedin
             */

            if (activeNavlink.prevActive === null) {
                const linkedinButton = window.document.querySelector(
                    '.social-nav-link.linkedin'
                );
                const defaultValue = {
                    prevActive: linkedinButton,
                    active: linkedinButton,
                    link: socialNavlink.datas.at(0).link,
                };
                setActiveNavlink(defaultValue);
            } else {
                /**
                 * sinon supprimer la classe active sur la précedente active
                 * et en mettre sur le courant
                 * et changer le link coté client
                 */

                if (!(activeNavlink.active === null)) {
                    activeNavlink.prevActive.classList.remove('active');
                    activeNavlink.active.classList.add('active');
                    linkContainer.current.textContent = activeNavlink.link;
                }
            }
        } catch (err) {
            console.error(err);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeNavlink]);

    const updateLink = (event, link) => {
        setActiveNavlink({
            prevActive: activeNavlink.active,
            active: event.currentTarget,
            link: link,
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="bg-light rounded-3 col-9 col-md-8 col-lg-6 flex-container">
                <div className="social-link d-flex justify-content-center">
                    {socialNavlink.datas.map(
                        ({ key, iconClass, label, link }, index) => (
                            <div
                                key={'socialNavlink' + index + key}
                                className={`social-nav-link ${key} text-center mx-2 mx-sm-3 mt-3 p-3 rounded-1`}
                                onClick={(event) => updateLink(event, link)}
                            >
                                <div>
                                    <FontAwesomeIcon icon={iconClass} />
                                </div>
                                <div>{label}</div>
                            </div>
                        )
                    )}
                </div>
                <div className="my-3 m-sm-3">
                    <div className="position-relative bg-white">
                        <div className="text-break p-3 profile-name">
                            <a
                                ref={linkContainer}
                                href={'profile link'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--bs-dark)',
                                }}
                            >
                                {''}
                            </a>
                        </div>
                        <div className="position-absolute top-0 end-0 translate-half-py">
                            <button>
                                <FontAwesomeIcon
                                    icon={socialNavlink.cloneIcon}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
