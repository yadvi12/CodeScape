import { AppBar, Toolbar, IconButton, styled } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import icon from "../icon.png";
const Container = styled(AppBar)`
  background: #D3D3D3;
  height: 10vh;
`;

const Title = styled("h1")`
  color: #0E8388;
  font-family: "McLaren", cursive;
  font-weight: 9000;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const SocialIcons = styled("div")`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const StyledIconButton = styled(IconButton)`
  background-color: transparent;
  border-radius: 50%;
  color: black;
  margin-left: 10px;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #0E8388;
    color: #fff;
    transform: scale(1.2);
  }
`;

const Header = () => {
  return (
    <Container position="static">
      <Toolbar>
        <img src={icon} alt="logo" className="header-icon" />
        <Title>CodeScape</Title>
        <SocialIcons>

          <StyledIconButton
            href="https://github.com/yadvi12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </StyledIconButton>
          <StyledIconButton
            href="https://www.linkedin.com/in/yadvibhalla1210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </StyledIconButton>
        </SocialIcons>
      </Toolbar>
    </Container>
  );
};

export default Header;
