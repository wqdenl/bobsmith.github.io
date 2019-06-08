let myImae = document.querySelector('img');
let mySrc = myImae.getAttribute('src');
console.log(myImae);
myImae.onclick = function () {
    let src = myImae.getAttribute('src');
    if (mySrc === src) {
        myImae.setAttribute('src', 'https://roy-tian.github.io/mdn-examples/html/mozilla-is-cool-scripted/images/firefox2.png');
    } else {
        myImae.setAttribute('src', mySrc);
    }
}

//设置标题
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了， '+ name + '!';
}

//设置用户名
function setUserName() {
    let myName = prompt('请输入你的名字'); //显示提示是用户进行输入的对话框。
    localStorage.setItem('name', myName); //本地储存
    setHeading(myName);
}

let storedName = localStorage.getItem('name'); //取数据
if(storedName) {
   setHeading(storedName);
} else {
    setUserName();
}

