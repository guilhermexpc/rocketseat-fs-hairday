import dayjs from "dayjs";
import { apiConfig } from "./api-config";

async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const data = await response.json();
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));
    return dailySchedules;
  } catch (error) {
    console.log("ERROR: ", error);
    alert("Não foi possível buscar os agendamentos do dia selecionado");
  }
}

export { scheduleFetchByDay };
