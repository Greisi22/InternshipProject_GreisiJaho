import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';





export default function NavMenu({ items }) {

  const [title, ...menuItems] = items;

  return (
    <div className="bg-transparent">
      <Dropdown>
        <MenuButton style={{ backgroundColor: 'transparent', border: 'none' }}>
          <span>{title.icon}</span> <span style={{marginTop:"-12px"}}>{title.name}</span>
        </MenuButton>
        <Menu>
          {menuItems.map((item, index) => (
            <div key={index}>
              <MenuItem>
                <span>{item.icon}</span> <span>{item.name}</span>
              </MenuItem>
            </div>
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
}
