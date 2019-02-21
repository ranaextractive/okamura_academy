import SetView from './setView/Controller.es6';
export default class Controller {
  constructor() {
    console.log('common setup');
    this.setRenderer();
    this.setCamera();
    this.setSence();
  }

  setView(s,u,sh){
    this.setView = new SetView(s,u,sh)
  }

  setRenderer(){
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(2);
    this.renderer.setSize($('.canvas').width(),$('.canvas').height(),true);
    $('.canvas').append(this.renderer.domElement);
  }

  setCamera(){
    this.camera = new THREE.PerspectiveCamera(
      45,$('.canvas').width() /$('.canvas').height(),1,500
    );
  }

  setSence(){
    this.sence = new THREE.Scene();
  }

  render(){
    this.renderer.render(this.sence,this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}
