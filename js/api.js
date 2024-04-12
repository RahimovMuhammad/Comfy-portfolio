import {getData, getProduct } from "./dom.js";


const API = "http://localhost:3000/data"
async function get() {
    try {
        let responce = await fetch(API);
        let data = await responce.json();
        getData(data)
        getProduct(data)
    } catch (error) {
        console.log(error);
    }
}

async function infoUser(id) {
    try {
        let responce = await fetch(`${API}/${id}`);
        get()
    } catch (error) {
        console.log(error);
    }
}

export default get
export {infoUser}