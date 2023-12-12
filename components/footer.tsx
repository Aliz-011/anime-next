import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 AssemblyTeam</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Instagram size={19} className="text-rose-400" />
        <Twitter size={19} className="text-sky-500" />
        <Facebook size={19} className="text-blue-500" />
      </div>
    </footer>
  );
}

export default Footer;
