const QUESTION_DATA = {
  FRONT_END: [
    "CSRF나 XSS 공격을 막는 방법은?",
    "async/await에 대해 설명해보세요.",
    "브라우저 렌더링 원리에 대해서 설명해보세요.",
    "호이스팅에 대해 설명해보세요.",
    "동등 연산자와 일치 연산자의 차이는 무엇인가요?",
    "클래스형 컴포넌트와 함수형 컴포넌트의 차이는 무엇일까요?",
    "TDD란 무엇인가요?",
    "Flex와 Grid의 차이점에 대해서 설명해보세요.",
    "MVVM패턴과 Flux패턴의 차이점에 대해서 설명해보세요.",
    "비동기 함수에 대해서 설명해 보세요.",
    "Flexbox에 대해 설명해주세요.",
    "CSS in JS의 장단점에 대해 설명해주세요.",
    "변수 선언, 초기화, 할당의 차이점에 대해 설명해주세요.",
    "이벤트 버블링과 캡처링에 대해 설명해주세요.",
    "깊은 복사와 얕은 복사에 대해 설명해주세요.",
    "Type과 Interface의 차이점에 대해 설명해주세요.",
    "클래스의 Public, Private, Protected에 대해 설명해주세요.",
    "Context API에 대해 설명해주세요.",
    "Redux의 3대 원칙에 대해 설명해주세요.",
    "Recoil에서 Loadable의 개념에 대해 설명해주세요.",
    "Redux와 Recoil에 대해 비교 설명해주세요.",
    "ESLint와 Prettier에 대해 설명해주세요.",
    "XSS와 CSRF에 대해 설명해주세요.",
    "HTTP에 대해 설명해주세요.",
    "시맨틱 마크업에 대해 설명해주세요.",
    "script 태그에서 Async와 Defer의 차이에 대해 설명해주세요.",
    "가상 클래스에 대해 설명해주세요.",
    "데이터 타입에 대해 설명해주세요.",
  ],
  BACK_END: [
    "백엔드와 프론트엔드의 주요 차이점은 무엇인가요?",
    "RESTful API란 무엇인가요?",
    "데이터베이스 인덱스는 어떻게 동작하나요?",
    "트랜잭션이란 무엇이며, 왜 중요한가요?",
    "SQL과 NoSQL 데이터베이스의 차이는 무엇인가요?",
    "세션과 쿠키에 대해 설명해주세요.",
    "JWT(JSON Web Token)의 작동 방식은 무엇인가요?",
    "캐시의 개념과 장점은 무엇인가요?",
    "REST와 SOAP의 차이점은 무엇인가요?",
    "웹 애플리케이션 보안에 대해 어떤 경험이 있나요?",
    "HTTP와 HTTPS의 차이는 무엇인가요?",
    "동기와 비동기 프로그래밍의 차이점은 무엇인가요?",
    "동시성과 병렬성의 차이점은 무엇인가요?",
    "서버리스 아키텍처(Serverless Architecture)에 대해 설명해주세요.",
    "마이크로서비스 아키텍처(Microservices Architecture)란 무엇인가요?",
    "로드 밸런싱(Load Balancing)의 개념과 종류는 무엇인가요?",
    "데이터베이스 복제(Replication)에 대해 설명해주세요.",
    "인메모리 캐싱(In-Memory Caching)이 무엇이고 어떻게 작동하나요?",
    "자동화 테스트와 테스트 주도 개발(TDD)에 대해 어떻게 생각하시나요?",
    "REST API 설계 원칙에는 어떤 것들이 있나요?",
    "ORM(Object-Relational Mapping)이란 무엇인가요?",
    "빅 데이터(Big Data)와 관련된 기술과 도구에 대해 어떻게 알고 있나요?",
    "블록체인(Blockchain)의 작동 원리를 설명해주세요.",
    "데이터베이스 최적화와 쿼리 성능 튜닝에 대해 어떻게 접근하시나요?",
    "DDoS 공격에 대비한 대책을 어떻게 수립하고 있나요?",
    "보안을 고려한 웹 애플리케이션 개발에 대해 어떤 경험이 있나요?",
    "CI/CD(Continuous Integration/Continuous Deployment)에 대해 설명해주세요.",
    "로깅(Logging)과 모니터링(Monitoring)의 중요성은 무엇인가요?",
    "개발 프로세스에서 코드 리뷰(Code Review)의 역할은 무엇인가요?",
    "소프트웨어 개발 생명주기(SDLC)에 대해 어떻게 이해하고 있나요?",
    "개발 프로젝트에서 문제 해결을 위해 어떤 접근 방식을 사용하나요?",
    "데이터베이스 트랜잭션 격리 수준(Isolation Level)에 대해 설명해주세요.",
    "클라우드 컴퓨팅의 장점과 보안에 대해 어떻게 생각하시나요?",
    "안정적인 백엔드 시스템을 구축하기 위해 고려해야 할 요소는 무엇인가요?",
    "RESTful API에서 자원(Resource)과 컬렉션(Collection)의 차이점은 무엇인가요?",
    "효율적인 데이터베이스 쿼리를 작성하기 위한 팁은 무엇인가요?",
    "백엔드 개발에서 보안 취약점에 대해 어떤 경험이 있나요?",
    "성능 모니터링 도구나 로깅 도구를 사용한 경험을 말해주세요.",
    "백엔드 개발에서의 스케일링과 부하 분산에 대한 고민과 해결 방법을 설명해주세요.",
    "개발자로서 성장하기 위해 어떤 노력을 하고 있는지 알려주세요.",
  ],
  PRODUCT_DESIGNER: [
    "디자인 프로세스를 설명해주세요",
    "팀 프로젝트에서의 역할과 협업 경험에 대해 이야기해주세요",
    "어떤 도구나 소프트웨어를 사용하여 디자인 작업을 하나요? 어떤 이유로 선택했나요?",
    "어떤 디자인 작업에 가장 자신감을 가지고 있나요? 왜 그 작업에 대해 자신감이 있는지 설명해주세요",
    "어떻게 피드백을 수용하고 반영하는 방법을 사용하나요?",
    "어떤 디자이너에게 영감을 받거나 존경하나요? 왜 그런 디자이너를 선택했나요?",
    "디자인 작업을 위해 어떻게 자신을 계속해서 발전시키나요?",
    "어떤 디자인 프로젝트를 성공적으로 완료한 경험이 있나요? 성공의 기준은 무엇이었나요?",
    "협업 중에 의견 충돌이 있었던 경험이 있나요? 어떻게 처리했나요?",
    "어떻게 창의적인 아이디어를 발굴하고 개발하나요?",
    "새로운 디자인 툴이나 기술에 대한 학습과 적용 경험에 대해 이야기해주세요",
    "사용자 경험 (UX)을 개선하기 위해 어떤 접근 방식을 사용하나요?",
    "디자인 작업에 있어서 가장 중요한 측면은 무엇이라고 생각하나요?",
    "프로젝트의 제약 사항이나 일정에 맞추기 위해 어떤 조치를 취하나요?",
    "어떤 프로젝트에서 실패한 경험이 있나요? 실패의 원인과 그로 인해 배운 점에 대해 이야기해주세요",
    "디자인 작업을 할 때, 어떻게 사용자들의 니즈와 요구사항을 고려하나요?",
    "어떤 디자인 작업에서 가장 큰 성취감을 느꼈나요? 왜 그 작업에서 성취감을 느꼈는지 설명해주세요",
    "어떤 디자인 프로젝트에서 독창성을 발휘했던 경험이 있나요? 어떤 아이디어나 해결책을 도출했는지 설명해주세요",
    "어떤 디자인 작업에서 고객의 요구사항과 니즈를 만족시키는 데 성공한 경험이 있나요? 어떻게 성공했는지 설명해주세요",
    "어떤 디자인 프로젝트에서 실험적인 요소나 새로운 접근 방식을 도입했던 경험이 있나요? 결과는 어땠나요?",
    "어떤 디자인 작업을 할 때, 사용자들의 피드백을 어떻게 수집하고 분석하나요?",
    "어떤 디자인 작업에서 기획과 실행의 간극을 해결한 경험이 있나요? 떻게 해결했는지 설명해주세요",
    "디자인 작업을 하면서 가장 큰 도전은 무엇이었나요? 그 도전을 어떻게 극복했나요?",
    "다양한 플랫폼에 맞추어 디자인을 하는 경험이 있나요? 각 플랫폼의 차이와 고려해야 할 사항에 대해 이야기해주세요",
    "디자인 작업을 위해 필요한 자료 조사와 리서치 방법에 대해 설명해주세요",
    "어떤 디자인 프로젝트에서 팀원들과의 협업에서 가장 만족스러웠던 경험이 있나요? 어떤 점이 좋았는지 설명해주세요",
    "프로젝트의 목표와 요구사항을 이해하고 달성하기 위해 어떤 접근 방식을 사용하나요?",
    "디자인 작업에서 실수한 적이 있나요? 어떤 실수를 했고, 그로 인해 어떤 교훈을 얻었나요?",
    "다른 디자이너와의 비교에서 어떤 측면에서 우수하다고 생각하나요?",
    "디자인 작업에서 일어날 수 있는 윤리적인 문제에 대해 어떻게 대처하나요?",
    "디자인 작업을 할 때, 어떤 기준으로 아이디어를 선정하고 구체화하나요?",
    "디자인 작업에서 예산과 시간 관리는 어떻게 이루어지나요?",
    "디자인 작업에서 어떤 도전적인 과제에 대해 해결책을 찾은 경험이 있나요? 어떻게 문제를 해결했는지 설명해주세요",
    "디자인 작업을 할 때, 자신의 창의성과 개성을 어떻게 발휘하나요?",
  ],
  DEVOPS: [
    "DevOps란 무엇이며 기존 소프트웨어 개발 또는 운영과 어떻게 다릅니까?",
    "DevOps의 주요 이점은 무엇이며 조직을 어떻게 도울 수 있습니까?",
    "DevOps 환경의 핵심 구성 요소는 무엇이며 어떻게 함께 작동합니까?",
    "지속적인 통합이란 무엇이며 DevOps 파이프라인에 어떻게 기여합니까?",
    "지속적인 배포란 무엇이며 지속적인 배포와 어떻게 다릅니까?",
    "코드형 인프라(IaC)란 무엇이며 DevOps를 어떻게 지원합니까?",
    "DevOps에서 사용되는 일반적인 자동화 도구는 무엇이며 어떻게 사용됩니까?",
    "컨테이너화란 무엇이며 DevOps 환경에 어떻게 기여합니까?",
    "모니터링이란 무엇이며 DevOps 성공에 중요한 이유는 무엇입니까?",
    "협업 및 커뮤니케이션이 성공적인 DevOps 사례를 어떻게 지원하며 어떤 도구 또는 방법이 일반적으로 사용됩니까?",
    "DevOps 구현의 성공을 어떻게 측정합니까?",
    "DevOps 환경에서 보안 문제를 어떻게 처리합니까?",
    "DevOps 사례를 Agile 또는 기타 소프트웨어 개발 방법론과 어떻게 통합합니까?",
    "DevOps에서 클라우드 컴퓨팅의 역할은 무엇이며 전체 환경에 어떤 영향을 줍니까?",
    "DevOps 환경에서 인프라를 어떻게 관리하고 확장합니까?",
    "여러 환경(예: 개발, 테스트, 프로덕션)에서 구성 및 배포를 관리하기 위한 몇 가지 전략은 무엇입니까?",
    "DevOps 환경에서 고가용성 및 재해 복구를 달성하기 위한 몇 가지 기술은 무엇입니까?",
    "DevOps 환경에서 규정 요구 사항을 준수하려면 어떻게 해야 합니까?",
    "DevOps 환경에서 성능을 관리하고 최적화하기 위한 모범 사례는 무엇입니까?",
    "특히 여러 팀이 관련된 경우 DevOps 환경에서 변경 관리 및 버전 제어를 어떻게 처리합니까?",
  ],
};

export default QUESTION_DATA;
