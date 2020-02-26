import React from 'react'
import { shallow } from 'enzyme'

import toJson from 'enzyme-to-json'



// import ReactShallowRenderer from 'react-test-renderer/shallow'

import Header from '../../Components/Header'

test('Should render Header correctly heres', () => {
     const wrapper = shallow(<Header/>)
     console.log("Wrapper:", wrapper)
     expect(wrapper).toMatchSnapshot()

})




     //expect(wrapper.find('h1').text()).toBe("Expensify ")


      // const renderer = new ReactShallowRenderer()
      // renderer.render(<Header />)
      // expect(renderer.getRenderOutput()).toMatchSnapshot()
      // console.log(renderer.getRenderOutput())
