module.exports = {
  port: 9000,
  password: "",
  log: true,
  theme: "",
  defaults: {
    nick: "cs61a-student",
    realname: "A CS 61A Student",
  },
  networks: [{
    host: "107.170.82.182",
    port: 6667,
    tls: false,
    onConnect: {
      commands: [""],
      join: [
        "#general",
      ]
    }
  }]
};
