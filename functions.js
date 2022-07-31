
const setalert = (msg,type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss = "alert" class="btn-close"></button></p>`

}


//read-ls-data

const readLsData = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));

    }else{
        return false;
    }
}






//create ls data ===============================>


const createLsData = (key,value) => {
    let data = [];
    if(localStorage.getItem(key)){
     data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);
    let setlsdata = JSON.stringify(data);

    localStorage.setItem(key,setlsdata)
    
}



// Update ls data 

const updateLsData = (key,array) => {

    localStorage.setItem(key,JSON.stringify(array))
}





//show list of item

function showlist(){

    let day = new Date();

    let storageget = localStorage.getItem('todo');
    let doarray;
    let data = '';

    if(storageget == null){
        doarray = [];
    }else{
        doarray = JSON.parse(storageget);
    }

    doarray.map((val,index) => {

        data += `

        <div class="bb d-flex justify-content-between">
       <li class="todo-list-item">Project Name : ${val.name} | Client Name: ${val.client} | remainTime[${reamainTime(val.dedline,day.getTime())}]</li>
        <button onclick = "deleteList(${index})" class="close">&times;</button>
        </div>
        <span style = "${rangebar(val.remain,val.dedline)}" class="status"> </span>
        
        
        
        `

    })
    todo_list.innerHTML = data;
}



// rangebar 

function rangebar(remain,deadline){
    let day = new Date();

    let current_remain =  deadline - day.getTime();
 
    let remainPer = (100*current_remain) / remain;
  
    let width =  Math.floor(remainPer);
  
    if( width <= 0 ){
      width = `width:100%; background-color:red;`;
    }else if(width >= 0 && width <= 30){
      width = `width:${width}%; background-color:navy;`;
    }else if(width >= 30 && width <= 40){
      width = `width:${width}%; background-color:orange;`;
    }else if(width >= 41 && width <= 70){
      width = `width:${width}%; background-color:blue;`;
    }else if(width >= 71 && width <= 100){
      width = `width:${width}%; background-color:green;`;
    }
  
    return width;
}


/**
* Remain Date 
*/

function reamainTime(dead_line, current_time){
  
   let total_sec = Math.floor((dead_line - current_time) / 1000);
   let total_min = Math.floor(total_sec / 60);
   let total_hours = Math.floor(total_min / 60);
   let total_Days = Math.floor(total_hours / 24);
 
 
   let hours = total_hours - (total_Days * 24);
   let min = total_min - (total_Days * 24 * 60) - (hours * 60);
   let sec = total_sec - (total_Days * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);
 
   if(dead_line > current_time){
     return `${total_Days} days ${hours} hours ${min} mins ${sec} Sec`;
   }else{
     return `<strong style="color:red;">Time over</strong>`;
   }
 
   
  }
 
 
  /**
   * Delete Do List
   */
  function deleteList(index){
   
   
   let storageVal = localStorage.getItem('todo');
   let doArray;
 
 
   if(storageVal == null){
     doArray = [];
   }else{
     doArray = JSON.parse(storageVal);
   }
 
   doArray.splice(index, 1);
   localStorage.setItem('todo', JSON.stringify(doArray));
   showlist();
 
  }