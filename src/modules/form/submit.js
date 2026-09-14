import dayjs from "dayjs";

import { newSchedule } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/schedules-load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();
    if (!name) {
      return alert("Nome do cliente não informado");
    }

    const hourSelected = document.querySelector(".hour-selected");
    console.log(hourSelected);

    if (!hourSelected) {
      return alert("Selecione um horário disponível");
    }

    const [hour] = hourSelected.textContent.split(":");
    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();
    // const id = crypto.randomUUID();

    await newSchedule({
      id,
      name,
      when
    });

    await schedulesDay();

    clientName.value = "";
  } catch (error) {
    alert("Não foi possível fazero o agendamento");
    console.log(error);
  }
};

const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;
