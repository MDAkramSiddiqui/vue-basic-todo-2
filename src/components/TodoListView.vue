<template>
    <ul id="sortable" class="list-unstyled">
        <li class="ui-state-default" v-for="todo in todoList" :key='todo.id'>
            <div class="checkbox">
                <label class="todo-item">
                    <input type="checkbox" value="" @click='markTodoComplete(todo.id)'/> {{ todo.title }} </label>
            </div>
        </li>
    </ul>
</template>
<script>
import EventBus from "./../eventBus";
export default {
  name: "TodoListView",
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    markTodoComplete(id) {
      EventBus.$emit("complete-todo", {
        id,
      });
    },
  },
};
</script>
