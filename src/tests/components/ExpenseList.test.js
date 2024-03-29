import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('Should render expenselist with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]}/>)
    expect(wrapper).toMatchSnapshot()
})