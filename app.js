function changePage(page) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.querySelector("body").innerHTML = data;
      });
  }
  