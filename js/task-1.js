const categoriesContent = document.querySelectorAll('.item');

for (const item of categoriesContent) {
    console.log(`Category: ` + item.querySelector(`h2`).textContent)
    console.log(`Elements: ` + item.querySelectorAll(`li`).length)
}

