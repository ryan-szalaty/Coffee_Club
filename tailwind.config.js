module.exports = {
  content: [
    './views/*.ejs',
    './partials/*.ejs'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home_hot": "url(https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
        "home_iced": "url(https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80)"
      }),
    },
  },
  plugins: [],
}
