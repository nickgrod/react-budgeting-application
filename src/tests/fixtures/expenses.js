import moment from 'moment'

export default [
    {
        id:'1',
        description: 'Gum',
        note: '',
        amount: 120,
        createdAt:0
    },
    {
        id:'2',
        description: 'Car',
        note: '',
        amount: 120000,
        createdAt:moment(0).subtract(4, 'days').valueOf()
    },
    {
        id:'3',
        description: 'Rent',
        note: '',
        amount: 35000,
        createdAt:moment(0).add(4, 'days').valueOf()
    }
]