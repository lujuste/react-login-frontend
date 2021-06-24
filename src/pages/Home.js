import {StyledTitle, StyledSubtitle, Avatar, StyledButton, StyleAround} from '../components/Styles';

import Logo from "../assets/ProjetoLogo_.png"

const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={Logo}/>
                </div>
                <StyledTitle size={43}>
                    Bem vindos a nossa plataforma digital
                </StyledTitle>
                <StyledSubtitle size={32}>Conheça os principais serviços</StyledSubtitle>
                <StyleAround>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
                </StyleAround>
        </div>
    );
};

export default Home;