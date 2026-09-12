import { schedulesDay } from "../schedules/schedules-load.js";

const selectedDate = document.getElementById("date");

selectedDate.onchange = () => schedulesDay();
