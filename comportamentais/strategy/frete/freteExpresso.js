import Frete from "./frete.js";
class FreteExpresso extends Frete {
    calcula(valor) {
      return valor * 0.2;
    }
  
}
export default FreteExpresso;