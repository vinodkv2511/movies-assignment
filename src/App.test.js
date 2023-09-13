
import { shallow } from 'enzyme'

import { App } from './App';


describe('Rendering .. ', () => {

let wrapper

  beforeEach(()=>{
      wrapper = shallow(<App setActiveTab={()=>{}}/>)
  })
  it("Should render", ()=>{})

})