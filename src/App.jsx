// import Counter from './Counter'
// import Dumbo from './Dumbo'
// import ScoreKeeper from './ScoreKeeper'
// import EmojiClicker from './EmojiClicker'

// import LuckyN from './LuckyN';
// import {sum} from "./utils"


// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every(v => v === dice[0]);
// }

import BoxGrid from './BoxGrid';
import './App.css';

function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4"/>
      <LuckyN winCheck={allSameValue}  numDice={3} title='Roll the same number'/> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper numPlayers={5} target={5} /> */}
      {/* <h1>State Demo</h1>
      <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );
}

export default App
