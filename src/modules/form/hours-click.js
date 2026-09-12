function hoursClick() {
  const hoursAvailable = document.querySelectorAll(".hour-available");
  console.log(hoursAvailable);

  hoursAvailable.forEach((avaliable) => {
    avaliable.addEventListener("click", (selected) => {
      hoursAvailable.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      selected.target.classList.add("hour-selected");
    });
  });
}

export { hoursClick };
