import {
    SET_TODO_LIST,
    ADD_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
    EDIT_TASK_SUCCESS,
    CHANGE_ADD_TASK_INPUT_VALUE,
    CHANGE_EDIT_TASK_INPUT_VALUE
} from '../actions/todo'

let initialState = {
    todo: {tasks: []},
    todoLists: [],
    addTaskInputValue: '',
    editTaskInputValue: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state, todo: action.todo
            }
        case CHANGE_ADD_TASK_INPUT_VALUE:
            return {
                ...state, addTaskInputValue: action.inputValue
            }
        case ADD_TASK_SUCCESS: {
            let stateCopy = {...state, addTaskInputValue: ""}
            stateCopy.todo.tasks.push(action.data)
            return stateCopy
        }
        case DELETE_TASK_SUCCESS: {
            let stateCopy = {
                ...state
            }
            let indexOfObject = stateCopy.todo.tasks.findIndex(object => {
                return object.id === action.id;
            });
            stateCopy.todo.tasks.splice(indexOfObject, 1)
            return stateCopy
        }
        case EDIT_TASK_SUCCESS: {
            let stateCopy = {...state}
            let indexOfObject = stateCopy.todo.tasks.findIndex(object => {
                return object.id === action.id;
            });
            stateCopy.todo.tasks[indexOfObject].title = action.newTitle
            stateCopy.editTaskInputValue = ''
            return stateCopy
        }
        case CHANGE_EDIT_TASK_INPUT_VALUE: {
            return {
                ...state, editTaskInputValue: action.inputValue
            }
        }
        default:
            return state
    }

};


export default todoReducer;

