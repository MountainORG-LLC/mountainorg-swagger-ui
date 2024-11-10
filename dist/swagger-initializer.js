window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "https://petstore.swagger.io/v2/swagger.json",
    urls: [{url: "https://category-svc-v6xxfe4qzq-uc.a.run.app/v2/api-docs", name: "Category Service"},
{url: "https://price-book-svc-69969998642.us-central1.run.app/v3/api-docs", name: "Price Book Service"}],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
