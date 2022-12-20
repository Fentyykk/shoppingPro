const initialData = {
    count: 10
}

function countReducer(state = initialData, action) {
    switch (action.type) {
        case "ADD" : return {
            count: ++state.count
        }
        case "SUBTRACT" : return {
            count: --state.count
        }
        case "RESET" : return {
            count: 0
        }
        default: {
            return state
        }
    }
}

export default countReducer;