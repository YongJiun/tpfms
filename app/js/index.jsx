import { render } from 'react-dom'
import React from 'react'
import routes from './routes'
import $ from 'jquery'

import style from './../css/style.less'

function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, isPassive() ? {
    capture: false,
    passive: false
} : false);


$(function() {
	render(
		routes,
		document.getElementById('app')
	)
});