export function reducer (state, action){
    switch (action.type){
        
        case "ADDING_NEW_TASK":
            return [...state, action.payload];

        case "CLEAR_COMPLETED":
            return state.filter(task => {
                    return !task.completed
                  })

        case "TOGGLE_TASK":
            return(
                state.map(task => {
                    if (task.id === action.payload) {
                      return {
                        ...state, 
                        completed: !task.completed
                      }
                    }
                })
            )
            

        default: 
            return state;
        
    }
}

export const initialState = [{
    name: 'Learn about reducers',
    completed: false,
    id: Date.now()
}]