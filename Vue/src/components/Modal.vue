<template>
    <div>
        <div class="modal fade" :class="{show: showModal}" :style="{display: showModal ? 'block' :'none'}">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{title}}</h5>
                        <button type="button" class="close" aria-label="Fechar" @click="fecharModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <form v-on:submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="titulo">Título</label>
                                <input type="text" class="form-control"
                                       placeholder="Título da palestra ..."
                                       name="titulo"
                                       v-validate="'required'"
                                       v-model="dataForm.titulo"/>
                                <span class="text-danger">{{errors.first('titulo')}}</span>
                            </div>
                           <div class="form-group">
                                <label for="descricao">Descrição</label>
                                <input type="text" class="form-control"
                                       placeholder="Conteudo da Palestra ..."
                                       v-model="dataForm.descricao"
                                       v-validate="'required'"
                                       id="descricao"
                                       name="descricao">
                               <span class="text-danger">{{errors.first('descricao')}}</span>
                            </div>
                            <div class="form-group">
                                <label for="empresa">Empresa</label>
                                <input type="text" class="form-control"
                                       placeholder="Empresa"
                                       v-model="dataForm.empresa"
                                       v-validate="'required'"
                                       name="empresa">
                                <span class="text-danger">{{errors.first('empresa')}}</span>
                            </div>
                             <div class="form-group">
                                <label for="local">Local</label>
                                <input type="text" class="form-control"
                                       placeholder="Local" v-model="dataForm.local"
                                       v-validate="'required'"
                                       name="local">
                                 <span class="text-danger">{{errors.first('local')}}</span>

                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade" :class="{show: showModal }"
             :style="{display: showModal ? 'block' :'none'}"></div>
    </div>
</template>

<script>

    export default {
        name: "Modal",
        props: {
            title: String,
            showModal: {
                type: Boolean,
                require: true
            }
        },
        data() {
            return {
                dataForm: {}
            }
        },
        methods: {
            fecharModal() {
                this.dataForm=[];
                this.$validator.reset();
                this.$emit('fechar');
            },
            onSubmit(){

                this.$validator.validate().then(valid =>{
                    if(!valid) return;
                    this.$emit('salvar',this.dataForm);
                    this.fecharModal();
                });

            }
        },

    }
</script>

<style lang="scss" scoped>
    .modal {
        max-width: 100%;
        z-index: 10000;
        position: absolute;
        top: 0;;
    }

    
</style>