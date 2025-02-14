const items = document.querySelectorAll(".item");
const quantity = items.length
console.log(`Number of categories:${quantity}`)
items.forEach(item => {
    const title = item.querySelector(".title").textContent; // Отримуємо назву
    const elementsCount = item.querySelectorAll("li").length; // Отримуємо кількість вкладених li

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
