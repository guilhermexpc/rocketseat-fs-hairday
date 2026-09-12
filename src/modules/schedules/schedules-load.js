import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
console.log(selectedDate);
console.log(selectedDate.value);

function schedulesDay() {
  const date = selectedDate.value;
  console.log("DATA: ", date);
  hoursLoad(date);
}

export { schedulesDay };
