import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Container, MainOption, Option } from './style';

import { ProgressContext } from '../../contexts/ProgressContext';
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

export default Footer;