 import delay from "../../utils/delay";

class HttpClient {

    constructor(baseURL){
        this.baseURL = baseURL;
    }

    async get(path) {

        const response = await fetch(`${this.baseURL}${path}`);
        console.log(response.json());
        await delay(3000);

        return response.json();
    }
 }

export default HttpClient;
