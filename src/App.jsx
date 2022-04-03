import { useState } from 'react';

import classes from './App.module.css';
import Champion from './Components/Champion';
import Information from './Components/Information';
import Signature from './Components/Signature';
import Years from './Components/Years';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <Champion />
      <div className={classes.content}>
        <Signature />
        <Information />
        <Years />
      </div>
    </div>
  );
}

export default App;
