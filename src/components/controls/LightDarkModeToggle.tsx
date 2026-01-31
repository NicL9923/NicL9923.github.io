import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const LightDarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const isLightMode = theme === 'light'

  const toggleTheme = () => {
    setTheme(isLightMode ? 'dark' : 'light')
  }

  return (
    <Button onClick={toggleTheme} className="mt-2">
      {isLightMode ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
      Turn the lights {isLightMode ? 'off' : 'on'}!
    </Button>
  )
}

export default LightDarkModeToggle
