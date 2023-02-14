$(document).on("click","#alerta",function()

{

  navigator.notification.alert(

    'Cadastro efetuado com sucesso',  // message

    function retorno(){},            // callback

    'Cadastro de Usuário',                   // title

    'Logar'                            // buttonName

  )

});


$(document).on("click","#confirm",function()

    {

        function onConfirm(buttonIndex) {



            if(buttonIndex == 1)

            {

                alert('Você selecionou botão Reiniciar');

            }

            if(buttonIndex == 2)

            {

                alert('Você selecionou botão Sair');

            }

        }

        navigator.notification.confirm(

            'Parabéns, você é o vencedor!', // message

            onConfirm,                     // callback to invoke with index of button pressed

            'Fim de Jogo',                  // title

            ['Reiniciar','Sair']            // buttonLabels

        );

    }

);



//Aula 29/04/2022

$(document).on("click","#prompt",function(){

        function onPrompt(results)

        {

            alert("Você selecionou opção " + results.buttonIndex + " e o valor inserido foi " + results.input1);

        }

        navigator.notification.prompt(

            'Entre com seu nome',      // message

            onPrompt,                  // callback to invoke

            'Registro',                // title

            ['Salvar','Sair'],             // buttonLabels

            ''                 // defaultText (opcional)

        );

    }

);



$(document).on("click","#beep",function(){

  navigator.notification.beep(5);

});

$(document).on("click","#vibrate",function(){

  navigator.vibrate(3000);

});

$(document).on("click","#camera",function()
{
    navigator.camera.getPicture(onSuccess, onFail, { quality:50,
    destinationType:Camera.DestinationType.File_URI,
    correctOrientation:true,
    saveToPhotoAlbum:true
    });
    
    function onSuccess(imageURI)
    {
        var image = document.getElementById('imagem');
        image.src = imageURI;
    }
    function onFail(message)
    {
        alert('faiokkkkkkj:'
+ message);    
}
});

$(document).on("click","#gps",function(){

var onSuccess = function(position){
     alert('Latitude:' + position.coords.latitude + '\n'+ 
     'Longitude:' + position.coords.longitude + '\n' +
     'Altitude: ' + position.coords.altitude + '\n' +
     'Accuracy:' + position.coords.accuracy + '\n' + 
     'Altitude Accuracy:' + position.coords.altitudeAccuracy + '/n' +
     'Heading:' + position.coords.heading + '\n' +
     'Speed:' + position.coords.speed + '\n' +
     'Timestamp:' + position.timestamp + '\n'); 
};

function onError(error) {

    alert('code:' + error.code + '\n' +
    'message:' +error.message + '\n');
    }

navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

$(document).on("click","#codigo", function(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {
        alert("Temo um código de barras\n"+
        "Resultado:" + result.text + "\n" + 
        "Formato:"+ result.format + "\n" + 
        "Cancelado:" + result.cancelled);   
        },
        function (error){
            alert("Scanning failed:" + error);
        },
        {
            preferFrontCamera: false, 
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: true,
            saveHistory: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats: "QR_CODE,PDF_417,CODE_39",
            orientation: "landscape",   
            disableAnimations:true,
            disableSucessBeep: false
            }
    );
});

$(document).on("click","#bateria1",function(){
        window.addEventListener("batterystatus",onBatteryStatus, false);
        function onBatteryStatus(status) {
            alert("Level:" + status.level + "isPlugged:" + status.isPlugged);
        }
});

$(document).on("click", "#bateria2", function(){
    
    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(status) {
        alert("Battery Level Low" + status.level +"%");
    }
});
    
$(document).on("Click", "#bateria3", function(){
        
        window.addEventListener("batterycritical", onBatteryCritical, false);

        function onBatteryCritical(status){
            alert("Battery Level Critical" + status.level + "%\nRecharge Soon!");
        }
});