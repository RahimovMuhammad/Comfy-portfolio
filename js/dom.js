import { infoUser } from "./api.js"


let copy = JSON.parse(localStorage.getItem("data")) || []
let count = parseInt(localStorage.getItem("count")) || 0;
let box = document.querySelector(".box")
let boxProduct = document.querySelector(".box-product")
let btnAbout = document.querySelector(".history")
let btnAbout1 = document.querySelector(".history1")
let btnAbout2 = document.querySelector(".history2")
let aboutSection = document.querySelector(".sidebar-about")
let body = document.querySelector("body")
let goToHome = document.querySelector(".home")
let goToHome1 = document.querySelector(".home1")
let goToHome2 = document.querySelector(".home2")
let sectionProduct = document.querySelector(".noneProduct")
let btnProduct = document.querySelector(".btnProduct")
let header = document.querySelector("header")
let mainSectionOne = document.querySelector(".main-section-one")
let products = document.querySelector(".products")
let products1 = document.querySelector(".products1")
let products2 = document.querySelector(".products2")
let infoSection = document.querySelector(".info-section")
let infoBox = document.querySelector(".box-info")
let nameProd = document.querySelector(".nameProd")
let countBasket = document.querySelector(".divBasket")
let countBasket1 = document.querySelector(".divBasket1")
let countBasket2 = document.querySelector(".divBasket2")
let countBasket3 = document.querySelector(".divBasket3")
let basketContainer = document.querySelector(".basket-container")
let cover = document.querySelector(".cover")
let closeBtn = document.querySelector(".closeBtn")
let boxBakets = document.querySelector(".myBasketAll")
let cntBasket = document.querySelector(".count_basket")
let cntBasket2 = document.querySelector(".count_basket2")
let cntBasket3 = document.querySelector(".count_basket3")
let cntBasket4 = document.querySelector(".count_basket4")
let informCards = document.querySelector(".informsCard")
informCards.onclick=()=>{
    infoSection.style.display = "none"
    sectionProduct.style.display = "block"
}
cntBasket.innerHTML = count;
cntBasket2.innerHTML = count;
cntBasket3.innerHTML = count;
cntBasket4.innerHTML = count;
countBasket.onclick = () => {
    basketContainer.style.width = "420px"
    cover.style.display = "block"
    body.style.overflowY = "hidden"
    getCopy()
}
countBasket1.onclick = () => {
    basketContainer.style.width = "420px"
    cover.style.display = "block"
    body.style.overflowY = "hidden"
    getCopy()
}
countBasket2.onclick = () => {
    basketContainer.style.width = "420px"
    cover.style.display = "block"
    body.style.overflowY = "hidden"
    getCopy()
}

countBasket3.onclick = () => {
    basketContainer.style.width = "420px"
    cover.style.display = "block"
    body.style.overflowY = "hidden"
    getCopy()
}


function delCard(id) {
    copy = copy.filter((el) => el.id != id);
    localStorage.setItem("data", JSON.stringify(copy));
    count--;
    cntBasket.innerHTML = count
    cntBasket2.innerHTML = count
    cntBasket3.innerHTML = count
    cntBasket4.innerHTML = count
    localStorage.setItem("count", count.toString());
    getCopy(copy);
}

closeBtn.onclick = () => {
    basketContainer.style.width = "0"
    cover.style.display = "none"
    body.style.overflowY = "scroll"
}

btnProduct.onclick = () => {
    sectionProduct.style.display = "block"
    header.style.display = "none"
    mainSectionOne.style.display = "none"
}

products.onclick = () => {
    sectionProduct.style.display = "block"
    header.style.display = "none"
    mainSectionOne.style.display = "none"
}

products1.onclick = () => {
    sectionProduct.style.display = "block"
    header.style.display = "none"
    aboutSection.style.width = "0"
    mainSectionOne.style.display = "none"
    body.style.overflowY = "scroll"
}

products2.onclick = () => {
    infoSection.style.height = "0"
    sectionProduct.style.display = "block"
}

goToHome.onclick = () => {
    aboutSection.style.width = "0"
    body.style.overflowY = "scroll"
    header.style.display = "block"
    mainSectionOne.style.display = "block"
    mainSectionOne.style.justifyContent = "center"
    mainSectionOne.style.display = "flex"
}

btnAbout.onclick = () => {
    aboutSection.style.width = "100%"
    body.style.overflowY = "hidden"
}

btnAbout1.onclick = () => {
    aboutSection.style.width = "100%"
    body.style.overflowY = "hidden"
    sectionProduct.style.display = "none"
}

btnAbout2.onclick = () => {
    aboutSection.style.width = "100%"
    infoSection.style.height = "0"
    header.style.display = "block"
    mainSectionOne.style.display = "block"
}

goToHome1.onclick = () => {
    body.style.overflowY = "scroll"
    sectionProduct.style.display = "none"
    header.style.display = "block"
    mainSectionOne.style.display = "block"
    mainSectionOne.style.justifyContent = "center"
    mainSectionOne.style.display = "flex"
}

goToHome2.onclick = () => {
    infoSection.style.height = "0"
    header.style.display = "block"
    mainSectionOne.style.display = "block"
}


