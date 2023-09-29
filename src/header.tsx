import { useEffect, useState, useContext } from 'react'
import './App.css'
import { StyledHeader, StyledButton, StyledNumberDisplay } from './styles';
import { BoardContext } from './BoardContext';

const Header = () => {
  const [count, setCount] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [time, setTime] = useState(0);
  const { boardSize, setBoardSize } = useContext(BoardContext);

  const resetGame = () => {
    setIsTiming(false);
    setCount(0);
    setTime(0);
  }

    useEffect(() => { 
      let interval: number | undefined;
  
      if (isTiming) {
        interval = window.setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else {
        window.clearInterval(interval);
      }
    }, [isTiming]);


  function boardSizeChange() {
    if (boardSize === 'sm') {
      setBoardSize('md');
      resetGame();
    } else if (boardSize === 'md') {  
      setBoardSize('lg');
      resetGame();
    } else {
      setBoardSize('sm');
      resetGame();
    }
    console.log(boardSize)
  }
  
  function timeUp() {
    if(!isTiming) {
      setIsTiming(true);
    }
  }
  const { score } = useContext(BoardContext);
  
  
  return (
    <StyledHeader>
      <StyledNumberDisplay>
        {score}
      </StyledNumberDisplay>
      <StyledButton onClick={boardSizeChange}>Size</StyledButton>
      <StyledButton
      onClick={timeUp}>:D</StyledButton>
      <StyledNumberDisplay>
        {time}
      </StyledNumberDisplay>
    </StyledHeader>
  )
}

export default Header