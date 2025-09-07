"use client";

import Link from "next/link";
import { Navigation } from "../components/nav";

export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Header Section */}
        <header className="mb-12 lg:mb-16">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            기술 너머 사용자를 생각하는 개발자.
          </h1>
          <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>안녕하세요. 프론트엔드 개발자 고영욱입니다.</p>
            <p>
              저는 기술 그 자체보다는 기술을 통해 사용자에게 실질적인 가치를
              전달하는 것에 집중합니다. <br /> 단순히 기능을 구현하는 것을
              넘어서, 사용자의 경험과 편의성을 고려한 서비스를 만들고자
              노력합니다.
            </p>
            <p>
              또한 동료들과 함께 성장하는 것을 중요하게 생각하며, 매일 출근 전
              학습과 데일리 & 위클리를 통해 개인적인 성장뿐만 아니라 팀의
              발전에도 힘쓰고 있습니다.
            </p>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
            Work
          </h2>

          {/* 마카롱팩토리 */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                <a
                  href="https://mycle.career.greetinghr.com/ko/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors duration-200"
                >
                  (주) 마카롱팩토리
                </a>
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Frontend Developer</span>
                <span>2025.05 ~ 현재</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              마카롱팩토리는 차량 관리를 더 쉽고 편하게 만들어 정비 시장을
              바꿔나가고 있습니다. 현재 570만 대의 누적 차량 등록과 월 평균 80만
              명이 사용하는 국내 차량 관리 앱 1위 서비스{" "}
              <Link
                target="_blank"
                href="https://mycle.co.kr/index.html"
                className="text-zinc-300 underline"
              >
                마이클
              </Link>
              을 운영하고 있습니다.
            </p>

            <br />

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  웹팀 데일리 & 위클리 프로세스 도입
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  팀 내 업무 상황 공유와 다양한 논의를 진행하기 위해 매일 30분씩
                  데일리 스크럼을 제안하여 팀 내 문화로 정착시켰습니다. 이
                  과정에서 서로 학습한 내용과 실수한 내용을 공유해 어떻게 하면
                  학습한 내용을 실무에 반영시킬지, 더 나아가 실수한 내용을
                  방지하기 위한 팀 내 효율적인 시스템을 구축할 수 있을지
                  논의하는 자리를 만들었습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  토스 미니앱 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  전국 2,000곳 이상의 정비소와 연결된 마이클 서비스를 토스의
                  3,000만 누적 가입자에게 제공하기 위해 앱인토스 미니앱을 웹뷰
                  기반으로 개발했습니다. 토스 사용자들이 별도 앱 설치 없이도
                  차량 정비 예약과 관리 할 수 있는 경험을 구현하여 서비스
                  접근성을 크게 향상시켰습니다. 개발 과정에서 디자이너, PM과
                  협업하여 API 호출 실패, 네트워크 연결 끊김 등 다양한 에러
                  상황에 대한 사용자 친화적인 UI/UX 플로우를 제안하고
                  구현했습니다. 토스의 TDS(Toss Design System)와 UX 가이드라인을
                  준수하면서 토스 생태계 내에서 자연스러운 사용자 경험을
                  제공하도록 개발했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  Sentry를 통한 에러 로깅 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  웹팀 내부 에러 로깅 시스템 부재로 배포 후 문제 파악과 개선
                  우선순위 설정이 어려웠던 상황에서, Sentry 도입을 제안하여 에러
                  로깅 시스템을 구축했습니다. Slack 연동을 통해 실시간 에러
                  알람을 받을 수 있도록 설정하여, 에러 발생 현황을 즉시 파악하고
                  빈도 기반으로 개선 우선순위를 정할 수 있게 되었습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  디자인 시스템 개발 및 도입
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  팀의 생산성을 높이기 위해 디자인 시스템의 필요성을 제안하고
                  프로젝트를 진행했습니다. 비즈니스를 방해하지 않으면서
                  성공적으로 디자인 시스템을 적용하기 위해 가장 핵심적인
                  토큰부터 도입하고, 이후 복잡한 컴포넌트를 점진적으로
                  도입해나가는 전략을 사용했습니다.
                </p>
              </div>
            </div>
          </div>

          <br />

          {/* 모던라이언 */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                <a
                  href="https://www.modernlion.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors duration-200"
                >
                  (주) 모던라이언
                </a>
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Frontend Developer</span>
                <span>2023.05 ~ 2025.05</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              모던라이언은 NFT 기술을 기반으로 사람, 사물, 예술, 서비스를 디지털
              세상에서 연결하고 확장시키는 블록체인 스타트업입니다. 다양한
              요소들을 NFT로 연결하여 새로운 가능성을 창출하는 웹과 앱 서비스
              구축에 집중했습니다.
            </p>

            <br />

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  대규모 트래픽 처리를 위한 공연 좌석제 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Seats.io 라이브러리를 기반으로 공연 좌석제를 지원하는 시스템을
                  개발했습니다. WebSocket을 활용한{" "}
                  <Link
                    target="_blank"
                    href="/docs/waiting-room"
                    className="text-zinc-300 underline"
                  >
                    대기룸
                  </Link>{" "}
                  기능을 구현하여 동시 접속자 10만 명까지 안정적으로 처리할 수
                  있는 UI 환경을 구축했습니다. 이를 통해 회사의 새로운 사업 영역
                  확장에 기여했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  글로벌 서비스를 위한 다국어 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  글로벌 유저 대응을 위한{" "}
                  <Link
                    target="_blank"
                    href="/docs/global-language"
                    className="text-zinc-300 underline"
                  >
                    다국어
                  </Link>{" "}
                  지원 과정에서 개발자 개입 없는 번역 관리가 필요했고,
                  next-i18next(SEO 최적화)와 Google Sheets(비개발자 접근성)를
                  연동한 자동화 시스템을 구축했습니다. Google Sheets의 번역
                  데이터를 JSON으로 변환하는 스크립트를 개발하고 빌드 프로세스에
                  통합하여, 배포 시 항상 최신 번역이 반영되도록 자동화했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  Next.js 기반 어드민 시스템 마이그레이션
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Refine 기반 레거시 어드민의 커스터마이징 제약과 빌드 속도
                  문제로 개발 생산성이 저하되는 상황에서, Next.js로
                  마이그레이션을 진행했습니다. 컴포넌트 재사용성을 높이고 Docker
                  멀티 스테이지 빌드 도입으로 배포 이미지를 94% 경량화(1GB →
                  60MB)하여, 빌드 시간을 단축시켰습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  결제 시스템 아키텍처 설계 및 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  앱 내 웹뷰 환경에서 동작하는 결제 페이지를 처음부터
                  설계했습니다. 다양한 결제 수단과 복잡한 결제 플로우를
                  모듈화하여 새로운 결제 방법 추가 시에도 기존 시스템에 영향을
                  주지 않도록 구현했습니다. Jest를 활용한 단위 테스트를 통해
                  결제 로직의 안정성을 보장했습니다.
                </p>
              </div>
            </div>
          </div>

          <br />

          {/* 넥스트유니콘 */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                <a
                  href="https://www.nextunicorn.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors duration-200"
                >
                  (주) 넥스트유니콘
                </a>
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Frontend Developer</span>
                <span>2022.07 ~ 2023.04</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              넥스트유니콘은 대한민국의 10,600여 개 스타트업과 1,060여 개
              투자기관을 연결하는 스타트업 생태계 플랫폼 서비스입니다.
              스타트업의 투자유치, 채용, 정보 비대칭 등 성장 과정에서 발생하는
              핵심 문제들을 기술로 해결하여 창업 생태계 혁신을 추진하는 회사에서
              개발 업무를 담당했습니다.
            </p>

            <br />

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  AI 기반 사업계획서 추천 시스템 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  창업자들의 사업 계획서 작성 부담을 줄이기 위해, OpenAI의 초기
                  터보와 다빈치 모델을 활용하여 사용자 맞춤형 사업계획서 샘플을
                  제공하는 서비스를 개발했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  Next.js 아키텍처 리팩토링을 통한 협업 효율성 개선
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  비 일관적인 프로젝트 구조로 인한 협업시 커뮤니케이션 리소스를
                  줄이기 위해{" "}
                  <Link
                    target="_blank"
                    href="https://free-ko.github.io/new-architecture/"
                    className="text-zinc-300 underline"
                  >
                    아키텍처
                  </Link>{" "}
                  재 설계를 제안했습니다. 계층별 책임 분리(pages, templates,
                  features, shared), ESLint를 통한 단방향 의존성 참조 규칙
                  적용으로 코드 응집성을 크게 향상시켰습니다. 결과적으로
                  팀원들의 코드 이해 시간이 단축되고 커뮤니케이션 리소스를
                  줄이며 유지보수성이 개선되었습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  콘텐츠 플랫폼 검색 노출 및 공유 시스템 개선
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  콘텐츠 플랫폼의 검색 엔진 노출 부족 문제를 해결하기 위해{" "}
                  <Link
                    target="_blank"
                    href="/docs/apply-articlejsonId"
                    className="text-zinc-300 underline"
                  >
                    구조화된 데이터
                  </Link>{" "}
                  를 적용했습니다. 또한 반복적으로 구현되던 SNS{" "}
                  <Link
                    target="_blank"
                    href="/docs/3rd-party-management"
                    className="text-zinc-300 underline"
                  >
                    공유 기능
                  </Link>{" "}
                  을 재사용 가능한 모듈로 개발하여 유지보수 효율성을 높였습니다.
                  그 결과 플랫폼 MAU 5% 증가를 달성했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  외부 라이브러리 커스터마이징을 통한 성능 개선
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  서비스에서 사용되는 React-Search-Autocomplete의 성능 이슈를
                  근본적으로 해결하기 위해 라이브러리를 분석하고 자체 컴포넌트로
                  재구축했습니다. 중복 상태 관리 로직을 제거하여 리렌더링을
                  최소화하고, 개발자 친화적인 API를 제공하여 팀 전체의 개발
                  효율성을 향상시켰습니다.
                </p>
              </div>
            </div>
          </div>

          <br />

          {/* 에픽모바일 */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                <a
                  href="https://epicmoble.notion.site/16692ed4babe4c798c6a23cba576edd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors duration-200"
                >
                  (주) 에픽모바일
                </a>
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Frontend Developer</span>
                <span>2021.01 ~ 2022.06</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              에픽모바일은 임산부와 육아맘을 위한 모바일 서비스를 제공하는
              회사입니다. 사용자의 라이프스타일 변화에 맞춘 개인화된 콘텐츠와
              상품을 추천하는 앱을 개발했습니다.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=net.epicmobile.readybaby&pli=1"
                    className="text-zinc-300 underline"
                  >
                    레디베이비
                  </Link>{" "}
                  앱 성능 최적화
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  JavaScript 프로젝트의 잦은 런타임 에러를 방지하기 위해
                  TypeScript를 도입하여 코드 품질과 유지보수성을 향상시켰습니다.
                  또한 느린 앱 다운로드로 인한 설치 포기 문제를 해결하기 위해
                  중복 코드 제거 및 이미지 최적화를 진행하여 앱 용량을 58%
                  감소(91MB → 38MB)시켰고, 컴포넌트 리팩토링을 통해 초기 로딩
                  속도를 개선하여 사용자 이탈률을 크게 감소시켰습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=net.epicmobile.hometips"
                    className="text-zinc-300 underline"
                  >
                    홈팁스
                  </Link>{" "}
                  지원금 검색 서비스 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  복잡하고 분산된 정부 지원금 정보로 인해 사용자들이 혜택을
                  놓치는 문제를 해결하기 위해 맞춤형 지원금 검색 기능을
                  개발했습니다. 또한 검색 입력 시마다 발생하는 과도한 API 호출
                  문제를 Debounce 기법으로 해결하여 서버 부하를 80% 감소시켰고,
                  댓글/찜/공유 등 소셜 기능을 추가하여 사용자 참여도를 높인 결과
                  유저 가입률 44.5% 향상을 달성했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="pb-12 lg:pb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
            Activities
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                스터디
              </h3>
              <ul className="text-gray-300 leading-relaxed space-y-1 text-sm sm:text-base list-disc list-inside">
                <li>
                  <Link
                    target="_blank"
                    href="https://www.codesoom.com/"
                    className="text-zinc-300 underline"
                  >
                    <strong>코드숨 React 7기</strong>
                  </Link>
                  : TDD와 코드 리뷰를 경험하는 실무 중심 프로그램
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/pagers-org/Effective-TypeScript"
                    className="text-zinc-300 underline"
                  >
                    <strong>Effective TypeScript 스터디</strong>
                  </Link>
                  : 발표와 과제 중심의 타입스크립트 심화 학습
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/pagers-org/FunctionalProgramming"
                    className="text-zinc-300 underline"
                  >
                    <strong>함수형 프로그래밍 스터디</strong>
                  </Link>
                  : 쏙쏙들어오는 함수형 코딩 책 기반 실습
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://zzsza.notion.site/ac5b18a482fb4df497d4e8257ad4d516"
                    className="text-zinc-300 underline"
                  >
                    <strong>글또</strong>
                  </Link>
                  : 개발자들이 모여 2주마다 글을 작성하고 피드백을 나누는 스터디
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                자격증
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                • 정보처리기사 (2021.11)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
