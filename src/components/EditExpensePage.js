import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'


export class EditExpensePage extends React.Component {
    onRemove= () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <p>Editing Expense</p>
                <ExpenseForm
                expense ={this.props.expense}
                  onSubmit={this.onSubmit}
                />
                <button onClick ={this.onRemove}>Remove</button>
            </div>
          )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)