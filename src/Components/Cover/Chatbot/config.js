import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './custom-message/Options';
import Picture from './Picture';
const botName = 'RM Bot';

const options = [
    { text: 'Qui suis-je ?', handler: () => {}, id: 1 },
    { text: 'Télécharger mon CV', handler: () => {}, id: 2 },
];

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hello ${botName}`, {
            loading: true,
        }),
        createChatBotMessage('options', {
            widget: 'options',
            loading: true,
            delay: 500,
            payload: {
                options: options,
            },
        }),
    ],

    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    customMessages: {
        options: (props) => <Options {...props} />,
    },

    widgets: [
        {
            widgetName: 'picture',
            widgetFunc: (props) => <Picture {...props} />,
        },
        {
            widgetName: 'options',
            widgetFunc: (props) => <Options {...props} />,
        },
    ],
};

export default config;
