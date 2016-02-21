tddjs.namespace('ajax');

var request = new XMLHttpRequest();

try {
    var request = new ActiveXObject("Microsoft.XMLHTTP");
} catch (e) {
    alert("ActiveX is disabled");
}

tddjs.namespace('ajax').create = function () {

    var options = [
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            return new XMLHttpRequest();
        }
    ];

    for (var i = 0, l = options.length; i < l; i++) {
        try {
            return options[i]();
        } catch (e) { }
    }

    return null;
}