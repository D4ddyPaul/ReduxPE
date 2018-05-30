import React from 'react';

import HerosVignette from '../COMPONENTS/HerosVignette.jsx';

const HerosOfYoutube = ({ heros }) => (
  <section id="herosMapGrid">
    <ul>
      {
        heros.map((props) => (
            <HerosVignette {...props} />
        ))
      }
    </ul>
  </section>
);


export default HerosOfYoutube;
