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
  // Remove notificação anterior se existir
  const existingNotification = document.querySelector(
    ".email-copy-notification"
  );
  if (existingNotification) {
    existingNotification.remove();
  }

  // Cria o elemento do pop-up
  const notification = document.createElement("div");
  notification.className = "email-copy-notification";
  notification.textContent = "E-mail Copiado";

  // Adiciona ao body
  document.body.appendChild(notification);

  // Inicia a animação de entrada
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Remove o pop-up após 3 segundos
  setTimeout(() => {
    notification.classList.remove("show");
    // Aguarda a animação de saída terminar antes de remover
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
