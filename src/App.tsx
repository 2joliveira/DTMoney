import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModal}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
