export function dateValidHandler(inputValue) {
  let regxNum = /^[0-9]+$/;
  if (!regxNum.test(inputValue)) {
    return false;
  }
  return true;
}

export function dateLengthValidHandler(inputValue) {
  if (inputValue.trim().length > 0) {
    return true;
  }
  return false;
}

const dateValidObj = {
  func0: {
    func: inputValue => dateLengthValidHandler(inputValue),
    message: '날짜를 입력해주세요.',
  },
  func1: {
    func: inputValue => dateValidHandler(inputValue),
    message: '날짜는 숫자만 입력하실 수 있습니다.',
  },
};
