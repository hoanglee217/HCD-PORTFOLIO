import { Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen, showText }) => {
  const router = useRouter();
  const className =
    router.asPath === `${NavRoute}`
      ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest"
      : "";

  return (
    <Tooltip placement="top" title={NavText} arrow>
      <Link
        onClick={(e) => setIsOpen(false)}
        href={NavRoute}
        className={`${className} transition flex items-center hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl font-semibold space-x-4 text-base ${
          !showText ? "p-3" : "px-2 py-1.5"
        }`}
      >
        {NavIcon}
        {showText && <span>{NavText}</span>}
      </Link>
    </Tooltip>
  );
};

export default NavItem;
