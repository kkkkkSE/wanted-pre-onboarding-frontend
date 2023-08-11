# wanted-pre-onboarding-frontend

## 지원 정보 

- 지원 분야 : 원티드 프리온보딩 프론트엔드 인턴십
- 이름 : 김상은

## 프로젝트 실행 방법

`git clone` 후 아래 커맨드 입력

```
npm install

npm start
```

## 데모

- 배포 : https://pre-onboarding-kkkkkse.netlify.app

## 디렉토리 구조

```
├── README.md
├── node_modules/
├── package-lock.json
├── package.json
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── stores/
│   ├── styles/
│   ├── types/
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── routes.test.tsx
│   ├── routes.tsx
│   └── setupTests.ts
└── tsconfig.json
```

### `src` 구조

- `components` : 프로젝트의 재사용 가능한 컴포넌트를 관리
  - `ui` : UI 컴포넌트를 관리(상태, 비즈니스 로직 포함하지 않음)
- `constants` : 프로젝트에서 사용되는 상수 정의 파일 관리
- `hooks` : 커스텀 훅 관리
- `pages` : 페이지 컴포넌트 관리
- `services` : Axios를 이용한 API 호출 관리
- `stores` : 전역 상태 관리를 위한 스토어 관리
- `styles` : 전역 스타일 관리
- `types` : 타입 정의 파일 관리
