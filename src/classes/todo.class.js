export class Todo {
    
    static fromJSON({tarea, id, completado, creado}){
        const newTodo = new  Todo( tarea );

        newTodo.id         = id;
        newTodo.completado = completado;
        newTodo.creado     = creado;

        return newTodo;
    }
    
    constructor( tarea ){
        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }
}