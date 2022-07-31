
const todo_form = document.querySelector('#todo_form');
const do_name = document.querySelector('#do_name');
const client_name = document.querySelector('#client_name');
const do_date = document.querySelector('#do_date');
const do_time = document.querySelector('#do_time');
const todo_list = document.querySelector('.todo-list');


todo_form.onsubmit = (e) =>{
    e.preventDefault();


    let day1 = new Date(do_date.value + ' ' + do_time.value);
    let day2 = new Date();

    let storageget = localStorage.getItem('todo');
    let doarray;
    if(storageget == null){
        doarray = [];
    }else{
        doarray = JSON.parse(storageget)
    }

    doarray.push ({
        name   : do_name.value,
        client :  client_name.value,
        remain : Math.floor((day1.getTime() - day2.getTime())),
        dedline: day1.getTime(),
    });

    localStorage.setItem('todo',JSON.stringify(doarray));
    todo_form.reset();
    showlist();


}
showlist()




//showlist

setInterval(() => {
    showlist();
  }, 1000);


