

/* ===== КОНФИГУРАЦИЯ ПРОЕКТА ===== */

module.exports = {

    paths: {
        project: './',
        build: {
            html:	 'build/',
            js:		 'build/assets/js/',
            css:	 'build/assets/css/',
            img:	 'build/assets/img/',
            fonts:	 'build/assets/fonts/',
            sprites: 'build/assets/img/sprites/',
            svg:	 'build/assets/svg/'
        },
        src: {
            html:	 'src/*.pug',
            js:		 'src/assets/js/main.js',
            less:	 'src/assets/scss/style.scss',
            img:	 'src/assets/img/**/*.*',
            fonts:	 'src/assets/fonts/**/*.*',
            sprites: 'src/assets/img/sprites/*.png',
            svg:	 'src/assets/svg/**/*.svg'
        },
        watch: {
            html:	 'src/**/*.pug',
            js:		 'src/assets/js/**/*.js',
            style:	 'src/assets/scss/**/*.scss',
            img:	 'src/assets/img/**/*.*',
            fonts:	 'src/assets/fonts/**/*.*',
            sprites: 'src/assets/img/sprites/*.png',
            svg:	 'src/assets/svg/**/*.svg'
        },
        clean: './build'
    },

    names: {
        css: 'app.min.css',
        js: {
            app: 'app.min.js',
            vendor: 'vendor.min.js'
        }
    },

    browserSync: {
        server: {
            baseDir: './build'
        },
        tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: 'frontend',
        open: false
    },

    compress: {
        css: false,
        js: false,
        img: true
    }


};
