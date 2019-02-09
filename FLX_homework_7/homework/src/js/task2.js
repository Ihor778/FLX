let start = confirm("Do you want to play a game?");
let max = 5;
let min = 0;
let money = 0;
let moneyFirst = 10;
let moneySecond;
let moneyThird;
let i = 3;
let st1 = 'Enter the number from ';
let st2 = 'Attemts left: ';
let st3 = 'Tottal prize: ';
let st4 = 'Possible prize for current attemt: ';
let lucky = min + Math.random() * (max - min)
lucky = Math.round(lucky);
let attem = null;

if (start === true) {
    for (; i > 0; i--) {
        moneySecond = Math.floor(moneyFirst / 2);
        moneyThird = Math.floor(moneySecond / 2);
        if (i === 3) {
            attem = moneyFirst;
        } else if (i === 2) {
            attem = moneySecond;
        } else if (i === 1) {
            attem = moneyThird;
        }
        let userNumber = +prompt(st1 + min + ' to ' + max + '\n' + st2 + i + '\n' + st3 + money + '\n' + st4 + attem);
        if (userNumber === null) {
            break
        }
        if (userNumber === lucky) {
            if (i === 1) {

                money += moneyThird;
            } else if (i === 2) {
                money += moneySecond;
            } else if (i === 3) {
                money += moneyFirst;
            }
            alert("Congratulation! Your prize is: " + money)
            let again = confirm("Do you want to continue?");
            if (again) {
                moneyFirst = moneyFirst * 3;
                i = 4;
                max *= 2;
                lucky = min + Math.random() * (max - min)
                lucky = Math.round(lucky);
            } else {
                break;
            }
        }
    }
    alert("Thank you for a game. Your prize is: " + money)
} else {
    alert("You did not become a millionaire, but can.' should be shown.");
}