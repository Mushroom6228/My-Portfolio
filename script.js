// Funcionalidade de copiar email e exibir pop-up
document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.querySelector(".email-copy-btn");

  if (emailLink) {
    emailLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Copia o email para o clipboard
      const email = "metagorfando6228@gmail.com";
      navigator.clipboard
        .writeText(email)
        .then(function () {
          // Mostra o pop-up de sucesso
          showCopyNotification();
        })
        .catch(function (err) {
          console.error("Erro ao copiar:", err);
        });
    });
  }
});

function showCopyNotification() {
  const existingNotification = document.querySelector(".email-copy-notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = "email-copy-notification";
  notification.textContent = "E-mail Copiado";

  document.body.appendChild(notification);

  // Entrada: Adiciona a classe quase instantaneamente
  setTimeout(() => {
    notification.classList.add("show");
  }, 10); 

  // Saída:
  setTimeout(() => {
    notification.classList.remove("show");

    // IMPORTANTE: O tempo aqui (500ms) deve bater com o tempo do transition no CSS
    setTimeout(() => {
      notification.remove();
    }, 500); 
  }, 2500); // O pop-up fica visível por 2.5 segundos
}