/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class ChatModel {
    async addChatData(message, author) {
        const socket = new WebSocket('ws://andreychatserve.herokuapp.com/');

        socket.onopen = function () {
            const sendMessageEvent = {
                type: 'SEND_MESSAGE',
                payload: {
                    author: `${author}`,
                    message: `${message}`,
                },
            };

            const json = JSON.stringify(sendMessageEvent);

            socket.send(json);
        };

        socket.onmessage = (event) => {
            console.log('onmessage', event);
        };

        socket.onerror = (event) => {
            console.log('onerror', event);
        };

        socket.onclose = (event) => {
            console.log('onclose', event);
        };
    }
}
