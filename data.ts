
import { Coach, Branch, NewsItem, ChartData } from './types';

export const COACHES: Coach[] = [
  {
    id: '1',
    name: '김철수 코치',
    position: '공격 전담 (WS/OP)',
    team: '전 현대캐피탈 스카이워커스',
    experience: ['V-리그 득점왕 2회', '국가대표 주전 공격수'],
    imageUrl: 'https://picsum.photos/400/500?random=1'
  },
  {
    id: '2',
    name: '이영희 코치',
    position: '세터 마스터 (S)',
    team: '전 흥국생명 핑크스파이더스',
    experience: ['베스트 세터상 3회 수상', '전술 분석 전문가'],
    imageUrl: 'https://picsum.photos/400/500?random=2'
  },
  {
    id: '3',
    name: '박민수 코치',
    position: '수비/리베로 (L)',
    team: '전 삼성화재 블루팡스',
    experience: ['수비 전담 코치 10년', '데이터 기반 리시브 교정'],
    imageUrl: 'https://picsum.photos/400/500?random=3'
  }
];

export const BRANCHES: Branch[] = [
  { name: '본점(배구&웨이트)', type: '종합', coordinates: { lat: 37.5, lng: 127.0 } },
  { name: '신촌(웨이트)', type: '피트니스', coordinates: { lat: 37.55, lng: 126.93 } },
  { name: '정동(배구)', type: '기술전용', coordinates: { lat: 37.56, lng: 126.97 } },
  { name: '김포(배구)', type: '기술전용', coordinates: { lat: 37.6, lng: 126.7 } },
  { name: '목동(배구&웨이트)', type: '종합', coordinates: { lat: 37.53, lng: 126.86 } },
  { name: '아현(배구)', type: '기술전용', coordinates: { lat: 37.55, lng: 126.95 } },
  { name: '이대점', type: '피트니스', coordinates: { lat: 37.56, lng: 126.94 } }
];

export const PERFORMANCE_DATA: ChartData[] = [
  { month: '1월', standard: 65, aav: 70 },
  { month: '2월', standard: 68, aav: 78 },
  { month: '3월', standard: 64, aav: 85 },
  { month: '4월', standard: 67, aav: 92 },
  { month: '5월', standard: 70, aav: 98 }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    title: "선수 퍼스널 브랜딩의 중요성",
    date: "2024.03.12",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/600?random=10"
  },
  {
    title: "3D 모션 분석을 통한 점프력 향상",
    date: "2024.04.01",
    category: "Analysis",
    imageUrl: "https://picsum.photos/800/600?random=11"
  },
  {
    title: "2025 FA 시장 전략 리포트",
    date: "2024.09.14",
    category: "Strategy",
    imageUrl: "https://picsum.photos/800/600?random=12"
  }
];
