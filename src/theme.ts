import { MantineThemeOverride } from '@mantine/core';
// import { gradientFromColor } from './utilities/color';

const defaultFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

export const theme: MantineThemeOverride = {
  primaryColor: 'primary',
  colors: {
    'primary': ["#ffefda", "#ffe0b8", "#ffd195", "#ffc272", "#ffb34f", "#ffa42d", "#ff950a", "#d07b0c", "#9c6113", "#6d4715"],
    'danger': ["#fee5e5", "#fecdcd", "#fdb4b4", "#fc9c9c", "#fb8383", "#fb6b6b", "#fa5252", "#ed2626", "#bf1c1c", "#861d1d"],
    'background': ["#26282b", "#373b40", "#3f434a", "#50565e", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    'info': Array(10).fill('#3065c7') as any,
  },
  white: '#eee',
  fontFamily: defaultFont,
  radius: { xs: 0, sm: 2, md: 4, lg: 8, xl: 16 },
  headings: {
    fontFamily: defaultFont,
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 36, lineHeight: 1.3 },
      h2: { fontSize: 30, lineHeight: 1.35 },
      h3: { fontSize: 22, lineHeight: 1.4 },
      h4: { fontSize: 18, lineHeight: 1.45 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 },
    }
  },
  other: {
    headerHeight: '64px',
    pageLeftMargin: '55px',
    drawerWidth: '600px',
    scrollbarTrackColor: '#212226',
    scrollbarThumbColor: '#6c6c73',
  },
};


export const styles: any = {
  AppShell: (theme: any) => ({
    root: {
      minHeight: '100vh',
    }
  }),
  Paper: (theme: any) => ({
    root: {
      background: theme.colors.background[1],
      padding: '15px',
    }
  }),
  Text: (theme: any) => ({
    root: {
      color: theme.white,
    }
  }),
  Title: (theme: any) => ({
    root: {
      color: theme.white,
    }
  }),
  List: (theme: any) => ({
    item: {
      color: theme.white,
    }
  }),
  Select: (theme: any) => ({
    label: {
      color: theme.white,
    }
  }),
  TextInput: (theme: any) => ({
    label: {
      color: theme.white,
    }
  }),
  Checkbox: (theme: any) => ({
    label: {
      cursor: 'pointer',
      color: theme.white,
    },
    input: {
      cursor: 'pointer',
    }
  }),
  Switch: (theme: any) => ({
    label: {
      cursor: 'pointer',
      color: theme.white,
    },
    input: {
      cursor: 'pointer',
      background: theme.colors.background[1],
      borderWidth: '2px',
      '&:checked': {
        background: theme.colors.primary[6],
        borderColor: theme.colors.primary[6],
      }
    }
  }),
  Divider: (theme: any) => ({
    horizontal: {
      borderTopColor: theme.colors.background[2],
    }
  }),
  Button: (theme: any) => ({
    root: {
      color: '#fff',
      '&[disabled]': {
        color: `${theme.white} !important`,
        backgroundColor: `${theme.colors.primary[7]} !important`,
        opacity: 0.5,
      }
    }
  }),
  Tabs: (theme: any) => ({
    tabLabel: {
      color: theme.white,
      fontFamily: "'M PLUS 1 Code', sans-serif",
      fontSize: '16px',
    },
    tabIcon: {
      color: theme.white,
    },
    tabActive: {
      background: `${theme.colors.background[1]} !important`,
      borderBottomWidth: `0px !important`,
    },
    body: {
      paddingTop: '0px',
      background: theme.colors.background[0],
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
    },
  }),
};
