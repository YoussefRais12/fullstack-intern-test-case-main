import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import * as S from './App.styles';

export function App() {
  return (
    <Layout>
      <S.StyledContent>
        <Outlet />
      </S.StyledContent>
    </Layout>
  );
}

export default App;
