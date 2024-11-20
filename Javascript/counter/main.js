let count = 0;
let currentValue = document.getElementById("count");
// console.log(count);

function increaseCount() {
  console.log(currentValue.value);
  count++;
  return (currentValue.value = count);
}

function decreaseCount() {
  console.log(currentValue.value);
  if (count <= 0) {
    // alert("0");
    currentValue.value = 0;
  } else {
    count--;
    return (currentValue.value = count);
  }
}

function resetCount() {
  count = 0;
  return (currentValue.value = 0);
} // console.log(count)
