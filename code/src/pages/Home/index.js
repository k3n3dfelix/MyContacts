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

import { useEffect, useState, useMemo } from 'react';

import Loader from '../../components/Loader';

import delay from '../../utils/delay'

export default function Home(){
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) => (
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    }, [contacts, searchTerm]);



    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3000/contacts')
        .then(async (response) => {
            await delay(3000);
            const json = await response.json();
            setContacts(json);
        })
        .catch((error) => {
            console.log('erro, error');
        })
        .finally(() =>{
            setIsLoading(false);
        });
    }, [])

    function handleChangeSearchTerm(event){
        setSearchTerm(event.target.value)
    }
    console.log(searchTerm);
    return (
        <Container>
           <Loader isLoading={isLoading}/>
            <InputSearchContainer>
                <input value={searchTerm} type="text" placeholder="Pesquise pelo nome..." onChange={handleChangeSearchTerm}/>
           </InputSearchContainer>
           <Header>
                <strong>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? ' contato' : ' contatos'}
                </strong>
                <Link to="/new">Novo Contato</Link>
           </Header>
           <ListContainer>
                {filteredContacts.length > 0 && (
                    <header>
                        <button type="button">
                            <span>Nome</span>
                            <img src={arrow} alt="Arrow"/>
                        </button>
                    </header>
                )}

                {filteredContacts.map((contact) =>(
                    <Card key={contact.id}>
                    <div className="info">
                        <div className="contact-name">
                            <strong>{contact.name}</strong>
                            {contact.category_name && (<small>{contact.category_name}</small>)}
                        </div>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="actions">
                                <Link to={`/edit/${contact.id}`}><img src={edit} alt="Edit"/></Link>
                        <button type="button">
                            <img src={trash} alt="delete"/>
                        </button>
                    </div>
                </Card>
                ))}

                {/* <Modal ></Modal> */}
           </ListContainer>
        </Container>
    );
}



