import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                result => {
                    if (result.text === 'OK') {
                        // pop-up
                        console.log('pop-up');
                    }
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact">
            <div className=" mx-2 mx-sm-0 row justify-content-center align-items-center">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="col-sm-9 col-md-8 col-lg-6 form-lg pb-5">
                        <div className="d-flex mb-3">
                            <div
                                className="border border-end-0 bg-white"
                                style={{
                                    height: 40
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="p-2">Nom</div>{' '}
                                </div>
                            </div>
                            <div className="border w-100 px-2 bg-white">
                                <input
                                    type="text"
                                    name="sender_name"
                                    placeholder="NOM"
                                    className="h-100 w-100 border-0"
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div
                                className="border border-end-0 bg-white"
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <FontAwesomeIcon
                                        icon={['far', 'envelope']}
                                    />
                                </div>
                            </div>
                            <div className="border w-100 px-2 bg-white">
                                <input
                                    type="text"
                                    name="sender_email"
                                    placeholder="Adresse e-mail"
                                    className="h-100 w-100 border-0"
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div
                                className="border border-end-0 bg-white"
                                style={{
                                    width: 'max-content',
                                    height: 40
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="p-2">sujet</div>
                                </div>
                            </div>
                            <div className="border w-100 px-2 bg-white">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="SUJET"
                                    className="h-100 w-100 border-0"
                                />
                            </div>
                        </div>
                        <div className="my-3">
                            <textarea
                                name="message"
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
                </form>
            </div>
        </div>
    );
}
