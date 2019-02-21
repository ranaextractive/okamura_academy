require('babel-polyfill');
import {config} from './Common/config.es6';
import Init from './Common/Base.es6';

$(window).on('load',e=>{

  window.config = config;
  new Init(config);

})
