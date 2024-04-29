1. "2" is printed to the console. The variable `i` is incremented as long as it's less than the `prices` array's length. The `prices` array is [100, 200, 300] here so the length is 3. 
"150" is printed to the console. `discountedPrice` is updated every iteration of the for loop, and on the last loop, `i` is 2, and `prices[2]` is 300. `discount` is 0.5, so `discountedPrice` gets set to `300 * (1-0.5)` which is 150.
3. "150" is printed to the console. `finalPrice` is updated every iteration of the loop. On the last iteration, `discountedPrice` is 150. `discountedPrice * 100` is 15,000. `Math.round(15000)` is 150000. Then 15000 `/100` = 150.
4. `[50, 100, 150]`. The first loop creates the first element of discount and sets it to be 50 as `prices[i] * (1-discount)` evaluates to 50 in the first loop when i=0. `finalPrice` is then set to 50 since 50*100 = 5000, which is an integer so Math.round(5000) = 5000. Then 5000/100 = 50. The same happens on the second iteration of the loop but with 200.
5. Errors. This is because `i` is declared with keyword `let` which is bound to its scope. `i` cannot be accessed outside of the scope of the for loop so there's an error at line 12.
6. Errors. This is because `discountedPrice` is declared with the `let` keyword inside the for loop. It is then referenced outside the for loop's scope at line 13.
7. "150" is printed to the console. `finalPrice` is updated every iteration of the loop. The last iteration, `discountedPrice` gets set to be 150. Therefore, `finalPrice` gets set to 150.
8. The array [50, 100, 150] is returned. The `finalPrice` value is pushed to an array named `discounted` every iteration of the loop. `finalPrice` is dependent on `discountedPrice` which is calculated as half of the element at the corresponding index of the `prices` array.
9. Errors. `i` is declared inside the for loop with the keyword `let`. Therefore, it cannot be accessed outside of that scope, but line 11 tries to reference it outside the scope so it throws an error.
10. "3" is printed. `length` gets set to `prices.length` and does not change. `prices.length` is 3.
11. `[50, 100, 150]` is printed. The for loop iterates 3 times and calculates `discountedPrice` as half the corresponding element of `prices`. Although `discounted` is a const, its elements can be reassigned but it cannot.
12.
  A. student.name
  B. student["Grad Year"];
  C. student.greeting();
  D. student["Favorite Teacher"].name
  E. student.courseLoad[0]
13.
  A. 32 - JS sees the '3' as a character, and adding to a character is just concatenation.
  B. 1 - '3' is a character, but - is only an arithmetic operator, so JS assumes it should do normal arithmetic with the integer value of the character.
  C. 3 - It assumes null is 0 since the code is adding it to an integer.
  D. 3null - It uses the concatenation operator with the character 3 and null value since 3 is a characcter and not an integer.
  E. 4 - JS knows true to be 1 and false to be 0, so when we try to add an integer to true, it typecasts it to 1.
  F. 0 - Both false and null are 0 when treated as integers, and the + operator tells JS the operands are integers since there's no other use for + here.
  G. 3undefined - '3' is a character, so it assumes that the + operator is meant for concatenation, thus it just concatenates undefined to '3'.
  H. nan - The - operator is only meant for arithmetic, so it typecasts both the operands to integers. undefined is a lack of value, so there's no default value for it, thus the result is not a number.
14.
  A. true - Treats > as an arithmetic operator, so type casts the character '2' to its integer value and performs comparison.
  B. true - Treat < as an airthmetic operator, so type casts each value to their corresponding integer values and compares.
  C. true - The == operator checks types and typecasts each to compare, and the integer value of characte '2' is 2.
  D. false - The === operator does not do datatype checking, it just compares the raw value, and character '2' is not equal to integer 2.
  E. false - The boolean true has integer value 1, which is not equal to 2. 
  F. true - The Boolean() function casts the parameter to its boolean value. Any non-zero value is truthy, while 0 is boolean false.
15. == does datatype comparison before comparing, so it can determine equality of value even if the datatypes are different. === does not perform datatype comparison before comparing, so any values that are different datatypes will always be unequal.
16.
17. newArr = [2,4,6]. The for loop in modifyArray iterates through the array [1,2,3] and for each element, the callback variable storing the doSomething() function is passed the element. The doSomething variable takes the element, multiplies it by 2, and returns it. Thus, each element in the array [1,2,3] is multiplied by 2 by the doSomething function and then pushed onto newArr.
18.
19. Because JS is non-blocking, all the lines run at once. However, 2 is printed at time t=1000ms. The other 3 statements printing to console do not have a timer, so they all print at t=0. However, the setTimeout function that pints 3 takes slightly longer than the line printing 4, so 3 is printed just after 4 even though that line is before the line printing 4 in the program. The result is that the console prints 143, waits 1000ms, and then prints 2.