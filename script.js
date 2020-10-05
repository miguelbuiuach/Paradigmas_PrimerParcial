function Start(clicked_id){
    
    clickedTable = document.getElementById(clicked_id);
    startTime = document.getElementById('start_time'+clicked_id);
    endTime = document.getElementById('end_time'+clicked_id);
    price = document.getElementById('price'+clicked_id);

    
    if(clickedTable.src.match('Images/poolTableBnW.png')){
        clickedTable.src="Images/poolTable.png";

        startTime.innerHTML = "Start Time: " + horaImprimible;
        endTime.innerHTML = "End Time: In use";
        IniciarTiempo(clicked_id);

        if(clicked_id == 1){
            var1 = setInterval(() => {
                document.getElementById('price1').innerHTML = "Price: $"+ (tiempoTranscurrido1 * .014);
            }, 100);
        }
        if(clicked_id == 2){
            var2 = setInterval(() => {
                document.getElementById('price2').innerHTML = "Price: $"+ (tiempoTranscurrido2 * .014);
            }, 100);
        }
        if(clicked_id == 3){
            var3 = setInterval(() => {
                document.getElementById('price3').innerHTML = "Price: $"+ (tiempoTranscurrido3 * .014);
            }, 100);
        }
        if(clicked_id == 4){
            var4 = setInterval(() => {
                document.getElementById('price4').innerHTML = "Price: $"+ (tiempoTranscurrido4 * .014);
            }, 100);
        }
        if(clicked_id == 5){
            var5 = setInterval(() => {
                document.getElementById('price5').innerHTML = "Price: $"+ (tiempoTranscurrido5 * .014);
            }, 100);
        }
        if(clicked_id == 6){
            var6 = setInterval(() => {
                document.getElementById('price6').innerHTML = "Price: $"+ (tiempoTranscurrido6 * .014);
            }, 100);
        }

        setInterval(() => {
            CalcularTiempo(clicked_id);
        }, 100);
    }
    else{
        clickedTable.src="Images/poolTableBnW.png";

        endTime.innerHTML = "End Time: "+horaImprimible;
        
        if(clicked_id == 1){
            clearInterval(var1);
        }
        if(clicked_id == 2){
            clearInterval(var2);
        }
        if(clicked_id == 3){
            clearInterval(var3);
        }
        if(clicked_id == 4){
            clearInterval(var4);
        }
        if(clicked_id == 5){
            clearInterval(var5);
        }
        if(clicked_id == 6){
            clearInterval(var6);
        }
    }
}

tiempo = 0;
tiempoInicio1 = 0;
tiempoInicio2 = 0;
tiempoInicio3 = 0;
tiempoInicio4 = 0;
tiempoInicio5 = 0;
tiempoInicio6 = 0;
tiempoTranscurrido1 = 0;
tiempoTranscurrido2 = 0;
tiempoTranscurrido3 = 0;
tiempoTranscurrido4 = 0;
tiempoTranscurrido5 = 0;
tiempoTranscurrido6 = 0;

function IniciarTiempo(tableIdInicio){
    if(tableIdInicio == 1){
        tiempoInicio1 = tiempo;
    }
    if(tableIdInicio == 2){
        tiempoInicio2 = tiempo;
    }
    if(tableIdInicio == 3){
        tiempoInicio3 = tiempo;
    }
    if(tableIdInicio == 4){
        tiempoInicio4 = tiempo;
    }
    if(tableIdInicio == 5){
        tiempoInicio5 = tiempo;
    }
    if(tableIdInicio == 6){
        tiempoInicio6 = tiempo;
    }
}

function CalcularTiempo(tableIdCalcular){
    if(tableIdCalcular == 1){
        tiempoTranscurrido1 = tiempo - tiempoInicio1;
    }
    if(tableIdCalcular == 2){
        tiempoTranscurrido2 = tiempo - tiempoInicio2;
    }
    if(tableIdCalcular == 3){
        tiempoTranscurrido3 = tiempo - tiempoInicio3;
    }
    if(tableIdCalcular == 4){
        tiempoTranscurrido4 = tiempo - tiempoInicio4;
    }
    if(tableIdCalcular == 5){
        tiempoTranscurrido5 = tiempo - tiempoInicio5;
    }
    if(tableIdCalcular == 6){
        tiempoTranscurrido6 = tiempo - tiempoInicio6;
    }
}

function Timer(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
    tiempo += 1;

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    setTimeout("Timer()", 1000)
}

Timer();