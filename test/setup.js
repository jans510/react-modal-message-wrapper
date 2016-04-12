import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body id="content"></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;