export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'local',
  port: +process.env.PORT || 3000,
});
