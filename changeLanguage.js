


function changeLang(lang_code){

	//Create style
	//alert(lang_code);
	var languages = ["hu", "en"];
	//if lang_code is not in the array, rollback to default languge
	var set_lang_code = (languages.includes("lang_code")) ? lang_code : "hu";
	var newStyle = "";
	languages.forEach(element => {
		if(element==lang_code){
			//newStyle += "*:lang(" + element + "){display: initial;}";
		}else{
			newStyle += "*:lang(" + element + "){display: none !important;} ";
		}
	});
	//alert(newStyle);

	//Delete old Style
	document.getElementById("TranslateStyle").remove();

	//Insert new stlye to head
	const styleEl = document.createElement('style');
	styleEl.setAttribute("id", "TranslateStyle");
	document.head.appendChild(styleEl);
	const styleSheet = styleEl.sheet;
	styleSheet.insertRule(newStyle,0);


	/*
		https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
		stylesheet.insertRule(rule,index);
		stylesheet.insertRule(".have-border { border: 1px solid black;}", 0);
		stylesheet.deleteRule(index);

		https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
	*/
}