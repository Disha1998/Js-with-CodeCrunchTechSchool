
function getOTP(digit) {

    let otp = ''
    let num = '0123456789'
    for (let i = 0; i < digit; i++) {
        let testIndex = Math.floor(Math.random() * 10)
        otp += testIndex
        // 5312
        // otp = otp + testIndex
    }

    return otp;
}

// let callOTP = getOTP('6')
// console.log(callOTP);

function GenerateAndDisplayOTP() {
    var otp = getOTP('6')

    document.getElementById('displayotp').innerText = "Generated OTP : " + otp
}






