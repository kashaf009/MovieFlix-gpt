export function checkFormValidation(name, email, password) {
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isEmailValid) return "Email id is not valid";
  if(!isNameValid) return "Name is not valid ( Use Alphabets only)"
  if(!isPassValid) return "Password is not valid"
}
