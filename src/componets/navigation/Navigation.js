import { Container } from '@mui/material';
import styled from './navigation-moduls.css';
const Navigation = () => {
    return (
        <>
            <Container>
                <nav>
                    <div className="top-navbar">
                        <div className="logo">
                            <h1>Logo</h1>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="/ContactFrom.js">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </>
    );
}

export default Navigation;