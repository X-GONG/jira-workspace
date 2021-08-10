module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      console.log(req.body.username);
      console.log(req.body.password);
      return res.status(400).json({ message: "用户名或者密码错误" });
    }
  }
  next();
};
// module.exports = (req, res, next) => {
//   console.log(req.body); //如果404了，输出检查看看控制台里输出什么
//   if (req.method === 'POST' && req.path === '/login') {
//     if (req.body.username === 'ollie' && req.body.password === '123') {
//       console.log(req.body.username);
//       console.log(req.body.password);
//       return res.status(200).json({
//         user: {
//           token: '123',
//         },
//       });
//     } else {
//       return res.status(400).json({
//         messages: '用户名或密码错误',
//       });
//     }
//   }
//   next();
// };
