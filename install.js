let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (!deferredPrompt) {
    alert("Installation non disponible sur cet appareil.");
    return;
  }

  deferredPrompt.prompt();
  deferredPrompt = null;
});
