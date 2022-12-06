import { createStore } from 'vuex';
import app from './app.js';
import game from './game.js';
import leaderBoard from './leaderBoard.js';
import module from './module.js';

// import {useRouter} from "nuxt/app";
// const router = useRouter();

const store = createStore({
  modules: {
    app,
    game,
    leaderBoard,
    module,
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
  // return {
  //   provide:  {
  //     vuex: store
  //   }
  // }
});