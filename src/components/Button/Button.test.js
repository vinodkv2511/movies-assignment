import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const dummyProps = {
    text: "Popular",
    onClick: jest.fn(),
    isActive: true

}

describe('Rendering .. ', () => {


    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<Button {...dummyProps} />)
    })
    it("Should render button text ", () => {
        expect(wrapper.text()).toEqual(dummyProps.text) 
    })
    it("should have class name tab_button and button_active", () => {
        expect(wrapper.hasClass('tab_button')).toEqual(true)
        expect(wrapper.hasClass('button_active')).toEqual(true)
    })

    it("should only have tab_button if isActive is not Passes", () => {
        wrapper = shallow(<Button text="Pop" onClick={jest.fn()} />)
        expect(wrapper.hasClass('tab_button')).toEqual(true)
        expect(wrapper.hasClass('button_active')).toEqual(false)
    })

    it("should only have tab_button if isActive false", () => {
        wrapper = shallow(<Button text="Pop" onClick={jest.fn()} isActive={false} />)
        expect(wrapper.hasClass('tab_button')).toEqual(true)
        expect(wrapper.hasClass('button_active')).toEqual(false)
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