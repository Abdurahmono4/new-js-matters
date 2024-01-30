/**
 * 
 * 
 * 
 * practice
 * let arr = [1, 2, 3, 4, 5, 34, 560, 0, 0, 234, 2, 521];
   for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }



      HOMEWORK 
      MATTER NUMBER 1  : 
     let arr = [1, 2, 3, 4, 5, 34, 560, 3, 0, 234, 2, 521];

      function processGrowing(a, b) {
        return a - b;
      }
      
      arr.sort(processGrowing);
      console.log(arr[0]);

      MATTER NUMBER 2 : 
    
     let arr = [1, 2, 3, 4, 5, 6, 7];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
          sum += arr[i];
        }
      }

      console.log(sum);
      
       MATTER NUMBER 3 :
         let arr = [1, 2, 3, 4, 5];
        let counter = 0;
        function PrimeNumber(arr) {
          for (let i = 1; i < arr.length; i++) {
            if (arr % i == 0) {
              counter += 1;
            }
        
            if (counter == 2) {
              console.log("It is prime number");
               } else if (counter != 2) {
              console.log("It is not prime number");
            }
          }
        }

PrimeNumber(arr[(1, 2, 3, 4, 5, 6, 67, 45, 23, 31, 20)]);


    MATTER NUMBER 4 :
    let arr = [1, 2, 3, 4, 5, 6, 9, 12];
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 3 == 0) {
      console.log(arr[i]);
    }
   }


      


 */
