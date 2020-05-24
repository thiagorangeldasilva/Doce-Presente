function erro(nome, encomenda, qndbro, qndbis){
    
}
function salvar(){
    var nome = document.getElementById('txtnome')
    var encomenda = document.getElementsByName('radiodoce')
    var qntbrownie = Number(document.querySelector('input#qntbro').value)
    var qntbiscoito = Number(document.querySelector('input#qntbis').value)
    var res = document.getElementById('res')
    if(nome.value.length != 0){
        if(encomenda[0].checked && qntbrownie > 0 && qntbiscoito == 0){
            res.innerHTML = `Nome: ${nome.value}<br/>`
            res.innerHTML += `Encomenda: Brownie<br/>`
            res.innerHTML += `Quantidade: ${qntbrownie} unidades<br/>`
            res.innerHTML += `Pedido realizado com sucesso!`
        }else if(encomenda[1].checked && qntbiscoito > 0 && qntbrownie == 0){
            res.innerHTML = `Nome: ${nome.value}<br/>`
            res.innerHTML += `Encomenda: Biscoito<br/>`
            res.innerHTML += `Quantidade: ${qntbiscoito} unidades<br/>`
            res.innerHTML += `Pedido realizado com sucesso!`
        }else if(encomenda[2].checked && qntbrownie > 0 && qntbiscoito > 0){
            res.innerHTML = `Nome: ${nome.value}<br/>`
            res.innerHTML += `Encomenda: Brownie e Biscoito<br/>`
            res.innerHTML += `Quantidade Brownie: ${qntbrownie} unidades<br/>`
            res.innerHTML += `Quantidade Biscoito: ${qntbiscoito} unidades<br/>`
            res.innerHTML += `Pedido realizado com sucesso!`
        }else{
            alert("Verifique os dados novamente!")
        }
    }else{
        alert("Verifique os dados novamente!")
    }
}
function limpares(){
    var res = document.getElementById('res')
    res.innerHTML = ``
}