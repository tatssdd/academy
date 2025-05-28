import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { routes } from '../app/routes';
import styled from '@emotion/styled';

type MenuItem = Required<MenuProps>['items'][number];

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuItem[] = routes.map((route) => ({
    label: route.label,
    key: route.path,
  }));

  const selectedKey = location.pathname;
  return (
    <MenuContainer>
      <Menu
        style={{
          width: '100%',
          justifyContent: 'flex-end',
        }}
        onClick={({ key }) => {
          navigate(key);
        }}
        selectedKeys={[selectedKey]}
        mode='horizontal'
        items={items}
      />
    </MenuContainer>
  );
};
