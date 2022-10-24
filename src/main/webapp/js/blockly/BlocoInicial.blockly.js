window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.BlocoInicial = window.blockly.js.blockly.BlocoInicial || {};

/**
 * @function Executar
 *
 * BlocoInicial
 *
 *
 * @author Rafael Juan Cardoso Martins
 * @since 24/10/2022 15:07:08
 *
 */
window.blockly.js.blockly.BlocoInicial.ExecutarArgs = [];
window.blockly.js.blockly.BlocoInicial.Executar = async function() {
 var item;
  //
  this.cronapi.util.getURLFromOthers('GET', 'application/x-www-form-urlencoded', 'https://viacep.com.br/ws/73083640/json/', null, null, async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',this.cronapi.json.getProperty(item, 'logradouro'));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Erro');
  }.bind(this));
}
