import { Model, createServer } from 'miragejs';

createServer({
    models: {
        todos: Model
    },
    routes() {
        this.namespace = 'api';
        this.get('/todos', () => {
              return [
                { id: 1, label: 'Learn MirageJS', completed: false },
              ]
         });  
    },
})