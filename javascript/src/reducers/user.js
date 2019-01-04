const defaultState = {
    user : {}
}

export const user = (state = defaultState, action) =>{
    switch (action.type){
        case 'USER_LOADED':
        console.log ('USER LOADED', action);
        return {...state, user : action.user};
    default : 
        return state;
    }

}