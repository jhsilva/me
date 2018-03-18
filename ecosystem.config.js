module.exports = {
  apps : [
    {
      name: "me",
      script: "./index.js",
      watch: true,
      env: {
        "NODE_ENV": "development",
      }
    }
  ],
  "deploy" : {
    "production" : {
      "user" : "root",
      "host" : ["167.99.98.208"],
      "ref"  : "origin/master",
      "repo" : "git@github.com:jhsilva/me.git",
      "path" : "/var/www/me",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "npm install; npm start"
    }
  }
}