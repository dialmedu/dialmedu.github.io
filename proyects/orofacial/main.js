var image_reader;
function subir(){
    var i=document.getElementById('fileUp-input');
 
    if(window.FileReader){
        for(var j=0;j<i.files.length;j++){//como mi input file es múltiple, recorro sus elementos (archivos) que pueden ser varios
            var reader = new FileReader();//instanciamos FileReader
            reader.onloadend = (function(f){//creamos la función que recogerá los datos
                return function(e){
                    var content = e.target.result.split(",",2)[1];//obtenemos el contenido del archivo, estará codificado en Base64
                    //enviarArchivo(f.name,content);le paso a una función el nombre del archivo y su contenido. Esta función puede pasar el contenido por ajax u otro medio al servidor
                }
            })(i.files[j]);
            reader.readAsDataURL(i.files[j]);//
            image_reader = reader;

            var canvas = document.getElementById("micanvas");
            var ctx = canvas.getContext("2d");

            var image = new Image();
            image.onload = function() {
                ctx.drawImage(image, 0, 0);
            };
            image.src = image_reader.result;
           
             $('#upload_title').html('Cargando...')
            setTimeout(function(){  $("#imagen").attr("src", image_reader.result); }, 3000);

        }
    }
}

function cambiarEstilo(){
    let  estilo = $('#estilo').val();
    console.log(estilo)

    if(estilo == "blue")
    {
        $('.main-panel').removeClass('main-panel--white');
        $('.main-control').removeClass('main-control--white');
        $('.header').removeClass('header--white');

        $('.main-panel').addClass('main-panel--blue');
        $('.main-control').addClass('main-control--blue');
        $('.header').addClass('header--blue');
    }
    else
    {
        $('.main-panel').removeClass('main-panel--blue')
        $('.main-control').removeClass('main-control--blue');
        $('.header').removeClass('header--blue');

        $('.main-panel').addClass('main-panel--white');
        $('.main-control').addClass('main-control--white');
        $('.header').addClass('header--white');


    }
    
}