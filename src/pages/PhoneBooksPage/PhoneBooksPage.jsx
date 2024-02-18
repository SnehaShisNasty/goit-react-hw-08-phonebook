import { Contact } from 'components/Contacts/Contact';
import { Outlet } from 'react-router-dom';

const PhoneBooksPage = () => {
  return (
    <>
      <Contact></Contact>
      <Outlet></Outlet>
    </>
  );
};

export default PhoneBooksPage;
