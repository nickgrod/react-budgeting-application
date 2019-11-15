import moment from 'moment'

//default state
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

//reducer that takes in the default state and decides what to do when actions are passed in
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                text: action.filter
            }
        case 'SORT_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_DATE':
                    return{
                        ...state,
                        sortBy: 'date'
                    }
        case 'SET_START':
            return{
                   ...state,
                    startDate: action.date
            }
        case 'SET_END':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}
