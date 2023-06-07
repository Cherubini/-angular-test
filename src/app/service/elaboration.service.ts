import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElaborationService {

  constructor() {
   }

  //prende una stringa e la trasforma in un array
  fromStringToArrayOfNumbers(input:string):number[]{
    let arrayResult:number[]=[]
    const arrayInput = input.split(' ');
    for (let i = 0; i < arrayInput.length; i++) {
      const element = arrayInput[i];
      if(Number(element)){
        arrayResult.push(Number(element));
      }
    }
    return arrayResult;
  }

  filterAnomalies(numbers:number[], top:number, bottom:number):number[]{

    let arrayResult = numbers.map((n)=>{
      if(n>top)
        return top;
       else if(n<bottom)
        return bottom;
      return n;
    })
    return arrayResult;
  }

  keepEven(number:number[]){
    return number.map(n => n%2===0)
  }
}
