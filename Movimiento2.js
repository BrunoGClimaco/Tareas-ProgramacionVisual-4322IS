function datos(){
    this.correr=Correr;
    this.caminar=Caminar;
    this.saltar=Saltar;
    this.detenerse=Detenerse;


    this.setCorrer=function(cor){
        Correr=cor;
    }

    this.setCaminar=function(cam){
        Caminar=cam;
    }


    this.setSaltar=function(sal){
        Saltar=sal;
    }


    this.setDetenerse=function(det){
        Detenerse=det;
    }


}

function salida(){
    var obj=new movimiento();
    
    obj.setCorrer("rapido");
    obj.setCaminar("lento");
    obj.setSaltar("alto");
    obj.setDetenerse("lentamente");

    var nr1=obj.setCorrer();
    var nr2=obj.setCaminar();
    var nr3=obj.setSaltar();
    var nr4=obj.setDetenerse();



    document.write("MOVIMIENTOS: <br>");

    document.write("Correr: "+nr1+"<br>");
    document.write("Caminar: "+nr2+"<br>");
    document.write("Saltar: "+nr3+"<br>");
    document.write("Detenerse: "+nr4+"<br>");

}