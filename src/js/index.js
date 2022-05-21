const personagens = document.querySelectorAll('personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado.classlist.remove('selecionado');

        personagem.classList.add('selecionado');

        const idSelecionado = personagem.attributes.id.value;
        const imagemJogador1 =document.getElementById('personagem-1');
        imagemJogador1.src = ./src/imagens/${idSelecionado}.png;

        const nomeJogador1 = document.getElementById ('nome-jogador1')
        nomeJogador1.innerHTML ='viuva-negra'
    })
})

