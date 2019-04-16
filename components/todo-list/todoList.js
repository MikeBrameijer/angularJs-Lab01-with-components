function TodoList() {
  const controller = this;
  controller.todoArray = [
    {
      name: "Make a TODO List",
      complete: false
    },
    {
      name: "Do homework",
      complete: false
    },
    {
      name: "HTML CSS",
      complete: false
    },
    {
      name: "Make the strike through logic",
      complete: true
    }
  ];
}
  
  angular
  .module('TodoApp')
  .component('todoList', {
    template: `
        <main>
            <h1>TODO List</h1>
            <h2>A place to store the things you have to do </h2>
            
            <todo-filter search="$ctrl.search"></todo-filter>
            <todo-task search="$ctrl.search" todo-array="$ctrl.todoArray"></todo-task>
            <todo-add todo-array="$ctrl.todoArray"></todo-add>
        </main>
    `, // or use templateUrl
    controller: TodoList
  });