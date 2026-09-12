import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

form.onsubmit = (event) => {
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

    console.log({
      id,
      name,
      when
    });
  } catch (error) {
    alert("Não foi possível fazero o agendamento");
    console.log(error);
  }
};

const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;
