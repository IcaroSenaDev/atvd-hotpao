function calcularVendas() {
    // obtem a quantidade oferecida dos paes
    const quantidadePães = parseInt(document.getElementById('quantidadePães').value);
    const quantidadeBroas = parseInt(document.getElementById('quantidadeBroas').value);
    
    // preço definididos dos paes e broas
    const precoPão = 0.12;  
    const precoBroa = 1.50; 
    
    // calcula receita total
    const totalPães = quantidadePães * precoPão;
    const totalBroas = quantidadeBroas * precoBroa;
    const totalArrecadado = totalPães + totalBroas;
    
    // calcular o valor a ser guardado na poupança (10% do total arrecadado)
    const poupanca = totalArrecadado * 0.10;
    
    // exibir resultado
    document.getElementById('resultadoTotal').textContent = `Total arrecadado: R$${totalArrecadado.toFixed(2)}`;
    document.getElementById('resultadoPoupanca').textContent = `Valor a ser guardado na poupança: R$${poupanca.toFixed(2)}`;
}
