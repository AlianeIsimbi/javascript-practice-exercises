let a = 5
let b = 8
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
let x = 1
let y = -1
let z = 2
if (x > 0 && y > 0 && z > 0) {
    console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if(x < 0 && y > 0 && z < 0) {
        console.log("The sign is +");
}else {
        console.log("The sign is -");
    }
let c = 1
let d = 5
let e = -3
if (c < d && d < e) {
    console.log(c + "," + d + "," + e);
} else if (c > d && d > e) {
    console.log(e + "," + d + "," + c)
} else {
    console.log(d + "," + c + "," + e);
}
