import App from "./app";
const PORT = 5000;

App().then((app) => 
  {
    app.listen(PORT, () => {
    console.log('Express server listening on Port ', PORT);
  })
})