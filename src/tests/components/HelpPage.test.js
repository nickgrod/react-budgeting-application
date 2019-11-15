import React from 'react'
import { shallow } from 'enzyme'
import HelpPage from '../../components/HelpPage'

test('Should render the help page correctly', () => {
    const wrapper = shallow(<HelpPage/>)
    expect(wrapper).toMatchSnapshot()
})