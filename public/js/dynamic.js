/*global window:false, console:false, $:false */
/*jslint browser: true*/
var DEBUG = false;
var jqxhr = $.getJSON("/api/computers.json", function () {
	if (DEBUG) {
		console.log("success");
	}
}).done(function (computers) {
	var $content = $("#content");
	// Append the prices of each property in the computers object/hash table/associative array
	for (var compName in computers) {
		$content.append("<h3>" + compName + "'s features:</h3>");
		for (var propName in computers[compName]) {
			if (propName === "price") {
				$content.append("<strong>price</strong>: $" + computers[compName].price + "<br />");
			} else {
				$content.append(propName + ": " + computers[compName][propName] + "<br />");
			}
		}
	}
	$content.append("<br/>");
}).fail(function () {
	if (DEBUG) {
		console.log("error");
	}
}).always(function () {
	if (DEBUG) {
		console.log("complete");
	}
});
