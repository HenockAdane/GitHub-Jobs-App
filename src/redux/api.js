export const apiStore = (api) => ({
    type: "FIRSTAPI",
    api
})


const IS = {
    APIObject: []
}

const APIReducer = (state = IS, action) => {
    switch(action.type){
        case "FIRSTAPI":
            return {...state, APIObject: [...action.api]};
        default: return state
    }
}

export default APIReducer