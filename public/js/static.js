/*global window:false, console:false, $:false */
/*jslint browser: true*/
var DEBUG = false;
var jqxhr = $.getJSON("descriptions.json", function () {
	console.log("success");
}).done(function (data) {
	var $content = $("#content");
	$content.html("<strong>Climate Change:<strong>");
	$.each(data, function (i, item) {
		if (DEBUG) {
			console.log(item);
		}
		if (item) {
			$content.append($("<div>").append(decodeURIComponent(item)));
		}
	});
}).fail(function () {
	console.log("error");
}).always(function () {
	console.log("complete");
});
