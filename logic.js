const container = document.querySelector('.container');
var input= document.querySelector('.input');
const addbutton = document.querySelector('.addbutton');


class item{
	constructor(itemName){
		this.createDiv(itemName);
	}
    createDiv(itemName){
    	

    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = itemName;
    	input.classList.add('item_input');

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let editbutton = document.createElement('button');
    	editbutton.classList.add('editbutton');
    	editbutton.innerHTML = "EDIT";
    	//edit.addEventListener('click', () => this.edit(input, name));

    	let removebutton = document.createElement('button');
    	removebutton.classList.add('removebutton');
    	removebutton.innerHTML = "REMOVE";
    	//remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editbutton);
        itemBox.appendChild(removebutton);
        editbutton.addEventListener('click',() => this.edit(input));
        removebutton.addEventListener('click', () => this.remove(itemBox));

    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
    

}
function check(){
    if(input.value !="")
    {
        new item(input.value);  
    input.value=""  }
}
addbutton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
    }
})
//new item("sports");