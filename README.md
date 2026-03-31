# NEXUS PLAY 🎮

나만의 게임 취향을 분석해서 Steam 전체 카탈로그에서 맞춤 게임을 추천해주는 웹사이트

## 🔥 Steam 실시간 데이터 활성화 방법

GitHub Actions 워크플로우가 포함되어 있어 **매일 자동으로** Steam 데이터를 갱신합니다.

### 최초 1회 수동 실행:
1. GitHub 레포 → **Actions** 탭
2. `Fetch Steam Data` 워크플로우 선택
3. **Run workflow** 버튼 클릭

이후부터는 매일 오전 6시(UTC)에 자동 실행됩니다.

### 데이터가 없을 때:
Steam 실시간 데이터 없이도 내장 게임 241개로 모든 기능이 정상 작동합니다.
