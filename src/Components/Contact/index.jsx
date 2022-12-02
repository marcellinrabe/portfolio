import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    return (
        <div id="contact">
            <div className=" mx-2 mx-sm-0 row justify-content-center align-items-center">
                <div className="col-sm-9 col-md-8 col-lg-6 form-lg pb-5">
                    <div className="d-flex">
                        <div
                            className="border border-end-0 bg-white"
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                            </div>
                        </div>
                        <div className="border w-100 px-2 bg-white">
                            <input
                                type="text"
                                placeholder="votre adresse e-mail"
                                className="h-100 w-100 border-0"
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <textarea
                            placeholder="Mr/Mme ..."
                            className="w-100 border p-2"
                            rows={8}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-primary text-light p-2 rounded-1"
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
