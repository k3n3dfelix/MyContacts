import delay from "../utils/delay";

class ContactsService{
    async listContacts(){
        const response = await fetch(`http://localhost:3000/contacts`);

        await delay(3000);

        return response.json();
    }
}

export default new ContactsService();
