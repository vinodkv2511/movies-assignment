import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const dummyProps = {
    text: "Popular",
    onClick: jest.fn()
}

describe('Rendering .. ', () => {


    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<Button {...dummyProps} />)
    })
    it("Should render button text ", () => {
        expect(wrapper.text()).toEqual(dummyProps.text) 
    })
    
    

})

describe('functionality ..', ()=>{
    
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<Button {...dummyProps}/>)
    })

    describe('Clicking now', () => {

        beforeEach(()=>{
            wrapper.simulate('click')
        })

        it("Should call the onClick function passed through props", ()=> {
            expect(dummyProps.onClick).toHaveBeenCalledTimes(1)
        })
    })
    
})