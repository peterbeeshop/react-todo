import React from 'react';
import styled from 'styled-components';


function HomePage() {
    return (
        <div>
           <NavBar>
                <UL>
                    <li>About Me</li>
                    <li>Contact ME</li>
                    <li>Hire Me</li>
                </UL>
            </NavBar> 
        </div>
    )
}
const NavBar = styled.nav `
background-color: #02050f;
color: #f9f9f9;
height: 10vh;
align-items: center;
`
const UL = styled.ul `
display: flex;
justify-content: space-around;
align-items: center;
text-align:center;
`

export default HomePage
