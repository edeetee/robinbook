import React, {Component} from 'react'

//https://www.materialpalette.com/green/blue

var centerize={
  display: 'flex',  
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  minHeight: '100vh',
  backgroundColor: '#388e3c'
}

var app = { 
  display: 'flex',  
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '13px 10px 50px -30px',
  width: 350,
  maxWidth: 500,
  padding: 10,
  margin: 10,
  backgroundColor: 'hsl(0, 0%, 95%)',
  borderRadius: 3
}

export default class Index extends Component{
  constructor(props){
    super(props)
    this.state = {
      debugText: ''
    }
  }

  render(){
    return (
      <div style={centerize}>
        <div>{this.state.debug}</div>
        <div style={app}>
          <h1>Test 12345</h1>
          <div style={{height: 30}} />
        </div>
        <div style={{visibility: 'hidden'}}>{this.state.debug}</div>
      </div>
    )
  }
}