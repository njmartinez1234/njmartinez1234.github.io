const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: 'https://ky23idqdol.execute-api.us-east-2.amazonaws.com/api/'
  }, 
});
