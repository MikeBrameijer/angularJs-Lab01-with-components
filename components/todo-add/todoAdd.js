function TodoAdd() {
    const controller = this;

    controller.addTask = function(newTodoItem){
      controller.todoArray.push({name: newTodoItem, complete: false})
    };
}
  
  angular
  .module('TodoApp')
  .component('todoAdd', {
    template: `
      <form ng-submit="$ctrl.addTask($ctrl.newTodo)">
        <input ng-model="$ctrl.newTodo" class="form-container" id="add-id" placeholder="Add your to do" />
        <button type="submit" ng-disabled="!$ctrl.newTodo" class="button" id="addBtn">Add</button>
      </form>
    `, // or use templateUrl
    controller: TodoAdd,
    bindings: {
      todoArray: "<"
    }
  });