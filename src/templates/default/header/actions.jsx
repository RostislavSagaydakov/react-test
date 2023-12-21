import React from "react";
import Modal from 'react-modal';
import TopSearch from "./components/search";
import AccountModalContent from "./components/account-modal";
Modal.setAppElement('#root');
function HeaderActions() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [topSearch, setTopSearch] = React.useState(false)
    const handleTopSearch = () => {
        setTopSearch(topSearch => !topSearch)
    }
    return (
        <ul>
            <li>
                <span className="search-link" onClick={handleTopSearch}>search</span>
                {topSearch && <TopSearch/>}
            </li>
            <li>
                <span className="account-link modal-opener" onClick={openModal}>account</span>
                <Modal
                    htmlOpenClassName={'modal-opener'}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>close</button>
                    <AccountModalContent/>
                </Modal>
            </li>
            <li>
                <span className="minicart">minicart</span>
            </li>
        </ul>
    )
}
export default HeaderActions;