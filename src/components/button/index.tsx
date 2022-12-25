import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps {
    title: string,
    variant: 'text' | 'outlined' | 'contained' | undefined,
    bg: string,
    color: string,
    onClick: Function,
}

export default function CustomButton(props: CustomButtonProps) {
    const {title, variant, bg, color, onClick} = props;

    const ColorButton = styled(Button)<ButtonProps>(({ }) => ({
        color,
        backgroundColor: bg,
        '&:hover': {
            backgroundColor: bg,
            opacity: 0.7,
        },
    }));

    return (
        <ColorButton variant={variant} onClick={() => onClick()}>{title}</ColorButton>
    );
}