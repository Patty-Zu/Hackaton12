let nuevoItem = [];

loadAll();


function loadAll() {
	
	document.getElementById("father").addEventListener("click", addItem);
	document.getElementById("cart").addEventListener("click", deleteItem);
	document.getElementById("clear").addEventListener("click", emptyItem);
}


function addItem(e) {
	if (e.target.classList.contains("shop")) {
		let item = e.target.parentElement.parentElement;

		let button = e.target;
		button.setAttribute("disabled", "");
		dataEntry(item, button.getAttribute("data-id"));
	}
}

function dataEntry(item, id) {
	const infoItem = {
		image: item.querySelector("img").src,
		title: item.querySelector("h2").textContent,
		price: item.querySelector(".value").textContent,
		id,
		quantity: 1,
	};

	
	newItems = [...nuevoItem, infoItem];
	
	document.getElementById("counter").textContent = `${newItems.length}`;

	keepIn(nuevoItem);
}


function keepIn(items) {
	const purchase = document.createElement("tr");
	items.forEach((item) => {
		purchase.innerHTML = `
        <td>
            <img src= "${item.image}" style = "width: 100%;"/>
        </td>
        <td> "${item.title}"</td>
        <td> "${item.quantity}" </td>
        <td> "${item.price}" </td>

        <td>
            <a href="#" class = "delete" data-id="${item.id}">
            <img src=" cancelar.png"> </a>
        </td>`;
	});

	document.querySelector("#list_carr tbody").appendChild(purchase);
}



function deleteItem(e) {
	if (e.target.classList.contains("delete")) {
		const currentItem = e.target.parentElement.parentElement;
		const itemId = parseInt(currentItem.querySelector("a").getAttribute("data-id"));
		const counter = document.getElementById("counter");

		
		counter.textContent = `${parseInt(counter.textContent) - 1}`;

	
		currentItem.remove();
	}
}



function emptyItem(e) {
	e.preventDefault();
	document.querySelector("#list_carr tbody").innerHTML = "";
	document.getElementById("counter").textContent = "0";
	newItems = [];
}
