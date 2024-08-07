# Coupang Eats - 기존 서비스를 참고하여 사용자 경험을 중심으로 제작

## 프로젝트 소개
[__테크 스펙__](https://docs.google.com/document/d/1DUixRYSVXQCKqcVedQ6-aYLRw_HRPaTdznVQ-rF0kF0/edit#heading=h.wub27ex6n4zy)을 작성하여 개발에 앞서 프로젝트의 구조를 설계, 개인의 사용경험을 통해 문제점을 효율적으로 풀 수 있게 사전에 정의 하였습니다. <br />
쿠팡 이츠에서 제공하는 서비스를 참고하여 개인의 사용 경험을 통해 개선방안을 제시한 서비스입니다.

## Tech-Stacks
- 코어: React, TypeScript
- 상태관리: React Query(ServerState), Redux(ClientState)
- 디자인: Tailwind CSS
- 배포: Vercel

## 프로젝트 목표
쿠창 이츠 주문 시 메뉴 선택 및 옵션 추가 과정에서 지불 금액을 한눈에 확인하기 어려웠던 문제를 해결하기 위해 수량과 가격 변화를 실시간으로 보여주는 고정 컴포넌트를 개발했습니다. 이로서 사용자는 메뉴를 선택하고 옵션을 조작하는 동시에 지불할 금액을 명확하게 파악할 수 있어 편리하게 주문할 수 있습니다

## 프로젝트 결과물
[__결과물 링크 열기__](https://coupang-eats.vercel.app/)

## Preview
<img width="793" alt="스크린샷 2024-07-20 오후 9 51 15" src="https://github.com/user-attachments/assets/a78356c2-9917-445f-b802-d238bef8c173">




## 실행하는 법
```
$ npm install
$ npm run dev
```

##  비고
- 본 프로젝트는 백엔드 개발에 의존하지 않고 데이터를 사전에 MOCKING 하여 내부에서 프론트 요청에 따라 데이터를 제공하였습니다.










