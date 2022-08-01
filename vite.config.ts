import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue({
						file
					}) {
						return file.indexOf('vant') !== -1 ? 37.5 : 75;
					},
					propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
				}),
			],
		},
	},
	build: {
		outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
		terserOptions: {
			compress: {
				keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
				drop_console: true, // 生产环境去除 console
				drop_debugger: true, // 生产环境去除 debugger
			},
		},
		chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
	},
	resolve: {
		alias: {
			'@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
			views: pathResolve('./src/views'),
			components: pathResolve('./src/components'),
			assets: pathResolve('./src/assets'),
		},
	},
	base: './', // 设置公共基础路径
	server: {
		port: 4000, // 设置服务启动端口号
		open: true, // 设置服务启动时是否自动打开浏览器
		cors: true, // 允许跨域

		// 设置代理，根据我们项目实际情况配置
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
})
