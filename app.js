function togglePage() {
    var interruptor = document.querySelector('.interruptor');
    interruptor.classList.toggle('on');
    if (interruptor.classList.contains('on')) {
      window.location.href = 'https://exemplo.com/pagina2';
    } else {
      window.location.href = 'https://exemplo.com/pagina1';
    }
  }
  