export const state = () => ({
  counter: 1
})

export const mutations = {
  countUp: function(state){
    state.counter++
  }
}