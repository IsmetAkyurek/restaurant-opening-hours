/**
 * Creates and injects the GoogleTagManager (GTM) scripts with the environment Container ID.
 */
const initGTM = () => {
  const container = process.env.REACT_APP_GTM_CONTAINER;

  if (container) {
    const headScript = document.createElement("script");
    headScript.id = "GTMScript";
    headScript.innerHTML = `(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start': new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', '${container}');`;

    const bodyScript = document.createElement("noscript");
    bodyScript.id = "GTMNoScript";
    bodyScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${container}"height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    document.head.appendChild(headScript);
    document.body.appendChild(bodyScript);
  }
};

export default initGTM;
