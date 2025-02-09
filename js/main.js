let clc = document.getElementById('clock');
let input = document.getElementById('input');
let button = document.getElementById('first');
let jam = null;
let rope = null;
function clock() {
    setInterval(() => {
        let time = new Date();

        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();


        if (hour < 10) {
            hour = "0" + hour
        }
        if (minute < 10) {
            minute = "0" + minute
        }
        if (second < 10) {
            second = "0" + second
        }
        let live = hour + ':' + minute + ':' + second;
        clc.innerHTML = live

        if (jam !== null && rope !== null) {
            if (jam == hour && rope == minute) {
                alert('StendUPPPPPPPPPPPPPPPPPPPPPP');
                jam = null;
                rope = null;
            }
        }
    }, 1000);
    button.addEventListener("click", () => {
        jam = input.value.split(":")[0];
        rope = input.value.split(":")[1];
        alert(jam + ':' + rope)
    });
};
clock()

