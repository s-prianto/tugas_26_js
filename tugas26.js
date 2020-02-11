var panggilisinfinite = () =>{
	var x = [2,39,76,50,9,7,41,2,34,1,16,"entah","apa","yang","merasukimu"];
;
	for(i=0; i<x.length;i++){
		var a = isFinite(x[i]);
		if(a===true)
		console.log("Angka",x[i].toString(),"NOT Infinity")
		if(a===false)
		console.log("Angka",x[i].toString(),"Infinity")
	}
}

panggilisinfinite()
