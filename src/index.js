import './input.css';
import InitialPageLoad from './initialPageLoad.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', () => InitialPageLoad());