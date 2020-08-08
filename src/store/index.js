import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {},
    index: 0,
    videos: [
      {
        title: 'Game of Thrones Remix',
        src: require('../assets/videos/Game of Thrones Remix.mp4'),
        comments: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo cumque, ipsam voluptatibus iure esse accusamus hic! Omnis nisi culpa beatae ad alias ea, esse aspernatur numquam commodi at quisquam.',
          'Cool video!',
          'amazing!!!'
        ],
        likes: 123,
        dislikes: 4
      },
      {
        title: 'Chicago - We Both Reached For the Gun',
        src: require('../assets/videos/Chicago - We Both Reached For the Gun.mp4'),
        comments: [],
        likes: 232,
        dislikes: 11
      },
      {
        title: 'The Hobbit song - I will show you - GLOVER',
        src: require('../assets/videos/The Hobbit song - I will show you - GLOVER.mp4'),
        comments: ['I like it', 'Wow'],
        likes: 40,
        dislikes: 0
      },
      {
        title: 'THE SON OF FIRE - Game of Thrones Season 3 Remix',
        src: require('../assets/videos/THE SON OF FIRE - Game of Thrones Season 3 Remix.mp4'),
        comments: [],
        likes: 76,
        dislikes: 1
      }
    ]
  },
  mutations: {
    PLAY(state, video) {
      state.current = video
    },
    PLAY_DEFAULT(state) {
      state.current = state.videos[state.index]
    },
    LIKE(state) {
      if (!state.current.isLike) {
        state.current.likes++
        state.current.isLike = true
      } else {
        state.current.likes--
        state.current.isLike = false
      }
    },
    DISLIKE(state) {
      if (!state.current.isDislike) {
        state.current.dislikes++
        state.current.isDislike = true
      } else {
        state.current.dislikes--
        state.current.isDislike = false
      }
    },
    ADD_COMMENT(state, comment) {
      state.current.comments.push(comment)
    }
  },
  actions: {
    TO_PLAY({ commit }, video) {
      commit('PLAY', video)
    },
    TO_PLAY_DEFAULT({ commit }) {
      commit('PLAY_DEFAULT')
    },
    TO_LIKE({ commit }) {
      commit('LIKE')
    },
    TO_DISLIKE({ commit }) {
      commit('DISLIKE')
    },
    TO_ADD_COMMENT({ commit }, comment) {
      commit('ADD_COMMENT', comment)
    }
  },
  modules: {}
})
