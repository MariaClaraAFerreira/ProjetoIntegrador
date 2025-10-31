import Image from "next/image";
import Header2 from "./componentes/header";
import FinalizarPedido from "./componentes/tabela";
import Footer from "../componentes/footer";


export default function Home() {
  return (
    <div className="h-full   w-full   bg-[#CDECF9] flex-col justify-center items-center ">
      <div className=" ">
        <Header2 />
      </div>

      <div className="mt-20">
        <FinalizarPedido/>
      </div>

        <div>
            <Footer/>
        </div>
    </div>
  );
}
