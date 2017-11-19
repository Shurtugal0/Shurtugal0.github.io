$.fn.create_line = function(text){
    this.append($('<span>')).text(text);
    var delete_button = $('<input>').attr({
        type: 'button',
        value: 'Удалить'
    });
    $(delete_button).click(function(){
        $(this).closest('li').remove();
    });
    this.append(delete_button);
};

$(function() {
    $('#root').append($('<p>').text("WHUYYYY"))
    var list = $('<ul>');
    var elt = $('<li>');
    elt.create_line('"Сделать задание #3 по web-программированию"');
    var input = $('<input>').attr({
        type: 'text',
        id: 'add_task_input'
    });
    var add_button = $('<input>').attr({
        type: 'button',
        id: 'add_task',
        value: 'Добавить'
    });
    $(add_button).click(function() {
        var add = $('<li>');
        add.create_line($('#add_task_input').val());
        list.append(add);
    });
    list.append(elt);
    $('#root').append(list);    
    $('#root').append(input);
    $('#root').append(add_button);
});