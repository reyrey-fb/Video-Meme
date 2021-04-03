import axios from "axios";

/**
 * function that returns a response promise from 3 https requests
 * @param {string} url - url string
 */

const fetchTextFile = async (url1, url2, url3) => {
        const response1 = await axios.get(url1).then(res => res.data);
        const response2 = await axios.get(url2).then(res => res.data);
        const response3 = await axios.get(url3).then(res => res.data);

        const allResponses = Promise.all([response1, response2, response3])
        .then(results => results.join(' '))
        .catch(error => {alert("Data failed to load!")})

        return allResponses;
}

export default fetchTextFile;






