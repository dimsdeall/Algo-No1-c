const myFunction = () => {
    document.getElementById("result").innerHTML ="";
    let num = document.getElementById('inputNumber').value;
    let i = num;
    for (i; i > 0; i--) {
        for (j = i; j > 0; j--) {
            document.getElementById("result").innerHTML += j;
        }
        document.getElementById("result").innerHTML += "<br>";
        document.getElementById("result").innerHTML += "&nbsp;".repeat(num - i + 1);
    }
}