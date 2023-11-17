import Link from "next/link";

export function CryptoDisclaimer(p: {}) {
  return (
    <div className="text-xs">
      Crypto sourced from{" "}
      <Link
        className="text-blue-500 underline"
        href={"https://www.binance.com/en/binance-api"}
      >
        Binance API. <br />
      </Link>
      Invest responsibly.
    </div>
  );
}
