import AccountAction from "./AccountAction";
import CartAction from "./CartAction";
import Search from "./Search";

function HeaderActions() {
    return (
        <div>
            <Search />

            <AccountAction />

            <CartAction />
        </div>
    );  
}

export default HeaderActions;