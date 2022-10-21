import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { ProgressContext } from '../contexts/ProgressContext';
import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const { progressPorcentage } = useContext(ProgressContext)
    const navigate = useNavigate();

    return (
        <Container>
            <Option onClick={() => navigate("/habitos")}>Hábitos</Option>
            <div>
                <MainOption onClick={() => navigate("/hoje")}>
                    <CircularProgressbar
                        value={progressPorcentage}
                        text={`Hoje`}
                        strokeWidth={9}
                        styles={buildStyles({
                            textColor: "#FFF",
                            textSize: "24px",
                            pathColor: "#FFF",
                            trailColor: "rgb(0, 0, 0, 0)",
                        })}
                    />
                </MainOption>
            </div>
            <Option onClick={() => navigate("/historico")}>Histórico</Option>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    width: 375px;
    height: 70px;
    background: #FFF;
    border: 1px solid #fafafa;

    div {
        position: relative;
    }
`;

const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    border-radius: 40px;
    color: #52B6FF;
    font-size: 18px;
    cursor: pointer;
    
    &:hover {
        color: #3E9ADE;
    }
`;

const MainOption = styled.div`
    display: flex;
    position: absolute;
    bottom: 35px;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 90px;
    color: #FFF;
    cursor: pointer;
    background: #52B6FF;
    padding: 5px;
    
    &:hover {
        background: #3E9ADE;
    }
`;



export default Footer;