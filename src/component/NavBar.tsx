function NavBar() {
  return (
    <>
      <nav className="text-white hidden md:block font-bold flex mx-auto text-center text-2xl md:text-4xl py-4 px-5 gap-10 w-fit h-fit bg-green-600/50 rounded-3xl list-none">
        <a href="https://www.facebook.com/share/1EXC4sJ43C/">
          <li>
            <i className="ri-facebook-fill"></i>
          </li>
        </a>
        <a href="https://wa.me/qr/HZ3MKMKKDZRHJ1">
          <li>
            <i className="ri-whatsapp-line"></i>
          </li>
        </a>
        <a href="https://www.instagram.com/samuelemmanuel668/">
          <li>
            <i className="ri-instagram-line"></i>
          </li>
        </a>
        <a href="http://bit.ly/4v7Ukpr">
          <li>
            <i className="ri-linkedin-fill"></i>
          </li>
        </a>
        <a href="https://sammy2007bright@gmail.com">
          <li>
            <i className="ri-mail-fill"></i>
          </li>
        </a>
      </nav>
      {/* moblie */}
      <nav className="text-white md:hidden font-bold text-center text-2xl md:text-4xl py-4 gap-10 w-screen h-fit bg-green-600/50 rounded-3xl list-none">
        <a href="https://www.facebook.com/share/1EXC4sJ43C/">
          <li className="hover:border-2 hover:border-amber-600">
            <i className="ri-facebook-fill"></i>
            <p>Facebook</p>
          </li>
        </a>
        <a href="https://wa.me/qr/HZ3MKMKKDZRHJ1">
          <li>
            <i className="ri-whatsapp-line"></i>
            <p>Whatsaapp</p>
          </li>
        </a>
        <a href="https://www.instagram.com/samuelemmanuel668/">
          <li>
            <i className="ri-instagram-line"></i>
            <p>Instagram</p>
          </li>
        </a>
        <a href="http://bit.ly/4v7Ukpr">
          <li>
            <i className="ri-linkedin-fill"></i>
            <p>LinkedIn</p>
          </li>
        </a>
        <a href="https://sammy2007bright@gmail.com">
          <li>
            <i className="ri-mail-fill"></i>
            <p>Email</p>
          </li>
        </a>
      </nav>
    </>
  );
}

export default NavBar;
