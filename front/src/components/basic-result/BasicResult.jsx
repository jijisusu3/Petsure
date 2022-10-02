import BasicResultForm from './BasicResultForm';
import BasicResultBanner1 from '../common/BasicResultBanner1';
import BasicResultBanner2 from '../common/BasicResultBanner2';
import classes from './BasicResultForm.module.css';
import { useLocation } from 'react-router-dom';

const BasicResult = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <div>
        <BasicResultBanner1 />
      </div>
      <div>
        <BasicResultBanner2 results={state[0]} />
      </div>
      <div>
        <BasicResultForm results={state.slice(1)} />
      </div>
    </div>

    // <div>{state[0].breed_name}</div>

    // <>
    //   <div>
    //     <BasicResultBanner1 />
    //   </div>
    //   <div className="flex_box">
    //     <BasicResultBanner2 />
    //   </div>
    //   <div>
    //     <div>
    //       <div>
    //         <BasicResultForm />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default BasicResult;
