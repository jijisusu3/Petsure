import DetailBanner from '../../components/common/DetailBanner';
import DetailInput from '../../components/detail-search/DetailInput';
export function DetailInputPage() {
  return (
    <div>
      <DetailBanner />
      <div style={{ padding: '70px' }}>
        <DetailInput />
      </div>
    </div>
  );
}
