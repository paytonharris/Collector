var x = 'hello';
var y = 'world';

var z = () => {
    document.getElementById('yo').innerHTML = x + ' ' + y;
};

z();