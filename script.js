let texto = document.querySelector('#Texto');

texto.addEventListener("blur", function(e) {
   let  palavra = this.value;

   var palavras = palavra.split(' ');

   for(i=0; i < palavras.length; i++){
      var splitpalavra  = palavras[i].split("");
      var reverspalavra = splitpalavra.reverse();
      var Juntarpalavra= reverspalavra.join("");
      palavras[i] = Juntarpalavra;
   }

   Contrario = palavras.join(" ");

   document.getElementById("Resposta").innerHTML = Contrario;
});