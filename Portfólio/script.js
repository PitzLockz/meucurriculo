let count = 0
function completarIndex() {
    alert('Bem-vindo ao meu currículo! \nDescubra meu endereço, meios de contato e conhecimentos.')
    if(count === 0) {
    let div = document.getElementById('div1')
    let novoCodigo = `<select id='select1' onchange='verificarSelect()'>
        <option value='option1'>Escolha</option>
        <option value='option2'>Endereço</option>
        <option value='option3'>Contato</option>
        <option value='option4'>Desempenho</option>
    </select>`
    div.innerHTML = novoCodigo
    count++
    }
}
function verificarSelect() {
    let select = document.getElementById('select1').value
    if(select === 'option1') {
        novoCodigo2 = ``
        div2.innerHTML = novoCodigo2
    } else if(select === 'option2') {
        let div2 = document.getElementById('div2')
        let novoCodigo2 = `<h1>Endereço</h1>
        <h2 id="h2B">Rua Treze de Junho, Flor de Nápolis, São José, SC</h2>
        <img src="localizacao.png" id="img2">
        <h2 id="h2C"><a href="https://www.google.com/maps/place/R.+13+de+Junho+-+Centro+Hist%C3%B3rico+de+S%C3%A3o+Jos%C3%A9,+S%C3%A3o+Jos%C3%A9+-+SC,+88106-470/@-27.6057927,-48.6480473,17z/data=!3m1!4b1!4m6!3m5!1s0x95274a077106766f:0xf1c5a2a6f202529e!8m2!3d-27.6057975!4d-48.6454724!16s%2Fg%2F1ymxmfxxm?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D">Clique aqui</a> se preferir</h2>`
        div2.innerHTML = novoCodigo2
    } else if(select === 'option3') {
        let div2 = document.getElementById('div2')
        let novoCodigo2 = `<h1>Contato</h1>
        <h3 id="h3A">Telefone: (48) 98810-1127</h3>
        <h3 id="h3A">E-mail: gabrielpitzdasilva@gmail.com</h3>`
        div2.innerHTML = novoCodigo2
    } else if(select === 'option4') {
        let div2 = document.getElementById('div2')
        let novoCodigo2 = ` <h1>Desempenho</h1>
       <h3 id="h3E">Eu fiz esse site para mostrar que consigo desenvolver um projeto sozinho.</h3>
       <h3 id="h3E">Cursando desenvolvimento de sistemas no SENAI eu aprendi muitas coisas que estou pondo em prática; camelCase, laços de repetição, iterador, arrays, objetos,  funções, e mais recentemente, função recursiva.</h3>
       <br><br>
       <h3 id="h3F">Aqui está um pouco da programação desse site</h3>
       <h2 class="desempenhoH2">Html:</h2>
       <img src="codigo1.png" class="desempenhoClasse">
        <h2 class="desempenhoH2">JavaScript:</h2>
       <img src="codigo2.png" class="desempenhoClasse">
        <h2 class="desempenhoH2">CSS:</h2>
       <img src="codigo3.png" class="desempenhoClasse">
       <br><br><br><br><br><br><br><br><br><br><br><br><br>`
        div2.innerHTML = novoCodigo2
    }
}