import BasicResultForm from './BasicResultForm';
import BasicResultBanner1 from '../common/BasicResultBanner1';
import BasicResultBanner2 from '../common/BasicResultBanner2';
import classes from './BasicResultForm.module.css';

const BasicResult = () => {
  return (
    <>
      <div>
        <BasicResultBanner1 />
      </div>
      <div className="flex_box">
        <BasicResultBanner2 />
      </div>
      <div>
        <div>
          <div>
            <BasicResultForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicResult;
