'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let num = 266219,
    sum = 1,
    newSam;
    num = num.toString();

    for(let i = 0; i < num.length; i++ ){
        sum = sum * num[i];
    }

    sum = sum ** 3;
    newSam = sum.toString();
    console.log(newSam[0] + newSam[1]);
});