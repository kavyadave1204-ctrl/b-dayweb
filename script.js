let enteredCode = "";



const correctCode = "2310";



function pressKey(number) {

    if (enteredCode.length < 4) {

        enteredCode += number;

        updateDots();

    }

}



function clearCode() {

    enteredCode =
        enteredCode.slice(0, -1);

    updateDots();

}



function updateDots() {

    const dots =
        document.getElementById("dots");

    if (!dots) return;


    let result = "";


    for (
        let i = 0;
        i < enteredCode.length;
        i++
    ) {

        result += "● ";

    }


    for (
        let i = enteredCode.length;
        i < 4;
        i++
    ) {

        result += "○ ";

    }


    dots.textContent = result;

}



function checkCode() {

    if (enteredCode === correctCode) {

        window.location.href =
            "surprise.html";

    }

    else {

        alert(
            "Wrong passcode 😭 Try again!"
        );

        enteredCode = "";

        updateDots();

    }

}