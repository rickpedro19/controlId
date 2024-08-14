module.exports = {
  apps: [
    {
      name: 'access-control-controlid',
      script: './dist/main.js',
      instances: 4,
      exec_mode: 'cluster',
    },
  ],
};
