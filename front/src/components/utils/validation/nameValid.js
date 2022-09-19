export function nameValidHandler(inputValue) {
  //  const regxEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  const regxName = /^[가-힣a-zA-Z]+$/
  if (regxName.test(inputValue)) {
    return true
  }
  return false
}

//무조건 입력하게
export function nameValidLengthHandler(inputValue) {
  if (inputValue.length < 2) {
    return false
  }
  return true
}

//특수문자 사용못하게
export function nameValidOtherLetterHandler(inputValue) {
  const regxSpecial = /[`~!@#$%^&*|\\\'\";:\/?^=^+_()<>]/
  if (regxSpecial.test(inputValue)) {
    return false
  }
  return true
}

const nameValidObj = {
  func0: {
    func: inputValue => nameValidLengthHandler(inputValue),
    message: '이름을 2자 이상 입력해주세요.',
  },
  func1: {
    func: inputValue => nameValidOtherLetterHandler(inputValue),
    message: '이름은 특수문자를 사용해서는 안됩니다.',
  },
  func2: {
    func: inputValue => nameValidHandler(inputValue),
    message: '이름은 한글 및 영어만 입력이 가능합니다',
  },
}
