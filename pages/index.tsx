// @ts-nocheck

import { Rolfis } from "@/components/rolfis";
import { resolveUrl } from "@/utils";
import Head from "next/head";
import { links } from "@/utils/data";
import { IFilters } from "@/types";
import { Profimann } from "@/components/profimann";
import { HeadRow } from "@/components/headRow";
import { Edobro } from "@/components/edobro";

export const getServerSideProps = async () => {
 let res = [];
 for (let link of links) {
  const { price, lastScraped } = await resolveUrl(link.link);
  res.push({
   link: link.link,
   title: link.name,
   website: link.website,
   price,
   normalPrice: link.normalPrice,
   lastScraped,
  });
 }

 return {
  props: {
   res,
  },
 };
};

export default function Home(props: { res: IFilters }) {
 return (
  <div className="text-md font-semibold p-2 text-slate-50">
   <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <HeadRow />
   <Rolfis data={props.res} />
   <Edobro data={props.res} />
   <Profimann data={props.res} />
  </div>
 );
}
