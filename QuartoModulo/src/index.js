const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

//Variável criada para armazenar as categorias existentes.
const categorias = ['T-SHIRTS', 'PANTS', 'SHOES', 'BAGS']


function retornaIdDoProduto(ids, listaDeProdutos) {
	const itensDoCarrinho = ({ id }) => ids.includes(id) 
	return listaDeProdutos.filter(itensDoCarrinho)
}

function retornaNomeECategoriaDosProdutos(listaDeProdutos) {
	return listaDeProdutos.map(({ name, category }) => ({ name, category }))
}

function filtraCategoriaDoProduto(listaDeProdutos, categorias) {
	return categorias.filter(category => {
		const categoriaIgual = product => product.category === category
	  	return listaDeProdutos.some(categoriaIgual)
	})
}
  
function retornaPromocoesDoCarrinho(categoriasCarrinho, promotions){
	const indexPromocao = categoriasCarrinho.length =1
	return promotions[indexPromocao]
}

function somaOsPrecosDosProdutos(valorTotal, preco){
	return valorTotal + preco
}

function retornaPrecoNormalDoProduto(listaDeProdutos){
	const precoNormal = listaDeProdutos.map(produto => produto.regularPrice)
	return precoNormal.reduce(somaOsPrecosDosProdutos, 0)
}


function retornaPrecoTotalPromocional(listaDeProdutos, promocoesCarrinho) {
	const precoPromocaoProdutos = listaDeProdutos.map(({ promotions, regularPrice }) => {
 	const produtosEmPromocao = promotions || []
	const promocaoEncontrada = produtosEmPromocao.find(({ looks }) => looks.includes(promocoesCarrinho)) || {}
	const precoPromocional = promocaoEncontrada.price || regularPrice
    return precoPromocional
	})
	return precoPromocaoProdutos.reduce(somaOsPrecosDosProdutos, 0)
}

function retornaDescontoDaCompra(precoNormal, precoNaPromocao) {
	const valorDoDesconto = precoNormal - precoNaPromocao
	const percentualDeDesconto = (100 - (100 * precoNaPromocao) / precoNormal)
	return { valorDoDesconto, percentualDeDesconto }
  }

function formatarValores(valorDoPreco){
	const valorDoCarrinho = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
	const precoFormatadoDoCarrinho = valorDoCarrinho.format(valorDoPreco)
	return precoFormatadoDoCarrinho.replace('R$', '')
}

function getShoppingCart(ids, listaDeProdutos) {

	const produtosComprados = retornaIdDoProduto(ids, listaDeProdutos)
	const categoriasDoCarrinho = filtraCategoriaDoProduto(produtosComprados, categorias)
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

