// Images;
import logo from '@images/logo.svg';
import moon from '@images/icon-moon.svg';

export default function Header() {
  return (
    <header className="bg-primary-light-100 flex items-center justify-between rounded-xl p-2 shadow-sm">
      <article className="w-36">
        <img
          src={logo}
          alt="project logo"
          className="h-full w-full object-cover"
        />
      </article>
      <article className="bg-primary-light-200/80 hover:bg-primary-light-200 cursor-pointer rounded-lg p-2 transition-all duration-200 focus-within:outline-red-600">
        <img
          src={moon}
          alt="moon/sun icon"
          className="h-full w-full object-cover"
        />
      </article>
    </header>
  );
}
