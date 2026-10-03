// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// React Router 7 expects these browser globals, which CRA's jsdom lacks
Object.assign(global, { TextEncoder, TextDecoder });
