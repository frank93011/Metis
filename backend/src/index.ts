import App from "./app";
const PORT = 3000;

App().then((app) => 
  {
    app.listen(PORT, () => {
    console.log('Express server listening on Port ', PORT);
  })
})