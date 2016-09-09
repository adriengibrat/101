import buble from 'rollup-plugin-buble'
import sass from 'rollup-plugin-sass'

export default {
	entry: 'src/index.js',
	dest: 'build/101.js',
	format: 'umd',
	moduleName: 'play',
	sourceMap: true,
	plugins: [
		sass({
			insert: true
		}),
		buble({
			exclude: [
				'**.scss',
				'node_modules/**'
			]
		})
	]
}
