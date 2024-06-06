var contador = 1;
    var tempo = 3000;
    var img1 = "img/car-cinza.png";
    var img2 = "img/car-verme.png";
    var exibir = setInterval("exibindo()", tempo);

    function exibindo()
    {
    document.images["fotos"].src=eval("img" + contador);

    if (contador < 2)
         contador ++;
    else
        contador = 1;
    }
