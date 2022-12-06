import React from 'react';

export default function MessageParser({ children, actions }) {
    const parse = (message) => {
        const messageCleaned = message.toLowerCase();
        if (messageCleaned.includes('Qui suis-je')) {
            actions.whoIAm();
        } else if (messageCleaned.includes('options')) {
            actions.testSendingOption();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    parse: parse,
                    actions,
                })
            )}
        </div>
    );
}
