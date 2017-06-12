import React, { Component } from 'react';
import Radium from 'radium';

// styles for styling react components inline
const styles = {
  press: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    border: 'none',
    padding: 0,
    margin: 0,
    fontSize: 18,
    backgroundColor: '#FF4032',
    color: 'white',
  },
  pressContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  halendrHeader: {
    position: 'relative',
    width: '100%',
    height: 100,
    backgroundColor: '#FF4032',
  },
  headerImage: {
    position: 'relative',
    display: 'block',
    height: 70,
    margin: 'auto',
    top: 10,
  },
  pressText: {
    position: 'relative',
    width: '75%',
    top: 90,
    margin: 'auto',
    marginBottom: 20,
  },
  pressTextTitle: {
    fontSize: 24,
    color: '#202020',
  },
};

// Radium allows for inline css styling on react components,
// which I couldn't do through the stylesheet cause im retarded I guess
@Radium
class RisePress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: '',
    };
  }

  render() {
    return (
      <div style={styles.pressContainer}>
        <div style={styles.halendrHeader}>
          <a href="/">
            <img style={styles.headerImage} src="../images/hLogoTransparent.png" alt="" />
          </a>
          <div style={styles.pressText}>
            <p style={styles.pressTextTitle}>The Hunt Is Over. </p>
            <br />
            <p>
              <b>HONG KONG, June 02, 2017 </b> – Halendr today announced its plans to launch in Hong Kong. The social community, which will initially
              launch its website and follow up with a mobile application,
            aims to connect users with everything happening around them based on their interests, location and preferences. The website will go live on 01 September 2017.
            </p>
            <p>
Halendr will connect users with more of what they enjoy, new things to do and experiences with others. The platform aims to simplify the
process of finding things to do and offer suggestions to users based on the intelligent study of their behaviour. Beyond core functionalities, Halendr aims to be an active and
vibrant community allowing organisers and hosts to connect with a wider audience of attendees. Features like the proposed “Tell Me What To Do” and “Happening Now” functions,
will allow users to discover things happening around them at any time within a matter of minutes. From design to implementation, usability and user experience remain the focus
of the platform. “It has been a challenging journey especially with the short time frame from inception to launch but we are excited for the future. Leading the design of the
platform means keeping users at the heart of everything we do”, said Maritsa Cortes, Halendr’s Lead Designer.
            </p>
            <p>
With traditional ways of finding things to do being both time consuming and limited in scope, the social community aims to offer a bigger and better experience that is focused on
the attendee as opposed to the event itself. Existing platforms that feature things happening in an area are usually restricted to the events they are in partnership with or do not
offer users a convenient way for discovery, and more often than not they are built around the event or organiser. “The hunt will soon be over”, said Hasanal Zafrullah, CEO & Co-founder
of Halendr. “We want people to go on Halendr and in minutes find something to do, and do it. We’re talking anything from your neighbour’s bake sale to a Britney concert.”
            </p>
            <p>
            Following its anticipated launch in Hong Kong, the social community aims to share its vision with the world and expand to further cities. Globally, consumer spending on
            leisure and recreation is currently at an all-time high and is only expected to surge in the coming years. “In countries where consumers spend more on leisure and recreation,
            there is an overall demand for ‘things to do’ and a significant presence of both commercial and non-commercial activities; consumers tend to go out more and ‘fun’ cities tend
            to be situated in these countries. In economic terms, this means both the demand and supply are high”, said Zafrullah. “We’re glad we have chosen Hong Kong to launch, it really
            is the ideal place to start our journey.”
            </p>
            <br />
            <p>
              <b>About Halendr:</b> Halendr is a Hong Kong-based startup with a mission to connect people with everything happening around them at their fingertips.
              The company was founded in response to co-founder Hasanal Zafrullah’s frustration with the hassle involved in finding things to do. Halendr is led by co-founders Hasanal Zafrullah
              and Paul Spangfort and passionately delivered by its people dedicated to redefining the way users connect with the world.
            </p>
            <br />
            <p>
              <b>Press Contact</b> <br />
            press@halendr.com
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}


export default RisePress;
