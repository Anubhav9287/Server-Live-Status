import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls:[]
  },
  mutations: {

  },
  actions: {
    async deleteUrl(context, url) {
      console.log('store is being asked to delete '+url.id);
      await idb.deleteUrl(url); 
    },
    async getUrls(context) {
      context.state.urls = [];
      let urls = await idb.getUrls();
      urls.forEach(c => {
        context.state.urls.push(c);
      });
    },
    async saveUrl(context, url) {
      console.log("Save URL function")
      await idb.saveUrl(url);
    },
    
  }
})
