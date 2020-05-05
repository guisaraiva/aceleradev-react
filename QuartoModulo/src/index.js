const { products } = require("../src/data/products");


const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids,productsList) {
	
		const result =  productsList.filter(produto => produto.id == ids)
	
	

	return (
	 //productsList.filter(produto => produto.id === id).filter(produto => produto.name)
	

result
	 //console.log(result.name)
	 
	)
	;
}

/*module.exports = { getShoppingCart };*/

/*console.log(products.filter(produto => produto.name === "PINK PANTHER™ T-SHIRT"))*/

console.log(getShoppingCart(110, products))

