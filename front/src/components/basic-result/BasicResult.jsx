import BasicResultForm from './BasicResultForm';
import BasicResultBanner1 from '../common/BasicResultBanner1';
import BasicResultBanner2 from '../common/BasicResultBanner2';
import classes from './BasicResult.module.css';
import { useLocation } from 'react-router-dom';

const BasicResult = () => {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <BasicResultBanner1 />
      </div>
      <div>
        <BasicResultBanner2 results={state[0]} />
      </div>
      <div className={classes.basicform}>
        <BasicResultForm results={state.slice(1)} />
      </div>
    </div>
  );
};

export default BasicResult;
