<template>
  <nav class="navbar navbar-light mt-3">
    <a href="#" class="navbar-brand d-flex">
      <i class="fas fa-car fa-4x" alt="Parking Downtown" />
      <h1>Sistema de controle de Estacionamento</h1>
    </a>
    <button class="btn btn-outline-success btn-large" @click="abrirModal">
      <i class="fa fa-plus-circle"></i>
      Entrada
    </button>
    <button class="btn btn-outline-success btn-large" @click="abrirModal">
      <i class="fa fa-plus-circle"></i>
      Relatório
    </button>
  </nav>
</template>
<script>
export default {
  name: "HeaderBar",

  methods: {
    abrirModal() {
      this.$emit("novoPalestrante", true);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: #fff;
  font-weight: 300;
  list-style: none;
  i {
    margin: 0 10px;
    color: #fff;
  }
  h1 {
    font-size: 1.2em;
    color: #fff;
    align-items: center;
    font-weight: 300;
  }
}
</style>