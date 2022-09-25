export function emailValidHandler(inputValue) {
  const regxEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  if (regxEmail.test(inputValue)) {
    return true
  }
  return false
}

export function emailLengthValidHandler(inputValue) {
  if (inputValue.trim().length < 6) {
    return false
  }
  return true
}

const emailValidObj = {
  func0: {
    func: inputValue => emailLengthValidHandler(inputValue),
    message: '사용할 이메일을 입력해주세요.',
  },
  func1: {
    func: inputValue => emailValidHandler(inputValue),
    message: '올바른 이메일 형식이 아닙니다.',
  },
}
