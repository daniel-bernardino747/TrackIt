import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from 'styled-components';

const Historic = () => {

    return (
        <Container>
            <Header />

            <TitleHistoric>Histórico</TitleHistoric>

            <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>

            <Footer />
        </Container>
    );
};

const Container = styled.section`
    width: 375px;
    min-height: 100vh;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Message = styled.div`
    color: #666;
    font-size: 18px;
    padding: 0 20px;
`;

const TitleHistoric = styled.div`
    padding: 100px 20px 20px 20px;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default Historic;