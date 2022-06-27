//*Components
import Header from './components/header/Header';
import Appointment from './components/appointment/Appointment';
import Services from './components/services/Services';
import History from './components/history/History';
import Choice from './components/choice/Choice';
import Application from './components/application/Application';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
//*Styles
import './styles/index.scss';

const App = () => {
  return (
    <>
      <Header />
      <Appointment />
      <Services />
      <History />
      <Choice />
      <Application />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
