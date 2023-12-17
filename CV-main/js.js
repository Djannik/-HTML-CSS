/* Это объявление переменной, мы наши кнопку по тегу */
var button1 = document.getElementById(1);
var button2 = document.getElementById(2);
var button3 = document.getElementById(3);
var button4 = document.getElementById(4);
var button5 = document.getElementById(5);
var button6 = document.getElementById(6);
var button7 = document.getElementById(7);
var button8 = document.getElementById(8);

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button1.addEventListener('click', function() {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Как говорил мой дед: “я твой дед”.')
})

button2.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Работа не волк. Никто не волк. Только волк - волк.')
})

button3.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Если тебе где-то не рады в рванных носках, то и в целых туда идти не стоит.')
})

button4.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Запомни: одна ошибка - и ты ошибся.')
})

button5.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('У каждого свой путь. Мой - за пивом.')
})

button6.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Сколько человеку лет - столько человеку и зим.')
})

button7.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Работа - не волк, работа - ворк. Волк это ходить.')
})

button8.addEventListener('click', function () {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Левый - коронный, правый - левый.')
})


