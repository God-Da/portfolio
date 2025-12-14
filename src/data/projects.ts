export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    images?: string[];
    technologies: string[];
    github?: string;
    live?: string;
    featured: boolean;
    longDescription?: string;
    role?: string;
    duration?: string;
    team?: string;
    challenges?: string[];
    solutions?: string[];
    features?: string[];
    architecture?: string;
}

export const projects: Project[] = [
    {
        id: "itda",
        title: "ITDA 잇다",
        description: "일상에 쉼을, 재능에 가치를, 사람에 철학을 잇다\n멘토-멘티 재능나눔 중개 플랫폼",
        image: "/itda/main.png",
        technologies: [
            "React",
            "Spring Boot",
            "AWS S3/EC2/RDS",
            "MySQL",
            "구글 API",
            "카카오 API",
        ],
        github: "#",
        live: "#",
        featured: true,
        longDescription:
            "ITDA 잇다는 멘토와 멘티를 연결하는 재능나눔 플랫폼입니다. 사용자들이 자신의 재능을 공유하고, 필요한 재능을 찾을 수 있는 서비스를 제공합니다.",
        role: "팀장, Full-Stack Developer",
        duration: "2024.03 - 2024.06 (약 3개월)",
        team: "강보은: 팀장, 프론트, 백엔드\n최재현: 프론트, 백엔드\n강다연: 프론트, 백엔드",
        challenges: [
            "EC2와 RDS 보안 그룹 설정 문제로 연결 오류 발생",
            "S3 업로드 시 CORS 오류 발생",
            "카카오 API 토큰 문제로 특정 사용자에서 로그인 실패",
            "DB 구조 설계 및 외래 키 관계 설정 오류",
        ],
        solutions: [
            "RDS 보안 그룹에 EC2 인바운드 규칙 추가 (포트 3306 허용)",
            "S3 CORS 설정에 허용 규칙 추가 (Origin: *, Methods: PUT/POST/GET)",
            "redirect URI 정확히 일치시키고 인코딩 문제 해결 (UTF-8 설정)",
            "DB 구조를 직접 설계하며 외래 키와 관계 설정 오류 수정",
        ],
        features: [
            "멘토/멘티 매칭 시스템",
            "카카오 로그인 API 연동 (OAuth 2.0)",
            "카카오 지도 API를 통한 클래스 위치 확인",
            "Google Calendar API를 통한 클래스 신청 시 자동 일정 등록",
            "S3를 활용한 프로필 이미지 업로드 및 저장",
            "게시판, 댓글, 리뷰 시스템",
        ],
        architecture: `프론트엔드: React (컴포넌트 기반 구조, React Router, Axios, Tailwind CSS)
백엔드: Spring Boot (MVC 구조, 세션 기반 로그인, DTO/엔티티 분리)
클라우드: AWS EC2 (서버 구동), S3 (이미지 저장), RDS MySQL (데이터베이스)
외부 API: 카카오 로그인/지도 API, 구글 캘린더 API`,
    },
    {
        id: "youth-booth",
        title: "Youth Booth",
        description: "EXPO 출품작\n나의 청춘을 기록하는 포토부스",
        image: "/Youth/Main.png",
        technologies: ["React", "Python", "Flask", "AWS S3/EC2", "PIL/Pillow", "ReportLab"],
        github: "#",
        live: "#",
        featured: true,
        longDescription:
            "Youth Booth는 2025 신구대학교 EXPO 컴퓨터소프트웨어과 출품작으로, 포토부스 애플리케이션입니다. 사용자가 카메라로 사진을 촬영하고, 다양한 프레임을 선택하여 4컷 사진을 합성한 후, QR 코드를 통해 최종 이미지를 다운로드할 수 있는 풀스택 웹 애플리케이션입니다.",
        role: "풀스택 개발자 (백엔드 위주)",
        duration: "2024.09 - 2025.01",
        challenges: [
            "AWS S3 접근 권한 문제 - Access Key/Secret Key 사용 불가, IAM Role만 사용 가능",
            "S3 인덱스 계산 오류 - 파일 삭제 시 인덱스 중복 발생",
            "프레임 좌표 하드코딩 문제 - 프레임 크기 변경 시 코드 수정 필요",
            "CORS 에러 - 프론트엔드와 백엔드가 다른 포트에서 실행",
            "이미지 합성 시 투명도 처리 문제",
            "PDF 인쇄 크기 정확도 문제",
        ],
        solutions: [
            "EC2 인스턴스에 IAM Role 연결하여 자동 인증, 로컬 개발 환경 대응을 위한 폴백 메커니즘 구현",
            "정규식 기반 숫자 추출 및 최대값 기반 계산으로 중복 없는 인덱스 생성",
            "비율 기반 좌표 시스템 도입 및 런타임에 픽셀 값 계산",
            "Flask-CORS 라이브러리 사용하여 모든 도메인 허용 설정",
            "RGBA 모드 사용 및 alpha_composite() 메서드로 알파 채널 고려한 합성",
            "비율 계산 및 여백 추가로 정확한 4x6 인치 크기 PDF 생성",
        ],
        features: [
            "카메라로 사진 촬영 및 4컷 사진 합성",
            "다양한 프레임 선택 및 흑백 변환 옵션",
            "QR 코드를 통한 최종 이미지 다운로드",
            "4x6 인치 인화지 크기의 PDF 생성",
            "하이브리드 스토리지 전략 (로컬 + S3)",
            "IAM Role 기반 인증으로 보안 강화",
        ],
        architecture: `계층형 아키텍처:
- Presentation Layer: React 프론트엔드
- API Layer: Flask REST API (Blueprint 기반 모듈화)
- Business Logic Layer: Utils 모듈 (이미지 처리, 파일 관리, S3 연동)
- Data Layer: 로컬 파일 시스템 + AWS S3

모듈화 설계:
- capture_route.py: 사진 캡처 및 저장
- final_route.py: 이미지 합성 및 최종 처리
- print_route.py: PDF 생성 및 인쇄

하이브리드 스토리지:
- 로컬 저장소 (EC2): 임시 파일 및 빠른 접근이 필요한 파일
- S3 클라우드 저장소: 영구 저장 및 외부 접근이 필요한 파일`,
    },
    {
        id: "easy-led",
        title: "쉬운LED",
        description:
            "핸드폰 사용이 어려운 당신에게, 노년층을 위한 쉬운 LED",
        image: "/easyLED/스토어 등록 그래픽이미지.png",
        technologies: ["Flutter", "Dart"],
        github: "https://github.com/God-Da/easyLED",
        live: "#",
        featured: false,
        longDescription:
            "쉬운LED는 노년층을 위한 사용하기 쉬운 LED 제어 앱입니다. 큰 버튼과 직관적인 UI로 누구나 쉽게 사용할 수 있습니다.",
        role: "Mobile Developer",
        duration: "2023.06 - 2023.08",
        features: [
            "간단한 LED 제어",
            "큰 글씨와 버튼으로 접근성 향상",
            "음성 안내 기능",
            "직관적인 UI/UX",
        ],
    },
    {
        id: "walking-dog",
        title: "산책할개",
        description: "소중한 댕댕이에게 미세먼지 없고 화창한 산책은 필수!",
        image: "/walkingDog/스플래쉬 화면2.png",
        technologies: [
            "React",
            "Spring Boot",
            "Spring Data JPA",
            "MySQL",
            "공공데이터 API",
            "카카오맵 API",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
        featured: false,
        longDescription:
            "산책할개는 강아지와 함께하는 안전한 산책을 위한 위치 기반 날씨 및 대기질 정보 제공 웹 애플리케이션입니다. 카카오맵을 통해 위치를 선택하고, 공공데이터포탈 API를 연동하여 실시간 날씨와 대기질 정보를 제공합니다.",
        role: "Full-Stack Developer",
        duration: "2023.03 - 2023.05",
        challenges: [
            "CORS 에러 문제 - 프론트엔드(3000)에서 백엔드(8080) API 호출 시 CORS 에러 발생",
            "세션 인증 문제 - 로그인 후 API 요청 시 401 Unauthorized 에러",
            "카카오맵 스크립트 로딩 타이밍 문제 - 지도가 렌더링되지 않거나 kakao is not defined 에러",
            "역지오코딩 주소 표시 문제 - 마이페이지에서 좌표 형식으로 표시됨",
            "Spring Security 의존성 누락 문제",
            "좌표 변환 문제 - 공공데이터포탈 API의 TM 좌표계와 카카오맵의 WGS84 좌표계 불일치",
        ],
        solutions: [
            "WebConfig에서 CORS 설정 추가 (allowedOrigins, allowCredentials)",
            "프론트엔드에서 credentials: 'include' 설정 및 백엔드 @CrossOrigin 애노테이션 추가",
            "useKakaoMap Hook에서 스크립트 로딩 대기 로직 구현 및 재시도 메커니즘 추가",
            "마이페이지 로드 시 역지오코딩을 통해 좌표를 상세 주소로 변환",
            "build.gradle에 Spring Security 의존성 추가 및 SecurityConfig 설정",
            "Proj4j 라이브러리를 활용한 WGS84 ↔ TM 좌표 변환 구현",
        ],
        features: [
            "카카오맵 기반 위치 선택 및 실시간 산책 적합도 조회",
            "공공데이터포탈 API 연동 (날씨, 대기질 정보)",
            "사용자 인증 및 개인화 (회원가입, 로그인, 찜하기, 리뷰)",
            "반응형 웹 디자인 (Tailwind CSS)",
            "좌표 기반 찜 및 리뷰 시스템",
        ],
        architecture: `레이어드 아키텍처:
- Controller Layer: REST API 엔드포인트
- Service Layer: 비즈니스 로직 처리
- Repository Layer: JPA 기반 데이터베이스 접근
- Entity Layer: JPA 엔티티

프론트엔드 아키텍처:
- 컴포넌트 기반 구조
- Context API를 통한 전역 상태 관리
- Custom Hooks로 로직 재사용`,
    },
    {
        id: "emergency-toilet",
        title: "급똥지도",
        description: "화장실이 급한 그때 급똥지도",
        image: "/emergencyToilet/1.png",
        technologies: [
            "React",
            "Spring Boot",
            "Spring Data JPA",
            "Spring Security",
            "MySQL",
            "공공데이터 API",
            "카카오맵 API",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
        featured: false,
        longDescription:
            "급똥지도는 공공데이터포털의 공공화장실 개방 정보를 활용하여 사용자에게 가까운 공공화장실을 찾아주는 웹 기반 서비스입니다. 지도 기반 UI를 통해 화장실 위치를 시각화하고, 사용자 리뷰 및 별점, 찜 기능 등을 제공하는 생활 밀착형 서비스입니다.",
        role: "Full-Stack Developer",
        duration: "2023.01 - 2023.02",
        challenges: [
            "toilets.map is not a function 에러 - API 응답이 배열이 아닌 HTML 로그인 페이지로 반환",
            "CORS Policy 에러 - Access-Control-Allow-Credentials 헤더 관련 CORS 에러",
            "403 Forbidden 에러 - 로그인 후 찜 버튼 클릭 시 403 에러 발생",
            "ReviewService 컴파일 에러 - toiletRepository를 찾을 수 없음",
            "검색 결과가 표시되지 않음 - 검색 쿼리가 name 필드를 검색하지 않음",
            "MyReviews 페이지에서 리뷰가 표시되지 않음",
        ],
        solutions: [
            "Spring Security 설정에서 공개 API 엔드포인트를 permitAll()로 설정, 프론트엔드에서 배열 체크 추가",
            "SecurityConfig에서 allowCredentials(true) 설정 및 프론트엔드 Axios에 withCredentials 설정",
            "AuthController에서 Spring Security Authentication 객체를 세션에 저장",
            "ReviewService에 @Autowired로 ToiletRepository 주입",
            "검색 쿼리에 name 필드 추가 및 NULL 값 처리",
            "Spring Security Authentication 세션 저장 문제 해결",
        ],
        features: [
            "지도 기반 화장실 검색 및 위치 표시",
            "주소/이름 기반 검색 기능",
            "리뷰 및 별점 시스템",
            "찜(북마크) 기능",
            "공지사항 및 Q&A 게시판",
            "회원가입/로그인 (세션 기반 인증)",
            "관리자 기능 (공지사항 작성, Q&A 답변)",
        ],
        architecture: `계층형 아키텍처:
- Controller Layer: REST API 컨트롤러
- Service Layer: 비즈니스 로직 처리 계층
- Repository Layer: JPA 기반 데이터베이스 접근
- Security Layer: Spring Security (세션 기반 인증, BCrypt)

데이터베이스:
- User, Toilet, Review, Bookmark, Notice, Qna, Story 엔티티
- JPA를 통한 관계형 데이터베이스 매핑`,
    },
];

