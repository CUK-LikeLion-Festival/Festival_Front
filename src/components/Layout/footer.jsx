import React from "react";
import useFooterDetail from "../../hooks/components/Layout/footer/hook";
import { FaGithub, FaInstagram, FaHome } from "react-icons/fa";

const Footer = () => {
  const { data, copyright } = useFooterDetail();
  return (
    <footer className="text-white border-t-[2px] border-solid border-cyan-200  py-4 px-4 sm:flex sm:flex-col sm:justify-center  sm:text-xs">
      <div className="flex justify-center mb-2 sm:mb-2 ">
        {/* 추후에 hook으로 묶을 예정 */}
        <a
          href="https://github.com/CUK-LikeLion-Festival/festival_front"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 transition-opacity duration-1000 hover:opacity-40"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.instagram.com/likelioncuk/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 transition-opacity duration-1000 hover:opacity-40"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://likelioncuk.notion.site/likelioncuk/ade52330317b445998c7b066071bbff4"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-1000 hover:opacity-40"
        >
          <FaHome size={32} />
        </a>
        {/*  */}
      </div>
      <div className="flex justify-center  mb-2 sm:mb-0">
        <p className="text-center sm:text-left hover:text-red-500 hover:font-bold transition-opacity duration-1000 hover:opacity-40">
          {copyright.map((item, index) => {
            return (
              <a href={item.url} key={index}>
                {item.name}
              </a>
            );
          })}{" "}
          <span>ⓒ.All rights reserved.</span>
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-row justify-between mb-[10px]">
          {data.map((item, index) => {
            return (
              <li className="mr-[10px]" key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
