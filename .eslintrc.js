module.exports = {
  "extends": [
    "react-app", // react를 넣어 import등 error로 안잡히도록
    "eslint:recommended", // eslint 권장사항 적용
    "plugin:prettier/recommended" // eslint, prettier 연결
  ],
  "rules": {
    "no-console" : "error", // 콘솔로그 error 처리
    "semi": ["error", "always"] // ; 반드시 존재해야 함
  }
}