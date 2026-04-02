
// ══════════════════════════════════════════════════════════════
// GAME DATA
// ══════════════════════════════════════════════════════════════
const GAMES = [
  // ── FPS ──────────────────────────────────────────────────────────────────
  { id:730,    title:"Counter-Strike 2",              genre:"FPS",      tags:["fps","경쟁","전술","멀티플레이어","슈터"],           rating:8.0, year:2023, dev:"Valve",                   desc:"세계 최고의 전술 FPS. 팀워크와 정밀한 조준이 핵심이다." },
  { id:578080, title:"PUBG: Battlegrounds",           genre:"FPS",      tags:["배틀로얄","fps","서바이벌","전술","경쟁"],           rating:7.5, year:2017, dev:"PUBG Corp",               desc:"배틀로얄 장르를 개척한 원조 게임." },
  { id:1172470,title:"Apex Legends",                  genre:"FPS",      tags:["배틀로얄","fps","히어로","멀티플레이어","빠른"],      rating:8.3, year:2019, dev:"Respawn Entertainment",    desc:"히어로 능력이 결합된 빠른 배틀로얄 FPS." },
  { id:782330, title:"DOOM Eternal",                  genre:"FPS",      tags:["fps","액션","빠른","도전적","데몬"],                 rating:9.1, year:2020, dev:"id Software",             desc:"지옥의 침략에 맞서는 초고속 FPS 액션." },
  { id:548430, title:"Deep Rock Galactic",            genre:"FPS",      tags:["fps","협동","우주","드워프","멀티플레이어"],         rating:9.5, year:2020, dev:"Ghost Ship Games",        desc:"드워프 광부들의 협동 우주 FPS. Rock and Stone!" },
  { id:546560, title:"Half-Life: Alyx",               genre:"FPS",      tags:["fps","vr","스토리","공포","퍼즐"],                   rating:9.8, year:2020, dev:"Valve",                   desc:"VR의 새로운 기준을 세운 전설적인 FPS." },
  { id:359550, title:"Tom Clancy's Rainbow Six Siege",genre:"FPS",      tags:["fps","전술","경쟁","팀","파괴"],                    rating:8.5, year:2015, dev:"Ubisoft Montreal",         desc:"정밀 전술과 환경 파괴가 핵심인 팀 기반 FPS." },
  { id:2357570,title:"Overwatch 2",                   genre:"FPS",      tags:["히어로","fps","팀","경쟁","멀티플레이어"],           rating:7.0, year:2022, dev:"Blizzard Entertainment",   desc:"영웅들의 전투. 다양한 역할과 히어로로 즐기는 팀 FPS." },
  { id:1237970, title:"Titanfall 2",                   genre:"FPS",      tags:["fps","메카","빠른","파쿠르","스토리"],               rating:9.2, year:2016, dev:"Respawn Entertainment",    desc:"파쿠르와 타이탄이 어우러진 전설적인 FPS 캠페인." },
  { id:581320,title:"Insurgency: Sandstorm",         genre:"FPS",      tags:["fps","전술","리얼리즘","밀리터리","경쟁"],           rating:8.7, year:2018, dev:"New World Interactive",   desc:"현실적인 탄도와 팀플레이가 강조된 전술 FPS." },
  { id:1085660,title:"Destiny 2",                     genre:"FPS",      tags:["fps","rpg","루터슈터","협동","sf"],                  rating:7.8, year:2019, dev:"Bungie",                  desc:"전설적인 가디언이 되어 우주를 지키는 루터슈터." },
  { id:553850,title:"Helldivers 2",                  genre:"FPS",      tags:["협동","fps","액션","민주주의","sf"],                 rating:9.0, year:2024, dev:"Arrowhead Game Studios",   desc:"민주주의를 수호하는 헬다이버들의 협동 SF 슈터." },
  { id:252490, title:"Rust",                          genre:"FPS",      tags:["서바이벌","fps","멀티플레이어","크래프팅","냉혹"],   rating:7.8, year:2018, dev:"Facepunch Studios",       desc:"약육강식의 냉혹한 오픈월드 멀티 서바이벌 FPS." },
  
  { id:440,   title:"Team Fortress 2",                genre:"FPS",      tags:["fps","팀","캐주얼","만화","멀티플레이어"],           rating:8.5, year:2007, dev:"Valve",                   desc:"개성 넘치는 용병들의 유쾌한 팀 FPS 클래식." },  { id:1938090,title:"Call of Duty: Modern Warfare III",genre:"FPS",    tags:["fps","밀리터리","멀티플레이어","액션","경쟁"],       rating:7.0, year:2023, dev:"Sledgehammer Games",      desc:"콜 오브 듀티 시리즈의 최신작." },

  // ── RPG ──────────────────────────────────────────────────────────────────
  { id:1245620,title:"Elden Ring",                    genre:"RPG",      tags:["소울즈라이크","rpg","오픈월드","다크판타지","도전적"],rating:9.6,year:2022, dev:"FromSoftware",            desc:"조지 R.R. 마틴과의 협업으로 탄생한 다크 판타지 RPG 명작." },
  { id:292030, title:"The Witcher 3: Wild Hunt",      genre:"RPG",      tags:["rpg","오픈월드","판타지","스토리","선택"],           rating:9.8, year:2015, dev:"CD Projekt Red",          desc:"전세계가 인정한 최고의 오픈월드 RPG." },
  { id:1091500,title:"Cyberpunk 2077",                genre:"RPG",      tags:["rpg","사이버펑크","오픈월드","미래","액션"],         rating:8.5, year:2020, dev:"CD Projekt Red",          desc:"미래 도시 나이트시티를 누비는 사이버펑크 RPG." },
  { id:1086940,title:"Baldur's Gate 3",               genre:"RPG",      tags:["턴제","rpg","판타지","협동","선택"],                rating:9.8, year:2023, dev:"Larian Studios",          desc:"D&D 기반의 완성도 높은 CRPG 최고 걸작." },
  { id:1145360,title:"Hades",                         genre:"RPG",      tags:["로그라이크","액션","신화","rpg","도전적"],           rating:9.4, year:2020, dev:"Supergiant Games",        desc:"그리스 신화를 배경으로 한 완벽한 로그라이크 RPG." },
  { id:814380, title:"Sekiro: Shadows Die Twice",     genre:"RPG",      tags:["소울즈라이크","닌자","일본","도전적","액션"],        rating:9.3, year:2019, dev:"FromSoftware",            desc:"전국시대 일본을 배경으로 한 전설의 검객 이야기." },
  { id:374320, title:"Dark Souls III",                genre:"RPG",      tags:["소울즈라이크","다크판타지","rpg","도전적","보스"],   rating:9.0, year:2016, dev:"FromSoftware",            desc:"다크 소울 시리즈의 화려한 완결편." },
  { id:582010, title:"Monster Hunter: World",         genre:"RPG",      tags:["헌팅","협동","액션","rpg","오픈월드"],              rating:9.0, year:2018, dev:"Capcom",                  desc:"거대한 몬스터를 사냥하는 협동 RPG." },
  { id:632470, title:"Disco Elysium",                 genre:"RPG",      tags:["탐정","스토리","선택","독특","rpg"],                rating:9.5, year:2019, dev:"ZA/UM",                   desc:"독창적인 세계관과 대화로 이루어진 서사 RPG." },
  { id:435150, title:"Divinity: Original Sin 2",      genre:"RPG",      tags:["턴제","rpg","판타지","협동","전략"],                rating:9.5, year:2017, dev:"Larian Studios",          desc:"압도적인 완성도의 턴제 전략 RPG." },
  { id:1113000,title:"Persona 4 Golden",              genre:"RPG",      tags:["jrpg","학교","턴제","스토리","일본"],               rating:9.6, year:2020, dev:"Atlus",                   desc:"일본 소도시를 배경으로 한 최고의 JRPG." },
  { id:1687950,title:"Persona 5 Royal",               genre:"RPG",      tags:["jrpg","학교","턴제","스타일","일본"],               rating:9.7, year:2022, dev:"Atlus",                   desc:"압도적인 스타일과 스토리의 JRPG 최고봉." },
  { id:1462040,title:"FINAL FANTASY VII REMAKE",      genre:"RPG",      tags:["jrpg","리메이크","스토리","액션","판타지"],          rating:9.0, year:2021, dev:"Square Enix",             desc:"전설의 JRPG를 현대적 액션 RPG로 재탄생." },
  { id:637650, title:"FINAL FANTASY XV",              genre:"RPG",      tags:["jrpg","오픈월드","로드트립","액션","판타지"],        rating:8.0, year:2018, dev:"Square Enix",             desc:"네 친구의 아름다운 로드트립 JRPG." },
  { id:1185960,title:"Pathfinder: Wrath of the Righteous",genre:"RPG",  tags:["crpg","판타지","턴제","전략","선택"],               rating:8.8, year:2021, dev:"Owlcat Games",            desc:"깊은 세계관의 클래식 CRPG." },
  { id:230230, title:"Divinity: Original Sin",        genre:"RPG",      tags:["턴제","rpg","판타지","협동","전략"],                rating:8.5, year:2014, dev:"Larian Studios",          desc:"Original Sin 2의 전작. 협동 RPG의 시작점." },
  { id:1196590,title:"Resident Evil Village",         genre:"RPG",      tags:["공포","액션","호러","스토리","1인칭"],              rating:9.0, year:2021, dev:"Capcom",                  desc:"공포와 액션의 완벽한 균형. 레이디 디미트레스쿠!" },
  { id:1716740,title:"Starfield",                     genre:"RPG",      tags:["rpg","우주","오픈월드","sf","탐험"],                rating:7.5, year:2023, dev:"Bethesda Game Studios",    desc:"베데스다가 만든 거대한 우주 탐험 RPG." },
  { id:1680880,title:"Forspoken",                     genre:"RPG",      tags:["rpg","판타지","액션","마법","오픈월드"],            rating:6.5, year:2023, dev:"Luminous Productions",    desc:"마법사가 되어 아디아를 누비는 판타지 RPG." },
  { id:1222690, title:"Dragon Age: Inquisition",       genre:"RPG",      tags:["rpg","판타지","선택","스토리","협동"],              rating:8.5, year:2014, dev:"BioWare",                 desc:"판타지 세계의 운명을 결정하는 영웅의 이야기." },

  // ── 액션 ──────────────────────────────────────────────────────────────────
  { id:271590, title:"Grand Theft Auto V",            genre:"액션",     tags:["오픈월드","범죄","멀티플레이어","액션","자유"],      rating:9.0, year:2015, dev:"Rockstar Games",          desc:"세계 최고의 오픈월드 액션 어드벤처." },
  { id:1174180,title:"Red Dead Redemption 2",         genre:"액션",     tags:["오픈월드","서부","스토리","액션","리얼리즘"],        rating:9.7, year:2019, dev:"Rockstar Games",          desc:"서부 시대를 배경으로 한 서사시적 이야기." },
  { id:1139900,title:"Ghostrunner",                   genre:"액션",     tags:["사이버펑크","파쿠르","1인칭","도전적","빠른"],       rating:8.8, year:2020, dev:"One More Level",          desc:"초고속 사이버펑크 닌자 액션의 정수." },
  { id:268910, title:"Cuphead",                       genre:"액션",     tags:["도전적","만화","2D","보스","인디"],                 rating:9.3, year:2017, dev:"Studio MDHR",             desc:"1930년대 스타일의 아름답고 도전적인 보스 게임." },
  { id:1649240,title:"Returnal",                      genre:"액션",     tags:["로그라이크","슈터","sf","도전적","3인칭"],           rating:8.7, year:2023, dev:"Housemarque",             desc:"죽음의 루프에 갇힌 우주비행사의 SF 로그라이크." },
  { id:1593500,title:"God of War",                    genre:"액션",     tags:["액션","신화","스토리","북유럽","부자"],              rating:9.5, year:2022, dev:"Santa Monica Studio",     desc:"크레토스와 아트레우스의 북유럽 신화 대서사시." },
  { id:1817070,title:"Marvel's Spider-Man Remastered",genre:"액션",     tags:["슈퍼히어로","오픈월드","액션","스윙","뉴욕"],        rating:9.0, year:2022, dev:"Insomniac Games",         desc:"뉴욕을 자유롭게 누비는 스파이더맨이 되어라." },
  { id:752590,title:"A Plague Tale: Innocence",      genre:"액션",     tags:["스토리","중세","공포","형제","어드벤처"],           rating:9.0, year:2019, dev:"Asobo Studio",            desc:"중세 프랑스의 흑사병 속 남매의 생존기." },
  { id:1546320,title:"A Plague Tale: Requiem",        genre:"액션",     tags:["스토리","중세","공포","형제","어드벤처"],           rating:8.5, year:2022, dev:"Asobo Studio",            desc:"이노센스의 감동을 이어받은 압도적인 후속작." },
  { id:601150, title:"Devil May Cry 5",               genre:"액션",     tags:["액션","스타일리시","악마","빠른","보스"],            rating:9.3, year:2019, dev:"Capcom",                  desc:"스타일리시 액션의 정점. DMC 시리즈의 화려한 귀환." },
  { id:219150, title:"Hotline Miami",                 genre:"액션",     tags:["탑다운","폭력적","빠른","인디","레트로"],           rating:9.0, year:2012, dev:"Dennaton Games",          desc:"폭발적인 속도감과 강렬한 음악의 탑다운 액션." },
  { id:2138710,title:"Sifu",                          genre:"액션",     tags:["쿵푸","도전적","격투","복수","3인칭"],              rating:8.5, year:2022, dev:"Sloclap",                 desc:"나이를 먹으며 복수하는 쿵푸 액션 게임." },
  { id:1659420,title:"Uncharted: Legacy of Thieves",  genre:"액션",     tags:["어드벤처","액션","스토리","탐험","영화"],           rating:8.8, year:2022, dev:"Naughty Dog",             desc:"영화 같은 연출의 언차티드 시리즈 컬렉션." },
  { id:1888930,title:"The Last of Us Part I",         genre:"액션",     tags:["서바이벌","스토리","포스트아포칼립스","감동","액션"],rating:9.6, year:2023, dev:"Naughty Dog",             desc:"역사상 가장 감동적인 서바이벌 스토리." },
  { id:1475810,title:"Ghostwire: Tokyo",              genre:"액션",     tags:["도쿄","오컬트","액션","1인칭","일본"],              rating:7.8, year:2022, dev:"Tango Gameworks",         desc:"귀신이 가득한 도쿄에서 영적 능력으로 싸워라." },
  { id:1583230,title:"High on Life",                  genre:"액션",     tags:["fps","코미디","sf","Rick&Morty","독특"],            rating:7.5, year:2022, dev:"Squanch Games",           desc:"릭앤모티 창작자의 말하는 총이 등장하는 광기 FPS." },
  
  { id:1325200,title:"Nioh 2",                        genre:"액션",     tags:["소울즈라이크","일본","요괴","도전적","액션"],        rating:9.0, year:2021, dev:"Team NINJA",              desc:"요괴가 넘치는 전국시대의 소울즈라이크 명작." },

  // ── 어드벤처 ──────────────────────────────────────────────────────────────
  { id:367520, title:"Hollow Knight",                 genre:"어드벤처", tags:["메트로바니아","도전적","인디","2D","탐험"],         rating:9.6, year:2017, dev:"Team Cherry",            desc:"아름다운 지하 세계를 탐험하는 기사의 이야기." },
  { id:1426210,title:"It Takes Two",                  genre:"어드벤처", tags:["협동","플랫포머","스토리","2인","가족"],            rating:9.3, year:2021, dev:"Hazelight Studios",       desc:"두 사람을 위한 역대 최고의 협동 게임." },
  { id:504230, title:"Celeste",                       genre:"어드벤처", tags:["플랫포머","도전적","픽셀","인디","스토리"],         rating:9.5, year:2018, dev:"Maddy Makes Games",       desc:"산을 오르며 자아를 찾는 정서적 플랫포머." },
  { id:264710, title:"Subnautica",                    genre:"어드벤처", tags:["수중","서바이벌","탐험","공포","오픈월드"],         rating:9.4, year:2018, dev:"Unknown Worlds",          desc:"외계 행성의 드넓은 바다 속을 탐험하고 생존하라." },
  { id:1057090,title:"Ori and the Will of the Wisps", genre:"어드벤처", tags:["메트로바니아","아름다운","스토리","플랫포머","2D"],  rating:9.5, year:2020, dev:"Moon Studios",           desc:"숨막히게 아름다운 시각적 플랫폼 어드벤처." },
  { id:105600, title:"Terraria",                      genre:"어드벤처", tags:["2D","샌드박스","서바이벌","건설","액션"],           rating:9.7, year:2011, dev:"Re-Logic",               desc:"2D 픽셀 세계에서의 무한한 모험과 건설." },
  { id:275850, title:"No Man's Sky",                  genre:"어드벤처", tags:["우주","탐험","서바이벌","오픈월드","협동"],         rating:8.5, year:2016, dev:"Hello Games",            desc:"무한한 행성을 탐험하는 우주 어드벤처." },
  { id:230410, title:"Warframe",                      genre:"어드벤처", tags:["루터슈터","sf","협동","무료","닌자"],               rating:8.5, year:2013, dev:"Digital Extremes",        desc:"닌자 우주 전사의 무료 루터슈터 협동 게임." },
  { id:620,title:"Portal 2",                      genre:"어드벤처", tags:["퍼즐","협동","1인칭","유머","sf"],                  rating:9.9, year:2011, dev:"Valve",                   desc:"역사상 가장 완벽한 퍼즐 게임. 웃음과 감동의 명작." },
  { id:400,   title:"Portal",                         genre:"어드벤처", tags:["퍼즐","1인칭","sf","ai","단편"],                   rating:9.8, year:2007, dev:"Valve",                   desc:"포탈 건 하나로 세상을 바꾸는 천재적 퍼즐." },
  { id:383870,title:"Firewatch",                     genre:"어드벤처", tags:["스토리","자연","1인칭","감성","미스터리"],           rating:8.5, year:2016, dev:"Campo Santo",             desc:"광활한 숲 속에서 펼쳐지는 감성적인 미스터리." },
  { id:1240260, title:"DEATH STRANDING",               genre:"어드벤처", tags:["오픈월드","독특","배달","연결","코지마"],           rating:8.5, year:2021, dev:"Kojima Productions",      desc:"코지마 히데오의 독창적인 연결과 여행의 이야기." },
  
  
  { id:753640, title:"Outer Wilds",                   genre:"어드벤처", tags:["우주","탐험","미스터리","감동","루프"],             rating:9.8, year:2019, dev:"Mobius Digital",          desc:"시간의 루프 속에서 우주의 비밀을 밝혀가는 명작." },
  { id:501300,title:"What Remains of Edith Finch",   genre:"어드벤처", tags:["스토리","감성","단편","가족","독특"],               rating:9.0, year:2017, dev:"Giant Sparrow",           desc:"한 가족의 비극적 이야기를 담은 감성 어드벤처." },
  { id:1817230,title:"Hi-Fi RUSH",                    genre:"어드벤처", tags:["리듬","액션","만화","밴드","빠른"],                 rating:9.2, year:2023, dev:"Tango Gameworks",         desc:"박자에 맞춰 싸우는 리듬 액션의 걸작." },

  // ── 전략 ──────────────────────────────────────────────────────────────────
  { id:289070, title:"Civilization VI",               genre:"전략",     tags:["턴제","4X","역사","건설","외교"],                   rating:8.8, year:2016, dev:"Firaxis Games",           desc:"인류 문명을 이끌어 승리로 이끄는 4X 전략." },
  { id:427520, title:"Factorio",                      genre:"전략",     tags:["자동화","건설","공장","퍼즐","시뮬레이션"],          rating:9.8, year:2020, dev:"Wube Software",           desc:"공장 자동화의 끝판왕. 한번 시작하면 멈출 수 없다." },
  { id:1142710,title:"Total War: Warhammer III",      genre:"전략",     tags:["전쟁","전략","판타지","실시간","턴제"],              rating:8.5, year:2022, dev:"Creative Assembly",       desc:"판타지 세계에서 벌어지는 대규모 전쟁 전략." },
  { id:945360, title:"Among Us",                      genre:"전략",     tags:["파티","마피아","협동","캐주얼","멀티플레이어"],      rating:8.0, year:2018, dev:"Innersloth",             desc:"우주선 속 배신자를 찾아라! 파티 마피아 게임." },
  { id:459220,title:"Halo Wars 2",                   genre:"전략",     tags:["rts","sf","전쟁","실시간","멀티플레이어"],           rating:7.8, year:2017, dev:"Creative Assembly",       desc:"헤일로 우주관의 실시간 전략 게임." },
  { id:813780, title:"Age of Empires II: DE",         genre:"전략",     tags:["rts","역사","중세","멀티플레이어","클래식"],         rating:9.2, year:2019, dev:"Forgotten Empires",       desc:"역사상 가장 위대한 RTS. 리마스터로 완전 부활." },
  { id:1158310,title:"Crusader Kings III",            genre:"전략",     tags:["중세","왕조","rpg","전략","역사"],                  rating:9.0, year:2020, dev:"Paradox Development",     desc:"중세 왕조를 이끄는 방대하고 깊은 전략 RPG." },
  { id:236850, title:"Europa Universalis IV",         genre:"전략",     tags:["역사","4X","외교","전략","방대한"],                 rating:8.7, year:2013, dev:"Paradox Development",     desc:"수백년의 역사를 직접 바꾸는 거대한 역사 전략." },
  { id:394360, title:"Hearts of Iron IV",             genre:"전략",     tags:["2차대전","역사","전쟁","전략","대체역사"],           rating:8.8, year:2016, dev:"Paradox Development",     desc:"2차 세계대전을 배경으로 한 깊이 있는 전쟁 전략." },
  { id:933110, title:"Age of Empires III: DE",        genre:"전략",     tags:["rts","역사","식민지","전략","클래식"],               rating:8.2, year:2020, dev:"Forgotten Empires",       desc:"대항해시대를 배경으로 한 RTS 고전의 리마스터." },
  { id:529340,title:"Victoria 3",                    genre:"전략",     tags:["역사","경제","외교","산업혁명","전략"],              rating:8.0, year:2022, dev:"Paradox Development",     desc:"19세기 산업혁명 시대의 국가 경영 전략." },
  { id:281990, title:"Stellaris",                     genre:"전략",     tags:["sf","4X","우주","외교","전략"],                     rating:8.7, year:2016, dev:"Paradox Development",     desc:"드넓은 우주를 배경으로 문명을 이끄는 SF 4X." },
  { id:268500, title:"XCOM 2",                        genre:"전략",     tags:["턴제","sf","전술","외계인","전략"],                  rating:8.9, year:2016, dev:"Firaxis Games",           desc:"외계인에 점령당한 지구를 되찾는 턴제 전술 전략." },

  // ── 시뮬레이션 ────────────────────────────────────────────────────────────
  { id:413150, title:"Stardew Valley",                genre:"시뮬레이션",tags:["농장","릴렉싱","픽셀","인디","rpg"],               rating:9.7, year:2016, dev:"ConcernedApe",            desc:"힐링 농장 시뮬레이션의 정석. 1인 개발의 기적." },
  { id:255710, title:"Cities: Skylines",              genre:"시뮬레이션",tags:["도시건설","건설","전략","관리"],                    rating:9.0, year:2015, dev:"Colossal Order",          desc:"나만의 이상적인 도시를 설계하고 건설하라." },
  { id:526870, title:"Satisfactory",                  genre:"시뮬레이션",tags:["공장","1인칭","건설","협동","자동화"],              rating:9.2, year:2020, dev:"Coffee Stain Studios",    desc:"3D 1인칭 공장 건설 어드벤처." },
  { id:294100, title:"RimWorld",                      genre:"시뮬레이션",tags:["식민지","서바이벌","관리","랜덤","ai"],             rating:9.7, year:2018, dev:"Ludeon Studios",          desc:"우주 식민지 건설과 생존의 방대한 시뮬레이션." },
  { id:233720, title:"Prison Architect",              genre:"시뮬레이션",tags:["감옥","건설","관리","전략","인디"],                 rating:8.7, year:2015, dev:"Introversion Software",  desc:"자신만의 감옥을 설계하고 운영하라." },
  { id:975370,title:"Dwarf Fortress",                genre:"시뮬레이션",tags:["드워프","건설","관리","복잡한","전설"],             rating:9.2, year:2022, dev:"Bay 12 Games",            desc:"극도로 깊은 드워프 요새 건설 및 관리." },
  { id:1250410,title:"Microsoft Flight Simulator",    genre:"시뮬레이션",tags:["비행","사실적","지구","조종사","vr"],               rating:9.0, year:2020, dev:"Asobo Studio",            desc:"실제 지구를 비행하는 궁극의 비행 시뮬레이터." },
  { id:227300, title:"Euro Truck Simulator 2",        genre:"시뮬레이션",tags:["트럭","드라이빙","유럽","릴렉싱","협동"],           rating:9.1, year:2012, dev:"SCS Software",            desc:"유럽을 누비는 트럭 드라이버 시뮬레이터의 왕." },
  { id:1430690,title:"Hardspace: Shipbreaker",        genre:"시뮬레이션",tags:["우주선해체","sf","릴렉싱","독특","건설"],           rating:8.5, year:2022, dev:"Blackbird Interactive",  desc:"우주선을 해체하는 독특하고 몰입감 있는 시뮬레이션." },
  { id:954850, title:"Kerbal Space Program 2",        genre:"시뮬레이션",tags:["우주","물리","로켓","교육","건설"],                 rating:7.0, year:2023, dev:"Intercept Games",         desc:"로켓을 설계하고 우주를 탐험하는 물리 시뮬레이션." },
  { id:244850, title:"Space Engineers",               genre:"시뮬레이션",tags:["우주","건설","엔지니어링","협동","sf"],             rating:8.8, year:2019, dev:"Keen Software House",     desc:"우주에서 선박과 기지를 자유롭게 건설하라." },
  { id:108600, title:"Project Zomboid",               genre:"시뮬레이션",tags:["좀비","서바이벌","탑다운","협동","리얼리즘"],       rating:9.2, year:2013, dev:"The Indie Stone",         desc:"가장 현실적이고 깊이 있는 좀비 서바이벌." },

  // ── 공포 ──────────────────────────────────────────────────────────────────
  { id:739630, title:"Phasmophobia",                  genre:"공포",     tags:["공포","협동","호러","vr","멀티플레이어"],           rating:8.5, year:2020, dev:"Kinetic Games",           desc:"유령의 종류를 밝혀내는 협동 공포 게임." },
  { id:381210, title:"Dead by Daylight",              genre:"공포",     tags:["공포","비대칭","멀티플레이어","호러","경쟁"],        rating:7.8, year:2016, dev:"Behaviour Interactive",  desc:"살인마 vs 4인 생존자의 비대칭 공포 멀티." },
  { id:214490, title:"Alien: Isolation",              genre:"공포",     tags:["에이리언","공포","긴장","스텔스","sf"],              rating:9.0, year:2014, dev:"Creative Assembly",       desc:"에이리언 원작의 압도적인 긴장감의 공포 게임." },
  { id:1944430,title:"Amnesia: The Bunker",           genre:"공포",     tags:["공포","생존","1차대전","번커","독특"],               rating:8.3, year:2023, dev:"Frictional Games",        desc:"탄약도 부족한 번커 속에서의 처절한 생존 공포." },
  { id:1835630,title:"Sons of the Forest",            genre:"공포",     tags:["서바이벌","공포","숲","협동","건설"],               rating:8.0, year:2023, dev:"Endnight Games",          desc:"공포스러운 숲에서 살아남는 협동 서바이벌 공포." },
  
  { id:238320, title:"Outlast",                       genre:"공포",     tags:["공포","카메라","1인칭","무서운","병원"],             rating:8.8, year:2013, dev:"Red Barrels",             desc:"카메라만 들고 정신병원을 탈출하는 극한 공포." },
  { id:282140,title:"SOMA",                          genre:"공포",     tags:["sf","공포","철학","스토리","수중"],                 rating:9.0, year:2015, dev:"Frictional Games",        desc:"의식과 존재에 대한 질문을 던지는 SF 공포." },

  // ── 서바이벌 ──────────────────────────────────────────────────────────────
  { id:892970, title:"Valheim",                       genre:"서바이벌", tags:["바이킹","서바이벌","건설","협동","오픈월드"],        rating:9.0, year:2021, dev:"Iron Gate AB",            desc:"북유럽 신화를 배경으로 한 협동 서바이벌." },
  { id:346110, title:"ARK: Survival Evolved",         genre:"서바이벌", tags:["공룡","서바이벌","오픈월드","협동","건설"],          rating:7.5, year:2017, dev:"Studio Wildcard",         desc:"공룡이 사는 원시 섬에서의 생존기." },
  { id:2399830,title:"ARK: Survival Ascended",        genre:"서바이벌", tags:["공룡","서바이벌","언리얼5","협동","리마스터"],       rating:7.0, year:2023, dev:"Studio Wildcard",         desc:"언리얼 엔진5로 완전 리빌드된 ARK." },
  { id:513710, title:"SCUM",                          genre:"서바이벌", tags:["서바이벌","리얼리즘","오픈월드","멀티플레이어","군사"],rating:7.5,year:2018, dev:"Gamepires",               desc:"극도의 현실적인 생존 메카닉의 서바이벌 게임." },
  { id:848450,title:"Subnautica: Below Zero",        genre:"서바이벌", tags:["수중","서바이벌","탐험","추위","오픈월드"],          rating:8.3, year:2021, dev:"Unknown Worlds",          desc:"수나우티카의 속편. 얼음 행성 속 수중 생존." },
  { id:815370, title:"Green Hell",                    genre:"서바이벌", tags:["정글","서바이벌","1인칭","리얼리즘","협동"],         rating:8.0, year:2019, dev:"Creepy Jar",              desc:"아마존 밀림에서 살아남는 극도의 리얼 서바이벌." },
  { id:1632360, title:"Smalland: Survive the Wilds",   genre:"서바이벌", tags:["서바이벌","소인","자연","협동","건설"],             rating:7.8, year:2023, dev:"Merge Games",             desc:"작은 존재가 되어 거대한 자연에서 살아남아라." },
  { id:962130,title:"Grounded",                      genre:"서바이벌", tags:["서바이벌","축소","마당","협동","건설"],             rating:8.8, year:2022, dev:"Obsidian Entertainment",  desc:"개미 크기로 줄어든 아이들의 뒷마당 서바이벌." },

  // ── 샌드박스 ──────────────────────────────────────────────────────────────  { id:220,     title:"Half-Life 2",                   genre:"샌드박스", tags:["fps","sf","스토리","클래식","전설"],                rating:9.9, year:2004, dev:"Valve",                   desc:"FPS의 역사를 바꾼 전설적인 마스터피스." },
  { id:322330, title:"Don't Starve Together",         genre:"샌드박스", tags:["서바이벌","협동","고딕","2D","로그라이크"],          rating:9.0, year:2016, dev:"Klei Entertainment",      desc:"어두운 동화 속 협동 서바이벌의 명작." },
  { id:239140, title:"Dying Light",                   genre:"샌드박스", tags:["좀비","파쿠르","오픈월드","서바이벌","협동"],        rating:8.8, year:2015, dev:"Techland",               desc:"좀비 도시를 파쿠르로 누비는 오픈월드 서바이벌." },
  { id:534380, title:"Dying Light 2",                 genre:"샌드박스", tags:["좀비","파쿠르","오픈월드","서바이벌","협동"],        rating:8.0, year:2022, dev:"Techland",               desc:"파쿠르 좀비 서바이벌의 화려한 속편." },
  { id:361420, title:"Astroneer",                     genre:"샌드박스", tags:["우주","건설","탐험","협동","sf"],                   rating:8.9, year:2019, dev:"System Era Softworks",    desc:"귀여운 우주비행사로 행성을 탐험하고 건설하라." },

  // ── 격투 ──────────────────────────────────────────────────────────────────
  { id:1364780,title:"Street Fighter 6",              genre:"격투",     tags:["격투","경쟁","멀티플레이어","아케이드","기술"],      rating:9.0, year:2023, dev:"Capcom",                  desc:"격투 게임의 새로운 황금기를 연 시리즈 최신작." },
  { id:389730, title:"Tekken 7",                      genre:"격투",     tags:["격투","3D","경쟁","멀티플레이어","스토리"],          rating:8.5, year:2017, dev:"Bandai Namco",            desc:"3D 격투 게임의 왕. 미시마 가문의 최후 결전." },
  { id:976310, title:"Mortal Kombat 11",              genre:"격투",     tags:["격투","고어","스토리","경쟁","멀티플레이어"],        rating:8.3, year:2019, dev:"NetherRealm Studios",     desc:"잔인하고 화려한 피날레가 압권인 격투 게임." },
  { id:1384160,title:"Guilty Gear -Strive-",          genre:"격투",     tags:["격투","애니","경쟁","아름다운","록음악"],            rating:9.0, year:2021, dev:"Arc System Works",        desc:"압도적인 비주얼과 개성 넘치는 캐릭터의 격투 게임." },
  { id:678950, title:"Dragon Ball FighterZ",          genre:"격투",     tags:["격투","드래곤볼","애니","2.5D","경쟁"],              rating:8.5, year:2018, dev:"Arc System Works",        desc:"드래곤볼 애니메이션을 그대로 구현한 격투." },
  { id:291550, title:"Brawlhalla",                    genre:"격투",     tags:["격투","캐주얼","플랫포머","무료","멀티플레이어"],    rating:8.0, year:2017, dev:"Blue Mammoth Games",      desc:"무료로 즐기는 플랫폼 기반 난투형 격투 게임." },
  { id:1818750,title:"Multiversus",                   genre:"격투",     tags:["격투","플랫폼","무료","파티","캐릭터"],             rating:7.5, year:2022, dev:"Player First Games",      desc:"Warner Bros 캐릭터가 등장하는 난투형 격투." },

  // ── 스포츠 ──────────────────────────────────────────────────────────────
  { id:252950, title:"Rocket League",                 genre:"스포츠",   tags:["자동차","축구","경쟁","스포츠","멀티플레이어"],      rating:9.0, year:2015, dev:"Psyonix",                 desc:"로켓이 달린 자동차로 하는 축구. 무한한 성장감." },
  { id:1097150,title:"Fall Guys",                     genre:"스포츠",   tags:["배틀로얄","파티","귀여운","멀티플레이어","캐주얼"],  rating:8.0, year:2020, dev:"Mediatonic",             desc:"귀여운 젤리빈 캐릭터들의 파티 배틀로얄." },
  { id:1313860,title:"FIFA 23",                       genre:"스포츠",   tags:["축구","스포츠","경쟁","멀티플레이어","리얼리즘"],    rating:7.5, year:2022, dev:"EA Sports",               desc:"세계 최고의 축구 시뮬레이션." },
  { id:2669320,title:"EA FC 25",                      genre:"스포츠",   tags:["축구","스포츠","경쟁","멀티플레이어","리얼리즘"],    rating:7.8, year:2024, dev:"EA Sports",               desc:"FIFA에서 EA FC로 새출발한 최신 축구 게임." },
  { id:1919590,title:"NBA 2K23",                      genre:"스포츠",   tags:["농구","스포츠","경쟁","NBA","리얼리즘"],             rating:7.5, year:2022, dev:"Visual Concepts",         desc:"NBA를 완벽히 재현한 최고의 농구 게임." },
  { id:1230940,title:"Riders Republic",               genre:"스포츠",   tags:["익스트림스포츠","오픈월드","스키","자전거","협동"],  rating:8.0, year:2021, dev:"Ubisoft Annecy",          desc:"다양한 익스트림 스포츠를 즐기는 오픈월드." },
  // ── 추가 FPS / 액션 슈터 ─────────────────────────────────────────────────
  { id:550,     title:"Left 4 Dead 2",                genre:"FPS",       tags:["협동","좀비","fps","멀티플레이어","빠른"],          rating:9.5, year:2009, dev:"Valve",                    desc:"4명이 함께하는 좀비 협동 FPS의 전설." },
  { id:976730,  title:"Halo: The Master Chief Collection", genre:"FPS",  tags:["fps","싱글플레이어","협동","sf","클래식"],           rating:9.0, year:2019, dev:"343 Industries",           desc:"헤일로 시리즈의 6편을 하나로 묶은 컬렉션." },
  { id:1240440, title:"Halo Infinite",                genre:"FPS",       tags:["fps","싱글플레이어","sf","오픈월드","멀티플레이어"], rating:7.8, year:2021, dev:"343 Industries",           desc:"마스터 치프의 새로운 오픈월드 어드벤처." },
  { id:412020,  title:"Metro Exodus",                 genre:"FPS",       tags:["fps","포스트아포칼립스","싱글플레이어","스토리","공포"],rating:8.7,year:2019, dev:"4A Games",                 desc:"지하철 세계를 탈출해 황무지를 횡단하는 FPS." },
  { id:1643320, title:"S.T.A.L.K.E.R. 2: Heart of Chornobyl", genre:"FPS", tags:["fps","오픈월드","공포","서바이벌","싱글플레이어"], rating:7.5, year:2024, dev:"GSC Game World",          desc:"체르노빌 지역을 배경으로 한 공포 FPS." },
  { id:870780,  title:"Control",                      genre:"액션",       tags:["액션","싱글플레이어","스토리","미스터리","슈터"],      rating:8.7, year:2019, dev:"Remedy Entertainment",    desc:"초자연적 현상에 맞서는 신비로운 액션 어드벤처." },
  { id:1903940, title:"Alan Wake 2",                  genre:"공포",       tags:["공포","싱글플레이어","스토리","미스터리","액션"],      rating:9.0, year:2023, dev:"Remedy Entertainment",    desc:"심리 공포 소설로 진입하는 독창적인 속편." },
  { id:612880,  title:"Wolfenstein II: The New Colossus", genre:"FPS",   tags:["fps","싱글플레이어","스토리","액션","나치"],          rating:8.5, year:2017, dev:"MachineGames",             desc:"대체 역사 세계에서 나치에 맞서 싸우는 FPS." },
  { id:1252330, title:"DEATHLOOP",                    genre:"FPS",       tags:["fps","싱글플레이어","시간루프","액션","스텔스"],       rating:8.1, year:2021, dev:"Arkane Studios",           desc:"타임루프를 이용해 암살 목표를 처치하는 FPS." },
  { id:480490,  title:"Prey",                         genre:"FPS",       tags:["fps","sf","싱글플레이어","공포","탐험"],              rating:8.5, year:2017, dev:"Arkane Studios",           desc:"우주정거장에서 외계 생명체에 맞서는 임몰시브 심." },
  { id:403640,  title:"Dishonored 2",                 genre:"액션",       tags:["스텔스","액션","싱글플레이어","sf","판타지"],          rating:8.6, year:2016, dev:"Arkane Studios",           desc:"두 영웅으로 즐기는 자유도 높은 스텔스 액션." },

  // ── 추가 RPG ──────────────────────────────────────────────────────────────
  { id:1328670, title:"Mass Effect Legendary Edition", genre:"RPG",      tags:["rpg","sf","싱글플레이어","스토리","선택"],            rating:9.5, year:2021, dev:"BioWare",                  desc:"3부작 은하계 서사시를 리마스터한 완결판." },
  { id:20920,   title:"The Witcher 2: Assassins of Kings", genre:"RPG",  tags:["rpg","판타지","싱글플레이어","스토리","선택"],         rating:8.9, year:2011, dev:"CD PROJEKT RED",           desc:"제롤트의 두 번째 어두운 판타지 RPG 여정." },
  { id:47810,   title:"Dragon Age: Origins",           genre:"RPG",       tags:["rpg","판타지","협동","스토리","선택"],                rating:8.8, year:2009, dev:"BioWare",                  desc:"운명적인 선택이 가득한 고전 판타지 RPG 명작." },
  { id:22380,   title:"Fallout: New Vegas",             genre:"RPG",       tags:["rpg","포스트아포칼립스","싱글플레이어","오픈월드","선택"], rating:8.9, year:2010, dev:"Obsidian Entertainment", desc:"모하비 사막을 배경으로 한 역대 최고의 Fallout." },
  { id:377160,  title:"Fallout 4",                     genre:"RPG",       tags:["rpg","포스트아포칼립스","오픈월드","건설","싱글플레이어"], rating:7.8, year:2015, dev:"Bethesda",              desc:"황무지를 탐험하고 정착지를 건설하는 RPG." },
  { id:489830,  title:"The Elder Scrolls V: Skyrim SE", genre:"RPG",      tags:["rpg","판타지","오픈월드","싱글플레이어","자유"],       rating:8.7, year:2016, dev:"Bethesda",                 desc:"드래곤 슬레이어가 되는 역대 최고 오픈월드 RPG." },
  { id:640820,  title:"Pathfinder: Kingmaker",          genre:"RPG",       tags:["rpg","판타지","isometric","싱글플레이어","선택"],     rating:7.6, year:2018, dev:"Owlcat Games",             desc:"나만의 왕국을 건설하는 방대한 아이소메트릭 RPG." },
  { id:823230,  title:"The Outer Worlds",               genre:"RPG",       tags:["rpg","sf","싱글플레이어","선택","유머"],              rating:8.2, year:2019, dev:"Obsidian Entertainment",    desc:"우주 기업의 음모에 맞서는 유쾌한 SF RPG." },
  { id:560130,  title:"Pillars of Eternity II: Deadfire", genre:"RPG",    tags:["rpg","판타지","isometric","싱글플레이어","선택"],     rating:8.1, year:2018, dev:"Obsidian Entertainment",    desc:"신을 쫓아 바다를 항해하는 심층 크RPG." },
  { id:719040,  title:"Wasteland 3",                    genre:"RPG",       tags:["rpg","포스트아포칼립스","전술","싱글플레이어","선택"], rating:8.1, year:2020, dev:"inXile Entertainment",      desc:"눈덮인 콜로라도를 배경으로 한 전술 RPG." },
  { id:219990,  title:"Grim Dawn",                      genre:"RPG",       tags:["rpg","핵앤슬래시","다크판타지","액션","싱글플레이어"], rating:8.9, year:2016, dev:"Crate Entertainment",      desc:"스팀파크 배경의 어두운 핵앤슬래시 RPG." },
  { id:238960,  title:"Path of Exile",                  genre:"RPG",       tags:["핵앤슬래시","무료","멀티플레이어","다크판타지","경쟁"], rating:8.6, year:2013, dev:"Grinding Gear Games",      desc:"복잡한 스킬 시스템을 가진 무료 핵앤슬래시." },
  { id:899770,  title:"Last Epoch",                     genre:"RPG",       tags:["핵앤슬래시","rpg","시간여행","싱글플레이어","멀티플레이어"], rating:8.4, year:2024, dev:"Eleventh Hour Games",  desc:"시간여행 테마의 깊이 있는 액션 RPG." },
  { id:1627720, title:"Lies of P",                      genre:"액션",       tags:["soulslike","액션","싱글플레이어","도전적","판타지"],   rating:8.3, year:2023, dev:"Round8 Studio",           desc:"피노키오를 재해석한 국산 소울라이크 명작." },
  { id:2129590, title:"Wo Long: Fallen Dynasty",        genre:"액션",       tags:["soulslike","액션","싱글플레이어","중국","도전적"],     rating:7.5, year:2023, dev:"Team Ninja",              desc:"삼국지 시대 중국을 배경으로 한 소울라이크." },
  { id:1172380, title:"Star Wars Jedi: Fallen Order",   genre:"액션",       tags:["액션","싱글플레이어","sf","스토리","소울라이크"],      rating:8.4, year:2019, dev:"Respawn Entertainment",   desc:"제다이 기사의 성장을 그린 스타워즈 액션." },
  { id:2215430, title:"Ghost of Tsushima DIRECTOR'S CUT", genre:"액션",    tags:["액션","싱글플레이어","오픈월드","역사","스텔스"],      rating:9.1, year:2024, dev:"Sucker Punch Productions", desc:"몽골 침략에 맞선 사무라이의 아름다운 오픈월드." },
  { id:1151460, title:"Horizon Zero Dawn Remastered",   genre:"RPG",       tags:["rpg","오픈월드","싱글플레이어","액션","포스트아포칼립스"], rating:8.3, year:2020, dev:"Guerrilla Games",       desc:"기계 생명체가 가득한 세계를 탐험하는 액션 RPG." },
  { id:1446780, title:"Monster Hunter Rise",            genre:"액션",       tags:["액션","협동","rpg","헌팅","일본풍"],                  rating:8.5, year:2022, dev:"Capcom",                   desc:"거대 몬스터를 사냥하는 다이나믹 액션 RPG." },

  // ── 추가 인디 / 로그라이크 ───────────────────────────────────────────────
  { id:588650,  title:"Dead Cells",                    genre:"인디",       tags:["로그라이크","액션","플랫포머","도전적","빠른"],        rating:9.1, year:2018, dev:"Motion Twin",              desc:"매번 새로운 도전을 선사하는 로그라이크 메트로바니아." },
  { id:646570,  title:"Slay the Spire",                genre:"인디",       tags:["카드게임","로그라이크","전략","싱글플레이어","덱빌딩"],  rating:9.3, year:2019, dev:"MegaCrit",                 desc:"덱을 구축하며 탑을 정복하는 로그라이크 카드 게임." },
  { id:250900,  title:"The Binding of Isaac: Rebirth", genre:"인디",       tags:["로그라이크","액션","어두운","도전적","싱글플레이어"],   rating:9.3, year:2014, dev:"Nicalis",                  desc:"매번 다른 경험을 주는 무한 로그라이크 명작." },
  { id:1794680, title:"Vampire Survivors",             genre:"인디",       tags:["로그라이크","서바이벌","캐주얼","무료","빠른"],         rating:9.7, year:2022, dev:"poncle",                   desc:"1인치 크기 흡혈귀 생존 로그라이크 히트작." },
  { id:632360,  title:"Risk of Rain 2",                genre:"인디",       tags:["로그라이크","액션","협동","빠른","3인칭"],              rating:9.0, year:2020, dev:"Hopoo Games",              desc:"무한 확장하는 협동 3D 로그라이크 슈터." },
  { id:590380,  title:"Into the Breach",               genre:"전략",       tags:["전략","턴제","로그라이크","sf","도전적"],               rating:9.0, year:2018, dev:"Subset Games",             desc:"미래를 구하는 퍼즐 같은 턴제 전략 게임." },
  { id:212680,  title:"FTL: Faster Than Light",        genre:"전략",       tags:["전략","로그라이크","sf","도전적","싱글플레이어"],       rating:9.2, year:2012, dev:"Subset Games",             desc:"우주선을 지휘하며 생존하는 로그라이크 명작." },
  { id:881100,  title:"Noita",                         genre:"인디",       tags:["로그라이크","마법","물리엔진","도전적","탐험"],         rating:9.1, year:2020, dev:"Nolla Games",              desc:"물리 기반 픽셀 마법사 로그라이크 걸작." },
  { id:391540,  title:"Undertale",                     genre:"인디",       tags:["rpg","스토리","평화주의","레트로","유머"],              rating:9.8, year:2015, dev:"Toby Fox",                 desc:"싸우지 않아도 되는 혁신적인 인디 RPG 명작." },
  { id:1150690, title:"OMORI",                         genre:"인디",       tags:["rpg","공포","심리","스토리","픽셀"],                   rating:9.5, year:2020, dev:"OMOCAT",                    desc:"꿈과 현실을 오가는 심리 공포 인디 RPG." },
  { id:387290,  title:"Ori and the Blind Forest: DE",  genre:"인디",       tags:["플랫포머","인디","아름다운","스토리","도전적"],         rating:9.1, year:2016, dev:"Moon Studios",             desc:"숨막히는 아름다움을 가진 감동적인 플랫포머." },
  { id:1332010, title:"Stray",                         genre:"인디",       tags:["어드벤처","고양이","sf","스토리","힐링"],               rating:8.5, year:2022, dev:"BlueTwelve Studio",         desc:"로봇 도시를 탐험하는 고양이 어드벤처." },
  { id:424840,  title:"Little Nightmares",             genre:"공포",       tags:["공포","퍼즐","플랫포머","어두운","싱글플레이어"],       rating:8.5, year:2017, dev:"Tarsier Studios",          desc:"기묘한 세계에서 생존하는 공포 퍼즐 플랫포머." },
  { id:860510,  title:"Little Nightmares II",          genre:"공포",       tags:["공포","퍼즐","플랫포머","어두운","싱글플레이어"],       rating:8.6, year:2021, dev:"Tarsier Studios",          desc:"더 커진 세계의 공포, 리틀 나이트메어 속편." },
  { id:48000,   title:"LIMBO",                         genre:"인디",       tags:["퍼즐","플랫포머","흑백","어두운","짧음"],               rating:8.8, year:2011, dev:"Playdead",                 desc:"흑백의 기묘한 세계를 탐험하는 인디 퍼즐 플랫포머." },
  { id:304430,  title:"INSIDE",                        genre:"인디",       tags:["퍼즐","플랫포머","디스토피아","싱글플레이어","짧음"],   rating:9.1, year:2016, dev:"Playdead",                 desc:"LIMBO의 후속작, 더욱 섬뜩한 디스토피아 세계." },
  { id:972660,  title:"Spiritfarer",                   genre:"인디",       tags:["힐링","인디","스토리","시뮬레이션","감동"],             rating:8.9, year:2020, dev:"Thunder Lotus Games",      desc:"영혼들을 저세상으로 배웅하는 힐링 게임." },
  { id:1135690, title:"Unpacking",                     genre:"인디",       tags:["힐링","퍼즐","싱글플레이어","짧음","감성"],             rating:8.9, year:2021, dev:"Witch Beam",               desc:"이삿짐을 정리하며 이야기를 발견하는 미니멀 게임." },
  { id:1562430, title:"DREDGE",                        genre:"인디",       tags:["낚시","공포","어드벤처","힐링","미스터리"],             rating:8.3, year:2023, dev:"Black Salt Games",         desc:"기묘한 바다에서 낚시하는 코즈믹 공포 게임." },
  { id:1282730, title:"Loop Hero",                     genre:"인디",       tags:["로그라이크","전략","레트로","자동전투","덱빌딩"],       rating:8.5, year:2021, dev:"Four Quarters",            desc:"세계를 재건하며 루프를 반복하는 독특한 전략 게임." },
  { id:1388880, title:"Doki Doki Literature Club Plus!", genre:"인디",     tags:["비주얼노벨","공포","로맨스","심리","짧음"],             rating:9.3, year:2021, dev:"Team Salvato",             desc:"귀여운 외모 속에 숨겨진 심리 공포 비주얼 노벨." },

  // ── 추가 전략 / 시뮬레이션 ───────────────────────────────────────────────
  { id:457140,  title:"Oxygen Not Included",           genre:"전략",       tags:["시뮬레이션","서바이벌","건설","도전적","과학"],        rating:8.9, year:2019, dev:"Klei Entertainment",       desc:"우주 소행성 기지를 관리하는 복잡한 콜로니 시뮬." },
  { id:323190,  title:"Frostpunk",                     genre:"전략",       tags:["서바이벌","도시건설","도전적","아포칼립스","전략"],     rating:8.8, year:2018, dev:"11 bit studios",           desc:"얼어붙은 세계에서 마지막 도시를 지키는 서바이벌 시뮬." },
  { id:1601580, title:"Frostpunk 2",                   genre:"전략",       tags:["서바이벌","도시건설","도전적","전략","아포칼립스"],     rating:7.9, year:2024, dev:"11 bit studios",           desc:"산업화 시대의 냉혹한 결단을 요구하는 속편." },
  { id:644930,  title:"They Are Billions",             genre:"전략",       tags:["전략","좀비","타워디펜스","도전적","서바이벌"],         rating:7.9, year:2019, dev:"Numantian Games",           desc:"수십억 좀비를 막는 스팀파크 타워디펜스 전략." },
  { id:535930,  title:"Two Point Hospital",            genre:"전략",       tags:["시뮬레이션","병원","유머","캐주얼","건설"],             rating:8.3, year:2018, dev:"Two Point Studios",        desc:"우스꽝스러운 병원을 경영하는 유머러스한 시뮬." },
  { id:1649080, title:"Two Point Campus",              genre:"전략",       tags:["시뮬레이션","캠퍼스","유머","캐주얼","건설"],           rating:7.9, year:2022, dev:"Two Point Studios",        desc:"개성 넘치는 대학 캠퍼스를 만드는 경영 시뮬." },
  { id:703080,  title:"Planet Zoo",                    genre:"전략",       tags:["시뮬레이션","동물원","건설","캐주얼","창의"],           rating:8.7, year:2019, dev:"Frontier Developments",    desc:"나만의 꿈의 동물원을 건설하는 시뮬레이션." },
  { id:493340,  title:"Planet Coaster",                genre:"전략",       tags:["시뮬레이션","테마파크","건설","캐주얼","창의"],         rating:8.4, year:2016, dev:"Frontier Developments",    desc:"놀이공원을 설계하고 운영하는 창의적인 시뮬." },

  // ── 추가 공포 / 서바이벌 ────────────────────────────────────────────────
  { id:57300,   title:"Amnesia: The Dark Descent",     genre:"공포",       tags:["공포","싱글플레이어","심리공포","어두운","클래식"],     rating:8.7, year:2010, dev:"Frictional Games",         desc:"심리 공포 장르를 혁신한 숨막히는 공포 명작." },
  { id:274520,  title:"Darkwood",                      genre:"공포",       tags:["공포","서바이벌","탑다운","어두운","도전적"],           rating:9.0, year:2017, dev:"Acid Wizard Studio",       desc:"불안감을 극대화한 탑다운 뷰 공포 서바이벌." },
  { id:305620,  title:"The Long Dark",                 genre:"서바이벌",   tags:["서바이벌","눈","자연","1인칭","단독","스토리"],          rating:8.5, year:2017, dev:"Hinterland Studio",        desc:"캐나다 황야에서 생존하는 아름다운 서바이벌 게임." },

  // ── 추가 어드벤처 / 기타 ─────────────────────────────────────────────────
  { id:1490000, title:"The Forgotten City",            genre:"RPG",        tags:["rpg","역사","스토리","시간루프","싱글플레이어"],        rating:8.8, year:2021, dev:"Modern Storyteller",       desc:"고대 로마 도시의 저주를 푸는 어워드 수상 RPG." },
  { id:1967680, title:"Pentiment",                     genre:"RPG",        tags:["rpg","역사","스토리","독특한","중세"],                  rating:8.8, year:2022, dev:"Obsidian Entertainment",    desc:"중세 유럽 수도원 살인 사건을 파헤치는 내러티브 RPG." },
  { id:1290000, title:"PowerWash Simulator",           genre:"시뮬레이션", tags:["힐링","시뮬레이션","캐주얼","협동","스트레스해소"],     rating:8.6, year:2022, dev:"FuturLab",                  desc:"온갖 것을 세척하는 중독성 넘치는 힐링 게임." },
  { id:613100,  title:"House Flipper",                 genre:"시뮬레이션", tags:["시뮬레이션","힐링","건설","캐주얼","인테리어"],         rating:8.0, year:2018, dev:"Empyrean",                  desc:"집을 사서 고치고 파는 인테리어 시뮬." },
  { id:1551360, title:"Forza Horizon 5",               genre:"레이싱",     tags:["레이싱","오픈월드","멀티플레이어","캐주얼","현실적"],    rating:9.0, year:2021, dev:"Playground Games",         desc:"멕시코를 배경으로 한 역대 최고의 레이싱 게임." },
  { id:228380,  title:"Wreckfest",                     genre:"레이싱",     tags:["레이싱","파괴","멀티플레이어","캐주얼","물리엔진"],      rating:8.7, year:2018, dev:"Bugbear Entertainment",    desc:"차를 부수고 난리치는 파괴적인 레이싱." },
  { id:812140,  title:"Assassin's Creed Odyssey",      genre:"RPG",        tags:["rpg","오픈월드","그리스","역사","액션"],                 rating:8.2, year:2018, dev:"Ubisoft Quebec",            desc:"고대 그리스를 무대로 한 방대한 오픈월드 RPG." },

  // ── 샌드박스 추가 ────────────────────────────────────────────────────────
  { id:4000,    title:"Garry's Mod",                  genre:"샌드박스", tags:["샌드박스","자유","물리","멀티플레이어","창의"],       rating:9.3, year:2006, dev:"Facepunch Studios",      desc:"물리 기반 창작의 끝판왕. 무엇이든 만들고 부수는 자유의 게임." },
  { id:251570,  title:"7 Days to Die",                genre:"샌드박스", tags:["서바이벌","좀비","건설","오픈월드","크래프팅"],       rating:8.0, year:2016, dev:"The Fun Pimps",           desc:"좀비 생존과 타워 디펜스를 결합한 복셀 샌드박스." },
  { id:242760,  title:"The Forest",                   genre:"샌드박스", tags:["서바이벌","공포","건설","오픈월드","협동"],           rating:8.7, year:2018, dev:"Endnight Games",          desc:"추락한 숲 속에서 살아남으며 구조물을 짓는 서바이벌." },
  { id:387990,  title:"Scrap Mechanic",               genre:"샌드박스", tags:["건설","기계","협동","창의","물리"],                   rating:8.5, year:2016, dev:"Axolot Games",            desc:"기계 장치로 무엇이든 만드는 창의적인 샌드박스." },
  { id:1284190, title:"The Planet Crafter",           genre:"샌드박스", tags:["테라포밍","우주","서바이벌","탐험","건설"],           rating:8.6, year:2022, dev:"Miju Games",              desc:"황폐한 행성을 직접 테라포밍하는 SF 서바이벌 샌드박스." },
  { id:573090,  title:"Stormworks: Build and Rescue", genre:"샌드박스", tags:["건설","엔지니어링","협동","구조","창의"],             rating:8.8, year:2019, dev:"Geometa Ltd",             desc:"구조 차량과 선박을 설계해 재난 현장에 투입하는 게임." },
  { id:433340,  title:"Slime Rancher",                genre:"샌드박스", tags:["힐링","농장","슬라임","캐주얼","탐험"],               rating:9.1, year:2017, dev:"Monomi Park",             desc:"귀여운 슬라임을 키우는 힐링 농장 어드벤처." },
  { id:1657630, title:"Slime Rancher 2",              genre:"샌드박스", tags:["힐링","농장","슬라임","캐주얼","탐험"],               rating:8.9, year:2022, dev:"Monomi Park",             desc:"더 넓어진 세계와 새로운 슬라임으로 돌아온 속편." },
  { id:666140,  title:"My Time at Portia",            genre:"샌드박스", tags:["농장","건설","마을","힐링","rpg"],                   rating:8.2, year:2019, dev:"Pathea Games",            desc:"공방을 운영하며 마을을 재건하는 힐링 RPG 시뮬." },
  { id:1158160, title:"Coral Island",                 genre:"샌드박스", tags:["농장","힐링","해양","커뮤니티","픽셀"],               rating:8.4, year:2023, dev:"Stairway Games",          desc:"산호초를 복원하며 섬 마을을 꾸미는 힐링 농장 게임." },
  { id:1401590, title:"Disney Dreamlight Valley",     genre:"샌드박스", tags:["힐링","디즈니","마을","캐주얼","가족"],               rating:7.8, year:2023, dev:"Gameloft",                desc:"디즈니 캐릭터들과 함께하는 꿈의 마을 꾸미기 게임." },
  { id:1644820, title:"Teardown",                     genre:"샌드박스", tags:["파괴","물리","퍼즐","복셀","샌드박스"],               rating:9.2, year:2022, dev:"Tuxedo Labs",             desc:"복셀 세계를 완전히 파괴하는 창의적인 파괴 시뮬레이션." },

  // ── 격투 추가 ──────────────────────────────────────────────────────────
  { id:1778820, title:"Tekken 8",                     genre:"격투",     tags:["격투","3D","경쟁","스토리","멀티플레이어"],           rating:9.0, year:2024, dev:"Bandai Namco",            desc:"전통과 혁신이 공존하는 철권 시리즈 최고 걸작." },
  { id:1971870, title:"Mortal Kombat 1",              genre:"격투",     tags:["격투","고어","스토리","리부트","경쟁"],               rating:8.0, year:2023, dev:"NetherRealm Studios",     desc:"타임라인 리셋으로 새롭게 시작하는 MK 시리즈 최신작." },
  { id:310950,  title:"Street Fighter V",             genre:"격투",     tags:["격투","2D","경쟁","아케이드","멀티플레이어"],         rating:7.8, year:2016, dev:"Capcom",                  desc:"스트리트 파이터 시리즈의 전통을 잇는 격투 게임." },
  { id:627690,  title:"Injustice 2",                  genre:"격투",     tags:["격투","DC","슈퍼히어로","스토리","경쟁"],             rating:8.5, year:2017, dev:"NetherRealm Studios",     desc:"배트맨 vs 슈퍼맨, DC 영웅들이 맞붙는 격투 게임." },
  { id:349040,  title:"NARUTO Shippuden: Ultimate Ninja STORM 4", genre:"격투", tags:["격투","나루토","애니","스토리","멀티플레이어"], rating:8.7, year:2016, dev:"CyberConnect2",          desc:"나루토 시리즈를 완벽 재현한 최고의 애니 격투 게임." },
  { id:544750,  title:"SOULCALIBUR VI",               genre:"격투",     tags:["격투","3D","무기","역사","경쟁"],                     rating:8.3, year:2018, dev:"Bandai Namco",            desc:"무기 기반 화려한 3D 격투 게임의 정석." },
  { id:245170,  title:"Skullgirls 2nd Encore",        genre:"격투",     tags:["격투","2D","인디","캐릭터","애니"],                   rating:9.0, year:2014, dev:"Hidden Variable",         desc:"아름다운 수제 애니메이션으로 만든 인디 격투 게임." },
  { id:1166990, title:"Granblue Fantasy Versus",      genre:"격투",     tags:["격투","애니","경쟁","스토리","rpg요소"],              rating:8.2, year:2020, dev:"Arc System Works",         desc:"인기 모바일 RPG 그랜블루를 화려한 격투 게임으로." },
  { id:1498570, title:"THE KING OF FIGHTERS XV",      genre:"격투",     tags:["격투","팀","경쟁","클래식","멀티플레이어"],           rating:8.0, year:2022, dev:"SNK",                     desc:"KOF 시리즈의 30주년 기념작. 팀 배틀 격투의 전통." },
  { id:577940,  title:"Killer Instinct",              genre:"격투",     tags:["격투","무료","경쟁","콤보","Xbox"],                   rating:8.5, year:2013, dev:"Iron Galaxy",             desc:"화려한 콤보와 개성 강한 캐릭터의 무료 격투 게임." },
  { id:1372280, title:"Melty Blood: Type Lumina",     genre:"격투",     tags:["격투","비주얼노벨","애니","2D","경쟁"],               rating:8.6, year:2021, dev:"French Bread",            desc:"달의 노래 세계관의 정교한 2D 격투 게임." },

  // ── 스포츠 추가 ──────────────────────────────────────────────────────────
  { id:431240,  title:"Golf With Your Friends",       genre:"스포츠",   tags:["골프","캐주얼","파티","멀티플레이어","재미"],         rating:9.0, year:2020, dev:"Blacklight Interactive",  desc:"기상천외한 코스에서 즐기는 초재미 파티 골프 게임." },
  { id:681280,  title:"Descenders",                   genre:"스포츠",   tags:["MTB","익스트림","랜덤","로그라이크","도전적"],         rating:8.8, year:2019, dev:"RageSquid",              desc:"산악자전거로 질주하는 로그라이크 익스트림 스포츠." },
  { id:962730,  title:"Skater XL",                    genre:"스포츠",   tags:["스케이트보드","리얼리즘","트릭","캐주얼","물리"],     rating:7.8, year:2020, dev:"Easy Day Studios",       desc:"실제 스케이트보드를 재현한 물리 기반 스케이팅." },
  { id:2108330,  title:"F1 23",                        genre:"스포츠",   tags:["F1","레이싱","리얼리즘","경쟁","스포츠"],             rating:8.0, year:2023, dev:"Codemasters",            desc:"F1 공식 라이선스의 가장 현실적인 포뮬러 레이싱." },
  { id:2252570, title:"Football Manager 2024",        genre:"스포츠",   tags:["축구","경영","전술","시뮬레이션","중독성"],           rating:8.5, year:2023, dev:"Sports Interactive",      desc:"세계 최고의 축구 감독 시뮬레이션. 끝없는 중독." },
  { id:2225040, title:"Trackmania",                   genre:"스포츠",   tags:["레이싱","아케이드","트랙빌더","경쟁","무료"],         rating:8.7, year:2020, dev:"Nadeo",                   desc:"초고속 아케이드 레이싱과 트랙 제작의 무료 게임." },
  { id:2348190, title:"NBA 2K24",                     genre:"스포츠",   tags:["농구","NBA","리얼리즘","스포츠","경쟁"],             rating:7.5, year:2023, dev:"Visual Concepts",         desc:"NBA의 모든 것을 담은 최신 농구 시뮬레이션." },
  { id:460580,  title:"Steep",                        genre:"스포츠",   tags:["익스트림","오픈월드","스키","스노보드","협동"],       rating:8.0, year:2016, dev:"Ubisoft Annecy",          desc:"알프스를 무대로 한 멀티 익스트림 스포츠 어드벤처." },
  { id:1215980, title:"OlliOlli World",               genre:"스포츠",   tags:["스케이트","2D","아케이드","인디","캐주얼"],           rating:8.8, year:2022, dev:"Roll7",                   desc:"생동감 넘치는 2D 스케이트보딩 아케이드 게임." },
  { id:1465360, title:"SnowRunner",                   genre:"스포츠",   tags:["오프로드","트럭","오픈월드","도전적","협동"],         rating:8.8, year:2020, dev:"Saber Interactive",       desc:"극한 지형을 오프로드 차량으로 극복하는 어드벤처." },
  { id:1785650, title:"TopSpin 2K25",                 genre:"스포츠",   tags:["테니스","스포츠","리얼리즘","경쟁","캐릭터"],         rating:7.8, year:2024, dev:"Hangar 13",               desc:"최고의 테니스 선수들과 대결하는 공식 테니스 게임." },
  { id:861650,  title:"Session: Skate Sim",           genre:"스포츠",   tags:["스케이트","리얼리즘","물리","도전적","인디"],         rating:7.9, year:2022, dev:"crea-ture Studios",       desc:"실제 스케이트보드 기술을 최대한 리얼하게 구현." },

  // ── 레이싱 추가 ──────────────────────────────────────────────────────────
  { id:244210,  title:"Assetto Corsa",                genre:"레이싱",   tags:["레이싱","시뮬레이션","리얼리즘","모딩","트랙"],       rating:9.2, year:2014, dev:"Kunos Simulazioni",       desc:"가장 현실적인 드라이빙 피지크스. 레이싱 시뮬의 바이블." },
  { id:805550,  title:"Assetto Corsa Competizione",   genre:"레이싱",   tags:["레이싱","GT레이싱","리얼리즘","경쟁","시뮬레이션"], rating:8.8, year:2019, dev:"Kunos Simulazioni",       desc:"GT 월드 챌린지를 완벽 재현한 레이싱 시뮬레이션." },
  { id:284160,  title:"BeamNG.drive",                 genre:"레이싱",   tags:["물리","차량","충돌","샌드박스","시뮬레이션"],         rating:9.5, year:2015, dev:"BeamNG",                  desc:"세계에서 가장 현실적인 차량 물리 시뮬레이션." },
  { id:690790,  title:"DiRT Rally 2.0",               genre:"레이싱",   tags:["랠리","레이싱","리얼리즘","도전적","시뮬레이션"],     rating:8.9, year:2019, dev:"Codemasters",            desc:"진정한 랠리의 짜릿함을 담은 레이싱 시뮬레이션." },
  { id:1222680, title:"Need for Speed Heat",          genre:"레이싱",   tags:["레이싱","오픈월드","경찰","튜닝","야간"],             rating:8.2, year:2019, dev:"Ghost Games",            desc:"낮은 합법 레이스, 밤은 도주전. 열정 가득한 레이싱." },
  { id:1846380, title:"Need for Speed Unbound",       genre:"레이싱",   tags:["레이싱","오픈월드","경찰","아트스타일","튜닝"],       rating:8.0, year:2022, dev:"Criterion Games",        desc:"만화적 비주얼과 스트리트 레이싱의 신선한 조합." },
  { id:550320,  title:"Art of Rally",                 genre:"레이싱",   tags:["랠리","탑다운","아트","힐링","인디"],                 rating:9.0, year:2020, dev:"Funselektor Labs",        desc:"미니멀 아트 스타일로 구현한 아름다운 랠리 게임." },
  { id:1271700, title:"Hot Wheels Unleashed",         genre:"레이싱",   tags:["핫휠","아케이드","트랙빌더","캐주얼","가족"],         rating:8.5, year:2021, dev:"Milestone",              desc:"어린 시절 핫휠 장난감이 실제로 달리는 아케이드 레이싱." },
  { id:1238080, title:"Burnout Paradise Remastered",  genre:"레이싱",   tags:["레이싱","아케이드","파괴","오픈월드","속도"],         rating:8.7, year:2018, dev:"Criterion Games",        desc:"차량 파괴와 질주가 어우러진 아케이드 레이싱 명작." },
  { id:675010,  title:"MudRunner",                    genre:"레이싱",   tags:["오프로드","트럭","진흙","협동","도전적"],             rating:8.5, year:2017, dev:"Saber Interactive",       desc:"진흙과 험로를 극복하는 오프로드 트럭 시뮬레이션." },
  { id:1307410, title:"GRID Legends",                 genre:"레이싱",   tags:["레이싱","멀티플레이어","스토리","다양한차종","경쟁"], rating:7.8, year:2022, dev:"Codemasters",            desc:"다양한 클래스와 화려한 스토리의 레이싱 게임." },
  { id:2440510, title:"Forza Motorsport",             genre:"레이싱",   tags:["레이싱","시뮬레이션","자동차","경쟁","리얼리즘"],     rating:8.0, year:2023, dev:"Turn 10 Studios",         desc:"포르자 시리즈의 트랙 레이싱 정통 후속작." },
];

