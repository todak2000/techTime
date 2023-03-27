import React from "react";
import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "../_app";

type MainboardProps = {
  children?: any;
};

const Mainboard: NextPageWithLayout<MainboardProps> = ({ children }) => {
  return <main className="parent grid grid-cols-1 md:h-full">{children}</main>;
};

Mainboard.getLayout = (page) => <Layout>{page}</Layout>;

export default React.memo(Mainboard);
