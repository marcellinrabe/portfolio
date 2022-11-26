import Chat from './Chat';

export default function Card({ img }) {
    return (
        <div className="d-flex align-items-center mt-5">
            <div className="row w-100">
                <div className="col-4">
                    <div className="d-flex justify-content-end">
                        <div className="img-container">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-100 h-100 rounded-circle"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <Chat />
                </div>
            </div>
        </div>
    );
}
