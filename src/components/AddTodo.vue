<template>
    <input type="text" class="form-control add-todo" placeholder="Add todo"  v-model="title" @keyup.enter="saveTodo(title)">
</template>

<script>
import { todos } from "./../seed";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    saveTodo(title) {
      todos.push({
        title,
        id: Date.now().toString(),
        completed: false,
      });
      this.title = "";
      // this.title = "";
      // this.$emit("add-todo", {
      //   id: 1234,
      //   title,
      //   completed: false,
      // });
    },
  },
};
</script>
