interface CoinBadgeProps {
  amount: number;
  className?: string;
}

export function CoinBadge({ amount, className = "" }: CoinBadgeProps) {
  return (
    <span className={`coin ${className}`.trim()}>
      <img
        className="coin__icon"
        src="/assets/images/coin.svg"
        alt=""
        width={14}
        height={14}
      />
      <span className="coin__value">{amount} coin</span>
    </span>
  );
}
