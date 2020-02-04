export const state = () => ({
	headerText: "headerText"
})

export const getters = {
	getHeaderText: state=>{
		return state.headerText;
	}
}

export const mutations = {
	updateHeaderText (state, text) {
		state.headerText = text;
	},
	// remove (state, { todo }) {
	//   	state.list.splice(state.list.indexOf(todo), 1)
	// },
	// toggle (state, todo) {
	//  	 todo.done = !todo.done
	// }
}
