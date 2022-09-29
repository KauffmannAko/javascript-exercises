const removeFromArray = function(Arr,removElmt1,removElmt2,removElmt3,removElmt4) {


    let newArr  = [];
    for(let i = 0;  i < Arr.length; i++){
        
            if(Arr[i] === removElmt1 || 
               Arr[i] === removElmt2 || 
               Arr[i] === removElmt3 || 
               Arr[i] === removElmt4
               )
            {
                continue;
            }
            else
            {
                newArr.push(Arr[i]);
            }
    }
    return newArr;


};

//console.log(removeFromArray([4,5,6,7,8],5,7));
// Do not edit below this line
module.exports = removeFromArray;
