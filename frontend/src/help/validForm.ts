export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormError {
  email: string;
  password: string;
  general: string;
}

export const validateLoginForm = (formData: LoginFormData): { 
    isValid: boolean;
    errors: LoginFormError;
} => {
  const newErrors: LoginFormError = {email: "", password: "",general: ""}
  let isValid = true;

  // Email validation
  if (!formData.email) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
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
  return {isValid: isValid, errors: newErrors};
};
