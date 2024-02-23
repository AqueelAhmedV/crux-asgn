export const CRUXIA_REGULAR = '#5E5ADB'

export const widgetTheme = {
    light: {
        topbar: {
            color: '#777',
            focus: CRUXIA_REGULAR,
            lines: '#888',
            bg: '#fff',
        },
        content: {
            color: '#777',
            focus: CRUXIA_REGULAR,
            bg: '#fff',
            lines: '#777'
        },
    },
    dark: {
        topbar: {
            color: '',
            lines: '',
            bg: '',
            focus: ''
        },
        content: {
            color: '',
            bg: '',
            lines: '',
            focus: ''
        },
    },
    inverted: {
        topbar: {
            color: '',
            lines: '',
            bg: '',
            focus: ''
        },
        content: {
            color: '',
            bg: '',
            lines: '',
            focus: ''
        },
    }
}

type Theme = typeof widgetTheme;

// Define a type for the keys of the theme object
export type WidgetTheme = keyof Theme;

// Define a type for the keys of the sub-objects within the theme object
export type WidgetThemeKey = keyof Theme['light'];

// Define a type for the CruxWidgetThemeConfig
export type WidgetThemeSubConfig = typeof widgetTheme['light']['topbar']

export type WidgetThemeConfig = Record<WidgetThemeKey, WidgetThemeSubConfig>
