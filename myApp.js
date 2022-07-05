const readline = require("readline");

numbers = [];
for(let i = 0; i <= 99; i++){
    numbers[i] = i +1;
};
function FindNumber(number){
    answer = "";
    if(number < 0 || number > 99){
        answer = "number incorrect. please return a value between 0 and 99";
    }
    else{
        isCorrect = false;
        numLoops = 0, minPos = 0 ,
        maxPos = numbers.length -1, 
        halfway = Math.trunc( (minPos + maxPos) / 2);
        while(!isCorrect){
            numLoops++;
            if(numbers[halfway] == number){
                    isCorrect = true;
                    answer = "number found. number: " + number +
                    " number of tries: " + numLoops;
            }
            else if(numbers[halfway] > number ){
                maxPos = halfway;
                halfway = Math.trunc( (minPos + maxPos) / 2);
            }
            else if(numbers[halfway] < number){
                minPos = halfway;
                halfway = Math.trunc( (minPos + maxPos) / 2);
            }
        }
    }
    return answer;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("insert a number between 0 and 99 ", function (number) {
   answer = FindNumber(number);
   console.log(answer);
   rl.close();
  });
4