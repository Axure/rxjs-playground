var Rx = require('rx');
//
//var Observer = Rx.Observable;
//
//var keyEvent = Observer.from(3);
//
//var Subscriber = Rx.Subscription;
var observer = Rx.Observer.create(function (ev) {
    alert(ev);
}, function (err) {
    alert("Error with " + err);
}, function () {
    alert('Done!');
});
//# sourceMappingURL=index.js.map