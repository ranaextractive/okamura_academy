import * as dat from 'dat.gui';
import * as Shader from './Shader/shader.es6';
export default class Controller {
  constructor(common) {
    console.log('moc 04');
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
      mixT:{
        type:'t',
        value:null,
      },
      t:{
        type:'f',
        value:0
      },
      is_mix:{
        type:'i',
        value:0
      },
      v:{
        type:'f',
        value:0
      }
    }
    return uniforms;
  }

  setDat(){
    const gui = new dat.GUI();
    this.prop = {
      t:0,
      is_texture:false,
      v:0,
    }
    gui.add(this.prop,'t',0,1,0.001).onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'is_texture').onChange(e=>{
      this.changeDat();
    });
    gui.add(this.prop,'v',0,1,0.1).onChange(e=>{
      this.changeDat();
    });
  }

  changeDat(){
    this.common.setView.mesh.material.uniforms.t.value = this.prop.t;
    this.common.setView.mesh.material.uniforms.is_mix.value = +this.prop.is_texture
    this.common.setView.mesh.material.uniforms.v.value = this.prop.v;
    // console.log();

  }

}
