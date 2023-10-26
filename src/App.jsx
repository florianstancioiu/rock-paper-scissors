import { useState } from 'react';

import Score from './components/Score';
import Game from './components/Game';
import Btn from './components/UI/Btn';

const App = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <main className='font-barlow-semi-condensed min-h-screen p-[32px] bg-gradient-radial'>
      <Score />
      <Game />
      <Btn title='Rules' />
    </main>
  );
};

export default App;
