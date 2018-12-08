import React from 'react'
import ReactDOM from 'react-dom'
import aws_exports from './config'
import Amplify, { Auth } from 'aws-amplify'
//import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(aws_exports)
const origin_url =  'https://d3eaxtdmx72vgn.cloudfront.net'

const AmazonLoginButton = ({}) => {

   const afterClick = evt => {
      let options = { scope: 'profile' }
      amazon.Login.authorize(options, 
         function(response) {
            if(response.error)
               console.alert('Login Error')
            else
               amazon.Login.retrieveProfile(response.access_token, function(response) {
                  alert(response)
               })
         })
      evt.preventDefault()
      return false;
   }

   return (
      <a href="" id="LoginWithAmazon" onClick={afterClick}>
          <img border="0" alt="Login with Amazon"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
                  width="156" height="32" />
      </a>
   )
}

class Main extends React.Component {

   constructor(props) {
      super(props)
      this.state = {}
   }

   render() {
      return (
      <div >
      <AmazonLoginButton />
      </div>
         )
   }
}

document.addEventListener('DOMContentLoaded', _ => {
   ReactDOM.render(<Main />, document.querySelector('#content'))
})

export { Main as default }
