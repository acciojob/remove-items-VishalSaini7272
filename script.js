//your JS code here. If required.
let button = document.querySelector("#removeBtn");
let select = document.querySelector("#colorSelect");

button.addEventListener("click",()=>{
	if(select.selectedUndex !== -1){
		select.remove(select.selectedIndex);
	}
})