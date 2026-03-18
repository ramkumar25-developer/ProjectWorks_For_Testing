/*Reverse a String

let s : String = 'TypeScript';
let rev : String = '';
for(let i=s.length;i>=0;i--){
    rev += s.charAt(i);
}
console.log(rev);*/

/*Remove the duplicate alphabets

let s : String = 'correspondence';
let ans : String = '';
let arr : number[] = new Array(26);
for(let i=0;i<26;i++){
    arr[i] = 0;
}
for(let i=0;i<s.length;i++){
    let temp:number = s.charCodeAt(i)-'a'.charCodeAt(0);
    arr[temp]++;
}
for(let i=0;i<s.length;i++){
    let temp: number = s.charCodeAt(i)-'a'.charCodeAt(0);
    if(arr[temp] == 1){
        ans += s.charAt(i);
    }
}
console.log(ans);*/

/*Remove duplicate vowels

let s: String = 'correspondence';
let vowels: String = 'aeiou';
let ans : String = '';
for(let i=0;i<s.length;i++){
    let check : boolean = false;
    for(let j=0;j<5;j++){
        if(s.charAt(i) == vowels.charAt(j)){
            check = true;
        }
    }
    if(!check){
        ans += s.charAt(i);
    }
}
console.log(ans);*/

/*Sort the array

let arr: number[] = [8,2,5,1,4,9,7,6,3];
for(let i=1;i<arr.length;i++){
    for(let j=i;j>=0;j--){
        if(arr[j] < arr[j-1]){
            let temp: number = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
        
    }
}
console.log(arr);*/


//Count the unique vowels

let s: String = 'correspondencei';
let vowels: String = 'aeiou';
let arr : number[] = new Array(26);

for(let i=0;i<26;i++){
    arr[i] = 0;
}
for(let i=0;i<s.length;i++){
    let check : boolean = false;
    for(let j=0;j<5;j++){
        if(s.charAt(i) == vowels.charAt(j)){
            check = true;
        }
    }
    if(check){
        let temp: number = s.charCodeAt(i)-'a'.charCodeAt(0);
        arr[temp]++;
    }
}
let ans : String = '';
for(let i=0;i<s.length;i++){
    let check : boolean = false;
    for(let j=0;j<5;j++){
        if(s.charAt(i) == vowels.charAt(j)){
            check = true;
        }
    }
    if(check){
        let temp: number = s.charCodeAt(i)-'a'.charCodeAt(0);
        if(arr[temp] == 1){
            ans += s.charAt(i);
        }
    }
}

console.log(ans);
