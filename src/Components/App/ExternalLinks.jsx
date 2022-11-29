import { useState, useEffect, useContext } from 'react';
import { dataContext } from '../App/DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink() {
    const { user } = useContext(dataContext);

    const [link, updatelink] = useState({
        prevParent: null,
        activeParent: null,
        current: null,
    });

    /**
     * Au tout début on met comme valeur par défaut active le premier lien
     * Met à jour le lien active côté vue
     */

    useEffect(() => {
        try {
            if (!link.prevParent) {
                const first = document.querySelector('.social-nav-link');
                const defaultValue = {
                    prevParent: first,
                    activeParent: first,
                    current: user.externalLinks.at(0).url,
                };
                updatelink(defaultValue);
            } else {
                if (link.activeParent) {
                    link.prevParent.classList.remove('active');
                    link.activeParent.classList.add('active');
                }
            }
        } catch (err) {
            console.error(err);
        }
    }, [link, user.externalLinks]);

    const update = (event, url) => {
        updatelink({
            prevParent: link.activeParent,
            activeParent: event.currentTarget,
            current: url,
        });
    };

    const copy = () => {
        let text = document.querySelector('.profile-name a input');
        text.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.querySelector('.clone').classList.add('active');

        setTimeout(() => {
            document.querySelector('.clone').classList.remove('active');
        }, 1000);
    };

    return (
        <div className="row justify-content-center">
            <div className="bg-light rounded-3 col-9 col-md-8 col-lg-6 flex-container">
                <div className="social-link d-flex justify-content-center">
                    {user.externalLinks.map(({ key, label, url }, index) => (
                        <div
                            key={'social' + key}
                            className="social-nav-link text-center mx-2 mx-sm-3 mt-3 p-3 rounded-1"
                            onClick={(event) => update(event, url)}
                        >
                            <div>
                                <FontAwesomeIcon icon={['fas', 'globe']} />
                            </div>
                            <div>{label}</div>
                        </div>
                    ))}
                </div>
                <div className="my-3 m-sm-3">
                    <div className="position-relative bg-white">
                        <div className="text-break p-3 profile-name">
                            <a
                                href={link.current ? link.current : ''}
                                className="nav-link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <input
                                    type="text"
                                    className="w-100 h-100 border-0"
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                    value={link.current ? link.current : ''}
                                />
                            </a>
                        </div>
                        <div className="position-absolute top-0 end-0 translate-half-py">
                            <button onClick={copy} className="clone">
                                <FontAwesomeIcon icon={['far', 'clone']} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
