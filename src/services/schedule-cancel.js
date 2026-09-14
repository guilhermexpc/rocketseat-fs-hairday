import { apiConfig } from "./api-config.js";

async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE"
    });

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log("Error:", error);
    alert("Não foi possível cancelar o agendamento");
  }
}

export { scheduleCancel };
