export function nickNameValidLengthHandler(inputValue) {
  if (inputValue.length < 2) {
    return false
  }
  return true
}

export function nickNameValidOtherLetterHandler(inputValue) {
  const regxSpecial = /[`~!@#$%^&*|\\\'\";:\/?^=^+_()<>]/
  if (regxSpecial.test(inputValue)) {
    return false
  }
  return true
}

export function nickNameValidStartLetterHandler(inputValue) {
  const regxText = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/
  if (regxText.test(inputValue[0])) {
    return true
  }
  return false
}

const nickNameValidObj = {
  func0: {
    func: inputValue => nickNameValidLengthHandler(inputValue),
    message: '닉네임은 2자 이상이어야 합니다',
  },
  func1: {
    func: inputValue => nickNameValidOtherLetterHandler(inputValue),
    message: '닉네임은 특수문자를 사용해서는 안됩니다.',
  },
  func2: {
    func: inputValue => nickNameValidStartLetterHandler(inputValue),
    message: '닉네임의 첫문자는 영어 혹은 한글이어야 합니다.',
  },
}
