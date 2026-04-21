function init() {
    const dob = new Date(1976, 3, 24, 0, 0, 0, 0);
    const year = new Date().getFullYear();
    let birthday = new Date(2026, 3, 24, 0, 0, 0, 0);
    if ((today().getMonth() > 3) || ((today().getMonth() === 3) && (today().getDate() > 24))) {
        birthday = new Date(2017, 3, 24, 0, 0, 0, 0);
    }

    getAge();
    countdown(birthday);
    setInterval(function(){ countdown(birthday); }, 1000);
}

function today() {
    return new Date();
    //    return new Date(2026, 3, 23, 0, 0, 0, 0);
    //    return new Date(2026, 3, 23, 23, 59, 59, 0);
    //    return new Date(2026, 3, 24, 0, 0, 0, 0);
    //    return new Date(2026, 3, 24, 1, 0, 0, 0);
    //    return new Date(2026, 3, 25, 1, 0, 0, 0);
}

function getAge() {
    const today_date = today();
    const today_year = today_date.getFullYear();
    const today_month = today_date.getMonth();
    const today_day = today_date.getDate();
    let age = today_year - 1976;

    if (today_month < 3) {
        age--;
    }
    if ((3 === today_month) && (today_day < 24)) {
        age--;
    }
    document.getElementById("age").innerHTML = "Mike is " + age + " years old!";
}

function countdown(birthday) {
    const t1 = today().valueOf() - birthday.valueOf();
    const hoursSinceBirthday = Math.floor((t1 / (1000 * 60 * 60)) % 24);
    if (hoursSinceBirthday > 0 && hoursSinceBirthday < 24) {
        document.getElementById("countdown").innerHTML = "Happy Birthday!!!!!!!11111";
        document.getElementById("countdown").style.fontSize = "70px";
        document.body.style.backgroundImage = 'url("img/dancingbaby.gif")';
        return;
    }

    const t = birthday.valueOf() - today().valueOf();
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    let strOut = "" + days + " day";
    if (days !== 1) strOut += "s";

    strOut += " " + hours + " hour";
    if (hours !== 1) strOut += "s";

    strOut += " " + minutes + " minute";
    if (minutes !== 1) strOut += "s";

    strOut += " " + seconds + " second";
    if (seconds !== 1) strOut += "s";

    strOut += " until Mike's birthday";
    document.getElementById("countdown").innerHTML = strOut;
}