const EXTRA_GAMES = [
    { id:400, title:"Portal", genre:"액션", tags:["퍼즐","sf","고전","1인칭","명작"], rating:9.4, year:2007, dev:"Valve", desc:"포탈 건을 활용한 전설적인 퍼즐 액션 게임." },
    { id:620, title:"Portal 2", genre:"액션", tags:["퍼즐","협동","sf","1인칭","명작"], rating:9.8, year:2011, dev:"Valve", desc:"퍼즐 디자인과 유머 모두 완성형인 포탈 시리즈 최고작." },
    { id:500, title:"Left 4 Dead", genre:"FPS", tags:["좀비","협동","fps","고전","생존"], rating:8.8, year:2008, dev:"Valve", desc:"4인 협동 좀비 슈터의 교과서 같은 작품." },
    { id:550, title:"Left 4 Dead 2", genre:"FPS", tags:["좀비","협동","fps","생존","클래식"], rating:9.2, year:2009, dev:"Valve", desc:"지금도 사랑받는 협동 좀비 슈터 대표작." },
    { id:239140, title:"Dying Light", genre:"서바이벌", tags:["좀비","파쿠르","오픈월드","생존","액션"], rating:8.9, year:2015, dev:"Techland", desc:"파쿠르와 좀비 생존이 결합된 오픈월드 액션." },
    { id:534380, title:"Dying Light 2 Stay Human", genre:"서바이벌", tags:["좀비","파쿠르","오픈월드","생존","액션"], rating:8.0, year:2022, dev:"Techland", desc:"전작의 장점을 확장한 오픈월드 좀비 액션 후속작." },
    { id:218620, title:"PAYDAY 2", genre:"FPS", tags:["협동","강도","fps","멀티플레이어","전술"], rating:8.7, year:2013, dev:"OVERKILL", desc:"팀을 이뤄 은행을 터는 협동 하이스트 FPS." },
    { id:230410, title:"Warframe", genre:"액션", tags:["루터슈터","sf","협동","빠른","무료"], rating:8.8, year:2013, dev:"Digital Extremes", desc:"닌자처럼 빠르게 움직이는 무료 루터슈터." },
    { id:49520, title:"Borderlands 2", genre:"FPS", tags:["루터슈터","협동","fps","유머","파밍"], rating:9.1, year:2012, dev:"Gearbox Software", desc:"루터슈터 장르의 대표작 중 하나." },
    { id:397540, title:"Borderlands 3", genre:"FPS", tags:["루터슈터","협동","fps","파밍","액션"], rating:8.2, year:2020, dev:"Gearbox Software", desc:"더 화려해진 액션과 파밍이 강점인 루터슈터." },
    { id:8870, title:"BioShock Infinite", genre:"액션", tags:["스토리","sf","액션","1인칭","명작"], rating:9.1, year:2013, dev:"Irrational Games", desc:"강렬한 연출과 세계관이 돋보이는 스토리 액션." },
    { id:409710, title:"BioShock Remastered", genre:"액션", tags:["스토리","공포","액션","고전","리마스터"], rating:8.7, year:2016, dev:"2K", desc:"랩처를 다시 탐험하는 바이오쇼크 리마스터." },
    { id:367520, title:"Hollow Knight", genre:"어드벤처", tags:["메트로배니아","도전적","탐험","인디","명작"], rating:9.7, year:2017, dev:"Team Cherry", desc:"완성도 높은 메트로배니아의 대표작." },
    { id:504230, title:"Celeste", genre:"어드벤처", tags:["플랫포머","도전적","감동","인디","정밀"], rating:9.5, year:2018, dev:"Extremely OK Games", desc:"정교한 조작감과 진심 어린 서사가 인상적이다." },
    { id:588650, title:"Dead Cells", genre:"액션", tags:["로그라이크","메트로배니아","빠른","인디","액션"], rating:9.3, year:2018, dev:"Motion Twin", desc:"빠르고 중독적인 전투가 강한 로그라이크 액션." },
    { id:387290, title:"Ori and the Blind Forest: Definitive Edition", genre:"어드벤처", tags:["메트로배니아","감성","플랫포머","액션","명작"], rating:9.4, year:2016, dev:"Moon Studios", desc:"아름다운 비주얼과 조작감을 갖춘 액션 어드벤처." },
    { id:1057090, title:"Ori and the Will of the Wisps", genre:"어드벤처", tags:["메트로배니아","감성","플랫포머","액션","명작"], rating:9.5, year:2020, dev:"Moon Studios", desc:"전작을 한층 확장한 액션 어드벤처 명작." },
    { id:524220, title:"NieR:Automata", genre:"RPG", tags:["액션","jrpg","sf","스토리","감성"], rating:9.4, year:2017, dev:"PlatinumGames", desc:"독특한 서사와 액션으로 깊은 인상을 남기는 작품." },
    { id:638970, title:"Yakuza 0", genre:"액션", tags:["스토리","액션","범죄","일본","명작"], rating:9.3, year:2018, dev:"Ryu Ga Gotoku Studio", desc:"용과 같이 시리즈 입문작으로 많이 꼽히는 명작." },
    { id:834530, title:"Yakuza Kiwami", genre:"액션", tags:["스토리","액션","범죄","일본","리메이크"], rating:8.7, year:2019, dev:"Ryu Ga Gotoku Studio", desc:"시리즈 첫 작품을 현대적으로 다듬은 리메이크." },
    { id:1235140, title:"Yakuza: Like a Dragon", genre:"RPG", tags:["jrpg","턴제","스토리","범죄","일본"], rating:8.9, year:2020, dev:"Ryu Ga Gotoku Studio", desc:"용과 같이 시리즈의 턴제 RPG 전환작." },
    { id:1151640, title:"Horizon Zero Dawn Complete Edition", genre:"액션", tags:["오픈월드","스토리","액션","sf","사냥"], rating:8.9, year:2020, dev:"Guerrilla", desc:"기계 생명체가 지배하는 세계를 탐험하는 액션 RPG." },
    { id:1593500, title:"God of War", genre:"액션", tags:["액션","스토리","신화","전투","명작"], rating:9.6, year:2022, dev:"Santa Monica Studio", desc:"부자 서사와 묵직한 전투가 강한 액션 어드벤처." },
    { id:1817070, title:"Marvel's Spider-Man Remastered", genre:"액션", tags:["히어로","오픈월드","액션","스토리","마블"], rating:9.1, year:2022, dev:"Insomniac Games", desc:"도심을 질주하는 손맛이 탁월한 히어로 액션." },
    { id:1817190, title:"Marvel's Spider-Man: Miles Morales", genre:"액션", tags:["히어로","오픈월드","액션","스토리","마블"], rating:8.7, year:2022, dev:"Insomniac Games", desc:"더 감각적인 전투와 성장 서사가 특징인 후속작." },
    { id:1259420, title:"Days Gone", genre:"액션", tags:["좀비","오픈월드","바이크","생존","스토리"], rating:8.4, year:2021, dev:"Bend Studio", desc:"바이크와 좀비 떼가 인상적인 오픈월드 액션." },
    { id:1850570, title:"DEATH STRANDING DIRECTOR'S CUT", genre:"어드벤처", tags:["스토리","배달","오픈월드","sf","독특"], rating:8.8, year:2022, dev:"KOJIMA PRODUCTIONS", desc:"연결을 주제로 한 독창적인 오픈월드 어드벤처." },
    { id:870780, title:"Control Ultimate Edition", genre:"액션", tags:["초능력","액션","스토리","sf","분위기"], rating:8.8, year:2021, dev:"Remedy Entertainment", desc:"초능력 전투와 미스터리한 분위기가 강한 액션." },
    { id:753640, title:"Outer Wilds", genre:"어드벤처", tags:["탐험","우주","퍼즐","스토리","명작"], rating:9.6, year:2019, dev:"Mobius Digital", desc:"탐험의 즐거움 자체를 완성형으로 보여주는 우주 게임." },
    { id:646570, title:"Slay the Spire", genre:"전략", tags:["덱빌딩","로그라이크","전략","인디","턴제"], rating:9.5, year:2019, dev:"Mega Crit", desc:"덱빌딩 로그라이크 장르를 대표하는 작품." },
    { id:632360, title:"Risk of Rain 2", genre:"액션", tags:["로그라이크","협동","액션","파밍","인디"], rating:9.1, year:2020, dev:"Hopoo Games", desc:"중독성 높은 협동 로그라이크 액션 슈터." },
    { id:1794680, title:"Vampire Survivors", genre:"액션", tags:["로그라이크","인디","중독성","생존","캐주얼"], rating:9.2, year:2022, dev:"poncle", desc:"간단하지만 계속 손이 가는 초중독성 생존 액션." },
    { id:1868140, title:"DAVE THE DIVER", genre:"시뮬레이션", tags:["경영","탐험","낚시","인디","도트"], rating:9.4, year:2023, dev:"MINTROCKET", desc:"낮엔 바다 탐험, 밤엔 초밥집 운영하는 힐링 경영 게임." },
    { id:1627720, title:"Lies of P", genre:"RPG", tags:["소울즈라이크","다크판타지","액션","도전적","인형"], rating:8.8, year:2023, dev:"NEOWIZ", desc:"피노키오를 재해석한 소울라이크 액션 RPG." },
    { id:1888160, title:"ARMORED CORE VI FIRES OF RUBICON", genre:"액션", tags:["메카","액션","보스전","도전적","커스터마이즈"], rating:8.9, year:2023, dev:"FromSoftware", desc:"묵직한 메카 액션과 빌드 재미가 살아있는 작품." },
    { id:1282100, title:"Remnant II", genre:"액션", tags:["협동","슈팅","소울즈라이크","액션","파밍"], rating:8.5, year:2023, dev:"Gunfire Games", desc:"협동과 보스전이 강한 소울라이크 슈팅 액션." },
    { id:1361210, title:"Warhammer 40,000: Darktide", genre:"FPS", tags:["협동","fps","근접전","sf","워해머"], rating:8.1, year:2022, dev:"Fatshark", desc:"워해머 40K 세계관의 협동 액션 FPS." },
    { id:1942280, title:"Brotato", genre:"액션", tags:["로그라이크","인디","생존","캐주얼","중독성"], rating:8.9, year:2023, dev:"Blobfish", desc:"짧고 굵게 반복 플레이하기 좋은 아레나 생존 액션." },
    { id:2379780, title:"Balatro", genre:"전략", tags:["카드","로그라이크","덱빌딩","인디","중독성"], rating:9.6, year:2024, dev:"LocalThunk", desc:"포커를 뒤틀어 만든 압도적 중독성의 카드 로그라이크." },
    { id:1623730, title:"Palworld", genre:"서바이벌", tags:["오픈월드","크래프팅","생존","몬스터","협동"], rating:8.6, year:2024, dev:"Pocketpair", desc:"몬스터 수집과 생존 크래프팅을 섞은 화제작." },
    { id:1203620, title:"Enshrouded", genre:"서바이벌", tags:["오픈월드","크래프팅","생존","협동","판타지"], rating:8.4, year:2024, dev:"Keen Games", desc:"건축과 탐험의 재미가 좋은 협동 생존 오픈월드." },
    { id:427520, title:"Factorio", genre:"전략", tags:["자동화","공장","전략","생산","중독성"], rating:9.7, year:2020, dev:"Wube Software", desc:"자동화와 생산 최적화의 끝판왕 같은 게임." },
    { id:294100, title:"RimWorld", genre:"시뮬레이션", tags:["생존","경영","스토리생성","기지건설","인디"], rating:9.6, year:2018, dev:"Ludeon Studios", desc:"매 판 새로운 이야기가 만들어지는 식민지 시뮬레이션." },
    { id:457140, title:"Oxygen Not Included", genre:"시뮬레이션", tags:["기지건설","생존","자동화","경영","우주"], rating:9.1, year:2019, dev:"Klei Entertainment", desc:"디테일한 생존 관리가 매력적인 우주 콜로니 게임." },
    { id:323190, title:"Frostpunk", genre:"전략", tags:["생존","도시건설","전략","암울","선택"], rating:9.0, year:2018, dev:"11 bit studios", desc:"극한 환경에서 도시를 유지하는 생존 전략 게임." },
    { id:1601580, title:"Frostpunk 2", genre:"전략", tags:["생존","도시건설","전략","정치","선택"], rating:8.2, year:2024, dev:"11 bit studios", desc:"전작을 더 큰 규모와 정치적 선택으로 확장한 후속작." },
    { id:220200, title:"Kerbal Space Program", genre:"시뮬레이션", tags:["우주","물리","샌드박스","제작","시뮬"], rating:9.3, year:2015, dev:"Squad", desc:"로켓을 설계하고 우주로 보내는 최고의 샌드박스 시뮬." },
    { id:227300, title:"Euro Truck Simulator 2", genre:"시뮬레이션", tags:["운전","트럭","힐링","시뮬","여행"], rating:9.5, year:2012, dev:"SCS Software", desc:"한 번 빠지면 장거리 주행의 묘미에서 못 나온다." },
    { id:270880, title:"American Truck Simulator", genre:"시뮬레이션", tags:["운전","트럭","힐링","시뮬","여행"], rating:9.1, year:2016, dev:"SCS Software", desc:"미국 대륙을 가로지르는 트럭 운전 시뮬레이션." },
    { id:265930, title:"Goat Simulator", genre:"샌드박스", tags:["유머","샌드박스","파괴","캐주얼","밈"], rating:8.3, year:2014, dev:"Coffee Stain Studios", desc:"염소가 되어 온 동네를 난장판으로 만드는 밈 게임." },
    { id:1030840, title:"Mafia: Definitive Edition", genre:"액션", tags:["스토리","범죄","리메이크","액션","오픈월드"], rating:8.5, year:2020, dev:"Hangar 13", desc:"클래식 느와르 범죄 액션을 현대적으로 복원한 리메이크." },
    { id:307690, title:"Sleeping Dogs: Definitive Edition", genre:"액션", tags:["오픈월드","격투","범죄","스토리","홍콩"], rating:8.8, year:2014, dev:"United Front Games", desc:"홍콩을 배경으로 한 통쾌한 격투 중심 오픈월드 액션." },
    { id:241930, title:"Middle-earth: Shadow of Mordor", genre:"액션", tags:["액션","오픈월드","판타지","전투","복수"], rating:8.7, year:2014, dev:"Monolith", desc:"네메시스 시스템으로 유명한 오픈월드 액션." },
    { id:356190, title:"Middle-earth: Shadow of War", genre:"액션", tags:["액션","오픈월드","판타지","전투","네메시스"], rating:8.3, year:2017, dev:"Monolith", desc:"전작의 시스템을 더 크게 확장한 판타지 액션." },
    { id:35140, title:"Batman: Arkham Asylum GOTY Edition", genre:"액션", tags:["히어로","잠입","액션","배트맨","고전"], rating:9.0, year:2009, dev:"Rocksteady", desc:"아캄 시리즈의 시작점이 된 배트맨 액션 명작." },
    { id:200260, title:"Batman: Arkham City GOTY", genre:"액션", tags:["히어로","오픈월드","액션","배트맨","명작"], rating:9.3, year:2012, dev:"Rocksteady", desc:"배트맨 액션의 정점을 보여주는 오픈월드 명작." },
    { id:208650, title:"Batman: Arkham Knight", genre:"액션", tags:["히어로","오픈월드","액션","배트맨","차량"], rating:8.6, year:2015, dev:"Rocksteady", desc:"배트카를 포함한 대규모 배트맨 액션 어드벤처." },
    { id:1328670, title:"Mass Effect Legendary Edition", genre:"RPG", tags:["sf","스토리","파티","선택","명작"], rating:9.2, year:2021, dev:"BioWare", desc:"셰퍼드 사령관의 서사를 한 번에 즐기는 합본판." },
    { id:367500, title:"Dragon's Dogma: Dark Arisen", genre:"RPG", tags:["액션","판타지","오픈월드","파티","보스전"], rating:8.7, year:2016, dev:"Capcom", desc:"독창적인 파티 시스템이 강한 액션 RPG." },
    { id:962130, title:"Grounded", genre:"서바이벌", tags:["협동","생존","크래프팅","오픈월드","곤충"], rating:8.7, year:2022, dev:"Obsidian Entertainment", desc:"작아진 인간이 마당에서 살아남는 협동 생존 게임." },
    { id:1172620, title:"Sea of Thieves", genre:"어드벤처", tags:["해적","협동","오픈월드","항해","멀티플레이어"], rating:8.8, year:2020, dev:"Rare", desc:"친구와 함께하기 좋은 해적 샌드박스 어드벤처." },
    { id:1817230, title:"Hi-Fi RUSH", genre:"액션", tags:["리듬","액션","스타일리시","만화풍","음악"], rating:9.0, year:2023, dev:"Tango Gameworks", desc:"음악 비트에 맞춘 스타일리시 액션이 매력적이다." },
    { id:1321440, title:"Cassette Beasts", genre:"RPG", tags:["몬스터수집","턴제","인디","탐험","합체"], rating:8.8, year:2023, dev:"Bytten Studio", desc:"몬스터 수집 장르를 신선하게 비튼 인디 RPG." },
    { id:1244090, title:"Sea of Stars", genre:"RPG", tags:["jrpg","턴제","도트","모험","인디"], rating:9.0, year:2023, dev:"Sabotage Studio", desc:"고전 JRPG 감성을 현대적으로 다듬은 턴제 RPG." },
    { id:1229240, title:"Chained Echoes", genre:"RPG", tags:["jrpg","턴제","도트","인디","스토리"], rating:8.9, year:2022, dev:"Matthias Linda", desc:"클래식 JRPG 팬들에게 강하게 추천되는 인디 명작." },
    { id:1971650, title:"OCTOPATH TRAVELER II", genre:"RPG", tags:["jrpg","턴제","도트","스토리","여행"], rating:8.8, year:2023, dev:"Square Enix", desc:"HD-2D 비주얼과 안정적인 턴제 전투가 매력이다." },
    { id:740130, title:"Tales of Arise", genre:"RPG", tags:["jrpg","액션","판타지","스토리","애니"], rating:8.7, year:2021, dev:"Bandai Namco", desc:"테일즈 시리즈를 현대적으로 끌어올린 액션 JRPG." },
    { id:883710, title:"Resident Evil 2", genre:"공포", tags:["호러","액션","생존","리메이크","좀비"], rating:9.4, year:2019, dev:"Capcom", desc:"리메이크의 모범 사례로 꼽히는 서바이벌 호러." },
    { id:952060, title:"Resident Evil 3", genre:"공포", tags:["호러","액션","생존","리메이크","좀비"], rating:8.0, year:2020, dev:"Capcom", desc:"더 빠른 템포의 리메이크 서바이벌 호러." },
    { id:418370, title:"Resident Evil 7 Biohazard", genre:"공포", tags:["호러","1인칭","생존","공포","스토리"], rating:9.1, year:2017, dev:"Capcom", desc:"시리즈를 1인칭으로 부활시킨 강렬한 공포 작품." },
    { id:412020, title:"Metro Exodus", genre:"FPS", tags:["스토리","포스트아포칼립스","fps","생존","분위기"], rating:8.8, year:2020, dev:"4A Games", desc:"분위기와 몰입감이 뛰어난 포스트아포칼립스 FPS." },
    { id:286690, title:"Metro 2033 Redux", genre:"FPS", tags:["스토리","포스트아포칼립스","fps","생존","리마스터"], rating:8.5, year:2014, dev:"4A Games", desc:"메트로 시리즈의 시작을 다듬은 리덕스 버전." },
    { id:287390, title:"Metro: Last Light Redux", genre:"FPS", tags:["스토리","포스트아포칼립스","fps","생존","리마스터"], rating:8.6, year:2014, dev:"4A Games", desc:"전작 이후를 이어가는 분위기 좋은 스토리 FPS." },
    { id:205100, title:"Dishonored", genre:"액션", tags:["잠입","초능력","스토리","액션","암살"], rating:9.1, year:2012, dev:"Arkane Studios", desc:"잠입과 초능력 액션의 조합이 훌륭한 명작." },
    { id:403640, title:"Dishonored 2", genre:"액션", tags:["잠입","초능력","스토리","액션","암살"], rating:8.8, year:2016, dev:"Arkane Studios", desc:"자유도 높은 잠입 액션의 대표작." },
    { id:480490, title:"Prey", genre:"액션", tags:["sf","잠입","스토리","액션","몰입"], rating:8.8, year:2017, dev:"Arkane Studios", desc:"몰입형 시뮬레이션 장르 팬에게 강하게 추천된다." },
    { id:612880, title:"Wolfenstein II: The New Colossus", genre:"FPS", tags:["스토리","fps","액션","대체역사","폭발"], rating:8.6, year:2017, dev:"MachineGames", desc:"호쾌한 총질과 강렬한 연출이 인상적인 싱글 FPS." },
    { id:377160, title:"Fallout 4", genre:"RPG", tags:["오픈월드","sf","rpg","탐험","모드"], rating:8.5, year:2015, dev:"Bethesda Game Studios", desc:"황무지를 자유롭게 탐험하는 오픈월드 RPG." },
    { id:489830, title:"The Elder Scrolls V: Skyrim Special Edition", genre:"RPG", tags:["오픈월드","판타지","rpg","탐험","모드"], rating:9.4, year:2016, dev:"Bethesda Game Studios", desc:"여전히 엄청난 영향력을 지닌 오픈월드 판타지 RPG." },
    { id:22330, title:"The Elder Scrolls IV: Oblivion Game of the Year Edition", genre:"RPG", tags:["오픈월드","판타지","rpg","고전","탐험"], rating:8.8, year:2009, dev:"Bethesda Game Studios", desc:"스카이림 이전 시대를 대표하는 오픈월드 RPG." },
    { id:22320, title:"The Elder Scrolls III: Morrowind Game of the Year Edition", genre:"RPG", tags:["오픈월드","판타지","rpg","고전","자유"], rating:8.7, year:2003, dev:"Bethesda Game Studios", desc:"자유도 높은 클래식 RPG를 찾는다면 여전히 강력하다." },
    { id:306130, title:"The Elder Scrolls Online", genre:"RPG", tags:["mmorpg","판타지","온라인","탐험","협동"], rating:8.3, year:2014, dev:"ZeniMax Online Studios", desc:"엘더스크롤 세계관을 MMO로 넓힌 작품." },
    { id:881100, title:"Noita", genre:"샌드박스", tags:["로그라이크","마법","물리","도트","괴랄"], rating:9.0, year:2020, dev:"Nolla Games", desc:"픽셀 하나하나가 물리적으로 반응하는 독창적 액션 게임." },
    { id:1313140, title:"Cult of the Lamb", genre:"시뮬레이션", tags:["경영","로그라이크","귀여움","사교","인디"], rating:8.8, year:2022, dev:"Massive Monster", desc:"전투와 컬트 경영을 섞은 독특한 인디 화제작." },
    { id:895870, title:"Project Wingman", genre:"액션", tags:["비행","공중전","액션","전투기","인디"], rating:8.7, year:2020, dev:"Sector D2", desc:"에이스 컴뱃 팬이라면 거의 무조건 좋아할 공중전 게임." },
    { id:502500, title:"ACE COMBAT™ 7: SKIES UNKNOWN", genre:"액션", tags:["비행","공중전","액션","전투기","스토리"], rating:8.8, year:2019, dev:"Bandai Namco", desc:"아케이드 공중전의 손맛을 잘 살린 대표작." },
    { id:1144200, title:"Ready or Not", genre:"FPS", tags:["전술","fps","협동","리얼리즘","swat"], rating:8.9, year:2023, dev:"VOID Interactive", desc:"현실 지향 전술 FPS를 찾는 유저에게 매우 강하다." },
    { id:671860, title:"BattleBit Remastered", genre:"FPS", tags:["대규모전투","fps","멀티플레이어","전장","인디"], rating:8.7, year:2023, dev:"BattleBit Dev Team", desc:"낮은 사양에서도 대규모 전장을 즐길 수 있는 FPS." },
    { id:393380, title:"Squad", genre:"FPS", tags:["전술","fps","리얼리즘","팀플레이","전쟁"], rating:8.6, year:2020, dev:"Offworld", desc:"소통과 팀워크 비중이 높은 하드코어 전술 FPS." },
    { id:686810, title:"Hell Let Loose", genre:"FPS", tags:["전쟁","fps","대규모","팀플레이","리얼리즘"], rating:8.4, year:2021, dev:"Team17", desc:"2차 세계대전 대규모 전장의 묵직한 전술 FPS." },
    { id:848450, title:"Subnautica: Below Zero", genre:"서바이벌", tags:["바다","생존","탐험","크래프팅","sf"], rating:8.3, year:2021, dev:"Unknown Worlds", desc:"극지 바다를 배경으로 한 수중 생존 탐험 후속작." },
    { id:648800, title:"Raft", genre:"서바이벌", tags:["바다","협동","생존","크래프팅","탐험"], rating:8.6, year:2022, dev:"Redbeet Interactive", desc:"뗏목 하나에서 시작하는 바다 생존 협동 게임." },
    { id:477160, title:"Human Fall Flat", genre:"어드벤처", tags:["퍼즐","협동","물리","유머","캐주얼"], rating:8.7, year:2016, dev:"No Brakes Games", desc:"친구와 하면 더 웃긴 물리 퍼즐 협동 게임." },
    { id:1426210, title:"It Takes Two", genre:"어드벤처", tags:["협동","플랫포머","스토리","퍼즐","명작"], rating:9.7, year:2021, dev:"Hazelight", desc:"2인 협동 게임의 기준을 새로 세운 GOTY 수상작." },
    { id:1222700, title:"A Way Out", genre:"어드벤처", tags:["협동","스토리","탈출","액션","2인"], rating:8.5, year:2018, dev:"Hazelight", desc:"두 사람이 함께 진행하는 영화 같은 협동 탈출극." },
    { id:250900, title:"The Binding of Isaac: Rebirth", genre:"액션", tags:["로그라이크","인디","도전적","파밍","고전"], rating:9.1, year:2014, dev:"Nicalis", desc:"수많은 빌드와 반복 플레이 재미가 강한 로그라이크." },
    { id:311690, title:"Enter the Gungeon", genre:"액션", tags:["로그라이크","탄막","인디","도전적","슈터"], rating:9.0, year:2016, dev:"Dodge Roll", desc:"탄막과 로그라이크를 섞은 중독성 강한 인디 액션." },
    { id:460950, title:"Katana ZERO", genre:"액션", tags:["도트","액션","시간조작","스토리","인디"], rating:9.2, year:2019, dev:"Askiisoft", desc:"속도감과 연출이 뛰어난 네온 감성 액션." },
    { id:257850, title:"Hyper Light Drifter", genre:"어드벤처", tags:["액션","탐험","픽셀아트","인디","분위기"], rating:8.8, year:2016, dev:"Heart Machine", desc:"감각적인 비주얼과 분위기가 강한 액션 어드벤처." },
    { id:107100, title:"Bastion", genre:"RPG", tags:["액션","인디","내레이션","감성","고전"], rating:8.8, year:2011, dev:"Supergiant Games", desc:"슈퍼자이언트의 시작을 알린 액션 RPG." },
    { id:237930, title:"Transistor", genre:"RPG", tags:["액션","전략","사이버","감성","인디"], rating:8.9, year:2014, dev:"Supergiant Games", desc:"감각적인 사운드와 전술 액션이 매력적인 작품." },
    { id:462770, title:"Pyre", genre:"RPG", tags:["판타지","스토리","파티","인디","독특"], rating:8.5, year:2017, dev:"Supergiant Games", desc:"독특한 경기 시스템과 서사가 결합된 실험적 작품." },
    { id:1895880, title:"Ratchet & Clank: Rift Apart", genre:"액션", tags:["플랫포머","액션","sf","유쾌","그래픽"], rating:8.9, year:2023, dev:"Insomniac Games", desc:"포탈 이동과 화끈한 무기 연출이 즐거운 액션 게임." }
  ];



