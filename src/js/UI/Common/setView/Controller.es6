// import * as Shader from './Shader/shader.es6';
export default class SetView {
  constructor(sence,uniforms,shader,path) {
    console.log('setView');
    this.sence = sence;
    this.uniforms = uniforms;
    this.shader = shader;
    this.loader = new THREE.TextureLoader();
    const paths = [
      '../../assets/img/1.jpg',
      '../../assets/img/2.jpg',
      '../../assets/img/3.jpg',
      '../../assets/img/transition1.png'
    ];
    const p = [];
    for (const path of paths) {
      p.push(this.load(path));
    }
    Promise.all(p).then(e=>{
      this.textures = e;
      this.uniforms.texture.value = e[0];
      if(this.uniforms.texture2){
        this.uniforms.texture2.value = e[2];
      }
      if(this.uniforms.mixT){
        this.uniforms.texture2.value = e[1];
        this.uniforms.mixT.value = e[2];
      }
      this.setup();
      // $(window).trigger('imgloaded');
    })
  }

  load(path){
    return new Promise((resolve, reject) =>{
      this.loader.load(path,e=>{
        e.magFilter = THREE.NearestFilter;
        e.minFilter = THREE.NearestFilter;
        resolve(e);
      })
    });
  }

  setup(){
    this.geometory = new THREE.PlaneGeometry(2,2);
    this.material = this.getMaterial();
    this.mesh = new THREE.Mesh(this.geometory,this.material);
    console.log(this.uniforms);
    this.sence.add(this.mesh)
  }
  getMaterial(){

    const material =  new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader:this.shader.vert,
      fragmentShader:this.shader.frag,
      // transparent: true,
    })
    return material;
  }




}
