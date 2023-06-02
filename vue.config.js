const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer :{
    allowedHosts : "all",
    client:{
      WebSocketURL : 'auto://0.0.0.0:0/ws'
    }
  } 

})
