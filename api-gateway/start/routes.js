/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Veiculo = use('App/Models/Veiculo');
Route.group(() => {
  Route.get("veiculos", "VeiculoController.index");
  Route.post("veiculo", "VeiculoController.store");
  Route.get('veiculo/:placa',"VeiculoController.find");

  // Route.get('veiculo/:placa', async ({ params }) => {
  //   const veiculo = await Veiculo.query().where('placa',params.placa).fetch();
  //   const movi = await veiculo.movimentacao().fetch();
  //
  //   console.log(movi.toJSON());
  // })


}).prefix("api/");
