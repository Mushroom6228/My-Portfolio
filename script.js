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

  // Adiciona a classe .show para iniciar a animação de entrada
  setTimeout(() => {
    notification.classList.add("show");
  }, 100); // Pequeno delay para garantir que a transição ocorra

  // Define um tempo para remover a classe .show e esconder o pop-up
  setTimeout(() => {
    notification.classList.remove("show");

    // Remove o elemento do DOM após a transição de saída
    setTimeout(() => {
      notification.remove();
    }, 3000); // Deve ser maior que a duração da transição no CSS (0.4s)
  }, 3000); // Tempo que o pop-up fica visível
}
