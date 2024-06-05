// chess = "";
// for (let i = 0; i < 8; i++) {

//     for (let j = 0; j < 8; j++) {
//        if (i % 2 == 0 && j % 2 == 1 ||i % 2 == 1 && j % 2 ==0    ){
//         chess += "⬛";
//        }else{
//         chess += "⬜"
//        }
//     }
//     console.log(chess);
//     chess = ""
// }

let son = +prompt("Son kiriting va biz szga qvadratini chiqarib beramz");
while(isNaN(son) || son / 1 == 0){
    son = +prompt("Bu son emas son kiriting");
}
let kvadrat = "";

for (let i = 0; i < son; i++) {
    kvadrat = "";
    for (let j = 0; j < son; j++) {
        if (i == 0 || i == son - 1 || j == 0 || j == son - 1 || i == j) {
            kvadrat += "[+]";
        } else {
            kvadrat += "   ";
        }
    }
    console.log(kvadrat);
}



