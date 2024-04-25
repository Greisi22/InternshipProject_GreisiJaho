import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import "./styles/Menu.css"
import ReorderIcon from '@mui/icons-material/Reorder';

interface MenuItem {
  icon: JSX.Element | null;
  name: string;
  function: (name: string) => void;
}

interface Props {
  items: MenuItem[];
}

export default function NavMenu({ items }: Props) {

  const [, ...menuItems] = items;

  return (
    <div className="bg-transparent">
      <Dropdown>
        <MenuButton style={{ backgroundColor: 'transparent', border: 'none' }}>
          <span><ReorderIcon/></span> 
        </MenuButton>
        <Menu style={{backgroundColor: "", border: ""}}>
          {menuItems.map((item, index) => (
            <div key={index} onClick={()=>{item.function(item.name)}} >
              <MenuItem className='menuItem'>
                <span>{item.icon}</span> <span>{item.name}</span>
              </MenuItem>
            </div>
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
}
