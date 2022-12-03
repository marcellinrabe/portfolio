import config from './config';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

import 'react-chatbot-kit/build/main.css';

export default function Chat() {
    return (
        <div class="d-flex justify-content-center">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText="RM Bot"
            />
        </div>
    );
}
