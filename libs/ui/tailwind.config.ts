import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
const config: Config = {
  darkMode: ['class'],
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        black: 'hsl(var(--black) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
        gray: {
          '50': 'hsl(var(--slate-50) / <alpha-value>)',
          '100': 'hsl(var(--slate-100) / <alpha-value>)',
          '200': 'hsl(var(--slate-200) / <alpha-value>)',
          '300': 'hsl(var(--slate-300) / <alpha-value>)',
          '400': 'hsl(var(--slate-400) / <alpha-value>)',
          '500': 'hsl(var(--slate-500) / <alpha-value>)',
          '600': 'hsl(var(--slate-600) / <alpha-value>)',
          '700': 'hsl(var(--slate-700) / <alpha-value>)',
          '800': 'hsl(var(--slate-800) / <alpha-value>)',
          '900': 'hsl(var(--slate-900) / <alpha-value>)',
          '950': 'hsl(var(--slate-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--slate-500) / <alpha-value>)',
        },
        red: {
          '50': 'hsl(var(--red-50) / <alpha-value>)',
          '100': 'hsl(var(--red-100) / <alpha-value>)',
          '200': 'hsl(var(--red-200) / <alpha-value>)',
          '300': 'hsl(var(--red-300) / <alpha-value>)',
          '400': 'hsl(var(--red-400) / <alpha-value>)',
          '500': 'hsl(var(--red-500) / <alpha-value>)',
          '600': 'hsl(var(--red-600) / <alpha-value>)',
          '700': 'hsl(var(--red-700) / <alpha-value>)',
          '800': 'hsl(var(--red-800) / <alpha-value>)',
          '900': 'hsl(var(--red-900) / <alpha-value>)',
          '950': 'hsl(var(--red-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--red-600) / <alpha-value>)',
        },
        primary: {
          '50': 'hsl(var(--primary-50) / <alpha-value>)',
          '100': 'hsl(var(--primary-100) / <alpha-value>)',
          '200': 'hsl(var(--primary-200) / <alpha-value>)',
          '300': 'hsl(var(--primary-300) / <alpha-value>)',
          '400': 'hsl(var(--primary-400) / <alpha-value>)',
          '500': 'hsl(var(--primary-500) / <alpha-value>)',
          '600': 'hsl(var(--primary-600) / <alpha-value>)',
          '700': 'hsl(var(--primary-700) / <alpha-value>)',
          '800': 'hsl(var(--primary-800) / <alpha-value>)',
          '900': 'hsl(var(--primary-900) / <alpha-value>)',
          '950': 'hsl(var(--primary-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--primary-600) / <alpha-value>)',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
