import React, {Component} from 'react'

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
        margin: '50px 30px',
        maxWidth: 1000
      }}>
        <style jsx>{`
          span {
            font-weight: bold;
            background-color: black;
            color: white;
            padding: 2px;
          }

          ol {
            list-style-type: none;
            counter-reset: list-counter;
            padding-left: 20px;
          }

          ol > li {
            font-size: 20px;
            margin-top: 30px;
            vertical-align: text-bottom;
          }

          ol > li :before {
            background: black;
            color: white;
            font-size: 40px;
            padding: 0 3px;
            margin-right: 20px;

            content: counter(list-counter);
            counter-increment: list-counter;
          }

          p{
            margin: 10px 0;
          }

          i{
            font-size: 110%;
          }

          ul {
            margin-top: 20px;
            padding-left: 30px;
          }

          ul > li{
            margin-top: 10px;
            list-style-type: none;
          }
          
        `}</style>
        <span style={{fontSize: 90}}>Robinbook</span>
        <span style={{fontSize: 40, marginBottom: 20}}>Take back <i>your</i> data</span>
        <p>
          On facebook, your data is their profit. You have no control over what happens to that data and, 
          if <a href="https://en.wikipedia.org/wiki/Cambridge_Analytica">what we know so far</a> is any indication, 
          facebook doesn't always have your best interests at heart.
        </p>
        <p>
          Robinbook will walk you through downloading the data facebook will let you download (your facebook archive)
          and will also allow you to download your valuable data facebook wants to keep behind it's walled garden.
        </p>
        <ol>
          <li>Download your facebook archive and metadata using Robinbook</li>
          <li>Browse your backed up data using Robinbook to compile the data together</li>
          <li>Delete private messages, posts, friends and pages you don't want facebook to <i>own</i></li>
          <ul>
            <li>Or delete all of your messages</li>
            <li>Or delete your entire account</li>
          </ul>
        </ol>
      </div>
    )
  }
}