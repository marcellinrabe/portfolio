import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props) {
    const { project, desc, github_link, img } = props;
    return (
        <div className="col-sm-6 col-md-4">
            <div className="d-flex justify-content-center">
                <div>
                    <div className="Card">
                        <div className="desc p-3 bg-primary text-light d-flex justify-content-between">
                            <div className="">{project}</div>
                            <div className="text-end">
                                <a href={github_link} className="text-light">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </a>
                            </div>
                        </div>
                        <div className="img-container mt-5 m-auto">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-100 w-100 rounded-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
