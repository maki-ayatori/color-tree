/**
 * Google アナリティクス 4（gtag.js）
 * 管理画面で発行した「測定ID」（G- で始まる文字列）に書き換えてください。
 * 未設定のままでは読み込み・送信を行いません。
 */
(function () {
  var MEASUREMENT_ID = 'G-XXXXXXXXXX';

  if (
    !MEASUREMENT_ID ||
    MEASUREMENT_ID === 'G-XXXXXXXXXX' ||
    !/^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID)
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());

  var s = document.createElement('script');
  s.async = true;
  s.src =
    'https://www.googletagmanager.com/gtag/js?id=' +
    encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(s);

  gtag('config', MEASUREMENT_ID);
})();