const EXTRA_CURATED_GAMES = [
  // FPS
  { id:1144200, title:"Ready or Not", genre:"FPS", tags:["전술","FPS","협동","SWAT","현실적"], rating:8.8, year:2023, dev:"VOID Interactive", desc:"현실적인 CQB와 전술 플레이에 집중한 하드코어 FPS." },
  { id:359550, title:"Tom Clancy's Rainbow Six Siege", genre:"FPS", tags:["전술","FPS","경쟁","멀티플레이어","협동"], rating:8.6, year:2015, dev:"Ubisoft Montreal", desc:"오퍼레이터 조합과 브리칭이 핵심인 대표 전술 FPS." },
  { id:581320, title:"Insurgency: Sandstorm", genre:"FPS", tags:["FPS","현실적","전술","협동","멀티플레이어"], rating:8.5, year:2018, dev:"New World Interactive", desc:"리얼한 총기감과 긴장감이 뛰어난 현대전 FPS." },
  { id:397540, title:"Borderlands 3", genre:"FPS", tags:["루터슈터","FPS","협동","코옵","액션"], rating:8.1, year:2020, dev:"Gearbox Software", desc:"시원한 총질과 파밍 재미를 극대화한 루터슈터." },
  { id:1238840, title:"Battlefield 1", genre:"FPS", tags:["FPS","전쟁","멀티플레이어","대규모전투","현실적"], rating:8.7, year:2020, dev:"DICE", desc:"1차 세계대전 배경의 대규모 전투가 강점인 FPS." },

  // RPG
  { id:1687950, title:"Persona 5 Royal", genre:"RPG", tags:["JRPG","턴제","스토리","애니","학원"], rating:9.4, year:2022, dev:"ATLUS", desc:"압도적인 스타일과 완성도를 갖춘 대표 JRPG." },
  { id:2054970, title:"Dragon's Dogma 2", genre:"RPG", tags:["오픈월드","액션RPG","판타지","파티","탐험"], rating:8.1, year:2024, dev:"CAPCOM", desc:"자유도 높은 탐험과 대형 몬스터 전투가 매력적인 액션 RPG." },
  { id:1446780, title:"MONSTER HUNTER RISE", genre:"RPG", tags:["액션RPG","사냥","협동","파밍","일본풍"], rating:8.9, year:2022, dev:"CAPCOM", desc:"와이어 액션과 빠른 전투 템포가 인상적인 헌팅 액션 RPG." },
  { id:2161700, title:"Persona 3 Reload", genre:"RPG", tags:["JRPG","턴제","스토리","던전","학원"], rating:9.1, year:2024, dev:"ATLUS", desc:"현대적으로 리메이크된 페르소나 시리즈의 명작." },
  { id:740130, title:"Tales of Arise", genre:"RPG", tags:["액션RPG","애니","스토리","파티","판타지"], rating:8.7, year:2021, dev:"Bandai Namco Studios", desc:"속도감 있는 전투와 화려한 연출이 돋보이는 JRPG." },

  // 액션
  { id:814380, title:"Sekiro: Shadows Die Twice", genre:"액션", tags:["액션","소울라이크","닌자","도전적","싱글플레이어"], rating:9.4, year:2019, dev:"FromSoftware", desc:"정교한 패링과 보스전이 핵심인 하드코어 액션 게임." },
  { id:1888160, title:"ARMORED CORE VI FIRES OF RUBICON", genre:"액션", tags:["메카","액션","커스터마이즈","보스전","sf"], rating:8.8, year:2023, dev:"FromSoftware", desc:"메카 조립과 고속 전투의 재미를 극대화한 액션 게임." },
  { id:601150, title:"Devil May Cry 5", genre:"액션", tags:["액션","콤보","핵앤슬래시","스타일리시","악마"], rating:9.3, year:2019, dev:"CAPCOM", desc:"스타일리시 액션 장르의 기준점 같은 작품." },
  { id:2215430, title:"Ghost of Tsushima DIRECTOR'S CUT", genre:"액션", tags:["오픈월드","사무라이","액션","스토리","잠입"], rating:9.3, year:2024, dev:"Sucker Punch Productions", desc:"사무라이 감성과 오픈월드 전투를 높은 완성도로 담아낸 작품." },
  { id:2358720, title:"Black Myth: Wukong", genre:"액션", tags:["액션","소울라이크","중국신화","보스전","싱글플레이어"], rating:8.8, year:2024, dev:"Game Science", desc:"손오공 신화를 현대적으로 재해석한 고퀄리티 액션 게임." },

  // 어드벤처
  { id:1222140, title:"Detroit: Become Human", genre:"어드벤처", tags:["스토리","선택","어드벤처","SF","드라마"], rating:8.9, year:2020, dev:"Quantic Dream", desc:"선택에 따라 큰 분기가 생기는 인터랙티브 어드벤처." },
  { id:1332010, title:"Stray", genre:"어드벤처", tags:["고양이","어드벤처","사이버펑크","탐험","힐링"], rating:8.8, year:2022, dev:"BlueTwelve Studio", desc:"고양이 시점으로 사이버 도시를 탐험하는 감성 어드벤처." },
  { id:383870, title:"Firewatch", genre:"어드벤처", tags:["스토리","어드벤처","분위기","미스터리","1인칭"], rating:8.7, year:2016, dev:"Campo Santo", desc:"와이오밍 숲을 배경으로 한 감성 미스터리 어드벤처." },
  { id:638230, title:"Journey", genre:"어드벤처", tags:["어드벤처","감성","분위기","멀티플레이어","짧음"], rating:9.0, year:2020, dev:"thatgamecompany", desc:"대사 없이도 강한 감동을 주는 예술적인 어드벤처." },
  { id:501300, title:"What Remains of Edith Finch", genre:"어드벤처", tags:["스토리","어드벤처","감성","짧음","미스터리"], rating:9.1, year:2017, dev:"Giant Sparrow", desc:"가문의 비극을 독창적인 방식으로 풀어낸 내러티브 명작." },

  // 전략
  { id:1142710, title:"Total War: WARHAMMER III", genre:"전략", tags:["전략","RTS","대전략","판타지","전쟁"], rating:8.2, year:2022, dev:"Creative Assembly", desc:"대규모 전쟁과 턴제 운영을 결합한 전략 시리즈 대표작." },
  { id:268500, title:"XCOM 2", genre:"전략", tags:["턴제전략","전술","외계인","도전적","분대"], rating:8.8, year:2016, dev:"Firaxis Games", desc:"확률과 판단이 승부를 가르는 대표 턴제 전술 게임." },
  { id:949230, title:"Cities: Skylines II", genre:"전략", tags:["도시건설","시뮬레이션","전략","경영","현대"], rating:7.1, year:2023, dev:"Colossal Order Ltd.", desc:"도시 운영과 교통 설계에 몰입할 수 있는 도시 건설 게임." },
  { id:1336490, title:"Against the Storm", genre:"전략", tags:["전략","로그라이크","도시건설","다크판타지","경영"], rating:9.1, year:2023, dev:"Eremite Games", desc:"로그라이크 구조를 접목한 독창적인 도시 건설 전략 게임." },
  { id:236850, title:"Europa Universalis IV", genre:"전략", tags:["대전략","역사","외교","전쟁","국가운영"], rating:8.9, year:2013, dev:"Paradox Development Studio", desc:"국가를 운영하며 세계사를 써 내려가는 대전략 게임." },

  // 시뮬레이션
  { id:1248130, title:"Farming Simulator 22", genre:"시뮬레이션", tags:["농장","시뮬레이션","트랙터","경영","협동"], rating:8.5, year:2021, dev:"Giants Software", desc:"농장 운영과 장비 관리의 재미를 깊게 살린 시뮬레이션." },
  { id:1250410, title:"Microsoft Flight Simulator", genre:"시뮬레이션", tags:["비행","시뮬레이션","현실적","항공","오픈월드"], rating:8.7, year:2020, dev:"Asobo Studio", desc:"현실적인 비행 체험을 제공하는 대표 항공 시뮬레이터." },
  { id:220200, title:"Kerbal Space Program", genre:"시뮬레이션", tags:["우주","물리","시뮬레이션","과학","건설"], rating:9.3, year:2015, dev:"Squad", desc:"우주선 설계와 궤도 계산의 재미를 살린 우주 시뮬레이션." },
  { id:621060, title:"PC Building Simulator", genre:"시뮬레이션", tags:["시뮬레이션","PC","조립","경영","캐주얼"], rating:8.6, year:2019, dev:"Claudiu Kiss / The Irregular Corporation", desc:"PC 조립과 수리를 누구나 쉽게 즐길 수 있는 시뮬레이션." },
  { id:1190000, title:"Car Mechanic Simulator 2021", genre:"시뮬레이션", tags:["자동차","정비","시뮬레이션","현실적","경영"], rating:8.7, year:2021, dev:"Red Dot Games", desc:"부품 단위로 차를 수리하고 복원하는 정비 시뮬레이션." },

  // 공포
  { id:238320, title:"Outlast", genre:"공포", tags:["공포","1인칭","도망","어두운","서바이벌"], rating:9.1, year:2013, dev:"Red Barrels", desc:"카메라 하나 들고 탈출해야 하는 정통 공포 게임." },
  { id:414700, title:"Outlast 2", genre:"공포", tags:["공포","1인칭","종교","도망","잔혹"], rating:8.3, year:2017, dev:"Red Barrels", desc:"더 강렬해진 연출과 광기 어린 분위기의 후속작." },
  { id:214490, title:"Alien: Isolation", genre:"공포", tags:["공포","SF","잠입","생존","에이리언"], rating:9.0, year:2014, dev:"Creative Assembly", desc:"한 마리의 에이리언이 끝없이 추격하는 SF 공포 명작." },
  { id:282140, title:"SOMA", genre:"공포", tags:["공포","SF","스토리","심리","어드벤처"], rating:9.0, year:2015, dev:"Frictional Games", desc:"철학적 질문과 공포를 함께 던지는 심리 SF 공포물." },
  { id:1693980, title:"Dead Space", genre:"공포", tags:["공포","SF","생존","액션","리메이크"], rating:9.0, year:2023, dev:"Motive", desc:"현대적으로 재탄생한 서바이벌 호러 명작 리메이크." },

  // 서바이벌
  { id:892970, title:"Valheim", genre:"서바이벌", tags:["서바이벌","바이킹","건설","협동","오픈월드"], rating:9.2, year:2021, dev:"Iron Gate Studio", desc:"탐험, 건설, 보스전이 균형 좋게 섞인 바이킹 서바이벌." },
  { id:1604030, title:"V Rising", genre:"서바이벌", tags:["서바이벌","뱀파이어","건설","오픈월드","액션"], rating:8.8, year:2024, dev:"Stunlock Studios", desc:"뱀파이어 성을 키우며 살아남는 액션 서바이벌." },
  { id:275850, title:"No Man's Sky", genre:"서바이벌", tags:["우주","생존","탐험","오픈월드","건설"], rating:8.8, year:2016, dev:"Hello Games", desc:"지속적인 업데이트로 완성도를 끌어올린 우주 생존 게임." },
  { id:648800, title:"Raft", genre:"서바이벌", tags:["서바이벌","바다","협동","크래프팅","건설"], rating:8.9, year:2022, dev:"Redbeet Interactive", desc:"바다 위 뗏목 하나에서 시작하는 협동 생존 게임." },
  { id:815370, title:"Green Hell", genre:"서바이벌", tags:["정글","서바이벌","현실적","크래프팅","싱글플레이어"], rating:8.4, year:2019, dev:"Creepy Jar", desc:"아마존 정글에서 현실적으로 버텨야 하는 하드코어 생존 게임." },

  // 격투
  { id:1364780, title:"Street Fighter 6", genre:"격투", tags:["격투","2D","경쟁","온라인","입문친화"], rating:9.1, year:2023, dev:"CAPCOM", desc:"입문과 경쟁 둘 다 잡은 현대 격투 게임의 대표작." },
  { id:389730, title:"TEKKEN 7", genre:"격투", tags:["격투","3D","경쟁","철권","멀티플레이어"], rating:8.9, year:2017, dev:"Bandai Namco", desc:"철권 시리즈의 정수를 담은 3D 격투 게임." },
  { id:1384160, title:"GUILTY GEAR -STRIVE-", genre:"격투", tags:["격투","애니","2D","록사운드","경쟁"], rating:8.8, year:2021, dev:"Arc System Works", desc:"압도적인 비주얼과 손맛이 뛰어난 애니 격투 게임." },
  { id:586140, title:"BlazBlue Centralfiction", genre:"격투", tags:["격투","애니","2D","스토리","경쟁"], rating:8.7, year:2017, dev:"Arc System Works", desc:"풍부한 시스템과 캐릭터성을 자랑하는 2D 격투 게임." },
  { id:1372280, title:"MELTY BLOOD: TYPE LUMINA", genre:"격투", tags:["격투","애니","2D","비주얼노벨","경쟁"], rating:8.6, year:2021, dev:"French-Bread", desc:"빠른 공중전과 섬세한 운영이 매력적인 2D 격투 게임." },

  // 스포츠
  { id:1665460, title:"eFootball 2024", genre:"스포츠", tags:["축구","스포츠","무료","멀티플레이어","경쟁"], rating:7.2, year:2024, dev:"KONAMI", desc:"실시간 대전을 중심으로 한 무료 축구 게임." },
  { id:2252570, title:"Football Manager 2024", genre:"스포츠", tags:["축구","감독","시뮬레이션","전략","데이터"], rating:8.9, year:2023, dev:"Sports Interactive", desc:"감독 시뮬레이션의 표준으로 불리는 축구 운영 게임." },
  { id:1588010, title:"PGA TOUR 2K23", genre:"스포츠", tags:["골프","스포츠","시뮬레이션","멀티플레이어","캐주얼"], rating:8.0, year:2022, dev:"HB Studios", desc:"골프 스윙 감각과 코스 공략 재미가 좋은 스포츠 게임." },
  { id:681280, title:"Descenders", genre:"스포츠", tags:["자전거","익스트림","스포츠","로그라이크","멀티플레이어"], rating:8.9, year:2019, dev:"RageSquid", desc:"다운힐 바이크와 절묘한 컨트롤 손맛이 살아있는 작품." },
  { id:861650, title:"Session: Skate Sim", genre:"스포츠", tags:["스케이트","스포츠","시뮬레이션","현실적","샌드박스"], rating:7.9, year:2022, dev:"creā-ture Studios", desc:"현실적인 조작으로 호불호 강하지만 팬층이 탄탄한 스케이트 게임." },

  // 샌드박스
  { id:526870, title:"Satisfactory", genre:"샌드박스", tags:["공장자동화","샌드박스","오픈월드","건설","협동"], rating:9.5, year:2024, dev:"Coffee Stain Studios", desc:"공장 라인을 끝없이 최적화하는 중독성 강한 샌드박스." },
  { id:1129580, title:"Medieval Dynasty", genre:"샌드박스", tags:["중세","생존","건설","오픈월드","마을운영"], rating:8.5, year:2021, dev:"Render Cube", desc:"중세 정착지를 키워 나가는 생존형 샌드박스." },
  { id:244850, title:"Space Engineers", genre:"샌드박스", tags:["우주","건설","엔지니어링","샌드박스","물리"], rating:8.8, year:2019, dev:"Keen Software House", desc:"우주선과 구조물을 자유롭게 설계하는 공학형 샌드박스." },
  { id:361420, title:"ASTRONEER", genre:"샌드박스", tags:["우주","탐험","건설","협동","힐링"], rating:8.9, year:2019, dev:"System Era Softworks", desc:"부드러운 감성으로 즐기는 우주 탐험 샌드박스." },
  { id:275850, title:"No Man's Sky", genre:"샌드박스", tags:["우주","탐험","오픈월드","생존","건설"], rating:8.8, year:2016, dev:"Hello Games", desc:"광대한 우주를 자유롭게 누비는 대표 샌드박스 게임." },

  // 인디
  { id:2379780, title:"Balatro", genre:"인디", tags:["인디","덱빌딩","로그라이크","카드","중독성"], rating:9.7, year:2024, dev:"LocalThunk", desc:"포커 규칙을 비튼 미친 중독성의 인디 카드 로그라이크." },
  { id:1868140, title:"DAVE THE DIVER", genre:"인디", tags:["인디","바다","경영","어드벤처","도트"], rating:9.5, year:2023, dev:"MINTROCKET", desc:"낮에는 잠수, 밤에는 초밥집 운영이라는 독특한 구조의 인디 히트작." },
  { id:2231450, title:"Pizza Tower", genre:"인디", tags:["인디","플랫포머","카툰","속도감","코미디"], rating:9.6, year:2023, dev:"Tour De Pizza", desc:"광기 어린 속도감과 연출이 폭발하는 인디 플랫포머." },
  { id:1055540, title:"A Short Hike", genre:"인디", tags:["인디","힐링","탐험","짧음","감성"], rating:9.7, year:2019, dev:"adamgryu", desc:"짧지만 오래 기억에 남는 대표 힐링 인디 게임." },
  { id:1794680, title:"Vampire Survivors", genre:"인디", tags:["인디","로그라이크","캐주얼","도트","중독성"], rating:9.6, year:2022, dev:"poncle", desc:"단순하지만 시간이 순삭되는 생존형 인디 게임." },

  // 레이싱
  { id:244210, title:"Assetto Corsa", genre:"레이싱", tags:["레이싱","시뮬레이션","현실적","자동차","모드지원"], rating:9.0, year:2014, dev:"Kunos Simulazioni", desc:"모드와 물리 엔진으로 오래 사랑받는 하드코어 레이싱." },
  { id:805550, title:"Assetto Corsa Competizione", genre:"레이싱", tags:["레이싱","GT","시뮬레이션","현실적","멀티플레이어"], rating:8.8, year:2019, dev:"Kunos Simulazioni", desc:"GT 레이싱에 특화된 정통 시뮬레이션 레이싱 게임." },
  { id:690790, title:"DiRT Rally 2.0", genre:"레이싱", tags:["랠리","레이싱","오프로드","현실적","시뮬레이션"], rating:8.7, year:2019, dev:"Codemasters", desc:"거친 노면과 고난도 컨트롤이 매력적인 랠리 레이싱." },
  { id:1222680, title:"Need for Speed Heat", genre:"레이싱", tags:["레이싱","아케이드","오픈월드","경찰추격","튜닝"], rating:8.0, year:2020, dev:"Ghost Games", desc:"낮과 밤의 분위기가 다른 스트리트 레이싱 게임." },
  { id:1271700, title:"HOT WHEELS UNLEASHED", genre:"레이싱", tags:["레이싱","아케이드","장난감","멀티플레이어","가족"], rating:8.4, year:2021, dev:"Milestone S.r.l.", desc:"핫휠 감성을 살린 경쾌한 아케이드 레이싱 게임." },
  // ── 추가 FPS (20) ──
  { id:107410, title:"Arma 3", genre:"FPS", tags:["밀리터리","FPS","샌드박스","오픈월드","협동"], rating:8.7, year:2013, dev:"Bohemia Interactive", desc:"최고 수준의 군사 시뮬레이션과 모드 지원을 제공하는 밀리터리 FPS." },
  { id:379720, title:"DOOM", genre:"FPS", tags:["FPS","액션","고어","클래식","싱글플레이어"], rating:9.2, year:2016, dev:"id Software", desc:"속도감 넘치는 전투로 장르의 부활을 이끈 리부트 FPS." },
  { id:201810, title:"Wolfenstein: The New Order", genre:"FPS", tags:["FPS","스토리","싱글플레이어","액션","2차대전"], rating:8.9, year:2014, dev:"MachineGames", desc:"스토리와 액션 모두 뛰어난 싱글 FPS 명작." },
  { id:322500, title:"SUPERHOT", genre:"FPS", tags:["FPS","퍼즐","시간조작","전략","인디"], rating:9.0, year:2016, dev:"SUPERHOT Team", desc:"시간이 움직일 때만 흐르는 혁신적인 컨셉의 FPS." },
  { id:232090, title:"Killing Floor 2", genre:"FPS", tags:["FPS","협동","좀비","웨이브","고어"], rating:8.5, year:2016, dev:"Tripwire Interactive", desc:"웨이브 기반 협동 좀비 사격의 쾌감이 뛰어난 FPS." },
  { id:1229490, title:"ULTRAKILL", genre:"FPS", tags:["FPS","레트로","스타일리시","속도감","인디"], rating:9.6, year:2022, dev:"Arsi 'Hakita' Patala", desc:"스타일리시 킬과 속도감의 극한을 보여주는 레트로 FPS." },
  { id:519860, title:"DUSK", genre:"FPS", tags:["FPS","레트로","호러","속도감","인디"], rating:9.5, year:2018, dev:"David Szymanski", desc:"90년대 클래식 FPS의 정수를 현대적으로 되살린 명작." },
  { id:562860, title:"Ion Fury", genre:"FPS", tags:["FPS","레트로","빌드엔진","사이버펑크","싱글플레이어"], rating:8.8, year:2019, dev:"Voidpoint", desc:"빌드 엔진 기반 정통 레트로 FPS." },
  { id:673130, title:"Amid Evil", genre:"FPS", tags:["FPS","판타지","레트로","마법","싱글플레이어"], rating:9.0, year:2019, dev:"Indefatigable", desc:"판타지 세계관에서 마법 무기로 싸우는 레트로 FPS." },
  { id:362890, title:"Black Mesa", genre:"FPS", tags:["FPS","SF","리메이크","퍼즐","싱글플레이어"], rating:9.3, year:2020, dev:"Crowbar Collective", desc:"하프라이프 1을 현대적으로 리메이크한 팬메이드 명작." },
  { id:552520, title:"Far Cry 5", genre:"FPS", tags:["FPS","오픈월드","액션","협동","미국"], rating:8.3, year:2018, dev:"Ubisoft Montreal", desc:"미국 몬태나 배경의 광활한 오픈월드 FPS." },
  { id:964800, title:"Prodeus", genre:"FPS", tags:["FPS","레트로","고어","맵에디터","인디"], rating:8.8, year:2022, dev:"Bounding Box Software", desc:"현대 그래픽과 레트로 감성을 절묘하게 섞은 FPS." },
  { id:924970, title:"Back 4 Blood", genre:"FPS", tags:["FPS","협동","좀비","카드","멀티플레이어"], rating:7.5, year:2021, dev:"Turtle Rock Studios", desc:"L4D 개발진이 만든 협동 좀비 FPS." },
  { id:493520, title:"GTFO", genre:"FPS", tags:["FPS","협동","공포","하드코어","잠입"], rating:8.6, year:2021, dev:"10 Chambers", desc:"극도의 긴장감을 요구하는 하드코어 협동 FPS." },
  { id:1328590, title:"Turbo Overkill", genre:"FPS", tags:["FPS","사이버펑크","레트로","속도감","인디"], rating:9.1, year:2023, dev:"Trigger Happy Interactive", desc:"전기톱 다리로 질주하는 사이버펑크 레트로 FPS." },
  { id:324800, title:"Shadow Warrior 2", genre:"FPS", tags:["FPS","핵앤슬래시","협동","루팅","액션"], rating:8.3, year:2016, dev:"Flying Wild Hog", desc:"칼과 총을 동시에 쓰는 호쾌한 액션 FPS." },
  { id:1029690, title:"Sniper Elite 5", genre:"FPS", tags:["FPS","저격","잠입","2차대전","협동"], rating:8.0, year:2022, dev:"Rebellion", desc:"정밀 저격과 침투가 핵심인 전술 FPS." },
  { id:1715130, title:"Crysis Remastered", genre:"FPS", tags:["FPS","SF","그래픽","나노수트","싱글플레이어"], rating:7.8, year:2021, dev:"Crytek", desc:"나노수트의 자유도 높은 전투를 리마스터한 FPS." },
  { id:501590, title:"Bulletstorm: Full Clip Edition", genre:"FPS", tags:["FPS","스킬샷","액션","SF","코미디"], rating:8.2, year:2017, dev:"People Can Fly", desc:"스킬샷 시스템이 재미를 극대화하는 FPS." },
  { id:594650, title:"Hunt: Showdown 1896", genre:"FPS", tags:["FPS","공포","PvPvE","서부","바운티"], rating:8.7, year:2019, dev:"Crytek", desc:"괴물 사냥과 PvP가 결합된 독특한 호러 FPS." },

  // ── 추가 RPG (20) ──
  { id:261550, title:"Mount & Blade II: Bannerlord", genre:"RPG", tags:["중세","전략","오픈월드","전투","샌드박스"], rating:8.5, year:2022, dev:"TaleWorlds Entertainment", desc:"중세 전쟁과 왕국 운영을 자유롭게 즐기는 샌드박스 RPG." },
  { id:1382330, title:"Persona 4 Golden", genre:"RPG", tags:["JRPG","턴제","스토리","학원","미스터리"], rating:9.3, year:2020, dev:"ATLUS", desc:"학원 미스터리와 던전 탐험이 결합된 JRPG 명작." },
  { id:858820, title:"Nioh 2 – The Complete Edition", genre:"RPG", tags:["액션RPG","소울라이크","일본","요괴","하드코어"], rating:8.8, year:2021, dev:"Team Ninja", desc:"요괴 변신과 깊은 전투 시스템의 하드코어 액션 RPG." },
  { id:812140, title:"Assassin's Creed Odyssey", genre:"RPG", tags:["오픈월드","액션RPG","그리스","역사","탐험"], rating:8.4, year:2018, dev:"Ubisoft Quebec", desc:"고대 그리스를 배경으로 한 방대한 오픈월드 액션 RPG." },
  { id:578650, title:"The Outer Worlds", genre:"RPG", tags:["RPG","SF","스토리","선택","싱글플레이어"], rating:8.3, year:2019, dev:"Obsidian Entertainment", desc:"유머와 선택이 풍부한 SF 1인칭 RPG." },
  { id:1173510, title:"Monster Hunter: World", genre:"RPG", tags:["액션RPG","사냥","협동","파밍","보스전"], rating:9.1, year:2018, dev:"CAPCOM", desc:"대형 몬스터 사냥의 짜릿함을 경험하는 협동 RPG." },
  { id:275470, title:"Tyranny", genre:"RPG", tags:["RPG","스토리","선택","다크판타지","등거리시점"], rating:8.4, year:2016, dev:"Obsidian Entertainment", desc:"악이 승리한 세계에서 도덕적 선택을 내리는 RPG." },
  { id:39210, title:"Final Fantasy VI", genre:"RPG", tags:["JRPG","턴제","클래식","스토리","도트"], rating:9.0, year:2022, dev:"Square Enix", desc:"파이널 판타지 시리즈 최고의 스토리를 가진 클래식 JRPG." },
  { id:1245430, title:"Ni no Kuni II: Revenant Kingdom", genre:"RPG", tags:["JRPG","액션RPG","애니","판타지","왕국건설"], rating:8.2, year:2018, dev:"Level-5", desc:"지브리 감성과 왕국 건설이 어우러진 액션 RPG." },
  { id:251570, title:"7 Days to Die", genre:"RPG", tags:["서바이벌","RPG","좀비","크래프팅","건설"], rating:8.3, year:2013, dev:"The Fun Pimps", desc:"좀비 호드에 대비하며 기지를 쌓는 서바이벌 RPG." },
  { id:1151340, title:"Fallout 76", genre:"RPG", tags:["오픈월드","RPG","멀티플레이어","포스트아포칼립스","생존"], rating:7.5, year:2018, dev:"Bethesda Game Studios", desc:"온라인 멀티로 즐기는 폴아웃 세계관 RPG." },
  { id:1245620, title:"ELDEN RING", genre:"RPG", tags:["오픈월드","액션RPG","소울라이크","판타지","도전적"], rating:9.3, year:2022, dev:"FromSoftware", desc:"프롬소프트웨어의 오픈월드 액션 RPG 대작." },
  { id:236430, title:"Dark Souls: Remastered", genre:"RPG", tags:["소울라이크","액션RPG","도전적","판타지","다크"], rating:9.0, year:2018, dev:"FromSoftware", desc:"소울라이크 장르를 탄생시킨 전설적인 액션 RPG." },
  { id:1222700, title:"Gothic 1 Remake", genre:"RPG", tags:["오픈월드","RPG","판타지","클래식","리메이크"], rating:8.0, year:2024, dev:"Alkimia Interactive", desc:"고전 RPG 고딕 1의 리메이크 버전." },
  { id:1971870, title:"Star Wars Jedi: Survivor", genre:"RPG", tags:["액션RPG","스타워즈","SF","소울라이크","스토리"], rating:8.5, year:2023, dev:"Respawn Entertainment", desc:"제다이의 성장과 모험을 그린 액션 RPG 후속작." },
  { id:1817070, title:"Hogwarts Legacy", genre:"RPG", tags:["오픈월드","RPG","마법","해리포터","탐험"], rating:8.5, year:2023, dev:"Avalanche Software", desc:"호그와트에서 마법사 생활을 체험하는 오픈월드 RPG." },
  { id:1593500, title:"God of War", genre:"RPG", tags:["액션RPG","스토리","북유럽신화","싱글플레이어","보스전"], rating:9.4, year:2022, dev:"Santa Monica Studio", desc:"아버지와 아들의 여정을 그린 액션 RPG 명작 PC판." },
  { id:435150, title:"Divinity: Original Sin 2", genre:"RPG", tags:["RPG","턴제","협동","판타지","스토리"], rating:9.6, year:2017, dev:"Larian Studios", desc:"전술과 자유도가 극한인 턴제 RPG의 명작." },
  { id:376210, title:"Pillars of Eternity II: Deadfire", genre:"RPG", tags:["RPG","등거리시점","해적","판타지","스토리"], rating:8.5, year:2018, dev:"Obsidian Entertainment", desc:"해양 탐험과 깊은 스토리의 등거리 RPG." },
  { id:582010, title:"MONSTER HUNTER: WORLD - Iceborne", genre:"RPG", tags:["액션RPG","사냥","확장팩","협동","보스전"], rating:9.2, year:2020, dev:"CAPCOM", desc:"몬스터 헌터 월드의 대규모 확장팩." },

  // ── 추가 액션 (20) ──
  { id:367500, title:"Metal Gear Solid V: The Phantom Pain", genre:"액션", tags:["잠입","오픈월드","액션","전술","싱글플레이어"], rating:9.1, year:2015, dev:"Kojima Productions", desc:"잠입 액션의 정점을 찍은 메탈기어 시리즈." },
  { id:1091490, title:"Death Stranding Director's Cut", genre:"액션", tags:["오픈월드","액션","SF","배달","싱글플레이어"], rating:8.6, year:2022, dev:"Kojima Productions", desc:"연결이라는 독창적 테마를 지닌 오픈월드 액션." },
  { id:1817190, title:"Marvel's Spider-Man Remastered", genre:"액션", tags:["오픈월드","액션","슈퍼히어로","스토리","스윙"], rating:9.2, year:2022, dev:"Insomniac Games", desc:"뉴욕을 자유롭게 스윙하는 스파이더맨 PC판." },
  { id:1659420, title:"Sifu", genre:"액션", tags:["액션","격투","로그라이크","무술","싱글플레이어"], rating:8.8, year:2022, dev:"Sloclap", desc:"죽을수록 나이 들며 강해지는 무술 액션 게임." },
  { id:460950, title:"Katana ZERO", genre:"액션", tags:["액션","네오누아르","도트","시간조작","인디"], rating:9.4, year:2019, dev:"Askiisoft", desc:"한 방에 죽고 한 방에 죽이는 네오누아르 액션." },
  { id:1113000, title:"Persona 5 Strikers", genre:"액션", tags:["액션","JRPG","핵앤슬래시","페르소나","협동"], rating:8.7, year:2021, dev:"Omega Force", desc:"페르소나 5 캐릭터들의 액션 RPG 외전." },
  { id:1817230, title:"Marvel's Spider-Man: Miles Morales", genre:"액션", tags:["오픈월드","액션","슈퍼히어로","스토리","스윙"], rating:9.0, year:2022, dev:"Insomniac Games", desc:"마일즈 모랄레스의 성장을 그린 스파이더맨 후속작." },
  { id:418370, title:"Rise of the Tomb Raider", genre:"액션", tags:["액션","어드벤처","탐험","퍼즐","싱글플레이어"], rating:8.9, year:2016, dev:"Crystal Dynamics", desc:"시베리아 탐험과 전투가 조화로운 액션 어드벤처." },
  { id:750920, title:"Shadow of the Tomb Raider", genre:"액션", tags:["액션","어드벤처","잠입","퍼즐","정글"], rating:8.6, year:2018, dev:"Eidos-Montréal", desc:"라라 크로프트 오리진 트릴로지의 완결편." },
  { id:236430, title:"Dark Souls: Remastered", genre:"액션", tags:["소울라이크","액션","도전적","판타지","다크"], rating:9.0, year:2018, dev:"FromSoftware", desc:"소울라이크 장르를 탄생시킨 전설적인 액션 RPG." },
  { id:1426210, title:"It Takes Two", genre:"액션", tags:["협동","액션","플랫포머","스토리","2인"], rating:9.5, year:2021, dev:"Hazelight Studios", desc:"2인 협동 전용으로 설계된 창의적인 액션 어드벤처." },
  { id:976730, title:"Hades", genre:"액션", tags:["로그라이크","액션","인디","그리스신화","핵앤슬래시"], rating:9.7, year:2020, dev:"Supergiant Games", desc:"그리스 신화 속 지하세계를 탈출하는 로그라이크 액션." },
  { id:1145360, title:"Hades II", genre:"액션", tags:["로그라이크","액션","인디","그리스신화","마법"], rating:9.2, year:2024, dev:"Supergiant Games", desc:"멜리노에가 주인공인 하데스의 정식 후속작." },
  { id:261640, title:"Sleeping Dogs: Definitive Edition", genre:"액션", tags:["오픈월드","액션","격투","홍콩","범죄"], rating:8.6, year:2014, dev:"United Front Games", desc:"홍콩 느와르 감성의 오픈월드 액션 게임." },
  { id:1174180, title:"Red Dead Redemption 2", genre:"액션", tags:["오픈월드","서부","스토리","액션","싱글플레이어"], rating:9.5, year:2019, dev:"Rockstar Games", desc:"서부 시대 무법자의 삶을 압도적 디테일로 그린 명작." },
  { id:1985690, title:"Lethal Company", genre:"액션", tags:["공포","액션","협동","코옵","인디"], rating:9.4, year:2023, dev:"Zeekerss", desc:"위험한 달에서 폐품을 모으는 협동 액션 공포." },
  { id:534380, title:"Slay the Spire", genre:"액션", tags:["카드","로그라이크","덱빌딩","전략","인디"], rating:9.5, year:2019, dev:"MegaCrit", desc:"덱빌딩 로그라이크 장르를 개척한 인디 명작." },
  { id:414340, title:"Hellblade: Senua's Sacrifice", genre:"액션", tags:["액션","심리","북유럽","스토리","싱글플레이어"], rating:9.0, year:2017, dev:"Ninja Theory", desc:"정신질환을 예술적으로 묘사한 액션 어드벤처." },
  { id:632360, title:"Risk of Rain 2", genre:"액션", tags:["로그라이크","3D","협동","액션","인디"], rating:9.3, year:2020, dev:"Hopoo Games", desc:"아이템 쌓기의 쾌감이 강한 3D 로그라이크 액션." },
  { id:588650, title:"Dead Cells", genre:"액션", tags:["로그라이크","메트로바니아","액션","인디","도전적"], rating:9.3, year:2018, dev:"Motion Twin", desc:"빠른 전투와 탐험의 로그바니아 인디 명작." },

  // ── 추가 어드벤처 (20) ──
  { id:524220, title:"NieR:Automata", genre:"어드벤처", tags:["액션","스토리","SF","철학적","JRPG"], rating:9.3, year:2017, dev:"PlatinumGames", desc:"안드로이드들의 존재론적 여정을 그린 액션 어드벤처." },
  { id:1113560, title:"NieR Replicant ver.1.22474487139...", genre:"어드벤처", tags:["액션","스토리","JRPG","감성","리마스터"], rating:8.8, year:2021, dev:"Toylogic", desc:"니어 오토마타의 전작을 리마스터한 작품." },
  { id:1158310, title:"Disco Elysium - The Final Cut", genre:"어드벤처", tags:["RPG","스토리","대화","탐정","독창적"], rating:9.5, year:2021, dev:"ZA/UM", desc:"대화와 내면 탐구로 이끌어가는 혁신적 RPG 어드벤처." },
  { id:960090, title:"Psychonauts 2", genre:"어드벤처", tags:["플랫포머","어드벤처","코미디","초능력","3D"], rating:9.1, year:2021, dev:"Double Fine Productions", desc:"기발한 정신세계 탐험이 돋보이는 3D 플랫포머." },
  { id:1151640, title:"Horizon Zero Dawn", genre:"어드벤처", tags:["오픈월드","액션","SF","포스트아포칼립스","스토리"], rating:8.8, year:2020, dev:"Guerrilla Games", desc:"기계 생물이 지배하는 세계를 탐험하는 오픈월드 어드벤처." },
  { id:1196590, title:"Uncharted: Legacy of Thieves Collection", genre:"어드벤처", tags:["어드벤처","액션","스토리","보물","시네마틱"], rating:9.0, year:2022, dev:"Naughty Dog", desc:"시네마틱 액션 어드벤처의 최고봉 PC판." },
  { id:1150690, title:"OMORI", genre:"어드벤처", tags:["RPG","심리","호러","스토리","도트"], rating:9.6, year:2020, dev:"OMOCAT", desc:"밝은 외면과 어두운 내면이 대비되는 심리 RPG." },
  { id:204060, title:"Life is Strange Remastered", genre:"어드벤처", tags:["스토리","선택","어드벤처","감성","시간여행"], rating:9.0, year:2022, dev:"Deck Nine Games", desc:"시간을 되돌리는 능력과 선택이 핵심인 감성 어드벤처." },
  { id:1174180, title:"Red Dead Redemption 2", genre:"어드벤처", tags:["오픈월드","서부","스토리","액션","싱글플레이어"], rating:9.5, year:2019, dev:"Rockstar Games", desc:"서부 시대의 삶을 압도적 디테일로 그린 오픈월드 명작." },
  { id:257850, title:"Hyper Light Drifter", genre:"어드벤처", tags:["인디","액션","도트","탐험","어려움"], rating:9.2, year:2016, dev:"Heart Machine", desc:"아름다운 도트 그래픽과 빠른 전투의 인디 명작." },
  { id:367520, title:"Hollow Knight", genre:"어드벤처", tags:["메트로바니아","인디","탐험","도전적","2D"], rating:9.6, year:2017, dev:"Team Cherry", desc:"방대한 지하 왕국을 탐험하는 메트로바니아 명작." },
  { id:1056690, title:"Outer Wilds", genre:"어드벤처", tags:["탐험","우주","퍼즐","미스터리","인디"], rating:9.7, year:2020, dev:"Mobius Digital", desc:"시간 루프 속 우주를 탐험하는 독창적인 어드벤처." },
  { id:620, title:"Portal 2", genre:"어드벤처", tags:["퍼즐","SF","협동","유머","1인칭"], rating:9.8, year:2011, dev:"Valve", desc:"포탈건을 이용한 천재적 퍼즐과 유머의 명작." },
  { id:400, title:"Portal", genre:"어드벤처", tags:["퍼즐","SF","1인칭","유머","짧음"], rating:9.5, year:2007, dev:"Valve", desc:"포탈건의 혁신적 퍼즐과 GLaDOS의 유머가 빛나는 명작." },
  { id:322170, title:"Geometry Dash", genre:"어드벤처", tags:["리듬","플랫포머","인디","도전적","캐주얼"], rating:9.0, year:2014, dev:"RobTop Games", desc:"리듬에 맞춰 점프하는 중독성 강한 플랫포머." },
  { id:290340, title:"Limbo", genre:"어드벤처", tags:["퍼즐","플랫포머","흑백","분위기","인디"], rating:9.1, year:2011, dev:"Playdead", desc:"흑백 실루엣 미학의 퍼즐 플랫포머 인디 명작." },
  { id:457580, title:"Inside", genre:"어드벤처", tags:["퍼즐","플랫포머","분위기","디스토피아","인디"], rating:9.4, year:2016, dev:"Playdead", desc:"Limbo 개발사의 디스토피아 퍼즐 플랫포머." },
  { id:570940, title:"Spiritfarer", genre:"어드벤처", tags:["힐링","경영","감성","2D","스토리"], rating:9.2, year:2020, dev:"Thunder Lotus Games", desc:"영혼들을 배웅하는 감동적인 경영 어드벤처." },
  { id:782330, title:"DOOM Eternal", genre:"어드벤처", tags:["FPS","액션","악마","속도감","싱글플레이어"], rating:9.1, year:2020, dev:"id Software", desc:"지옥의 악마를 상대로 극한의 속도전을 벌이는 FPS." },
  { id:1568590, title:"Inscryption", genre:"어드벤처", tags:["카드","공포","인디","덱빌딩","미스터리"], rating:9.5, year:2021, dev:"Daniel Mullins Games", desc:"카드 게임의 틀을 깨는 미스터리 인디 명작." },

  // ── 추가 전략 (20) ──
  { id:289070, title:"Civilization VI", genre:"전략", tags:["4X","턴제","역사","전략","국가운영"], rating:8.8, year:2016, dev:"Firaxis Games", desc:"문명을 건설하고 역사를 이끄는 대표 4X 전략 게임." },
  { id:281990, title:"Stellaris", genre:"전략", tags:["대전략","우주","4X","SF","외교"], rating:8.9, year:2016, dev:"Paradox Development Studio", desc:"은하계를 무대로 한 장대한 우주 전략 시뮬레이션." },
  { id:394360, title:"Hearts of Iron IV", genre:"전략", tags:["대전략","2차대전","역사","전쟁","국가운영"], rating:9.0, year:2016, dev:"Paradox Development Studio", desc:"2차 대전을 배경으로 국가를 운영하는 대전략 게임." },
  { id:466560, title:"Northgard", genre:"전략", tags:["RTS","바이킹","전략","생존","멀티플레이어"], rating:8.5, year:2018, dev:"Shiro Games", desc:"바이킹 정착지를 운영하며 정복하는 RTS." },
  { id:464920, title:"Surviving Mars", genre:"전략", tags:["도시건설","화성","SF","전략","시뮬레이션"], rating:8.2, year:2018, dev:"Haemimont Games", desc:"화성 식민지를 건설하고 운영하는 전략 시뮬레이션." },
  { id:573090, title:"Oxygen Not Included", genre:"전략", tags:["시뮬레이션","전략","기지건설","과학","생존"], rating:9.4, year:2019, dev:"Klei Entertainment", desc:"우주 기지에서 자원과 산소를 관리하는 전략 시뮬레이션." },
  { id:1466860, title:"Age of Empires IV", genre:"전략", tags:["RTS","역사","전략","중세","멀티플레이어"], rating:8.3, year:2021, dev:"Relic Entertainment", desc:"에이지 오브 엠파이어 시리즈의 정통 후속작." },
  { id:813780, title:"Age of Empires II: Definitive Edition", genre:"전략", tags:["RTS","역사","전략","경쟁","클래식"], rating:9.3, year:2019, dev:"Forgotten Empires", desc:"RTS 장르의 교과서를 리마스터한 명작." },
  { id:1401590, title:"Manor Lords", genre:"전략", tags:["중세","도시건설","전략","전투","리얼타임"], rating:8.3, year:2024, dev:"Slavic Magic", desc:"중세 영지를 경영하고 전투를 지휘하는 전략 게임." },
  { id:529340, title:"Frostpunk", genre:"전략", tags:["도시건설","서바이벌","전략","디스토피아","선택"], rating:9.2, year:2018, dev:"11 bit studios", desc:"극한의 추위 속에서 문명을 유지하는 도시 건설 전략." },
  { id:1307410, title:"Anno 1800", genre:"전략", tags:["도시건설","전략","19세기","무역","경영"], rating:8.8, year:2023, dev:"Ubisoft Blue Byte", desc:"산업혁명 시대의 도시와 무역을 건설하는 전략 게임." },
  { id:322330, title:"Don't Starve Together", genre:"전략", tags:["서바이벌","협동","전략","크래프팅","고딕"], rating:9.2, year:2016, dev:"Klei Entertainment", desc:"자원 관리와 생존 전략이 핵심인 협동 게임." },
  { id:250900, title:"The Binding of Isaac: Rebirth", genre:"전략", tags:["로그라이크","인디","던전","도전적","전략"], rating:9.5, year:2014, dev:"Edmund McMillen", desc:"수백 개 아이템 조합의 로그라이크 인디 명작." },
  { id:2321470, title:"Victoria 3", genre:"전략", tags:["대전략","경제","역사","국가운영","외교"], rating:7.8, year:2022, dev:"Paradox Development Studio", desc:"19세기 경제와 사회를 운영하는 대전략 게임." },
  { id:105600, title:"Terraria", genre:"전략", tags:["샌드박스","2D","전략","크래프팅","보스전"], rating:9.6, year:2011, dev:"Re-Logic", desc:"2D 세계에서 전략적 건설과 보스전을 즐기는 샌드박스." },
  { id:594570, title:"Total War: WARHAMMER II", genre:"전략", tags:["전략","RTS","판타지","대규모전투","턴제"], rating:9.2, year:2017, dev:"Creative Assembly", desc:"판타지 세계의 대규모 전투를 지휘하는 전략 명작." },
  { id:310950, title:"Into the Breach", genre:"전략", tags:["인디","턴제","전략","메카","퍼즐"], rating:9.3, year:2018, dev:"Subset Games", desc:"작은 맵에서 벌어지는 긴장감 넘치는 턴제 전략." },
  { id:1237950, title:"Age of Empires III: Definitive Edition", genre:"전략", tags:["RTS","역사","식민지","전략","멀티플레이어"], rating:8.1, year:2020, dev:"Tantalus Media", desc:"식민지 시대 RTS를 리마스터한 디피니티브 에디션." },
  { id:1158160, title:"Frostpunk 2", genre:"전략", tags:["도시건설","서바이벌","전략","디스토피아","선택"], rating:8.0, year:2024, dev:"11 bit studios", desc:"얼어붙은 세계에서 사회를 이끄는 서바이벌 전략 후속작." },
  { id:248820, title:"Garry's Mod", genre:"전략", tags:["샌드박스","물리","모드","창작","멀티플레이어"], rating:9.5, year:2006, dev:"Facepunch Studios", desc:"소스 엔진으로 무엇이든 만드는 대표 샌드박스." },

  // ── 추가 시뮬레이션 (20) ──
  { id:227300, title:"Euro Truck Simulator 2", genre:"시뮬레이션", tags:["트럭","시뮬레이션","운전","유럽","힐링"], rating:9.5, year:2012, dev:"SCS Software", desc:"유럽 대륙을 트럭으로 횡단하는 힐링 시뮬레이션." },
  { id:284160, title:"BeamNG.drive", genre:"시뮬레이션", tags:["자동차","물리","시뮬레이션","충돌","샌드박스"], rating:9.4, year:2015, dev:"BeamNG", desc:"현실적인 물리 엔진으로 차량을 조작하는 시뮬레이션." },
  { id:255710, title:"Cities: Skylines", genre:"시뮬레이션", tags:["도시건설","시뮬레이션","경영","모드","교통"], rating:9.1, year:2015, dev:"Colossal Order", desc:"도시 건설과 교통 관리에 몰입하는 시뮬레이션 대표작." },
  { id:1066780, title:"PowerWash Simulator", genre:"시뮬레이션", tags:["시뮬레이션","청소","힐링","협동","캐주얼"], rating:9.2, year:2022, dev:"FuturLab", desc:"고압 세척기로 모든 것을 깨끗이 씻는 힐링 시뮬레이션." },
  { id:304050, title:"House Flipper", genre:"시뮬레이션", tags:["시뮬레이션","인테리어","리모델링","경영","1인칭"], rating:8.6, year:2018, dev:"Empyrean", desc:"폐가를 사서 리모델링하고 되파는 인테리어 시뮬레이션." },
  { id:1449560, title:"Timberborn", genre:"시뮬레이션", tags:["도시건설","시뮬레이션","비버","전략","자원관리"], rating:9.0, year:2021, dev:"Mechanistry", desc:"비버 문명을 건설하는 독창적인 도시 건설 시뮬레이션." },
  { id:736190, title:"Planet Coaster", genre:"시뮬레이션", tags:["놀이공원","건설","시뮬레이션","경영","창의적"], rating:8.8, year:2016, dev:"Frontier Developments", desc:"놀이공원을 자유롭게 설계하고 운영하는 시뮬레이션." },
  { id:1625450, title:"Plate Up!", genre:"시뮬레이션", tags:["요리","경영","로그라이크","협동","캐주얼"], rating:9.2, year:2022, dev:"It's Happening", desc:"레스토랑을 자동화하며 요리하는 협동 로그라이크." },
  { id:1774580, title:"Two Point Campus", genre:"시뮬레이션", tags:["경영","유머","대학","시뮬레이션","캐주얼"], rating:8.3, year:2022, dev:"Two Point Studios", desc:"대학교를 운영하며 학생들을 관리하는 경영 시뮬레이션." },
  { id:1044720, title:"Cooking Simulator", genre:"시뮬레이션", tags:["요리","시뮬레이션","물리","캐주얼","유머"], rating:8.5, year:2019, dev:"Big Cheese Studio", desc:"현실적인 주방에서 요리하는 물리 기반 시뮬레이션." },
  { id:413150, title:"Stardew Valley", genre:"시뮬레이션", tags:["농장","시뮬레이션","힐링","인디","협동"], rating:9.7, year:2016, dev:"ConcernedApe", desc:"농장 생활의 모든 것을 담은 대표 힐링 시뮬레이션." },
  { id:1218210, title:"Train Sim World 3", genre:"시뮬레이션", tags:["기차","시뮬레이션","운전","현실적","힐링"], rating:7.8, year:2022, dev:"Dovetail Games", desc:"실제 노선을 달리는 열차 시뮬레이션 최신작." },
  { id:1455840, title:"Wylde Flowers", genre:"시뮬레이션", tags:["농장","마법","시뮬레이션","힐링","스토리"], rating:8.7, year:2023, dev:"Studio Drydock", desc:"농장 경영과 마녀 생활이 결합된 힐링 시뮬레이션." },
  { id:427520, title:"Factorio", genre:"시뮬레이션", tags:["자동화","공장","시뮬레이션","전략","중독성"], rating:9.7, year:2020, dev:"Wube Software", desc:"공장 자동화의 끝없는 최적화 재미를 주는 게임." },
  { id:526870, title:"Satisfactory", genre:"시뮬레이션", tags:["공장자동화","시뮬레이션","건설","협동","SF"], rating:9.5, year:2024, dev:"Coffee Stain Studios", desc:"외계 행성에서 공장을 짓는 자동화 시뮬레이션." },
  { id:573090, title:"Oxygen Not Included", genre:"시뮬레이션", tags:["시뮬레이션","기지건설","과학","전략","생존"], rating:9.4, year:2019, dev:"Klei Entertainment", desc:"우주 기지에서 자원과 산소를 관리하는 시뮬레이션." },
  { id:493340, title:"Planet Zoo", genre:"시뮬레이션", tags:["동물원","시뮬레이션","건설","경영","동물"], rating:8.7, year:2019, dev:"Frontier Developments", desc:"동물원을 설계하고 동물을 관리하는 시뮬레이션." },
  { id:648350, title:"Two Point Hospital", genre:"시뮬레이션", tags:["병원","경영","유머","시뮬레이션","캐주얼"], rating:8.8, year:2018, dev:"Two Point Studios", desc:"유머러스한 병원 경영 시뮬레이션." },
  { id:1042550, title:"Snowrunner", genre:"시뮬레이션", tags:["트럭","오프로드","시뮬레이션","오픈월드","협동"], rating:8.7, year:2021, dev:"Saber Interactive", desc:"험로를 돌파하며 화물을 배달하는 오프로드 시뮬레이션." },
  { id:3243440, title:"Planet Coaster 2", genre:"시뮬레이션", tags:["놀이공원","워터파크","시뮬레이션","경영","건설"], rating:7.8, year:2024, dev:"Frontier Developments", desc:"워터파크가 추가된 놀이공원 시뮬레이션 후속작." },

  // ── 추가 공포 (20) ──
  { id:739630, title:"Phasmophobia", genre:"공포", tags:["공포","협동","유령","조사","VR"], rating:9.1, year:2020, dev:"Kinetic Games", desc:"유령의 종류를 추리하며 조사하는 협동 공포 게임." },
  { id:1985690, title:"Lethal Company", genre:"공포", tags:["공포","협동","코옵","몬스터","인디"], rating:9.4, year:2023, dev:"Zeekerss", desc:"위험한 달에서 폐품을 모아야 하는 협동 공포 게임." },
  { id:1966720, title:"Content Warning", genre:"공포", tags:["공포","협동","코미디","촬영","인디"], rating:9.1, year:2024, dev:"Landfall", desc:"공포 영상을 찍어 조회수를 올리는 유쾌한 협동 공포." },
  { id:1568590, title:"Inscryption", genre:"공포", tags:["카드","공포","인디","덱빌딩","미스터리"], rating:9.5, year:2021, dev:"Daniel Mullins Games", desc:"카드 게임의 틀을 깨는 미스터리 공포 인디 명작." },
  { id:1843020, title:"Resident Evil 4 Remake", genre:"공포", tags:["공포","액션","서바이벌","리메이크","TPS"], rating:9.3, year:2023, dev:"CAPCOM", desc:"바이오하자드 4를 현대적으로 재탄생시킨 리메이크." },
  { id:883710, title:"Resident Evil 2 Remake", genre:"공포", tags:["공포","서바이벌","리메이크","좀비","TPS"], rating:9.4, year:2019, dev:"CAPCOM", desc:"바이오하자드 2를 완벽하게 재구성한 리메이크 걸작." },
  { id:1196190, title:"Resident Evil 3 Remake", genre:"공포", tags:["공포","액션","서바이벌","네메시스","리메이크"], rating:8.1, year:2020, dev:"CAPCOM", desc:"네메시스의 추격이 긴장감을 극대화하는 리메이크." },
  { id:2138710, title:"Resident Evil Village Gold Edition", genre:"공포", tags:["공포","액션","FPS","뱀파이어","서바이벌"], rating:8.8, year:2022, dev:"CAPCOM", desc:"3인칭 모드가 추가된 바이오하자드 빌리지 완전판." },
  { id:1100600, title:"Demonologist", genre:"공포", tags:["공포","유령","협동","조사","1인칭"], rating:7.5, year:2023, dev:"Clock Wizard Games", desc:"팀으로 유령을 조사하는 협동 호러 게임." },
  { id:594650, title:"Hunt: Showdown 1896", genre:"공포", tags:["FPS","공포","PvPvE","서부","바운티"], rating:8.7, year:2019, dev:"Crytek", desc:"괴물 사냥과 PvP가 결합된 독특한 호러 FPS." },
  { id:242760, title:"The Forest", genre:"공포", tags:["공포","서바이벌","건설","오픈월드","협동"], rating:8.9, year:2018, dev:"Endnight Games", desc:"식인종이 사는 숲에서 살아남는 서바이벌 공포." },
  { id:1326470, title:"Sons Of The Forest", genre:"공포", tags:["공포","서바이벌","건설","오픈월드","협동"], rating:8.2, year:2023, dev:"Endnight Games", desc:"더 포레스트 후속작으로 AI 동료와 생존하는 게임." },
  { id:251570, title:"7 Days to Die", genre:"공포", tags:["좀비","공포","서바이벌","건설","크래프팅"], rating:8.3, year:2013, dev:"The Fun Pimps", desc:"좀비 호드에 대비하며 기지를 쌓는 좀비 공포." },
  { id:1203620, title:"The Dark Pictures Anthology: Little Hope", genre:"공포", tags:["공포","스토리","선택","심리","협동"], rating:7.8, year:2020, dev:"Supermassive Games", desc:"마녀재판의 저주를 쫓는 인터랙티브 호러 어드벤처." },
  { id:319630, title:"Life is Strange", genre:"공포", tags:["스토리","선택","어드벤처","감성","미스터리"], rating:9.0, year:2015, dev:"Dontnod Entertainment", desc:"시간을 되돌리며 운명을 바꾸는 감성 어드벤처." },
  { id:945360, title:"Among Us", genre:"공포", tags:["마피아","공포","추리","멀티플레이어","캐주얼"], rating:8.8, year:2018, dev:"Innersloth", desc:"임포스터를 찾아내는 소셜 추리 공포 게임." },
  { id:493520, title:"GTFO", genre:"공포", tags:["공포","FPS","협동","하드코어","지하"], rating:8.6, year:2021, dev:"10 Chambers", desc:"극도의 긴장감을 요구하는 하드코어 협동 FPS." },
  { id:418240, title:"Shadow of Mordor GOTY", genre:"공포", tags:["오픈월드","액션","판타지","다크","네메시스"], rating:8.6, year:2014, dev:"Monolith Productions", desc:"네메시스 시스템이 혁신적인 다크 오픈월드 액션." },
  { id:1150690, title:"OMORI", genre:"공포", tags:["심리공포","RPG","스토리","도트","우울"], rating:9.6, year:2020, dev:"OMOCAT", desc:"밝은 외면과 어두운 내면의 심리 공포 RPG." },
  { id:1295660, title:"Deaths Door", genre:"공포", tags:["액션","인디","죽음","보스전","다크"], rating:9.0, year:2021, dev:"Acid Nerve", desc:"영혼을 수확하는 까마귀의 다크 액션 어드벤처." },

  // ── 추가 서바이벌 (20) ──
  { id:346110, title:"ARK: Survival Evolved", genre:"서바이벌", tags:["서바이벌","공룡","오픈월드","건설","멀티플레이어"], rating:8.0, year:2017, dev:"Studio Wildcard", desc:"공룡을 길들이며 살아남는 대표 서바이벌 게임." },
  { id:242760, title:"The Forest", genre:"서바이벌", tags:["서바이벌","공포","건설","오픈월드","협동"], rating:8.9, year:2018, dev:"Endnight Games", desc:"식인종이 사는 숲에서 살아남는 서바이벌 공포." },
  { id:1326470, title:"Sons Of The Forest", genre:"서바이벌", tags:["서바이벌","공포","건설","오픈월드","협동"], rating:8.2, year:2023, dev:"Endnight Games", desc:"더 포레스트의 후속작으로 AI 동료와 함께 생존." },
  { id:251570, title:"7 Days to Die", genre:"서바이벌", tags:["좀비","서바이벌","건설","공포","크래프팅"], rating:8.3, year:2013, dev:"The Fun Pimps", desc:"7일마다 몰려오는 좀비 호드에 대비하는 서바이벌." },
  { id:322330, title:"Don't Starve Together", genre:"서바이벌", tags:["서바이벌","협동","크래프팅","다크","고딕"], rating:9.2, year:2016, dev:"Klei Entertainment", desc:"독특한 아트 스타일의 협동 서바이벌 게임." },
  { id:105600, title:"Terraria", genre:"서바이벌", tags:["서바이벌","2D","크래프팅","탐험","보스전"], rating:9.6, year:2011, dev:"Re-Logic", desc:"2D 세계에서 탐험과 건설을 즐기는 서바이벌 샌드박스." },
  { id:304930, title:"Unturned", genre:"서바이벌", tags:["서바이벌","좀비","무료","샌드박스","멀티플레이어"], rating:8.4, year:2017, dev:"Smartly Dressed Games", desc:"블록 스타일의 무료 좀비 서바이벌 게임." },
  { id:526870, title:"Satisfactory", genre:"서바이벌", tags:["공장자동화","서바이벌","건설","협동","SF"], rating:9.5, year:2024, dev:"Coffee Stain Studios", desc:"외계 행성에서 공장을 짓는 서바이벌 건설 게임." },
  { id:1985690, title:"Lethal Company", genre:"서바이벌", tags:["서바이벌","공포","협동","코옵","인디"], rating:9.4, year:2023, dev:"Zeekerss", desc:"위험한 달에서 폐품을 수집하며 생존하는 협동 게임." },
  { id:513710, title:"SCUM", genre:"서바이벌", tags:["서바이벌","오픈월드","PvP","현실적","감옥"], rating:7.8, year:2018, dev:"Gamepires", desc:"상세한 신체 메커닉의 하드코어 오픈월드 서바이벌." },
  { id:1149460, title:"Icarus", genre:"서바이벌", tags:["서바이벌","SF","건설","크래프팅","협동"], rating:7.5, year:2021, dev:"RocketWerkz", desc:"외계 행성에서 자원을 채취하고 귀환하는 세션형 서바이벌." },
  { id:1928980, title:"Nightingale", genre:"서바이벌", tags:["서바이벌","빅토리안","판타지","건설","협동"], rating:7.2, year:2024, dev:"Inflexion Games", desc:"빅토리안 판타지 세계에서 생존하는 협동 서바이벌." },
  { id:211820, title:"Starbound", genre:"서바이벌", tags:["서바이벌","우주","2D","샌드박스","탐험"], rating:8.7, year:2016, dev:"Chucklefish", desc:"우주를 횡단하며 행성을 탐험하는 2D 서바이벌." },
  { id:313120, title:"Stranded Deep", genre:"서바이벌", tags:["서바이벌","바다","무인도","크래프팅","오픈월드"], rating:8.0, year:2015, dev:"Beam Team Games", desc:"태평양 무인도에서 홀로 살아남는 서바이벌 게임." },
  { id:1621690, title:"Core Keeper", genre:"서바이벌", tags:["서바이벌","지하","크래프팅","협동","도트"], rating:8.8, year:2024, dev:"Pugstorm", desc:"거대한 지하 동굴에서 탐험하는 협동 서바이벌." },
  { id:2016590, title:"Enshrouded", genre:"서바이벌", tags:["서바이벌","판타지","건설","RPG","협동"], rating:8.3, year:2024, dev:"Keen Games", desc:"안개에 뒤덮인 판타지 세계의 액션 서바이벌 RPG." },
  { id:739630, title:"Phasmophobia", genre:"서바이벌", tags:["서바이벌","공포","유령","협동","VR"], rating:9.1, year:2020, dev:"Kinetic Games", desc:"유령 조사 중 생존해야 하는 협동 호러 게임." },
  { id:573090, title:"Oxygen Not Included", genre:"서바이벌", tags:["서바이벌","기지건설","과학","시뮬레이션","전략"], rating:9.4, year:2019, dev:"Klei Entertainment", desc:"우주 기지에서 자원을 관리하며 생존하는 시뮬레이션." },
  { id:1966720, title:"Content Warning", genre:"서바이벌", tags:["서바이벌","공포","촬영","협동","코미디"], rating:9.1, year:2024, dev:"Landfall", desc:"공포 콘텐츠를 촬영하며 살아남는 협동 서바이벌." },
  { id:945360, title:"Among Us", genre:"서바이벌", tags:["서바이벌","소셜","추리","멀티플레이어","협동"], rating:8.8, year:2018, dev:"Innersloth", desc:"임포스터로부터 살아남는 소셜 추리 서바이벌." },

  // ── 추가 격투 (20) ──
  { id:1778820, title:"TEKKEN 8", genre:"격투", tags:["격투","3D","경쟁","철권","멀티플레이어"], rating:8.7, year:2024, dev:"Bandai Namco", desc:"히트 시스템이 혁신된 철권 시리즈 최신작." },
  { id:1627720, title:"Mortal Kombat 1", genre:"격투", tags:["격투","고어","경쟁","카메오","멀티플레이어"], rating:7.8, year:2023, dev:"NetherRealm Studios", desc:"카메오 시스템이 추가된 모탈 컴뱃 리부트." },
  { id:976310, title:"Mortal Kombat 11", genre:"격투", tags:["격투","고어","경쟁","스토리","멀티플레이어"], rating:8.5, year:2019, dev:"NetherRealm Studios", desc:"화려한 페이탈리티와 탄탄한 스토리의 격투 게임." },
  { id:812380, title:"Dragon Ball FighterZ", genre:"격투", tags:["격투","애니","드래곤볼","2.5D","경쟁"], rating:9.0, year:2018, dev:"Arc System Works", desc:"드래곤볼을 완벽히 재현한 애니 격투 게임." },
  { id:2456460, title:"Dragon Ball: Sparking! ZERO", genre:"격투", tags:["격투","애니","드래곤볼","3D","대전"], rating:8.8, year:2024, dev:"Spike Chunsoft", desc:"드래곤볼 버스트리밋의 최신 3D 대전 격투." },
  { id:544750, title:"Brawlhalla", genre:"격투", tags:["격투","무료","플랫폼","멀티플레이어","인디"], rating:8.5, year:2017, dev:"Blue Mammoth Games", desc:"스매시브라더스 스타일의 무료 플랫폼 격투 게임." },
  { id:678950, title:"Dragon Ball Xenoverse 2", genre:"격투", tags:["격투","드래곤볼","RPG","애니","커스터마이즈"], rating:8.3, year:2016, dev:"Dimps", desc:"나만의 캐릭터로 드래곤볼 세계에서 싸우는 RPG 격투." },
  { id:874170, title:"Granblue Fantasy Versus", genre:"격투", tags:["격투","애니","RPG모드","2D","판타지"], rating:8.3, year:2020, dev:"Arc System Works", desc:"그랑블루 판타지의 아름다운 2D 격투 게임." },
  { id:228440, title:"Mortal Kombat X", genre:"격투", tags:["격투","고어","경쟁","스토리","멀티플레이어"], rating:8.4, year:2015, dev:"NetherRealm Studios", desc:"세대교체 캐릭터가 등장하는 모탈 컴뱃 시리즈." },
  { id:242860, title:"Injustice: Gods Among Us Ultimate Edition", genre:"격투", tags:["격투","DC코믹스","슈퍼히어로","스토리","2D"], rating:8.3, year:2013, dev:"NetherRealm Studios", desc:"DC 히어로들이 맞붙는 격투 게임." },
  { id:627270, title:"Absolver", genre:"격투", tags:["격투","무술","온라인","커스터마이즈","인디"], rating:7.8, year:2017, dev:"Sloclap", desc:"무술 모션을 조합해 자신만의 스타일을 만드는 격투." },
  { id:412680, title:"Rivals of Aether", genre:"격투", tags:["격투","플랫폼","인디","경쟁","도트"], rating:9.0, year:2017, dev:"Dan Fornace", desc:"원소 능력 기반의 인디 플랫폼 격투 게임." },
  { id:1634040, title:"Under Night In-Birth II Sys:Celes", genre:"격투", tags:["격투","애니","2D","경쟁","인디"], rating:8.5, year:2024, dev:"French-Bread", desc:"독자적 시스템이 깊은 2D 애니 격투 게임." },
  { id:1240260, title:"DNF Duel", genre:"격투", tags:["격투","2D","던파","애니","경쟁"], rating:7.8, year:2022, dev:"Eighting", desc:"던전앤파이터 캐릭터들의 화려한 2D 격투." },
  { id:1229180, title:"Skullgirls 2nd Encore", genre:"격투", tags:["격투","애니","인디","2D","경쟁"], rating:9.1, year:2020, dev:"Hidden Variable Studios", desc:"핸드드로잉 애니메이션이 빛나는 인디 격투 명작." },
  { id:1659420, title:"Sifu", genre:"격투", tags:["격투","무술","액션","로그라이크","싱글플레이어"], rating:8.8, year:2022, dev:"Sloclap", desc:"죽을수록 나이 들며 강해지는 무술 격투 액션." },
  { id:453480, title:"Blade Strangers", genre:"격투", tags:["격투","크로스오버","인디","2D","캐주얼"], rating:7.5, year:2018, dev:"Studio Saizensen", desc:"인디 게임 캐릭터들이 모인 크로스오버 격투." },
  { id:1090750, title:"Power Rangers: Battle for the Grid", genre:"격투", tags:["격투","파워레인저","팀전","2.5D","멀티플레이어"], rating:8.0, year:2019, dev:"nWay", desc:"파워레인저 IP의 태그팀 격투 게임." },
  { id:2515320, title:"Them's Fightin' Herds", genre:"격투", tags:["격투","2D","인디","동물","경쟁"], rating:8.2, year:2022, dev:"Mane6", desc:"동물 캐릭터들의 개성 넘치는 인디 격투 게임." },
  { id:774171, title:"MultiVersus", genre:"격투", tags:["격투","플랫폼","무료","크로스오버","멀티플레이어"], rating:7.5, year:2024, dev:"Player First Games", desc:"워너브라더스 캐릭터들의 무료 플랫폼 격투." },

  // ── 추가 스포츠 (20) ──
  { id:457140, title:"Rocket League", genre:"스포츠", tags:["스포츠","자동차","축구","멀티플레이어","경쟁"], rating:9.3, year:2015, dev:"Psyonix", desc:"차량으로 축구하는 독창적인 스포츠 게임." },
  { id:1098820, title:"Golf With Your Friends", genre:"스포츠", tags:["골프","멀티플레이어","캐주얼","미니골프","파티"], rating:8.3, year:2020, dev:"Blacklight Interactive", desc:"친구들과 즐기는 캐주얼 미니골프 파티 게임." },
  { id:552500, title:"Steep", genre:"스포츠", tags:["스키","스노보드","익스트림","오픈월드","멀티플레이어"], rating:8.0, year:2016, dev:"Ubisoft Annecy", desc:"알프스를 배경으로 한 오픈월드 익스트림 스포츠." },
  { id:1449850, title:"WWE 2K22", genre:"스포츠", tags:["프로레슬링","스포츠","액션","멀티플레이어","격투"], rating:8.0, year:2022, dev:"Visual Concepts", desc:"프로레슬링의 박진감을 살린 WWE 시뮬레이션." },
  { id:2195250, title:"EA SPORTS FC 24", genre:"스포츠", tags:["축구","스포츠","멀티플레이어","경쟁","시뮬레이션"], rating:7.5, year:2023, dev:"EA Vancouver", desc:"FIFA 후속으로 이름이 바뀐 축구 시뮬레이션." },
  { id:2440510, title:"EA SPORTS FC 25", genre:"스포츠", tags:["축구","스포츠","멀티플레이어","경쟁","전술"], rating:7.0, year:2024, dev:"EA Vancouver", desc:"전술 AI가 강화된 축구 시뮬레이션 최신작." },
  { id:751780, title:"Ace Combat 7: Skies Unknown", genre:"스포츠", tags:["비행","전투기","액션","밀리터리","VR"], rating:8.7, year:2019, dev:"Bandai Namco", desc:"전투기 공중전의 짜릿함을 느끼는 에이스 컴뱃 시리즈." },
  { id:1517290, title:"Windjammers 2", genre:"스포츠", tags:["스포츠","아케이드","디스크","2D","멀티플레이어"], rating:8.3, year:2022, dev:"Dotemu", desc:"프리스비 대전의 클래식을 부활시킨 아케이드 스포츠." },
  { id:386070, title:"Pool Nation FX", genre:"스포츠", tags:["당구","시뮬레이션","스포츠","멀티플레이어","캐주얼"], rating:7.5, year:2015, dev:"Cherry Pop Games", desc:"리얼한 물리의 당구 시뮬레이션 게임." },
  { id:898580, title:"Premium Bowling", genre:"스포츠", tags:["볼링","스포츠","시뮬레이션","VR","캐주얼"], rating:7.8, year:2019, dev:"VISION3 Games", desc:"VR도 지원하는 현실적인 볼링 시뮬레이션." },
  { id:1190180, title:"Skater XL", genre:"스포츠", tags:["스케이트","스포츠","시뮬레이션","물리","인디"], rating:7.3, year:2020, dev:"Easy Day Studios", desc:"물리 기반 조작의 인디 스케이트보드 시뮬레이션." },
  { id:2698940, title:"The Crew Motorfest", genre:"스포츠", tags:["레이싱","오픈월드","스포츠","멀티플레이어","축제"], rating:7.8, year:2023, dev:"Ubisoft Ivory Tower", desc:"하와이 배경의 오픈월드 레이싱 페스티벌." },
  { id:227200, title:"Worms W.M.D", genre:"스포츠", tags:["턴제","전략","파티","유머","멀티플레이어"], rating:8.6, year:2016, dev:"Team17", desc:"차량과 건물 진입이 추가된 웜즈 시리즈 최신작." },
  { id:233270, title:"Football Manager 2014", genre:"스포츠", tags:["축구","감독","시뮬레이션","전략","데이터"], rating:8.5, year:2013, dev:"Sports Interactive", desc:"풋볼 매니저 시리즈의 클래식 버전." },
  { id:1437220, title:"Sports Story", genre:"스포츠", tags:["스포츠","인디","골프","RPG","도트"], rating:7.0, year:2022, dev:"Sidebar Games", desc:"골프를 중심으로 다양한 스포츠를 즐기는 인디 RPG." },
  { id:265930, title:"Goat Simulator", genre:"스포츠", tags:["코미디","시뮬레이션","샌드박스","파괴","스포츠"], rating:8.5, year:2014, dev:"Coffee Stain Studios", desc:"염소가 되어 세상을 파괴하는 유쾌한 시뮬레이션." },
  { id:327890, title:"What the Golf?", genre:"스포츠", tags:["골프","코미디","퍼즐","인디","캐주얼"], rating:9.0, year:2020, dev:"Triband", desc:"골프의 모든 규칙을 비트는 코미디 물리 퍼즐 게임." },
  { id:924970, title:"Back 4 Blood", genre:"스포츠", tags:["FPS","협동","좀비","팀전","멀티플레이어"], rating:7.5, year:2021, dev:"Turtle Rock Studios", desc:"팀 기반 협동 좀비 사격 게임." },
  { id:1085660, title:"Destiny 2", genre:"스포츠", tags:["FPS","루터슈터","SF","레이드","멀티플레이어"], rating:8.3, year:2017, dev:"Bungie", desc:"광활한 우주에서 레이드와 PvP를 즐기는 온라인 FPS." },
  { id:544750, title:"Brawlhalla", genre:"스포츠", tags:["격투","무료","플랫폼","스포츠","멀티플레이어"], rating:8.5, year:2017, dev:"Blue Mammoth Games", desc:"스매시브라더스 스타일의 무료 플랫폼 대전 게임." },

  // ── 추가 샌드박스 (20) ──
  { id:105600, title:"Terraria", genre:"샌드박스", tags:["2D","샌드박스","크래프팅","탐험","보스전"], rating:9.6, year:2011, dev:"Re-Logic", desc:"2D 세계에서 무한한 자유도를 누리는 샌드박스 명작." },
  { id:284160, title:"BeamNG.drive", genre:"샌드박스", tags:["자동차","물리","샌드박스","충돌","시뮬레이션"], rating:9.4, year:2015, dev:"BeamNG", desc:"현실적 물리 엔진의 차량 샌드박스." },
  { id:248820, title:"Garry's Mod", genre:"샌드박스", tags:["샌드박스","물리","모드","협동","창작"], rating:9.5, year:2006, dev:"Facepunch Studios", desc:"소스 엔진으로 무엇이든 만드는 대표 샌드박스." },
  { id:322330, title:"Don't Starve Together", genre:"샌드박스", tags:["서바이벌","샌드박스","크래프팅","다크","협동"], rating:9.2, year:2016, dev:"Klei Entertainment", desc:"독특한 아트의 협동 서바이벌 샌드박스." },
  { id:573090, title:"Oxygen Not Included", genre:"샌드박스", tags:["시뮬레이션","샌드박스","기지건설","과학","전략"], rating:9.4, year:2019, dev:"Klei Entertainment", desc:"우주 기지를 자유롭게 설계하는 시뮬레이션 샌드박스." },
  { id:346110, title:"ARK: Survival Evolved", genre:"샌드박스", tags:["서바이벌","샌드박스","공룡","건설","오픈월드"], rating:8.0, year:2017, dev:"Studio Wildcard", desc:"공룡과 함께하는 대규모 오픈월드 샌드박스." },
  { id:227300, title:"Euro Truck Simulator 2", genre:"샌드박스", tags:["트럭","시뮬레이션","샌드박스","운전","힐링"], rating:9.5, year:2012, dev:"SCS Software", desc:"유럽 대륙을 자유롭게 횡단하는 트럭 샌드박스." },
  { id:255710, title:"Cities: Skylines", genre:"샌드박스", tags:["도시건설","샌드박스","경영","모드","교통"], rating:9.1, year:2015, dev:"Colossal Order", desc:"나만의 도시를 자유롭게 건설하는 샌드박스 시뮬레이션." },
  { id:304930, title:"Unturned", genre:"샌드박스", tags:["샌드박스","좀비","무료","서바이벌","건설"], rating:8.4, year:2017, dev:"Smartly Dressed Games", desc:"블록 스타일 무료 좀비 샌드박스." },
  { id:892970, title:"Valheim", genre:"샌드박스", tags:["바이킹","샌드박스","건설","협동","오픈월드"], rating:9.2, year:2021, dev:"Iron Gate Studio", desc:"바이킹 세계에서 탐험하고 건설하는 샌드박스." },
  { id:1449560, title:"Timberborn", genre:"샌드박스", tags:["도시건설","비버","샌드박스","전략","자원관리"], rating:9.0, year:2021, dev:"Mechanistry", desc:"비버 문명을 건설하는 독창적 샌드박스." },
  { id:1604030, title:"V Rising", genre:"샌드박스", tags:["뱀파이어","샌드박스","건설","서바이벌","액션"], rating:8.8, year:2024, dev:"Stunlock Studios", desc:"뱀파이어 성을 짓고 영지를 넓히는 액션 샌드박스." },
  { id:211820, title:"Starbound", genre:"샌드박스", tags:["우주","2D","샌드박스","탐험","크래프팅"], rating:8.7, year:2016, dev:"Chucklefish", desc:"우주를 횡단하며 행성을 탐험하는 2D 샌드박스." },
  { id:1621690, title:"Core Keeper", genre:"샌드박스", tags:["지하","샌드박스","크래프팅","협동","탐험"], rating:8.8, year:2024, dev:"Pugstorm", desc:"거대한 지하 동굴의 자유로운 탐험과 건설." },
  { id:2016590, title:"Enshrouded", genre:"샌드박스", tags:["판타지","샌드박스","건설","RPG","서바이벌"], rating:8.3, year:2024, dev:"Keen Games", desc:"안개 낀 판타지 세계의 자유도 높은 샌드박스 RPG." },
  { id:1401590, title:"Manor Lords", genre:"샌드박스", tags:["중세","샌드박스","도시건설","전략","전투"], rating:8.3, year:2024, dev:"Slavic Magic", desc:"중세 영지를 자유롭게 건설하고 관리하는 샌드박스." },
  { id:304050, title:"House Flipper", genre:"샌드박스", tags:["시뮬레이션","인테리어","샌드박스","경영","1인칭"], rating:8.6, year:2018, dev:"Empyrean", desc:"집을 자유롭게 리모델링하는 인테리어 샌드박스." },
  { id:1066780, title:"PowerWash Simulator", genre:"샌드박스", tags:["시뮬레이션","청소","샌드박스","힐링","협동"], rating:9.2, year:2022, dev:"FuturLab", desc:"고압 세척기로 무엇이든 깨끗이 씻는 힐링 샌드박스." },
  { id:427520, title:"Factorio", genre:"샌드박스", tags:["자동화","공장","샌드박스","전략","중독성"], rating:9.7, year:2020, dev:"Wube Software", desc:"공장 자동화의 끝없는 최적화 샌드박스." },
  { id:736190, title:"Planet Coaster", genre:"샌드박스", tags:["놀이공원","건설","샌드박스","경영","창의적"], rating:8.8, year:2016, dev:"Frontier Developments", desc:"놀이공원을 자유롭게 설계하는 샌드박스 시뮬레이션." },

  // ── 추가 인디 (20) ──
  { id:1150690, title:"OMORI", genre:"인디", tags:["인디","RPG","심리","스토리","도트"], rating:9.6, year:2020, dev:"OMOCAT", desc:"밝은 외면과 어두운 내면이 대비되는 심리 RPG 명작." },
  { id:460580, title:"Cuphead", genre:"인디", tags:["인디","런앤건","보스전","카툰","도전적"], rating:9.4, year:2017, dev:"StudioMDHR", desc:"1930년대 카툰 감성의 하드코어 런앤건 명작." },
  { id:413150, title:"Stardew Valley", genre:"인디", tags:["인디","농장","힐링","시뮬레이션","협동"], rating:9.7, year:2016, dev:"ConcernedApe", desc:"인디 농장 시뮬레이션의 대명사." },
  { id:367520, title:"Hollow Knight", genre:"인디", tags:["인디","메트로바니아","탐험","도전적","2D"], rating:9.6, year:2017, dev:"Team Cherry", desc:"방대한 탐험과 뛰어난 전투의 인디 메트로바니아." },
  { id:976730, title:"Hades", genre:"인디", tags:["인디","로그라이크","액션","그리스신화","스토리"], rating:9.7, year:2020, dev:"Supergiant Games", desc:"스토리와 액션이 완벽한 조화를 이루는 인디 로그라이크." },
  { id:460950, title:"Katana ZERO", genre:"인디", tags:["인디","액션","네오누아르","도트","시간조작"], rating:9.4, year:2019, dev:"Askiisoft", desc:"한 방에 죽고 한 방에 죽이는 네오누아르 인디 액션." },
  { id:257850, title:"Hyper Light Drifter", genre:"인디", tags:["인디","액션","도트","탐험","어려움"], rating:9.2, year:2016, dev:"Heart Machine", desc:"아름다운 픽셀 세계의 빠른 액션 인디 게임." },
  { id:1056690, title:"Outer Wilds", genre:"인디", tags:["인디","탐험","우주","미스터리","퍼즐"], rating:9.7, year:2020, dev:"Mobius Digital", desc:"시간 루프 속 우주를 탐험하는 독창적 인디 어드벤처." },
  { id:391540, title:"Undertale", genre:"인디", tags:["인디","RPG","스토리","도트","선택"], rating:9.6, year:2015, dev:"tobyfox", desc:"전투를 피할 수 있는 혁신적 인디 RPG." },
  { id:588650, title:"Dead Cells", genre:"인디", tags:["인디","로그라이크","메트로바니아","액션","도전적"], rating:9.3, year:2018, dev:"Motion Twin", desc:"빠른 전투의 로그바니아 인디 명작." },
  { id:1568590, title:"Inscryption", genre:"인디", tags:["인디","카드","공포","덱빌딩","미스터리"], rating:9.5, year:2021, dev:"Daniel Mullins Games", desc:"장르를 깨부수는 미스터리 인디 카드 게임." },
  { id:534380, title:"Slay the Spire", genre:"인디", tags:["인디","카드","로그라이크","덱빌딩","전략"], rating:9.5, year:2019, dev:"MegaCrit", desc:"덱빌딩 로그라이크 장르를 개척한 인디 명작." },
  { id:310950, title:"Into the Breach", genre:"인디", tags:["인디","턴제","전략","메카","퍼즐"], rating:9.3, year:2018, dev:"Subset Games", desc:"작은 맵의 긴장감 넘치는 턴제 전략 인디." },
  { id:1295660, title:"Deaths Door", genre:"인디", tags:["인디","액션","탐험","보스전","아이소메트릭"], rating:9.0, year:2021, dev:"Acid Nerve", desc:"영혼을 수확하는 까마귀의 인디 액션 어드벤처." },
  { id:290340, title:"Limbo", genre:"인디", tags:["인디","퍼즐","플랫포머","흑백","분위기"], rating:9.1, year:2011, dev:"Playdead", desc:"흑백 실루엣 미학의 퍼즐 플랫포머 인디 명작." },
  { id:414340, title:"Hellblade: Senua's Sacrifice", genre:"인디", tags:["인디","액션","심리","북유럽","스토리"], rating:9.0, year:2017, dev:"Ninja Theory", desc:"정신질환을 예술적으로 묘사한 인디 액션 어드벤처." },
  { id:632360, title:"Risk of Rain 2", genre:"인디", tags:["인디","로그라이크","3D","협동","액션"], rating:9.3, year:2020, dev:"Hopoo Games", desc:"아이템 쌓기의 쾌감이 강한 3D 로그라이크 인디." },
  { id:457580, title:"Inside", genre:"인디", tags:["인디","퍼즐","플랫포머","디스토피아","분위기"], rating:9.4, year:2016, dev:"Playdead", desc:"Limbo 개발사의 디스토피아 퍼즐 플랫포머." },
  { id:570940, title:"Spiritfarer", genre:"인디", tags:["인디","힐링","경영","감성","스토리"], rating:9.2, year:2020, dev:"Thunder Lotus Games", desc:"영혼들을 배웅하는 감동적인 인디 경영 어드벤처." },
  { id:322170, title:"Geometry Dash", genre:"인디", tags:["인디","리듬","플랫포머","도전적","캐주얼"], rating:9.0, year:2014, dev:"RobTop Games", desc:"리듬에 맞춰 점프하는 중독성 강한 인디 플랫포머." },

  // ── 추가 레이싱 (20) ──
  { id:1222730, title:"Forza Horizon 5", genre:"레이싱", tags:["레이싱","오픈월드","자동차","멕시코","멀티플레이어"], rating:9.2, year:2021, dev:"Playground Games", desc:"멕시코 대자연을 달리는 오픈월드 레이싱 대표작." },
  { id:1551360, title:"Forza Horizon 4", genre:"레이싱", tags:["레이싱","오픈월드","자동차","영국","계절변화"], rating:9.1, year:2021, dev:"Playground Games", desc:"4계절이 변하는 영국을 달리는 오픈월드 레이싱." },
  { id:284160, title:"BeamNG.drive", genre:"레이싱", tags:["레이싱","물리","시뮬레이션","충돌","샌드박스"], rating:9.4, year:2015, dev:"BeamNG", desc:"현실적 물리 엔진의 차량 시뮬레이션 레이싱." },
  { id:310560, title:"DiRT Rally", genre:"레이싱", tags:["랠리","레이싱","오프로드","시뮬레이션","현실적"], rating:9.0, year:2015, dev:"Codemasters", desc:"현실적인 랠리 레이싱의 긴장감을 살린 명작." },
  { id:1293830, title:"F1 2021", genre:"레이싱", tags:["레이싱","F1","시뮬레이션","스토리","멀티플레이어"], rating:8.3, year:2021, dev:"Codemasters", desc:"F1 공식 라이선스의 포뮬러원 레이싱 게임." },
  { id:2036920, title:"F1 23", genre:"레이싱", tags:["레이싱","F1","시뮬레이션","멀티플레이어","경쟁"], rating:8.0, year:2023, dev:"Codemasters", desc:"F1 23 시즌을 재현한 공식 레이싱 게임." },
  { id:228380, title:"Project CARS", genre:"레이싱", tags:["레이싱","시뮬레이션","자동차","멀티플레이어","현실적"], rating:8.0, year:2015, dev:"Slightly Mad Studios", desc:"다양한 차종으로 즐기는 정통 레이싱 시뮬레이션." },
  { id:378860, title:"Project CARS 2", genre:"레이싱", tags:["레이싱","시뮬레이션","기상변화","현실적","멀티플레이어"], rating:8.3, year:2017, dev:"Slightly Mad Studios", desc:"날씨 변화와 리얼 물리가 돋보이는 레이싱 시뮬레이션." },
  { id:1293160, title:"GRID Legends", genre:"레이싱", tags:["레이싱","아케이드","스토리","멀티플레이어","자동차"], rating:8.0, year:2022, dev:"Codemasters", desc:"스토리 모드가 포함된 아케이드 레이싱 게임." },
  { id:1075200, title:"Wreckfest", genre:"레이싱", tags:["레이싱","파괴","물리","멀티플레이어","아케이드"], rating:8.9, year:2018, dev:"Bugbear Entertainment", desc:"차량 파괴와 충돌의 쾌감을 극대화한 레이싱." },
  { id:244050, title:"art of rally", genre:"레이싱", tags:["레이싱","랠리","인디","아트","미니멀"], rating:9.1, year:2020, dev:"Funselektor Labs", desc:"미니멀 아트 스타일의 탑뷰 랠리 인디 레이싱." },
  { id:1097130, title:"Circuit Superstars", genre:"레이싱", tags:["레이싱","탑뷰","인디","아케이드","멀티플레이어"], rating:8.2, year:2022, dev:"Original Fire Games", desc:"탑뷰 시점의 캐주얼 아케이드 레이싱 인디 게임." },
  { id:352170, title:"TrackMania Turbo", genre:"레이싱", tags:["레이싱","아케이드","스턴트","속도감","멀티플레이어"], rating:8.5, year:2016, dev:"Nadeo", desc:"초스피드 스턴트 레이싱의 끝판왕." },
  { id:1507390, title:"WRC Generations", genre:"레이싱", tags:["레이싱","랠리","WRC","시뮬레이션","하이브리드"], rating:8.0, year:2022, dev:"KT Racing", desc:"하이브리드 랠리카가 등장하는 WRC 공식 레이싱." },
  { id:2698940, title:"The Crew Motorfest", genre:"레이싱", tags:["레이싱","오픈월드","자동차","축제","멀티플레이어"], rating:7.8, year:2023, dev:"Ubisoft Ivory Tower", desc:"하와이 배경의 오픈월드 레이싱 페스티벌." },
  { id:1085510, title:"MotoGP 21", genre:"레이싱", tags:["레이싱","모터사이클","시뮬레이션","MotoGP","멀티플레이어"], rating:7.5, year:2021, dev:"Milestone S.r.l.", desc:"모토GP 공식 라이선스 바이크 레이싱." },
  { id:457140, title:"Rocket League", genre:"레이싱", tags:["레이싱","자동차","축구","멀티플레이어","경쟁"], rating:9.3, year:2015, dev:"Psyonix", desc:"차량을 활용한 초고속 액션 스포츠." },
  { id:1042550, title:"Snowrunner", genre:"레이싱", tags:["레이싱","오프로드","트럭","시뮬레이션","오픈월드"], rating:8.7, year:2021, dev:"Saber Interactive", desc:"험로를 돌파하며 화물을 배달하는 오프로드 레이싱." },
  { id:227300, title:"Euro Truck Simulator 2", genre:"레이싱", tags:["트럭","레이싱","시뮬레이션","유럽","힐링"], rating:9.5, year:2012, dev:"SCS Software", desc:"유럽 대륙을 트럭으로 달리는 시뮬레이션 레이싱." },
  { id:569480, title:"Drag", genre:"레이싱", tags:["레이싱","드래그","자동차","튜닝","아케이드"], rating:7.5, year:2018, dev:"Oronaan", desc:"드래그 레이싱에 특화된 아케이드 레이싱." },

];

