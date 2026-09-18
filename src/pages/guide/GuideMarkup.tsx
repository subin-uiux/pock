/* Auto-generated from guide.html — do not hand-edit large chunks; re-run _tools/convert-guide.mjs */
import { GuideSendCategorySection } from "@/pages/guide/GuideSendCategorySection";
import { GuideSendTabsSection } from "@/pages/guide/GuideSendTabsSection";

export function GuideMarkup() {
  return (
    <>
      <div className="guide">
              <section className="logo-system" aria-labelledby="logo-system-title">
                <p className="logo-system__eyebrow">POCK · Logo system</p>
                <div className="logo-system__panel">
                  <h1 className="logo-system__title" id="logo-system-title">LOGO</h1>
                  <p className="logo-system__lead">심벌 + 워드마크 = 하나의 로고</p>
                  <p className="logo-system__desc">POCK의 브랜드 아이덴티티를 나타내는 기본 로고입니다. 포크 심벌과 워드마크의 조합으로 구성하며, 모든 화면에서 동일한 비율과 형태를 유지하여 사용합니다.</p>
                </div>
                <h2 className="logo-system__label" id="logo-system-board">Logo</h2>
                <div className="logo-system__board">
                  <p className="logo-system__card-title">Logo</p>
                  <div className="logo-system__frame">
                    <img className="logo-system__image" src="/assets/images/logo.svg" alt="포크 심벌과 POCK 워드마크 로고" width={132} height={163} />
                  </div>
                </div>
              </section>

              <section className="grid-system" id="grid-system" aria-labelledby="grid-system-title">
                <p className="grid-system__eyebrow">POCK · Grid system</p>
                <div className="grid-system__panel">
                  <h2 className="grid-system__title" id="grid-system-title">GRID</h2>
                  <p className="grid-system__lead">설계 · 가이드라인 · 레이아웃 안내</p>
                  <p className="grid-system__desc">POCK은 화면 크기에 따라 컬럼과 콘텐츠 영역이 유동적으로 조정됩니다.<br />Mobile은 360–768px, Tablet은 769–1024px을 기준으로 반응하며,<br />1025–1920px에서는 Tablet의 최대 너비를 유지한 채 화면 중앙에 정렬됩니다.</p>
                </div>

                <p className="grid-system__label">Mobile</p>
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

                <p className="grid-system__label">Pad</p>
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

                <p className="grid-system__label">Pc (Pad 최대 사이즈 가운데 정렬)</p>
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
                <p className="color-system__eyebrow">POCK · Color system</p>
                <div className="color-system__panel">
                  <h2 className="color-system__title" id="color-system-title">COLOR</h2>
                  <p className="color-system__lead">역할 + 명도 + 용도 = 하나의 컬러</p>
                  <p className="color-system__groups">총 6가지 컬러 그룹 | Brand Core · Rainbow Base · Rainbow Light · Functional · Navigation · Black/Grey/White</p>
                  <p className="color-system__desc">브랜드 아이덴티티와 UI의 역할에 따라 컬러를 구분하여 사용합니다. Base / Light 단계로 명도를 구분하고, 기능·내비게이션·텍스트·배경 등 각 목적에 맞는 컬러를 적용합니다.</p>
                </div>

                <p className="color-system__label" id="color-system-board">Color</p>
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
                <p className="type-system__eyebrow">POCK · Typography system</p>
                <div className="type-system__panel">
                  <h2 className="type-system__title" id="type-system-title">TYPOGRAPHY — MOBILE</h2>
                  <p className="type-system__lead">같은 폰트 + 같은 크기 + 같은 자간 = 하나의 그룹</p>
                  <p className="type-system__groups">총 2그룹 | 기본 14 · 문서 6 | UI는 NeoDunggeunmo 400으로 통합</p>
                  <p className="type-system__desc">Title1 · Body1 · Caption1 형식의 그룹명입니다. 행간·굵기 차이는 같은 행에 함께 표시했습니다. 통합 수는 원본 서식 구간 수(숨김 포함)입니다.</p>
                </div>

                <p className="type-system__label">01 / NeoDunggeunmo · 기본 14개</p>
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

                <p className="type-system__label">02 / Pretendard · 문서 6개</p>
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

                <p className="type-system__eyebrow">POCK · Typography system</p>
                <div className="type-system__panel">
                  <h2 className="type-system__title" id="type-system-pad-title">TYPOGRAPHY — PAD / PC</h2>
                  <p className="type-system__lead">같은 폰트 + 같은 크기 + 같은 자간 = 하나의 그룹</p>
                  <p className="type-system__groups">모바일 360–768 · PAD 최대 기준 1024 · PC 콘텐츠 최대 1024 · 가운데 정렬</p>
                  <p className="type-system__desc">PC는 PAD(1024)에서 쓰는 글자 크기·행간·자간을 유지합니다. 화면이 더 넓어져도 텍스트는 더 커지지 않습니다.</p>
                </div>

                <p className="type-system__label">PAD / PC · 01 / NeoDunggeunmo · 기본 17개</p>
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

                <p className="type-system__label">PAD / PC · 02 / Pretendard · 문서·보조 6개</p>
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
                <p className="nav-system__eyebrow">POCK · Navigation system</p>
                <div className="nav-system__panel">
                  <h2 className="nav-system__title" id="nav-system-title">NAVIGATION</h2>
                  <p className="nav-system__lead">메뉴 + 디바이스 = 하나의 내비게이션</p>
                  <p className="nav-system__groups">총 5가지 메뉴 | 홈 · 보관함 · 보내기 · 전송함 · 설정</p>
                  <p className="nav-system__desc">주요 화면으로 이동하는 공통 내비게이션으로, Mobile과 PAD / PC 환경에 따라 레이아웃과 형태를 구분하여 사용합니다.</p>
                </div>
                <p className="nav-system__label">Navigation</p>
                <div className="nav-system__board">
                  <h3 className="nav-system__card-title">Navigation</h3>
                  <div className="nav-system__variant">
                    <p className="nav-system__device">Mo</p>
                    <nav className="navigation navigation--preview navigation--mo" aria-label="모바일 내비게이션 예시">
                      <ul className="navigation__list">
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/home.svg" alt="" width={50} height={42} />
                            <span className="navigation__label">홈</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link navigation__link--active" href="#nav-system" aria-current="page">
                            <img className="navigation__icon" src="/assets/icons/navigation/Storage%20Box.svg" alt="" width={60} height={60} />
                            <span className="navigation__label">보관함</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/sand.svg" alt="" width={44} height={50} />
                            <span className="navigation__label">보내기</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/Sent.svg" alt="" width={42} height={43} />
                            <span className="navigation__label">전송함</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/setting.svg" alt="" width={54} height={54} />
                            <span className="navigation__label">설정</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="nav-system__variant">
                    <p className="nav-system__device">Pad / Pc</p>
                    <nav className="navigation navigation--preview navigation--pad" aria-label="패드와 PC 내비게이션 예시">
                      <ul className="navigation__list">
                        <li className="navigation__item">
                          <a className="navigation__link navigation__link--active" href="#nav-system" aria-current="page">
                            <img className="navigation__icon" src="/assets/icons/navigation/home.svg" alt="" width={60} height={60} />
                            <span className="navigation__label">홈</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/Storage%20Box.svg" alt="" width={54} height={54} />
                            <span className="navigation__label">보관함</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/sand.svg" alt="" width={44} height={50} />
                            <span className="navigation__label">보내기</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/Sent.svg" alt="" width={42} height={43} />
                            <span className="navigation__label">전송함</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a className="navigation__link" href="#nav-system">
                            <img className="navigation__icon" src="/assets/icons/navigation/setting.svg" alt="" width={54} height={54} />
                            <span className="navigation__label">설정</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </section>

              <section className="btn-system" id="btn-system" aria-labelledby="btn-system-title">
                <p className="btn-system__eyebrow">POCK · Button system</p>
                <div className="btn-system__panel">
                  <h2 className="btn-system__title" id="btn-system-title">BUTTON</h2>
                  <p className="btn-system__lead">역할 + 상태 + 타입 = 하나의 버튼</p>
                  <p className="btn-system__groups">총 3가지 버튼 유형 | Push_btn · Popup_btn · Action_btn</p>
                  <p className="btn-system__desc">상태는 Default / Pressed를 기준으로 하며, 버튼의 용도에 따라 Guide 및 Icon 타입을 함께 사용합니다. Push는 주요 액션, Popup은 팝업 내 액션, Action은 Icon / Text 타입의 기능 실행 버튼으로 사용합니다.</p>
                </div>

                <div className="btn-system__rows">
                  <div className="btn-system__row">
                    <p className="btn-system__label">01 / Push_btn</p>
                    <div className="btn-system__board">
                      <h3 className="btn-system__card-title">01 / Push btn</h3>
                      <div className="btn-system__sample">
                        <p className="btn-system__state">Default</p>
                        <div className="btn-system__stack">
                          <button type="button" className="btn btn--push-muted btn--block">Text</button>
                          <button type="button" className="btn btn--push btn--block">Text</button>
                          <button type="button" className="btn btn--push-green btn--block">Text</button>
                        </div>
                        <p className="btn-system__state">Guide Button</p>
                        <button type="button" className="btn btn--guide">Text</button>
                      </div>
                    </div>
                  </div>

                  <div className="btn-system__row">
                    <p className="btn-system__label">02 / Popup_btn</p>
                    <div className="btn-system__board">
                      <h3 className="btn-system__card-title">02 / Popup_btn</h3>
                      <div className="btn-system__sample">
                        <p className="btn-system__state">Default</p>
                        <button type="button" className="btn btn--popup">Text</button>
                      </div>
                    </div>
                  </div>

                  <div className="btn-system__row">
                    <p className="btn-system__label">03 / Action_btn</p>
                    <div className="btn-system__board">
                      <h3 className="btn-system__card-title">03 / Action_btn</h3>
                      <div className="btn-system__sample">
                        <p className="btn-system__state">Type = Icon</p>
                        <button type="button" className="btn btn--action-icon">
                          <span className="btn__icon" aria-hidden="true"></span>
                          Text
                        </button>
                        <p className="btn-system__state">Type = Text</p>
                        <button type="button" className="btn btn--action-text">Text</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="card-system" id="card-system" aria-labelledby="card-system-title">
                <p className="card-system__eyebrow">POCK · Card system</p>
                <div className="card-system__panel">
                  <h2 className="card-system__title" id="card-system-title">Card</h2>
                  <p className="card-system__lead">구분 + 상태 = 하나의 카드</p>
                  <p className="card-system__groups">총 2가지 카드 유형 | Sent Card · Received Card</p>
                  <p className="card-system__desc">카드는 발신함과 수신함에서 메시지의 상태를 확인하기 위한 공통 컴포넌트입니다. 발신 카드는 D-day / Timer / Open 상태로 구분하며, 수신 카드는 Box / D-day / Timer / Open 상태로 구성합니다.</p>
                </div>

                <p className="card-system__label">01 / 발신함</p>
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--timer">22:07:32</div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Unopened)</p>
                        <article className="letter-card letter-card--locked letter-card--mo">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">To.Text</p>
                            <div className="letter-card__status letter-card__status--timer">22:07:32</div>
                          </div>
                        </article>
                      </li>
                      <li className="card-system__item">
                        <p className="card-system__caption">letter-card-sent (Unopened)</p>
                        <article className="letter-card letter-card--locked letter-card--tb">
                          <a className="letter-card__more" href="#card-system">전체보기 &gt;</a>
                          <div className="letter-card__body">
                            <span className="letter-card__lock" aria-hidden="true">
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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

                <p className="card-system__label">02 / 수신함</p>
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--timer">22:07:32</div>
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
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
                              <img className="letter-card__lock-image" src="/assets/images/letter/letter-lock-icon.svg" alt="" width={40} height={40} />
                            </span>
                            <p className="letter-card__target">From.Text</p>
                            <div className="letter-card__status-group">
                              <div className="letter-card__status letter-card__status--timer">22:07:32</div>
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
                <p className="letter-system__eyebrow">POCK · Letter system</p>
                <div className="letter-system__panel">
                  <h2 className="letter-system__title" id="letter-system-title">LETTER</h2>
                  <p className="letter-system__lead">편지지 + 색상 + 정렬 = 하나의 Letter</p>
                  <p className="letter-system__groups">총 7가지 색상 | Red · Orange · Yellow · Green · Blue · Purple · Pink</p>
                  <p className="letter-system__desc">Letter는 메시지를 읽고 쓰는 편지지 컴포넌트입니다. 이미지·제목·본문·발신 정보로 구성되며, Rainbow Light 7색을 배경으로 사용합니다.</p>
                </div>

                <p className="letter-system__label">01 / Letter card - normal (Mo)</p>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>

                <p className="letter-system__label">01 / Letter card - normal (Tb, Pc)</p>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>

                <p className="letter-system__label">02 / Letter card - special (Mo)</p>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>

                <p className="letter-system__label">02 / Letter - special (Tb, Pc)</p>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
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
                              <span className="letter__date">20XX.XX.XX</span>
                            </div>
                          </div>
                        </article>
                      </li>
                  </ul>
                </div>
              </section>

              <section className="window-system" id="window-system" aria-labelledby="window-system-title">
                <p className="window-system__eyebrow">POCK · WINDOW GRAPHGIC</p>
                <div className="window-system__panel">
                  <h2 className="window-system__title" id="window-system-title">WINDOW GRAPHGIC</h2>
                  <p className="window-system__lead">POCK의 레트로 윈도우 UI 시스템</p>
                  <p className="window-system__groups">총 2가지 유형 | Friend_list, Letter_write</p>
                  <p className="window-system__desc">POCK의 주요 인터페이스에 공통으로 적용되는 윈도우 그래픽입니다. Letter Card, Letter Write 등 기능에 따라 형태와 구성이 달라지며, 동일한 타이틀 바와 프레임 규칙을 적용해 일관된 화면 경험을 제공합니다.</p>
                </div>

                <p className="window-system__label">01 / Friend_list</p>
                <div className="window-system__board">
                  <h3 className="window-system__card-title">01 / Friend_list</h3>
                  <div className="window-system__samples">
                    <div className="window-system__sample">
                      <article className="pock-window pock-window--friend pock-window--mo" aria-label="친구목록">
                        <header className="pock-window__bar">
                          <h4 className="pock-window__title">친구목록</h4>
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-window__rule" aria-hidden="true"></div>
                        <div className="pock-window__body">
                          <div className="pock-window__pane">
                            <div className="pock-window__scroll" aria-hidden="true">
                              <div className="pock-window__scroll-thumb"></div>
                            </div>
                            <ul className="pock-window__list">
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <footer className="pock-window__foot">
                          <button className="pock-window__manage" type="button">
                            <img className="pock-window__manage-icon" src="/assets/images/friends-management-icon.svg" alt="" width={18} height={18} />
                            <span>친구 관리</span>
                          </button>
                        </footer>
                      </article>
                    </div>

                    <div className="window-system__sample">
                      <article className="pock-window pock-window--friend pock-window--tb" aria-label="친구목록">
                        <header className="pock-window__bar">
                          <h4 className="pock-window__title">친구목록</h4>
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-window__rule" aria-hidden="true"></div>
                        <div className="pock-window__body">
                          <div className="pock-window__pane">
                            <div className="pock-window__scroll" aria-hidden="true">
                              <div className="pock-window__scroll-thumb"></div>
                            </div>
                            <ul className="pock-window__list">
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <footer className="pock-window__foot">
                          <button className="pock-window__manage" type="button">
                            <img className="pock-window__manage-icon" src="/assets/images/friends-management-icon.svg" alt="" width={18} height={18} />
                            <span>친구 관리</span>
                          </button>
                        </footer>
                      </article>
                    </div>

                    <div className="window-system__sample">
                      <article className="pock-window pock-window--friend pock-window--pc" aria-label="친구목록">
                        <header className="pock-window__bar">
                          <h4 className="pock-window__title">친구목록</h4>
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-window__rule" aria-hidden="true"></div>
                        <div className="pock-window__body">
                          <div className="pock-window__pane">
                            <div className="pock-window__scroll" aria-hidden="true">
                              <div className="pock-window__scroll-thumb"></div>
                            </div>
                            <ul className="pock-window__list">
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                              <li className="pock-window__item">
                                <div className="pock-window__thumb" aria-hidden="true"></div>
                                <p className="pock-window__name">Text</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <footer className="pock-window__foot">
                          <button className="pock-window__manage" type="button">
                            <img className="pock-window__manage-icon" src="/assets/images/friends-management-icon.svg" alt="" width={18} height={18} />
                            <span>친구 관리</span>
                          </button>
                        </footer>
                      </article>
                    </div>
                  </div>
                </div>

                <p className="window-system__label">01-1 / Window Header</p>
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
                <p className="window-system__label">02 / Letter_write</p>
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
                            <button className="letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div className="letter-write__title-wrap">
                                <input className="letter-write__paper-title" type="text" name="letter-title" placeholder="제목" aria-label="제목 작성" />
                              </div>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="본문 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <input className="letter-write__date" type="text" placeholder="2000.00.00" aria-label="개봉일" inputMode="numeric" />
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
                            <button className="letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div className="letter-write__title-wrap">
                                <input className="letter-write__paper-title" type="text" name="letter-title" placeholder="제목" aria-label="제목 작성" />
                              </div>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="본문 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <input className="letter-write__date" type="text" placeholder="2000.00.00" aria-label="개봉일" inputMode="numeric" />
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
                            <button className="letter-write__friend" type="button">친구 선택</button>
                            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/letter-icon.svg" alt="" width={16} height={16} />
                                <span>편지지</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/picture-icon.svg" alt="" width={16} height={16} />
                                <span>사진</span>
                              </button>
                              <button className="letter-write__tab" type="button">
                                <img className="letter-write__tab-icon" src="/assets/images/Release-date-icon.svg" alt="" width={16} height={16} />
                                <span>개봉일</span>
                              </button>
                            </div>
                          </div>
                          <div className="letter-write__paper" role="group" aria-label="편지 작성">
                            <div className="letter-write__compose">
                              <button className="letter-write__media" type="button" aria-label="사진 추가"></button>
                              <div className="letter-write__title-wrap">
                                <input className="letter-write__paper-title" type="text" name="letter-title" placeholder="제목" aria-label="제목 작성" />
                              </div>
                              <div
                                className="letter-write__paper-body"
                                contentEditable={true}
                                role="textbox"
                                aria-multiline="true"
                                aria-label="본문 작성"
                              ></div>
                            </div>
                            <div className="letter-write__paper-foot">
                              <label className="letter-write__from-field">
                                <span className="letter-write__from-prefix">FROM.</span>
                                <input className="letter-write__from" type="text" placeholder="아방이~*" aria-label="보내는 사람" />
                              </label>
                              <input className="letter-write__date" type="text" placeholder="2000.00.00" aria-label="개봉일" inputMode="numeric" />
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

              <section className="overlay-system" id="overlay-system" aria-labelledby="overlay-system-title">
                <p className="overlay-system__eyebrow">POCK · Dimmed Overlay</p>
                <div className="overlay-system__panel">
                  <h2 className="overlay-system__title" id="overlay-system-title">DIMMED OVERLAY</h2>
                  <p className="overlay-system__lead">POCK의 상황별 공통 팝업 UI 시스템</p>
                  <p className="overlay-system__groups">적용 범위 | Popup · Modal · Onboarding Guide · Navigation Guide · Search Field</p>
                  <p className="overlay-system__desc">정보 안내, 경고, 공유, 첫 진입 가이드, 서치필드 백그라운드 등 사용자의 확인과 행동이 필요한 상황에 사용합니다. 용도에 따라 Info · Warning · Share · Onboarding Guide로 구분합니다.</p>
                </div>

                <p className="overlay-system__label">Dimmed Overlay</p>
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
                <p className="popup-system__eyebrow">POCK · POPUP</p>
                <div className="popup-system__panel">
                  <h2 className="popup-system__title" id="popup-system-title">POPUP</h2>
                  <p className="popup-system__lead">POCK의 상황별 공통 팝업 UI 시스템</p>
                  <p className="popup-system__groups">총 9가지 유형 | Info · Warning · Share · Onboarding Guide</p>
                  <p className="popup-system__desc">정보 안내, 경고, 공유, 첫 진입 가이드 등 사용자의 확인과 행동이 필요한 상황에 사용합니다. 용도에 따라 Info · Warning · Share · Onboarding Guide로 구분합니다.</p>
                </div>

                <p className="popup-system__label">Window - popup</p>
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
                      <p className="popup-system__caption">Share Popup (Mo)</p>
                      <article className="pock-popup pock-popup--share pock-popup--mo" aria-label="공유">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-mo-fit pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={7} height={5} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Share%20_Popup-icon.svg" alt="" width={40} height={34} />
                          <p className="pock-popup__text">내 POCK에 놀러와!</p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">링크 복사</button>
                          <button className="btn btn--popup" type="button">닫기</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Share Popup (Tb, Pc)</p>
                      <article className="pock-popup pock-popup--share pock-popup--tb" aria-label="공유">
                        <header className="pock-window__bar pock-window__bar--normal pock-window__bar--w-tb-pc pock-popup__bar">
                          <div className="pock-window__actions">
                            <span className="pock-window__control pock-window__control--min" aria-hidden="true"></span>
                            <span className="pock-window__control pock-window__control--close" aria-hidden="true">
                              <img className="pock-window__control-icon" src="/assets/images/heart-icon.svg" alt="" width={9} height={7} />
                            </span>
                          </div>
                        </header>
                        <div className="pock-popup__body">
                          <img className="pock-popup__icon" src="/assets/images/Share%20_Popup-icon.svg" alt="" width={40} height={34} />
                          <p className="pock-popup__text">내 POCK에 놀러와!</p>
                        </div>
                        <div className="pock-popup__actions">
                          <button className="btn btn--popup" type="button">링크 복사</button>
                          <button className="btn btn--popup" type="button">닫기</button>
                        </div>
                      </article>
                    </div>
                    <div className="popup-system__sample">
                      <p className="popup-system__caption">Onboarding Guide Popup</p>
                      <div className="popup-system__stage">
                        <article className="onboard-popup" aria-label="온보딩 가이드">
                          <h4 className="onboard-popup__title">내 프로필</h4>
                          <p className="onboard-popup__desc">내 닉네임과 보유한 코인을<br />언제든지 확인할 수 있어요.</p>
                          <ol className="onboard-popup__dots" aria-label="가이드 단계">
                            <li className="onboard-popup__dot is-active"></li>
                            <li className="onboard-popup__dot"></li>
                            <li className="onboard-popup__dot"></li>
                            <li className="onboard-popup__dot"></li>
                            <li className="onboard-popup__dot"></li>
                            <li className="onboard-popup__dot"></li>
                          </ol>
                          <div className="onboard-popup__nav">
                            <button className="onboard-popup__skip" type="button">건너뛰기</button>
                            <button className="btn btn--push" type="button">다음</button>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="search-system" id="search-system" aria-labelledby="search-system-title">
                <p className="search-system__eyebrow">POCK · SEARCH INPUT</p>
                <div className="search-system__panel">
                  <h2 className="search-system__title" id="search-system-title">SEARCH INPUT</h2>
                  <p className="search-system__lead">POCK의 공통 검색 입력 UI 시스템</p>
                  <p className="search-system__desc">검색 아이콘과 플레이스홀더를 포함한 검색 전용 입력 컴포넌트입니다. 사용자가 원하는 콘텐츠를 빠르게 탐색할 수 있도록 사용하며, 화면 크기에 따라 너비가 유동적으로 조정되는 반응형 구조로 적용합니다.</p>
                </div>

                <p className="search-system__label">Search Input</p>
                <div className="search-system__board">
                  <h3 className="search-system__card-title">Search Input</h3>
                  <div className="search-system__stage">
                    <p className="search-system__caption">Search Input</p>
                    <label className="search-input search-input--mo">
                      <img className="search-input__icon" src="/assets/images/search-icon.svg" alt="" width={22} height={22} />
                      <input className="search-input__field" type="search" placeholder="검색어를 입력하세요." aria-label="검색어" />
                    </label>
                    <label className="search-input search-input--wide">
                      <img className="search-input__icon" src="/assets/images/search-icon.svg" alt="" width={22} height={22} />
                      <input className="search-input__field" type="search" placeholder="검색어를 입력하세요." aria-label="검색어" />
                    </label>
                  </div>
                </div>
              </section>
            </div>
    </>
  );
}
