# 🐱 PetSure? 🐶

### 🏆🥉 SSAFY 7기 특화프로젝트 우수작

## 📊 PetSure ? 🐱🐶

- ### 프로젝트 개요

  - 사이트 바로가기 : [PetSure](https://j7b202.p.ssafy.io/)

  - `PetSure`는 빅데이터를 이용해서 개발한 SURE지수를 기반으로 사용자에게 가장 적합한 보험상품을 추천해주는 맞춤형 펫보험 웹 서비스입니다.
  

- ### 주요 기능 

  - **기본 검색**
  
    > 1) **반려동물의 이름, 종, 생년월일**만 입력받고 보험을 추천해준다.
    >
    > 2) 기본검색은 SURE 지수 기능, 보험비교기능, 보험 정렬 기능, 보험 보장 금액 계산기가 지원되지 않는다.
    > 
    > 3) 기본검색 결과에서 일정 부분 이상 스크롤을 내리면, 상세 검색으로 유도하는 모달창이 뜬다.
  - **세부 검색**

    > 1) **반려동물의 이름, 종, 생년월일, 간단한 8가지 질문으로 이루어진 보장 선호도 설문조사**를 거치면 보험을 추천해준다.
    > 
    > 2) 이때 추천되는 보험은 **SURE 지수 순 / 낮은 금액 순 / 보장 많은 순 중 하나로 정렬**된다. 정렬 방식은 사용자가 선택할 수 있다. 
    >
    > 3) 각 정렬 별 1~3순위 상품은 따로 **Top3 라는 카드로 표시**된다.
    > 
    > 4) **특정 보험 상세보기**를 할 경우, 상세보기에 포함되는 사항들은 다음과 같다.
    >>   (a) **SURE 지수 확인** : 보험사 신뢰등급, 안심 보장 점수, 해당 상품과 유저의 예상적합도까지 총 3가지가 합쳐져 계산된 SURE 지수를 통해서 유저 맞춤형 보험을 추천 가능.
    >>   
    >>   (b) **주력하고 있는 보장상품 그래프** : 오각형 그래프의 수술치료비, 비뇨기, 구강, 피부병, 슬관절 중 어느 보장에 주력하고 있는 상품인지 확인 가능.
    >>   
    >>   (c) **상품의 보장 상세 내역** : 기본약관, 특별약관에 대해서 보장하고 있는 내역의 상세 정보를 확인 가능.
    >>   
    >>   (d) **유저 보험 평가 그래프** : 타 유저의 보험 상품 평가를 보고, 이 상품이 좋은지 아닌지 판단 가능.
    >>   
    >>   (e) **대체 제품 추천** : 해당 보험 상품의 보장 미포함 항목을 대체할 수 있는 반려동물용 시중 제품을 추천.
    >
    > 5) 특정 보험 상품 상세보기를 할 경우, 유저 스스로 해당 보험상품에 **만족도 평가**를 할 수 있다.  
    >
    > 6) 세부검색을 해야만 슈어지수, 보험상품비교 기능, 보험 보장 금액 계산기를 이용할 수 있다. 
  - **보험 상품 비교** 

    > 1) 각각의 보험 상품에서 가장 중점적인 내용을 뽑아다가 비교 기능에서 한 눈에 **최대 3가지의 보험상품을 비교**할 수 있다. 
    >
    > 2) 보험 비교 기능에서 볼 수 있는 내역 : 보험 상품 내에 8가지 보장(통원치료비, 입원치료비, 수술치료비, 슬관절, 피부병, 구강, 비뇨기, 배상책임) 각각의 포함 여부와 슈어지수 그래프, 보장 금액 계산기가 있다.
   
  - **보험 보장 금액 계산기**
    > 1) 해당 상품이 보장하는 금액이 얼마인지, 병원에서 지불한 금액을 입력하면 알 수 있다.
    > 
    > 2) 보험 상품 비교 기능의 하단에도 세 상품의 보험 보장 금액 계산을 **한 번에** 할 수 있는 기능이 있다.  
    
