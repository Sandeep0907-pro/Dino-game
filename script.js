score=0;
cross=true;
document.onkeydown=function(k){
			if(k.keyCode==38){
				dino=document.querySelector(".dino");
				dino.classList.add("animatedino");
				setTimeout(()=>{
					dino.classList.remove("animatedino");
		},700)
	}
	if(k.keyCode==39){
		dino=document.querySelector('.dino');
		dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left=dinoX+112+"px";
	}
	if(k.keyCode==37){
		dino=document.querySelector('.dino');
		dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left=(dinoX-112)+"px";
	}
}
setInterval(()=>{
	dino=document.querySelector(".dino");
	gameover=document.querySelector(".gameover");
	hurdle=document.querySelector(".hurdle");
	deadMario = document.querySelector(".deadMario");
	dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
	dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

	hx=parseInt(window.getComputedStyle(hurdle,null).getPropertyValue('left'));
	hy=parseInt(window.getComputedStyle(hurdle,null).getPropertyValue('top'));

	offsetX=Math.abs(dx-hx);
	offsetY=Math.abs(dy-hy);
	if(offsetX<73 && offsetY<152){
        gameover.innerHTML = "GameOver-Reload to Play Again";
		gameover.style.visibility='visible';
		dino.style.background='#000'
		dino.style.opacity=0;
		deadMario.style.opacity = 1;
		hurdle.classList.remove('hurdleani');
	}
	else if(offsetX<145 && cross){
		score+=1;
		updateScore(score);
		cross=false;
		setTimeout(()=>{
			cross=true;
		},1000);
		setTimeout( () =>{
		anidur=parseFloat(window.getComputedStyle(hurdle,null).getPropertyValue('animation-duration'));
		newdur=anidur-0.1;
		hurdle.style.animationDuration = newdur+'s';
	   },500)
	}
},10);
function updateScore(score){
	scorecount.innerHTML="score: " +score;
}
