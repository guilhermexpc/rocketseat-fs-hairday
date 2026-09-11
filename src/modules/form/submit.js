import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

form.onsubmit = (event) => {
  event.preventDefault();

  console.log("Teste");
};

const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;
