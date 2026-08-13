import { GoldButton } from "@/components/gold-button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-title mt-6 text-6xl">Cette page s&apos;est encrée ailleurs.</h1>
      <div className="mt-10">
        <GoldButton href="/">Retour à la maison</GoldButton>
      </div>
    </div>
  );
}
