$(document).ready(() => {

    $('#btn_iniciar').click(() => {
        $('form').slideDown();
        $('#btn_iniciar').slideUp();
        $('#btn_encerrar').slideDown();
    })
    $('#btn_encerrar').click(() => {
        $('form').slideUp();
        $('#btn_iniciar').slideDown();
        $('#btn_encerrar').slideUp();
        $('li').remove();
    })

    $('form').on('submit', (e) => {
        e.preventDefault();
        const conteudo = $('#tarefa').val();
        const novaTarefa = $('<li style = "display: none; color: black; text-decoration: black; cursor: pointer"></li>');
        $(`<p>${conteudo}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').show(500);
        
        $(novaTarefa).click(() => {
            $(novaTarefa).css("text-decoration", "line-through");
        })
    })

})