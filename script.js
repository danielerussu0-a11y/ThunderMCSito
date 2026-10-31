// ======================================
// 🎃 THUNDERMC — SCRIPT
// ======================================

function copyIP() {

    const ip = "play.thundermc.it";

    navigator.clipboard.writeText(ip)
        .then(() => {

            alert("🎃 IP copiato!\n\n" + ip);

        })
        .catch(() => {

            alert("IP ThunderMC:\n\n" + ip);

        });

}


// ======================================
// 👥 GIOCATORI ONLINE
// ======================================

const players = document.getElementById("players");

if (players) {

    // Valore temporaneo.
    // In seguito lo collegheremo
    // direttamente allo stato del server.

    players.textContent = "100";

}
