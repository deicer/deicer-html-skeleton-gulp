'use strict';

/* ===== ПОДКЛЮЧЕНИЕ ПЛАГИНОВ ===== */

var gulp        = require('gulp'),               // gulp
    argv        = require('yargs').argv,         // Разбор опций командной строки gulp
    path        = require('path'),               // Модуль Node для работы с файловыми путями
    gulpif      = require('gulp-if'),            // Управление потоками выполнения gulp
    watch       = require('gulp-watch'),         // Отслеживание изменений в файлах проекта
    uglify      = require('gulp-uglify'),        // Минификация JavaScript
    pug         = require('gulp-pug'),           // Шаблонизатор pug (jade)
    sass	    = require('gulp-sass'),          // Препроцессор SASS
    less        = require('gulp-less'),          // Препроцессор LESS
    rigger	    = require('gulp-rigger'),
