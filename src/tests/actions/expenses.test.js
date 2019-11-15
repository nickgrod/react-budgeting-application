import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Tests removing of an expense action object', ()=> {
    const action = removeExpense({id:'11221'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '11221'
    })
})

test('Checks for the editing of an expense action object', () => {
    const action = editExpense('1234', { note: 'New Note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {note: 'New Note'}
    })
})
test('Checks to see if add expense works with values', () => {
    const expenseData = {
        description: 'Test', 
        note:'this is my note', 
        amount: 1, 
        createdAt: 1 
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    }
  )
})

test('Checks if an empty expense also works', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
                id:expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        

    })
})