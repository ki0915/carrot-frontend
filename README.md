# 🥕 당근마켓 클론 — Frontend

## 🏷 프로젝트 소개

React 기반 클라이언트입니다. API 서버는 [carrot-backend](https://github.com/ki0915/carrot-backend)이며, 기획 배경과 트러블슈팅은 백엔드 README에 정리했습니다.

- **기간:** 2022
- **구성원:** 개인 프로젝트 (단독 개발)
- **스택:** React · axios · MUI

## 💌 기능 소개

- 거래글 목록 및 상세 화면
- 채팅 화면 (더미 데이터 기반)

## 🖼 화면

![거래 화면](https://raw.githubusercontent.com/ki0915/carrot-backend/main/docs/screen-trade.png)
![채팅 화면](https://raw.githubusercontent.com/ki0915/carrot-backend/main/docs/screen-chat.png)

## 🔧 개발하며 겪은 문제

화면이 뜰 때 목록을 불러오는 함수가 계속 반복 호출되는 문제가 있었습니다. 리렌더링마다 함수가 다시 실행되는 구조가 원인이라는 걸 파악하고 `useEffect`의 의존성 배열을 빈 배열로 지정해 최초 1회만 호출되도록 고쳤습니다.

## 🔗 관련 저장소

- Backend: [ki0915/carrot-backend](https://github.com/ki0915/carrot-backend)
