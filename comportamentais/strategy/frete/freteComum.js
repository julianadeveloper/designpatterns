import Frete from "./frete.js";
class FreteComum extends Frete {
    calcula(valor) {
        return valor * 0.1;
    }
  
}
export default FreteComum;