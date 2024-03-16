

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
//             totalPrices.textContent = "Total Price:  $" + totalPrice.toFixed(2);
//             totalDiscounts.textContent = "Discount:  $" + discount.toFixed(2);
//             allTotal.textContent = "Total:  $" + discountedTotal.toFixed(2);
//         }
//     });
// });






const cards = document.querySelectorAll('.getCard');
let totalPrice = 0;
let products = [];
const totalPrices = document.querySelector('.totalPrice');
const totalDiscounts = document.querySelector('.discount');
const allTotal = document.querySelector('.total');
const ulCollection = document.querySelector('.ulCollection');

cards.forEach((value) => {
    value.addEventListener('click', function () {
        const cardPrice = value.querySelector('.cardPrice').innerText;
        const price = parseFloat(cardPrice);
        const productName = value.querySelector('.productName').innerText;

        if (!products.includes(productName)) {
            products.push(productName);
            totalPrice += price;

            const li = document.createElement('li');
            li.textContent = `${products.length}. ${productName}`;
            li.style.fontWeight = 'bold';
            ulCollection.style.borderBottom = '2px solid gray';
            ulCollection.style.padding = '20px';
            ulCollection.appendChild(li);

            totalPrices.textContent = "Total Price:  $" + totalPrice.toFixed(2);
        }
    });
});

const discountApplyBtn = document.getElementById('apply-btn');
discountApplyBtn.addEventListener('click', function () {
    const discountInp = document.querySelector('.discount-input');
    if (totalPrice >= 200) {
        const couponCode = discountInp.value.toUpperCase();
        if (couponCode === 'SELL200') {
            const discount = (totalPrice * 5) / 100;
            const discountedTotal = totalPrice - discount;
            allTotal.textContent = "Total:  $" + discountedTotal.toFixed(2);
            totalDiscounts.textContent = "Discount:  $" + discount.toFixed(2);
        } else {
            alert("Invalid coupon code. Please enter 'SELL200' for the discount.");
            discountInp.value = "";
        }
    } else {
        alert("Invest $200 at least to get discount!");
        discountInp.value = "";
    }
});
