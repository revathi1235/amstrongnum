function amstrongnum(){
let sum=0;
let num=153;
let a=num;
while(a<0){
     let rem = a % 10;
    // sum == rem ** 3;
    console.log(rem, '*' , '*' ,3, '=' , rem**3);
}
if (sum==num){
    console.log(  num,'  it is an amstrong number ');}
    else{
         console.log( num,' it  is not a amstrong number');
    }
}

amstrongnum();