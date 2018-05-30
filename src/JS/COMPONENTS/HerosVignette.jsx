import React from 'react';

const HerosVignette = ({ fakename, picture, logo, firstname, lastname, linkToChannel, channelName }) => (
  <li className={fakename}>
    <div>
      <div className="image">
        <img src={picture} alt={fakename + " face"} />
      </div>
      <div className="content">
        <div className="images">
          <img src={logo} alt={fakename + " Logo"} />
        </div>
        <div>
          <h3><a href={"/" + fakename}>{fakename}</a></h3>
          <p className="name"><span>{firstname}</span><span>{" " + lastname}</span></p>
          <p className="lien">Go to channel : <a href={linkToChannel} target="_blank">{channelName}</a></p>
        </div>
      </div>
    </div>
  </li>
);

export default HerosVignette;
