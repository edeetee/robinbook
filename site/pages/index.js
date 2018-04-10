import React, {Component} from 'react'

//https://www.materialpalette.com/green/blue

// var centerize={
//   display: 'flex',  
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   flexDirection: 'row',
//   minHeight: '100vh',
//   backgroundColor: '#388e3c'
// }

// var app = { 
//   display: 'flex',  
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
//   boxShadow: '13px 10px 50px -30px',
//   width: 350,
//   maxWidth: 500,
//   padding: 10,
//   margin: 10,
//   backgroundColor: 'hsl(0, 0%, 95%)',
//   borderRadius: 3
// }

export default class Index extends Component{
  constructor(props){
    super(props)
    this.state = {
      debugText: ''
    }
  }

  render(){
    return (
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'start',
        margin: '50px 30px'
      }}>
        <style jsx>{`
          span {
            font-weight: bold;
            background-color: black;
            color: white;
            padding: 2px;
          }
        `}</style>
        <span style={{fontSize: 90}}>Robinbook</span>
        <span style={{fontSize: 40}}>Take back <i>your</i> data</span>
        <ol>
          <li>Download your facebook data using the robinbook scraper</li>
          <li></li>
          <li></li>
        </ol>
      </div>
    )
  }
}