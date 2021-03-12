import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
import MealDetails from './components/MealDetails/MealDetails';
import MealFinder from './components/MealFinder/MealFinder';

function App() {
  const [likeColor, setLikeColor] = useState('')
  // const handleLike = () => {
  //   const color = likeColor ? '' : 'primary';
  //   setLikeColor(color)
  // }
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
      <MealDetails></MealDetails>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
