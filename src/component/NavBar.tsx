function NavBar() {
  return (
    <>
      <nav className="text-white font-bold flex mx-auto text-center text-2xl md:text-4xl py-4 px-5 gap-10 w-fit h-fit bg-green-600/50 rounded-3xl list-none">
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
        {/* <a href="http://bit.ly/4v7Ukpr">
          <li>
            <i className="ri-linkedin-fill"></i>
          </li>
        </a> */}

        <a href="https://sammy2007bright@gmail.com">
          <li>
            <i className="ri-mail-fill"></i>
          </li>
        </a>
      </nav>
    </>
  );
}

export default NavBar;
