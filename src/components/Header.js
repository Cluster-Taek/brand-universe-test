import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const pages = ['ABOUT', 'STORE'];

export default function Header() {
    return (
        <div>
            <p>[HEADER]</p>
            <Link href={'/about'}>
                <p>ABOUT</p>
            </Link>
            <Link href={'/store'}>
                <p>STORE</p>
            </Link>
        </div>
    );
}