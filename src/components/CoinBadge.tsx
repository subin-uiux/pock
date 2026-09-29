interface CoinBadgeProps {
  amount: number;
  className?: string;
}

export function CoinBadge({ amount, className = "" }: CoinBadgeProps) {
  return (
    <span className={`coin ${className}`.trim()}>
      <img
        className="coin__icon"
        src="/assets/images/coin/coin.svg"
        alt="코인"
        width={14}
        height={14}
      />
      <span className="coin__value">{amount} coin</span>
    </span>
  );
}
