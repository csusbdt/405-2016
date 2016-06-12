// This code derived from: 
// http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
(function() {
	function buildLinks(text) {
		// [[Hello]] -> [Hello](hello.html)
		// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
		return text.replace(/\[\[([A-Za-z0-9_]+)\]\]/g, "[$1]($1.html)");
	}
	function onload() {
		var preElement = document.getElementsByTagName('pre')[0];
		var markDownText = buildLinks(preElement.innerHTML);
		document.body.innerHTML = marked(markDownText);
	}
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js";
	script.onreadystatechange = onload;
	script.onload = onload;
	head.appendChild(script);
})();

