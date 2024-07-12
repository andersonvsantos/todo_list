$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancel-btn').click(function() {
        $('form').slideUp();
    });

    $('ul').on('click', 'p', function() {
        $(this).css({
            'text-decoration': 'line-through',
            'color': 'green',
        });
        $(this).append('✔');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const taskName = $('#new-task-input').val();
        const newTask = $('<li style="display: none;"></li>');

        $(`<p>${taskName}</p>`).appendTo(newTask);
        $(newTask).appendTo('ul');
        $('ul').slideDown();
        $(newTask).fadeIn(4000);
        $('#new-task-input').val('');
    });
})