import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';


const App = (props) => {
  const [outputsList, setOutputsList] = useState([]);

  useEffect(() => {
      setOutputsList([{textVar1: 'text 1', textVar2: 'text 2', textVar3: 'text 3'},{textVar1: 'text 2-1', textVar2: 'text 2-2', textVar3: 'text 2-3'}]);
  }, []);

  return (
    <div>
      <h1>Carousel</h1>
      {outputsList.length === 0 && <div>Loading...</div>}
      {outputsList.length > 0 &&
        <Carousel outputsList={outputsList} img_width={300} img_height={300}
        visibleImages={3} duration={750}/>
      }
    </div>
  );
};

export default App;
