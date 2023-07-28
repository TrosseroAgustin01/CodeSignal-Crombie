function solution(year) {
    if(isNaN(year) || Math.sign(year) === -1 || Math.sign(year) === -0 ){
        return 'the year you send is not correct pleas select a valid date';
    }
    else if(typeof year === 'number'){
            //if(year > 49){
                let calculo = ((year-1)/100);
                let century = Math.floor(calculo)+1;
                console.log(century);
                return century;
            /* }else{
                return 0;
            }
            */

    }
}