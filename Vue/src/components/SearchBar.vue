<template>
  <div class="container">
    <form action class="mt-3">
      <div class="p-3 mb-5 rounded mt-3">
        <div class="input-group mb-3 input-group-lg">
          <input
            type="text"
            class="form-control"
            placeholder="Pesquisar veículos.."
            v-model="evento"
            @input="pesquisarEvento"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-success btn-lg" type="button" @click="pesquisarEvento">
              <i class="fas fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchBar",

  data: () => {
    return {
      evento: ""
    };
  },
  methods: {
    pesquisarEvento() {
      this.$emit("search", this.evento);
    }
  }
};
</script>