import { Container, Message, TitleHistoric } from "./style"

import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Historic = () => {
    return (
        <Container>
            <Header />

            <TitleHistoric><p>Histórico</p></TitleHistoric>

            <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>

            <Footer />
        </Container>
    );
};

export default Historic;