export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.cats.filter(pet => {
      return pet.species === 'cat'
    })
  }
}
