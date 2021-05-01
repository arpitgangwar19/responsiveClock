setInterval(() => {

    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    // console.log(d);

    const hour_rotation = 30 * hour + min / 2;
    const minute_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    hours.style.transform = `rotate(${hour_rotation}deg)`;
    minute.style.transform = `rotate(${minute_rotation}deg)`;
    seconds.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000)