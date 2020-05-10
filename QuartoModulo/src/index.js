const { products } = require('../src/data/products');

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

//Variável criada para armazenar as categorias existentes.
const categoria = ['T-SHIRTS', 'PANTS', 'SHOES', 'BAGS']


function retornaIdDoProduto(ids, listaDeProdutos) {
	const itensDoCarrinho = ({ id }) => ids.includes(id) 
	return listaDeProdutos.filter(itensDoCarrinho)
}

function retornaNomeECategoriaDosProdutos(listaDeProdutos) {
	return listaDeProdutos.map(({ name, category }) => ({ name, category }))
}

function filtraCategoriaDoProduto(produtosComprados, categoria) {
	return categoria.filter(category => {
		const categoriaIgual = produto => produto.category === category
	  	return produtosComprados.some(categoriaIgual)
	})
}
  
function retornaPromocoesDoCarrinho(categoriasCarrinho, promotions){
	const indexPromocao = categoriasCarrinho.length - 1
	return promotions[indexPromocao]
}

function somaOsPrecosDosProdutos(valorTotal, preco){
	return valorTotal + preco
}

function retornaPrecoNormalDoProduto(produtosComprados){
	const precoNormal = produtosComprados.map(produto => produto.regularPrice)
	return precoNormal.reduce(somaOsPrecosDosProdutos, 0)
}


function retornaPrecoTotalPromocional(produtosComprados, promocoesCarrinho) {
	const precoPromocaoProdutos = produtosComprados.map(({ promotions, regularPrice }) => {
 	const produtosEmPromocao = promotions || []
	const promocaoEncontrada = produtosEmPromocao.find(({ looks }) => looks.includes(promocoesCarrinho)) || {}
	const precoPromocional = promocaoEncontrada.price || regularPrice
    return precoPromocional
	})
	return precoPromocaoProdutos.reduce(somaOsPrecosDosProdutos, 0)
}

function retornaDescontoDaCompra(precoNormal, precoNaPromocao) {
	const valorDoDesconto = precoNormal - precoNaPromocao
	const percentualDeDesconto = 100 - (100 * precoNaPromocao) / precoNormal
	return { valorDoDesconto, percentualDeDesconto }
  }

function formatarValores(valorDoPreco){
	const valorDoCarrinho = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
	const precoFormatadoDoCarrinho = valorDoCarrinho.format(valorDoPreco)
	return precoFormatadoDoCarrinho.replace('R$', '')
}

function getShoppingCart(ids, listaDeProdutos) {

	const produtosComprados = retornaIdDoProduto(ids, listaDeProdutos)
	const categoriasDoCarrinho = filtraCategoriaDoProduto(produtosComprados, categoria)
	const promocoesDoCarrinho = retornaPromocoesDoCarrinho(categoriasDoCarrinho, promotions)
	
	const precoNormalProdutos = retornaPrecoNormalDoProduto(produtosComprados)
	const precoTotalFinal = retornaPrecoTotalPromocional(produtosComprados, promocoesDoCarrinho)

	const nomeECategoria = retornaNomeECategoriaDosProdutos(produtosComprados)
	const {valorDoDesconto, percentualDeDesconto} = retornaDescontoDaCompra(precoNormalProdutos, precoTotalFinal)
	
	return {
		products: nomeECategoria,
		promotion: promocoesDoCarrinho,
		totalPrice: formatarValores(precoTotalFinal),
		discountValue: formatarValores(valorDoDesconto),
		discount: `${formatarValores(percentualDeDesconto)}%`,

	}
}

module.exports = { getShoppingCart };

console.log(getShoppingCart([120, 230, 310, 490], products))
//console.log(filtraCategoriaDoProduto(products, categoria))
//console.log(retornaPromocoesDoCarrinho(promotions))