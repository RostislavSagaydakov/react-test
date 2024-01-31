import React, {useRef} from "react";
import Modal from 'react-modal';
import TopSearch from "./components/search";
import AccountModalContent from "./components/account-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons'
import Minicart from "./components/minicart";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
function HeaderActions() {
    const searchToggleRef = useRef();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [minicartIsOpened, setMinicartIsOpened] = React.useState(false);
    const [topSearch, setTopSearch] = React.useState(false)
    const itemsInMinicart = useSelector(state => state.cart.itemsInCart);
    const itemsMinicartFiltered = [...new Set(itemsInMinicart)];
    const navigate = useNavigate();
    const user = JSON.parse(window.localStorage.getItem("currentUser"));
    function openModal() {
        if (localStorage.getItem("currentUser") !== null) {
            navigate(`/account`);
        } else {
            setIsOpen(true);
        }
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openMinicart() {
        setMinicartIsOpened(minicartIsOpened => !minicartIsOpened);
    }

    function openSearch() {
        setTopSearch(topSearch => !topSearch);
    }

    console.log(itemsInMinicart)
    return (
        <ul className="flex gap-4 items-center justify-between">
            <li id="search">
                {topSearch && <TopSearch openSearch={openSearch} searchToggleRef={searchToggleRef}/>}
                <span
                    ref={searchToggleRef}
                    className="search-link cursor-pointer p-3 hover:text-blue-600 block"
                    onClick={openSearch}
                >
                    {!topSearch && <FontAwesomeIcon icon={faMagnifyingGlass} />}
                    {topSearch && <FontAwesomeIcon icon={faTimes} />}
                </span>
            </li>
            <li>
                <span className="account-link modal-opener cursor-pointer p-3 hover:text-blue-600 block" onClick={openModal}>
                    {user && (<img src={user.image} alt={user.firstName} title={'Hello ' + user.firstName} className="w-5 h-5 block"/>)}
                    {!user && <FontAwesomeIcon icon={faUser} />}
                </span>
                <Modal
                    ariaHideApp={false}
                    portalClassName={"modal"}
                    preventScroll={true}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Login Modal"
                    bodyOpenClassName="modal-active"
                >
                    <button
                        onClick={closeModal}
                        className="p-3 block cursor-pointer absolute right-3 top-1 hover:text-blue-600 hover:scale-125 ease-out duration-300"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <AccountModalContent closeModal={closeModal}/>
                </Modal>
            </li>
            <li>
                <span
                    onClick={openMinicart}
                    className="minicart cursor-pointer p-3 hover:text-blue-600 block">
                    <FontAwesomeIcon icon={faCartShopping} />
                    {itemsMinicartFiltered.length}
                </span>
                {minicartIsOpened && <Minicart openMinicart={openMinicart}/>}
            </li>
        </ul>
    )
}
export default HeaderActions;