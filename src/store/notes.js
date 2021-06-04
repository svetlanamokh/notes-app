export default {
  state: {
    notes: [
      {
        title: 'First Note',
        descr: 'Description for first note',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Second Note',
        descr: 'Description for second note',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Third Note',
        descr: 'Description for third note',
        date: new Date(Date.now()).toLocaleString()
      }
    ],
  },
  mutations: {
    addNotes (state, payload) {
      state.notes.push(payload) 
    },
    deleteNote (state, index) {
      state.notes.splice(index, 1)
    }
  },
  actions: {
    addNotes ({commit}, payload) {
      commit('addNotes', payload)
    },
    deleteNote ({commit}, index) {
      commit('deleteNote', index)
    }
  },
  getters: {
    getNotes (state) {
      return state.notes
    }
  }
}