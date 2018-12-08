import Main from '../src/index'
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('<Main />', function() {
   it('create', function() {
      const app = shallow(<Main />)
      expect(app).to.not.be.null
   })
})
