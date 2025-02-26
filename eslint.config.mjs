// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default withNuxt({
	plugins: { eslintPluginPrettier },
	rules: {
		'eslintPluginPrettier/prettier': ['warn', { endOfLine: 'auto' }],
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': [
			'warn',
			{
				html: {
					void: 'always'
				}
			}
		]
	}
});
