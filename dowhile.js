function contador() { 
    // função contador - Sem parâmetros, apenas executa a lógica

    const tempo = new Date(); // obtem a data e hora atual
    let hora = tempo.getHours(); // obtem a hora atual
    let minutos = tempo.getMinutes(); // obtem os minutos atuais
    let segundos = tempo.getSeconds(); // obtem os segundos atuais

    if (document.getElementById("cbxMarcarTempo").checked) {  // Verifica se a checkbox está marcada 
        document.getElementById("span_hora").innerText = hora; // insere a hora na página
        document.getElementById("span_minutes").innerText = minutos; // insere os minutos na página
        document.getElementById("span_seconds").innerText = segundos; // insere os segundos na página
    }    

    setInterval(contador, 1000); // atualiza o contador a cada 1 segundo

    // se a checkbox estiver desmarcada ela limpa os valores na tela
    if (document.getElementById("cbxMarcarTempo").checked) {   
        document.getElementById("span_hora").innerText = ""; 
        document.getElementById("span_minutes").innerText = "";
        document.getElementById("span_seconds").innerText = "";
        clearInterval(); // zera todos os setInterval ativos
    }  
}       

// adiciona um evento de clique ao checkbox para iniciar ou parar a contagem
document.getElementById("cbxMarcarTempo").addEventListener('click', () => { 
    contador();
    
});

// window.setInterval(contador, 1000); // Executa infinitamente 
// window.setTimeout(contador, 1000); // Executa apenas uma vez
