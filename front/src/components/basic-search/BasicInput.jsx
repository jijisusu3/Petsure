import BasicInputForm from './BasicInputForm';
import classes from './BasicInputForm.module.css';
import Banner from '../common/Banner';

const BasicInput = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="flex_row_center">
        <div className={classes.top_padding}>
          <BasicInputForm />
        </div>
      </div>
    </>
  );
};

export default BasicInput;
