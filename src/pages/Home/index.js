import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LoginContext } from "../../contexts/LoginContext";
import styled from 'styled-components';
import { useContext } from "react";

const Home = () => {
    const { user } = useContext(LoginContext);
    console.log(user);

    return (
        <Container>
            <Header />

            <CreateHabit>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </CreateHabit>

            <AlertHabit>
                Você não tem nenhum hábito
                cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </AlertHabit>

            <Footer />
        </Container>
    );
};

const Container = styled.div`
    width: 375px;
    height: 100vh;
    background: #E5E5E5;
`;

const CreateHabit = styled.div`
    padding: 100px 20px 20px 20px;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;

    button {
        width: 40px;
        height: 30px;
        font-size: 20px;
        font-weight: 700;
        color: #FFF;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        &:hover {
            background: #3E9ADE;
        }
    }
`;

const AlertHabit = styled.div`
    margin: 0 20px;
    color: #666;
    font-size: 18px;
    line-height: 22px;

`;

export default Home;