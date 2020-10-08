'use strict';


// variables
const  tasks = [
    {
        id : 1,
        title : "task 1",
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry 111.",
        isDone : false,
        createdAt : "15-2-2020",
    },
    {
        id : 2,
        title : "task 2",
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry 222.",
        isDone : true,
        createdAt : "1-1-1980",
    },
    {
        id : 3,
        title : "task 2",
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry 333.",
        isDone : true,
        createdAt : "1-1-1980",
    }
];

// action (function)

function printTask(){
    $('#tasks').empty();
    for (let i = 0; i < tasks.length; i++ ){
        $("#tasks").append(`
                            <li class="task-li list-group-item d-flex justify-content-between" data-item ="${tasks[i].id}">
                                <div class="content">
                                    <h3 id="edit-title" class="task-title ${tasks[i].isDone ? 'line-throw' : ''}" data-body ="data-body${tasks[i].id}">
                                        ${tasks[i].title} | <span style="font-size: 14px; color: #103a88">
                                        ${tasks[i].createdAt}</span></h3>
                                    
                                    <p id ="data-body${tasks[i].id} body-task" class="d-none">${tasks[i].body}</p>
                                   
                                </div>
                                <div class="action">
                                    <button class="btn btn-info task-edit ${tasks[i].isDone ? 'd-none' : '' }" data-edit-id ="${tasks[i].id}">Edit</button>
                                    <button class="toggle_done btn ${tasks[i].isDone ? 'btn-danger' : 'btn-success'}" data-task-id = "${tasks[i].id}"> ${tasks[i].isDone ? "Re-open" : "Done"}</button>
                                </div>
                            </li>
                          `)

    }
}


const addData = function(){
    const newTask =
        {
            id : 9,
            title : $('input#title_input').val(),
            body : $('textarea#body_text').val(),
            isDone : false,
            createdAt : '1-1-1980',
        };

    tasks.push(newTask);
    resetAddData();
    printTask();

};
const resetAddData = function(){
    $('input#title_input').val('');
    $('textarea#body_text').val('');
};

function toggleHandel(){
    const targetDone = $(this).data('task-id');
    console.log(targetDone);
    for (let i = 0; i < tasks.length; i++){
        if(targetDone == tasks[i].id){
            tasks[i].isDone = !tasks[i].isDone;
            break;
        }
    }
    printTask();
}

// Edit
function editTask(){
    const editValue = ($(this).data('edit-id')),
        myInput = $('input#title_input').val();
    for(let i = 0; i < tasks.length; i++){
        if(editValue == tasks[i].id){
            $('input#title_input').val(tasks[i].title);
            $('textarea#body_text').val(tasks[i].body);
            $("#btn_submit").css("background-color","orange").text("update");
            break;
        }
    }
    printTask();

}


// event
$(function () {
    printTask();

    $('button#btn_submit').click(addData);

    $('.task-title').click(function (e) {
        // $($(this).data('body')).toggleClass('d-block');
        $(this).nextAll('p').toggleClass('d-block');
    });


    /*$('.toggle_done').click(function (e) {
        const targetItem = ($(this).data('task-id'));
        for (let i = 0; i<tasks.length; i++){
            if(targetItem == tasks[i].id){
                tasks[i].isDone = true;
                break;
            }
        }
        printTask();
    });*/


});


// event-delegation

$('#tasks').on('click', '.toggle_done', toggleHandel);

$('#tasks').on('click', '.task-edit', editTask);

// remove
/*
function removeLiElement(){
    $('.task-edit').click(function() {
        $(this).closest('li').remove();
    });
}*/











