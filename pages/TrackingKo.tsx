import React from 'react';
import PageLayoutKo from '../components/PageLayoutKo';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingKo() {
  return (
    <PageLayoutKo
      title="진행 상황 확인 | 필리핀 서류 취득 대행 센터"
      description="추적 번호와 PIN을 입력하여 진행 상황을 확인하고 서류를 업로드할 수 있습니다."
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '진행 상황 확인' }]}
    >
      <TrackingPortal lang="ko" />
    </PageLayoutKo>
  );
}
