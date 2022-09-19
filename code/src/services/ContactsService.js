import delay from "../utils/delay";
import HttpClient from "./utils/HttpClient";

class ContactsService{
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3001/');
    }

    async listContacts(){
        return this.httpClient.get(`contacts`);
    }
}

export default new ContactsService();
