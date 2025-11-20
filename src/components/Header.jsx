// Contexts;
import { useTheme } from '@/contexts/ThemeContext';

// Images;
import logo from '@images/logo.svg';
import moon from '@images/icon-moon.svg';
import sun from '@images/icon-sun.svg';

export default function Header() {
  const { handleToggleTheme, theme } = useTheme();

  return (
    <header className="bg-primary-light-100 dark:bg-primary-dark-800 flex items-center justify-between rounded-xl p-2 shadow-sm">
      <article className="w-36">
        <img
          src={logo}
          alt="project logo"
          className="h-full w-full object-cover dark:brightness-100 dark:invert"
        />
      </article>
      <article className="bg-primary-light-200/80 hover:bg-primary-light-200 dark:hover:bg-primary-dark-600 dark:bg-primary-dark-700 cursor-pointer rounded-lg p-2 transition-all duration-200 focus-within:outline-red-600">
        <img
          src={theme === 'light' ? moon : sun}
          alt="moon/sun icon"
          className="h-full w-full object-cover"
          onClick={handleToggleTheme}
        />
      </article>
    </header>
  );
}
