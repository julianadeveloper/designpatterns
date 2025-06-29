import Client from './client.js';
import Funcionario from './funcionario.js';
import Newsletter from './newsletter.js';
import Parceiro from './parceiro.js';

const newsletter = new Newsletter("Newsletter Mensal");

const joao = new Client("João", "joao@email.com");
const maria = new Funcionario("Maria", "maria@empresa.com");
const tech = new Parceiro("Tech Ltda", "suporte@tech.com");

newsletter.register(joao);
newsletter.register(maria);
newsletter.register(tech);

newsletter.addMessage("Confira nossas promoções de junho!");

newsletter.remove(joao);
newsletter.addMessage("Novidades para julho: novos produtos e serviços!");
const juliana = new Parceiro("Juliana", "juh@example.com");
newsletter.register(juliana);
newsletter.addMessage("Novidades: confira as últimas atualizações!");