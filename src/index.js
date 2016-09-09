import './style.scss'

const replace = (data, string) => Object.keys(data)
	.reduce(
		(string, key) => string.replace(RegExp(`{\s*${key}\s*}`, 'g'), data[key])
		, string
	)

const i18n = (dictionary => (key, data = {}) => replace(data, dictionary[key] || key))({
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

let matrix

const levels = [
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

const bot = document.querySelector('.bot')
const faces = ['top', 'front', 'left', 'right', 'back', 'bottom']
Array.prototype.forEach.call(
	bot.querySelectorAll('div'),
	part => faces.forEach(face => part.appendChild(document.createElement('div')).className = face)
)

let moving = Promise.resolve({ a: 270, x: 0, y: 0, z: 0 })

const render = (bot, position) => new Promise(resolve => {
	const done = event => {
		resolve(position)
		if (winning(position)) {
			game.classList.add('animate')
			console.log(`%c${i18n('won')}`, 'font-size: 1.2em')
		} else {
			game.classList.remove('animate')
		}
		bot.removeEventListener('transitionend', done)
	}
	bot.style = `transition: transform .3s; transform: translateX(${3 * position.x}rem) translateY(${-3 * position.y}rem) translateZ(${7.5 + position.z * 6}em) rotateZ(${position.a}deg)`
	bot.addEventListener('transitionend', done, false)
	setTimeout(_ => resolve(position), 300) // force resolution when no CSS transition
})

const forward = position => {
	let { a, x, y, z } = position
	const rotation = a % 360
	if (0 <= rotation && rotation < 90)
		y--
	else if (90 <= rotation && rotation < 180)
		x--
	else if (180 <= rotation && rotation < 270)
		y++
	else if (270 <= rotation && rotation < 360)
		x++
	return { a, x, y, z }
}

const winning = position => {
	const { x, y } = position
	return y === (matrix.length - 1) && x === (matrix[y].length - 1)
}

const check = position => {
	const { x, y, z } = position
	if (0 > y || y >= matrix.length || 0 > x || x >= matrix[y].length)
		throw new RangeError(i18n('out of map'))
	if (matrix[y][x] > z)
		throw new Error(i18n('hit a wall'))
	return position
}

const rotate = angle => ({ x, y, z }) => ({ a: angle, x, y, z })

const actions = {
	walk () {
		const previous = moving
		moving = moving
			.then(position => check(forward(position)))
			.then(position => render(bot, position))
			.catch(error => {
				console.warn(error.message)
				return previous
			})
		return this
	},
	back () {
		actions.turn.call(this, 180)
		return actions.walk.call(this)
	},
	orientation (angle) {
		moving = moving
			.then(rotate(angle || 0))
			.then(position => render(bot, position))
		return this
	},
	turn (angle) {
		moving = moving
			.then(position => rotate(position.a + (angle || 360))(position))
			.then(position => render(bot, position))
		return this
	},
	turnR () {
		return actions.turn.call(this, 90)
	},
	turnL () {
		return actions.turn.call(this, -90)
	},
	jump (height = 1) {
		moving = moving
			.then(({ a, x, y, z }) => render(bot, { a, x, y, z: z + height }))
			.then(({ a, x, y, z }) => render(bot, { a, x, y, z: z - height }))
		return this
	},
	radar () {
		return moving
			.then(position => check(forward(position)) && console.log(`%c${i18n('radar ok')}`, 'color: green') || true)
			.catch(error => console.log(`%c${i18n('radar ko')}`, 'color: red') || false)
	}
}

const game = document.querySelector('.game')

const level = (num = 0) => {
	if (!levels.hasOwnProperty(num))
		return console.error(i18n('unknown level {num}', { num }))
	console.log(i18n('loading level {num}', { num }))
	matrix = levels[num]
	game.style = `width: ${3 * matrix[0].length}em; height: ${3 * matrix[0].length}em;`
	game.parentNode.style = `width: ${3 * matrix[0].length}em;`
	game.innerHTML = ''
	matrix.forEach(row =>
		row.forEach(z =>
			game.appendChild(document.createElement('div')).className = `block-${z}`
		)
	)
	moving = Promise.resolve({ a: 270, x: 0, y: 0, z: 0 })
		.then(position => render(bot, position))
	level.num = num
}

const skin = avatar => {
	console.log(i18n('loading avatar {avatar}', { avatar }))
	bot.className = `bot ${avatar}`
}

const design = world => {
	console.log(i18n('loading world {world}', { world }))
	game.className = `game ${world}`
}


const control = ((document, input, actions) => {
	const key = { left: 37, up: 38, right: 39, down: 40, space: 32, r: 82 }

	const handler = event => {
		let orientation
		if (event.keyCode === key.up) orientation = actions.orientation(180)
		else if (event.keyCode === key.right) orientation = actions.orientation(270)
		else if (event.keyCode === key.down) orientation = actions.orientation(360)
		else if (event.keyCode === key.left) orientation = actions.orientation(90)
		else if (event.keyCode === key.space) actions.jump()
		else if (event.keyCode === key.r) actions.radar()
		if (orientation && !event.ctrlKey) actions.walk()
	}

	const control = activate => {
		input.checked = activate
		if (activate) {
			console.log(i18n('activate arrow keys control'))
			document.addEventListener('keydown', handler)
		} else {
			console.log(i18n('deactivate arrow keys control'))
			document.removeEventListener('keydown', handler)
		}
	}

	input.addEventListener('change', event => control(input.checked))

	Object.defineProperty(control, 'activated', { get: () => input.checked })

	control(input.checked) // init state

	return control
})(document, document.querySelector('#control'), actions)

// localized api
const api = Object.keys(actions)
	.reduce((api, action) => {
		const i18nAction = i18n(action)
		api[i18nAction] =
		// expose simpler global api
		window[i18nAction] = 
			actions[action]
		return api
	}, Object.create(null))

const play = (api => run => {
	run && run(api)
	return api
})(api)



// expose api utils
const avatars = ['mario', 'catcher', 'agent', 'bold', 'oldman', 'bug', 'pirate', 'princess']
	.reduce((avatars, avatar) => Object.defineProperty(avatars, avatar, { get: () => skin(avatar) }), Object.create(null))
const worlds = ['ground', 'pyramyd', 'inferno', 'north', 'library', 'virtual', 'tnt', 'halloween']
	.reduce((worlds, world) => Object.defineProperty(worlds, world, { get: () => design(world) }), Object.create(null))
Object.defineProperties(play, {
	control: { set: control, get: () => control.activated },
	level: { set: level, get: () => level.num },
	avatar: { set: skin, get: () => avatars },
	world: { set: design, get: () => worlds }
})

// easy inspect
play.__proto__ = null
delete play.length
delete play.name

export default play

// init game
level(0)
skin('mario')
design('ground')
