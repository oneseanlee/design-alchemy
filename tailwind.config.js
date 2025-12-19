/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				hover: 'hsl(var(--card-hover))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				coral: 'hsl(var(--accent-coral))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--warning))',
  				foreground: 'hsl(var(--warning-foreground))'
  			},
  			info: {
  				DEFAULT: 'hsl(var(--info))',
  				foreground: 'hsl(var(--info-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			'4xl': '2rem'
  		},
  		animation: {
  			'reveal': 'reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'reveal-delay': 'reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
  			'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'glow-pulse': 'glowPulse 2s ease-in-out infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
  		},
  		keyframes: {
  			reveal: {
  				from: { opacity: '0', transform: 'translateY(24px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			scaleIn: {
  				from: { opacity: '0', transform: 'scale(0.95)' },
  				to: { opacity: '1', transform: 'scale(1)' }
  			},
  			glowPulse: {
  				'0%, 100%': { opacity: '0.3' },
  				'50%': { opacity: '0.8' }
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			ping: {
  				'75%, 100%': { transform: 'scale(2)', opacity: '0' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
  				'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.5)' }
  			}
  		},
  		boxShadow: {
  			'glow-sm': '0 0 16px hsl(var(--primary) / 0.3)',
  			'glow': '0 0 24px hsl(var(--primary) / 0.4)',
  			'glow-lg': '0 0 40px hsl(var(--primary) / 0.5)',
  			'ambient': '0 20px 40px hsl(0 0% 0% / 0.4)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
