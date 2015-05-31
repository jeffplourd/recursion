// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var nodesWithClass = [];

	function traverseTheDOM(node, func) {
		func(node);
		node = node.firstChild;
		while(node) {
			traverseTheDOM(node, func);
			node = node.nextSibling;
		}
	}

	function checkForClass(node) {
		var hasClass = node.nodeType === 1 && node.classList.contains(className);
		if(hasClass) {
			nodesWithClass.push(node);
		}
	}

	traverseTheDOM(document.body, checkForClass);

	return nodesWithClass;
};
