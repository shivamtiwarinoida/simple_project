let i = 0;
let v1 = document.getElementById('f1');
let v2 = document.getElementById('f2');


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

function showlog() {
    console.log("login clicked");
    v1.classList.add('showlogin');
    v2.classList.add('showover');
}

function remo(){
    console.log("removed clicked");
    v1.classList.remove('showlogin');
    v2.classList.remove('showover');
}

function submitt(){
    let us1 = document.getElementById('in1').value;
    console.log(us1);
    let us2 = document.getElementById('in2').value;
    console.log(us2);
    document.getElementById('in1').value = "";
    document.getElementById('in2').value = "";
    alert("Your UserName : " + us1);
    remo();
}