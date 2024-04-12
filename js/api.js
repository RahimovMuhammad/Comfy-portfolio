import {getData, getProduct } from "./dom.js";


const API = "https://66193930125e9bb9f2996981.mockapi.io/Comfy-portfolio/Comfy-portfolio"
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
