"use client";
import ImageView from "@/components/ImageView";
import VideoPopup from "@/components/VideoPopup";
import { TekprofUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DadSonLayout = ({
  children,
  header,
  footer,
  rootElements = {
    "--Tekprof-base-font": "'Inter', serif",
    "--Tekprof-heading-font": "'Hanken Grotesk', serif",
    "--Tekprof-primary-color": "#e05b00",
    "--Tekprof-heading-color": "#020626",
    "--Tekprof-blue-color": "#021433",
    "--Tekprof-gray-color": "#FAF8F6",
  },
  bodyClass = "",
  singleMenu = false,
}) => {
  useEffect(() => {
    TekprofUtility.animation();
    TekprofUtility.fixedHeader();
    Object.keys(rootElements).forEach((key) => {
      document.body.style.setProperty(key, rootElements[key]);
    });
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className={`page-wrapper ${bodyClass}`}>
        <Header header={header} singleMenu={singleMenu} />
        {/* <Sidebar /> */}
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default DadSonLayout;
