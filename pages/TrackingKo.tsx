import React from 'react';
import PageLayoutKo from '../components/PageLayoutKo';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingKo() {
  return (
    <PageLayoutKo
      title="진행 상황 확인 | 필리핀 서류 취득 대행 센터"
      description="IGRS Inc.에서 보낸 고객 전용 링크로 진행 상황을 안전하게 확인할 수 있습니다."
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '진행 상황 확인' }]}
    >
      <TrackingPortal lang="ko" />
    </PageLayoutKo>
  );
}
