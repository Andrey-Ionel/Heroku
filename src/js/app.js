/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import $ from 'jquery';

import { ChatController } from './controller/ChatController';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/styles.css';

$(() => {
  const controller = new ChatController();
});
