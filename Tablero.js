class TableroT{

    constructor(){
        this.columnas = 10
        this.filas = 20
        this.lado = 25
        this.ancho = this.columnas*this.lado
        this.alto = this.filas*this.lado
        this.posicion = createVector(margin_tablero,margin_tablero)
            }

    coordenada(x,y){
        return createVector(x,y).mult(this.lado).add(this.posicion)
            }

    dibujar(){
        
        push()

        noStroke()
        
        for(let columna = 0; columna < this.columnas; columna++){
            for (let fila = 0; fila < this.filas; fila++){
                if((columna+fila)%2==0){
                    fill("#abccbd")
                }else{
                    fill("#5b9b9a")
                }
                let z = this.coordenada(columna, fila)
                    rect (z.x,z.y,this.lado)
                }
            
            }
        pop()
    }
}