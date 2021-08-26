import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Made with ❤️..</h1>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App