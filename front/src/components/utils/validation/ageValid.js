export function ageValidHandler(inputValue) {
  let regxNum = /^[0-9]+$/;
  if (!regxNum.test(inputValue)) {
    return false;
  }
  return true;
}

export function ageLengthValidHandler(inputValue) {
  if (inputValue.trim().length > 0) {
    return true;
  }
  return false;
}

const ageValidObj = {
  func0: {
    func: inputValue => ageLengthValidHandler(inputValue),
    message: '나이를 입력해주세요.',
  },
  func1: {
    func: inputValue => ageValidHandler(inputValue),
    message: '나이는 숫자만 입력하실 수 있습니다.',
  },
};
