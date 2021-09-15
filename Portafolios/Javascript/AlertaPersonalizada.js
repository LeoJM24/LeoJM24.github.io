swal.fire({
    imageUrl: '../Imagenes/completo.png',
    title: '<div class="titulo">Bienvenido<div/>',
    timer: 20000,
    html: '<p >Este es mi primer portafolios, espero sea de tu agrado. Si tu PC es de bajos recursos, puedes desactivar las particulas. También puedes cambiar el idioma y el diseño.<p/> <p class="cerrara">Esta ventana se cerrará en 20 segundos: <b></b>. O haz clic fuera para cerrar. ',
    imageWidth: 100,
  imageHeight: 100,
    timerProgressBar: true, 
    timerProgressBarColor: "white",
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    background: "white",
    backdrop: true,
    toast: false,
  
    customClass: {
        loader: "Loader",
        confirmButton: "BtnAceptar",
        popup: "popup"
    },
    confirmButtonText: "Aceptar",
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
     
}
)