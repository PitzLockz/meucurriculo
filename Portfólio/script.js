let count = 0
function completarIndex() {
    alert('Bem-vindo ao meu currículo! \nDescubra meu boletim, endereço e meios de contato.')
    if(count === 0) {
    let div = document.getElementById('div1')
    let novoCodigo = `<select id='select1' onchange='verificarSelect()'>
        <option value='option1'>Escolha</option>
        <option value='option2'>Endereço</option>
        <option value='option3'>Contato</option>
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
    }
}