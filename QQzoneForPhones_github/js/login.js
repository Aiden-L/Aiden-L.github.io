window.onload = function(){
	var account = document.getElementById("u");
	var password = document.getElementById("p");
	var tips = document.getElementById("error_tips");
	var tipText = document.getElementById("error_message");
	var button1 = document.getElementById("go");
	
	var timerForJudge;
	function MytimerToTips(){
		clearTimeout(timerForJudge);
		timerForJudge = setTimeout(function(){
			tipText.innerHTML = "";
			tips.style.display = "none";
		},2000);
	}
	
	function judger(){
		if(account.value == ""){
			tips.style.display = "block";
			tipText.innerHTML = "你还没有输入帐号！";
			MytimerToTips();
		}else{
			if(password.value == ""){
				tips.style.display = "block";
				tipText.innerHTML = "你还没有输入密码！";
				MytimerToTips();
			}else{
				if(account.value == "Aiden" && password.value == "intoDEDSEC"){
					location = "pages/DEDSEC/DEDSECindex.html";
				}else{
					tips.style.display = "block";
					tipText.innerHTML = "你输入的帐号或密码不正确，请重新输入。";
					password.value = "";
					MytimerToTips();
				}
			}
		}
		//判断结束
	}
	//登录按钮功能
	button1.onmousedown = function(){	
		button1.onmouseup = function(){
			judger();
		};
	};
	//注册
	var forget = document.getElementById("forgetpwd");
	var login = document.getElementById("zc");
	forget.onmousedown = function(){	
		forget.onmouseup = function(){
			location = "https://aq.qq.com/cn2/findpsw/mobile_v2/mobile_web_find_index?source_id=3263&account=Aiden@qq.com";
		};
	};
	login.onmousedown = function(){	
		login.onmouseup = function(){
			location = "https://ssl.zc.qq.com/v3/index-chs.html?from=pt";
		};
	};
	
};
