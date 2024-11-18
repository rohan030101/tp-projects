let count = 0;
let currentValue = document.getElementById("count");
// console.log(count);

function increaseCount(count1) {
    console.log(currentValue.value);

  count++;
  return (currentValue.value = count);
}

function decreaseCount(count1) {
    console.log(currentValue.value);
  if (count <= 0) {
    // alert("0");
    currentValue.value = 0;
  } else {
    count--;
    return (currentValue.value = count);
  }
}


function resetCount(count1){
  count = 0;
  return currentValue.value = 0;
}// console.log(count)
