const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#01a3ff',
                '@body-background':'#fff',
                '@text-color':'#333333',
                '@text-color-secondary':'#a3a3a3',
                '@heading-color':'#2e2e2e',
                '@text-color-secondary-dark': '#9a9a9a',
                '@layout-header-background': 'transparent',
                '@layout-footer-background':'#2D2F2E',
                '@layout-footer-padding':'0px 50px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};