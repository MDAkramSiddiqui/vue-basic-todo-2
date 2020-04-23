<template>
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li v-for='todo in todoList' :key='todo.id'> 
              <span class="todo-item" @click='markTodoUncomplete(todo.id)'>{{todo.title}}</span>
                <button class="remove-item btn btn-default btn-xs pull-right" @click='deleteTodo(todo.id)'>
                    <i class="fa fa-trash"></i>
                </button>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: "FinishedTodos",
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", { id });
    },
    markTodoUncomplete(id) {
      this.$store.dispatch("markTodoUncomplete", { id });
    },
  },
};
</script>
