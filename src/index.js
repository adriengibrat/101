import './style.scss'

const robot = document.querySelector('.bot')
//const faces = ['top', 'front', 'left', 'right', 'back', 'bottom']
// Array.prototype.forEach.call(robot.querySelectorAll('div'), part => faces.forEach(face => {
// 	part.appendChild(document.createElement('div')).className = face
// }))

let r = 0
let x = 0
let y = 0

const render = robot => {
	robot.style = `transform: rotateZ(-90deg) translateZ(7.5em) translateX(${-3 * x}em) translateY(${-3 * y}em) rotateZ(${r}deg)`
}

const api = {
	walk () {
		const a = r % 360
		if (0 <= a && a < 90)
			y--
		if (90 <= a && a < 180)
			x++
		if (180 <= a && a < 270)
			y++
		if (270 <= a && a < 360)
			x--
		render(robot)
		return this
	},
	turn () {
		r += 90
		render(robot)
		return this
	}
}

const game = document.querySelector('.game')

const levels = [
	[
		[0, 0, 1, 1, 1],
		[0, 0, 0, 0, 1],
		[0, 1, 0, 1, 1],
		[1, 1, 0, 1, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 1, 1, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 1, 0]
	],
]

const draw = level => {
	game.innerHTML = ''
	level.forEach(row => {
		row.forEach(z => {
			game.appendChild(document.createElement('div')).className = `block-${z}`
		})
	})
	r = x = y = 0
	render(robot)
}

draw(levels[0])

const run = prog => { prog(api) }

run.api = api
run.draw = draw
run.levels = levels

export default run
