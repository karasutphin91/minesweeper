import { useContext } from 'react'
import './App.css'
import { StyledHeader, StyledButton, StyledNumberDisplay } from './styles';
import { BoardContext } from './BoardContext';

const Header = () => {
  const { score } = useContext(BoardContext);
  const { resetGame } = useContext(BoardContext);
  const { time } = useContext(BoardContext);
  
  
  return (
    <StyledHeader>
      <StyledNumberDisplay>
        {score}
      </StyledNumberDisplay>
      <StyledButton
      onClick={resetGame}>:D</StyledButton>
      <StyledNumberDisplay>
        {time}
      </StyledNumberDisplay>
    </StyledHeader>
  )
}

export default Header;