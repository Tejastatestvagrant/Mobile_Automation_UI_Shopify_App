export const HomeScreenConstants = {
  WelcomeText: 'Welcome Back!!',
  Clothing: 'clothing',
  Toys: 'toys',
  Books: 'No products found.',
  Furnitures: 'furniture',
  Shoes: 'shoes',
  Audio_Equipments: 'audio sets',
  SearchBoxPlaceHolderText: 'Search for more!!',
  EmptyCartText: 'Your Cart is Empty!!',
  TrackText: 'Log in to view and track your orders.',
};
export const registerUserCredential = {
  fullName: 'Chaha_user',
  email: 'user@example.com',
  password: '12345',
  confirmPassword: '12345',
  mobileNumber: '1234567890',
  otp: '0000',
};

export const loginUserCredential = {
  email: 'ulshopify@ultralesson.com',
  password: '12345',
};

export const registerUserCredentialwithSpecialCharater = {
  fullName: '!@#$%^',
  email: 'user@example.com',
  password: '12345',
  confirmPassword: '12345',
  mobileNumber: '1234567890',
  otp: '0000',
};

export const registerUserCredentialWithInvalidEmail = {
  fullName: 'Chaha_user',
  email: 'userexample',
  password: '12345',
  confirmPassword: '12345',
  mobileNumber: '1234567890',
  otp: '0000',
};

export const registerUserCredentialWithPasswordMissMatch = {
  fullName: 'Chaha_user',
  email: 'user@example.com',
  password: '12345',
  confirmPassword: '678904',
  mobileNumber: '1234567890',
  otp: '0000',
};

export const registerUserCredentialWithInvalidNumber = {
  fullName: 'Chaha_user',
  email: 'user@example',
  password: '12345',
  confirmPassword: '12345',
  mobileNumber: '12345',
  otp: '0000',
};

export const registerUserCredentialWithMinPassword = {
  fullName: 'Chaha_user',
  email: 'user@example',
  password: '123',
  confirmPassword: '123',
  mobileNumber: '1234567890',
  otp: '0000',
};
export const invalidRegistrationDetails={
fullNameCannotBeEmpty:'Full name cannot be empty',
emailCannotBeEmpty :'Email field cannot be empty',
passwordCannotBeEmpty :'Password field cannot be empty',
confirmPasswordCannotBeEmpty :'Confirm password field cannot be empty',
MobileNumberCannotBeEmpty :'Mobile number cannot be empty',
 emailError:'Email format is incorrect',
 passwordMinError :'Password should be minimum of 5 characters',
 passwordMissMatch:'Confirm password is not matched with password',
 invalidMobileNumber :'Mobile number should be 10 digits',
 emailAlreadyExist: 'email already registered'
}
export const registerDetailsHeader={
  fullNameHeader:'Full Name',
  emailHeader:'Email',
  passwordHeader:'Password',
  confirmPasswordHeader:'Confirm password',
  mobileNumberHeader:'Mobile number'
}