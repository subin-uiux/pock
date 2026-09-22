import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Popup } from "@/components/Popup";
import { SelectionBox } from "@/components/SelectionBox";
import {
  BACKGROUND_OPTIONS,
  backgroundGradient,
  getProfileSetup,
  setProfileBackground,
  setProfileCharacter,
  setProfileNickname,
  setProfileOutfit,
  type BackgroundId,
  type CharacterId,
  type OutfitId,
} from "@/lib/profile-setup";

/** 닉네임 변경 비용 */
const NICKNAME_COST = 5;
/** 임시값 — 기본 닉네임 시안 샘플 */
const DEFAULT_NICKNAME = "zl존 킹왕짱";

type GenderId = "male" | "female";

interface ClothesOption {
  id: OutfitId;
  label: string;
  src: string;
}

const GENDER_OPTIONS: {
  id: GenderId;
  character: CharacterId;
  label: string;
  src: string;
}[] = [
  {
    id: "male",
    character: "boy",
    label: "남자",
    src: "/assets/images/setting/boy.svg",
  },
  {
    id: "female",
    character: "girl",
    label: "여자",
    src: "/assets/images/setting/girl.svg",
  },
];

/** 옷 선택 칸 안 이미지 크기 (순서대로) */
const CLOTHES_IMG_SIZE = [
  { width: 67.96, height: 51.81 },
  { width: 57.87, height: 54.5 },
  { width: 62.16, height: 59.94 },
] as const;

const CLOTHES_BY_GENDER: Record<GenderId, ClothesOption[]> = {
  female: [
    {
      id: "girl-school",
      label: "교복",
      src: "/assets/images/setting/Girls'-school-uniform.svg",
    },
    {
      id: "girl-skirt",
      label: "후드",
      src: "/assets/images/setting/girl's-hoodie.svg",
    },
    {
      id: "girl-coat",
      label: "코트",
      src: "/assets/images/setting/girl's-coat.svg",
    },
  ],
  male: [
    {
      id: "boy-hood",
      label: "후드",
      src: "/assets/images/setting/boy's-hoodie.svg",
    },
    {
      id: "boy-jacket",
      label: "자켓",
      src: "/assets/images/setting/boy's-jacket.svg",
    },
    {
      id: "boy-knit",
      label: "니트",
      src: "/assets/images/setting/boy's-knitwear.svg",
    },
  ],
};

function genderFromCharacter(character: CharacterId | null): GenderId {
  return character === "boy" ? "male" : "female";
}

/**
 * 마이페이지 `/mypage` — 프로필 수정
 * 설정 → 프로필 수정
 */
