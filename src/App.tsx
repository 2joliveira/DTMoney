import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

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

      <Modal
        isOpen={isNewTransactionsModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
