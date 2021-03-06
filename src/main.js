/// <reference path="./typings/rx/rx.d.ts" />
/// <reference path="./typings/rx/rx.async.d.ts" />
/// <reference path="./typings/rx/rx.time.d.ts" />
/// <reference path="./typings/jquery/jquery.d.ts" />
/// <reference path="./typings/rx-jquery/rx.jquery.d.ts" />

import Rx from 'rx';
import $ from 'jquery';
import rxJq from 'rx-jquery'


var throttledInput = $('#textInput')
    .keyupAsObservable()
    .map( function (ev) {
        return $(ev.target).val();
    })
    .filter( function (text) {
        return text.length > 2;
    })
    .throttle(500)
    .distinctUntilChanged();

function searchWikipedia(term) {
    return $.ajaxAsObservable({
        url: 'http://en.wikipedia.org/w/api.php',
        data: { action: 'opensearch',
            search: term,
            format: 'json' },
        dataType: 'jsonp'
    });
}

function searchWikipedia1(term) {
    "use strict";
    return [
        'test',
        'test',
        'text'
    ]
}


var suggestions = throttledInput.flatMapLatest( function (text) {
    return searchWikipedia(text);
});


var selector = $('#results');

var subscription = suggestions.subscribe(
    function (data) {
        console.log(data);
        selector.empty();
        $.each(data.data[3], function (_, text) {
            $('<li>' + text + '</li>').appendTo(selector);
        });
    },
    function (e) {
        selector.empty();
        $('<li>Error: ' + e + '</li>').appendTo('#results');
    }
);

//import Rx from 'rx';
//import $ from 'jquery';

//
//var Observer = Rx.Observable;
//
//var keyEvent = Observer.from(3);
//
//var Subscriber = Rx.Subscription;


//var observer = Rx.Observer.create(
//    (ev) => {
//        alert(ev);
//    },
//    (err) => {
//        alert(`Error with ${err}`);
//    },
//    () => {
//        alert('Done!');
//    }
//);
//
//var input = $('#input'),
//    results = $('#results');
//
//var text: string = "This is a fcuk";
//
////console.log(input.value);
//console.log(input);
//input.val("This is fuck");
//console.log(input.val());
//
//input.val(text);
//
///* Only get the value from each key up */
//var keyups = Rx.Observable.fromEvent(input, 'keyup')
//    .map(function (e) {
//        return e.target.value;
//    })
//    .filter(function (text) {
//        return text.length > 2;
//    });
//
///* Now debounce the input for 500ms */
//var debounced = keyups
//    .debounce(500 /* ms */);
//
///* Now get only distinct values, so we eliminate the arrows and other control characters */
//var distinct = debounced
//    .distinctUntilChanged();


class Animal {
    constructor(name) { }
    move(meters) {
        alert(`${this.name} moved ${meters}m.`);
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        alert("Slithering...");
        super.move(5);
    }
}


