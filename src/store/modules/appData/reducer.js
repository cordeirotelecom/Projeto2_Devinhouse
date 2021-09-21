



const INITIAL_STATE = {
    messages: [],
    channels: [],
    triggers: []
}


const appData = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'ADD_MESSAGE':
            //console.log("state", state)
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload.message
                ]
            }

        case 'LOAD_INFO':
            const { info } = action.payload
            return {
                ...info
            }

        default:
            return state
            
    }

}

export default appData