export type SignUpStepGaugeSize = "mo" | "tb" | "pc";

interface SignUpStepGaugeProps {
  /** 현재 단계 (1부터 시작) */
  step: number;
  /** 전체 단계 수 */
  total?: number;
  size?: SignUpStepGaugeSize;
  className?: string;
}

const ASSETS = {
  mo: {
    color: "/assets/images/signup/signup-step-color-mo.svg",
    grey: "/assets/images/signup/signup-step-grey-mo.svg",
    width: 135,
    height: 20,
  },
  tb: {
    color: "/assets/images/signup/signup-step-color.svg",
    grey: "/assets/images/signup/signup-step-grey.svg",
    width: 180,
    height: 28,
  },
  pc: {
    color: "/assets/images/signup/signup-step-color.svg",
    grey: "/assets/images/signup/signup-step-grey.svg",
    width: 180,
    height: 28,
  },
} as const;

export function SignUpStepGauge({
  step,
  total = 4,
  size = "mo",
  className = "",
}: SignUpStepGaugeProps) {
  const asset = ASSETS[size];
  const current = Math.min(Math.max(step, 1), total);
  const rootClass = [
    "signup-step-gauge",
    `signup-step-gauge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ol
      className={rootClass}
      aria-label={`캐릭터 설정 ${current} / ${total} 단계`}
    >
      {Array.from({ length: total }, (_, index) => {
        const active = index < current;
        const src = active ? asset.color : asset.grey;

        return (
          <li className="signup-step-gauge__item" key={index}>
            <img
              className={
                active
                  ? "signup-step-gauge__image signup-step-gauge__image--active"
                  : "signup-step-gauge__image"
              }
              src={src}
              alt=""
              width={asset.width}
              height={asset.height}
            />
            <span className="visually-hidden">
              {index + 1}단계{active ? " (진행)" : ""}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
