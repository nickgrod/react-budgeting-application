import selectExpenses from '../../selectors/expenses'
import moment  from 'moment'

const expenses = [{
    id:'1',
    description: 'Gum',
    note:'',
    amount:120,
    createdAt:0
},
{
    id:'2',
    description: 'Rent',
    note:'',
    amount:120000,
    createdAt:moment(0).subtract(4, 'days').valueOf()
},
{
    id:'3',
    description: 'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4, 'days').valueOf()
}]

test('Should filter by text value' , () => {
    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2], expenses[1]
    ])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2], expenses[0]
    ])
})

test('Should filter by endDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[0], expenses[1]
    ])
})

// should sort by date
test('Should sort by date', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[2], expenses[0], expenses[1]
    ])
})