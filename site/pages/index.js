import React, {Component} from 'react'

export default class Index extends Component{
  constructor(props){
    super(props)
    this.state = {
      debugText: ''
    }
  }

  componentDidMount(){
    document.title = "Robinbook"
  }

  render(){
    return (
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'start',
        margin: '50px 40px',
        maxWidth: 900
      }}>
        <style jsx>{`
          span {
            font-weight: bold;
            background-color: black;
            color: white;
            padding: 0.15em;
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
            margin: 10px 10px;
          }

          ul {
            margin-top: 20px;
            padding-left: 30px;
          }

          ul > li{
            margin-top: 10px;
            margin-left: 30px;
            list-style-type: none;
          }
          
        `}</style>
        <span style={{fontSize: 90}}>Robinbook</span>
        <span style={{fontSize: 40, marginBottom: 30}}>Take back <i>your</i> data</span>
        <div style={{height:50}}></div>
        <p>
          On facebook, your data is their profit. You have no control over what happens to that data and, 
          if <a href="https://en.wikipedia.org/wiki/Cambridge_Analytica">what we know so far</a> is any indication, 
          facebook doesn't always have your best interests at heart.
        </p>
        <p>
          Robinbook will walk you through downloading the data facebook will let you download (your facebook archive)
          and will also allow you to download your valuable metadata facebook wants to keep behind it's walled garden.
        </p>
        <p>
          Using this data, you can retain the information that you have put into facebook.
          If we give people ownership of their data, it allows them to choose who to trust with it.
          Then, we have the power to pick platforms that respect our values both through their actions and implementations.
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