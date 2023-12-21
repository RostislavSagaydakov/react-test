import BaseHeader from "./default/header";
import BaseFooter from "./default/footer";
import BaseMain from "./default/main";

function BaseLayout() {
    return (
        <>
            <BaseHeader/>
            <BaseMain/>
            <BaseFooter/>
        </>
    )
}

export default BaseLayout;