import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionsModal, setIsNewTransactionsModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModal}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
