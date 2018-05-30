import React, { Component } from 'react';
import { connect } from 'react-redux';

import HerosOfYoutube from '../COMPONENTS/HerosOfYoutube.jsx';
import logoBobLennon from '../../Images/bobavatarfinal.jpg';
import teteBobLennon from '../../Images/BobLennon.png';
import logoAypierre from '../../Images/aypierreLogo.jpg';
import teteAypierre from '../../Images/Aypierre.png';

class HerosApp extends Component {
  render() {
    return (
      <div id="herosApp">
        <HerosOfYoutube {...this.props} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    heros: [
      {
        firstname: "",
        lastname: "",
        fakename: "BobLennon",
        channelCreationDate: "29 septembre 2011",
        picture: teteBobLennon,
        logo: logoBobLennon,
        linkToChannel: "https://www.youtube.com/user/fantabobgames",
        channelName: "Bob Lennon"
      },
      {
        firstname: "Aymeric",
        lastname: "Pierre",
        fakename: "Aypierre",
        channelCreationDate: "29 août 2007",
        picture: teteAypierre,
        logo: logoAypierre,
        linkToChannel: "https://www.youtube.com/user/aypierre",
        channelName: "Aypierre"
      },
      {
        firstname: "",
        lastname: "",
        fakename: "",
        channelCreationDate: "",
        picture: null,
        logo: null,
        linkToChannel: "",
        channelName: ""
      }
    ]
  };
}

function mapDispatchToProps () {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HerosApp)
