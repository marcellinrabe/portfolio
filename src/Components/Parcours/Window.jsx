import { useState, useEffect, useRef } from 'react';

export default function Window({ onglets }) {
    const [currentOpen, setCurrentopen] = useState({
        prev: null,
        active: null,
        content: null,
    });
    const content = useRef(0);

    const toggleCurrentopen = (event, content) => {
        setCurrentopen({
            prev: currentOpen.active,
            active: event.currentTarget,
            content: content,
        });

        currentOpen.prev.classList.remove('active');
        currentOpen.active.classList.add('active');
    };

    useEffect(() => {
        if (currentOpen.prev === null) {
            const init = window.document.querySelector('#window button');

            const defaultValue = {
                prev: init,
                active: init,
                content: onglets.at(0).content,
            };

            setCurrentopen(defaultValue);

            console.log(onglets);
        } else {
            if (!(currentOpen.active === null)) {
                currentOpen.prev.classList.remove('active');
                currentOpen.active.classList.add('active');
            }
        }
    }, [currentOpen, onglets]);

    return (
        <div id="window" className="col-11 m-auto">
            <header>
                {onglets.map(({ key, title, content }) => (
                    <button
                        key={key + title}
                        onClick={(event) => toggleCurrentopen(event, content)}
                        className="bg-white"
                    >
                        {title}
                    </button>
                ))}
            </header>
            <section
                ref={content}
                id="content"
                className="vh-100 border border-primary bg-white"
            >
                {currentOpen.content}
            </section>
        </div>
    );
}
