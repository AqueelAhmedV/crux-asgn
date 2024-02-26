export const CRUXIA_REGULAR = '#5E5ADB'

export const widgetTheme = {
    light: {
        topbar: {
            color: '#999',
            focus: CRUXIA_REGULAR,
            lines: '#bbb',
            bg: '#fff',
        },
        content: {
            color: '#999',
            focus: '#666',
            bg: '#fff',
            lines: 'transparent'
        },
    },
    dark: {
        topbar: {
            color: '#aaa',
            lines: '#bbb',
            bg: '#282828',
            focus: '#ddd'
        },
        content: {
            color: '#aaa',
            bg: '#282828',
            lines: '#bbb',
            focus: '#ddd'
        },
    },
    inverted: {
        topbar: {
            color: '#ccc',
            lines: '#eee',
            bg: CRUXIA_REGULAR,
            focus: '#eee'
        },
        content: {
            color: '#ccc',
            lines: 'rgba(255,255,255,0.4)',
            bg: CRUXIA_REGULAR,
            focus: '#eee'
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
