function showclear(elem){

	if(elem.value!="")
	{
	elem.nextElementSibling.style.display="block";
	}
	else
	{
	elem.nextElementSibling.style="none";
	}
	}
	function clearinfo(elem){
	elem.previousElementSibling.value="";
	elem.style.display="none";
	}