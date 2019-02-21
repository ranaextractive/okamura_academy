import * as dat from 'dat.gui';
import * as Shader from './Shader/shader.es6';
export default class Controller {
  constructor(common) {
    console.log('moc 01');
    this.common = common;
    this.setDat();
    this.uniforms = this.getUniforms();
    this.shader = Shader;
  }

  getUniforms(){
    const uniforms = {
      resolution: {
        type: 'v2',
        value: new THREE.Vector2($('.canvas').width(), $('.canvas').width()),
      },
      imageResolution: {
        type: 'v2',
        value: new THREE.Vector2(800, 600),
      },
      texture: {
        type: 't',
        value: null,
      },
      crgba:{
        type:'v4',
        value:new THREE.Vector4( 1, 1, 1, 1 )
      }
    }
    return uniforms;
  }

  setDat(){
    const gui = new dat.GUI();
    this.prop = {
      r:1.0,
      g:1.0,
      b:1.0,
      a:1.0
    }
    gui.add(this.prop,'r',0,1,0.01).onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'g',0,1,0.01).onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'b',0,1,0.01).onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'a',0,1,0.01).onChange(e=>{
      this.changeDat();
    });
  }

  changeDat(){
    // console.log(this.prop);
    const v4 = new THREE.Vector4( this.prop.r, this.prop.g, this.prop.b, this.prop.a )
    this.common.setView.mesh.material.uniforms.crgba.value = v4;
    // console.log();

  }

}
