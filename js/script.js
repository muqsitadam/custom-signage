var greeting = 'Howdy ';
var name = 'Muqsit';
var message= ', please check your order: ';

var welcome = greeting + name + message;

var sign = 'Edgewise Livraision' ;
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 8;
var grandTotal = subTotal + shipping;

var edge = document.getElementById('greeting');
edge.textContent = welcome;

var edgeSign = document.getElementById('userSign');
edgeSign.textContent = sign;

var edgeTiles = document.getElementById('tiles');
edgeTiles.textContent = tiles;

var edgeSubTotal = document.getElementById('subTotal');
edgeSubTotal.textContent = '$' + subTotal;

var edgeShipping = document.getElementById('shipping');
edgeShipping.textContent = '$' +shipping;

var edgeGrandTotal = document.getElementById('grandTotal');
edgeGrandTotal.textContent = '$' + grandTotal;
