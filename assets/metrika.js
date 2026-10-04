/*
  Яндекс Метрика для сайта WEBNET.

  ЧТО НУЖНО СДЕЛАТЬ: вставьте номер своего счётчика вместо 0 в строке ниже.
  Пока там 0, счётчик выключен и ничего не отправляет.
*/
(function () {
  var COUNTER_ID = 113229670; // <-- СЮДА номер счётчика из Яндекс Метрики, например 98765432

  if (!COUNTER_ID) return;

  // Стандартный код счётчика Метрики
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t); a = e.getElementsByTagName(t)[0]; k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

  ym(COUNTER_ID, 'init', {
    clickmap: true,          // карта кликов
    trackLinks: true,        // переходы по внешним ссылкам
    accurateTrackBounce: true,
    webvisor: true           // запись действий посетителей (Вебвизор)
  });

  /*
    Цели. Создайте в Метрике цели типа «JavaScript-событие»
    с этими идентификаторами, и Метрика начнёт их считать:
      telegram   — нажали «Написать в Telegram»
      open_work  — открыли одну из работ из портфолио
  */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('t.me') > -1) {
      ym(COUNTER_ID, 'reachGoal', 'telegram');
    } else if (href.indexOf('works/') > -1 || href.indexOf('chatgpt.site') > -1) {
      ym(COUNTER_ID, 'reachGoal', 'open_work');
    }
  });
})();
