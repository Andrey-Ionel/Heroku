/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

import { ChatView } from '../view/ChatView';
import { ChatModel } from '../model/ChatModel';

export class ChatController {
    constructor() {
        const $app = $('.app');

        this.chatView = new ChatView({
            addChatData: (message, author) => this.addChatData(message, author),
        });

        this.chatModel = new ChatModel();

        $app.append(this.chatView.$viewChat);
    }

    async addChatData(message, author) {
        await this.chatModel.addChatData(message, author);
        this.chatView.addChatData(message, author);
    }
}
