(function (){
    const actualizarHora = function(){
        const fecha= new Date,
        horas= fecha.getHours(),
        //amPm,
        minutos=fecha.getMinutes(),
        segundos=fecha.getSeconds(),
        diaSemana=fecha.getDay(),
        dia=fecha.getDate(),
        mes=fecha.getMonth(),
        anio=fecha.getFullYear();

        const parrafoHora=document.getElementById('horas'),
        parrafoAmPm=document.getElementById('amPm'),
        parrafoMinutos=document.getElementById('minutos'),
        parrafoSegundos=document.getElementById('segundos'),
        parrafoDiaSemana=document.getElementById('diaSemana'),
        parrafoDia=document.getElementById('dia'),
        parrafoMes=document.getElementById('mes'),
        parrafoAnio=document.getElementById('anio');

        const semana =['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
        parrafoDiaSemana.textContent = semana[diaSemana];

        parrafoDia.textContent = dia;

        const mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

        parrafoAnio.textContent = anio;

        if (horas >= 12){
            horas = horas - 12;
            amPm='PM';

        }else{
            amPm='AM';
        }

        if(horas == 0){
            horas == 12;
        }

        parrafoHora.textContent = horas;
        parrafoAmPm.textContent = amPm;

        if (minutos < 10){
            minutos='0' + minutos;
        }

        if(segundos <10{
            segundos = '0' + segundos;
        })

        parrafoMinutos.textContent = minutos;
        parrafoSegundos.textContent = segundos;


    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora,1000);
}())