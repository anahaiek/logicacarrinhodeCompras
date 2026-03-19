
// quais açoes meu carrinho pode fazer

//CASOS DE USO
// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);

}

// -> calcular o total do carrinho
async function calculateTotal(usercart) {
    console.log("\n Shopee cart total is:");
    const result = usercart.reduce((total, item) => total + item.subtotal(), 0); 
    console.log(`🎁Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1);
    }

}

 /*// -> remover um item - diminui um item
async function removeItem(userCart, index) {
   //transforma o indice visual do usuario, para o indice do backend
    const deleteIndex = index - 1;

    //é maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}*/
async function removeItem(userCart, item){
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Caso não encontre o item
    if (indexFound == -1) {
         console.log("item não encontrado");
    //3 item > 1 subtrair um item, item = 1 deletar o item
    return;
    }
       
     if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. caso item = 1 deletar o item
    if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

    
  
async function displaycart( usercart){
    console.log("\n Shopee cart list:")
    usercart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} |
            ${item.quantity} | Subtotal ${item.subtotal()}`)
    })

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart

}
