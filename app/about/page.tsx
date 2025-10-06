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
          <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            사용자를 위해 고민하고, 팀과 함께 만들어가는 개발자.
          </h1>
          <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              저는 기술로 사람들의 <b>일상을 편리하게 만드는 것이</b> 개발자의
              역할이라고 생각합니다.
              <br />
              특히 <b>동료들과 고민하며</b>,{" "}
              <b>사용자가 자연스럽게 목적을 달성</b>
              하도록 돕는 서비스를 만들 때, 가장 큰 보람을 느낍니다.
            </p>
            <p>
              완벽한 코드를 혼자 작성하는 것보다, <b>팀 전체가 이해하고 개선</b>
              할 수 있는 코드를 함께 만들어가는 것이 더 가치 있다고 생각합니다.
              <br /> 그래서 저는 코드를 작성할 때{" "}
              <i>'3개월 후의 동료가 이 코드를 수정해야 한다면?'</i>이라는 질문을
              항상 던집니다.
            </p>
            <p>
              <b>명확한 의도와 충분한 맥락을 담은 코드</b>는 팀의 자산이 되고,{" "}
              <b>동료들과 주고받는 솔직한 피드백</b>은 그 자산을 더욱 단단하게
              만듭니다.
              <br />
              이러한 협업의 과정 속에서 사용자의 일상에 도움을 주는 서비스가
              탄생한다고 생각합니다.
            </p>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
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
                <i>2025.05 ~ 현재</i>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  토스 미니앱 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  프로젝트 초기 단계에서 네트워크 연결 끊김, API 응답 지연 및
                  실패, 웹뷰 브라우저 히스토리 처리 등 예외 상황에 대한 UX
                  플로우를 적극적으로 제안했습니다.
                  <br />
                  덕분에 사용자가 예상치 못한 상황에서도 자연스럽게 서비스를
                  이용할 수 있게 되었습니다.
                  <br />
                  개발 과정에서는 토스 웹뷰의 복잡한 뒤로가기 이벤트 핸들링을
                  커스텀 훅으로 추상화하여 팀 전체의 개발 속도를 높였습니다.
                  <br />
                  또한 .ait 파일을 매번 수동으로 배포 콘솔에 업로드하는 비효율을
                  발견하고, 앱인토스팀에 자동화 SDK 제공을 제안해 향후 배포
                  프로세스 개선에 기여했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  업무 프로세스 개선
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  팀원들이 각자 겪은 에러, 업무 중 공유할 사항, 어려운 부분을
                  실시간으로 파악하기 어려웠습니다. 또한 누가 어떤 프로젝트를
                  어떻게 진행 중인지 명확하지 않아 협업에 어려움이 있었습니다.
                  <br />
                  이를 해결하기 위해 매일 30분 데일리 미팅을 도입했습니다. 진행
                  중인 작업과 블로커를 공유하고, 발생한 에러 케이스를 함께
                  분석해 해결 방안을 도출했습니다.
                  <br />
                  에러 사례는 팀 문서로 정리해 유사 이슈 재발을 방지했습니다.
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
                  토큰부터 도입하고, 이후 복잡한 컴포넌트를 점진적으로 실행하는
                  전략을 사용했습니다.
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
                <i>2023.05 ~ 2025.05</i>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                  지원 과정에서, 번역 작업마다 개발자가 개입해야 하는 비효율을
                  발견했습니다.
                  <br />
                  이를 해결하기 위해 next-i18next와 Google Sheets를 연동한
                  자동화 시스템을 제안하고 구축했습니다. Google Sheets의 번역
                  데이터를 JSON으로 변환하는 스크립트를 개발해 빌드 프로세스에
                  통합했습니다. 덕분에 기획자와 디자이너가 직접 번역을 수정할 수
                  있게 되었고, 배포 시 최신 번역이 자동으로 반영되어 개발 시간을
                  줄였습니다.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  모듈 기반 결제 시스템 설계 및 구현
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  웹뷰 결제 시스템을 결제 수단별로{" "}
                  <Link
                    target="_blank"
                    href="/docs/payment-system-modularization"
                    className="text-zinc-300 underline"
                  >
                    모듈화
                  </Link>{" "}
                  하여 카드, 계좌이체, 간편결제 등 각 결제 방식을 독립적인
                  모듈로 개발했습니다. 공통 결제 인터페이스를 정의하고 각 모듈이
                  이를 구현하도록 설계해 모듈 간 의존성을 제거했습니다. 이를
                  통해 새로운 결제 수단 추가 시 기존 코드 수정 없이 확장 가능한
                  구조를 구축했으며, Jest를 활용한 단위 테스트로 각 모듈의
                  안정성을 검증했습니다.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  Next.js 기반 어드민 시스템 마이그레이션
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  기존 Refine 프레임워크는 독자적인 컨벤션 때문에 어드민 수정
                  작업마다 러닝커브가 발생했고, 유지보수가 어려웠습니다. 또한
                  다른 프로젝트와 기술 스택이 달라 코드 재사용도 불가능했습니다.
                  <br />
                  이를 해결하기 위해 팀이 이미 사용 중인 Next.js로
                  마이그레이션을 진행했습니다. 익숙한 기술 스택으로 전환하면서
                  기존 프로젝트의 컴포넌트와 유틸을 재사용할 수 있게 되었고,
                  어드민 수정 작업 시 발생하던 러닝커브를 없애 개발 속도를 크게
                  높였습니다.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  배포 프로세스 최적화
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  어드민 시스템의 빌드 시간이 6분에 달해, 하루 평균 7-8회 배포
                  시 45분 이상을 대기해야 했습니다.
                  <br />
                  Docker 멀티 스테이지 빌드를 도입해 불필요한 의존성을 제거하고,
                  이미지 크기를 1GB에서 60MB로 94% 경량화했습니다. 빌드 시간은
                  6분에서 2분으로 단축되었고, 하루 평균 7-8회 배포하던 대기
                  시간을 30분 이상 줄였습니다. 팀원들이 배포를 기다리는 대신
                  다음 작업을 바로 시작할 수 있게 되었습니다.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  대규모 트래픽 처리를 위한 공연 좌석제 시스템 구축
                </h4>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  사용자가 직접 좌석을 선택할 수 있는 공연 예매 서비스 구현을
                  위해 Seats.io 라이브러리를 도입했습니다. <br /> 인기 공연 오픈
                  시 트래픽 집중으로 화면 멈춤과 결제 실패 문제가 발생했고,
                  WebSocket 기반{" "}
                  <Link
                    target="_blank"
                    href="/docs/waiting-room"
                    className="text-zinc-300 underline"
                  >
                    대기룸
                  </Link>{" "}
                  시스템을 구현하여 순차 입장과 실시간 대기 정보를 제공했습니다.
                  <br />그 결과 동시 접속자 10만 명 환경에서도 안정적인 서비스
                  운영이 가능했습니다.
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
                <i>2022.07 ~ 2023.04</i>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  외부 라이브러리 커스터마이징을 통한 성능 개선
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  서비스에서 사용되는 React-Search-Autocomplete의 성능 이슈를
                  근본적으로 해결하기 위해{" "}
                  <Link
                    target="_blank"
                    href="/docs/library-customize"
                    className="text-zinc-300 underline"
                  >
                    라이브러리를 분석하고 자체 컴포넌트
                  </Link>
                  로 재구축했습니다. 중복 상태 관리 로직을 제거하여 리렌더링을
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
                <i>2021.01 ~ 2022.06</i>
              </div>
            </div>

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
                  속도를 개선하였습니다.
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
                  문제를 Debounce 기법으로 해결하여 서버 부하를 감소시켰습니다.
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
