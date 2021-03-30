/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class ChatModel {
    constructor(config) {
        this.config = config;
        this.socket = new WebSocket('ws://andreychatserve.herokuapp.com/');

        this.socket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            this.author = newMessage.payload.author;
            this.message = newMessage.payload.message;
            this.config.getChatData(this.message, this.author);
        };

        this.socket.onerror = (event) => {
            console.log('onerror', event);
        };

        this.socket.onclose = (event) => {
            console.log('onclose', event);
        };
    }
}
