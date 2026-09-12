import { schedulesDay } from "./schedules/schedules-load.js";
// Chamada quando o DOM for carregado
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
  schedulesDay();
});
