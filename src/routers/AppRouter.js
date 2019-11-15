import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpensePageDashboard from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={ExpensePageDashboard} />
        <Route exact path="/create" component={AddExpensePage} />
        <Route exact path = "/edit/:id" component = {EditExpensePage}/>
        <Route exact path = "/help" component = {HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  
    </BrowserRouter>
  );
export default AppRouter;