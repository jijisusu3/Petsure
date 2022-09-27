// 상세검색결과
import { InsureCard } from '../../components/detail-result/InsureCard';
import classes from './DetailResult.module.css';
import Sheet from '../../components/common/Sheet';

export function DetailResultPage() {
  // return <SettingsContainer />;
  return (
    <Sheet className={classes.insureCard}>
      <InsureCard />
    </Sheet>
  );
}
