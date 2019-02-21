import CommonController from './Common/Controller.es6';
import Moc01 from './01/Controller.es6';
import Moc02 from './02/Controller.es6';
import Moc03 from './03/Controller.es6';
import Moc04 from './04/Controller.es6';
export default class Controller {
  constructor() {

    if($('body').hasClass('01')){
      this.common = new CommonController();
      this.moc = new Moc01(this.common);
      this.common.setView(this.common.sence,this.moc.uniforms,this.moc.shader);
      this.common.render();
    }
    if($('body').hasClass('02')){
      this.common = new CommonController();
      this.moc = new Moc02(this.common);
      this.common.setView(this.common.sence,this.moc.uniforms,this.moc.shader);
      this.common.render();
    }
    if($('body').hasClass('03')){
      this.common = new CommonController();
      this.moc = new Moc03(this.common);
      this.common.setView(this.common.sence,this.moc.uniforms,this.moc.shader);
      this.common.render();
    }
    if($('body').hasClass('04')){
      this.common = new CommonController();
      this.moc = new Moc04(this.common);
      this.common.setView(this.common.sence,this.moc.uniforms,this.moc.shader);
      this.common.render();
    }



  }
}
