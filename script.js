
// ?basket js
const cards = document.getElementsByClassName("card");
const myCard=document.getElementsByClassName("cards")
const cardImg=document.getElementsByClassName("card_img")
const cardHead=document.getElementsByClassName("card__head")
const cardPrice=document.getElementsByClassName("card__price")
const cardId=document.getElementsByClassName("card_numb")
const table=document.getElementById("table-basket")
const basketLength=document.getElementById("basket-item")

const basket=JSON.parse(localStorage.getItem("basket")) || []


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
        let count = 1;
        id = cardId[i].innerHTML;
        image = cardImg[i].getAttribute("src");
        head = cardHead[i].innerHTML;
        price = cardPrice[i].innerHTML;

        let test = basket.find((card) => card.id === id);
        if (test !== undefined) {
            test.count++;
        } else {
            add = {
                id: id,
                image: image,
                head: head,
                price: price,
                count: count
            };
            basket.push(add);
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log(basket);
        renderUI(basket);
        basketCount(basket)
    });
}


function renderUI(array) {
    let html = "";
    for (let i = 0; i < array.length; i++) {
        html += `
        <tr>
            <th scope="row">${i}</th>
            <td><img src="${array[i].image}" ></td>
            <td>${array[i].head}</td>
            <td>${array[i].price}</td>
            <td>${array[i].count}</td>
            <td><button type="button" class="btn btn-danger" onclick="deleteHandler(${array[i].id})">Delete</button></td>
        </tr>`;
    }
    table.innerHTML = html;
    basketCount(basket)
}
function basketCount(array) {
    let len=array.length;
    basketLength.innerHTML=`${len}`
   }
   basketCount(basket)
   renderUI(basket)

const deleteHandler = (id) => {
    let target = basket.find((card) => card.id == id);
    let indeOfTarget=basket.indexOf(target)
    console.log(target,indeOfTarget);
    basket.splice(indeOfTarget, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    renderUI(basket);
    console.log(basket);
}
