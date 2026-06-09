import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">My portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((item) => (
            <li key={item.id}>
              <img
                className="icon-hover"
                src={item.img}
                alt={`icon-${item.id}`}
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
