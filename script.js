function calculateMinCost() {
		let input = document.getElementById("rope-lengths").value;
		let arr=input.split(',');
		arr = arr.map((ele)=>{
			return parseInt(ele);
		})
	let count =0;
	while(arr.length!==1){
		let sum=0;
		arr.sort((a,b)=>(a-b));
		sum = arr[0]+arr[1];
		arr.splice(0,2);
		arr.unshift(sum);
		count+=sum;
	}
	document.getElementById("result").innerText = count;
}  
