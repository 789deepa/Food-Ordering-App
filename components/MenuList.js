import MenuItem from "./MenuItem";

const MenuList = ({ menu }) => {
    return (
        <div>
            {menu.map((item, i) => (
                <MenuItem key={i} {...item} />
            ))}
        </div>
    );
};

export default MenuList;