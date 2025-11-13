export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginFormError {
  username: string;
  password: string;
  general: string;
}

export const validateLoginForm = (
  formData: LoginFormData
): {
  isValid: boolean;
  errors: LoginFormError;
} => {
  const newErrors: LoginFormError = { username: "", password: "", general: "" };
  let isValid = true;

  // Username validation
  if (!formData.username) {
    newErrors.username = "Username is required";
    isValid = false;
  } else if (formData.username.length < 3) {
    newErrors.username = "Username must be at least 3 characters";
    isValid = false;
  } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
    newErrors.username =
      "Username can only contain letters, numbers and underscore";
    isValid = false;
  }

  // Password validation
  if (!formData.password) {
    newErrors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }
  return { isValid: isValid, errors: newErrors };
};
