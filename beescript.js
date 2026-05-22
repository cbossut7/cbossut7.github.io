function hashPangram() {

    const str = document.getElementById("str-in").value;

    let trimmed = str.trim();
    const regex = /^[A-Za-z]+$/; 
    if (!regex.test(trimmed)){
        document.getElementById("result").textContent = "error";
    }
    else {
        let lower = trimmed.toLowerCase();
        let sum = 1; 
        for (let letter of lower) {
            let val = letter.charCodeAt(0);
            sum = ((sum + 1) * val) %1811;
            // console.log(letter);
        }
        document.getElementById("result").textContent = sum;
    }
}

function powerMod(base, exp, mod) {
    let res = 1n;
    basebig = BigInt(base);
    modbig = BigInt(mod);
    expbig = BigInt(exp);
    basebig = basebig % modbig;
    while (expbig > 0n) {
        if (expbig % 2n === 1n) res = (res * basebig) % modbig;
        basebig = (basebig * basebig) % modbig;
        expbig = expbig / 2n;
    }
    return res;
}


function encryptMsg() {

    const str = document.getElementById("encmsg").value;
    const key = Number(document.getElementById("result").textContent);

    let trimmed = str.trim();
    const regex = /^[A-Za-z]+$/; 
    if (!regex.test(trimmed)){
        document.getElementById("encresult").textContent = "error";
    }
    else {
        let lower = trimmed.toLowerCase();
        let ind = 0;
        let res = "";
        for (let letter of lower) {
            let val = letter.charCodeAt(0);
            let letterind = val%97 + 1;
            console.log(key);
            console.log(ind);
            console.log(letterind);
            let newkey = powerMod(13,  (key + ind) , 29);
            console.log(newkey);
            let enc = (letterind * Number(newkey)) % 29;
            console.log(enc);
            res += String.fromCharCode(enc + 96);
            ind += 1;
            // console.log(letter);
        }
        document.getElementById("encresult").textContent = res;
    }
}


function decryptMsg() {


    const str = document.getElementById("decmsg").value;
    const key = Number(document.getElementById("result").textContent);

    let trimmed = str.trim();
    
    let lower = trimmed.toLowerCase();
    let ind = 0;
    let res = "";
    for (let letter of lower) {
        let val = letter.charCodeAt(0);
        let letterind = val%97 + 1;
        let newkey = powerMod(13, (29-(key + ind)-1) , 29);
        let dec = (letterind * Number(newkey)) % 29;
        res += String.fromCharCode(dec + 96);
        ind += 1;
        // console.log(letter);
    }
    document.getElementById("decresult").textContent = res;
    
}