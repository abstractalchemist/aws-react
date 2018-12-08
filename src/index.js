import React from 'react'
import ReactDOM from 'react-dom'
import aws_exports from './config'
import Amplify, { Auth } from 'aws-amplify'
//import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(aws_exports)

class Main extends React.Component {

   constructor(props) {
      super(props)
      this.state = {}
   }

   render() {
      return (<div />)
   }
}

document.addEventListener('DOMContentLoaded', _ => {
   ReactDOM.render(<Main />, document.querySelector('#content'))
})

export { Main as default }
