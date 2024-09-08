import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { User2Icon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white opacity-85 shadow-md dark:bg-slate-900">
      <div className="flex items-center justify-around px-6 py-4">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link!.href !== '/')
            .map((link) => (
              <Link
                key={link!.title}
                href={link!.href}
                className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 sm:block"
              >
                {link!.title}
              </Link>
            ))}
          <Link href="/login">
            <Avatar>
              <AvatarImage width={48} height={48} src="" alt="user" />
              <AvatarFallback>
                <User2Icon className="hover:text-primary-500" />
              </AvatarFallback>
            </Avatar>
          </Link>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
