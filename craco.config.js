const CracoAntDesignPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1890ff",
              "@secondery-color": "#000000",
              "@white": "#fff",
              "@btn-primary-bg":"@primary-color",
              "@btn-border-radius-base": "5px",
              "@btn-text-hover": "#ff6780",
              "@input-placeholder-color": "#aaaaaa",
              "@btn-font-weight": "400",
              "@empty-font-size": "14px",
              "@grid-columns": "24",
              "@layout-body-background": "@secondery-color",
              "@layout-header-height": "64px",
              "@dropdown-selected-bg": "@secondery-color",
              "@dropdown-vertical-padding": "7px",
              "@dropdown-font-size": "18px",
              "@dropdown-line-height": "22px",
              "@layout-footer-padding": "24px",
              "@layout-footer-background": "@white",
              "@layout-sider-background": "#003366",
              "@label-color": "@secondery-color",
              "@form-item-margin-bottom": "15px",
              "@form-item-label-font-size": "14px",
              "@carousel-dot-width": "10px",
              "@carousel-dot-height": "2px",
              "@carousel-dot-active-width": "24px",
              "@rate-star-size": "24px",  
              "@back-top-bg": "@primary-color",
            },

            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
