import { RotatingLines } from 'react-loader-spinner';
import syles from './loding.module.css';
const Loading = () => {
  return (
    <div className={syles.modal}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#8f7070"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeColor="#8f7070"
      />
    </div>
  );
};

export default Loading;
