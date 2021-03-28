/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export class ChatView {
    constructor(config) {
        this.config = config;
        this.$viewChat = this.generateChat();
        this.renderChatMessage();
    }

    generateChat() {
        return $(`
        <div class="container">
        <input class="js-input-author" type="text" placeholder="Author">
            <input class="js-input-message" id="input-message" type="text" placeholder="Type your messages here">
            <i class="fas fa-paper-plane" id="send-message"></i>
            <div class="js-add-message"></div>
        </div>
        `).click((e) => this.onClickChatButton(e));
    }

    addChatData(message, author) {
        const currentChatInputValue = $('#input-message').val();
        const initialChatInputValue = $('#input-message').val('');
        const currentAuthorInputValue = $('.js-input-author').val();

        if (currentChatInputValue && currentAuthorInputValue) {
            this.renderChatMessage(message, author);
        }
        return initialChatInputValue;
    }

    renderChatMessage(message, author) {
        this.$container = $('.js-add-message');
        this.$container.append(`<p class="message-text"><span class="message-author">${author}: </span>${message}</p>`);
    }

    onClickChatButton(e) {
        const chatButton = $(e.target).hasClass('fa-paper-plane');
        if (chatButton) {
            const currentChatInputValue = $('#input-message').val();
            const currentAuthorInputValue = $('.js-input-author').val();
            this.config.addChatData(currentChatInputValue, currentAuthorInputValue);
        }
    }
}
