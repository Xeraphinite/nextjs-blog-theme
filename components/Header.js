import Image from 'next/image'

export default function Header() {
  return (
    <header className="pt-20 pb-12">
      <Image  
        src="/images/flandre-icon.jpg"
        alt="Cutie Flandre Scarlet"
        width={144}
        height={144}
        className="rounded-full"
      />
    </header>
  );
}
