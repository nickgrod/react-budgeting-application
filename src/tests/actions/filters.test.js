import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('Should generate SET_START object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START',
        date: moment(0)
    })
})

test('Should generate SET_END object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END',
        date: moment(0)
    })
})

test('Should return a SET_FILTER obj', () => {
    const action = setTextFilter('date')
    expect(action).toEqual({
        type: 'SET_FILTER',
        filter: 'date'
    })
})

test('Should return an empty SET_FILTER obj', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_FILTER',
        filter: ''
    })
})

test('Should return sort by amount obj', () => {
    const action = sortByAmount()
    expect(action).toEqual({type: 'SORT_AMOUNT'})
})

test('Should return a SORT_DATE obj', () => {
    const action = sortByDate()
    expect(action).toEqual({ type: 'SORT_DATE'})
})