const GENRE_CLASS = {
  "FPS":"genre-fps","RPG":"genre-rpg","액션":"genre-action","어드벤처":"genre-adv",
  "전략":"genre-strat","시뮬레이션":"genre-sim","공포":"genre-horror",
  "서바이벌":"genre-surv","격투":"genre-fight","스포츠":"genre-sports",
  "샌드박스":"genre-sandbox","인디":"genre-indie","레이싱":"genre-racing"
};

// ══════════════════════════════════════════════════════════════
// CONSTANTS & CONFIG
// ══════════════════════════════════════════════════════════════
const STORAGE_KEY = 'nexus-play-v4';
const THEME_KEY = 'nexus-play-theme';
const LIVE_REFRESH_MS = 10 * 60 * 1000;

const GENRE_STEAM_TAGS = {
  '전체':    ['Action','RPG','Adventure','Simulation','Strategy'],
  'FPS':     ['FPS','First-Person Shooter','Shooter'],
  'RPG':     ['RPG','Action RPG','JRPG','Turn-Based RPG'],
  '액션':    ['Action','Hack and Slash','Action-Adventure'],
  '어드벤처':['Adventure','Exploration','Narrative'],
  '전략':    ['Strategy','Turn-Based Strategy','Real Time Strategy','4X'],
  '시뮬레이션':['Simulation','Management','City Builder'],
  '공포':    ['Horror','Survival Horror','Psychological Horror'],
  '서바이벌':['Survival','Open World Survival Craft','Crafting'],
  '격투':    ['Fighting','Versus','Martial Arts'],
  '스포츠':  ['Sports','Soccer','Basketball','Football','Soccer Sim','Baseball','Tennis'],
  '샌드박스':['Sandbox','Building','Open World','Crafting','Automation','Colony Sim'],
  '인디':    ['Indie','2D','Indie Game'],
  '레이싱':  ['Racing','Driving','Automobile Sim'],
};

