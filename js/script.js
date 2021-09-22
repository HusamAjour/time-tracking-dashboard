const fetchData = async () => {
  let reportData = await fetch("../data.json");
  let toJSON = await reportData.json();
  console.log(toJSON);
  return toJSON;
};

function updateReport(element, id) {
  let parent = element.parentElement;
  let children = parent.childNodes;

  console.log(children);
  children.forEach((child) => {
    console.log(child.classList);
    if (child && child.classList && child.classList.contains("white-color")) {
      child.classList.remove("white-color");
    }
  });

  console.log(children);
  element.classList.add("white-color");
  console.log(element);
  console.log(parent);
  console.log(id);
  element.focus();
  let data = fetchData();
  data.then((info) => {
    console.log(info);
    info.forEach((card, i) => {
      console.log(card);
      let unit = document.getElementById(`unit-${i + 1}`);
      let current = document.getElementById(`current-${i + 1}`);
      let previous = document.getElementById(`previous-${i + 1}`);

      console.log(unit);
      console.log(current);
      console.log(previous);

      unit.innerHTML =
        id === "daily"
          ? "Day"
          : id === "weekly"
          ? "Week"
          : id === "monthly"
          ? "Month"
          : "";
      current.innerHTML = card.timeframes[id].current;
      previous.innerHTML = card.timeframes[id].previous;
    });
  });
}

function changeParentColor(img) {
  let cardBody = img.parentElement.parentElement;
  cardBody.classList.add("blue-bg");
}

function removeParentClass(img) {
  let cardBody = img.parentElement.parentElement;
  cardBody.classList.remove("blue-bg");
}
