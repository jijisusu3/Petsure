export function passwordValidLengthHandler(inputValue) {
  if (inputValue.trim().length < 8) {
    return false
  }
  return true
}

export function passwordValidIncludeLetterHandler(inputValue) {
  const regxPassowrd = /^.*(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%*^&+=`~]).*$/
  if (!regxPassowrd.test(inputValue.trim())) {
    return false
  }
  return true
}

export function passwordValidConfirmHandler(inputValue, target) {
  return inputValue === target
}
