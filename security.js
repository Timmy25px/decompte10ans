(() => {
    let alt = false;
    let z = false;
    let zero = false;

    document.addEventListener("keydown", (e) => {
        if (e.key === "Alt") alt = true;
        if (e.key.toLowerCase() === "z") z = true;
        if (e.key === "0") zero = true;

        if (alt && z && zero) {
            document.getElementById("fakeLock").style.display = "none";
            document.getElementById("protectedContent").style.display = "block";
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Alt") alt = false;
        if (e.key.toLowerCase() === "z") z = false;
        if (e.key === "0") zero = false;
    });

    document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("fakeLogin");

        if (btn) {
            btn.addEventListener("click", () => {
                document.getElementById("fakeError").textContent =
                    "❌ Mot de passe incorrect.";
            });
        }
    });
})();
