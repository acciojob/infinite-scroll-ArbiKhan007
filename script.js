//your code here!
const infiList=document.querySelector("#infi-list");

let listItems=[];
for(let i=0;i<10;i++){
	listItems.push("Item "+(i+1));
}

listItems.forEach((el)=>{
	const listItem=document.createElement('li');
	listItem.textContent=el;
	infiList.appendChild(listItem);
});

infiList.addEventListener("scroll", ()=>{
	let scrollTop=infiList.scrollTop;
	let scrollHeight=infiList.scrollHeight;
	let clientHeight=infiList.clientHeight;

	let scrollPercent=scrollTop/(scrollHeight-clientHeight)*100;

	if(scrollPercent>90){
		const listEle1=document.createElement('li');
		const listEle2=document.createElement('li');
		let listItemLastNum=parseInt(listItems[listItems.length-1].split(" ")[1]);
		listEle1.textContent="Item "+(listItemLastNum+1);
		listEle2.textContent="Item "+(listItemLastNum+2);
		infiList.appendChild(listEle1);
		infiList.appendChild(listEle2);
		listItems.push("Item "+(listItemLastNum+1));
		listItems.push("Item "+(listItemLastNum+2));
	}
});