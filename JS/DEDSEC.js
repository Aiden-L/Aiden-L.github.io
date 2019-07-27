/*
window.onload = function(){
	//账号初步验证功能
	var button1 = document.getElementById("login_button");
	var account = document.getElementById("account");
	var password = document.getElementById("password");
	var tips = document.getElementById("error_tips");
	var tipText = document.getElementById("err_m");
	
	var timerForJudge;
	function MytimerToTips(){
		clearTimeout(timerForJudge);
		timerForJudge = setTimeout(function(){
			tipText.innerHTML = "";
			tips.style.display = "none";
		},5000);
	}
	//登录按钮功能
	button1.onmousedown = function(){
		button1.style.border = "2px solid #5b9fcb";
		
		button1.onmouseup = function(){
			button1.style.border = "";
			if(account.value == ""){
				tips.style.display = "";
				tipText.innerHTML = "你还没有输入帐号！";
				MytimerToTips();
			}else{
				if(password.value == ""){
					tips.style.display = "";
					tipText.innerHTML = "你还没有输入密码！";
					MytimerToTips();
				}else{
					if(account.value == "Aiden" && password.value == "intoDEDSEC"){
						location = "pages/DEDSEC/DEDSECindex.html";
					}else{
						tips.style.display = "";
						tipText.innerHTML = "你输入的帐号或密码不正确，请重新输入。";
						password.value = "";
						MytimerToTips();
					}
				}
			}
			//判断结束
		};
	};
	
	//快速登录与账号登录的切换
	var toQuick = document.getElementById("quickLogIn");
	var toAccount = document.getElementById("toAccount");
	var quickLogInBox = document.getElementById("quickLogInBox");
	
	toQuick.onclick = function(){
		quickLogInBox.style.display = "";
	};
	toAccount.onclick = function(){
		quickLogInBox.style.display = "none";
	};
	
	//二维码提示
	var QRguide = document.getElementById("QRguide");
	document.getElementById("QRcord").onmouseover = function(){
		QRguide.style.display = "";
	};
	document.getElementById("QRcord").onmouseleave = function(){
		QRguide.style.display = "none";
	};
}*/
 
