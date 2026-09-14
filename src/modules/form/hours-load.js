import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

function hoursLoad(date, dailySchedules) {
  // console.log("hoursLoad", date);
  console.log("dailySchedules", dailySchedules);
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));
  console.log(unavailableHours);

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    // const isHourPastAfter = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    // const isHourPast2 = dayjs(date).add(scheduleHour, "hour").format("DD/MM/YY HH:mm");
    // const isHourPast3 = dayjs(date).format("DD/MM/YY HH:mm");
    // console.log(scheduleHour, isHourPastBefore);

    const available = !unavailableHours.includes(hour) && !isHourPast;
    const availableHour = {
      hour,
      available
    };
    // console.log(availableHour);
    return availableHour;
  });

  // console.log(opening);
  renderSchedules(opening);
  hoursClick();
}

function renderSchedules(openingHours) {
  openingHours.forEach(({ hour, available }) => {
    const listItem = document.createElement("li");

    listItem.classList.add("hour");
    listItem.classList.add(available ? "hour-available" : "hour-unavailable");

    listItem.textContent = hour;

    if (hour === "09:00") {
      addHourHeader("Manhã");
    } else if (hour === "13:00") {
      addHourHeader("Tarde");
    } else if (hour === "18:00") {
      addHourHeader("Noite");
    }
    hours.append(listItem);
  });
}

function addHourHeader(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}

export { hoursLoad };
