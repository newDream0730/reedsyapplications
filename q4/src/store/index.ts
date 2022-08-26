import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {
      author: {
        type: String,
        required: true
      },
      cover: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      },
      synopsis: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      upvoted: Boolean,
      upvotes: {
        type: Number,
        required: true
      }
    }
  },
  getters: {
  },
  mutations: {
    getData(state, bookslist) {
      state.data = bookslist;
    }
  },
  actions: {
  },
  modules: {
  }
})
