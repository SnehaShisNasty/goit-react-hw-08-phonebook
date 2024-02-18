import Notiflix from 'notiflix';

const ErrorMessage = ({ text }) => {
  console.log(text);
  return <>{Notiflix.Notify.failure(`${text}`)}</>;
};
export default ErrorMessage;
