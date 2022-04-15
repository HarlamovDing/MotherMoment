import './App.scss';
import HomePage from './pages/Home';
import { AuthModal } from './components/Modals/AuthModal';
import { RecoveryModal } from './components/Modals/RecoveryModal';
import { Transition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { ThankYouModal } from './components/Modals/ThankYouModal';
import { RegistrationModal } from './components/Modals/RegistrationModal';
import { RegistrationCompleteModal } from './components/Modals/RegistrationCompleteModal';
import DocumentTitle from 'react-document-title';

function App() {
  const registrationModal = useSelector((state) => state.modals.registrationModal)
  const authModalState = useSelector((state) => state.modals.authModal);
  const recoveryModalState = useSelector((state) => state.modals.recoveryModal);
  const thankYouModalState = useSelector((state) => state.modals.thankYouModal);
  const registrationCompleteState = useSelector((state) => state.modals.registrationCompleteModal);
  
  const defaultStyle = {
    transition: `opacity 200ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };
  
  return (
    <>
      <DocumentTitle title="MotherMoment"></DocumentTitle>
      <HomePage/>
      <Transition
        in={authModalState} 
        timeout={200}
        unmountOnExit
      >
        {
          state => (
            <AuthModal style={{ ...defaultStyle, ...transitionStyles[state] }}/>
          )
        }
      </Transition>
      <Transition
        in={recoveryModalState} 
        timeout={200}
        unmountOnExit
      >
        {
          state => (
            <RecoveryModal style={{ ...defaultStyle, ...transitionStyles[state] }}/>
          )
        }
      </Transition>
      <Transition
        in={thankYouModalState} 
        timeout={200}
        unmountOnExit
      >
        {
          state => (
            <ThankYouModal style={{ ...defaultStyle, ...transitionStyles[state] }}/>
          )
        }
      </Transition>
      <Transition
        in={registrationModal} 
        timeout={200}
        unmountOnExit
      >
        {
          state => (
            <RegistrationModal style={{ ...defaultStyle, ...transitionStyles[state] }}/>
          )
        }
      </Transition>
      <Transition
        in={registrationCompleteState} 
        timeout={200}
        unmountOnExit
      >
        {
          state => (
            <RegistrationCompleteModal style={{ ...defaultStyle, ...transitionStyles[state] }}/>
          )
        }
      </Transition>
    </>
  );
}

export default App;
