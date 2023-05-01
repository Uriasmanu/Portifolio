function changePage(page) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.querySelector("#conteudo").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", page, true);
  xhr.send();
}

