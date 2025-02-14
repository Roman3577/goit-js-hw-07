const items = document.querySelectorAll(".item");
const quantity = items.length
console.log(`Number of categories:${quantity}`)
items.forEach(item => {
    const title = item.querySelector(".title").textContent; 
    const elementsCount = item.querySelectorAll("li").length; 

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
