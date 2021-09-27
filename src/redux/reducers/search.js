const initialState = {
    text: '',
    movies : [],
    loading: false,
    movie: []
};



const search = (state = initialState, action) => {
    console.log(state.text)
    switch(action.type) {
        case 'SEARCH_MOVIE':
            return {
                ...state,
                text: action.payload,
                loading: false 
        };
        case 'FETCH_MOVIES':
            return{
                ...state,
                movies: action.payload,
                loading: false
            };
        case 'FETCH_MOVIE':
            return{
                ...state,
                movie: action.payload,
                loading: false
            };
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}

export default search;