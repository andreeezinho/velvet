function Contador(){
    var dia = 10;
    var hora = 13;
    var minuto = 44;
    var segundo = 55;

    const timer = (tempo) =>{
        segundo++;
        if(segundo > 59){
            minuto++;
            segundo = 0;
        } 

        console.log(dia, hora, segundo)
        return `${dia}:${hora}:${minuto}:${segundo}`
    }

    /*
        segundo++;
        if(segundo > 59){
            minuto++;
            segundo = 0;
        }   
        console.log(dia, hora, minuto, segundo);


        timer(); 
    */

    return(
        <div>
            <p>{timer()}</p>

        </div>
    );
}

export default Contador;