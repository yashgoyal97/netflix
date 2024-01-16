export const validate = (email, password) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!email || !isValidEmail)
    return {
      isValid: false,
      errorMessage: "You have entered an invalid email!",
    };

  if (!password || !isValidPassword)
    return {
      isValid: false,
      errorMessage: "You have entered an invalid password!",
    };

  return {
    isValid: true,
    errorMessage: null,
  };
};