- ### 향후 계획

  - **데이터 최신화** : 주기적으로 보험상품 데이터를 최신화하여 사용자들에게 실용적인 서비스로 자리매김
  - **로그인 기능** : 유저 정보를 저장할 수 있도록 로그인 기능 추가.
  - **보험 비교 기능 ver.2** : 현재 가입된 보험과 새로 가입하려는 보험을 비교하는 기능 추가.



## 📌 목차

* [지원하는 브라우저](#globe_with_meridians-지원하는-브라우저)

* [사용된 도구](#hammer_and_wrench-사용된-도구)

* [사용된 기술](#desktop_computer-사용된-기술)

* [시스템 아키텍쳐](#desktop_computer-시스템-아키텍쳐)

* [서비스 소개](#-서비스-소개)

* [일정](#calendar-일정)

* [저자](#-저자)

  





## :globe_with_meridians: 지원하는 브라우저

| Chrome | Safari | Edge   | Firefox |
| ------ | ------ | ------ | ------- |
| latest | latest | latest | latest  |

## :hammer_and_wrench: 사용된 도구

* React 18.2.0
* npm 8.11.0
* Django
* IDE: Visual Studio Code 1.70.0
* GitLab
* Jira


## :desktop_computer: 사용된 기술

![기술스택](https://github.com/jijisusu3/Petsure/assets/97648027/44eb556d-ca40-457d-b256-8bdbeda86f1a)

**[ BACK END ]** 

- **Django** : 의 전반적인 Rest Controller 구현.
- **MySql** : RDBMS로 PetSure의 보험 상품 등 필요한 데이터를 저장.
- **EC2** : EC2 서비스를 이용하여 서버를 구축.
- **Docker** : 응용 프로그램들을 프로세스 격리 기술들을 사용해 컨테이너로 실행하고 관리.
- **Jenkins** : 소프트웨어 개발 시 지속적 통합 서비스를 제공.
- **Nginx** : 웹 서버를 구축.

**[ FRONT END ]**

- **React** : JS 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용.
- **React-Bootstrap** : 프로젝트 UI 구성 때 활용.
- **MUI** : 프로젝트 UI 구성 때 활용.
- **animate.css** : AboutUs page 구성 때 배너 애니메이션 효과에 활용.
- **chart.js** : 보험 상품 데이터를 효과적으로 시각화할 수 있도록 활용(저장된 데이터를 그래프로 변환 및 저장)
- **Axios** : 데이터 통신 때 활용.
- **npm** : 패키지 관리자로 활용.

**[ TEAM Cooperation ]**

- **GitLab** : GitLab을 활용하여 프로젝트를 관리.
  - Git Flow 에 따른 브랜치 전략 수립.
  - MR 시 코드 리뷰 진행.
- **Jira** : 이슈 관리 도구로 활용. 
  - 주요 기능들을 이슈로 등록하고 Story Point를 산정한 후, 담당자를 지정하여 프로젝트를 진행.
  - 1~2 주 정도 상황에 맞게 스프린트를 설정.
- **Notion** : 협업을 위한 공용 문서 및 산출물들을 공유할 수 있도록 활용.
  - 동시 문서 작성.
  - 모든 기록을 문서화.

---


## :desktop_computer: 시스템 아키텍쳐

![시스템아키텍처](https://github.com/jijisusu3/Petsure/assets/97648027/1dedef42-f1c9-4687-a5b1-3cc0cabdac73)

## 🎞 서비스 소개

### 1. Landing page

#### 1-1. Landing page

![1-1메인 (1)](https://github.com/jijisusu3/Petsure/assets/97648027/8f9e673e-143d-411c-9727-99c3c31ca15b)

---
### 2. 메인 화면 및 가이드

#### 2-1. 화면 상단 배너 

* **[메인 화면] :** 상단에는 펫보험, 질병 노트, About Us, 가이드가 있다.

![2-1](https://github.com/jijisusu3/Petsure/assets/97648027/59fc27fa-fa6f-45b3-96bf-880e25a19816)

---

#### 2-2. 프로젝트 설명 가이드 
* **[가이드] :** 상단 가이드를 클릭할 경우, 아래와 같이 구성되어있다.
  
![2-2가이드](https://github.com/jijisusu3/Petsure/assets/97648027/59aa2058-b415-43d2-9ab4-afca5230fc31)


---

### 3. 펫슈어 기본검색

#### 3-1. 펫보험에서 기본검색 선택 시 나오는 기본정보 입력창 

* **[펫보험 기본검색 정보 입력창] :** 보험검색에 필수적인 정보를 입력하는 화면이다.
  
![3-1](https://github.com/jijisusu3/Petsure/assets/97648027/18f12019-4f04-435f-9f77-93a28ae2d7fe)

---

#### 3-2. 기본검색 결과 및 상세검색으로 연결되는 화면

* **[기본검색 결과창] :** 순서없이 나열되는 것을 볼 수 있다. 또한 상세검색으로 연결되는 버튼이 존재한다.

![3-2](https://github.com/jijisusu3/Petsure/assets/97648027/14f0a579-cd09-4c48-844b-9401fd5d78ea)

---

### 4 . 펫슈어 상세검색

#### 4-1. 설문조사 화면 + 기본정보 입력창

* **[펫보험 상세검색 정보 입력창] :** 8가지의 간단한 설문조사를 하고, 보험검색을 위해 필수적인 정보를 입력하는 화면이다.
  
![4-1](https://github.com/jijisusu3/Petsure/assets/97648027/64cfc03d-4ecf-4a79-8d54-58fbc4c4adb2)

---

#### 4-2. 상세 검색 결과 페이지

* **[상세검색 결과 3가지 정렬방식] :** 상단의 SURE 점수 순 / 낮은 가격 순 / 보장 많은 순  총 3가지로 정렬을 할 수 있다.
  
![4-2](https://github.com/jijisusu3/Petsure/assets/97648027/450cfa4b-b3f1-4306-9c3a-004f5c1bf4cf)

---

#### 4-3. 상세 검색 상품 상세보기

* **[상품 상세보기] :** 보장금액 계산기와 더불어 그래프, 아코디언, 만족도, 가입하기 버튼으로 구성되어있다. 



---

#### 4-4. 상세 검색 상품 비교 기능


* **[보험상품 비교 기능] :** 최대 3개 까지의 보험 상품을 비교할 수 있으며, 보험 상품 비교 기능 안에서도 보장금액 계산기를 통해 보장금액을 비교할 수 있다.
  
![4-4](https://github.com/jijisusu3/Petsure/assets/97648027/fa6b79c4-e41e-485d-98af-670e0bf8a5cb)

---

### 5. 질병 상식 

* **[질병 상식] :** 동물이 자주 걸리는 질병들의 대표적인 증상 12가지를 모아서 증상, 대처방안, 주의할 점 등을 적어둔 페이지이다.
  
![5-1](https://github.com/jijisusu3/Petsure/assets/97648027/4d86d2b2-d58b-457e-8532-1dd1f657f72b)

---



## :calendar: 일정

![193997133-0c719605-1ed4-4f55-ad02-253cec8751f8](https://github.com/jijisusu3/Petsure/assets/97648027/e2f984ea-1aef-4806-905c-aa658ab82f84)

## 👤 저자

* 김지수[FullStack] / [Team Leader] - Kim Jisoo - wltn7498@gmail.com
  - Infra
  - BE - Api
  - FE - Chart JS, Insurance detail
* 권예슬[FullStack] / [BE Leader] - Kwon Ye-seul - ysltub@gmail.com
   - BE - Euclidean algorithm, Data crawling, Api
   - FE - Landing page, Basic search, Basic result, Disease dict
* 전지수[FullStack] - Jeon Ji-soo - newsty1107@gmail.com
   - BE - Weighted KNN, Api
   - FE - Detail result, Insurance detail, Disease dict
* 이성재[FrontEnd] / [FE Leader] - Lee Sung-jae - lsuksa0315@gmail.com
   - FE - Chart JS, Detail search, Detail result, Insurance detail, Insurance compare
* 김채윤[FrontEnd] - Kim Chae-yoon - only363me@gmail.com
   - FE - About us
