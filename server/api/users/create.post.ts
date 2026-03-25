export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<NewUser>(event);

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  if (newUser) {
    return newUser;
  } else {
    return "Ошибка";
  }
});
