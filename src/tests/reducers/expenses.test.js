import expensesReducer from '../../reducers/expenses'

test('Should test adding an expense', () => {
    const expense = {
        id:'1',
        description: 'Gum',
        note: '',
        amount: 120,
        createdAt:0
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense: expense

    }
    const state = expensesReducer(undefined, action)
    expect(state).toEqual([expense])
})

test('Should remove an expense', () => {
    const expenseOne = {
        id:'1',
        description: 'Gum',
        note: '',
        amount: 120,
        createdAt:0
    }
    const expenseTwo =         {
        id:'2',
        description: 'Game',
        note: '',
        amount: 12000,
        createdAt:0
    }
    const currentState = [
            expenseOne, expenseTwo
         ]
     
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    const state = expensesReducer(currentState, action)
    expect(state).toEqual([expenseTwo])

})

test('Should edit an expense', () => {
    const currentState = [
        {
            id:'1',
        description: 'Gum',
        note: '',
        amount: 120,
        createdAt:0
        }
    ]  
    const action = {
        type: 'EDIT_EXPENSE',
        id:'1',
        updates:{
            description: 'GAMES'
        }
    }
    const state = expensesReducer(currentState, action)
    expect(state).toEqual([{
        id:'1',
        description: 'GAMES',
        note: '',
        amount: 120,
        createdAt:0
    }])
})