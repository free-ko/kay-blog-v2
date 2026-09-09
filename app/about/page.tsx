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
              특히 <b>사용자가 목적을 달성할 수 있도록 동료들과 함께 고민</b>할
              때 가장 큰 보람을 느낍니다.
            </p>
            <p>
              완벽한 코드를 혼자 작성하는 것보다, <b>팀 전체가 이해하고 개선</b>
              하기 쉬운 코드를 함께 만들어가는 것이 더 가치 있다고 생각합니다.
              <br /> 그래서 저는 코드를 작성할 때{" "}
              <i>'3개월 후의 동료가 이 코드를 수정해야 한다면?'</i>이라는 질문을
              항상 던집니다.
            </p>
            <p>
              <b>명확한 의도와 충분한 맥락을 담은 코드</b>는 팀의 자산이 되고,{" "}
              <b>동료들과 주고받는 솔직한 피드백</b>은 그 자산을 더욱 단단하게
              만듭니다.
              <br />
              이러한 협업 과정에서 사용자의 일상에 도움을 주는 서비스가
              만들어진다고 믿습니다.
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

            <div className="space-y-8 sm:space-y-10">
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  CDN 캐시 적용으로 불필요한 서버 증설 제거
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      콘텐츠 푸시 알림 한 번에 서버가 15대까지 늘었는데 평균
                      CPU는 31%였습니다. CPU 부하가 아니라 요청 수 기준의
                      오토스케일링 정책이 서버를 늘리고 있었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      페이지 한 번을 여는 데 발생하는 요청 36건 중 34건이 정적
                      파일임을 확인했습니다. 로컬 빌드와 운영 파일의 해시를
                      대조해 안전성을 검증한 뒤 타 팀과 함께{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/origin-traffic-optimization"
                        className="text-zinc-300 underline"
                      >
                        정적 파일 경로에만 CDN 캐시를 적용
                      </Link>
                      했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      <b>오리진 서버로 들어오는 트래픽을 96% 절감</b>했고, 이후
                      트래픽으로 인한 서버 증설은 0건입니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  배포 속도 개선으로 팀 대기 시간 단축
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      배포가 평균 6~8분, 길게는 17분까지 걸려 QA 확인과 개발
                      사이클에 병목이 생겼습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      빌드 단계별로 시간을 측정해, 실행될 일이 없는 arm64
                      아키텍처 빌드와 같은 커밋의 중복 빌드를 제거하고{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/nextjs-deploy-optimization"
                        className="text-zinc-300 underline"
                      >
                        이미지 경량화와 빌드 캐시 최적화
                      </Link>
                      를 적용했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      배포 시간을 <b>6~8분에서 3분대로 단축</b>했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  디자인 시스템 도입 및 AI 개발 환경 구축
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      기존 디자인 시스템이 앱 팀에 맞춰져 있어, 웹에서는 서비스
                      레포마다 파운데이션과 컴포넌트를 매번 직접 만들어야
                      했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      운영 중인 서비스에 영향이 없도록{" "}
                      <b>디자인 토큰, 단순 컴포넌트, 복합 컴포넌트</b> 순으로
                      웹용 디자인 시스템을 단계적으로 도입했습니다. 나아가 Figma
                      Code Connect로 디자인과 코드 컴포넌트를 연결해, Figma
                      MCP와 AI로 개발할 때도 디자인 시스템 규칙에 맞는
                      컴포넌트를 자동으로 가져오게 만들었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      서비스 레포마다 파운데이션을 다시 만드는 작업이 사라졌고,
                      AI가 생성한 화면도 디자인 시스템에 정의된 컴포넌트로
                      구성되어 <b>일관된 UI</b>를 빠르게 만들 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  Figma 아이콘 자동 반영 파이프라인 구축
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      디자이너가 Figma에서 아이콘을 수정할 때마다 Asana
                      태스크로 앱·웹 개발자에게 각각 요청했습니다. 개발자가
                      수작업으로 옮기고 디자이너가 다시 컨펌하는 과정이 매주
                      플랫폼 수만큼 반복되었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      매주 Figma를 기준으로 변경된 아이콘만 감지해{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/figma-icon-auto-sync"
                        className="text-zinc-300 underline"
                      >
                        자동으로 PR을 생성하는 파이프라인
                      </Link>
                      을 구축했습니다. 일시적인 네트워크 실패를 아이콘 삭제로
                      오판하지 않도록 하는 등 무인 실행 환경에 필요한 안전장치도
                      함께 설계했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      매주 반복되던 요청 태스크 등록, 수작업 반영, 컨펌 과정이
                      사라졌습니다. 개발자는 자동 생성된 PR을 리뷰하고 머지하는
                      일만 남아{" "}
                      <b>아이콘 반영에 드는 확인과 소통 비용을 크게 절감</b>했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  웹집사 MCP로 온보딩·협업 비용 절감
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      신규 입사자나 타 팀원이 웹 코드베이스를 파악할 때마다
                      담당자에게 직접 물어야 해서, 질문하는 쪽과 답하는 쪽 모두
                      작업을 중단해야 했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      기존 iOS·Android·Server MCP와 연동해, 자연어로 질문하면
                      웹·앱·서버의 관계를 한 번에 파악할 수 있는{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/web-butler-mcp"
                        className="text-zinc-300 underline"
                      >
                        '웹집사 MCP'
                      </Link>
                      를 개발했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      타 팀원이 웹 담당자를 거치지 않고 직접 코드 구조를
                      확인하게 되어 '이거 어디 있어요?' 같은 질문이 현저히
                      줄었고, 신규 입사자의 온보딩 시간도 단축되었습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  팀 코드 컨벤션 표준화 및 AI 기반 자동화
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      팀원들이 Cursor, Claude Code 등 서로 다른 AI 도구를 쓰면서
                      생성되는 코드 스타일이 제각각이었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      모든 AI 도구가 참조하는 통합 컨벤션 문서 Agent.md 작성을
                      주도하고, 합의된 규칙이 개발 중에 자동으로 검증되도록
                      구성했습니다. 여기에 누가 실행하든 동일한 품질의 결과물이
                      나오는 팀 전용 AI 커맨드도 설계했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      PR 리뷰가 스타일 논의에서 벗어나, 리뷰어가{" "}
                      <b>비즈니스 로직과 설계에 집중</b>하게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  개발 태스크 관리 자동화
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      태스크 진행 상태를 매번 Slack이나 구두로 공유해야 해서,
                      협업하는 팀원들과 상황을 맞추는 데 불필요한 시간이
                      들었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      팀의 태스크 관리 툴인 Asana와 개발 프로세스를 연동해,
                      개발자가 PR을 등록하거나 배포하면 해당 태스크의 웹 개발
                      진행 단계와 배포 완료 상황이 자동으로 기록되도록
                      만들었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      팀원들이 별도 공유 없이 태스크만 보고 진행 상황을 파악할
                      수 있게 되어, 개발자가 상태 공유에 시간을 쓰지 않고{" "}
                      <b>개발에만 집중</b>할 수 있는 환경을 만들었습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  토스 미니앱 예외 UX 설계 및 패턴 추상화
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      프로젝트 초기에 네트워크 끊김, API 지연·실패, 웹뷰
                      히스토리 처리 등 예외 상황의 UX가 정의되어 있지
                      않았습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      예외 상황별 UI를 디자이너와 기획자에게 제안하고, 화면마다
                      반복되던 토스 웹뷰의 뒤로가기 처리를 하나의 공통 훅으로
                      묶었습니다. 또한 수동 업로드에 의존하던 배포 과정을
                      개선하도록 앱인토스팀에 CLI 기반 배포 자동화를 제안했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      예외 상황에서도 사용자가 <b>이탈 없이 서비스를 이어갈</b>
                      수 있게 했고, 신규 화면은 공통 훅을 호출하는 것만으로 예외
                      처리를 마칠 수 있게 되었습니다.
                    </p>
                  </div>
                </div>
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

            <div className="space-y-8 sm:space-y-10">
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  글로벌 서비스를 위한 다국어 시스템 구축
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      글로벌 유저 대응을 위한{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/global-language"
                        className="text-zinc-300 underline"
                      >
                        다국어
                      </Link>{" "}
                      지원 과정에서, 번역 문구가 바뀔 때마다 개발자가 직접
                      코드에 반영해야 했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      next-i18next와 Google Sheets를 연동한 자동화 시스템을
                      제안·구축하고, Google Sheets의 번역 데이터를 JSON으로
                      변환하는 스크립트를 개발해 빌드 프로세스에 통합했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      기획자와 디자이너가 Google Sheets에서 직접 번역을 수정하고
                      배포 시 최신 번역이 자동으로 반영되어, 번역 수정에
                      개발자가 개입하는 일이 없어졌습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  모듈 기반 결제 시스템 설계 및 구현
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      결제 수단이 서로 얽혀 있어, 새로운 결제 방식을 추가할
                      때마다 기존 결제 로직을 함께 수정해야 했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      웹뷰 결제 시스템을 결제 수단별로{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/payment-system-modularization"
                        className="text-zinc-300 underline"
                      >
                        모듈화
                      </Link>
                      해 카드·계좌이체·간편결제를 독립 모듈로 개발하고, Jest
                      단위 테스트로 각 모듈의 안정성을 검증했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      새로운 결제 수단을 추가할 때 기존 코드 수정 없이 확장할 수
                      있는 구조를 갖췄습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  Next.js 기반 어드민 시스템 마이그레이션
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      기존 Refine 프레임워크는 독자적인 컨벤션 때문에 수정
                      작업마다 학습 비용이 발생했고, 다른 프로젝트와 기술 스택이
                      달라 코드를 재사용할 수도 없었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      팀 전체가 동일한 기술 스택으로 협업할 수 있도록 Next.js로
                      마이그레이션을 진행했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      기존 프로젝트의 컴포넌트와 유틸을 재사용할 수 있게 되었고,
                      어떤 팀원이든 별도 학습 없이 바로 어드민 수정 작업에
                      투입될 수 있는 환경을 만들었습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  배포 프로세스 최적화
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      어드민 시스템의 빌드 시간이 6분에 달해, 하루 평균 7~8회
                      배포 시 45분 이상을 대기해야 했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Docker 멀티 스테이지 빌드를 도입해 불필요한 의존성을
                      제거하고, 이미지 크기를 1GB에서 60MB로 94% 경량화했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      빌드 시간을 6분에서 2분으로 단축해 하루 대기 시간을 30분
                      이상 줄였고, 팀원들이 배포를 기다리는 대신 다음 작업을
                      바로 시작할 수 있게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  공연 티켓 오픈 트래픽을 분산하는 대기룸 시스템 구축
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      인기 공연 티켓 오픈 시 10만 명이 동시에 좌석 선택
                      페이지로 몰려, 화면 멈춤과 결제 실패가 발생했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      WebSocket 기반{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/waiting-room"
                        className="text-zinc-300 underline"
                      >
                        대기룸
                      </Link>{" "}
                      시스템을 구현해 순차 입장과 실시간 대기 정보를
                      제공했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      동시 접속자 10만 명 규모의 티켓 오픈에서도 서비스를
                      안정적으로 운영할 수 있게 되었습니다.
                    </p>
                  </div>
                </div>
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

            <div className="space-y-8 sm:space-y-10">
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  Next.js 아키텍처 리팩토링을 통한 협업 효율성 개선
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      프로젝트 구조에 일관성이 없어, 협업할 때 코드의 위치와
                      역할을 설명하는 데 많은 시간이 들었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      계층별 책임 분리(pages, templates, features, shared)와
                      ESLint 단방향 의존성 참조 규칙으로{" "}
                      <Link
                        target="_blank"
                        href="https://free-ko.github.io/new-architecture/"
                        className="text-zinc-300 underline"
                      >
                        아키텍처
                      </Link>
                      를 재설계해 코드 응집성을 크게 높였습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      팀원들이 코드를 파악하는 시간과 구조를 설명하는 소통이
                      줄어, 유지보수하기 쉬운 코드베이스를 만들었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  콘텐츠 플랫폼 검색 노출 및 공유 시스템 개선
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      콘텐츠 플랫폼의 검색 엔진 노출이 부족했고, SNS 공유 기능이
                      여러 화면에서 반복적으로 구현되고 있었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      검색 노출을 위해{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/apply-articlejsonId"
                        className="text-zinc-300 underline"
                      >
                        구조화된 데이터
                      </Link>
                      를 적용하고, 반복되던 SNS{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/3rd-party-management"
                        className="text-zinc-300 underline"
                      >
                        공유 기능
                      </Link>
                      을 재사용 가능한 모듈로 개발했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      콘텐츠가 검색 결과에 구조화된 형태로 노출되고, 공유 기능은
                      한 곳만 수정하면 모든 화면에 반영되도록 만들었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  외부 라이브러리 커스터마이징을 통한 성능 개선
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      서비스에서 사용하던 React-Search-Autocomplete가 한 글자를
                      입력할 때마다 3~4회 리렌더링되어, 검색 입력이 눈에 띄게
                      지연되었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      증상을 우회하지 않고 원인을 제거하기 위해{" "}
                      <Link
                        target="_blank"
                        href="https://kay-blog-v2.vercel.app/docs/library-customize"
                        className="text-zinc-300 underline"
                      >
                        라이브러리를 분석하고 자체 컴포넌트
                      </Link>
                      로 재구축해, 중복 상태 관리 로직을 제거하고 리렌더링을
                      최소화했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      글자당 리렌더링을 3~4회에서 1회로 줄여 입력 지연을
                      해소했고, 단순한 API를 제공해 팀원들이 내부 구현을 몰라도
                      검색 컴포넌트를 쓸 수 있게 했습니다.
                    </p>
                  </div>
                </div>
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

            <div className="space-y-8 sm:space-y-10">
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=net.epicmobile.readybaby&pli=1"
                    className="text-zinc-300 underline"
                  >
                    레디베이비
                  </Link>{" "}
                  앱 성능 최적화
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      JavaScript로만 작성된 프로젝트에서 런타임 에러가 잦았고,
                      앱 용량이 91MB에 달해 다운로드 중 설치를 포기하는
                      사용자가 있었습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      TypeScript를 도입해 코드 품질을 높이고, 중복 코드
                      제거·이미지 최적화·컴포넌트 리팩토링을 진행했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      앱 용량을 91MB에서 38MB로 58% 줄여 초기 로딩 속도를
                      개선했고, 타입 검사로 런타임 에러를 줄여 유지보수성을
                      높였습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3 text-sm sm:text-base">
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=net.epicmobile.hometips"
                    className="text-zinc-300 underline"
                  >
                    홈팁스
                  </Link>{" "}
                  지원금 검색 서비스 개발
                </h4>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded px-1.5 py-0.5 h-fit">
                      문제
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      복잡하고 분산된 정부 지원금 정보로 사용자들이 혜택을
                      놓쳤고, 검색 입력 시마다 과도한 API 호출이 발생했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-0.5 h-fit">
                      해결
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      맞춤형 지원금 검색 기능을 개발하고, Debounce 기법으로
                      과도한 API 호출을 제어했습니다.
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 h-fit">
                      성과
                    </span>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      사용자가 자신에게 맞는 지원금을 쉽게 찾을 수 있게 했고,
                      입력 중 발생하던 불필요한 API 호출을 제거해 서버 부하를
                      줄였습니다.
                    </p>
                  </div>
                </div>
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
                  : 《쏙쏙 들어오는 함수형 코딩》 책 기반 실습
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
