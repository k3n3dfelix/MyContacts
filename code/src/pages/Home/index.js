import {Link} from 'react-router-dom';

import {
    Container,
    InputSearchContainer,
    Header,
    ListContainer,
    Card
} from "./styles";

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home(){
    return (
        <Container>

            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar Contato"/>
           </InputSearchContainer>
           <Header>
                <strong>3 contatos</strong>
                <Link to="/new">Novo Contato</Link>
           </Header>
           <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow"/>
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Kened Felix</strong>
                            <small>instagram</small>
                        </div>
                        <span>kenedfelix@gmail.com</span>
                        <span>(16)99999-9999</span>
                    </div>
                    <div className="actions">
                        <Link to="/edit/123"><img src={edit} alt="Edit"/></Link>
                        <button type="button">
                            <img src={trash} alt="delete"/>
                        </button>
                    </div>
                </Card>
                <Modal ></Modal>
           </ListContainer>
        </Container>
    );
}
