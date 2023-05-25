<script>
  import "../app.css";
  import { Navbar, NavBrand, NavLi, NavUl, Alert, Footer, FooterCopyright, FooterLinkGroup, FooterLink, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle color="red">
  <NavBrand href="/">
    <img
      src="https://github.com/kreatolinux/assets/raw/master/logo.png"
      class="mr-3 h-6 sm:h-9"
      alt="Kreato Linux Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Kreato Linux
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/download">Download</NavLi>
    <NavLi href="https://wiki.linux.kreato.dev">Docs</NavLi>
    <NavLi href="https://github.com/kreatolinux">GitHub</NavLi>
  </NavUl>
</Navbar>

<Alert>
  Kreato Linux v2 Beta 1 is now released!
</Alert>


<slot />


<Footer>
  <FooterCopyright href="/" by="Kreato Linux" year={2023} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Source</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
