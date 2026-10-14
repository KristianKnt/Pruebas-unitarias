const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let userAna = new User(1, "Ana", "ana@generation.org");
  // agregamos un nuevo usuario a la lista de usuarios
  let userCarlos = new User(5678, "Carlos", "carlos@generation.org");
  // la lista contiene a ana pero no a carlos
  userController.add(userAna);
  // verificamos que el usuario no  agregado se encuentra en la lista de usuarios
  expect(userController.getUsers()).not.toContain(userCarlos);
  userController.remove(userAna);
  expect(userController.getUsers()).not.toContain(userAna);
});

// test('verificar un usuario que no esta',()=>{
//   let user = new User(1234,"Santiago", "santiago@generation.org");
//   // console.log(userController.getUsers());
//   expect(userController.getUsers()).not.toContain(user);
// });

// test('verificar un usuario que no esta en la lista de usuarios',()=>{
//   let user = new User(1234,"Santiago", "santiago@generation.org");
//   // console.log(userController.getUsers());
//   expect(userController.getUsers()).toContain(user);
// });

test('verificar email de usuario', () => {
  let user = new User(345, "angela", "angela@generation.org");
  console.log(userController.getUsers());
  userController.add(user);
  console.log(userController.getUsers());
  let usuarioEncontrado = userController.findByEmail("angela@generation.org");
  expect(usuarioEncontrado.email).toEqual(user.email);
});

// segundo test para verificar que el id del usuario es el mismo que el del email
test('verificar id de email.2', () => {
  let user = new User(345, "angela", "angela@generation.org");

  userController.add(user);
  // le pasamos otro correo que no este en la lista de usuarios
  // la funcion findByEmail debe retornar undefined por que no tiene un usuario con ese correo en la lista de usuarios
  let usuarioEncontrado = userController.findByEmail("carlos@generation.org");
  expect(usuarioEncontrado).toBeUndefined();
});
// prueba unitaria para buscar por id

test('verificar id del usuario', () => {
  let user = new User(423, "peter", "peter@generation.org");
  console.log(userController.getUsers());
  userController.add(user);
  console.log(userController.getUsers());
  let usuarioEncontrado = userController.findById(423);
  console.log(usuarioEncontrado);
  expect(usuarioEncontrado.id).toEqual(user.id);
});

// segundo test para verificar que el id del usuario es el mismo que el del email
test('verificar id de email.2', () => {
  let user = new User(50, "cristianr", "cristian@generation.org");

  userController.add(user);
  // le pasamos otro correo que no este en la lista de usuarios
  // la funcion findByEmail debe retornar undefined por que no tiene un usuario con ese correo en la lista de usuarios
  let usuarioEncontrado = userController.findById(51);
  expect(usuarioEncontrado).toBeUndefined();
});