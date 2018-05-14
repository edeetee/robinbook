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

          a{
            color: #07C;
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
        <h3>More information below...</h3>
        <div style={{height:100}}></div>

        <h1>What now?</h1>
        <p>Put your data to use! Upload it to a service that shares your values.</p>
        <div style={{height:20}}></div>
        <h2>Use a social network that uses independent servers</h2>
        <p>
          These systems allow users to host their own servers and identities, so that you have full control over your data as it can be restricted to your machine.
        </p>
        <a href="https://mastodon.social"><h3>Mastodon - Twitter Clone</h3></a>
        <a href="https://diasporafoundation.org/"><h3>Diasporia* - Facebook Clone</h3></a>
        {/* <h3>Problem... People don't want to host their own servers</h3> */}
        <div style={{height:30}}></div>
        <h2>Distributed computing</h2>
        <p>These are full ecosystems allowing current browsers to connect to decentralized networks.</p>
        <a href="https://blockstack.org/"><h3>Blockstack - personally controlled data storage and identity</h3></a>
        <div style={{height:30}}></div>
        <h2>What do we need?</h2>
        <p>More people interested and involved!</p>
      </div>
    )
  }
}