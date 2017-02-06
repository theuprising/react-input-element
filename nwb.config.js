module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactInputElement',
      externals: {
        react: 'React'
      }
    }
  }
}
