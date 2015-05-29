// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//I need to figure out a way to convert each data type to a string
	//To convert Array's and Object's to strings, I will need to loop over them and use a recursive function
	//for each element in the array or object.
	if(Array.isArray(obj)) {
		if(obj.length === 0) {
			return '[]';
		}else if (obj.length === 1 && typeof obj[0] === 'number') {
			return '[' + obj[0] + ']';
		}else if (obj.length === 1 && typeof obj[0] === 'string') {
			return '[' + stringifyJSON(obj[0]) + ']';
		}else {
			
			var accum = '';
			_.each(obj, function(elem, index, collection) {
				accum += stringifyJSON(elem) + ',';
			});
			return '[' + accum.slice(0,-1) + ']';
		}
		
	}else if(typeof obj === 'object' && obj !== null) {
		var objLen = Object.keys(obj).length;
		
		if(objLen === 0) {
			return "{}";
		}else if(objLen === 1) {
			var accum = '';
			_.each(obj, function(elem, prop, collection) {
				if(typeof prop === 'string') {
					accum = accum + stringifyJSON(prop) + ':' + stringifyJSON(elem);
				}else {
					throw error;
				}
			});
			return '{' + accum + '}';
		}else {
			var accum = '';
			_.each(obj, function(elem, prop, collection) {
				if(typeof prop === 'string' && typeof elem !== 'function' && elem !== undefined) {
					accum = accum + stringifyJSON(prop) + ':' + stringifyJSON(elem) + ',';
				}else {
					
				}
			});
			return '{' + accum.slice(0,-1) + '}';
		}

	}else if(typeof obj === "string") {
		return '"' + obj + '"';
	}else {
		return String(obj);	
	}

};
