![Node CI](https://github.com/Tvv95/frontend-project-lvl2/workflows/Node%20CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/75e9585b24e00796702a/maintainability)](https://codeclimate.com/github/Tvv95/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/75e9585b24e00796702a/test_coverage)](https://codeclimate.com/github/Tvv95/frontend-project-lvl2/test_coverage)

<h1>Описание, установка и запуск</h1>
<p>В рамках проекта реализована утилита для поиска отличий в конфигурационных файлах.<br>
Возможности утилиты:</p>
<ul>
  <li>Поддержка разных форматов (JSON, yaml, ini)</li>
  <li>Генерация отчета в виде plain text, pretty и JSON</li>
</ul>

<p>Для установки требуется ввести: <code>$ make install</code></p>
<p>Для вывода в определённом формате нужно добавить <code>--format [type]</code><br>
Поддерживаемые форматы вывода([type]):</p>
  <ul>
    <li>main(default)</li>
    <li>plain</li>
    <li>json</li>
   </ul>
<p><code>gendiff -h</code>
  
  <code>Usage: gendiff [options] <firstConfig> <secondConfig></code>

  <code>Compares two configuration files and shows a difference.<br>Options:</code>
  <ul><code>
    <li>-V, --version        output the version number</li>
    <li>-h, --help           output usage information</li>
    <li>-f, --format [type]  output format</li>
</code></ul></p>

<h1>Сравнение JSON файлов</h1>
<a href="https://asciinema.org/a/JIfsukLZ1Ebta47vP5YsjNly2" target="_blank"><img src="https://asciinema.org/a/JIfsukLZ1Ebta47vP5YsjNly2.svg" /></a>

<h1>Сравнение yaml файлов</h1>
<a href="https://asciinema.org/a/oml5jWScchzkoyPO198tkWF2j" target="_blank"><img src="https://asciinema.org/a/oml5jWScchzkoyPO198tkWF2j.svg" /></a>

<h1>Сравнение ini файлов</h1>
<a href="https://asciinema.org/a/5SooCwGbgkPdZSA30t1yWOLmt" target="_blank"><img src="https://asciinema.org/a/5SooCwGbgkPdZSA30t1yWOLmt.svg" /></a>

<h1>Сравнение файлов с отображением в плоском формате</h1>
<a href="https://asciinema.org/a/Bf9aTkkcC3RF0UaxksufCm8go" target="_blank"><img src="https://asciinema.org/a/Bf9aTkkcC3RF0UaxksufCm8go.svg" /></a>

<h1>Сравнение файлов с выводом в формате JSON</h1>
<a href="https://asciinema.org/a/9SdutoSQt0OWwAimBetjhvblc" target="_blank"><img src="https://asciinema.org/a/9SdutoSQt0OWwAimBetjhvblc.svg" /></a>
