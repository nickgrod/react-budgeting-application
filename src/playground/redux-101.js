//add expense
const addExpense = (
    {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


//remove expense
const removeExpense = ( {id} ) => ({
    type: 'REMOVE_EXPENSE',
    id
})



//edit expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//set a new text filter
const setTextFilter = (filter = '') => ({
    type: 'SET_FILTER',
    filter
})

//change the sort to sort by amount

const sortByAmount =() => ({
    type: 'SORT_AMOUNT'
})

//change the sort to sort by date

const sortByDate =() => ({
    type: 'SORT_DATE'
})

//change start date

const setStartDate = (date = undefined) => ({
    type: 'SET_START',
    date
})

//change end date

const setEndDate = (date = undefined) => ({
    type: 'SET_END',
    date
})

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = typeof text !== 'string' || text === '' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1
        }
    })
}



//expense reducers

const expenseReducerDefaultState = []

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
                return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return [...state].filter((expense) => {
                return expense.id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                    ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

//default state
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//reducer that takes in the default state and decides what to do when actions are passed in
const filtersReducer = (state = filtersReducerDefaultState, action) => {
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


const store = createStore(combineReducers({
    'expenses': expensesReducer,
    'filters': filtersReducer
}))
store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)

})

const expenseOne = store.dispatch(addExpense({description: 'rent payment', note: 'note', amount: 2000, createdAt: 1000}))

const expenseTwo = store.dispatch(addExpense({description: 'des2', note: 'note2', amount: 2222, createdAt: -2}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 333}))

// store.dispatch(setTextFilter('rent'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(1000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(4000))

// const demoState = {
//     expenses: [{
//         id: 'dfsdf',
//         description: 'dffdsf',
//         note: 'dfsdfdsfsdfsf',
//         amount: 54044,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount, this value can change
//         startDate: undefined,
//         endDate: undefined
//     }
// }
