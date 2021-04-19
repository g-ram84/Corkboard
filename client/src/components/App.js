import React from 'react';
import ResourceItem from './ResourceItem';

const App = () => {
  return (
    <ResourceItem title={"Graeme"} type={"video"} description={"A video of someone skiing"} source={"https://www.youtube.com/embed/131d3J1Qfac"} />
  )
}

export default App;