function init() {
    var dob = new Date(1976, 3, 24, 0, 0, 0, 0);
    var year = new Date().getFullYear();
    var birthday = new Date(2016, 3, 24, 0, 0, 0, 0);
    if ((today().getMonth() > 3) || ((today().getMonth() == 3) && (today().getDate() > 24))) {
        birthday = new Date(2017, 3, 24, 0, 0, 0, 0);
    }

    getAge();
    countdown(birthday);
    setInterval(function(){ countdown(birthday); }, 1000);
}

function today() {
    return new Date();
//        return new Date(2016, 3, 23, 0, 0, 0, 0);
//        return new Date(2016, 3, 24, 0, 0, 0, 0);
//        return new Date(2016, 3, 24, 1, 0, 0, 0);
//        return new Date(2016, 3, 25, 1, 0, 0, 0);
}

function getAge() {
    var today_date = today();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - 1976;

    if (today_month < 3) {
        age--;
    }
    if ((3 == today_month) && (today_day < 24)) {
        age--;
    }
    document.getElementById("age").innerHTML = "Mike is " + age + " years old!";
}

function countdown(birthday) {
    var t1 = today().valueOf() - birthday.valueOf();
    var hoursSinceBirthday = Math.floor((t1 / (1000 * 60 * 60)) % 24);
    if (hoursSinceBirthday > 0 && hoursSinceBirthday < 24) {
        document.getElementById("countdown").innerHTML = "Happy Birthday!!!!!!!11111";
        document.getElementById("countdown").style.fontSize = "70px";
        document.body.style.backgroundImage = 'url("img/dancingbaby.gif")';
        return;
    }

    var t = birthday.valueOf() - today().valueOf();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var strOut = "" + days + " day";
    if (days !== 1) strOut += "s";

    strOut += " " + hours + " hour";
    if (hours !== 1) strOut += "s";

    strOut += " " + minutes + " minute";
    if (minutes !== 1) strOut += "s";

    strOut += " " + seconds + " second";
    if (seconds !== 1) strOut += "s";

    strOut += " until his birthday";
    document.getElementById("countdown").innerHTML = strOut;
}
