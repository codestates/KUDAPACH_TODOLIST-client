// email 형식인지 체크하는 정규표현식 함수
const emailValidation = (newEmail) => {
  let emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailExp.test(newEmail)) return true;
  else return false;
};
// phoneNum이 숫자만, 10,11자리인지 체크하는 정규표현식 함수
const phoneNumValidation = (newPhone) => {
  let phoneExp = /^\d{3}\d{3,4}\d{4}$/;

  if (phoneExp.test(newPhone)) return true;
  else return false;
};

export { emailValidation, phoneNumValidation };
