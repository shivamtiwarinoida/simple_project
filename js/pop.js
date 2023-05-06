let i = 0;
function func1() {
    console.log("clicked");
    const ele = document.getElementById('work2');
    if (i % 2 == 0) {
        ele.style.display = 'flex';
        i++;
    }
    else {
        ele.style.display = 'none';
        i--;
    }
}
