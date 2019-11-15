import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'


const store = configureStore()

//happens everytime an event happens on the store
store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)

})

store.dispatch(addExpense({description: 'Gas bill', note: 'July 2019', amount: 1224}))
store.dispatch(addExpense({description: 'Water bill', note: 'July 2019', amount: 1574}))

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
