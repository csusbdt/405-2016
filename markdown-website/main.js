// This code derived from: 
// http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
(function() {
	function onload() {
		var preElement = document.getElementsByTagName('pre')[0];
		document.body.innerHTML = marked(preElement.innerHTML);
	}
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js";
	script.onreadystatechange = onload;
	script.onload = onload;
	head.appendChild(script);
})();

