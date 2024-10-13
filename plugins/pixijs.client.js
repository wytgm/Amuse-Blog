// ~/plugins/pixijs.client.js
import * as PIXI from 'pixi.js';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    console.log('PIXI.js plugin loaded on client');
    return {
      provide: {
        PIXI
      }
    };
  } else {
    console.log('PIXI.js plugin skipped on server');
  }
});