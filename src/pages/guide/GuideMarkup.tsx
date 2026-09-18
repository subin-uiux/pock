import { GuideOnboardDemo } from "@/pages/guide/GuideOnboardDemo";
import { GuideNavigationDemo } from "@/pages/guide/GuideNavigationDemo";
import { LetterCardTimerText } from "@/components/LetterCardTimerText";

/* Auto-generated from guide.html — do not hand-edit large chunks; re-run _tools/convert-guide.mjs */
import { GuideSendCategorySection } from "@/pages/guide/GuideSendCategorySection";
import { GuideSendTabsSection } from "@/pages/guide/GuideSendTabsSection";
import { GuideSignUpStepGaugeSection } from "@/pages/guide/GuideSignUpStepGaugeSection";
import { GuideSelectionBoxSection } from "@/pages/guide/GuideSelectionBoxSection";
import { GuideFriendCheckboxSection } from "@/pages/guide/GuideFriendCheckboxSection";
import { GuideFriendListSample } from "@/pages/guide/GuideFriendListSample";
import { SearchInput } from "@/components/SearchInput";

function guideDisplayDate(): string {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export function GuideMarkup() {
  const writeDate = guideDisplayDate();
  const receivedDate = guideDisplayDate();
  return (
    <>
      <div className="guide">
              <section className="logo-system" aria-labelledby="logo-system-title">
                <h1 className="logo-system__title" id="logo-system-title">LOGO</h1>
                <div className="logo-system__board">
                  <p className="logo-system__card-title">Logo</p>
                  <div className="logo-system__frame">
                    <img className="logo-system__image" src="/assets/images/logo.svg" alt="포크 심벌과 POCK 워드마크 로고" width={132} height={163} />
                  </div>
                </div>
              </section>

              <section className="grid-system" id="grid-system" aria-labelledby="grid-system-title">
                <h2 className="grid-system__title" id="grid-system-title">GRID</h2>
                <div className="grid-system__board grid-system__board--mobile">
                  <p className="grid-system__caption">Mobile – (360~768)</p>
                  <div className="grid-system__viewport grid-system__viewport--mobile">
                    <div className="grid-system__stage grid-system__stage--mobile" aria-hidden="true">
                      <div className="grid-system__sheet">
                        <div className="grid-system__track grid-system__track--mobile">
                          <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">20</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">12</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">12</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">12</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">20</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-system__board grid-system__board--pad">
                  <p className="grid-system__caption">Pad – (769~1024)</p>
                  <div className="grid-system__viewport grid-system__viewport--pad">
                    <div className="grid-system__stage grid-system__stage--pad" aria-hidden="true">
                      <div className="grid-system__sheet">
                        <div className="grid-system__track grid-system__track--pad">
                          <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">64</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                          <span className="grid-system__col"></span>
                          <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">64</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-system__board grid-system__board--pc">
                  <p className="grid-system__caption">Pc – (1025~1920)</p>
                  <div className="grid-system__viewport grid-system__viewport--pc">
                    <div className="grid-system__stage grid-system__stage--pc" aria-hidden="true">
                      <div className="grid-system__canvas">
                        <div className="grid-system__sheet">
                          <div className="grid-system__track grid-system__track--pad">
                            <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">64</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--gutter"><span className="grid-system__mark-value">24</span></span>
                            <span className="grid-system__col"></span>
                            <span className="grid-system__mark grid-system__mark--margin"><span className="grid-system__mark-value">64</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="color-system" aria-labelledby="color-system-title">
                <h2 className="color-system__title" id="color-system-title">COLOR</h2>
                <div className="color-system__board">
                  <section className="color-system__group" aria-labelledby="color-brand">
                    <h3 className="color-system__group-title" id="color-brand">BRAND CORE</h3>
                    <ul className="color-system__list color-system__list--brand">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--brand-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Brand / cyan-blue<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#4D95C2</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--brand-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Brand / cyan-blue<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#C1E0EA</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--brand-dark" aria-hidden="true"></span>
                        <span className="color-swatch__name">Brand / cyan-blue<span className="color-swatch__tone">dark</span></span>
                        <span className="color-swatch__hex">#00047C</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--brand-rainbow-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Brand / rainbow<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#2753F7</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--brand-rainbow-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Brand / rainbow<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#6786FB</span>
                      </li>
                    </ul>
                  </section>

                  <section className="color-system__group" aria-labelledby="color-rainbow-base">
                    <h3 className="color-system__group-title" id="color-rainbow-base">Rainbow - base</h3>
                    <ul className="color-system__list color-system__list--rainbow">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-red-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / red<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#FF3B30</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-orange-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / orange<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#FF9D00</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-yellow-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / yellow<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#FEF60C</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-green-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / green<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#35E875</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-blue-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / blue<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#058AFF</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-purple-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / purple<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#FFB9F3</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-pink-base" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / pink<span className="color-swatch__tone">base</span></span>
                        <span className="color-swatch__hex">#FFDDE9</span>
                      </li>
                    </ul>
                  </section>

                  <section className="color-system__group" aria-labelledby="color-rainbow-light">
                    <h3 className="color-system__group-title" id="color-rainbow-light">Rainbow - light</h3>
                    <ul className="color-system__list color-system__list--rainbow">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-red-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / red<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#FFD0D0</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-orange-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / orange<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#FFE4D0</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-yellow-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / yellow<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#FFF8D0</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-green-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / green<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#D0FFD6</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-blue-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / blue<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#C7DDFF</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-purple-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / purple<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#F2CDFF</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--rainbow-pink-light" aria-hidden="true"></span>
                        <span className="color-swatch__name">Rainbow / pink<span className="color-swatch__tone">Light</span></span>
                        <span className="color-swatch__hex">#FFE9F6</span>
                      </li>
                    </ul>
                  </section>

                  <section className="color-system__group" aria-labelledby="color-functional">
                    <h3 className="color-system__group-title" id="color-functional">Functional</h3>
                    <ul className="color-system__list color-system__list--functional">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--functional-orange" aria-hidden="true"></span>
                        <span className="color-swatch__name">Functional / orange</span>
                        <span className="color-swatch__hex">#E6640A</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--functional-green" aria-hidden="true"></span>
                        <span className="color-swatch__name">Functional / green</span>
                        <span className="color-swatch__hex">#A1E4AD</span>
                      </li>
                    </ul>
                  </section>

                  <section className="color-system__group" aria-labelledby="color-navigation">
                    <h3 className="color-system__group-title" id="color-navigation">Navigation</h3>
                    <ul className="color-system__list color-system__list--navigation">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--navigation-blue" aria-hidden="true"></span>
                        <span className="color-swatch__name">Navigation / blue</span>
                        <span className="color-swatch__hex">#2753F7</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--navigation-purple" aria-hidden="true"></span>
                        <span className="color-swatch__name">Navigation / purple</span>
                        <span className="color-swatch__hex">#9000FF</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--navigation-pink" aria-hidden="true"></span>
                        <span className="color-swatch__name">Navigation / pink</span>
                        <span className="color-swatch__hex">#FF00BF</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--navigation-green" aria-hidden="true"></span>
                        <span className="color-swatch__name">Navigation / green</span>
                        <span className="color-swatch__hex">#32C065</span>
                      </li>
                    </ul>
                  </section>

                  <section className="color-system__group" aria-labelledby="color-base">
                    <h3 className="color-system__group-title" id="color-base">Black/Grey/White</h3>
                    <ul className="color-system__list color-system__list--scale">
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-900" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 900</span>
                        <span className="color-swatch__hex">#333333</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-800" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 800</span>
                        <span className="color-swatch__hex">#4E4E4E</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-700" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 700</span>
                        <span className="color-swatch__hex">#6E6E6E</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-600" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 600</span>
                        <span className="color-swatch__hex">#898989</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-500" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 500</span>
                        <span className="color-swatch__hex">#ACACAC</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-400" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 400</span>
                        <span className="color-swatch__hex">#B4B4B4</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-300" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 300</span>
                        <span className="color-swatch__hex">#CCCCCC</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-200" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 200</span>
                        <span className="color-swatch__hex">#F2F2F2</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-100" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 100</span>
                        <span className="color-swatch__hex">#F8F8F8</span>
                      </li>
                      <li className="color-swatch">
                        <span className="color-swatch__chip color-swatch__chip--base-0" aria-hidden="true"></span>
                        <span className="color-swatch__name">base / 0</span>
                        <span className="color-swatch__hex">#FFFFFF</span>
                      </li>
                    </ul>
                  </section>
                </div>
              </section>

              <section className="type-system" aria-labelledby="type-system-title">
                <h2 className="type-system__title" id="type-system-title">TYPOGRAPHY — MOBILE</h2>
                <div className="type-system__board">
                  <h3 className="type-system__card-title" id="type-neo">01 / NeoDunggeunmo · 기본 14개</h3>
                  <p className="type-system__scroll-hint">표를 옆으로 밀면 전체 항목을 볼 수 있습니다.</p>
                  <div className="type-system__scroll" tabIndex={0}>
                    <table className="type-table" aria-labelledby="type-neo">
                      <thead>
                        <tr>
                          <th scope="col">스타일명</th>
                          <th scope="col">크기 px</th>
                          <th scope="col">자간</th>
                          <th scope="col">굵기</th>
                          <th scope="col">행간 · 기존 사용값</th>
                          <th scope="col">통합 수</th>
                          <th scope="col">사용 예시</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title1</th>
                          <td>30</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>4</td>
                          <td className="type-table__sample type-table__sample--neo">메시지 작성</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title2</th>
                          <td>26</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>1</td>
                          <td className="type-table__sample type-table__sample--neo">힌트</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title3</th>
                          <td>24</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>120% · 35px · Auto</td>
                          <td>10</td>
                          <td className="type-table__sample type-table__sample--neo">어떤 모습으로 출발할까요?</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title4</th>
                          <td>20</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>30</td>
                          <td className="type-table__sample type-table__sample--neo">리즌건? | 걷니</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Label1</th>
                          <td>20</td>
                          <td>5%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>4</td>
                          <td className="type-table__sample type-table__sample--neo">더</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title5</th>
                          <td>18</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>11</td>
                          <td className="type-table__sample type-table__sample--neo">잠금</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body1</th>
                          <td>16</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>100% · 120% · Auto · 17px · 35px · 25px</td>
                          <td>371</td>
                          <td className="type-table__sample type-table__sample--neo">좀</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body2</th>
                          <td>16</td>
                          <td>-2%</td>
                          <td>400</td>
                          <td>130% · Auto · 150%</td>
                          <td>10</td>
                          <td className="type-table__sample type-table__sample--neo">정말 친구삭제하시겠습니까?</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body3</th>
                          <td>15</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 110%</td>
                          <td>5</td>
                          <td className="type-table__sample type-table__sample--neo">좀</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body4</th>
                          <td>14</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 100% · 30.4571px · 30.6765px · 130% · 150% · 17px · 120% · 25px</td>
                          <td>196</td>
                          <td className="type-table__sample type-table__sample--neo">잠김</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body5</th>
                          <td>14</td>
                          <td>-2%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>8</td>
                          <td className="type-table__sample type-table__sample--neo">프로필 수정</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body6</th>
                          <td>13</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 17px · 25px</td>
                          <td>12</td>
                          <td className="type-table__sample type-table__sample--neo">집에 좀 와라 보고싶다</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Caption1</th>
                          <td>12</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>100% · Auto</td>
                          <td>30</td>
                          <td className="type-table__sample type-table__sample--neo">전체보기 &gt;</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Caption2</th>
                          <td>7</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>10</td>
                          <td className="type-table__sample type-table__sample--neo">I luv my friends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="type-system__board">
                  <h3 className="type-system__card-title" id="type-doc">02 / Pretendard · 문서 6개</h3>
                  <p className="type-system__scroll-hint">표를 옆으로 밀면 전체 항목을 볼 수 있습니다.</p>
                  <div className="type-system__scroll" tabIndex={0}>
                    <table className="type-table" aria-labelledby="type-doc">
                      <thead>
                        <tr>
                          <th scope="col">스타일명</th>
                          <th scope="col">크기 px</th>
                          <th scope="col">자간</th>
                          <th scope="col">굵기</th>
                          <th scope="col">행간 · 기존 사용값</th>
                          <th scope="col">통합 수</th>
                          <th scope="col">사용 예시</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Title1</th>
                          <td>24</td>
                          <td>-2%</td>
                          <td>600</td>
                          <td>150%</td>
                          <td>1</td>
                          <td className="type-table__sample type-table__sample--doc">POCK 개인정보처리방침 (가상)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Title2</th>
                          <td>24</td>
                          <td>1%</td>
                          <td>600</td>
                          <td>150%</td>
                          <td>1</td>
                          <td className="type-table__sample type-table__sample--doc">POCK 서비스 이용약관 (가상)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Body1</th>
                          <td>16</td>
                          <td>1%</td>
                          <td>500 / 600</td>
                          <td>150%</td>
                          <td>16</td>
                          <td className="type-table__sample type-table__sample--doc">제1조 (목적)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Body2</th>
                          <td>14</td>
                          <td>0%</td>
                          <td>600</td>
                          <td>140% · Auto</td>
                          <td>3</td>
                          <td className="type-table__sample type-table__sample--doc">본 문서는 POCK 서비스 기획</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Body3</th>
                          <td>14</td>
                          <td>-2%</td>
                          <td>400</td>
                          <td>150%</td>
                          <td>2</td>
                          <td className="type-table__sample type-table__sample--doc">시행일자 : 2026년 9월</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document/Body4</th>
                          <td>14</td>
                          <td>1%</td>
                          <td>400 / 500</td>
                          <td>150%</td>
                          <td>25</td>
                          <td className="type-table__sample type-table__sample--doc">시행일자 : 2026년 9월</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h2 className="type-system__title" id="type-system-pad-title">TYPOGRAPHY — PAD / PC</h2>
                <div className="type-system__board">
                  <h3 className="type-system__card-title" id="type-neo-pad">01 / NeoDunggeunmo · 기본 17개</h3>
                  <p className="type-system__scroll-hint">표를 옆으로 밀면 전체 항목을 볼 수 있습니다.</p>
                  <div className="type-system__scroll" tabIndex={0}>
                    <table className="type-table" aria-labelledby="type-neo-pad">
                      <thead>
                        <tr>
                          <th scope="col">그룹명 · PAD/PC</th>
                          <th scope="col">크기 px</th>
                          <th scope="col">자간</th>
                          <th scope="col">굵기</th>
                          <th scope="col">행간 · 기존 사용값</th>
                          <th scope="col">통합 수</th>
                          <th scope="col">사용 예시</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title1 / Max</th>
                          <td>42</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>120% · 45px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">어떤 이름으로 시작할까요?</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title1 / Min ref</th>
                          <td>36</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>120% · 45px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">어떤 이름으로 시작할까요?</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title2</th>
                          <td>32</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">POCK 작성</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title3</th>
                          <td>28</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">Loading ...</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Title4</th>
                          <td>24</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 25px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">편지지</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body1</th>
                          <td>22</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>25px · 47.8242px · 18.75px · 35px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">POCK에서 사용할 닉네임을 입력해</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Label1</th>
                          <td>20</td>
                          <td>5%</td>
                          <td>400</td>
                          <td>100%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">ON</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body2</th>
                          <td>20</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 18.75px · 35.2681px · 25px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">이전으로</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body3</th>
                          <td>18</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 100% · 150%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">잠금</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body4</th>
                          <td>16</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 100% · 120%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">10 coin</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body5</th>
                          <td>16</td>
                          <td>-2%</td>
                          <td>400</td>
                          <td>Auto · 130% · 150%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">5코인을 사용하여 편지지를 구매하</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body6 / Original</th>
                          <td>15.886</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">출석 현황</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body7 / Original</th>
                          <td>15.5353</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>29.8755px</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">반가워요</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body8</th>
                          <td>14</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 25px · 38.4971px · 30.6765px · 130% · 120%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">친구선택</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Body9</th>
                          <td>13</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 100%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">집에 좀 와라 보고싶다</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Caption1</th>
                          <td>12</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto · 100%</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">5</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--neo" scope="row">Caption2</th>
                          <td>10</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>—</td>
                          <td className="type-table__sample type-table__sample--neo">아직 계정이 없나요?</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="type-system__board">
                  <h3 className="type-system__card-title" id="type-doc-pad">02 / Pretendard · 문서·보조 6개</h3>
                  <p className="type-system__scroll-hint">표를 옆으로 밀면 전체 항목을 볼 수 있습니다.</p>
                  <div className="type-system__scroll" tabIndex={0}>
                    <table className="type-table" aria-labelledby="type-doc-pad">
                      <thead>
                        <tr>
                          <th scope="col">그룹명 · PAD/PC</th>
                          <th scope="col">크기 px</th>
                          <th scope="col">자간</th>
                          <th scope="col">굵기</th>
                          <th scope="col">행간 · 기존 사용값</th>
                          <th scope="col">통합 수</th>
                          <th scope="col">사용 예시</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Title1</th>
                          <td>24</td>
                          <td>1%</td>
                          <td>600</td>
                          <td>150%</td>
                          <td>1</td>
                          <td className="type-table__sample type-table__sample--doc">POCK 서비스 이용약관 (가상)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Title2</th>
                          <td>20</td>
                          <td>-2%</td>
                          <td>600</td>
                          <td>150%</td>
                          <td>1</td>
                          <td className="type-table__sample type-table__sample--doc">POCK 개인정보처리방침 (가상)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Body1</th>
                          <td>16</td>
                          <td>1%</td>
                          <td>500 / 600</td>
                          <td>150%</td>
                          <td>16</td>
                          <td className="type-table__sample type-table__sample--doc">제1조 (목적)</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Body2</th>
                          <td>14</td>
                          <td>1%</td>
                          <td>400 / 600 / 500</td>
                          <td>150%</td>
                          <td>27</td>
                          <td className="type-table__sample type-table__sample--doc">시행일자 : 2026년 08월 08</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Body3</th>
                          <td>14</td>
                          <td>-2%</td>
                          <td>400</td>
                          <td>150%</td>
                          <td>2</td>
                          <td className="type-table__sample type-table__sample--doc">시행일자 : 2026년 08월 08</td>
                        </tr>
                        <tr>
                          <th className="type-table__name type-table__name--doc" scope="row">Document / Caption</th>
                          <td>12</td>
                          <td>0%</td>
                          <td>400</td>
                          <td>Auto</td>
                          <td>3</td>
                          <td className="type-table__sample type-table__sample--doc">5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="nav-system" id="nav-system" aria-labelledby="nav-system-title">
                <h2 className="nav-system__title" id="nav-system-title">NAVIGATION</h2>
                <div className="nav-system__board">
                  <h3 className="nav-system__card-title">Navigation</h3>
                  <GuideNavigationDemo />
                </div>

              </section>

              <section className="btn-system" id="btn-system" aria-labelledby="btn-system-title">
                <h2 className="btn-system__title" id="btn-system-title">BUTTON</h2>

                <div className="btn-system__board btn-system__board--push">
                  <h3 className="btn-system__card-title">01 / Push btn</h3>
                  <div className="btn-system__sample">
                    <p className="btn-system__state">Default · Mo 320~460</p>
                    <p className="btn-system__hint" id="btn-push-resize-hint">
                      오른쪽 아래 모서리를 드래그해 너비를 조절하세요. Push 버튼은 320~460 사이에서
                      컨테이너에 맞춰 늘어납니다.
                    </p>
                    <div
                      className="btn-system__resize"
                      role="group"
                      aria-labelledby="btn-push-resize-hint"
                    >
                      <div className="btn-system__stack">
                        <button type="button" className="btn btn--push-muted btn--block">
                          Text
                        </button>
                        <button type="button" className="btn btn--push btn--block">
                          Text
                        </button>
                        <button type="button" className="btn btn--push-green btn--block">
                          Text
                        </button>
                      </div>
                    </div>
                    <p className="btn-system__state">Guide Button</p>
                    <button type="button" className="btn btn--guide">
                      Text
                    </button>
                  </div>
                </div>

                <div className="btn-system__rows">
                  <div className="btn-system__row">
                    <div className="btn-system__board">
                      <h3 className="btn-system__card-title">02 / Popup_btn</h3>
                      <div className="btn-system__sample">
                        <p className="btn-system__state">Default</p>
                        <button type="button" className="btn btn--popup">
                          Text
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="btn-system__row">
                    <div className="btn-system__board">
                      <h3 className="btn-system__card-title">03 / Action_btn</h3>
                      <div className="btn-system__sample">
                        <p className="btn-system__state">Type = Icon</p>
                        <button type="button" className="btn btn--action-icon">
                          <span className="btn__icon" aria-hidden="true"></span>
                          Text
                        </button>
                        <p className="btn-system__state">Type = Text</p>
                        <button type="button" className="btn btn--action-text">
                          Text
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="card-system" id="card-system" aria-labelledby="card-system-title">
                <h2 className="card-system__title" id="card-system-title">Card</h2>
                <div className="card-system__columns">
                  <div className="card-system__board">
                    <h3 className="card-system__card-title">01 / 발신함 (Mo)</h3>
                    <ul className="card-system__list">
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Countdown)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--progress">
                              <div className="letter-card__meter" aria-hidden="true">
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                              </div>
                              <span className="letter-card__dday">D-7</span>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Timer)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--timer">
                              <LetterCardTimerText />
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Unopened)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--unopened">미오픈</div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Open)</p>
                        <article className="letter-card letter-card--open letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__open">
                            <div className="letter-card__thumb" aria-hidden="true"></div>
                            <dl className="letter-card__meta">
                              <div className="letter-card__row">
                                <dt className="letter-card__key">제목</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">개봉일</dt>
                                <dd className="letter-card__value">20xx.00.00</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">수신자</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                            </dl>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>

                  <div className="card-system__board card-system__board--wide">
                    <h3 className="card-system__card-title">01 / 발신함 (Tb, Pc)</h3>
                    <ul className="card-system__list">
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Countdown)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--progress">
                              <div className="letter-card__meter" aria-hidden="true">
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                                <span className="letter-card__block letter-card__block--empty"></span>
                              </div>
                              <span className="letter-card__dday">D-7</span>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Timer)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--timer">
                              <LetterCardTimerText />
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Unopened)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--unopened">미오픈</div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Open)</p>
                        <article className="letter-card letter-card--open letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__open">
                            <div className="letter-card__thumb" aria-hidden="true"></div>
                            <dl className="letter-card__meta">
                              <div className="letter-card__row">
                                <dt className="letter-card__key">제목</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">개봉일</dt>
                                <dd className="letter-card__value">20xx.00.00</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">수신자</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                            </dl>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-system__columns">
                  <div className="card-system__board">
                    <h3 className="card-system__card-title">02 / 수신함 (Mo)</h3>
                    <ul className="card-system__list">
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Box)</p>
                        <article className="letter-card letter-card--gift letter-card--mo" aria-label="새 수신 카드">
                          <img className="letter-card__gift-image" src="/assets/images/letter/letter_Before-opening.webp" alt="" width={960} height={620} />
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Countdown)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--progress">
                                <div className="letter-card__meter" aria-hidden="true">
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                </div>
                                <span className="letter-card__dday">D-7</span>
                              </div>
                              <button type="button" className="letter-card__reward">
                                <img className="letter-card__coin" src="/assets/images/coin.svg" alt="" width={13} height={10} />
                                <span>초성 보기</span>
                              </button>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Timer)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--timer">
                              <LetterCardTimerText />
                            </div>
                              <button type="button" className="letter-card__reward">
                                <img className="letter-card__coin" src="/assets/images/coin.svg" alt="" width={13} height={10} />
                                <span>초성 보기</span>
                              </button>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Open)</p>
                        <article className="letter-card letter-card--open letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__open">
                            <div className="letter-card__thumb" aria-hidden="true"></div>
                            <dl className="letter-card__meta">
                              <div className="letter-card__row">
                                <dt className="letter-card__key">제목</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">받은일시</dt>
                                <dd className="letter-card__value">20xx.00.00</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">발신인</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                            </dl>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>

                  <div className="card-system__board card-system__board--wide">
                    <h3 className="card-system__card-title">02 / 수신함 (Tb, Pc)</h3>
                    <ul className="card-system__list">
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Box)</p>
                        <article className="letter-card letter-card--gift letter-card--tb" aria-label="새 수신 카드">
                          <img className="letter-card__gift-image" src="/assets/images/letter/letter_Before-opening.webp" alt="" width={960} height={620} />
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Countdown)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--progress">
                                <div className="letter-card__meter" aria-hidden="true">
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                  <span className="letter-card__block letter-card__block--empty"></span>
                                </div>
                                <span className="letter-card__dday">D-7</span>
                              </div>
                              <button type="button" className="letter-card__reward">
                                <img className="letter-card__coin" src="/assets/images/coin.svg" alt="" width={13} height={10} />
                                <span>초성 보기</span>
                              </button>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Timer)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.png" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--timer">
                              <LetterCardTimerText />
                            </div>
                              <button type="button" className="letter-card__reward">
                                <img className="letter-card__coin" src="/assets/images/coin.svg" alt="" width={13} height={10} />
                                <span>초성 보기</span>
                              </button>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-received (Open)</p>
                        <article className="letter-card letter-card--open letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__open">
                            <div className="letter-card__thumb" aria-hidden="true"></div>
                            <dl className="letter-card__meta">
                              <div className="letter-card__row">
                                <dt className="letter-card__key">제목</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">받은일시</dt>
                                <dd className="letter-card__value">20xx.00.00</dd>
                              </div>
                              <div className="letter-card__row">
                                <dt className="letter-card__key">발신인</dt>
                                <dd className="letter-card__value">Text</dd>
                              </div>
                            </dl>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="letter-system" id="letter-system" aria-labelledby="letter-system-title">
                <h2 className="letter-system__title" id="letter-system-title">LETTER</h2>
                <div className="letter-system__board">
                  <h3 className="letter-system__card-title">01 / Letter card - normal (Mo)</h3>
                  <ul className="letter-system__list">
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Red)</p>
                        <article className="letter letter--mo letter--red">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Orange)</p>
                        <article className="letter letter--mo letter--orange">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Yellow)</p>
                        <article className="letter letter--mo letter--yellow">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Green)</p>
                        <article className="letter letter--mo letter--green">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Blue)</p>
                        <article className="letter letter--mo letter--blue">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Purple)</p>
                        <article className="letter letter--mo letter--purple">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Pink)</p>
                        <article className="letter letter--mo letter--pink">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>
                <div className="letter-system__board letter-system__board--wide">
                  <h3 className="letter-system__card-title">01 / Letter card - normal (Tb, Pc)</h3>
                  <ul className="letter-system__list">
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Red)</p>
                        <article className="letter letter--tb letter--red">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Orange)</p>
                        <article className="letter letter--tb letter--orange">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Yellow)</p>
                        <article className="letter letter--tb letter--yellow">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Green)</p>
                        <article className="letter letter--tb letter--green">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Blue)</p>
                        <article className="letter letter--tb letter--blue">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Purple)</p>
                        <article className="letter letter--tb letter--purple">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Pink)</p>
                        <article className="letter letter--tb letter--pink">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>
                <div className="letter-system__board">
                  <h3 className="letter-system__card-title">02 / Letter - special (Mo)</h3>
                  <ul className="letter-system__list">
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Rainbow)</p>
                        <article className="letter letter--mo letter--rainbow">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Heart)</p>
                        <article className="letter letter--mo letter--heart">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Star)</p>
                        <article className="letter letter--mo letter--star">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Stripe)</p>
                        <article className="letter letter--mo letter--stripe">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Clover)</p>
                        <article className="letter letter--mo letter--clover">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>
                <div className="letter-system__board letter-system__board--wide">
                  <h3 className="letter-system__card-title">02 / Letter - special (Tb, Pc)</h3>
                  <ul className="letter-system__list">
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Rainbow)</p>
                        <article className="letter letter--tb letter--rainbow">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Heart)</p>
                        <article className="letter letter--tb letter--heart">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Star)</p>
                        <article className="letter letter--tb letter--star">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Stripe)</p>
                        <article className="letter letter--tb letter--stripe">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="letter-system__item">
                        <p className="letter-system__caption">Letter (Clover)</p>
                        <article className="letter letter--tb letter--clover">
                          <button className="letter__expand" type="button" aria-label="닫기"><img className="letter__expand-icon" src="/assets/images/pixelarticons_close.svg" alt="" width={18} height={18} /></button>
                          <div className="letter__media"></div>
                          <div className="letter__content">
                            <div className="letter__text">
                              <h4 className="letter__title">제목</h4>
                              <p className="letter__body">걸음마다 눈부신 나 Let's get it star
      모든 순간 시선을 난 피하지 않지
      나를 스친 그 순간 지금은 Chasing
      아주 눈이 부신 너를 숨김없이 보여줘
      한 번도 빛난 적 없었던 미지의 향으로
      온 세상을 물들여 새로워진 장면에 두
      눈앞 황홀해 너의 손을 잡을 때
      너와 어우러질 때</p>
                            </div>
                            <div className="letter__foot">
                              <span className="letter__from">FROM. 발신인</span>
                              <time className="letter__date" dateTime={receivedDate.replace(/\./g, "-")} aria-label="받은 날짜">{receivedDate}</time>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>
              </section>

              <section className="window-system" id="window-system" aria-labelledby="window-system-title">
                <h2 className="window-system__title" id="window-system-title">WINDOW GRAPHGIC</h2>
                <div className="window-system__board">
                  <h3 className="window-system__card-title">01 / Friend_list</h3>
                  <div className="window-system__samples">
                    <div className="window-system__sample">
                      <GuideFriendListSample size="mo" />
                    </div>

                    <div className="window-system__sample">
                      <GuideFriendListSample size="tb" />
                    </div>

                    <div className="window-system__sample">
                      <GuideFriendListSample size="pc" />
                    </div>
                  </div>
                </div>
                <div className="window-system__board window-system__board--header">
                  <h3 className="window-system__card-title">01-1 / Window Header</h3>
                  <div className="window-system__header-samples">
                    <div className="window-system__header-item">
                      <p className="window-system__caption">window header_txt</p>
                      <header className="pock-window__bar pock-window__bar--standalone pock-window__bar--w-mo">
                        <h4 className="pock-window__title">친구목록</h4>
                        <div className="pock-window__actions">
                          <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                          <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                            <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                          </span>
                        </div>
                      </header>
                    </div>
                    <div className="window-system__header-row">
                      <div className="window-system__header-item">
                        <p className="window-system__caption">window header_normal (Mo)</p>
                        <header className="pock-window__bar pock-window__bar--standalone pock-window__bar--normal pock-window__bar--w-mo-fit">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                      </div>
                      <div className="window-system__header-item">
                        <p className="window-system__caption">window header_normal (Tb, Pc)</p>
                        <header className="pock-window__bar pock-window__bar--standalone pock-window__bar--normal pock-window__bar--w-tb-pc">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="window-system" id="letter-write-system" aria-labelledby="letter-write-system-title">
                <div className="window-system__board">
                  <h3 className="window-system__card-title" id="letter-write-system-title">02 / Letter_write</h3>
                  <div className="window-system__samples">
                    <div className="window-system__sample">
                      <article className="letter-write letter-write--mo" aria-label="POCK 작성">
                        <div className="letter-write__status">
                          <img className="letter-write__signal" src="/assets/images/Signal.svg" alt="" width={18} height={12} />
                          <div className="letter-write__coin">
                            <img className="letter-write__coin-icon" src="/assets/images/coin.svg" alt="" width={14} height={14} />
                            <span>10 coin</span>
                          </div>
                        </div>
                        <div className="letter-write__main">
                          <div className="letter-write__top">
                            <h4 className="letter-write__title">POCK 작성</h4>
                            <button className="btn btn--action-text letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="편지 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <time className="letter-write__date" dateTime={writeDate.replace(/\./g, "-")} aria-label="작성일">{writeDate}</time>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn--push btn--block letter-write__send" type="button">보내기</button>
                      </article>
                    </div>

                    <div className="window-system__sample">
                      <article className="letter-write letter-write--tb" aria-label="POCK 작성">
                        <div className="letter-write__status">
                          <img className="letter-write__signal" src="/assets/images/Signal.svg" alt="" width={18} height={12} />
                          <div className="letter-write__coin">
                            <img className="letter-write__coin-icon" src="/assets/images/coin.svg" alt="" width={14} height={14} />
                            <span>10 coin</span>
                          </div>
                        </div>
                        <div className="letter-write__main">
                          <div className="letter-write__top">
                            <h4 className="letter-write__title">POCK 작성</h4>
                            <button className="btn btn--action-text letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="편지 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <time className="letter-write__date" dateTime={writeDate.replace(/\./g, "-")} aria-label="작성일">{writeDate}</time>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn--push btn--block letter-write__send" type="button">보내기</button>
                      </article>
                    </div>

                    <div className="window-system__sample">
                      <article className="letter-write letter-write--pc" aria-label="POCK 작성">
                        <div className="letter-write__status">
                          <img className="letter-write__signal" src="/assets/images/Signal.svg" alt="" width={18} height={12} />
                          <div className="letter-write__coin">
                            <img className="letter-write__coin-icon" src="/assets/images/coin.svg" alt="" width={14} height={14} />
                            <span>10 coin</span>
                          </div>
                        </div>
                        <div className="letter-write__main">
                          <div className="letter-write__top">
                            <h4 className="letter-write__title">POCK 작성</h4>
                            <button className="btn btn--action-text letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="btn btn--action-icon letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="편지 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <time className="letter-write__date" dateTime={writeDate.replace(/\./g, "-")} aria-label="작성일">{writeDate}</time>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn--push btn--block letter-write__send" type="button">보내기</button>
                      </article>
                    </div>
                  </div>
                </div>
              </section>

              <GuideSendCategorySection />

              <GuideSendTabsSection />

              <GuideSignUpStepGaugeSection />

              <GuideSelectionBoxSection />

              <GuideFriendCheckboxSection />

              <section className="overlay-system" id="overlay-system" aria-labelledby="overlay-system-title">
                <h2 className="overlay-system__title" id="overlay-system-title">DIMMED OVERLAY</h2>
                <div className="overlay-system__board">
                  <h3 className="overlay-system__card-title">Dimmed Overlay</h3>
                  <div className="overlay-system__stage">
                    <p className="overlay-system__caption">Dimmed Overlay</p>
                    <div className="dimmed-overlay dimmed-overlay--preview" aria-hidden="true"></div>
                    <p className="overlay-system__spec">Fill : #000000
      Opacity : 64%
      Background Blur : 16px
      Coverage : Full Screen</p>
                  </div>
                </div>
              </section>

              <section className="popup-system" id="popup-system" aria-labelledby="popup-system-title">
                <h2 className="popup-system__title" id="popup-system-title">POPUP</h2>
                <div className="popup-system__board">
                  <h3 className="popup-system__card-title">Window - popup</h3>
                  <div className="popup-system__samples">
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Info_popup (Mo)</p>
                      <article className="pock-popup pock-popup--info pock-popup--mo" aria-label="정보">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-mo-fit pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={7} height={5} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Info_popup-icon.svg" alt="" width={36} height={36} />
                          <p className="pock-popup__text">Text</p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">취소</button>
                          <button className="btn btn--popup" type="button">확인</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Info_popup (Tb, Pc)</p>
                      <article className="pock-popup pock-popup--info pock-popup--tb" aria-label="정보">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-tb-pc pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Info_popup-icon.svg" alt="" width={36} height={36} />
                          <p className="pock-popup__text">Text</p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">취소</button>
                          <button className="btn btn--popup" type="button">확인</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Warning Popup (Mo)</p>
                      <article className="pock-popup pock-popup--warning pock-popup--mo" aria-label="경고">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-mo-fit pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={7} height={5} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Warning%20_Popup-icon.svg" alt="" width={36} height={36} />
                          <p className="pock-popup__text">
                            <span className="pock-popup__heading">POCK을 정말 떠나시겠어요?</span><br />
                            탈퇴하면 지금까지의 편지와 기록이 모두 삭제되며 다시 복구할 수 없습니다.
                          </p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">취소</button>
                          <button className="btn btn--popup" type="button">확인</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Warning Popup (Tb, Pc)</p>
                      <article className="pock-popup pock-popup--warning pock-popup--tb" aria-label="경고">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-tb-pc pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Warning%20_Popup-icon.svg" alt="" width={36} height={36} />
                          <p className="pock-popup__text">
                            <span className="pock-popup__heading">POCK을 정말 떠나시겠어요?</span><br />
                            탈퇴하면 지금까지의 편지와 기록이 모두 삭제되며 다시 복구할 수 없습니다.
                          </p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">취소</button>
                          <button className="btn btn--popup" type="button">확인</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Onboarding Guide Popup</p>
                      <div className="popup-system__stage">
                        <GuideOnboardDemo />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="search-system" id="search-system" aria-labelledby="search-system-title">
                <h2 className="search-system__title" id="search-system-title">SEARCH INPUT</h2>
                <div className="search-system__board">
                  <h3 className="search-system__card-title">Search Input</h3>
                  <div className="search-system__stage">
                    <p className="search-system__caption">Search Input</p>
                    <SearchInput
                      id="guide-search-mo"
                      className="search-input--mo"
                      label="검색어"
                    />
                    <SearchInput
                      id="guide-search-wide"
                      className="search-input--wide"
                      label="검색어"
                    />
                  </div>
                </div>
              </section>
            </div>
    </>
  );
}
