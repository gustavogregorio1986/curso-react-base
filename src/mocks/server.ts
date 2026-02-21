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
         
         this.post('/todos', (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            const todo = schema.create(attrs, attrs);
            return todo;
        });

        this.put('/todos/:id', (schema, request) => {
            let id = request.params.id;
            let  newAttrs = JSON.parse(request.requestBody);
            
            let todo = schema.find('todos',id);
            todo?.update(newAttrs);
            return {};
        });


        this.delete('/todos/:id', (schema, request) => {
            let id = request.params.id;
            
            let todo = schema.find('todos',id);
            todo?.destroy();
            
            return {};
        });
    },
})