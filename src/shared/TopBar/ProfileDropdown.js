import { Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const ProfileDropdown = () => {
  const handleMenuClick = (e) => {
    console.log('click', e.key);
    // handle menu item click events here
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        My Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className="flex items-center cursor-pointer">
        <Avatar size="large" icon={<UserOutlined />} />
        <span className="ml-2 font-semibold">John Doe</span>
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
