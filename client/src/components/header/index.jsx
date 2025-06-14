import { Layout } from 'antd'
import { Dropdown, Space } from 'antd'
const { Header } = Layout
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  SearchOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import './header.scss'
import useAuth from 'hooks/useAuth'
import { FaBell, FaQuestionCircle, FaSearch } from 'react-icons/fa'
const HeaderRender = () => {
  const { userData, logout } = useAuth()
  const items = [
    {
      label: (
        <Link to={'/personal-info'}>
          <div target="_blank" rel="noopener noreferrer">
            <UserOutlined /> Tài khoản
          </div>
        </Link>
      ),
    },
    {
      label: (
        <Link to={'/login'} onClick={logout}>
          <div
            style={{ color: 'red' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoutOutlined /> Đăng xuất
          </div>
        </Link>
      ),
    },
  ]
  return (
    <>
      <div>
        <Header
          className="header-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            paddingLeft: '25px',
          }}
        >
          <div className="header-wrapper__logo">
            <img className='rounded-sm' src="/logo2.png" alt="logo" />
          </div>

          <div className="header-wrapper__right-side">
            <div className="header-wrapper__right-side__search">
              <FaSearch></FaSearch>
              {/* <SearchOutlined /> */}
            </div>
            <div className="header-wrapper__right-side__question">
              <FaQuestionCircle></FaQuestionCircle>
              {/* <QuestionCircleOutlined /> */}
            </div>
            <div className="header-wrapper__right-side__bell">
              <FaBell></FaBell>
              {/* <BellOutlined /> */}
            </div>

            <div className="header-wrapper__right-side__profile">
              <Link to={'/personal-info'}>
                <Avatar className='ava'
                  style={{ width: '40px' }}
                  size={40}
                  icon={<UserOutlined />}
                />
              </Link>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div
                  className="header-wrapper__profile__username"
                  onClick={(e) => e.preventDefdivult()}
                >
                  <Space className='p-3'>{userData && userData.username}</Space>
                </div>
              </Dropdown>
            </div>
            <div className="header-wrapper__right-side__language">
              <GlobalOutlined />
            </div>
          </div>
        </Header>
      </div>
    </>
  )
}

export default HeaderRender
