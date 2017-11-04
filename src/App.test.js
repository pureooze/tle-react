import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount, shallow, Enzyme } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import expect from 'jest'

Enzyme.configure({
  adapter: new Adapter()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders without crashing (snapshot)', () => {
  const app = renderer.create(<App />).toJSON()
  expect(app).toMatchSnapshot()
})
