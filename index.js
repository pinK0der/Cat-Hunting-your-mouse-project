let cat = document.getElementById(`cat`); //variable for meow

cat.style.position = 'fixed'; //for fixed cat moving

document.onmousemove = (event) => {

    cat.style.left = event.clientX - 75 + 'px';

    cat.style.top = event.clientY - 75 + 'px';

}
//lose condition

cat.onmouseover = () => {alert(`Game over!`);}