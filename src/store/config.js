export const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco
    number: 0,
}

export function reducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 } //Peguei o estado atual , clonei e só alterei o atributo number
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}