import axios from 'axios';
const TUITS_API = 'https://sn-fullstack-developer-server.herokuapp.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findAllTuits = async () => {
    return await axios.get(TUITS_API)
        .then((response)=>response.data)
        .then((data)=>data);
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
