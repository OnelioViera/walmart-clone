import Image from "next/image";
import Link from "next/link";

function Header() {
  
  return ( 
  <header>
    <Link href='/'>
      <Image
        src='/logo.png'
        alt='logo'
        width={100}
        height={100}
      />
    </Link>
  </header>

  );
  
}

export default Header