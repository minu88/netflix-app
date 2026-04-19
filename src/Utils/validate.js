export const validateForm = (email, password, name) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isNameValid = nameRegex.test(name);

  if(!isEmailValid) return 'Invalid email format';
  if(!isPasswordValid) return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
  if(!isNameValid) return 'Name can only contain letters and spaces';

  return null; // No errors
}
