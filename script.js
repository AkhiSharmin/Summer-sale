

// document.getElementById('allCard').addEventListener('click', function (e) {
//     // console.log(e.target.parentNode);
//     console.log(e.target);


// })

// function getPrice(value) {
//     // console.log(value.children[1].children[2].innerText);
//     console.log(value.parentNode.children);
// }




// const cards = document.querySelectorAll('.getCard')
// // console.log(cards);

// cards.forEach((value) => {
//     value.addEventListener('click', function () {
//         const productTitle = value.querySelector('.productName').innerText
//         const prices = value.querySelector('.cardPrice');
//         console.log(productTitle);
//         console.log(prices);
//     })
// })


// const cards = document.querySelectorAll('.getCard');
// let totalPrice = 0;
// const totalPriceElement = document.querySelector('.totalPrice');
// const totalDiscount = document.querySelector('.discount');
// const total = document.querySelector('.total');

// cards.forEach((value) => {
//     value.addEventListener('click', function () {
//         // const productTitle = value.querySelector('.productName').innerText;
//         const cardPrice = document.querySelector('.cardPrice').innerText;
//         const price = parseFloat(cardPrice)


//         totalPrice += price;
//         totalPriceElement.textContent = "Total Price:  $" + totalPrice.toFixed(2);
//     });
// });



//     value.addEventListener('click', function () {
//         const cardPrice = value.querySelector('.cardPrice').innerText;
//         const price = parseFloat(cardPrice);
//         const productName = value.querySelector('.productName').innerText;

//         // Check if the product name already exists in the list
//         if (!products.includes(productName)) {
//             products.push(productName);

//             // Calculate total price
//             totalPrice += price;

//             // Calculate discount
//             const discount = (totalPrice * 5) / 100;
//             const discountedTotal = totalPrice - discount;

//             // Display product title
//             const li = document.createElement('li');
//             li.textContent = productName;
//             ulCollection.appendChild(li);

//             //total price, discount, and total elements
//             totalPriceElement.textContent = "Total Price:  $" + totalPrice.toFixed(2);
//             totalDiscountElement.textContent = "Discount:  $" + discount.toFixed(2);
//             totalElement.textContent = "Total:  $" + discountedTotal.toFixed(2);
//         }
//     });
// });
const cards = document.querySelectorAll('.getCard');
let totalPrice = 0;
let products = [];

const totalPriceElement = document.querySelector('.totalPrice');
const totalDiscountElement = document.querySelector('.discount');
const totalElement = document.querySelector('.total');
const ulCollection = document.querySelector('.ulCollection');


cards.forEach((value) => {
    value.addEventListener('click', function () {
        const cardPrice = value.querySelector('.cardPrice').innerText;
        const price = parseFloat(cardPrice);
        const productName = value.querySelector('.productName').innerText;

        // Check already exists in the list
        if (!products.includes(productName)) {
            products.push(productName);

            // Calculate total price
            totalPrice += price;

            // Calculate discount
            const discount = (totalPrice * 5) / 100;
            const discountedTotal = totalPrice - discount;

            // Display product title with numbering
            const li = document.createElement('li');
            li.textContent = `${products.length}. ${productName}`;
            li.style.fontWeight = 'bold'
            ulCollection.style.borderBottom = '2px solid gray'
            ulCollection.style.padding = '20px 5px'
            ulCollection.appendChild(li);

            // Update total price, discount, and total elements
            totalPriceElement.textContent = "Total Price:  $" + totalPrice.toFixed(2);
            totalDiscountElement.textContent = "Discount:  $" + discount.toFixed(2);
            totalElement.textContent = "Total:  $" + discountedTotal.toFixed(2);
        }
    });
});
