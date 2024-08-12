// if we change PACKED_SMI_EMEMENT array once then we can't make that array again PACKED_SMI_EMEMENT Continiuos Array

const arr = [];
// %DebugPrint(arr)

// Continious, hopley

// SMI (small interger)
// Packed element
// Double (float string function )

const myArr = [1,2,3,4,5,6]

// type of this array is Packed SMI Element and it is also best and optmized type of array but we can only push Numbers rin this Array 

myArr.push(6.0)
// Packed Double Element 

// now it become packed Double Element type array 
// if we will push one string element in this array then it will be (Packed Elements)

myArr[10] = 11;
// If we will push any element like this in array then it will become (HEPLEY_ELEMENTS) Becmeause in this Same array we have multiple type value like (Numbers, String, Double, gaps etc) its optmization would be also different 


console.log(myArr);
console.log(myArr.length);
console.log(myArr[9]);

// Array equation

// Bound checck :-it mean whatever we want to access that element is present that speciffic Array or not

//(THESE OPERATIONS WILL BE HAPPEN WHEN WE CREATE HOLES IN ARRAY)

// hasOwnProperty(myArr, 9):- if true then value would be console/return 

// hasOwnProperty(myArr.prototype, 9):- if true then value would be console/return 

// hasOwnProperty(Object.prototype, 9):- if true then value would be console/return 

// after these operations if any element will be not pressent then output will be undifinted

// THAT'S WHY IT SAYS "Holes are very expensive in JS"

// optimization compare IN Continious Arrays

// SMI > DOUBLE > PACKED

// optimization compare IN Hopely Arrays

// SMI > DOUBLE > PACKED