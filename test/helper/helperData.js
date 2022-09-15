const testAuthLogin = {
  email : "juancarlos15@gmail.com",
  password: "12345"
}

const testAuthRegister = {
  name: "2Catman",
  age: 21,
  email: "juancarlos15@gmail.com",
  password: "12345"
}

  const testAuthRegisterAdmin = {
    name: "User test",
    age: 20,
    email: "test@test.com",
    role: ["admin"],
    password: "12345678",
  };

  const testStorageRegister = {
    url: "http://localhost:3001/file-test.mp3",
    filename: "file-test.mp3"
  };

  const testDataTrack = {
    name :"batman",
    album :"Album",
    cover :"http://ttt.com",
    artist :{
        name :"Leifer",
        nickname :"leifermendez",
        nationality :"VE"
    },
    duration :{
        start :1,
        end :0
    },
    mediaId :"4"
};
  

  module.exports = {
    testAuthRegister,
    testAuthLogin,
    testAuthRegisterAdmin,
    testStorageRegister,
    testDataTrack
  }