function getCopy() {
    boxBakets.innerHTML = "";
    copy.forEach((el) => {
        let cardCnt = el.cnt || 0;
        let card = document.createElement("div");
        card.classList.add("card-bag");
        let divLeft = document.createElement("div");
        divLeft.classList.add("divLeft");
        let img = document.createElement("img");
        img.src = el.img;
        divLeft.appendChild(img);
        let divRight = document.createElement("div");
        divRight.classList.add("divRight");
        let boxName = document.createElement("div");
        let name = document.createElement("h1");
        name.classList.add("nameBag");
        name.innerHTML = el.name;
        let price = document.createElement("p");
        price.classList.add("priceBag");
        price.innerHTML = "$" + el.price;
        let delBagCard = document.createElement("p");
        delBagCard.classList.add("del-bag-card");
        delBagCard.innerHTML = "&times;";
        delBagCard.onclick = () => {
            delCard(el.id);
        }
        let divCountTowar = document.createElement("div");
        let btnPlus = document.createElement("button");
        btnPlus.innerHTML = "+"
        btnPlus.onclick = () =>{
            cardCnt++;
            h1Cnt.innerHTML = cardCnt;
            el.cnt = cardCnt;
            localStorage.setItem("data", JSON.stringify(copy));
        }
        let h1Cnt = document.createElement("h1");
        h1Cnt.innerHTML = cardCnt;
        let btnMinus = document.createElement("button");
        btnMinus.innerHTML = "-";
        btnMinus.onclick = () =>{
            if(cardCnt > 0) {
                cardCnt--;
                h1Cnt.innerHTML = cardCnt;
                el.cnt = cardCnt;
                localStorage.setItem("data", JSON.stringify(copy));
            }
        }
        divCountTowar.append(btnPlus, h1Cnt, btnMinus)
        divCountTowar.classList.add("div-count-towar");
        boxName.append(name, price, divCountTowar);
        divRight.append(boxName, delBagCard);
        card.append(divLeft, divRight)
        boxBakets.appendChild(card);
    });
}

let range = document.querySelector(".range")
let value = document.querySelector(".volume")
range.oninput=()=> {
    value.innerHTML=range.value
}


function getData(data) {
    box.innerHTML = ""
    for (let i = 0; i < 3; i++) {
        let el = data[i]
        let card = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.img
        let name = document.createElement("h4")
        name.innerHTML = el.name
        let price = document.createElement("p")
        price.innerHTML = "$" + el.price
        let divTextInformCard = document.createElement("div")
        divTextInformCard.classList.add("textInformCard")
        divTextInformCard.append(name, price)
        card.append(img, divTextInformCard)
        box.appendChild(card)
    };
}

function getProduct(data) {
    boxProduct.innerHTML = ""
    data.forEach(el => {
        infoSection.style.display = "block"
        let card = document.createElement("div")
        card.classList.add("cardProduct")
        let img = document.createElement("img")
        img.src = el.img
        let name = document.createElement("h4")
        name.innerHTML = el.name
        let price = document.createElement("p")
        price.innerHTML = "$" + el.price
        let divTextInformCard = document.createElement("div")
        divTextInformCard.classList.add("textInformCard")
        divTextInformCard.append(name, price)
        card.append(img, divTextInformCard)
        card.onclick = () => {
            infoBox.innerHTML = ""
            sectionProduct.style.display = "none"
            infoUser(el.id)
            infoSection.style.height = "100%"
            nameProd.innerHTML = el.name
            let cardInfo = document.createElement("div")
            cardInfo.classList.add("cardInfo")
            let leftCard = document.createElement("div")
            leftCard.classList.add("leftCard")
            let imgInfo = document.createElement("img")
            imgInfo.src = el.img
            leftCard.append(imgInfo)
            let rightCard = document.createElement("div")
            rightCard.classList.add("rightCard")
            let nameCard = document.createElement("h2")
            nameCard.innerHTML = el.name
            let by = document.createElement("h4")
            by.innerHTML = "BY " + el.by
            by.style.textTransform = "uppercase";
            let priceCard = document.createElement("h5")
            priceCard.innerHTML = "$" + el.price
            let descripCard = document.createElement("p")
            descripCard.innerHTML = el.description
            let btnToBasket = document.createElement("button")
            btnToBasket.innerHTML = "ADD TO CARD"
            btnToBasket.onclick = function () {
                if (!copy.find((item) => item.id === el.id)) {
                    copy.push(el);
                    count++;
                    cntBasket.innerHTML = count
                    cntBasket2.innerHTML = count
                    cntBasket3.innerHTML = count
                    cntBasket4.innerHTML = count
                    localStorage.setItem("count", count.toString());
                    localStorage.setItem("data", JSON.stringify(copy));
                } else {
                    alert("это карточка уже добавлена в корзину.");
                };
            };
            rightCard.append(nameCard, by, priceCard, descripCard, btnToBasket)
            cardInfo.append(leftCard, rightCard)
            infoBox.appendChild(cardInfo)
        }
        boxProduct.appendChild(card)
    });
}



export { getProduct, getData }