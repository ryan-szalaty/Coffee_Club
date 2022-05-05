module.exports = {
  content: [
    './views/*.ejs',
    './partials/*.ejs'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home_hot": "url(https://images.unsplash.com/photo-1554600740-951beab4712b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
        "home_iced": "url(https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)"
      }),
    },
  },
  plugins: [],
}
