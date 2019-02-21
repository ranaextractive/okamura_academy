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
uniform vec4 crgba;
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
  vec4 rgb = texture2D(texture, uv);
  gl_FragColor = vec4(rgb.r*crgba.r,rgb.g * crgba.g,rgb.b*crgba.b,rgb.a*crgba.a);
}
`
