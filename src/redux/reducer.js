const initialState={
    upcomingMovies:[], 
    isLoggedin: false,
    searchedItem:""
};


export default function Reducers(state= initialState, action){
    switch(action.type){
        case 'GET_UPCOMING_MOVIES':
            return {...state, upcomingMovies: action.payload};
            case "SEARCHED_ITEM":
        return { ...state, searchedItem: action.payload };

            default:
                return state;
}
    }
