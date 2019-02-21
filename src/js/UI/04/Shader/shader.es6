export const vert = `
// attribute vec3 position;
// attribute vec2 uv;
varying vec2 vUv;
void main(void) {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

export const frag = `
precision highp float;
uniform vec2 resolution;
uniform vec2 imageResolution;
uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D mixT;
uniform float t;
uniform int is_mix;
uniform float v;
// uniform vec4 crgba;
varying vec2 vUv;

void main(void) {
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  vec4 t2 = texture2D(texture,uv);
  vec4 t1 = texture2D(texture2,uv);
  if(is_mix == 1){
    vec4 transitionTexel = texture2D(mixT,uv);
    float threshold = v;
    float r = t * (1.0 + threshold * 2.0) - threshold;
    float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);
    gl_FragColor = mix( t1, t2, mixf );
  }else{
    gl_FragColor = mix(t1,t2,t);
  }



}
`
