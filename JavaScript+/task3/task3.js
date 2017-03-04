function init()
{
	var sel=document.getElementById("select");
	var com=document.getElementById("company");
	var student=document.getElementById("student");
	var noStudent=document.getElementById("noStudent");
	student.onclick=function(){
		sel.style.display="block";
		com.style.display="none";
	};
	noStudent.onclick=function(){
		com.style.display="block";
		sel.style.display="none";
	};	


	var zhejiang=document.getElementById("zhejiang");
	var jiangsu=document.getElementById("jiangsu");
	sel.onchange=function(e){
		var ev=e;
		var target=ev.target;
		if (target.value=="zhejiang") {
			zhejiang.style.display="inline";
			jiangsu.style.display="none";
		}
		if (target.value=="jiangsu") {
			zhejiang.style.display="none";
			jiangsu.style.display="inline";
		}
	}

}

init();