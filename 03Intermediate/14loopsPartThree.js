const names = ["youtube", "facebook", "Instagram", "Netflix", "Amazon"];
// for-of loop is mainly used for arrays where as for-in loop is mainly used for object but there is no compulsion.
for (const n of names) {
    console.log(n);
}

const symbols = {
    fb : "facebook",
    yt : "Youtube",
    ig : "Instagram",
    lco : "LearnCodeOnline.in"
}

for (const n in symbols) {
    //console.log(n); // It prints the keys properties
    //console.log(symbols[n]); // It prints the value properties
    console.log(`Key is ${n}, and the value is : ${symbols[n]}`)
}