import { useState } from 'react';

import Score from './components/Score';
import Game from './components/Game';
import Btn from './components/UI/Btn';
import Rules from './components/Rules';

const App = () => {
  const [showRules, setShowRules] = useState(false);

  const BtnClickHandler = () => {
    console.log('change the damn previous value');
    setShowRules((previousValue) => !previousValue);
  };

  const RulesCloseClickHandler = () => {
    setShowRules(false);
  };

  return (
    <main className='font-barlow-semi-condensed min-h-screen p-[32px] bg-gradient-radial'>
      <Score />
      <Game />
      <Btn onClick={BtnClickHandler} title='Rules' />
      {showRules && <Rules onCloseClick={RulesCloseClickHandler} />}
    </main>
  );
};

export default App;
