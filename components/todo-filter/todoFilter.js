function TodoFilter() {
    const controller = this;
}
  
  angular
  .module('TodoApp')
  .component('todoFilter', {
    template: `
    <input ng-model="$ctrl.search" class="form-container" id="filter-id" placeholder="Filter your todo List">
    `, // or use templateUrl
    controller: TodoFilter,
    bindings: {
      search: "="
    }
  });