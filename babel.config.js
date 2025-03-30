module.exports = {
  presets: process.env.npm_lifecycle_event.endsWith('web')
    ? ['babel-preset-expo']
    : [
        '@babel/preset-env',
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
}
