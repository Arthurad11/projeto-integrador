document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
      button.addEventListener("click", function () {
        const row = this.closest("tr");
        const nome = row.cells[0].textContent;
        const quantidade = row.cells[1].textContent;
        const unidade = row.cells[2].textContent;

        document.getElementById("editNome").value = nome;
        document.getElementById("editQuantidade").value = quantidade;
        document.getElementById("editUnidade").value = unidade;
      });
    });

    document.getElementById("editForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Alterações salvas!");
      const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
      modal.hide();
    });
  });