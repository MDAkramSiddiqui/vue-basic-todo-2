<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="todolist not-done">
                    <h1>Todos</h1>
                    <AddTodo/>
                    <hr>
                    <TodoListView :todoList='uncompletedTodos' />
                    <div class="todo-footer">
                        <strong>
                            <span class="count-todos"> {{ uncompletedTodos.length }} </span>
                        </strong> Items Left
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <FinishedTodos :todoList='completedTodos' />
            </div>
        </div>
    </div>
</template>

<script>
import TodoListView from "./components/TodoListView.vue";
import AddTodo from "./components/AddTodo.vue";
import FinishedTodos from "./components/FinishedTodos";
import { todos } from "./seed";
import EventBus from "./eventBus";
export default {
  name: "app",
  data() {
    return {
      todos,
    };
  },
  components: {
    TodoListView,
    AddTodo,
    FinishedTodos,
  },
  mounted() {
    EventBus.$on("add-todo", (event) => this.addNewTodo(event));
    EventBus.$on("delete-todo", (event) => this.deleteTodo(event));
    EventBus.$on("complete-todo", (event) => this.markTodoComplete(event));
    EventBus.$on("readd-todo", (event) => this.markTodoUncomplete(event));
  },
  methods: {
    addNewTodo(event) {
      this.todos.push(event);
    },
    markTodoComplete(event) {
      const index = this.todos.findIndex((el) => el.id === event.id);
      this.todos[index].completed = true;
    },
    markTodoUncomplete(event) {
      const index = this.todos.findIndex((el) => el.id === event.id);
      this.todos[index].completed = false;
    },
    deleteTodo(event) {
      const index = this.todos.findIndex((el) => el.id === event.id);
      this.todos.splice(index, 1);
    },
  },
  computed: {
    completedTodos() {
      return this.todos.filter((el) => el.completed === true);
    },
    uncompletedTodos() {
      return this.todos.filter((el) => el.completed === false);
    },
  },
};
</script>

<style>
body {
  background-color: #eeeeee;
}

.todo-item {
  cursor: pointer;
}

.todolist {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
}
.todolist h1 {
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}
.form-control {
  border-radius: 0;
}
li.ui-state-default {
  background: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
}

li.ui-state-default:last-child {
  border-bottom: none;
}

.todo-footer {
  background-color: #f4fce8;
  margin: 0 -20px -10px -20px;
  padding: 10px 20px;
}
#done-items li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  text-decoration: line-through;
}
#done-items li:last-child {
  border-bottom: none;
}
#checkAll {
  margin-top: 10px;
}
</style>
