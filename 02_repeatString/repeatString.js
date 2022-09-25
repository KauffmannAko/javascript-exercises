const repeatString = function(str,n) {
let my_str = []

if( n < 0)
{
    my_str.push("ERROR")
}
else
{
    const number = Math.floor(Math.random() * 1000)
    for(let i = 0; i < n; i++)
    {
        my_str.push(str);
    }
}
return my_str.join('');

};
//console.log(repeatString('hey',0));

// Do not edit below this line
module.exports = repeatString;
