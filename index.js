const countId = document.getElementById("count");
const clickBtnId = document.getElementById("click-btn");
let value = Number(countId.textContent);

clickBtnId.addEventListener("click",() => {
    value = value + 1;
    countId.textContent = value;
}); 