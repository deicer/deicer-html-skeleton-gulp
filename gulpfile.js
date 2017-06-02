'use strict';

/*
 * 
 * Подключаем gulp, его плагины и другие модули 
 *
 */

 var gulp            = require('gulp'),
     argv            = require('yargs').argv, // Плагин для разбора опция командной строки
     path	         = require('path'),       // Модуль Node для работы с файловыми путями 
     gulpif          = require('gulp-if'),    // Управление потоками выполнения gulp
     