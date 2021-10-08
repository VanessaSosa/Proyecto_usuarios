import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: []
  },
  mutations: {
    setPersonas(state, payload) {
      state.personas = payload;
    },
    pushPersona(state, payload) {
      state.personas.push(payload);
    }
  },
  actions: {
    async cargarPersonas({ commit }) {
      const peticion = await fetch('https://p76backend.herokuapp.com/users');
      const data = await peticion.json();
      commit('setPersonas', data);
      //console.table(data);
    },
    async crearPersona({ commit }, objPersona) {
      const peticion = await fetch('https://p76backend.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objPersona)
      });
      //Capturamos la persona recién insertada
      const data = await peticion.json();
      commit('pushPersona', data);
    },
    async eliminarPersona({ commit }, obj) {
      const peticion = await fetch('https://p76backend.herokuapp.com/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });

    }
  },
  modules: {
  }
})
