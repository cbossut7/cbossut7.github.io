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
    let ind = 1;
    let res = "";
    for (let letter of trimmed) {
        let val = letter.charCodeAt(0);
        if (val > 122 || val < 35){
            document.getElementById("encresult").textContent = "error - word contains space or other unsupported character";
            break;
        }
        let letterind = val - 34;
        let pwr = Math.abs((key * ind) % 88 ); //mod p-1
        let newkey = powerMod(13,  pwr , 89);
        let enc = (letterind * Number(newkey)) % 89;
        res += String.fromCharCode(enc + 34);
        ind += 1;
        // console.log(letter);
    }
    document.getElementById("encresult").textContent = res;

}


function decryptMsg() {


    const str = document.getElementById("decmsg").value;
    // console.log(str)
    const key = Number(document.getElementById("result").textContent);

    let trimmed = str.trim();
    let ind = 1;
    let res = "";
    for (let letter of trimmed) {
        // console.log(letter)
        let val = letter.charCodeAt(0);
        if (val > 122 || val < 35){
            document.getElementById("encresult").textContent = "error - ciphertext contains space or other unsupported character";
            break;
        }
        let letterind = val - 34;
        // console.log(key);
        let pwr = Math.abs((key * ind) % 88 ); // p-1
        let decpwr =  (89 - pwr - 1);
        // console.log(decpwr);
        
        let newkey = powerMod(13,  decpwr , 89);
        // console.log(newkey);
        let dec = (letterind * Number(newkey)) % 89;
        // console.log(dec);
        res += String.fromCharCode(dec + 34);
        ind += 1;
        // console.log(letter);
    }
    document.getElementById("decresult").textContent = res;
    
}
