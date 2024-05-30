import Link from "next/link";

// Define an interface for the component props
interface NavLinkProps {
  href: string;
  name: string;
}

// Apply the interface to your function component
function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
  );
}

export default NavLink;
