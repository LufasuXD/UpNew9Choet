const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');

let quantity = 1;
const min = 1; // จำนวนต่ำสุด
const max = 10; // จำนวนสูงสุด

decreaseBtn.addEventListener('click', () => {
  if (quantity > min) {
    quantity--;
    quantityInput.value = quantity;
    updateButtons();
  }
});

increaseBtn.addEventListener('click', () => {
  if (quantity < max) {
    quantity++;
    quantityInput.value = quantity;
    updateButtons();
  }
});

function updateButtons() {
  decreaseBtn.disabled = quantity <= min;
  increaseBtn.disabled = quantity >= max;
}