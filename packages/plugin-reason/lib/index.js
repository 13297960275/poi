exports.name = 'reason'

exports.apply = api => {
  api.chainWebpack(config => {
    config.module
      .rule('bs')
      .test(/\.(re|ml)$/)
      .use('bs-loader')
      .loader('@poi/bs-loader')
      .options({
        cwd: api.resolve()
      })
  })
}
