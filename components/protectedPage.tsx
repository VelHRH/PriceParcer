import axios from "axios";
import { Rolfis } from "@/components/rolfis";
import { resolveUrl } from "@/utils";
import { links } from "@/utils/data";
import { IFilter } from "@/types";
import { Profimann } from "@/components/profimann";
import { HeadRow } from "@/components/headRow";
import { Edobro } from "@/components/edobro";
import { Aquapure } from "@/components/aquapure";
import { Vodavdom } from "@/components/vodavdom";
import { Ukrakvateh } from "@/components/ukrakvateh";
import { Pershavoda } from "@/components/pershavoda";
import { Komfortvoda } from "@/components/komfortvoda";
import { Akvo } from "@/components/akvo";
import { Fons } from "@/components/fons";
import { Filterpoint } from "@/components/filterpoint";
import { Nemofilter } from "@/components/nemofilter";
import { Aqualife } from "@/components/aqualife";
import { Smartfilter } from "@/components/smartfilter";
import { Afilter } from "@/components/afilter";
import { Hydroeco } from "@/components/hydroeco";
import { Filter } from "@/components/filter";
import { Softis } from "@/components/softis";
import { Yvk } from "@/components/yvk";
import { Waterboss } from "@/components/waterboss";
import { Aquaroom } from "@/components/aquaroom";
import { Viqua } from "@/components/viqua";
import { Aquamart } from "@/components/aquamart";
import { Honeywell } from "@/components/honeywell";
import { Iwater } from "@/components/iwater";
import { Aquastory } from "@/components/aquastory";
import { Arista } from "@/components/arista";

export default function ProtectedPage(props: {
 res: IFilter[];
 updatedAt: string;
}) {
 return (
  <div className="text-md font-semibold p-2 text-slate-50">
   <HeadRow />
   <Rolfis data={props.res} />
   <Edobro data={props.res} />
   <Aquapure data={props.res} />
   <Vodavdom data={props.res} />
   <Ukrakvateh data={props.res} />
   <Pershavoda data={props.res} />
   <Komfortvoda data={props.res} />
   <Akvo data={props.res} />
   <Fons data={props.res} />
   <Filterpoint data={props.res} />
   <Nemofilter data={props.res} />
   <Aqualife data={props.res} />
   <Smartfilter data={props.res} />
   <Afilter data={props.res} />
   <Hydroeco data={props.res} />
   <Profimann data={props.res} />
   <Filter data={props.res} />
   <Softis data={props.res} />
   <Yvk data={props.res} />
   <Waterboss data={props.res} />
   <Aquaroom data={props.res} />
   <Viqua data={props.res} />
   <Aquamart data={props.res} />
   <Honeywell data={props.res} />
   <Iwater data={props.res} />
   <Aquastory data={props.res} />
   <Arista data={props.res} />
   <div className="text-center font-bold mt-5 text-sky-200">
    Последнее обновление произошло {new Date(props.updatedAt).toLocaleString()}
   </div>
  </div>
 );
}
