let mesas = [
    { id: 1, status: "disponivel" },
    { id: 2, status: "ocupada" },
    { id: 3, status: "disponivel" },
    { id: 4, status: "disponivel" },
    { id: 5, status: "ocupada" },
    { id: 6, status: "disponivel" }
];

const container = document.getElementById("mesas");

function carregarMesas() {
    container.innerHTML = "";

    mesas.forEach(mesa => {
        let div = document.createElement("div");
        div.className = `mesa ${mesa.status}`;

        div.innerHTML = `
            <img src="img/mesa.png" alt="Mesa">
            <h3>Mesa ${mesa.id}</h3>
            <p>Status: ${mesa.status}</p>
        `;

        div.addEventListener("click", () => reservarMesa(mesa.id));

        container.appendChild(div);
    });
}

function reservarMesa(id) {
    mesas = mesas.map(mesa => {
        if (mesa.id === id && mesa.status === "disponivel") {
            mesa.status = "ocupada";
            alert(`Mesa ${id} reservada com sucesso!`);
        } else if (mesa.id === id && mesa.status === "ocupada") {
            alert(`Mesa ${id} já está ocupada.`);
        }
        return mesa;
    });

    carregarMesas();
}

carregarMesas();
