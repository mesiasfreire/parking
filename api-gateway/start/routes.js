/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  Route.get("veiculos", "VeiculoController.index");
  Route.post("veiculo", "VeiculoController.store");
}).prefix("api/");
