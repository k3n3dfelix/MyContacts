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
import ContactsService from '../../services/ContactsService';

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
        async function loadContacts(){

            try{
                setIsLoading(true);
                const contactsList = await ContactsService.listContacts();

                setContacts(contactsList);
                setIsLoading(false);
            }catch(error) {
                console.log('error', error);
            } finally {
                setIsLoading(false);
            }


        }
        loadContacts();
    }, []);

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



