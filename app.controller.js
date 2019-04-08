"use strict";
function TodoController() {  
  // Control the world
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

  controller.addTask = function(newTodoItem){
    controller.todoArray.push({name: newTodoItem, complete: false})
  };

  controller.removeTask = function(y){
    console.log(y);
    controller.todoArray.splice(controller.todoArray.indexOf(y), 1);
  }

  controller.completeTask = function(x){
    x.complete = !x.complete;
  };

}

angular
  .module("todoApp")
  .controller("TodoController", TodoController);