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
        value: 0,
      },
      texture2: {
        type: 't',
        value: null,
      },
      t:{
        type:'v2',
        value:new THREE.Vector2(0, 0)
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
      x:0,
      y:0
    }
    gui.add(this.prop,'x',-10000,10000,1).onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'y',-10000,10000,1).onChange(e=>{
      this.changeDat();
    });
  }

  changeDat(){
    const v2 = new THREE.Vector2(this.prop.x, this.prop.y)
    this.common.setView.mesh.material.uniforms.t.value = v2;
    // console.log();

  }

}
