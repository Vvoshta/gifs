import React from 'react';
import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip, { ChipProps } from '@mui/material/Chip';
import { blue, grey, cyan } from '@mui/material/colors';

type SettingsStyledBreadcrumbProps = ChipProps & {
    href: string;
    label: string;
};

const StyledBreadcrumbs = styled(Breadcrumbs)({
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '16px',
    justifyContent: 'center',
    gap: '20px'
});

const StyledBreadcrumb = styled(Chip)<SettingsStyledBreadcrumbProps>(
    ({ theme }) => ({
        borderRadius: 4,
        height: theme.spacing(5),
        backgroundColor: blue[500],
        color: 'white',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        '&:hover, &:focus': {
            backgroundColor: blue[800],
            border: '1px solid rgba(25, 118, 210, 0.5)'
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: 'white'
        }
    })
);

const SettingsStyledBreadcrumb = styled(StyledBreadcrumb)({
    backgroundColor: grey[300],
    color: blue[500],
    '&:hover, &:focus': {
        backgroundColor: cyan[300]
    },
    '&:active': {
        backgroundColor: blue[500]
    }
});

export const MainBreadcrumbs = () => {
    return (
        <div>
            <StyledBreadcrumbs aria-label="breadcrumb" separator="">
                <StyledBreadcrumb component="a" href="#" label="Trends" />
                <StyledBreadcrumb component="a" href="#" label="Search" />
                <StyledBreadcrumb component="a" href="#" label="Random" />
                <SettingsStyledBreadcrumb
                    component="a"
                    href="#"
                    label="Settings"
                />
            </StyledBreadcrumbs>
        </div>
    );
};
