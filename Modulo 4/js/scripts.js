$(document).ready(function () {
  // Seleccionamos el modal y el botón
  var modal = $("#miModal");
  var modalBtn = $("#modalBtn");

  // Evento: el modal comienza a abrirse
  modal.on("show.bs.modal", function () {
    console.log("El modal está comenzando a abrirse");

    // Deshabilitar botón y cambiar su color
    modalBtn
      .prop("disabled", true)
      .css("background-color", "gray")
      .css("border-color", "gray");
  });

  // Evento: el modal terminó de abrirse
  modal.on("shown.bs.modal", function () {
    console.log("El modal terminó de abrirse");
  });

  // Evento: el modal comienza a cerrarse
  modal.on("hide.bs.modal", function () {
    console.log("El modal está comenzando a cerrarse");
  });

  // Evento: el modal terminó de cerrarse
  modal.on("hidden.bs.modal", function () {
    console.log("El modal terminó de cerrarse");

    // Activar nuevamente el botón
    // y regresar a su color original
    modalBtn
      .prop("disabled", false)
      .css("background-color", "")
      .css("border-color", "");
  });
});
