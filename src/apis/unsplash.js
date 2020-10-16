import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID pl5CmXgHMBJ5HXteOccr3nUHVzBmbKTljyZNswlBykw' 
    }
});