export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "lb"),
      user: env("DATABASE_USERNAME", "lb_admin"),
      password: env("DATABASE_PASSWORD", "Halliday2011!"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
