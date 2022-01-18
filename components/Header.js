import Image from 'next/image'
import { StyledHeader } from './styles/Header.styled'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Header() {
  return (
    <StyledHeader>
      <Link href='/'>
        <a>
          <Image src='/logo.svg' height={48} width={296} alt='MMTFlix logo' />
        </a>
      </Link>
      <SearchBar />
    </StyledHeader>
  )
}
