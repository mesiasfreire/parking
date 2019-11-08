<template>
  <div class="home">
    <header-bar title="Cadastrar nova programação" @novoPalestrante="abrirModal" />
    <search-bar @pesquisarEvento="setItemPesquisa" @search="setItemPesquisa"/>
    <modal
       :showModal="showModal"
       title="Cadastro de Palestras"
       @fechar="showModal=false"
       @salvar="addProgramacao"
       />
    <hr/>
    <div class="scrollbar" id="style-1">
    <div class="container">
      <div class="row">
        <div class="col">
              <card v-if="itemPesquisa"
                v-for="(item, i) in itemPesquisado"
                :key="i">
                 <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> Local - {{item.local}}</h5>
                  <span class="card-text"><i class="far fa-bookmark"></i> Título - {{item.titulo}}</span>
                  <span class="card-text"><i class="far fa-check-circle"></i> Descrição - {{item.descricao}}</span>
                  <span class="card-text"><i class="far fa-building"></i> Empresa - {{item.empresa}}</span>
                  <p class="card-text"><small class="text-muted"><i class="far fa-clock"></i> {{new Date().toLocaleString()}}</small></p>
            </card>
        </div>
    
    </div>
    </div>
    </div>
  </div>
 
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import Modal from '@/components/Modal.vue'
import Card  from '@/components/Card.vue'

export default {
  name: 'home',
  data() {
    return {
      showModal: false,
      programacao:[
          {titulo:'VueJS',descricao:'Desenvolvendo SPA com VueJS',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'ReacJS',descricao:'ReactJS in Action',empresa:'Meluiz',local:'Arena Dev'},
          {titulo:'NodeJS e Express',descricao:'NodeJS + Express',empresa:'Sidia',local:'Arena Dev'},
          {titulo:'Python',descricao:'Python',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'VueJS',descricao:'Desenvolvendo SPA com VueJS',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'ReacJS',descricao:'ReactJS in Action',empresa:'Meluiz',local:'Arena Dev'},
          {titulo:'NodeJS e Express',descricao:'NodeJS + Express',empresa:'Sidia',local:'Arena Dev'},
          {titulo:'Python',descricao:'Python',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'VueJS',descricao:'Desenvolvendo SPA com VueJS',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'ReacJS',descricao:'ReactJS in Action',empresa:'Meluiz',local:'Arena Dev'},
          {titulo:'NodeJS e Express',descricao:'NodeJS + Express',empresa:'Sidia',local:'Arena Dev'},
          {titulo:'Python',descricao:'Python',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'VueJS',descricao:'Desenvolvendo SPA com VueJS',empresa:'PMZ',local:'Arena Dev'},
          {titulo:'ReacJS',descricao:'ReactJS in Action',empresa:'Meluiz',local:'Arena Dev'},
          {titulo:'NodeJS e Express',descricao:'NodeJS + Express',empresa:'Sidia',local:'Arena Dev'},
          {titulo:'Python',descricao:'Python',empresa:'PMZ',local:'Arena Dev'},
      ],
        itemPesquisa:''

    }
  },
  components: {
    HeaderBar,
    SearchBar,
    Modal,
    Card
  },
  methods:{
    abrirModal(val){
      this.showModal = true;
    },
    addProgramacao(val){
     this.programacao.push(val);
    },

    setItemPesquisa(val){
        this.itemPesquisa=val;
    }

  },
    computed:{
        itemPesquisado(){
            return this.programacao
                .filter((v) =>{
                    return (
                        v.titulo.match(this.itemPesquisa) ||
                        v.descricao.match(this.itemPesquisa) ||
                        v.local.match(this.itemPesquisa) ||
                        v.empresa.match(this.itemPesquisa)
                    )

                });
        }
    }
 }
</script>

<style  lang='scss' scoped>
.scrollbar
{
	margin-left: 30px;
	float: left;
	height: 70vh;
	width: 95vw;
	overflow-y: auto;
 
}
.card-body {
  
  .card-title {
  font-weight: 300;
}
  .card-text {
   margin: 0 5px;
   color:#5a5858;
   font-size: 1em;
   padding:10px;
   i {
     margin-left: 10px;
   }
}

}




/*
 *  STYLE 15
 */

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	background-color: #F5F5F5;
	border-radius: 10px;
}

#style-1::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #FFF;
	background-image: -webkit-gradient(linear,
									   40% 0%,
									   75% 84%,
									   from(#4D9C41),
									   to(#19911D),
									   color-stop(.6,#54DE5D))
}

</style>
