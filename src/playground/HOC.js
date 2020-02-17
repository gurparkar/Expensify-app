import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
    return <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
      </div>
}

const requireAuthentication = (WrappedComponent) => {
      return (props) => (
            <div>
                  Please Login to see info here
                  <WrappedComponent  {...props}></WrappedComponent>
            </div>
      )
}

const withAdminWarning = (WrappedComponent) => {
      return (props) => (
          <div>
                <p>This is privated Info. Please don't share it</p>
                <WrappedComponent {...props}/>
          </div>
      )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo info = "There are the given details"/>, document.getElementById('app'))