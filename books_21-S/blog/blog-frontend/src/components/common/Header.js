import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px; // 글자 사이의 간격
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

// 헤더가 fixed라서 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
// 겹치니깐
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

function Header({ user, onLogout }) {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link className="logo" to={'/'}>
            REACTERS
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>Logout</Button>
            </div>
          ) : (
            <div className="right">
              <Button to={'/login'}>Login</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
