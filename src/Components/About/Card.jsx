import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BorderAnimate from './BorderAnimate';

export default function Card({ img, biblio, location, mobileNumber }) {
    return (
        <div className="d-flex align-items-center mt-5">
            <div className="row w-100">
                <div className="col-4">
                    <div className="d-flex justify-content-end">
                        <BorderAnimate>
                            <img src={img.src} alt={img.alt} />
                        </BorderAnimate>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex flex-column">
                        <div className="bg-light color-white p-3 rounded-4">
                            <p className="biblio">{biblio}</p>

                            <div className="d-flex flex-wrap">
                                <div className="location me-2">
                                    <span className="text-center">
                                        <FontAwesomeIcon
                                            icon={location.iconClass}
                                        />{' '}
                                        {location.label}
                                    </span>
                                </div>
                                <div className="mobile-number ms-2">
                                    <span className="text-center">
                                        <FontAwesomeIcon
                                            icon={mobileNumber.iconClass}
                                        />{' '}
                                        {mobileNumber.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light color-white py-2 px-3 my-3 rounded-4 three-dot align-self-end">
                            ...
                        </div>
                        <div className="d-none bg-light color-white p-3 rounded-4 h-100 position-relative">
                            Envoyer moi un message ...
                            <br />
                            (need draftjs)
                            <div className="position-absolute top-0 end-0 paper-plane">
                                <button className="btn-send rounded bg-white">
                                    <FontAwesomeIcon icon="fa-paper-plane" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
