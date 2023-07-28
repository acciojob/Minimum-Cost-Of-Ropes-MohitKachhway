function calculateMinCost() {
  //your code here
	let strText=document.getElementById('rope-lengths')
	let str=strText.value;
	let tempArr=str.split(",");

	let arr=tempArr.map((ele)=>{return parseInt(ele)})
	arr.sort((a,b)=>a-b)

	let sum=0;
	let finalSum=0;

	while(arr.length>=2){
		sum=arr[0]+arr[1];
		arr[1]=sum;
		finalSum=finalSum+sum;
		
		arr=arr.filter((ele,i)=>{return i!=0})
		arr.sort((a,b)=>a-b)	
	}
	let result=document.getElementById('result');
	finalSum.textContent=result;
  
}  
