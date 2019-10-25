var dsbCode = require("crypto-js");


var key = dsbCode.enc.Utf8.parse("BE56E057F20F883E");
var iv = dsbCode.enc.Utf8.parse("E10ADC3949BA59AB");

// var str = dsbCode.MD5('um81msQiWfOiiqGC').toString();
// //新的
// var key = dsbCode.enc.Utf8.parse(str.substring(16).toUpperCase());
// var iv = dsbCode.enc.Utf8.parse(str.substring(0,16).toUpperCase());


/*加密*/
function encrypt(word){
    // console.log(word)
    var text = dsbCode.enc.Utf8.parse(word);    //转128bit
    var encrypted = dsbCode.AES.encrypt(text, key, { 
        iv: iv,
        mode:dsbCode.mode.CBC,
        padding:dsbCode.pad.Pkcs7
    });
    var encryptedStr = encrypted.ciphertext.toString();
    var encryptedHexStr = dsbCode.enc.Hex.parse(encryptedStr);
    var encryptedBase64Str = dsbCode.enc.Base64.stringify(encryptedHexStr);
    return encryptedBase64Str;
}

function iGetInnerText(testStr) {
    var resultStr = testStr.replace(/\ +/g, ""); //去掉空格
    resultStr = testStr.replace(/[ ]/g, "");    //去掉空格
    resultStr = testStr.replace(/[\r\n]/g, ""); //去掉回车换行
    return resultStr;
}


/*解密*/
function decrypt(word){
    word = iGetInnerText(word)
    // console.log(word)
    var decrypted = dsbCode.AES.decrypt(word, key, { 
        iv: iv,
        mode:dsbCode.mode.CBC,
        padding:dsbCode.pad.Pkcs7
    });

    return dsbCode.enc.Utf8.stringify(decrypted).toString();
}


export { encrypt ,decrypt};


