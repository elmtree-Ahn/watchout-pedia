import React from 'react';
import styled from '@emotion/styled';

const Base = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
    width: 100%;
    height: 62px;
    z-index: 10;
`;

const Navigation = styled.nav`
    margin: 0 auto;
    max-width: 1200px;
`;
    
const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow: hidden;
`;

const Menu = styled.li`
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    &:not(:first-child) {
        margin-left: 24px;
    }
`;

const MenuButton = styled.button<{active?: boolean}>`
    font-size: 15px;
    color : ${({active}) => active ? `rgb(53,53,53)` : `rgb(126, 126, 126)`};
    cursor: pointer;
    border: none;
    background: none;
`;

// 11:29

const SearchMenu = styled.li``;

const Link = styled.a``;

const TextLogo = styled.h1``;

const SearchContainer = styled.div``;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label``;

const SearchInput = styled.input``;

const SignIn = styled.button``;

const SignUp = styled.button``;

const Header:React.FC = () => {

    const handleKeyword = () => {

    }

    return (
        <Base>
            <Navigation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href='/'>
                                <TextLogo>
                                    <span className="primary">WATCHOUT</span>
                                    <span className="primary">PEDIA</span>

                                </TextLogo>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href=''>
                                <MenuButton>영화</MenuButton>
                            </Link>
                            <Link href='tv'>
                                <MenuButton>TV 프로그램</MenuButton>
                            </Link>
                        </Menu>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel />
                                        <SearchInput placeholder='콘텐츠, 인물 ,컬렉션, 유저를 검색해보세요.' onChange={handleKeyword}/>
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                        </SearchMenu>
                        <Menu>
                            <SignIn>로그인</SignIn>
                        </Menu>
                        <Menu>
                            <SignIn>회원가입</SignIn>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navigation>
        </Base>
    );
};

export default Header;