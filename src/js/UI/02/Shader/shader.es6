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
uniform vec2 t;
uniform int is_glich;
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
  float xs = floor(gl_FragCoord.x / 0.5);
  float ys = floor(gl_FragCoord.y / 0.5);
  vec2 offset = vec2(0.0001 * t.x,0.0001*t.y);
  vec4 cr = texture2D(texture, uv + offset);
  vec4 cga = texture2D(texture, uv);
  vec4 cb = texture2D(texture, uv);
  // vec4 snow = vec4(0.4,0.4,0.4,0);
  // gl_FragColor = texture2D(texture2, uv);
  gl_FragColor = vec4(cr.r, cga.g, cb.b, 1.0);
  // gl_FragColor =  gl_FragColor + snow;
  // gl_FragColor= texture2D(texture, uv);
}
`
