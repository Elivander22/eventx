document.addEventListener("DOMContentLoaded", async function() {
  async function loadPartial(id, url) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Elemento com id "${id}" não encontrado.`);
      return;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.text();
      element.innerHTML = data;
    } catch (error) {
      console.error(`Erro ao carregar ${id}:`, error);
    }
  }

  await loadPartial("header", "partials/header.html");
  await loadPartial("footer", "partials/footer.html");
});
