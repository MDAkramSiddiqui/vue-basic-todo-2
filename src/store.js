import { todos } from "./seed";

const state = { todos };

const getters = {
  getTodos: (state) => {
    return state.todos;
  },
};

const mutations = {
  ADD_TODO: (store, payload) => {
    store.todos.push(payload);
  },
  MARK_COMPLETE: (store, { id }) => {
    const index = store.todos.findIndex((el) => el.id === id);
    store.todos[index].completed = true;
  },
  MARK_UNCOMPLETE: (store, { id }) => {
    const index = store.todos.findIndex((el) => el.id === id);
    store.todos[index].completed = false;
  },
  DELETE_TODO: (store, { id }) => {
    const index = store.todos.findIndex((el) => el.id === id);
    store.todos.splice(index, 1);
  },
};

const actions = {
  addTodo: (context, payload) => {
    context.commit("ADD_TODO", payload);
  },
  markTodoComplete: ({ commit }, payload) => {
    commit("MARK_COMPLETE", payload);
  },
  markTodoUncomplete: ({ commit }, payload) => {
    commit("MARK_UNCOMPLETE", payload);
  },
  deleteTodo: ({ commit }, payload) => {
    commit("DELETE_TODO", payload);
  },
};

export { state, getters, mutations, actions };
