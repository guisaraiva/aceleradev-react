const { products } = require('../src/data/products');
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const categories = ['T-SHIRTS', 'PANTS', 'SHOES', 'BAGS']

function getProductCart(ids, productsList) {
	const itemsCart = ({ id }) => ids.includes(id) 
	return productsList.filter(itemsCart)
 }

function getNameCategory(productsList) {
	return productsList.map(({ name, category }) => ({ name, category }))
  }


function getPromotions(productsList) {
	return productsList.reduce((category, product) => {
		if (!category.includes(product.category)) {
			category.push(product.category)
		}
		return category
	}, [])
}

function getShoppingCart(ids, productsList) {
	
	
	return {};


}

module.exports = { getShoppingCart };

console.log(getPromotions(products))

