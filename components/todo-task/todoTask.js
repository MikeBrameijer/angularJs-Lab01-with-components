function TodoTask() {
  const controller = this;
  controller.removeTask = function(y){
    console.log(y);
    controller.todoArray.splice(controller.todoArray.indexOf(y), 1);
  }

  controller.completeTask = function(x){
    x.complete = !x.complete;
  };
}

angular
  .module('TodoApp')
  .component('todoTask', {
    template: `
    <ol>
    <li ng-repeat="item in $ctrl.todoArray | filter : $ctrl.search"
      ng-class="{ 'completed' : (item.complete === true)}">
      <button ng-if="item.complete === false" ng-click="$ctrl.completeTask(item)"
          class="completeBtn">Complete</button>{{item.name}}<button ng-click="$ctrl.removeTask(item)"
        class="xBtn">X</button>
    </li>

  </ol>
    `,
    controller: TodoTask,
    bindings: {
      todoArray: "<",
      search: "<"
    }
  });