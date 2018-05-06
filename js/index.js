var menu_rotateY = 4;
var box_left = 700;
var ifame_box_exist = false; //false代表box隐藏
var ifame_box_d = "right";
var first_open_ifame = true; //true代表第一次点击option
var ifame_exchenge = false; //false代表ifame未变化
window.onload=function(){

	var box = document.getElementsByClassName('box')[0];
	var menu = document.getElementsByClassName('menu')[0];
	var option = document.getElementsByClassName('option');
	var ifame = document.getElementById('ifame');
	var ifame_box = document.getElementsByClassName("ifame_box")[0];

	ifame.src="blog.html";
	box.onmousedown=function(d){
		var x_before = d.clientX;
		box.onmouseup=function(u){
			var x_after = u.clientX;
			var rotateY_before = menu.style.transform;
			if(x_before>x_after+20){
				menu.style="transform:rotateY("+(menu_rotateY-120)+"deg)";
				menu_rotateY-=120;
			}else if(x_before<x_after-20){
				menu.style="transform:rotateY("+(menu_rotateY+120)+"deg)";
				menu_rotateY+=120;
			}
		}
	};

	option[0].addEventListener('click',function(){
		if(window.innerWidth>720){
			animation();
			if(first_open_ifame){
				ifame.src="infor.html";	
				first_open_ifame=false;
			}else{
				ifame.src="";
				setTimeout(function(){
					ifame.src="infor.html";			
				},1000)			
			}
		}else{
			ifame.scrolling="yes";		
			ifame.src="infor.html";
		}
	});

	option[1].addEventListener('click',function(){
		if(window.innerWidth>720){
			animation();
			if(first_open_ifame){
				ifame.src="blog.html";	
				first_open_ifame=false;
			}else{
				ifame.src="";
				setTimeout(function(){
					ifame.src="blog.html";			
				},1000)			
			}
		}else{
			ifame.scrolling="yes";
			ifame.src="blog.html";
		}
	});

	option[2].addEventListener('click',function(){
		if(window.innerWidth>720){
			animation();
			if(first_open_ifame){
				ifame.src="friends.html";	
				first_open_ifame=false;
			}else{
				ifame.src="";
				setTimeout(function(){
					ifame.src="friends.html";			
				},1000)			
			}
		}else{
			ifame.scrolling="yes";
			ifame.src="friends.html";		
		}
	});

	function animation(){
		box_left*=-1;
		box.style.left= box_left+"px";
		if(ifame_box_exist){
			ifame_box.style.width="0px";
			box.style.left= box_left+"px";
			ifame_box.style.cssText="borderTop:none;background:#00000082;boxShadow:0 0 10px black;top:0;margin:50px;borderRadius:20px;height:530px";				
			ifame_box_exist=false;
			ifame_exchenge=false;
		}else{
			ifame_box.style.width="600px";
		}

		setTimeout(function(){
			if(ifame_box_d=="right"){
				ifame_box.style="left:none";
				ifame_box_d="left";
			}else{
				ifame_box.style.left="0px";
				ifame_box_d="right";
			}
			ifame_box.style.width="600px";
			ifame_box_exist=true;

		},1000);
	}

	box.addEventListener('dblclick',function(){
		if(ifame.src=="http://blogcst.top/"){}else{
			if(!ifame_exchenge){
				box.style.left= "0px";
				ifame_box.style.cssText="width:100%;borderTop:100px solid rgb(0, 0, 0);background:-webkit-radial-gradient(#0c0c0c,#000000);top:100%;margin:0;borderRadius:0;height:1000px;boxShadow:none";
				ifame_exchenge=true;
			}else{
				box.style.left= box_left+"px";
				ifame_box.style.cssText="width:600px;borderTop:none;background:#00000082;top:0;margin:50px;borderRadius:20px;height:530px;box-shadow: 0 0 10px black;";
				ifame_exchenge=false;
			}

		}
	});	
}

