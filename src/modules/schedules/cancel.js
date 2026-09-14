import { schedulesDay } from "./schedules-load";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");
console.log(periods);

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    console.log(event.target.classList.contains("cancel-icon"));
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;
      const id2 = item.getAttribute("data-id");

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");

        if (isConfirm) {
          console.log("Item Removido");
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
