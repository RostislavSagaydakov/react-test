import RoutesFromMainMenu from './header/components/routes'
import Subscribe from "../components/subscribe";
import AccountModal from "./header/components/account-modal";
function BaseMain() {
    return (
        <>
            <main className="container mx-auto xl">
                <RoutesFromMainMenu/>
            </main>
            <Subscribe/>
            <AccountModal/>
        </>
    )
}
export default BaseMain;