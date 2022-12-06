import React from 'react';
import { createClientMessage, createCustomMessage } from 'react-chatbot-kit';
import { useContext } from 'react';
import { dataContext } from '../../App/DataProvider';

const options = ['Qui suis-je ?', 'Télécharger mon CV'];

export default function ActionProvider({
    createChatBotMessage,
    setState,
    children,
}) {
    const { user } = useContext(dataContext);

    const pushMessage = (message) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    };

    const choosingOption = (option) => {
        const message = createClientMessage(option);
        pushMessage(message);
    };

    const whoIAm = () => {
        const message = createChatBotMessage(user.desc);
        pushMessage(message);
    };

    const testSendingOption = () => {
        const message = createCustomMessage('Qui suis-je', 'options', {
            payload: {
                options: options,
            },
        });

        pushMessage(message);
    };

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    actions: {
                        choosingOption,
                        whoIAm,
                        testSendingOption,
                    },
                })
            )}
        </div>
    );
}
