(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.play = factory());
}(this, (function () { 'use strict';

function ___$insertStyle(css) {
    if (!css) {
        return;
    }

    if (typeof window === 'undefined') {
        return;
    }

    var style = document.createElement('style');

    style.setAttribute('type', 'text/css');
    style.innerHTML = css;

    document.head.appendChild(style);

    return css;
}
___$insertStyle("* {\n  transform-style: preserve-3d; }\n\n.game {\n  background-color: rgba(0, 0, 0, 0.1);\n  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.1) 2.5%, transparent 2.5%, transparent 97.5%, rgba(0, 0, 0, 0.1) 97.5%), -webkit-linear-gradient(left, rgba(0, 0, 0, 0.1) 2.5%, transparent 2.5%, transparent 97.5%, rgba(0, 0, 0, 0.1) 97.5%);\n  background-size: 3em 3em;\n  box-shadow: 0 0 0 0.1em rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-wrap: wrap-reverse;\n  align-content: flex-start; }\n  .game [class^=block-] {\n    /* square */\n    counter-increment: block;\n    height: 3em;\n    width: 3em;\n    background-color: green;\n    background-image: url(https://crossorigin.me/http://data.whicdn.com/images/58059253/large.png);\n    /* top */\n    background-size: 72em 48em; }\n    .game [class^=block-]:not(.block-0) {\n      /* 3d block */\n      position: relative;\n      transform: translateZ(3em);\n      z-index: 1;\n      /* avoid random render bug */ }\n      .game [class^=block-]:not(.block-0):after, .game [class^=block-]:not(.block-0):before {\n        /* sides */\n        content: counter(block);\n        content: '';\n        position: absolute;\n        box-sizing: border-box;\n        height: 3em;\n        width: 3em;\n        transform-origin: 100% 100%;\n        background-color: lightgreen;\n        background-image: url(https://crossorigin.me/http://data.whicdn.com/images/58059253/large.png);\n        background-size: 72em 48em; }\n      .game [class^=block-]:not(.block-0):after {\n        /* left side */\n        transform: rotateX(270deg) translateY(3em); }\n      .game [class^=block-]:not(.block-0):before {\n        /* right side */\n        transform: rotateX(-90deg) rotateY(90deg) translate(3em, 3em); }\n    .game [class^=block-]:last-child {\n      background-position: -27em -3em !important; }\n  .game.ground .block-1 {\n    background-position: 0 0; }\n    .game.ground .block-1:after, .game.ground .block-1:before {\n      /* sides */\n      background-position: -9em 0; }\n  .game.ground .block-0 {\n    background-position: 0 -3em; }\n  .game.pyramyd .block-1 {\n    background-position: -15em -42em; }\n    .game.pyramyd .block-1:before, .game.pyramyd .block-1:after {\n      /* sides */\n      background-position: -18em -42em; }\n  .game.pyramyd .block-0 {\n    background-position: 0 -33em; }\n  .game.tnt .block-1 {\n    background-position: -30em 0; }\n    .game.tnt .block-1:after, .game.tnt .block-1:before {\n      /* sides */\n      background-position: -24em 0; }\n  .game.tnt .block-0 {\n    background-position: -18em 0; }\n  .game.library .block-1 {\n    background-position: -15em -3em; }\n    .game.library .block-1:after, .game.library .block-1:before {\n      /* sides */\n      background-position: -9em -6em; }\n  .game.library .block-0 {\n    background-position: -18em -39em; }\n  .game.north .block-1 {\n    background-position: -6em -12em; }\n    .game.north .block-1:after, .game.north .block-1:before {\n      /* sides */\n      background-position: -12em -12em; }\n  .game.north .block-0 {\n    background-color: white;\n    background-position: -3em -9em; }\n  .game.inferno .block-1, .game.inferno .block-1:after, .game.inferno .block-1:before {\n    /* sides */\n    animation: lava 30s linear infinite; }\n  .game.inferno .block-1:before {\n    transform: rotateY(90deg) translateX(3em); }\n  .game.inferno .block-0 {\n    background-position: -39em -18em; }\n  .game.virtual .block-1, .game.virtual .block-1:after, .game.virtual .block-1:before {\n    /* sides */\n    background-position: -21em -3em; }\n  .game.virtual .block-0 {\n    background-position: -24em -3em; }\n  .game.halloween .block-1 {\n    background-position: -18em -18em; }\n    .game.halloween .block-1:before, .game.halloween .block-1:after {\n      /* side */\n      background-position: -18em -21em; }\n    .game.halloween .block-1:nth-child(2n):before {\n      /* face */\n      background-position: -21em -21em; }\n    .game.halloween .block-1:nth-child(3n):before {\n      /* side */\n      background-position: -18em -21em; }\n    .game.halloween .block-1:nth-child(3n):after {\n      /* face */\n      background-position: -24em -21em; }\n  .game.halloween .block-0 {\n    background-position: 0 0; }\n  .game.animate *:not(.block-0) {\n    animation: wave 2s ease-in-out infinite; }\n\n.bot {\n  font-size: 50%;\n  position: absolute;\n  bottom: 1.5em;\n  left: 1.5em;\n  width: 3em;\n  height: 3em;\n  /*\t\n\t[class$=-arm], [class$=-leg] {\n\t\twidth: 4px;\n\t\theight: 12px;\n\t\ttransform-origin: top center;\n\t\t.top {\n\t\t\tbackground-position: -44px -16px;\n\t\t\twidth: 4px;\n\t\t\theight: 4px;\n\t\t\ttransform: rotateX( 90deg ) translateZ( 2px );\n\t\t}\n\t\t.front {\n\t\t\tbackground-position: -44px -20px;\n\t\t\twidth: 4px;\n\t\t\theight: 12px;\n\t\t}\n\t\t.left {\n\t\t\tbackground-position: -40px -20px;\n\t\t\twidth: 4px;\n\t\t\theight: 12px;\n\t\t}\n\t\t.right {\n\t\t\tbackground-position: -48px -20px;\n\t\t\twidth: 4px;\n\t\t\theight: 12px;\n\t\t}\n\t\t.back {\n\t\t\tbackground-position: -52px -20px;\n\t\t\twidth: 4px;\n\t\t\theight: 12px;\n\t\t}\n\t\t.bottom {\n\t\t\tbackground-position: -48px -16px;\n\t\t\twidth: 4px;\n\t\t\theight: 4px;\n\t\t}\n\t}\n\t.left-arm {\n\t\ttop: 8px;\n\t\tleft: 8px;\n\t\tanimation: swing 1s infinite;\n\t\t.top {\n\t\t\ttransform: rotateX( 90deg ) translateZ( 2px );\n\t\t}\n\t\t.front {\n\t\t\ttransform: rotateY( 0deg ) translateZ( 2px );\n\t\t}\n\t\t.left {\n\t\t\ttransform: rotateY( -90deg ) translateZ( 2px );\n\t\t}\n\t\t.right {\n\t\t\ttransform: rotateY( 90deg ) translateZ( 2px );\n\t\t}\n\t\t.back {\n\t\t\ttransform: rotateY( 0deg ) translateZ( -2px ) scaleX( -1 );\n\t\t}\n\t\t.bottom {\n\t\t\ttransform: rotateX( -90deg ) translateZ( 10px ) scaleX( -1 );\n\t\t}\n\t}\n\t.right-arm {\n\t\ttop: 8px;\n\t\tleft: 20px;\n\t\tanimation: swing 1s .5s infinite;\n\t\t.top {\n\t\t\ttransform: rotateX( 90deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.front {\n\t\t\ttransform: rotateY( 0deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.left {\n\t\t\ttransform: rotateY( -90deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.right {\n\t\t\ttransform: rotateY( 90deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.back {\n\t\t\ttransform: rotateY( 0deg ) translateZ( -2px );\n\t\t}\n\t\t.bottom {\n\t\t\ttransform: rotateX( -90deg ) translateZ( 10px );\n\t\t}\n\t}\n\t.left-leg {\n\t\ttop: 20px;\n\t\tleft: 12px;\n\t\tanimation: swing 1s .5s infinite;\n\t\t.front {\n\t\t\tbackground-position: -4px -20px;\n\t\t\ttransform: rotateY( 0deg ) translateZ( 2px );\n\t\t}\n\t\t.left {\n\t\t\tbackground-position: 0px -20px;\n\t\t\ttransform: rotateY( -90deg ) translateZ( 2px );\n\t\t}\n\t\t.right {\n\t\t\tbackground-position: -8px -20px;\n\t\t\ttransform: rotateY(90deg ) translateZ( 2px );\n\t\t}\n\t\t.back {\n\t\t\tbackground-position: -12px -20px;\n\t\t\ttransform: rotateY( 0deg ) translateZ( -2px ) scaleX( -1 );\n\t\t}\n\t\t.bottom {\n\t\t\tbackground-position: -8px -16px;\n\t\t\ttransform: rotateX( -90deg ) translateZ( 10px );\n\t\t}\n\t}\n\t.right-leg {\n\t\ttop: 20px;\n\t\tleft: 16px;\n\t\tanimation: swing 1s infinite;\n\t\t.front {\n\t\t\tbackground-position: -4px -20px;\n\t\t\ttransform: rotateY( 0deg ) translateZ( 2px );\n\t\t}\n\t\t.left {\n\t\t\tbackground-position: -8px -20px;\n\t\t\ttransform: rotateY( -90deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.right {\n\t\t\tbackground-position: 0px -20px;\n\t\t\ttransform: rotateY( 90deg ) translateZ( 2px ) scaleX( -1 );\n\t\t}\n\t\t.back {\n\t\t\tbackground-position: -12px -20px;\n\t\t\ttransform: rotateY( 0deg ) translateZ( -2px );\n\t\t}\n\t\t.bottom {\n\t\t\tbackground-position: -8px -16px;\n\t\t\ttransform: rotateX( -90deg ) translateZ( 10px );\n\t\t}\n\t}\n*/ }\n  .bot div {\n    position: absolute; }\n  .bot > div div {\n    transform-origin: 100% 100%;\n    background-size: 24em 12em;\n    background-color: blue; }\n  .bot.mario > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/edc873c9de1a841a5fe542a9c4ca965b8b9545b2121f1af2e57e536859f185); }\n  .bot.catcher > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/4cacd9a777dc11849aab1778d2453c231273d85291ca8c6d560692cb33787d); }\n  .bot.agent > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/52d51304bd08c31a27988f95340855579a925b0abfbe827ce247be6462ac857); }\n  .bot.bold > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/a116e69a845e227f7ca1fdde8c357c8c821ebd4ba619382ea4a1f87d4ae94); }\n  .bot.oldman > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/a846b82963924cb13211122489263941d1403689f90151120d5234be4a73fb); }\n  .bot.bug > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/8d19c68461666aacd7628e34a1e2ad39fe4f2bde32e231963ef3b35533); }\n  .bot.pirate > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/a39293958bc5288e3cfefdd10619323b76613f19ebe2f306d80354b4f8292f3); }\n  .bot.princess > div div {\n    background-image: url(https://crossorigin.me/http://textures.minecraft.net/texture/93c4aa23168a46e9cc9f5a4c2a815cfe2ec6c389178c07e923818737759); }\n  .bot .head {\n    transform-origin: center center -1.5em;\n    animation: nod 1s infinite; }\n    .bot .head div {\n      width: 3em;\n      height: 3em; }\n    .bot .head .bottom {\n      display: none; }\n    .bot .head .top {\n      background-position: -3em 0; }\n    .bot .head .front {\n      background-position: -3em -3em;\n      transform: translateZ(-3em) rotateX(-90deg); }\n    .bot .head .left {\n      background-position: -6em -3em;\n      transform: rotateY(-90deg); }\n    .bot .head .right {\n      background-position: 0 -3em;\n      transform: rotateY(90deg) translateZ(-3em) translateX(3em); }\n    .bot .head .back {\n      background-position: -9em -3em;\n      transform: rotateX(-90deg) translateZ(-3em) translateY(3em);\n      /* scale( -1 ); */ }\n  .bot .torso div {\n    width: 3em;\n    height: 4.5em; }\n  .bot .torso .top, .bot .torso .bottom {\n    display: none; }\n  .bot .torso .front {\n    background-position: -7.5em -7.5em;\n    transform: translateZ(-7.5em) translateY(-2.25em) rotateX(-90deg); }\n  .bot .torso .left {\n    background-position: -6em -7.5em;\n    width: 1.5em;\n    height: 4.5em;\n    transform: rotateY(90deg) rotateZ(-90deg) translateX(3.75em) translateZ(1.5em) translateY(7.5em); }\n  .bot .torso .right {\n    background-position: -10.5em -7.5em;\n    width: 1.5em;\n    height: 4.5em;\n    transform: rotateY(-90deg) rotateZ(90deg) translateX(-2.25em) translateZ(1.5em) translateY(7.5em); }\n  .bot .torso .back {\n    background-position: -12em -7.5em;\n    transform: translateZ(-7.5em) translateY(-3.75em) rotateX(-90deg); }\n\n.perspective {\n  margin-top: 5em;\n  margin-left: 15em;\n  transform-origin: center center;\n  transform: rotateX(45deg) rotateZ(45deg);\n  transition: transform 1s; }\n\nlabel {\n  background: #ddd;\n  cursor: pointer;\n  display: block;\n  font-family: sans-serif;\n  line-height: 3em;\n  position: absolute;\n  right: .5em;\n  text-align: center;\n  top: 4em;\n  width: 4.5em;\n  transition: background-color .25s; }\n  label[for=\"left\"] {\n    right: 10.5em; }\n  label[for=\"reset\"] {\n    right: 5.5em; }\n  label[for=\"up\"] {\n    right: 5.5em;\n    top: .5em; }\n  label[for=\"down\"] {\n    right: 5.5em;\n    top: 7.5em; }\n  label[for=\"control\"] {\n    right: 5.5em;\n    top: -3em; }\n  label:hover {\n    background-color: #bbb; }\n\ninput {\n  display: none; }\n  input:checked + label {\n    background-color: #666;\n    color: #fff; }\n  input#right:checked ~ .perspective {\n    transform: rotateX(45deg) rotateZ(75deg); }\n  input#left:checked ~ .perspective {\n    transform: rotateX(45deg) rotateZ(15deg); }\n  input#down:checked ~ .perspective {\n    transform: rotateX(75deg) rotateZ(45deg); }\n  input#up:checked ~ .perspective {\n    transform: rotateX(15deg) rotateZ(45deg); }\n\n/*@keyframes swing {\n\t0% { transform: rotateX( -$swingDeg ) }\n\t50% { transform: rotateX( $swingDeg ) }\n\t100% { transform: rotateX( -$swingDeg ) }\n}*/\n@keyframes nod {\n  0% {\n    transform: rotateY(4deg); }\n  50% {\n    transform: rotateY(-4deg); }\n  100% {\n    transform: rotateY(4deg); } }\n\n@keyframes wave {\n  50% {\n    transform: translateZ(4.5em); } }\n\n@keyframes lava {\n  0% {\n    background-position: -45em -42em; }\n  100% {\n    background-position: -39em -42em; } }\n");

var replace = function (data, string) { return Object.keys(data)
	.reduce(
		function (string, key) { return string.replace(RegExp(("{s*" + key + "s*}"), 'g'), data[key]); }
		, string
	); }

var i18n = (function (dictionary) { return function (key, data) {
	if ( data === void 0 ) data = {};

	return replace(data, dictionary[key] || key);
; }	})({
	'unknown level {num}': 'Niveau {num} inconnu!',
	'loading level {num}': 'Chargement niveau {num}...',
	'loading avatar {avatar}': 'Chargement avatar {avatar}...',
	'loading world {world}': 'Chargement monde {world}...',
	'activate arrow keys control': 'Activation contrôles flèches.',
	'deactivate arrow keys control': 'Désactivation contrôles flèches.',
	'out of map': 'Houlà, je vais sortir de la carte /!\\',
	'hit a wall': 'Aïe, je me suis cogné |-o',
	'radar ok': 'Ok, je peux avancer ;-)',
	'radar ko': 'Ho, je suis bloqué :°(',
	won: 'Hé, j\'ai gagné \\o/',
	walk: 'avance',
	back: 'recule',
	//orientation: 'orientation',
	turn: 'tourne',
	turnR: 'tourneD',
	turnL: 'tourneG',
	jump: 'saute',
	//radar: 'radar',
})

var matrix

var levels = [
	[
		[0, 0, 1, 1, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 1, 0]
	],
	[
		[0, 1, 0, 0, 0],
		[0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 1, 0]
	],
	[
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
		[1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	],
]

var bot = document.querySelector('.bot')
var faces = ['top', 'front', 'left', 'right', 'back', 'bottom']
Array.prototype.forEach.call(
	bot.querySelectorAll('div'),
	function (part) { return faces.forEach(function (face) { return part.appendChild(document.createElement('div')).className = face; }); }
)

var moving = Promise.resolve({ a: 270, x: 0, y: 0, z: 0 })

var render = function (bot, position) { return new Promise(function (resolve) {
	var done = function (event) {
		resolve(position)
		if (winning(position)) {
			game.classList.add('animate')
			console.log(("%c" + (i18n('won'))), 'font-size: 1.2em')
		} else {
			game.classList.remove('animate')
		}
		bot.removeEventListener('transitionend', done)
	}
	bot.style = "transition: transform .3s; transform: translateX(" + (3 * position.x) + "rem) translateY(" + (-3 * position.y) + "rem) translateZ(" + (7.5 + position.z * 6) + "em) rotateZ(" + (position.a) + "deg)"
	bot.addEventListener('transitionend', done, false)
	setTimeout(function (_) { return resolve(position); }, 300) // force resolution when no CSS transition
}); }

var forward = function (position) {
	var a = position.a;
	var x = position.x;
	var y = position.y;
	var z = position.z;
	var rotation = a % 360
	if (0 <= rotation && rotation < 90)
		y--
	else if (90 <= rotation && rotation < 180)
		x--
	else if (180 <= rotation && rotation < 270)
		y++
	else if (270 <= rotation && rotation < 360)
		x++
	return { a: a, x: x, y: y, z: z }
}

var winning = function (position) {
	var x = position.x;
	var y = position.y;
	return y === (matrix.length - 1) && x === (matrix[y].length - 1)
}

var check = function (position) {
	var x = position.x;
	var y = position.y;
	var z = position.z;
	if (0 > y || y >= matrix.length || 0 > x || x >= matrix[y].length)
		throw new RangeError(i18n('out of map'))
	if (matrix[y][x] > z)
		throw new Error(i18n('hit a wall'))
	return position
}

var rotate = function (angle) { return function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;

	return ({ a: angle, x: x, y: y, z: z });
; }	}

var actions = {
	walk: function walk () {
		var previous = moving
		moving = moving
			.then(function (position) { return check(forward(position)); })
			.then(function (position) { return render(bot, position); })
			.catch(function (error) {
				console.warn(error.message)
				return previous
			})
		return this
	},
	back: function back () {
		actions.turn.call(this, 180)
		return actions.walk.call(this)
	},
	orientation: function orientation (angle) {
		moving = moving
			.then(rotate(angle || 0))
			.then(function (position) { return render(bot, position); })
		return this
	},
	turn: function turn (angle) {
		moving = moving
			.then(function (position) { return rotate(position.a + (angle || 360))(position); })
			.then(function (position) { return render(bot, position); })
		return this
	},
	turnR: function turnR () {
		return actions.turn.call(this, 90)
	},
	turnL: function turnL () {
		return actions.turn.call(this, -90)
	},
	jump: function jump (height) {
		if ( height === void 0 ) height = 1;

		moving = moving
			.then(function (ref) {
				var a = ref.a;
				var x = ref.x;
				var y = ref.y;
				var z = ref.z;

				return render(bot, { a: a, x: x, y: y, z: z + height });
		})
			.then(function (ref) {
				var a = ref.a;
				var x = ref.x;
				var y = ref.y;
				var z = ref.z;

				return render(bot, { a: a, x: x, y: y, z: z - height });
		})
		return this
	},
	radar: function radar () {
		return moving
			.then(function (position) { return check(forward(position)) && console.log(("%c" + (i18n('radar ok'))), 'color: green') || true; })
			.catch(function (error) { return console.log(("%c" + (i18n('radar ko'))), 'color: red') || false; })
	}
}

var game = document.querySelector('.game')

var level = function (num) {
	if ( num === void 0 ) num = 0;

	if (!levels.hasOwnProperty(num))
		return console.error(i18n('unknown level {num}', { num: num }))
	console.log(i18n('loading level {num}', { num: num }))
	matrix = levels[num]
	game.style = "width: " + (3 * matrix[0].length) + "em; height: " + (3 * matrix[0].length) + "em;"
	game.parentNode.style = "width: " + (3 * matrix[0].length) + "em;"
	game.innerHTML = ''
	matrix.forEach(function (row) { return row.forEach(function (z) { return game.appendChild(document.createElement('div')).className = "block-" + z; }
		); }
	)
	moving = Promise.resolve({ a: 270, x: 0, y: 0, z: 0 })
		.then(function (position) { return render(bot, position); })
	level.num = num
}

var skin = function (avatar) {
	console.log(i18n('loading avatar {avatar}', { avatar: avatar }))
	bot.className = "bot " + avatar
}

var design = function (world) {
	console.log(i18n('loading world {world}', { world: world }))
	game.className = "game " + world
}


var control = (function (document, input, actions) {
	var key = { left: 37, up: 38, right: 39, down: 40, space: 32, r: 82 }

	var handler = function (event) {
		var orientation
		if (event.keyCode === key.up) orientation = actions.orientation(180)
		else if (event.keyCode === key.right) orientation = actions.orientation(270)
		else if (event.keyCode === key.down) orientation = actions.orientation(360)
		else if (event.keyCode === key.left) orientation = actions.orientation(90)
		else if (event.keyCode === key.space) actions.jump()
		else if (event.keyCode === key.r) actions.radar()
		if (orientation && !event.ctrlKey) actions.walk()
	}

	var control = function (activate) {
		input.checked = activate
		if (activate) {
			console.log(i18n('activate arrow keys control'))
			document.addEventListener('keydown', handler)
		} else {
			console.log(i18n('deactivate arrow keys control'))
			document.removeEventListener('keydown', handler)
		}
	}

	input.addEventListener('change', function (event) { return control(input.checked); })

	Object.defineProperty(control, 'activated', { get: function () { return input.checked; } })

	control(input.checked) // init state

	return control
})(document, document.querySelector('#control'), actions)

// localized api
var api = Object.keys(actions)
	.reduce(function (api, action) {
		var i18nAction = i18n(action)
		api[i18nAction] =
		// expose simpler global api
		window[i18nAction] = 
			actions[action]
		return api
	}, Object.create(null))

var play = (function (api) { return function (run) {
	run && run(api)
	return api
}; })(api)



// expose api utils
var avatars = ['mario', 'catcher', 'agent', 'bold', 'oldman', 'bug', 'pirate', 'princess']
	.reduce(function (avatars, avatar) { return Object.defineProperty(avatars, avatar, { get: function () { return skin(avatar); } }); }, Object.create(null))
var worlds = ['ground', 'pyramyd', 'inferno', 'north', 'library', 'virtual', 'tnt', 'halloween']
	.reduce(function (worlds, world) { return Object.defineProperty(worlds, world, { get: function () { return design(world); } }); }, Object.create(null))
Object.defineProperties(play, {
	control: { set: control, get: function () { return control.activated; } },
	level: { set: level, get: function () { return level.num; } },
	avatar: { set: skin, get: function () { return avatars; } },
	world: { set: design, get: function () { return worlds; } }
})

// easy inspect
play.__proto__ = null
delete play.length
delete play.name

// init game
level(0)
skin('mario')
design('ground')

return play;

})));
//# sourceMappingURL=101.js.map
