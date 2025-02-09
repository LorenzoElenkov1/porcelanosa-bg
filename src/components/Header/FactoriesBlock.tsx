import Link from "next/link";
import React from "react";

const FactoriesBlock = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/porcelanosa">Porcelanosa</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/noken">Noken</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/urbatek">Urbatek</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/lantic-colonial">L&#39;antic Colonial</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/krion">Krion</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/butech">Butech</Link>
      <Link className="hover:text-gray-600" href="/porcelanosa-bg/catalogues/gamadecor">Gamadecor</Link>
    </div>
  );
};

export default FactoriesBlock;
