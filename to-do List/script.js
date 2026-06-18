let add=document.querySelector(".add");
let remove=document.querySelector(".remove");
let notes =document.querySelector(".notes");

function createItem(){
 let item =document.createElement("li");
 item.contentEditable=true;

 item.addEventListener("dblclick",function(){
         item.classList.toggle("done");
    })

    item.addEventListener("keydown",function(event){
        if(event.key==='Enter'){
         event.preventDefault();
          let newItem = createItem();
            notes.appendChild(newItem);
            newItem.focus()
        }
        if(event.key==='Backspace'){
            
          if(item.textContent.trim()===""){
            event.preventDefault();
             let prev = item.previousElementSibling;

            item.remove();
             if (prev) {
                    prev.focus();
                }
          }
        }
})
return item;
}
add.addEventListener("click",function(){
    let item =createItem();
    notes.appendChild(item);
   item.focus();
})
 let last = notes.lastElementChild;

remove.addEventListener("click",function(){
    let last=notes.lastElementChild;
    if(last){
        notes.removeChild(last);
    }
})
