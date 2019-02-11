function formatTime(time) {
    let day = 0;
    let hour = 0;
    let minuts = 0;

    while (time > 0) {
        if (1440 <= time) {
            time = time - 1440;
            day = day + 1;
        } else if (60 <= time) {
            time = time - 60;
            hour = hour + 1;
        } else {
            minuts = time;
            time = 0;
        }
    }
    console.log(day);
    console.log(hour);
    console.log(minuts);
}

formatTime(120);