import dayjs from "dayjs";

import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const selectedDate = document.getElementById("date");
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

// console.log(selectedDate);
// console.log(selectedDate.value);

async function schedulesDay() {
  const date = selectedDate.value;
  console.log("DATA: ", date);

  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  schedulesShow({ dailySchedules });
  hoursLoad(date, dailySchedules);
}

function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((element) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      item.setAttribute("data-id", element.id);

      time.textContent = dayjs(element.when).format("HH:mm");
      name.textContent = element.name;

      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      // cancelIcon.setAttribute("src", "../../src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      item.append(time, name, cancelIcon);

      const hour = dayjs(element.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log("Error: ", error);
    alert("Não foi possível exibir os agendamentos");
  }
}

export { schedulesDay };
