import { useEffect, useState } from 'react'
import './App.css'
import { StyledHeader, StyledButton, StyledNumberDisplay } from './styles';
import { useBoardInfo } from './App';

const Header = () => {
  const [count, setCount] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [time, setTime] = useState(0);
  const { boardSize, setBoardSize } = useBoardInfo();

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
    } else if (boardSize === 'md') {  
      setBoardSize('lg');
    } else {
      setBoardSize('lg');
    }
    console.log(boardSize)
  }
  
  function increment() {
    setCount(count + 1);

    if(!isTiming) {
      setIsTiming(true);
    }
  }
  
  
  return (
    <StyledHeader>
      <StyledNumberDisplay>
        {count}
      </StyledNumberDisplay>
      <StyledButton onClick={boardSizeChange}>Size</StyledButton>
      <StyledButton
      onClick={increment}>:D</StyledButton>
      <StyledNumberDisplay>
        {time}
      </StyledNumberDisplay>
    </StyledHeader>
  )
}

export default Header