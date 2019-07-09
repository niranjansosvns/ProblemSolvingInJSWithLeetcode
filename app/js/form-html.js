function formjs() {
	
var beans = document.querySelector("#beans");
var count = document.querySelector(".beancount");
count.innerText= beans.value;

beans.oninput = function () {
	count.textContent = beans.value;
	// body...
  }
}
formjs();