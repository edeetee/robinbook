import React, {Component} from 'react'

const corner = '<a href="https://github.com/edeetee/robinbook" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: fixed; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>'

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
        <div dangerouslySetInnerHTML={{__html: corner}}></div>
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
          <li>Download your facebook archive and metadata using <a href="https://addons.mozilla.org/en-US/firefox/addon/robinbook-setup/">the Robinbook extension</a></li>
          <li>Browse your backed up data using <a href="https://addons.mozilla.org/en-US/firefox/addon/robinbook-setup/">the Robinbook extension</a> to compile the data together</li>
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

        <h2>Restrict facebook's data access</h2>
        <h3><a href="https://addons.mozilla.org/en-US/firefox/addon/facebook-container/?src=search">Facebook Container</a> - Stop facebook global tracking</h3>
        <h3><a href="https://www.facebook.com/me?viewas=100000686899395&privacy_source=timeline_gear_menu#_">View Profile As</a> - See how your profile looks to others</h3>
        <h3><a href="https://chrome.google.com/webstore/detail/social-book-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae">Social Book Post Manager</a> - auto clear old data</h3>
        <h3><a href="https://www.facebook.com/help/delete_account/">Delete your facebook account</a></h3>
        
        <div style={{height:30}}></div>

        <h2>Use a social network that uses independent servers</h2>
        <p>
          These systems allow users to host their own servers and identities, so that you have full control over your data as it can be restricted to your machine.
        </p>
        <h3><a href="https://mastodon.social">Mastodon</a> - Twitter Clone</h3>
        <h3><a href="https://diasporafoundation.org/">Diasporia*</a> - Facebook Clone</h3>
        {/* <h3>Problem... People don't want to host their own servers</h3> */}
        <div style={{height:30}}></div>

        <h2>Distributed computing</h2>
        <p>These are full ecosystems allowing current browsers to connect to decentralized networks.</p>
        <h3><a href="https://blockstack.org/">Blockstack</a> - personally controlled data storage and identity</h3>
        <div style={{height:30}}></div>

        <h2>What do we need?</h2>
        <p>More people interested and involved!</p>
      </div>
    )
  }
}