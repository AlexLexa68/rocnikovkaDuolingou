document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.querySelector(".cardsGrid");

  if (!cardsGrid) return;
  cardsGrid.innerHTML = "";

  rocnikData.forEach((item) => {
    let btnText = "POKRAČOVAT";
    if (item.progress === 0) {
      btnText = "ZAČÍT";
    }

    const cardHTML = `
      <div class="card">
        <div class="cardIcon">${item.icon}</div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div>
          <div class="progressBar">
            <div class="fill" style="width: ${item.progress}%"></div>  
          </div>
        </div>
        <button class="btn">${btnText}</button>
      </div>
    `;
    cardsGrid.innerHTML += cardHTML;
  });
});
