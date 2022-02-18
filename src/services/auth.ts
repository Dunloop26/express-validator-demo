
export default {
  login: (email: string, password: string) => {
    return new Promise((res, rej) => {
      if (email == "test@email.com" && password == "123456") {
        res("ajlñsfjñllsjdfñlajsdf")
      } else {
        rej("Datos no válidos")
      }
    })
  }
}
