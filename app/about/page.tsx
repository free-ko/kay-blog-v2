"use client";
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
              동료들과 함께 성장하는 것을 중요하게 생각하며, 꾸준한 학습과 지식
              공유를 통해 팀 전체의 역량 향상에 기여하고 있습니다. <br /> 매일
              아침 20분의 학습과 프론트엔드 위클리 운영을 통해 개인적인 성장뿐만
              아니라 팀의 발전에도 힘쓰고 있습니다.
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
              마카롱팩토리는 차량 관리의 새 기준을 세우는 회사입니다. 불안하고
              막막했던 차량 관리를 더 쉽고 편하게 만들어 정비 시장을 바꿔나가고
              있습니다. 현재 570만 대의 누적 차량 등록과 월 평균 80만 명이
              사용하는 국내 차량 관리 앱 1위 서비스 '마이클'을 운영하고
              있습니다.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  <a
                    href="https://toss.im/apps-in-toss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-300 transition-colors duration-200"
                  >
                    토스 미니앱 개발
                  </a>
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  전국 2,000곳 이상의 정비소와 연결된 마이클 서비스를 토스의
                  3,000만 누적 가입자에게 제공하기 위해 앱인토스 미니앱을 웹뷰
                  기반으로 개발했습니다. 토스 사용자들이 별도 앱 설치 없이도
                  차량 정비 예약과 관리 할 수 있는 경험을 구현하여 서비스
                  접근성을 크게 향상시켰습니다. 토스의 TDS(Toss Design System)와
                  UX 가이드라인을 준수하면서 토스 생태계 내에서 자연스러운
                  사용자 경험을 제공하도록 개발 했습니다.
                </p>
              </div>
            </div>
          </div>

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

            <div className="space-y-3 sm:space-y-4">
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
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  대규모 트래픽 처리를 위한 공연 좌석제 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Seats.io 라이브러리를 기반으로 모든 유형의 공연 좌석제를
                  지원하는 시스템을 개발했습니다. WebSocket을 활용한 대기룸
                  기능을 구현하여 동시 접속자 10만 명까지 안정적으로 처리할 수
                  있는 환경을 구축했습니다. 이를 통해 회사의 새로운 사업 영역
                  확장에 기여했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  NFT 마켓플레이스 성능 최적화
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  복잡한 NFT 거래 로직을 커스텀 훅으로 추상화하여 개발 생산성을
                  높였습니다. 불필요한 API 호출을 제거하고 상태 관리 로직을
                  최적화하여 사용자 경험을 개선했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  Next.js 기반 어드민 시스템 마이그레이션
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  기존 Refine 기반 대시보드를 Next.js로 마이그레이션하여
                  팀원들의 개발 생산성을 향상시켰습니다. React-Hook-Form과 Yup을
                  활용한 일관성 있는 폼 검증 시스템을 구축했고, Docker 멀티
                  스테이지 빌드를 통해 배포 이미지 크기를 94% 감소(1GB →
                  60MB)시켰습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  글로벌 서비스를 위한 다국어 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  next-i18next를 활용한 다국어 환경을 구축하고, Google Sheets의
                  번역 데이터를 JSON으로 자동 변환하는 스크립트를 개발했습니다.
                  배포 프로세스와 연동하여 번역 데이터가 자동으로 동기화되도록
                  구현했습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  디자인 시스템 패키지 개발 및 운영
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  디자이너와의 긴밀한 협업을 통해 재사용 가능한 디자인 시스템
                  패키지를 구축했습니다. Storybook을 활용한 컴포넌트 문서화로 팀
                  내 협업 효율성을 높이고, 디자인 QA 시간을 단축시켰습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  운영 모니터링 시스템 구축
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Sentry와 Slack을 연동한 실시간 에러 알림 시스템을 구축하여
                  장애 대응 시간을 단축했습니다. 주요 이슈를 팀원들과 즉시
                  공유할 수 있는 환경을 만들어 서비스 안정성을 크게
                  향상시켰습니다.
                </p>
              </div>
            </div>
          </div>

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

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  AI 기반 사업계획서 추천 시스템 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  OpenAI의 GPT 모델을 활용하여 사용자 맞춤형 사업계획서 샘플을
                  제공하는 서비스를 개발했습니다. 사용자의 업종과 사업 단계에
                  따라 적합한 템플릿을 추천하여 창업자들의 사업계획서 작성
                  부담을 크게 줄였습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  플랫폼 아키텍처 개선 및 SEO 최적화
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Next.js 프로젝트의 아키텍처를 리팩토링하여 코드 응집도를
                  높이고 유지보수성을 개선했습니다. 구조화된 데이터를 적용하여
                  SEO를 최적화한 결과, 플랫폼 유입 MAU가 5% 증가했습니다.
                </p>
              </div>
            </div>
          </div>

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
                  레디베이비 앱 성능 최적화
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  TypeScript 도입을 통해 코드 품질과 유지보수성을
                  향상시켰습니다. UI 렌더링 최적화를 통해 FCP를 10% 개선했고,
                  코드 모듈화와 이미지 최적화를 통해 앱 용량을 50% 이상
                  감소(91MB → 38MB)시켰습니다.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                  홈팁스 검색 서비스 개발
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  사용자 맞춤형 지원금 검색 기능을 개발하여 유저 가입률을 44.5%
                  향상시켰습니다. Debounce 기법을 적용하여 불필요한 API 호출을
                  제거하고 사용자 경험을 개선했습니다.
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
                기술 학습 및 지식 공유
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                    1. 프론트엔드 위클리 운영
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    팀 내에서 프론트엔드 위클리를 기획하고 운영하여 실수와 실패
                    경험을 솔직하게 공유하는 문화를 만들었습니다. 이를 통해
                    팀원들이 서로 배우며 성장할 수 있는 환경을 조성했습니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                    2. 꾸준한 학습과 기록
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    매일 출근 전 20분 동안 개발 관련 글과 영상을 학습하고, 배운
                    내용을 블로그에 정리하여 커뮤니티와 공유하고 있습니다.
                    이러한 꾸준한 학습이 개인의 성장과 팀의 발전으로 이어지고
                    있다고 믿습니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                    3. 스터디 및 커뮤니티 활동
                  </h4>
                  <div className="text-gray-300 leading-relaxed space-y-1 text-sm sm:text-base">
                    <p>
                      <strong>
                        <a
                          href="https://www.notion.so/zzsza/ac5b18a482fb4df497d4e8257ad4d516"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                        >
                          글또
                        </a>
                        :
                      </strong>{" "}
                      개발자들이 모여 2주마다 글을 작성하고 피드백을 나누는
                      스터디 참여
                    </p>
                    <p>
                      <strong>
                        <a
                          href="https://github.com/FECrash/FunctionalProgramming"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                        >
                          함수형 프로그래밍 스터디
                        </a>
                        :
                      </strong>{" "}
                      쏙쏙들어오는 함수형 코딩 책을 기반으로 한 실습 중심 스터디
                    </p>
                    <p>
                      <strong>
                        <a
                          href="https://github.com/FECrash/Effective-TypeScript"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                        >
                          Effective TypeScript 스터디
                        </a>
                        :
                      </strong>{" "}
                      발표와 과제 중심의 타입스크립트 심화 학습
                    </p>
                    <p>
                      <strong>
                        <a
                          href="https://www.codesoom.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                        >
                          코드숨 React 7기
                        </a>
                        :
                      </strong>{" "}
                      TDD와 코드 리뷰를 경험하는 실무 중심 프로그램
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
                    4. 기술 자격증 취득
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    2021년 정보처리기사 자격증을 취득하여 개발자로서 필요한 기본
                    CS 개념을 체계적으로 학습했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