const TAG_EN_MAP = {
  'fps':'FPS','rpg':'RPG','액션':'Action','어드벤처':'Adventure',
  '전략':'Strategy','시뮬레이션':'Simulation','공포':'Horror','서바이벌':'Survival',
  '격투':'Fighting','스포츠':'Sports','샌드박스':'Open World','인디':'Indie','레이싱':'Racing',
  '로그라이크':'Roguelike','턴제':'Turn-Based Strategy','협동':'Co-op','스토리':'Story Rich',
  '오픈월드':'Open World','퍼즐':'Puzzle','소울즈라이크':'Souls-like','멀티플레이어':'Multiplayer',
  '싱글플레이어':'Singleplayer','플랫포머':'Platformer','핵앤슬래시':'Hack and Slash',
  '건설':'Building','크래프팅':'Crafting','메트로바니아':'Metroidvania','덱빌딩':'Deckbuilding',
  'jrpg':'JRPG','배틀로얄':'Battle Royale','전술':'Tactical','사이버펑크':'Cyberpunk',
  '아케이드':'Arcade','트럭':'Driving',
};

const EXCLUDED_TITLES = new Set([
  'Rocket League (Original)','FIFA 23','EA FC 25','NBA 2K23','Riders Republic'
]);

function dedupeByIdTitle(list) {
  const seen = new Set();
  return list.filter(g => {
    const k = g.id + '_' + g.title;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
}

const GAMES_CLEAN = dedupeByIdTitle([
  ...GAMES.filter(g => !EXCLUDED_TITLES.has(g.title)),
  ...EXTRA_GAMES,
  ...EXTRA_CURATED_GAMES
]);

let selectedIds = [];
let currentObFilter = '전체';
let currentGenreFilter = '전체';
let currentTab = 'rec';
let obSearch = '';
let genreSearch = '';
let steamRecLoaded = false;
let steamRecRequestSeq = 0;
let steamRecSelectionKey = '';
let hotLoaded = false;
let hotSortBy = 'ccu';
let hotGenreFilter = '전체';
let _hotRawData = { ccu: [], positive: [], average_2weeks: [] };
let _steamGenreCache = {};
let _steamGenreInflight = {};
let _prefetchStarted = false;
let _genreRequestToken = 0;

// ── Data: Local-first, then SteamSpy API ──
// GitHub Actions가 매일 data/ 폴더의 JSON을 갱신함
// 로컬 파일이 없으면 SteamSpy API 직접 호출 시도

const DATA_BASE = (typeof location !== 'undefined' && location.href.includes('file://'))
  ? null  // 로컬 파일 열기에선 fetch('./data/') 불가
  : './data/';

const TAG_FILE_MAP = {
  'FPS':'FPS','First-Person Shooter':'FPS','Shooter':'FPS',
  'RPG':'RPG','Action RPG':'RPG','JRPG':'RPG','Turn-Based RPG':'RPG',
  'Action':'Action','Hack and Slash':'Action','Action-Adventure':'Action',
  'Adventure':'Adventure','Exploration':'Adventure','Narrative':'Adventure',
  'Strategy':'Strategy','Turn-Based Strategy':'Strategy','Real Time Strategy':'Strategy','4X':'Strategy',
  'Simulation':'Simulation','Management':'Simulation','City Builder':'Simulation',
  'Horror':'Horror','Survival Horror':'Horror','Psychological Horror':'Horror',
  'Survival':'Survival','Open World Survival Craft':'Survival','Crafting':'Survival',
  'Fighting':'Fighting','Versus':'Fighting','Martial Arts':'Fighting',
  'Sports':'Sports','Soccer':'Sports','Basketball':'Sports',
  'Open World':'Open_World','Sandbox':'Open_World','Building':'Open_World',
  'Indie':'Indie','2D':'Indie','Pixel Graphics':'Indie',
  'Racing':'Racing','Driving':'Racing','Automobile Sim':'Racing','Rally':'Racing',
  'Roguelike':'Roguelike','Co-op':'Co-op','Multiplayer':'Multiplayer',
};

const _sessionDataCache = new Map();

function normalizeSteamList(data) {
  if (!data) return [];
  const list = Array.isArray(data) ? data : Object.values(data);
  return list.filter(a => a && (a.appid || a.id) && (a.name || a.title)).map(a => {
    const normalized = {
      ...a,
      appid: Number(a.appid || a.id),
      name: a.name || a.title,
      developer: a.developer || a.dev || '',
      tags: a.tags || Object.fromEntries(((a.tags_list || a.tags || []) || []).slice ? (a.tags_list || a.tags || []).slice(0,6).map(t => [t, 1]) : []),
    };
    normalized._genre = resolvePrimaryGenre(normalized);
    return normalized;
  });
}

function normalizeGenreItem(item, genre) {
  if (!item) return null;
  if (item.appid || item.name) {
    const canonicalAppid = resolveCanonicalAppId(item, item.name || item.title || '');
    const normalized = { ...item, appid: canonicalAppid, name: item.name || item.title || '', _source: item._source || 'steam' };
    normalized._genre = resolvePrimaryGenre(normalized);
    return normalized;
  }
  if (!(item.id && item.title)) return null;
  const canonicalAppid = resolveCanonicalAppId(item.id, item.title);
  return {
    appid: canonicalAppid,
    name: item.title,
    developer: item.dev || '',
    ccu: item.ccu ?? Math.round((item.rating || 7) * 3200),
    positive: item.positive ?? Math.round((item.rating || 7) * 10000),
    negative: item.negative ?? Math.max(10, Math.round((10 - (item.rating || 7)) * 700)),
    average_2weeks: item.average_2weeks ?? Math.round((item.rating || 7) * 90),
    tags: Object.fromEntries((item.tags || []).slice(0, 6).map(t => [t, 1])),
    _source: 'local',
    _genre: genre || item.genre || '전체'
  };
}

async function loadLocalData(path) {
  if (!DATA_BASE) return null;
  const cacheKey = `${path}::${Math.floor(Date.now() / LIVE_REFRESH_MS)}`;
  if (_sessionDataCache.has(cacheKey)) return _sessionDataCache.get(cacheKey);
  try {
    const sep = path.includes('?') ? '&' : '?';
    const res = await fetch(DATA_BASE + path + `${sep}v=${Math.floor(Date.now() / LIVE_REFRESH_MS)}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const d = await res.json();
    if (!d || d._note || (Array.isArray(d) ? d.length === 0 : Object.keys(d).length < 1)) return null;
    _sessionDataCache.set(cacheKey, d);
    return d;
  } catch { return null; }
}

async function fetchJsonViaAnyProxy(url, timeoutMs = 7000, preferFresh = false) {
  const targets = [
    url,
    `https://corsproxy.io/?${url}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  ];
  for (const target of targets) {
    try {
      const res = await fetch(target, {
        signal: AbortSignal.timeout(timeoutMs),
        cache: preferFresh ? 'no-store' : 'default',
      });
      if (!res.ok) continue;
      return await res.json();
    } catch {}
  }
  return null;
}
function buildSteamDetailMap(...sources) {
  const map = new Map();
  sources.flat().forEach(src => {
    normalizeSteamList(src).forEach(app => {
      const key = Number(app.appid || app.id || 0);
      if (key && !map.has(key)) map.set(key, app);
    });
  });
  return map;
}
async function fetchMostPlayedLive(forceRemote = false) {
  const chart = await fetchJsonViaAnyProxy('https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?format=json', 8000, forceRemote);
  const ranks = (chart?.response?.ranks || chart?.response?.items || chart?.ranks || chart?.items || [])
    .map((row, idx) => ({
      appid: Number(row.appid || row.app_id || row.id || row.appID || 0),
      rank: Number(row.rank || row.position || idx + 1),
      ccu: Number(row.current_players || row.current_player_count || row.concurrent_in_game || row.current_in_game || row.players_right_now || row.player_count || row.players || row.in_game || row.ccu || 0)
    }))
    .filter(row => row.appid > 0 && row.ccu > 0)
    .slice(0, 100);
  if (!ranks.length) return null;

  const [localMost, localHot, localTop, localOwned] = await Promise.all([
    loadLocalData('mostplayed.json').catch(()=>null),
    loadLocalData('hot.json').catch(()=>null),
    loadLocalData('top100.json').catch(()=>null),
    loadLocalData('top100owned.json').catch(()=>null),
  ]);
  const detailMap = buildSteamDetailMap(localMost, localHot, localTop, localOwned);

  return ranks.map((row, idx) => {
    const detail = detailMap.get(row.appid);
    const local = getGameById(row.appid);
    const title = detail?.name || local?.title || `App ${row.appid}`;
    const dev = detail?.developer || local?.dev || '';
    const tagsObj = detail?.tags || Object.fromEntries((local?.tags || []).map(t => [t, 1]));
    return {
      appid: row.appid,
      name: title,
      developer: dev,
      ccu: row.ccu,
      positive: Number(detail?.positive || local?.positive || Math.round((local?.rating || 7) * 10000) || 0),
      negative: Number(detail?.negative || local?.negative || Math.max(10, Math.round((10 - (local?.rating || 7)) * 700)) || 0),
      average_2weeks: Number(detail?.average_2weeks || 0),
      rank: row.rank || (idx + 1),
      tags: tagsObj,
      tags_list: detail?.tags_list || Object.keys(tagsObj || {}),
      genre: detail?.genre || local?.genre || '',
      _source: 'steam_charts_live'
    };
  });
}
async function steamspyFetch(params) {
  const {request, tag, appid, forceRemote = false} = params;

  if (!forceRemote) {
    if (request === 'mostplayed') {
      const d = await loadLocalData('mostplayed.json'); if (d) return d;
    }
    if (request === 'top100in2weeks') {
      const d = await loadLocalData('hot.json'); if (d) return d;
    }
    if (request === 'top100forever') {
      const d = await loadLocalData('top100.json'); if (d) return d;
    }
    if (request === 'top100owned') {
      const d = await loadLocalData('top100owned.json'); if (d) return d;
    }
    if (request === 'tag' && tag) {
      const f = TAG_FILE_MAP[tag];
      if (f) { const d = await loadLocalData('tags/' + f + '.json'); if (d) return d; }
    }
  }

  if (request === 'mostplayed') {
    const liveMostPlayed = await fetchMostPlayedLive(forceRemote);
    if (liveMostPlayed?.length) return liveMostPlayed;
  }

  const PROXIES = [
    'https://steamspy.com/api.php',
    'https://corsproxy.io/?https://steamspy.com/api.php',
    'https://api.allorigins.win/raw?url=https%3A//steamspy.com/api.php',
  ];
  const queryParams = new URLSearchParams();
  queryParams.set('request', request);
  if (tag) queryParams.set('tag', tag);
  if (appid) queryParams.set('appid', appid);
  const qs = queryParams.toString();
  for (const base of PROXIES) {
    try {
      const url = base + (base.includes('?') ? '&' : '?') + qs;
      const res = await fetch(url, { signal: AbortSignal.timeout(7000), cache: forceRemote ? 'no-store' : 'default' });
      if (!res.ok) continue;
      const d = await res.json();
      if (d && typeof d === 'object' && !d.error && !d._note) return d;
    } catch { }
  }
  return null;
}

function uniqueByAppId(list) {
  const seen = new Set();
  return list.filter(item => {
    const id = Number(item.appid || item.id);
    if (!id || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

const HOT_SORT_OPTIONS = ['ccu'];
const GENRE_MATCHERS = {
  'FPS': ['fps','first-person shooter','hero shooter','extraction shooter'],
  'RPG': ['rpg','jrpg','action rpg','crpg','party-based rpg','turn-based rpg'],
  '액션': ['action-adventure','hack and slash',"beat 'em up",'action'],
  '어드벤처': ['adventure','story rich','visual novel','exploration','narrative'],
  '전략': ['strategy','turn-based strategy','real time strategy','4x','grand strategy','tower defense'],
  '시뮬레이션': ['simulation','management','city builder','life sim','automation'],
  '공포': ['horror','survival horror','psychological horror'],
  '서바이벌': ['survival','open world survival craft'],
  '격투': ['fighting','martial arts','versus'],
  '스포츠': ['sports','soccer','football','basketball','baseball','tennis','hockey','golf'],
  '샌드박스': ['sandbox','base building','building','voxel','colony sim'],
  '인디': ['indie','indie game'],
  '레이싱': ['racing','driving','automobile sim','rally'],
};
function normalizeTextList(app) {
  const tags = Object.keys(app.tags || {}).map(t => t.toLowerCase());
  const tagsList = Array.isArray(app.tags_list) ? app.tags_list.map(t => String(t).toLowerCase()) : [];
  const genre = String(app.genre || app._genre || '').toLowerCase();
  return [...new Set([...tags, ...tagsList, genre])].filter(Boolean);
}
function matchesGenreApp(app, genre) {
  if (!app || genre === '전체') return true;
  const primary = resolvePrimaryGenre(app);
  return primary === genre;
}
function clearLiveDataCache() {
  _sessionDataCache.clear();
  hotLoaded = false;
  _steamGenreInflight = {};
}
function maybeRefreshLiveData(force = false) {
  clearLiveDataCache();
  window.__nexusLastRefresh = Date.now();
  if (force || currentTab === 'hot') loadHotGames(true, { forceRemote: force }).then(() => { if (currentTab === 'hot') renderHotGrid(); });
  if (force || currentTab === 'genre') loadSteamGenreData(currentGenreFilter, { force: true, forceRemote: force, silent: currentTab !== 'genre' }).then(() => {
    if (currentTab === 'genre') applyGenreGrid(_steamGenreCache[currentGenreFilter] || [], currentGenreFilter);
  });
}
function initLiveAutoRefresh() {
  if (window.__nexusLiveRefresh) return;
  window.__nexusLiveRefresh = setInterval(() => maybeRefreshLiveData(true), LIVE_REFRESH_MS);
  window.__nexusLastRefresh = Date.now();
  // Update countdown timer every second
  window.__nexusCountdown = setInterval(() => {
    const el = document.getElementById('hot-refresh-text');
    if (!el || currentTab !== 'hot') return;
    const elapsed = Date.now() - (window.__nexusLastRefresh || Date.now());
    const remaining = Math.max(0, LIVE_REFRESH_MS - elapsed);
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    el.textContent = `다음 갱신: ${mins}분 ${String(secs).padStart(2,'0')}초`;
  }, 1000);
}
function forceRefreshHot() {
  hotLoaded = false;
  clearLiveDataCache();
  window.__nexusLastRefresh = Date.now();
  const el = document.getElementById('hot-refresh-text');
  if (el) el.textContent = '갱신 중...';
  loadHotGames(false, { forceRemote: true });
  if (currentTab === 'genre') loadSteamGenreData(currentGenreFilter, { force: true, forceRemote: true, silent: false });
}
function applyThemeButtons() {
  const root = document.documentElement;
  const theme = root.dataset.theme || 'dark';
  document.getElementById('theme-dark-btn')?.classList.toggle('active', theme === 'dark');
  document.getElementById('theme-light-btn')?.classList.toggle('active', theme === 'light');
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, document.documentElement.dataset.theme);
  applyThemeButtons();
}
function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';
  applyThemeButtons();
}

async function prefetchCoreData() {
  if (_prefetchStarted) return;
  _prefetchStarted = true;
  const genresToWarm = ['전체', 'FPS', 'RPG', '액션', '어드벤처', '전략'];
  Promise.allSettled([
    loadHotGames(true),
    ...genresToWarm.map(g => loadSteamGenreData(g, { silent: true }))
  ]);
}


const THUMB_OVERRIDES = {
  "Coral Island": { appid:1158160 },
  "Killer Instinct": { appid:577940 },
  "Sons of the Forest": { appid:1326470 },
  "Marvel's Spider-Man Remastered": { appid:1817070 },
  "Marvel's Spider-Man: Miles Morales": { appid:1817190 },
  "EA SPORTS FC 26": { appid:3405690 },
  "EA SPORTS FC™ 26": { appid:3405690 },
  "EA SPORTS FC 25": { appid:2669320 },
  "EA SPORTS FC™ 25": { appid:2669320 },
  "Football Manager 26": { appid:3551340 },
  "Football Manager 2026": { appid:3551340 },
  "Football Manager 2025": { appid:2252570 },
  "Football Manager 2024": { appid:2252570 },
  "NBA 2K26": { appid:3472040 },
  "NBA 2K25": { appid:2688840 },
  "NBA 2K24": { appid:2338770 },
  "Heartopia": { appid:4025700 },
  "The Seven Deadly Sins: Origin": { appid:3679080 },
  "〈The Seven Deadly Sins: Origin〉": { appid:3679080 },
  "Battlefield 6": { appid:2622380 },
  "Battlefield™ 6": { appid:2622380 },
  "Battlefield V": { appid:1238810 },
  "Battlefield™ V": { appid:1238810 },
  "Battlefield 1": { appid:1238840 },
  "Battlefield™ 1": { appid:1238840 },
  "F1 24": { appid:2488620 },
  "F1® 24": { appid:2488620 },
  "F1 23": { appid:2108330 },
  "F1® 23": { appid:2108330 },
  "Madden NFL 26": { appid:3414400 },
  "Madden NFL 25": { appid:2583180 },
  "NHL 25": { appid:2769170 },
  "NHL™ 25": { appid:2769170 },
  "PGA TOUR 2K25": { appid:2813220 },
  "PGA TOUR 2K23": { appid:1588010 },
  "TopSpin 2K25": { appid:1785650 },
  "WWE 2K25": { appid:2882430 },
  "WWE 2K24": { appid:2315690 },
  "EA SPORTS FC 24": { appid:2195250 },
  "EA SPORTS FC™ 24": { appid:2195250 },
  "NBA 2K23": { appid:1919590 },
  "Premium Bowling": { appid:898580 },
  "Circuit Superstars": { appid:1097130 },
  "The Crew Motorfest": { appid:2698940 },
  "eFootball 2025": { appid:1665460 },
  "eFootball™ 2025": { appid:1665460 },
  "eFootball 2024": { appid:1665460 },
  "eFootball™ 2024": { appid:1665460 },
  "TEKKEN 8": { appid:1778820 },
  "Tekken 8": { appid:1778820 },
  "Street Fighter 6": { appid:1364780 },
  "Street Fighter™ 6": { appid:1364780 },
  "Need for Speed Unbound": { appid:1846380 },
  "Need for Speed™ Unbound": { appid:1846380 },
  "STAR WARS Jedi: Survivor": { appid:1774580 },
  "STAR WARS Jedi: Survivor™": { appid:1774580 },
  "Star Wars Outlaws": { appid:2842070 },
  "Dragon Ball: Sparking! ZERO": { appid:1790600 },
  "DRAGON BALL: Sparking! ZERO": { appid:1790600 },
  "Monster Hunter Wilds": { appid:2246340 },
  "MONSTER HUNTER WILDS": { appid:2246340 },
  "Satisfactory": { appid:526870 },
  "Path of Exile 2": { appid:2694490 },
  "Warhammer 40,000: Space Marine 2": { appid:2183900 },
  "Black Myth: Wukong": { appid:2358720 },
  "Ghost of Tsushima DIRECTOR'S CUT": { appid:2215430 },
  "Civilization VII": { appid:1295660 },
  "Sid Meier's Civilization VII": { appid:1295660 },
  "Sid Meier's Civilization® VII": { appid:1295660 },
  "Marvel Rivals": { appid:2767030 },
  "Delta Force": { appid:2612830 },
  "Palworld": { appid:1623730 },
  "Enshrouded": { appid:1203620 },
  "Helldivers 2": { appid:553850 },
  "HELLDIVERS™ 2": { appid:553850 },
  "Wuthering Waves": { appid:2685760 },
  "The First Descendant": { appid:2074920 },
  "Once Human": { appid:2139460 },
  "Forza Motorsport": { appid:2440510 },
  "Forza Horizon 5": { appid:1551360 },
  "Microsoft Flight Simulator 2024": { appid:2537590 },
  "Microsoft Flight Simulator": { appid:1250410 },
  "Granblue Fantasy Versus": { appid:1090630 },
  "Dragon Ball FighterZ": { appid:678950 },
  "Mortal Kombat X": { appid:307780 },
  "Injustice: Gods Among Us Ultimate Edition": { appid:242700 },
  "Under Night In-Birth II Sys:Celes": { appid:2076010 },
  "UNDER NIGHT IN-BIRTH II Sys:Celes": { appid:2076010 },
  "Blade Strangers": { appid:565170 },
  "Power Rangers: Battle for the Grid": { appid:1110100 },
  "Them's Fightin' Herds": { appid:574980 },
  "Rivals of Aether": { appid:383980 },
  "Skullgirls 2nd Encore": { appid:245170 },
  "MultiVersus": { appid:1818750 },
  "Multiversus": { appid:1818750 },
  "TEKKEN 8": { appid:1778820 },
  "Brawlhalla": { appid:291550 },
  "Cuphead": { appid:268910 },
  "Enshrouded": { appid:1203620 },
  "Frostpunk": { appid:323190 },
  "Frostpunk 2": { appid:1601580 },
  "Garry's Mod": { appid:4000 },
  "Golf With Your Friends": { appid:431240 },
  "Hades": { appid:1145360 },
  "House Flipper": { appid:613100 },
  "Into the Breach": { appid:590380 },
  "Monster Hunter: World": { appid:582010 },
  "Outer Wilds": { appid:753640 },
  "Oxygen Not Included": { appid:457140 },
  "Persona 4 Golden": { appid:1113000 },
  "Pillars of Eternity II: Deadfire": { appid:560130 },
  "Planet Coaster": { appid:493340 },
  "Planet Zoo": { appid:703080 },
  "PowerWash Simulator": { appid:1290000 },
  "Rocket League": { appid:252950 },
  "Sifu": { appid:2138710 },
  "Skater XL": { appid:962730 },
  "Slay the Spire": { appid:646570 },
  "Sleeping Dogs: Definitive Edition": { appid:307690 },
  "Spiritfarer": { appid:972660 },
  "The Outer Worlds": { appid:578650 },
  "Two Point Campus": { appid:1649080 },
  "Two Point Hospital": { appid:535930 },
  "Victoria 3": { appid:529340 },
  "Wreckfest": { appid:228380 },
};
const EXACT_GENRE_OVERRIDES = {
  3405690: '스포츠',   // EA SPORTS FC 26
  3551340: '스포츠',   // Football Manager 26
  3472040: '스포츠',   // NBA 2K26
  2338770: '스포츠',   // NBA 2K24
  2688840: '스포츠',   // NBA 2K25
  2252570: '스포츠',   // Football Manager 2024
  2669320: '스포츠',   // EA SPORTS FC 25
  1665460: '스포츠',   // eFootball
  1588010: '스포츠',   // PGA TOUR 2K23
  1785650: '스포츠',   // TopSpin 2K25
  2813220: '스포츠',   // PGA TOUR 2K25
  2882430: '스포츠',   // WWE 2K25
  2315690: '스포츠',   // WWE 2K24
  2195250: '스포츠',   // EA SPORTS FC 24
  1919590: '스포츠',   // NBA 2K23
  898580: '스포츠',    // Premium Bowling
  1097130: '레이싱',   // Circuit Superstars
  2698940: '레이싱',   // The Crew Motorfest
  2108330: '스포츠',   // F1 23
  2488620: '스포츠',   // F1 24
  4025700: '시뮬레이션', // Heartopia
  3679080: 'RPG',      // The Seven Deadly Sins: Origin
  1326470: '공포',     // Sons of the Forest
  2622380: 'FPS',      // Battlefield 6
  1238810: 'FPS',      // Battlefield V
  1238840: 'FPS',      // Battlefield 1
  2246340: 'RPG',      // Monster Hunter Wilds
  553850:  'FPS',      // Helldivers 2
  1364780: '격투',     // Street Fighter 6
  1778820: '격투',     // TEKKEN 8
  1790600: '격투',     // Dragon Ball Sparking ZERO
  2767030: 'FPS',      // Marvel Rivals
  2612830: 'FPS',      // Delta Force
  1551360: '레이싱',   // Forza Horizon 5
  2440510: '레이싱',   // Forza Motorsport
  1250410: '시뮬레이션', // Microsoft Flight Simulator
  2537590: '시뮬레이션', // Microsoft Flight Simulator 2024
  1295660: '전략',     // Civilization VII
};
function normalizeTitleKey(v='') {
  return String(v)
    .replace(/[™®©]/g, '')
    .replace(/[〈〉<>]/g, '')
    .replace(/\s*[:：]\s*/g, ': ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}
const THUMB_OVERRIDES_NORMALIZED = Object.fromEntries(
  Object.entries(THUMB_OVERRIDES).map(([k,v]) => [normalizeTitleKey(k), v])
);

const POPULAR_GAME_IDS = new Set([
  730,570,578080,1172470,1245620,1086940,271590,1174180,381210,440,252490,550,4000,289070,620,582010,292030,1091500,367520,413150,359550,553850,107410,431960,3240220,236390,1144200,1085660,252490,105600,2357570,440,227300,
  // 추가 인기 게임
  1623730,2358720,2215430,1817070,1593500,2379780,1868140,1794680,892970,526870,1627720,1888160,1942280,1282100,814380,374320,1145360,632470,435150,1113000,1687950,1462040,782330,546560,548430,1237970,581320,553850,1361210,671860,393380,686810,
  883710,952060,418370,412020,214490,282140,1693980,275850,1604030,648800,815370,962130,1172620,1426210,1332010,753640,646570,632360,
  2246340,2767030,2612830,2694490,2183900,1295660,1364780,1778820,1790600,1551360,2440510,
  // 스포츠/레이싱 인기
  3405690,3551340,3472040,2669320,2488620,2882430,1665460
]);
const LEGACY_RECOMMEND_BLOCKLIST = new Set([10,20,30,40,50,60,70,80,130,220,240,300,320,340,360,380,400,420,440,500,550,620,1250,4000,9390,227300]);
const MODERN_RECOMMEND_KEEP = new Set([730,578080,1172470,1245620,1086940,271590,1174180,381210,252490,553850,431960,3240220,236390,1144200,2357570,1623730,2358720,2215430,1817070,1593500,1868140,1794680,892970,526870,1627720,1888160,1942280,1282100,1687950,1462040,782330,548430,1237970,581320,1361210,671860,393380,686810,1693980,1604030,1172620,1426210,1332010,753640,646570,632360,2246340,2767030,2612830,2694490,2183900,1295660,1364780,1778820,1790600,1551360,2440510,3405690,3551340,3472040,2669320,2488620,2882430,1665460]);
function getAppYear(app) {
  const local = getGameById(Number(app?.appid || app?.id));
  return Number(local?.year || app?.year || 0) || 0;
}
function isRecommendableModernGame(app) {
  const appid = Number(app?.appid || app?.id || 0);
  const year = getAppYear(app);
  const rating = Number(app?.rating || getGameById(appid)?.rating || 0) || 0;
  if (LEGACY_RECOMMEND_BLOCKLIST.has(appid)) return false;
  if (MODERN_RECOMMEND_KEEP.has(appid)) return true;
  if (year && year < 2015) return false;
  if (year >= 2021) return true;
  if (year >= 2018 && rating >= 8.0) return true;
  return false;
}
function recommendationPopularityBonus(app) {
  const appid = Number(app?.appid || app?.id || 0);
  const year = getAppYear(app);
  let bonus = 0;
  if (POPULAR_GAME_IDS.has(appid)) bonus += 18;
  if (MODERN_RECOMMEND_KEEP.has(appid)) bonus += 12;
  if (year >= 2023) bonus += 12;
  else if (year >= 2021) bonus += 8;
  else if (year >= 2018) bonus += 4;
  else if (year && year < 2015) bonus -= 20;
  return bonus;
}

function resolvePrimaryGenre(app) {
  if (!app) return '전체';
  const appid = Number(app.appid || app.id);
  if (EXACT_GENRE_OVERRIDES[appid]) return EXACT_GENRE_OVERRIDES[appid];
  const local = getGameById(appid);
  if (local?.genre) return local.genre;
  const haystack = normalizeTextList(app).join(' | ');
  const genreOrder = ['FPS','격투','스포츠','레이싱','공포','서바이벌','RPG','전략','시뮬레이션','샌드박스','어드벤처','액션','인디'];
  for (const genre of genreOrder) {
    const aliases = (GENRE_MATCHERS[genre] || []).map(v => v.toLowerCase());
    if (aliases.some(alias => haystack.includes(alias))) return genre;
  }
  return app._genre || app.genre || '전체';
}

function genreClass(g)    { return GENRE_CLASS[g] || ''; }
function getGameById(id)  { return GAMES_CLEAN.find(g => g.id === id); }
function resolveCanonicalAppId(gameOrId, title='') {
  if (typeof gameOrId === 'object' && gameOrId) {
    const rawTitle = gameOrId.title || gameOrId.name || title;
    const titleKey = normalizeTitleKey(rawTitle);
    return Number((THUMB_OVERRIDES_NORMALIZED[titleKey]?.appid) || gameOrId.appid || gameOrId.id || 0);
  }
  const titleKey = normalizeTitleKey(title);
  return Number((THUMB_OVERRIDES_NORMALIZED[titleKey]?.appid) || gameOrId || 0);
}
function getThumbAppId(gameOrId, title='') {
  return resolveCanonicalAppId(gameOrId, title);
}
function imgUrl(gameOrId, title='')       { const id=getThumbAppId(gameOrId,title); return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg`; }
function imgUrlAlt(gameOrId, title='')    { const id=getThumbAppId(gameOrId,title); return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/capsule_616x353.jpg`; }
function storeUrl(gameOrId, title='')     { const id=getThumbAppId(gameOrId,title); return `https://store.steampowered.com/app/${id}`; }

function filterBySearch(g, q) {
  if (!q) return true;
  return g.title.toLowerCase().includes(q.toLowerCase());
}

function formatCCU(n) {
  if (!n || n < 1) return null;
  if (n >= 1e6) return (n/1e6).toFixed(1)+'M';
  if (n >= 1e3) return (n/1e3).toFixed(1)+'K';
  return String(n);
}

function getScoreLabel(pos, neg) {
  if (!pos && !neg) return null;
  const pct = Math.round(pos / (pos + neg) * 100);
  if (pct >= 95) return { text:`압도적 긍정 ${pct}%`, color:'#4ade80' };
  if (pct >= 80) return { text:`매우 긍정 ${pct}%`,   color:'#4ade80' };
  if (pct >= 70) return { text:`긍정 ${pct}%`,         color:'#86efac' };
  if (pct >= 40) return { text:`복합 ${pct}%`,         color:'#fbbf24' };
  return             { text:`부정 ${pct}%`,            color:'#f87171' };
}


function resolveSteamThumbId(appOrId, title='') { return getThumbAppId(typeof appOrId === 'object' ? { id: Number(appOrId.appid || appOrId.id), title: appOrId.name || appOrId.title || title } : Number(appOrId), title); }
function steamThumb(appOrId, title='')    { const id = resolveSteamThumbId(appOrId, title); return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg`; }
function steamThumbAlt(appOrId, title='') { const id = resolveSteamThumbId(appOrId, title); return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${id}/header.jpg`; }

function isTrustedThumbnailMapping(appOrGame) {
  if (!appOrGame) return false;
  const rawTitle = appOrGame.name || appOrGame.title || '';
  const titleKey = normalizeTitleKey(rawTitle);
  const thumbId = resolveSteamThumbId(appOrGame, rawTitle);
  if (!thumbId) return false;
  const overrideId = THUMB_OVERRIDES_NORMALIZED[titleKey]?.appid ? Number(THUMB_OVERRIDES_NORMALIZED[titleKey].appid) : 0;
  if (overrideId && overrideId === thumbId) return true;
  const local = getGameById(Number(thumbId));
  if (local && normalizeTitleKey(local.title) === titleKey) return true;
  const sourceId = Number(appOrGame.appid || appOrGame.id || 0);
  if (sourceId && sourceId === thumbId) return true;
  return false;
}
function filterTrustedThumbnailGames(list) {
  return (list || []).filter(item => isTrustedThumbnailMapping(item));
}

function makeSteamCard(app, rank, options = {}) {
  if (options.safeOnly && !isTrustedThumbnailMapping(app)) return '';
  const tags = Object.keys(app.tags || {}).slice(0, 4);
  const ccu  = formatCCU(app.ccu);
  const score = getScoreLabel(app.positive||0, app.negative||0);
  const showLive = options.showLive === true;
  const thumbId = resolveSteamThumbId(app, app.name);
  const imgSrc = steamThumb(app, app.name);
  const fallback1 = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg`;
  const fallback2 = `https://cdn.akamai.steamstatic.com/steam/apps/${thumbId}/capsule_616x353.jpg`;
  const fallback3 = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg`;
  const fallback4 = `https://cdn.akamai.steamstatic.com/steam/apps/${thumbId}/capsule_231x87.jpg`;
  return `
    <a class="steam-card" href="https://store.steampowered.com/app/${thumbId}" target="_blank" rel="noopener">
      <div class="steam-card-img-wrap">
        <img class="steam-card-img" src="${imgSrc}" alt="${(app.name||'').replace(/"/g,'')}" loading="lazy"
             onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src='${fallback1}'}else if(this.dataset.fb==='1'){this.dataset.fb='2';this.src='${fallback2}'}else if(this.dataset.fb==='2'){this.dataset.fb='3';this.src='${fallback3}'}else if(this.dataset.fb==='3'){this.dataset.fb='4';this.src='${fallback4}'}else{this.style.display='none'}">
        ${rank ? `<div class="steam-card-rank">${rank}</div>` : ''}
      </div>
      <div class="steam-card-body">
        <div class="steam-card-title">${app.name||''}</div>
        <div class="steam-card-stats">
          ${showLive && ccu ? `<div class="steam-stat steam-stat-live"><span class="steam-stat-dot"></span>${ccu} 플레이 중</div>` : ''}
          ${score ? `<div class="steam-stat" style="color:${score.color}">${score.text}</div>` : ''}
        </div>
        <div class="steam-card-tags">${tags.map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>
      </div>
      <div class="steam-card-footer">
        <div class="steam-card-dev">${app.developer||''}</div>
        <span class="steam-card-link">Steam ↗</span>
      </div>
    </a>`;
}

// ══════════════════════════════════════════════════════════════
// ONBOARDING RENDER
// ══════════════════════════════════════════════════════════════
function renderObFilter() {
  const el = document.getElementById('ob-filter');
  if (!el) return;
  const genres = ['전체', ...new Set(GAMES_CLEAN.map(g => g.genre))];
  el.innerHTML = genres.map(g =>
    `<button class="ob-filter-btn ${g===currentObFilter?'active':''}" onclick="setObFilter('${g}')">${g}</button>`
  ).join('');
}

function setObFilter(g) {
  currentObFilter = g;
  renderObFilter();
  renderObGrid();
}

function renderObGrid() {
  const grid = document.getElementById('ob-grid');
  if (!grid) return;
  const games = GAMES_CLEAN.filter(g =>
    (currentObFilter==='전체' || g.genre===currentObFilter) && filterBySearch(g, obSearch)
  );
  if (!games.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#6b6b8f;padding:40px">검색 결과가 없습니다.</div>';
    return;
  }
  grid.innerHTML = games.map((g, i) => {
    const thumbId = getThumbAppId(g);
    return `
    <div class="ob-card ${selectedIds.includes(g.id)?'selected':''}" data-id="${g.id}"
         onclick="toggleSelect(${g.id})" style="animation-delay:${i*0.008}s">
      <img src="${imgUrl(g)}" alt="${g.title}" loading="lazy"
           onerror="if(!this.dataset.t){this.dataset.t=1;this.src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg';}else if(this.dataset.t==1){this.dataset.t=2;this.src='${imgUrlAlt(g)}';}else if(this.dataset.t==2){this.dataset.t=3;this.src='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg';}else{this.closest('.ob-card').style.background='var(--surface3)';this.style.display='none';}">
      <div class="ob-card-genre-badge ${genreClass(g.genre)}">${g.genre}</div>
      <div class="ob-card-overlay">
        <div class="ob-card-title">${g.title}</div>
        <div class="ob-card-meta-row">${g.year||''} · ${(g.tags||[]).slice(0,2).join(' · ')}</div>
      </div>
      <div class="ob-card-check">✓</div>
    </div>`;
  }).join('');
}

function toggleSelect(id) {
  const card = document.querySelector(`.ob-card[data-id="${id}"]`);
  if (selectedIds.includes(id)) {
    selectedIds = selectedIds.filter(x => x !== id);
    card?.classList.remove('selected');
  } else {
    if (selectedIds.length >= 10) {
      if (card) { card.style.outline='2px solid var(--danger)'; setTimeout(()=>{card.style.outline=''},600); }
      return;
    }
    selectedIds.push(id);
    card?.classList.add('selected');
  }
  updateObUI();
  persistSelection();
}

function updateObUI() {
  const n = selectedIds.length;
  const countEl = document.getElementById('ob-count');
  const progressEl = document.getElementById('ob-progress');
  const btn = document.getElementById('ob-start-btn');
  const hint = document.getElementById('ob-hint');
  if (countEl) countEl.textContent = n;
  if (progressEl) progressEl.style.width = (n*10)+'%';
  if (btn && hint) {
    if (n === 10) {
      btn.classList.add('ready'); hint.textContent = '✨ 준비 완료!'; hint.style.color = 'var(--accent)';
    } else {
      btn.classList.remove('ready'); hint.textContent = (10-n)+'개 더 선택하면 활성화돼요'; hint.style.color = '';
    }
  }
}

// ══════════════════════════════════════════════════════════════
// MAIN APP RENDER
// ══════════════════════════════════════════════════════════════
function makeGameCard(g, delay) {
  return `
    <div class="game-card" onclick="openModal(${g.id})" style="animation-delay:${delay||0}s">
      <img class="game-card-img" src="${imgUrl(g)}" alt="${g.title}" loading="lazy"
           onerror="this.src='${imgUrlAlt(g)}';this.onerror=function(){this.style.background='var(--surface3)'}">
      <div class="game-card-body">
        <div class="game-card-title">${g.title}</div>
        <div class="game-card-meta">
          <span class="game-card-genre ${genreClass(g.genre)}">${g.genre}</span>
          <div class="game-card-rating">★ ${g.rating||'-'}</div>
        </div>
        <div class="game-card-tags">${(g.tags||[]).slice(0,4).map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>
      </div>
      <div class="game-card-footer">
        <div class="game-card-dev">${g.dev}</div>
        <a href="${storeUrl(g)}" target="_blank" class="game-card-link" onclick="event.stopPropagation()">Steam ↗</a>
      </div>
    </div>`;
}

function renderHeroGrid(games) {
  const el = document.getElementById('hero-grid');
  if (!el) return;
  if (!games.length) { el.innerHTML = '<div class="hero-empty" style="grid-column:1/-1">추천 결과 없음</div>'; return; }
  el.innerHTML = games.map((g, i) => {
    const thumbId = getThumbAppId(g);
    return `
    <div class="hero-card" onclick="openModal(${g.id})" style="animation-delay:${i*0.08}s">
      <img src="${imgUrl(g)}" alt="${g.title}"
           onerror="if(!this.dataset.t){this.dataset.t=1;this.src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg';}else if(this.dataset.t==1){this.dataset.t=2;this.src='${imgUrlAlt(g)}';}else if(this.dataset.t==2){this.dataset.t=3;this.src='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg';}else{this.style.display='none';}">
      <div class="hero-card-overlay">
        <div class="hero-rank">${i+1}</div>
        <span class="hero-genre-badge ${genreClass(g.genre)}">${g.genre}</span>
        <div class="hero-title">${g.title}</div>
        <div class="hero-meta">
          <div class="hero-rating">★ ${g.rating||'추천'}</div>
          <div class="hero-dev">${g.dev} · ${g.year||''}</div>
        </div>
        <div class="hero-tags">${(g.tags||[]).slice(0,3).map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>
        <a href="${storeUrl(g)}" target="_blank" class="steam-link" onclick="event.stopPropagation()">Steam에서 보기</a>
      </div>
    </div>`;
  }).join('');
}

function renderMoreGrid(games) {
  const el = document.getElementById('more-grid');
  if (!el) return;
  el.innerHTML = games.length ? games.map((g,i)=>makeGameCard(g,i*0.03)).join('') :
    '<div class="grid-empty" style="grid-column:1/-1">추천 결과 없음</div>';
}

function getSelectionKey() {
  return [...selectedIds].sort((a,b)=>a-b).join(',');
}

function getLocalRecommendations() {
  const selected = GAMES_CLEAN.filter(g => selectedIds.includes(g.id));
  const tagW = {}, genreW = {};
  selected.forEach(g => {
    genreW[g.genre] = (genreW[g.genre]||0) + 3;
    (g.tags||[]).forEach(t => { tagW[t] = (tagW[t]||0)+1; });
  });
  const currentYear = new Date().getFullYear();
  return GAMES_CLEAN
    .filter(g => !selectedIds.includes(g.id))
    .filter(g => isRecommendableModernGame(g))
    .map(g => {
      let s = (genreW[g.genre]||0)*5 + 2;
      (g.tags||[]).forEach(t => { s += (tagW[t]||0)*2.4; });
      s += (g.rating||7)*1.2;
      if (g.year) {
        const age = currentYear - g.year;
        if (age <= 1) s += 14;
        else if (age <= 3) s += 10;
        else if (age <= 5) s += 6;
        else if (age <= 8) s += 2;
        else s -= Math.min(8, (age - 8) * 0.9);
      }
      s += recommendationPopularityBonus(g);
      if ((g.rating||0) >= 9.0) s += 5;
      else if ((g.rating||0) >= 8.5) s += 3;
      return {...g, _score:s};
    })
    .sort((a,b) => b._score - a._score);
}

function getTopTags(limit=6) {
  const selected = GAMES_CLEAN.filter(g => selectedIds.includes(g.id));
  const tc = {};
  selected.forEach(g => {
    (g.tags||[]).forEach(t => { const en=TAG_EN_MAP[t]; if(en){ tc[en]=(tc[en]||0)+1; } });
    const ge=TAG_EN_MAP[g.genre]||g.genre;
    tc[ge]=(tc[ge]||0)+2;
  });
  return Object.entries(tc).sort((a,b)=>b[1]-a[1]).slice(0,limit).map(([t])=>t);
}

async function loadSteamRecommendations() {
  const selectionKey = selectedIds.slice().sort((a,b)=>a-b).join(',');
  if (steamRecLoaded && window.__steamRecSelectionKey === selectionKey) return;
  window.__steamRecSelectionKey = selectionKey;
  const requestToken = (window.__steamRecRequestToken = (window.__steamRecRequestToken || 0) + 1);
  const heroEl = document.getElementById('hero-grid');
  const moreEl = document.getElementById('more-grid');
  if (!heroEl || !moreEl) return;

  const tags = getTopTags(8);
  if (!tags.length) return;

  return;

  const [owned, forever, ...tagResults] = await Promise.all([
    steamspyFetch({request:'top100owned', forceRemote: !!opts.forceRemote}).catch(()=>null),
    steamspyFetch({request:'top100forever', forceRemote: !!opts.forceRemote}).catch(()=>null),
    ...tags.map((tag, ti) => steamspyFetch({request:'tag', tag}).then(d=>({d,w:tags.length-ti})).catch(()=>({d:null,w:0})))
  ]);

  const map = {};
  tagResults.forEach(({d,w}) => {
    if (!d) return;
    Object.values(d).forEach(app => {
      if (!app.appid || !app.name) return;
      if (selectedIds.includes(Number(app.appid))) return;
      const k = app.appid;
      if (!map[k]) map[k] = {...app, _score:0};
      map[k]._score += w*3 + Math.log1p(app.ccu||0)*2;
      const tot=(app.positive||0)+(app.negative||0);
      if (tot>100) map[k]._score += (app.positive/tot)*8;
    });
  });

  [owned, forever].forEach((dataset, idx) => {
    if (!dataset) return;
    Object.values(dataset).forEach((app, rank) => {
      if (!app.appid || !app.name) return;
      if (selectedIds.includes(Number(app.appid))) return;
      const k = app.appid;
      if (!map[k]) map[k] = {...app, _score:0};
      map[k]._score += idx === 0 ? Math.max(0, 120 - rank) * 0.18 : Math.max(0, 120 - rank) * 0.14;
      map[k]._score += Math.log1p(app.owners || 0) * 0.6;
    });
  });

  const sorted = filterTrustedThumbnailGames(Object.values(map)
    .map(app => {
      const appid = Number(app.appid);
      const year = getAppYear(app);
      const local = getGameById(appid);
      const recEligible = isRecommendableModernGame({ ...app, year, rating: local?.rating });
      return {
        ...app,
        _year: year,
        _eligible: recEligible,
        _score: app._score
          + recommendationPopularityBonus({ ...app, year, rating: local?.rating })
          + Math.log1p(app.ccu||0) * 2.4
          + Math.log1p(app.positive||0) * 0.55
          + Math.log1p(app.owners||0) * 0.38
      };
    })
    .filter(app => app._eligible)
    .filter(app => (app.ccu||0) >= 1000 || (app.owners||0) >= 750000 || (app.positive||0) >= 5000 || POPULAR_GAME_IDS.has(Number(app.appid)))
    .sort((a,b)=>b._score-a._score)
    .slice(0,120));
  if (!sorted.length) {
    if (requestToken !== window.__steamRecRequestToken || selectionKey !== window.__steamRecSelectionKey) return;
    // Steam API 실패 시 → 내장 게임 추천으로 최종 표시
    const local = getLocalRecommendations();
    renderHeroGrid(local.slice(0,3));
    renderMoreGrid(local.slice(3,60));
    const hs = document.getElementById('hero-grid')?.closest('.rec-hero');
    if (hs && !hs.querySelector('.rec-source-badge')) {
      const b = document.createElement('div');
      b.className = 'rec-source-badge';
      b.innerHTML = '✦ 내장 게임 카탈로그 기반 추천';
      hs.insertBefore(b, hs.firstChild);
    }
    return;
  }

  if (requestToken !== window.__steamRecRequestToken || selectionKey !== window.__steamRecSelectionKey) return;
  steamRecLoaded = true;
  const hs = heroEl.closest('.rec-hero');
  if (hs && !hs.querySelector('.rec-source-badge')) {
    const b = document.createElement('div');
    b.className = 'rec-source-badge';
    b.innerHTML = '✦ Steam 전체 카탈로그 기반';
    hs.insertBefore(b, hs.firstChild);
  }

  heroEl.innerHTML = sorted.slice(0,3).map((app,i)=>{
    const thumbId = resolveSteamThumbId(app, app.name);
    return `
    <div class="hero-card" onclick="window.open('https://store.steampowered.com/app/${thumbId}','_blank')" style="animation-delay:${i*0.08}s">
      <img src="${steamThumb(app, app.name)}" alt="${app.name}"
           onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg'}else if(this.dataset.fb==='1'){this.dataset.fb='2';this.src='https://cdn.akamai.steamstatic.com/steam/apps/${thumbId}/capsule_616x353.jpg'}else{this.dataset.fb='3';this.src='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${thumbId}/header.jpg'}">
      <div class="hero-card-overlay">
        <div class="hero-rank">${i+1}</div>
        <div class="hero-title">${app.name}</div>
        <div class="hero-meta">
          <div class="hero-dev">${app.developer||''}</div>
        </div>
        <div class="hero-tags">${Object.keys(app.tags||{}).slice(0,3).map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>
        <a href="https://store.steampowered.com/app/${thumbId}" target="_blank" class="steam-link" onclick="event.stopPropagation()">Steam에서 보기</a>
      </div>
    </div>`;
  }).join('');

  moreEl.innerHTML = sorted.slice(3,120).map(app=>makeSteamCard(app,null,{ showLive:false, safeOnly:true })).join('') || '<div class="grid-empty" style="grid-column:1/-1">추천 결과 없음</div>';
}

// ── Genre tab ──
const ORDERED_GENRES2 = ['전체','FPS','RPG','액션','어드벤처','전략','시뮬레이션','공포','서바이벌','격투','스포츠','샌드박스','인디','레이싱'];

function renderGenreTab() {
  const pills = document.getElementById('genre-pills');
  if (!pills) return;
  pills.innerHTML = ORDERED_GENRES2.map(g =>
    `<button class="genre-pill ${g==='전체'?'':genreClass(g)} ${g===currentGenreFilter?'active':''}"
      onclick="setGenreFilter('${g}')">${g}</button>`
  ).join('');
  loadSteamGenreData(currentGenreFilter);
}

function applyGenreGrid(list, genre) {
  const gridEl = document.getElementById('genre-grid');
  if (!gridEl) return;
  const q = genreSearch.toLowerCase();
  const base = (list || []).filter(app => matchesGenreApp(app, genre));
  const filtered = q
    ? base.filter(a => (a.name||'').toLowerCase().includes(q) || Object.keys(a.tags||{}).some(t => t.toLowerCase().includes(q)))
    : base;
  const safeFiltered = filterTrustedThumbnailGames(filtered);
  gridEl.innerHTML = safeFiltered.length
    ? safeFiltered.map(app=>makeSteamCard(app,null,{ showLive:false, safeOnly:true })).join('')
    : `<div class="grid-empty empty-note" style="grid-column:1/-1">${genre === '전체' ? '조건에 맞는 게임이 없습니다.' : `${genre} 장르 검색 결과 없음`}</div>`;
}

function setGenreFilter(g) {
  if (currentGenreFilter === g && _steamGenreCache[g]?.length) {
    document.querySelectorAll('#genre-pills .genre-pill').forEach(b =>
      b.classList.toggle('active', b.textContent.trim()===g));
    applyGenreGrid(_steamGenreCache[g], g);
    return;
  }
  currentGenreFilter = g;
  document.querySelectorAll('#genre-pills .genre-pill').forEach(b =>
    b.classList.toggle('active', b.textContent.trim()===g));
  loadSteamGenreData(g);
}

async function loadSteamGenreData(genre, opts = {}) {
  const gridEl = document.getElementById('genre-grid');
  if (!gridEl && !opts.silent) return [];
  const requestToken = ++_genreRequestToken;
  const localFallback = GAMES_CLEAN.filter(g => genre === '전체' || g.genre === genre)
    .map(g => normalizeGenreItem(g, genre)).filter(Boolean);

  if (!opts.force && _steamGenreCache[genre]?.length) {
    if (!opts.silent) applyGenreGrid(_steamGenreCache[genre], genre);
    return _steamGenreCache[genre];
  }

  if (!opts.silent) {
    if (localFallback.length) applyGenreGrid(localFallback, genre);
    else if (gridEl && !gridEl.children.length) gridEl.innerHTML = `<div class="grid-empty" style="grid-column:1/-1"><div class="steam-loading">🔄 Steam에서 ${genre==='전체'?'전체':genre} 게임 불러오는 중...</div></div>`;
  }

  if (!opts.force && _steamGenreInflight[genre]) {
    const inflightResult = await _steamGenreInflight[genre].catch(() => localFallback);
    if (!opts.silent && requestToken === _genreRequestToken) applyGenreGrid(inflightResult, genre);
    return inflightResult;
  }

  const tags = genre === '전체'
    ? ['Action','RPG','Adventure','Simulation','Strategy','Indie']
    : (GENRE_STEAM_TAGS[genre] || ['Action']);

  _steamGenreInflight[genre] = (async () => {
    const results = await Promise.all(tags.slice(0,6).map(tag=>steamspyFetch({request:'tag',tag, forceRemote: !!opts.forceRemote}).catch(()=>null)));
    const merged = {};
    results.forEach(d => {
      if (!d) return;
      Object.values(d).forEach(app => {
        if (!app.appid || !app.name) return;
        const normalized = normalizeGenreItem(app, genre);
        if (!normalized || !matchesGenreApp(normalized, genre)) return;
        if (!merged[normalized.appid]) merged[normalized.appid] = { ...normalized, _cnt: 0, _source: 'steam' };
        merged[normalized.appid]._cnt++;
      });
    });
    let sorted = Object.values(merged)
      .sort((a,b)=>(b._cnt-a._cnt)||((b.ccu||0)-(a.ccu||0))||((b.positive||0)-(a.positive||0)))
      .slice(0,220);
    sorted = uniqueByAppId([...sorted, ...localFallback]).filter(app => matchesGenreApp(app, genre));
    _steamGenreCache[genre] = sorted.length ? sorted : localFallback;
    return _steamGenreCache[genre];
  })();

  try {
    const sorted = await _steamGenreInflight[genre];
    if (!opts.silent && requestToken === _genreRequestToken) applyGenreGrid(sorted, genre);
    return sorted;
  } catch {
    _steamGenreCache[genre] = localFallback;
    if (!opts.silent && requestToken === _genreRequestToken) applyGenreGrid(localFallback, genre);
    return localFallback;
  } finally {
    delete _steamGenreInflight[genre];
  }
}

function renderGenreGrid() { loadSteamGenreData(currentGenreFilter); }

// ── Hot tab ──
function renderHotGenrePills() {
  const el = document.getElementById('hot-genre-pills');
  if (!el) return;
  el.innerHTML = ORDERED_GENRES2.map(g =>
    `<button class="genre-pill ${g==='전체'?'':genreClass(g)} ${g===hotGenreFilter?'active':''}" onclick="setHotGenreFilter('${g}')">${g}</button>`
  ).join('');
}

function setHotGenreFilter(g) {
  hotGenreFilter = g;
  renderHotGenrePills();
  renderHotGrid();
}

function setHotSort(by) {
  hotSortBy = 'ccu';
  document.querySelectorAll('.hot-sort-btn').forEach((b,i)=>
    b.classList.toggle('active', i === 0));
  renderHotGrid();
}
function buildHotFallback() {
  const base = GAMES_CLEAN.map((g,i) => normalizeGenreItem({
    id: g.id, title: g.title, dev: g.dev, tags: g.tags,
    ccu: Math.round(((g.rating||7) ** 2) * 900 + Math.max(0, 5000 - i * 11)),
    positive: Math.round(((g.rating||7) ** 2) * 2200 + (2026 - (g.year||2020)) * 30),
    negative: Math.max(5, Math.round((10-(g.rating||7)) * 900)),
    average_2weeks: Math.round(((g.rating||7) ** 2) * 140 + Math.max(0, 1200 - i * 3)),
    genre: g.genre
  }, g.genre));
  return {
    ccu: [...base].sort((a,b)=>(b.ccu||0)-(a.ccu||0)).slice(0,120),
    positive: [...base].sort((a,b)=>(b.positive||0)-(a.positive||0)).slice(0,120),
    average_2weeks: [...base].sort((a,b)=>(b.average_2weeks||0)-(a.average_2weeks||0)).slice(0,120),
  };
}

async function loadHotGames(silent = false, opts = {}) {
  if (hotLoaded && _hotRawData && (_hotRawData.ccu?.length || _hotRawData.positive?.length || _hotRawData.average_2weeks?.length)) {
    if (!silent) {
      renderHotGenrePills();
      renderHotGrid();
    }
    return _hotRawData;
  }

  hotLoaded = true;
  const statusEl = document.getElementById('hot-status');
  const gridEl = document.getElementById('hot-grid');
  if (!silent && statusEl && gridEl) {
    statusEl.textContent = '🔄 Steam 실시간 인기 게임 불러오는 중...';
    statusEl.className = 'hot-status';
    gridEl.innerHTML = '';
  }

  const [mostPlayedData, hot2WeeksData, positiveData, ownedData] = await Promise.all([
    steamspyFetch({request:'mostplayed', forceRemote: !!opts.forceRemote}).catch(()=>null),
    steamspyFetch({request:'top100in2weeks', forceRemote: !!opts.forceRemote}).catch(()=>null),
    steamspyFetch({request:'top100forever', forceRemote: !!opts.forceRemote}).catch(()=>null),
    steamspyFetch({request:'top100owned', forceRemote: !!opts.forceRemote}).catch(()=>null),
  ]);

  const mostPlayedList = normalizeSteamList(mostPlayedData).map(app => ({
    ...app,
    _genre: EXACT_GENRE_OVERRIDES[Number(app.appid)] || app._genre || app.genre || ''
  }));
  const twoWeekList = normalizeSteamList(hot2WeeksData);
  const positiveList = normalizeSteamList(positiveData);
  const ownedList = normalizeSteamList(ownedData);
  const fallbackBase = buildHotFallback();
  const ccuList = mostPlayedList.length ? mostPlayedList : (twoWeekList.length ? twoWeekList : fallbackBase.ccu);
  const normalized = {
    ccu: ccuList,
    positive: positiveList.length ? positiveList : fallbackBase.ccu,
    average_2weeks: twoWeekList.length ? twoWeekList : uniqueByAppId([...ccuList, ...ownedList, ...fallbackBase.ccu]),
  };

  if (!normalized.ccu.length && !normalized.positive.length && !normalized.average_2weeks.length) {
    _hotRawData = fallbackBase;
    if (!silent && statusEl) {
      statusEl.textContent = '⚠️ Steam 실시간 데이터를 가져오지 못해 내장 카탈로그 인기 순위로 표시합니다.';
      statusEl.className = 'hot-status';
      setTimeout(()=>{ statusEl.className='hot-status hidden'; }, 5000);
    }
  } else {
    _hotRawData = {
      ccu: normalized.ccu.length ? [...normalized.ccu].sort((a,b)=>(b.ccu||0)-(a.ccu||0)).slice(0,100) : [],
      positive: normalized.positive.length ? [...normalized.positive].sort((a,b)=>(b.positive||0)-(a.positive||0)) : [],
      average_2weeks: normalized.average_2weeks.length ? [...normalized.average_2weeks].sort((a,b)=>(b.average_2weeks||0)-(a.average_2weeks||0)) : [],
    };
    if (!silent && statusEl) {
      statusEl.textContent = mostPlayedList.length
        ? '✅ Steam 차트 실시간 인기 데이터를 기준으로 표시 중입니다.'
        : '✅ Steam 데이터를 기준으로 표시 중입니다.';
      statusEl.className = 'hot-status';
      setTimeout(()=>{ statusEl.className='hot-status hidden'; }, 2200);
    }
  }

  if (!silent) {
    window.__nexusLastRefresh = Date.now();
    renderHotGenrePills();
    renderHotGrid();
  }
  return _hotRawData;
}

function renderHotGrid() {
  const gridEl = document.getElementById('hot-grid');
  const statusEl = document.getElementById('hot-status');
  if (!gridEl || !_hotRawData) return;
  let list = [...(_hotRawData[hotSortBy] || [])];
  if (hotGenreFilter !== '전체') list = list.filter(app => matchesGenreApp(app, hotGenreFilter));
  if (statusEl && list.length) statusEl.className = 'hot-status hidden';
  const safeList = filterTrustedThumbnailGames(list);
  gridEl.innerHTML = safeList.length
    ? safeList.slice(0,120).map((app,i)=>makeSteamCard(app,i+1,{ showLive:true, safeOnly:true })).join('')
    : `<div class="grid-empty empty-note" style="grid-column:1/-1">${hotGenreFilter !== '전체' ? '해당되는 장르의 게임이 실시간 Top 100 안에 없습니다.' : '실시간 데이터 연결이 지연되어 대체 인기 리스트를 표시하지 못했습니다. 새로고침 후 다시 확인해주세요.'}</div>`;
}

// ══════════════════════════════════════════════════════════════
// APP NAVIGATION
// ══════════════════════════════════════════════════════════════
function showTab(tab) {
  currentTab = tab;
  document.getElementById('tab-rec').style.display   = tab==='rec'   ? 'block' : 'none';
  document.getElementById('tab-genre').style.display = tab==='genre' ? 'block' : 'none';
  document.getElementById('tab-hot').style.display   = tab==='hot'   ? 'block' : 'none';
  document.querySelectorAll('.nav-tab').forEach((b,i)=>
    b.classList.toggle('active',(i===0&&tab==='rec')||(i===1&&tab==='genre')||(i===2&&tab==='hot')));
  if (tab==='genre') renderGenreTab();
  if (tab==='hot') loadHotGames();
}

async function renderApp() {
  steamRecLoaded = false;
  window.__steamRecSelectionKey = selectedIds.slice().sort((a,b)=>a-b).join(',');
  const local = getLocalRecommendations();
  renderHeroGrid(local.slice(0,3));
  renderMoreGrid(local.slice(3,30));
  const hs = document.getElementById('hero-grid')?.closest('.rec-hero');
  if (hs) {
    hs.querySelectorAll('.rec-source-badge').forEach(el => el.remove());
    const b = document.createElement('div');
    b.className = 'rec-source-badge';
    b.innerHTML = '✦ 선택한 게임 기반 맞춤 추천';
    hs.insertBefore(b, hs.firstChild);
  }
  showTab('rec');
  prefetchCoreData();
  maybeRefreshLiveData(false);
}

function startApp() {
  if (selectedIds.length!==10) return;
  persistSelection(true);
  document.getElementById('onboarding').classList.remove('active');
  document.getElementById('app').classList.add('active');
  renderApp();
  prefetchCoreData();
}


function goHome() {
  document.getElementById('onboarding').classList.remove('active');
  document.getElementById('app').classList.add('active');
  showTab('rec');
  renderApp();
}


function resetApp() {
  localStorage.removeItem(STORAGE_KEY);
  ++steamRecRequestSeq;
  selectedIds=[]; currentObFilter='전체'; currentGenreFilter='전체';
  obSearch=''; genreSearch=''; steamRecLoaded=false; steamRecSelectionKey=''; hotLoaded=false; hotGenreFilter='전체';
  _hotRawData={ ccu: [], positive: [], average_2weeks: [] }; _steamGenreCache={}; _prefetchStarted=false; window.__steamRecRequestToken=0; window.__steamRecSelectionKey='';
  const si=document.getElementById('ob-search'); if(si) si.value='';
  const gi=document.getElementById('genre-search'); if(gi) gi.value='';
  updateObUI(); renderObFilter(); renderObGrid();
  document.getElementById('app').classList.remove('active');
  document.getElementById('onboarding').classList.add('active');
}

function persistSelection(done) {
  const completed = typeof done==='boolean' ? done : selectedIds.length===10;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({selectedIds,completed})); } catch(e){}
}

function loadSelection() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
    if (!raw||!Array.isArray(raw.selectedIds)) return false;
    const valid = raw.selectedIds.filter(id=>!!getGameById(id)).slice(0,10);
    selectedIds = valid;
    return !!raw.completed && valid.length===10;
  } catch { return false; }
}

// ══════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════
function openModal(id) {
  const g = getGameById(id); if (!g) return;
  const img = document.getElementById('modal-img');
  img.src = imgUrl(g);
  img.onerror = function(){ this.src=imgUrlAlt(g); this.onerror=null; };
  document.getElementById('modal-genre-badge').className = 'modal-genre '+genreClass(g.genre);
  document.getElementById('modal-genre-badge').textContent = g.genre;
  document.getElementById('modal-title').textContent = g.title;
  document.getElementById('modal-rating').innerHTML = '★ '+(g.rating||'추천')+' / 10';
  document.getElementById('modal-year').textContent = g.year ? g.year+'년' : '';
  document.getElementById('modal-dev').textContent = g.dev||'';
  document.getElementById('modal-desc').textContent = g.desc||'';
  document.getElementById('modal-steam-link').href = storeUrl(g);
  document.getElementById('modal-tags').innerHTML = (g.tags||[]).map(t=>
    `<span class="tag-pill" style="font-size:0.72rem;padding:4px 10px">${t}</span>`).join('');
  const so = document.getElementById('stat-owners');
  const sp = document.getElementById('stat-playtime');
  if(so){ so.className='modal-stat-value loading'; so.textContent=''; }
  if(sp){ sp.className='modal-stat-value loading'; sp.textContent=''; }
  document.getElementById('modal').classList.remove('hidden');
  fetchSteamData(g.id);
}

function closeModal(e) {
  if (e.target===document.getElementById('modal'))
    document.getElementById('modal').classList.add('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key==='Escape') document.getElementById('modal').classList.add('hidden');
});

async function fetchSteamData(appid) {
  try {
    const data = await steamspyFetch({request:'appdetails', appid});
    if (!data) throw new Error('no data');
    const so = document.getElementById('stat-owners');
    const sp = document.getElementById('stat-playtime');
    if (so) { so.className='modal-stat-value'; so.textContent=data.owners||'데이터 없음'; }
    if (sp) { sp.className='modal-stat-value'; sp.textContent=data.average_forever?(Math.round(data.average_forever/60)+'시간'):'─'; }
  } catch {
    const so=document.getElementById('stat-owners');
    const sp=document.getElementById('stat-playtime');
    if(so){ so.className='modal-stat-value'; so.textContent='─'; }
    if(sp){ sp.className='modal-stat-value'; sp.textContent='─'; }
  }
}

// ══════════════════════════════════════════════════════════════
// SEARCH BARS
// ══════════════════════════════════════════════════════════════
function ensureSearchBars() {
  if (!document.getElementById('ob-search-wrap')) {
    const wrap = document.createElement('div');
    wrap.id = 'ob-search-wrap'; wrap.className = 'ob-search-wrap';
    wrap.innerHTML = `<div class="ob-search-inner"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input id="ob-search" class="ob-search" type="text" placeholder="게임 검색..."></div>`;
    const f = document.getElementById('ob-filter');
    if (f) f.insertAdjacentElement('afterend', wrap);
    document.getElementById('ob-search').addEventListener('input', e => { obSearch=e.target.value.trim(); renderObGrid(); });
  }
  if (!document.getElementById('genre-search-wrap')) {
    const wrap = document.createElement('div');
    wrap.id = 'genre-search-wrap'; wrap.className = 'genre-search-wrap';
    wrap.innerHTML = `<div class="genre-search-inner"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input id="genre-search" class="genre-search" type="text" placeholder="게임 검색..."></div>`;
    const pills = document.getElementById('genre-pills');
    if (pills) pills.insertAdjacentElement('afterend', wrap);
    document.getElementById('genre-search').addEventListener('input', e => { genreSearch=e.target.value.trim(); renderGenreGrid(); });
  }
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
(function init() {
  ensureSearchBars();
  const savedReady = loadSelection();
  renderObFilter();
  renderObGrid();
  updateObUI();
  if (savedReady) startApp();
})();


initTheme();
initLiveAutoRefresh();
window.addEventListener('focus', () => maybeRefreshLiveData(false));
