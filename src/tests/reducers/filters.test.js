import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Makes sure default values work for filter reducer', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('Should sortBy to date', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_FILTER', filter: 'test'})
    expect(state.text).toBe('test')
})

test('Should set startDate filter', () => {
    const action = {type: 'SET_START', date: moment(0).add(3, 'days')}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0).add(3, 'days'))
})

test('Should set endDate filter', () => {
    const action = {type: 'SET_END', date: moment(0).add(3, 'days')}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0).add(3, 'days'))
})