export function MyPage() {
  const navigate = useNavigate();
  const saved = getProfileSetup();

  const initialGender = genderFromCharacter(saved.character);
  const initialClothes =
    saved.outfit &&
    CLOTHES_BY_GENDER[initialGender].some((item) => item.id === saved.outfit)
      ? saved.outfit
      : (CLOTHES_BY_GENDER[initialGender][0]?.id ?? "girl-school");
  const initialBg =
    saved.background &&
    BACKGROUND_OPTIONS.some((item) => item.id === saved.background)
      ? saved.background
      : "red";
  const initialNickname =
    saved.nickname && saved.nickname.trim()
      ? saved.nickname.trim()
      : DEFAULT_NICKNAME;

  const [savedNickname, setSavedNickname] = useState(initialNickname);
  const [nickname, setNickname] = useState(initialNickname);
  const [nicknamePopupOpen, setNicknamePopupOpen] = useState(false);
  const [genderId, setGenderId] = useState<GenderId>(initialGender);
  const [clothesId, setClothesId] = useState<OutfitId>(initialClothes);
  const [bgId, setBgId] = useState<BackgroundId>(initialBg);

  const clothesOptions = CLOTHES_BY_GENDER[genderId];
  const selectedClothes =
    clothesOptions.find((item) => item.id === clothesId) ?? null;
  const selectedBg =
    BACKGROUND_OPTIONS.find((item) => item.id === bgId) ??
    BACKGROUND_OPTIONS[0];

  const previewSrc = useMemo(
    () =>
      genderId === "male"
        ? "/assets/images/setting/boy.svg"
        : "/assets/images/setting/girl.svg",
    [genderId],
  );

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

  const handleGenderSelect = (id: GenderId) => {
    setGenderId(id);
    const nextClothes = CLOTHES_BY_GENDER[id][0]?.id;
    if (nextClothes) setClothesId(nextClothes);
  };

  const handleNicknameFocus = () => {
    setNickname("");
  };

  const handleNicknameBlur = () => {
    if (!nickname.trim()) {
      setNickname(savedNickname);
    }
  };

  const handleNicknameSubmit = () => {
    const next = nickname.trim();
    if (!next) {
      setNickname(savedNickname);
      return;
    }
    setNickname(next);
    setNicknamePopupOpen(true);
  };

  const closeNicknamePopup = () => {
    setNicknamePopupOpen(false);
  };

  const confirmNicknameChange = () => {
    const next = nickname.trim();
    if (next) {
      setSavedNickname(next);
      setNickname(next);
    }
    setNicknamePopupOpen(false);
    /* 닉네임 수정 결제 — 미확정 */
  };

  const handleProfileSave = () => {
    const gender = GENDER_OPTIONS.find((item) => item.id === genderId);
    if (gender) setProfileCharacter(gender.character);
    setProfileOutfit(clothesId);
    setProfileBackground(bgId);
    setProfileNickname(savedNickname);
    navigate("/settings", { replace: true });
  };

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
            <div
              className="mypage-profile__avatar"
              style={{
                backgroundImage: backgroundGradient(selectedBg.color),
              }}
              aria-hidden="true"
            >
              <div
                className={
                  genderId === "male"
                    ? "mypage-profile__figure mypage-profile__figure--male"
                    : "mypage-profile__figure"
                }
              >
                <img
                  className="mypage-profile__body"
                  src={previewSrc}
                  alt=""
                  width={53}
                  height={81}
                />
                {selectedClothes ? (
                  <img
                    className={
                      genderId === "male"
                        ? "mypage-profile__clothes mypage-profile__clothes--male"
                        : "mypage-profile__clothes"
                    }
                    src={selectedClothes.src}
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
                onFocus={handleNicknameFocus}
                onBlur={handleNicknameBlur}
                autoComplete="nickname"
              />
              <div className="mypage-profile__nickname-row">
                <Button
                  variant="popup"
                  className="mypage-profile__edit"
                  onClick={handleNicknameSubmit}
                >
                  <span className="mypage-profile__edit-label">수정</span>
                  <img
                    className="mypage-profile__edit-icon"
                    src="/assets/images/setting/crystal-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                </Button>
                <span
                  className="mypage-profile__cost"
                  aria-label={`닉네임 변경 ${NICKNAME_COST}코인`}
                >
                  <img
                    className="mypage-profile__cost-icon"
                    src="/assets/images/setting/crystal-coin.svg"
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

          <div className="mypage-window__panel">
            <div className="mypage-window__choices">
              <section className="mypage-gender" aria-label="성별 선택">
                <h3 className="mypage-gender__title">성별 선택</h3>
                <div className="mypage-gender__row">
                  {GENDER_OPTIONS.map((item) => (
                    <div className="mypage-gender__item" key={item.id}>
                      <SelectionBox
                        selected={genderId === item.id}
                        aria-label={item.label}
                        onClick={() => handleGenderSelect(item.id)}
                      >
                        <img
                          className={
                            item.id === "female"
                              ? "mypage-gender__img mypage-gender__img--female"
                              : "mypage-gender__img"
                          }
                          src={item.src}
                          alt=""
                          width={72}
                          height={110}
                        />
                      </SelectionBox>
                      <span className="mypage-gender__label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mypage-clothes" aria-label="옷 선택">
                <h3 className="mypage-clothes__title">옷 선택</h3>
                <div className="mypage-clothes__row">
                  {clothesOptions.map((item, index) => {
                    const size = CLOTHES_IMG_SIZE[index];
                    return (
                      <div className="mypage-clothes__item" key={item.id}>
                        <SelectionBox
                          selected={clothesId === item.id}
                          aria-label={item.label}
                          onClick={() => setClothesId(item.id)}
                        >
                          <img
                            className={`mypage-clothes__img mypage-clothes__img--${index + 1}`}
                            src={item.src}
                            alt=""
                            width={size.width}
                            height={size.height}
                            style={{
                              width: size.width,
                              height: size.height,
                            }}
                          />
                        </SelectionBox>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mypage-bg" aria-label="배경 선택">
                <h3 className="mypage-bg__title">배경 선택</h3>
                <div className="mypage-bg__row">
                  {BACKGROUND_OPTIONS.map((item) => (
                    <div className="mypage-bg__item" key={item.id}>
                      <SelectionBox
                        selected={bgId === item.id}
                        aria-label={item.label}
                        onClick={() => setBgId(item.id)}
                      >
                        <span
                          className="mypage-bg__swatch"
                          style={{
                            backgroundImage: backgroundGradient(item.color),
                          }}
                        />
                      </SelectionBox>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mypage-save">
            <Button
              variant="push"
              className="mypage-save__btn"
              onClick={handleProfileSave}
            >
              저장
            </Button>
          </div>
        </div>
      </article>

      <Popup
        open={nicknamePopupOpen}
        variant="info"
        message={
          <>
            닉네임 변경 시
            <br />
            {NICKNAME_COST} coin이 사용됩니다
            <br />
            변경하시겠습니까?
          </>
        }
        confirmLabel="확인"
        cancelLabel="취소"
        onConfirm={confirmNicknameChange}
        onCancel={closeNicknamePopup}
        onClose={closeNicknamePopup}
      />
    </section>
  );
}
