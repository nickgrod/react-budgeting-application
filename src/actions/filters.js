//set a new text filter
export const setTextFilter = (filter = '') => ({
    type: 'SET_FILTER',
    filter
})

//change the sort to sort by amount

export const sortByAmount =() => ({
    type: 'SORT_AMOUNT'
})

//change the sort to sort by date

export const sortByDate =() => ({
    type: 'SORT_DATE'
})

//change start date

export const setStartDate = (date = undefined) => ({
    type: 'SET_START',
    date
})

//change end date

export const setEndDate = (date = undefined) => ({
    type: 'SET_END',
    date
})