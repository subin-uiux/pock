import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SelectionBox } from "@/components/SelectionBox";

/** 임시값 — 설정 프로필과 동일 샘플 */
const PROFILE_NICKNAME = "zl존 킹왕짱";
/** 닉네임 변경 비용 */
const NICKNAME_COST = 5;

type GenderId = "male" | "female";

const GENDER_OPTIONS: {
  id: GenderId;
  label: string;
  src: string;
}[] = [
  {
    id: "male",
    label: "남자",
    src: "/assets/images/setting/boy.svg",
  },
  {
    id: "female",
    label: "여자",
    src: "/assets/images/setting/girl.svg",
  },
];

/**
 * 마이페이지 `/mypage` — 프로필 수정
 * 설정 → 프로필 수정
 */
export function MyPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(PROFILE_NICKNAME);
  const [genderId, setGenderId] = useState<GenderId>("female");

  useEffect(() => {
    document.title = "프로필 수정 ㅣ POCK";
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  const previewSrc =
    genderId === "male"
      ? "/assets/images/setting/boy.svg"
      : "/assets/images/setting/girl.svg";

  return (
    <section className="mypage" aria-label="프로필 수정">
      <header className="mypage__header">
        <button
          type="button"
          className="mypage__back"
          aria-label="뒤로가기"
          onClick={goBack}
        >
          <img
            className="mypage__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="mypage__title">프로필 수정</h1>
      </header>

      <article className="mypage-window" aria-label="나의 POCK">
        <header className="pock-window__bar">
          <h2 className="pock-window__title">나의 POCK</h2>
          <div className="pock-window__actions">
            <span
              className="pock-window__control pock-window__control--min"
              aria-hidden="true"
            />
            <button
              type="button"
              className="pock-window__control pock-window__control--close"
              aria-label="닫기"
              onClick={goBack}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <img
                className="pock-window__control-icon"
                src="/assets/images/heart-icon.svg"
                alt=""
                width={9}
                height={7}
              />
            </button>
          </div>
        </header>

        <div className="mypage-window__body">
          <div className="mypage-profile">
            <div className="mypage-profile__avatar" aria-hidden="true">
              <div className="mypage-profile__figure">
                <img
                  className="mypage-profile__body"
                  src={previewSrc}
                  alt=""
                  width={53}
                  height={81}
                />
                {genderId === "female" ? (
                  <img
                    className="mypage-profile__clothes"
                    src="/assets/images/setting/Girls'-school-uniform.svg"
                    alt=""
                    width={86}
                    height={66}
                  />
                ) : null}
              </div>
            </div>

            <div className="mypage-profile__nickname">
              <label
                className="mypage-profile__nickname-label"
                htmlFor="mypage-nickname"
              >
                닉네임 수정
              </label>
              <input
                id="mypage-nickname"
                className="mypage-profile__nickname-input"
                type="text"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                autoComplete="nickname"
              />
              <div className="mypage-profile__nickname-row">
                <Button
                  variant="popup"
                  className="mypage-profile__edit"
                  onClick={() => {
                    /* 닉네임 수정 동작 — 미확정 */
                  }}
                >
                  수정
                </Button>
                <span
                  className="mypage-profile__cost"
                  aria-label={`닉네임 변경 ${NICKNAME_COST}코인`}
                >
                  <img
                    className="mypage-profile__cost-icon"
                    src="/assets/images/coin-store/1coin.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="mypage-profile__cost-value">
                    {NICKNAME_COST}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* base/200 — 성별·옷·배경 */}
          <div className="mypage-window__panel">
            <section className="mypage-gender" aria-label="성별 선택">
              <h3 className="mypage-gender__title">성별 선택</h3>
              <div className="mypage-gender__row">
                {GENDER_OPTIONS.map((item) => (
                  <div className="mypage-gender__item" key={item.id}>
                    <SelectionBox
                      selected={genderId === item.id}
                      aria-label={item.label}
                      onClick={() => setGenderId(item.id)}
                    >
                      <img
                        className="mypage-gender__img"
                        src={item.src}
                        alt=""
                        width={53}
                        height={81}
                      />
                    </SelectionBox>
                    <span className="mypage-gender__label">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
