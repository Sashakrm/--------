import NavItem from './NavItem';

function Navigation() {
    const navItems = [
        {
            label: "Главная",
            path: "/"
        },
        {
            label: "Товары",
            path: "/products"
        }
    ];

    return (
        <nav>
            {navItems.map((item) => 
            <NavItem 
            key={item.path} 
            label={item.label} 
            path={item.path}
            />
            )}
        </nav>
    );
}

export default Navigation;