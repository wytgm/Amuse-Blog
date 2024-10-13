// ~/plugins/pixi-display-live2d.client.js
import { Live2DModel } from 'pixi-live2d-display';
import { Ticker, TickerPlugin } from '@pixi/ticker';
import { extensions } from '@pixi/extensions';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    console.log('pixi-live2d-display plugin loaded on client');

    // 注册 Ticker
    Live2DModel.registerTicker(Ticker);
    extensions.add(TickerPlugin);

    return {
      provide: {
        Live2DModel
      }
    };
  } else {
    console.log('pixi-live2d-display plugin skipped on server');
  }
});