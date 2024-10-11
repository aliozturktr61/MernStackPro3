# mern stack proje - 3
-Bu uygulamamızda Temel MERN Stack konularını uygulama geliştirerek öğreniyoruz. Not ekleme görüntüleme  (CRUD) işlemlerini yaparak Not Uygulaması geliştiriyoruz. Projede hata denetimi ve yönetimi işlemlerinide gerçekleştiriyoruz.

Uygulamamız Backend ve Frontend olmak üzere 2 kısımdan oluşuyor. 

Backend ile projemizin server tarafını geliştiriyoruz ve REST API Uygulaması geliştiriyoruz. Server uygulamamızı ExpressJS ve NodeJS ile geliştiriyoruz. Bu kısımda Router ve Controller yapılarını oluşturduğumuz gibi MongoDB Atlas kullanarak veritabanı oluşturuyoruz. Mongoose kullanarak veritabanına eriştiğimiz gibi Not modeli üreterek CRUD işlemlerini gerçekleştiriyoruz.

- package.json içerisinde  "proxy":"http://localhost:4000", eklenip
istek atılırken port sorununu çözebilirsiniz.
         BU işlemi yaptığınızda sistemi durdurup tekrar npm start yapmayı unutmayın.


# kütüphaneler
- npm i react-router-dom
- npm install moment
# backend kütüphaneleri
- mongoose
- bcrypt
- npm i validator
- npm i jsonwebtoken
- npm i cors# MernStackPro3

  .env dosyası
  PORT=4000
# mongo db bağlantı adresi(parolayı ve database adını biz ekliyoruz.)
# mongodb+srv://aliozturktr61:<--parolayı buraya yazılacak-->@clustermern.lvh3y.mongodb.net/(--veritabanı adı buraya yazılacak--)?retryWrites=true&w=majority&appName=ClusterMern  
MONGO_URI=`mongodb+srv://aliozturktr61:ahzs1357@clustermern.lvh3y.mongodb.net/notDB?retryWrites=true&w=majority&appName=ClusterMern`

SECRET_KEY="alio_secret"


![mernstackpro3](https://github.com/user-attachments/assets/b53bbfbc-47dd-4341-8a76-ab0ca3adb2fb)
