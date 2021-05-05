const imagemin = require('imagemin-dir') // alternative to imagemin
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminWebp = require('imagemin-webp')
const imageminSVGO = require('imagemin-svgo')
const { extendDefaultPlugins } = require('svgo')
const ora = require('ora')

const spinner = ora('Optimizing images 🏞')

;(async () => {
  spinner.start()
  spinner.color = 'blue'
  await imagemin(['originals-assets/**/*.{jpg,png,svg}'], {
    destination: 'static',
    plugins: [
      imageminMozjpeg({ quality: 84 }),
      imageminPngquant({
        strip: true,
        quality: [0.84, 0.86]
      }),
      imageminWebp(),
      imageminSVGO({
        plugins: extendDefaultPlugins([
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true }
        ])
      })
    ]
  })
  spinner.stop()
  console.log('🏞  All images optimized!')
})()
