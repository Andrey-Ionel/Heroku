/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

import { ChatView } from '../view/ChatView';
import { ChatModel } from '../model/ChatModel';

export class ChatController {
    constructor() {
        const $app = $('.app');

        this.chatView = new ChatView({
            sendChatMessage: (message, author) => this.sendChatMessage(message, author),
        });

        this.chatModel = new ChatModel({
            getChatData: (message, author) => this.getChatData(message, author),
        });

        $app.append(this.chatView.$viewChat);
    }

    async getChatData(message, author) {
        this.chatView.renderChatMessage(message, author);
    }

    sendChatMessage(message, author) {
        const sendMessageEvent = {
            type: 'SEND_MESSAGE',
            payload: {
                message: `${message}`,
                author: `${author}`,
            },
        };
        const json = JSON.stringify(sendMessageEvent);
        this.chatModel.socket.send(json);
    }
}
