export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password: string) => {
    return password.length >= 6;
  };
  
  export const validateCheckoutForm = (form: any) => {
    if (!form.firstName || !form.lastName || !form.address || !form.city || !form.zipCode) {
      return "All fields are required!";
    }
    if (!validateEmail(form.email)) {
      return "Invalid email address!";
    }
    return null;
  };
  