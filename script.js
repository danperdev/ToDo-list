$(document).ready(function(){
    $('#input').change(function(){
        var input = $(this).val()
        $('ul').append('<li>' + input + ' <i class="fa-solid fa-square-check" style="color: green;"></i> <i class="fa-solid fa-trash-can" style="color: #cf2020;"></i> </li>')
        $(this).val('')
    })

    $('ul').on('click','.fa-trash-can',function(){
        $(this).parent('li').fadeOut(200)
    })

    $('ul').on('click','.fa-square-check',function(){
        $(this).parent('li').toggleClass('checked')
    })

})