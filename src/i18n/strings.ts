/**
 * UI strings for English, Chinese (Simplified), and French.
 * Use with .lang-en / .lang-zh / .lang-fr and html[data-lang] to show the right language.
 */
export const nav = {
  brand: { en: 'Fair Screening, Justice Now', zh: '公平安调，正义此刻', fr: 'Vérifications équitables, justice maintenant' },
  declaration: { en: 'Declaration', zh: '宣言', fr: 'Déclaration' },
  demands: { en: 'Our Demands', zh: '我们的诉求', fr: 'Nos revendications' },
  stories: { en: 'Stories', zh: '故事', fr: 'Témoignages' },
  event: { en: 'Events', zh: '活动', fr: 'Événements' },
  joinUs: { en: 'Join Us', zh: '加入我们', fr: 'Rejoignez-nous' },
  references: { en: 'References', zh: '参考文献', fr: 'Références' },
} as const;

export const announcement = {
  event: { en: 'Past event: VAN501 Vancouver action recap', zh: '过往活动：VAN501 温哥华行动回顾', fr: 'Événement passé : récapitulatif de l’action VAN501 à Vancouver' },
  petition: {
    en: 'Priority now: House of Commons e‑petition e‑7341 — sign now (e‑7259 is our prior win).',
    zh: '当前优先：国会下议院电子请愿 e‑7341 — 立即签署（e‑7259 为此前成果）。',
    fr: 'Priorité actuelle : pétition électronique e‑7341 de la Chambre des communes — signez maintenant (e‑7259 est notre résultat antérieur).',
  },
} as const;

/** Real PR stats from IRCC application inventory (Canada.ca). Update when inventory page updates. */
export const heroStats = {
  prBacklogPercent: 55,
  prBacklogThousands: 515,
  dataDate: 'Nov 2025',
  sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/reports-statistics/statistics-open-data/immigration-stats/application-inventory.html',
} as const;

export const hero = {
  eventTitle: {
    en: 'National Day of Action — July 31, 2026',
    zh: '2026年7月31日 · 全国和平集会',
    fr: 'Journée d’action nationale — 31 juillet 2026',
  },
  eventTagline: {
    en: 'One day. One voice. One Canada — coast to coast.',
    zh: '同一天，同一个声音，同一个加拿大。',
    fr: 'Un jour. Une voix. Un Canada — d’un océan à l’autre.',
  },
  eventDetails: { en: 'Friday, July 31, 2026 · Ottawa · Vancouver · Toronto · and cities across Canada', zh: '2026年7月31日 周五 · 渥太华 · 温哥华 · 多伦多 · 全国各地同步举行', fr: 'Vendredi 31 juillet 2026 · Ottawa · Vancouver · Toronto · partout au Canada' },
  eventDetailsLink: { en: 'Past event recap', zh: '过往活动回顾', fr: 'Bilan d’événement passé' },
  getInvolved: {
    en: 'Join the July 31 Rally',
    zh: '加入 7月31日 集会',
    fr: 'Participez au rassemblement du 31 juillet',
  },
  qrSectionLabel: {
    en: 'Scan to join a WeChat group',
    zh: '扫码加入微信群',
    fr: 'Scannez pour rejoindre un groupe WeChat',
  },
  qrTorontoCity: { en: 'Toronto', zh: '多伦多', fr: 'Toronto' },
  qrVancouverCity: { en: 'Vancouver', zh: '温哥华', fr: 'Vancouver' },
  impactCaption: {
    en: 'Real families, torn apart by endless delays.',
    zh: '真实的家庭，被无休止的拖延撕裂。',
    fr: 'De vraies familles, déchirées par des délais interminables.',
  },
  liveStream: { en: 'Watch Live on YouTube', zh: '在 YouTube 上观看直播', fr: 'Regarder en direct sur YouTube' },
  standingWithUs: { en: 'Standing with us', zh: '与我们站在一起', fr: 'À nos côtés' },
  senatorWooName: { en: 'Senator Yuen Pau Woo', zh: '参议员胡元豹', fr: 'Sénateur Yuen Pau Woo' },
  senatorWooMeta: { en: 'British Columbia · Independent Senators Group', zh: '不列颠哥伦比亚省 · 独立参议员团', fr: 'Colombie-Britannique · Groupe des sénateurs indépendants' },
  senatorOhName: { en: 'Senator Victor Oh', zh: '参议员胡子修', fr: 'Sénateur Victor Oh' },
  senatorOhMeta: { en: 'Ontario · Former Senator', zh: '安大略省 · 前参议员', fr: 'Ontario · Ancien sénateur' },
  cpacName: { en: 'CPAC – Cable Public Affairs Channel', zh: 'CPAC 公众事务频道', fr: 'CPAC – Chaîne d\'affaires publiques' },
  cpacMeta: { en: 'Independent, not-for-profit parliamentary broadcaster', zh: '独立非营利的国会与公共事务频道', fr: 'Diffuseur parlementaire indépendant à but non lucratif' },
  pressReleaseLink: {
    en: 'Parliament Hill press conference release',
    zh: '国会山发布会通稿',
    fr: 'Communiqué de la conférence de presse sur la Colline du Parlement',
  },
  pastEventLabel: {
    en: 'Past actions',
    zh: '往期行动',
    fr: 'Actions passées',
  },
  pastEventTitle: {
    en: '2026.3.13 Ottawa Parliament Hill Rally',
    zh: '2026.3.13 渥太华国会山集会',
    fr: '2026.3.13 Rassemblement sur la Colline du Parlement à Ottawa',
  },
  pastEventDetails: {
    en: 'Friday, March 13, 2026 · Parliament Hill · Ottawa',
    zh: '2026年3月13日 周五 · 国会山 · 渥太华',
    fr: 'Vendredi 13 mars 2026 · Colline du Parlement · Ottawa',
  },
  pastEventVancouverTitle: {
    en: '2026.5.1 IRCC Vancouver Office Rally',
    zh: '2026.5.1 IRCC 温哥华办公室集会',
    fr: '2026.5.1 Rassemblement au bureau IRCC de Vancouver',
  },
  pastEventVancouverDetails: {
    en: 'Friday, May 1, 2026 · Vancouver Art Gallery → IRCC Vancouver Office · Vancouver',
    zh: '2026年5月1日 周五 · 温哥华美术馆 → IRCC 温哥华办公室 · 温哥华',
    fr: 'Vendredi 1er mai 2026 · Vancouver Art Gallery → Bureau IRCC de Vancouver · Vancouver',
  },
  pastEventTorontoTitle: {
    en: '2026.5.28 IRCC Toronto Office Rally',
    zh: '2026.5.28 IRCC 多伦多办公室集会',
    fr: '2026.5.28 Rassemblement au bureau IRCC de Toronto',
  },
  pastEventTorontoDetails: {
    en: 'May 28, 2026 · 7:30 AM – 11:30 AM · Mississauga, ON',
    zh: '2026年5月28日 · 上午7:30 – 上午11:30 · 密西沙加，ON省',
    fr: '28 mai 2026 · 7 h 30 – 11 h 30 · Mississauga, Ont.',
  },
  pastEventLink: {
    en: 'View recap',
    zh: '查看回顾',
    fr: 'Voir le bilan',
  },
  youtubeCardTitle: {
    en: 'Group calls for transparency and reasonable timelines in immigration processing',
    zh: '华人团体呼吁移民审理透明、及时有序',
    fr: 'Le groupe appelle à la transparence et à des délais raisonnables dans le traitement des dossiers d\'immigration',
  },
  youtubeCardMeta: {
    en: 'March 13, 2026 · Ottawa Parliament Hill · CPAC Coverage',
    zh: '2026年3月13日 · 渥太华国会山 · CPAC 报道',
    fr: '13 mars 2026 · Colline du Parlement à Ottawa · Couverture CPAC',
  },
  joinMovement: { en: 'Join Our Movement', zh: '加入我们', fr: 'Rejoignez le mouvement' },
  donate: { en: 'Donate', zh: '捐款', fr: 'Faire un don' },
  /** Hero stat card: main label (PR in backlog) */
  statMainLabel: { en: 'PR IN BACKLOG', zh: 'PR积压', fr: 'RP EN ARRIÉRÉ' },
  /** Hero stat card: sub label (beyond service standards) */
  statSubLabel: { en: 'BEYOND SERVICE STANDARDS', zh: '超出服务标准', fr: 'AU-DELÀ DES NORMES' },
  /** Hero stat card: data date */
  statDataDate: { en: 'Nov 2025', zh: '2025年11月', fr: 'Nov. 2025' },
  /** Hero stat card: source link text */
  statSource: { en: 'Source: Canada.ca', zh: '来源：Canada.ca', fr: 'Source : Canada.ca' },
  /* Legacy keys kept for any other references */
  statMonths: { en: 'MONTHS', zh: '个月', fr: 'MOIS' },
  statWaiting: { en: 'WAITING FOR', zh: '等待', fr: 'EN ATTENTE DE' },
  statResponse: { en: 'IRCC RESPONSE', zh: 'IRCC无回复', fr: 'RÉPONSE IRCC' },
  statNoTimelines: { en: 'NO TIMELINES', zh: '无时限', fr: 'AUCUN DÉLAI' },
  statNoResults: { en: 'NO RESULTS', zh: '无结果', fr: 'AUCUN RÉSULTAT' },
} as const;

export const footer = {
  about: { en: 'About This Movement', zh: '关于本运动', fr: 'À propos du mouvement' },
  aboutDesc: { en: 'We are Chinese PR applicants and families who have experienced discriminatory delays in security screening. We demand fair, transparent, and timely immigration processing.', zh: '我们是遭遇安全背景调查歧视性拖延的华人PR申请人及家庭。我们要求公平、透明、及时的移民审理。', fr: 'Nous sommes des demandeurs de RP chinois et des familles ayant subi des délais discriminatoires dans l\'évaluation de sécurité. Nous exigeons un traitement équitable, transparent et en temps opportun.' },
  quickLinks: { en: 'Quick Links', zh: '快速链接', fr: 'Liens rapides' },
  resources: { en: 'Resources', zh: '资源', fr: 'Ressources' },
  contact: { en: 'Contact', zh: '联系我们', fr: 'Contact' },
  standTogether: { en: 'We stand together for justice.', zh: '我们为公正团结一心。', fr: 'Nous sommes unis pour la justice.' },
  copyright: { en: 'Justice for Chinese PR Applicants.', zh: '华人PR申请人公正维权。', fr: 'Justice pour les demandeurs de RP chinois.' },
  footerNote: { en: 'We advocate for fair policy, not against any group or nation. We believe in Canada\'s values of equality and justice.', zh: '我们倡导公平政策，不针对任何群体或国家。我们认同加拿大平等与公正的价值观。', fr: 'Nous prônons des politiques équitables, sans nous opposer à aucun groupe ni pays. Nous croyons aux valeurs d\'égalité et de justice du Canada.' },
  ircc: { en: 'IRCC Website', zh: 'IRCC 官网', fr: 'Site IRCC' },
  processingTimes: { en: 'Processing Times', zh: '审理时间', fr: 'Délais de traitement' },
  gcms: { en: 'Order GCMS Notes', zh: '申请 GCMS  notes', fr: 'Commander les notes GCMS' },
  findMP: { en: 'Find Your MP', zh: '查找您的国会议员', fr: 'Trouver votre député' },
} as const;

/** Petition-exact Declaration: WHEREAS bullets and CONCLUSION (verbatim from House_Commons_Petition_CORRECTED.md). */
export const declarationSection = {
  title: { en: 'Declaration of Justice', zh: '公正宣言', fr: 'Déclaration pour la justice' },
  introTitle: { en: 'Petition to Address the Worsening Crisis in Permanent Residence Processing Delays', zh: '请愿：应对永久居民审理拖延日益严重的危机', fr: 'Pétition pour faire face à l\'aggravation de la crise des délais de traitement de la résidence permanente' },
  introParagraph: {
    en: 'TO THE GOVERNMENT OF CANADA AND THE HOUSE OF COMMONS IN PARLIAMENT ASSEMBLED:',
    zh: '致加拿大政府及国会下议院：',
    fr: 'AU GOUVERNEMENT DU CANADA ET À LA CHAMBRE DES COMMUNES RÉUNIE EN PARLEMENT :',
  },
  whereasTitle: { en: 'WHEREAS:', zh: '鉴于：', fr: 'ATTENDU QUE :' },
  /** One-to-three word topic label for each WHEREAS (en, zh, fr). */
  whereasTopic: {
    whereas1: { en: 'Extreme Delays', zh: '极端拖延', fr: 'Délais extrêmes' },
    whereas2: { en: 'Backlog Statistics', zh: '积压数据', fr: 'Statistiques d\'arriéré' },
    whereas3: { en: 'PR Backlog', zh: 'PR积压', fr: 'Arriéré RP' },
    whereas4: { en: 'Crisis Worsening', zh: '危机恶化', fr: 'Crise qui s\'aggrave' },
    whereas5: { en: 'Reforms Failed', zh: '改革失败', fr: 'Réformes échouées' },
    whereas6: { en: 'Human Cost', zh: '人道代价', fr: 'Coût humain' },
    whereas7: { en: 'Discriminatory System', zh: '歧视性制度', fr: 'Système discriminatoire' },
    whereas8: { en: 'No Recourse', zh: '无救济', fr: 'Aucun recours' },
  } as const,
  whereas1: {
    en: 'Thousands of Permanent Residence (PR) applicants are experiencing extreme delays in security screening, with many cases exceeding 30-40 months — far beyond published service standards;',
    zh: '数千名永久居民（PR）申请人正经历安全背景调查的极端拖延，许多案件超过30–40个月——远高于公布的审理标准；',
    fr: 'Des milliers de demandeurs de résidence permanente (RP) subissent des délais extrêmes dans l\'évaluation de sécurité, de nombreux dossiers dépassant 30 à 40 mois — bien au-delà des normes de service publiées ;',
  },
  whereas2: {
    en: 'As of November 30, 2025, according to official IRCC statistics [1], Canada\'s immigration system holds **2,130,700 total applications**, with **1,005,800 (47%) in backlog** exceeding service standards — more than double IRCC\'s stated 20% target;',
    zh: '截至2025年11月30日，根据IRCC官方数据[1]，加拿大移民系统共有**2,130,700份申请**，其中**1,005,800份（47%）处于积压**、超过服务标准——是IRCC所定20%目标的两倍以上；',
    fr: 'Au 30 novembre 2025, selon les statistiques officielles de l\'IRCC [1], le système d\'immigration du Canada compte **2 130 700 demandes au total**, dont **1 005 800 (47 %) en arriéré** dépassant les normes de service — plus du double de la cible de 20 % de l\'IRCC ;',
  },
  whereas3: {
    en: 'For Permanent Residence applications specifically, **the majority are delayed**: of 941,600 total PR applications, only 426,600 (45%) are within service standards while **515,000 (55%) are in backlog** [1];',
    zh: '就永久居民申请而言，**多数被拖延**：在941,600份PR申请中，仅426,600份（45%）在服务标准内，而**515,000份（55%）处于积压**[1]；',
    fr: 'Pour les demandes de résidence permanente en particulier, **la majorité sont en retard** : sur 941 600 demandes de RP au total, seulement 426 600 (45 %) respectent les normes de service tandis que **515 000 (55 %) sont en arriéré** [1] ;',
  },
  whereas4: {
    en: '**THE CRISIS IS WORSENING, NOT IMPROVING:** IRCC\'s own historical data [1] shows that Provincial Nominee Program (Express Entry) backlogs **reached the 20% target by mid-2023**, proving the system can work — yet by November 2025 the backlog has **climbed to 53%**, with government projections showing it will reach **56% by January 2026** — a complete system collapse in just 18 months;',
    zh: '**危机在恶化，而非改善：** IRCC自身的历史数据[1]显示省提名计划（快速通道）积压**曾在2023年中期达到20%目标**，证明系统可以运转——然而到2025年11月积压已**升至53%**，政府预测**2026年1月将达56%**——仅18个月内系统彻底崩溃；',
    fr: '**LA CRISE S\'AGGRAVE, ELLE NE S\'AMÉLIORE PAS :** Les données historiques de l\'IRCC [1] montrent que les arriérés du Programme des candidats des provinces (Entrée express) **avaient atteint la cible de 20 % mi-2023**, prouvant que le système peut fonctionner — pourtant en novembre 2025 l\'arriéré **est monté à 53 %**, avec des projections gouvernementales indiquant **56 % en janvier 2026** — un effondrement complet du système en 18 mois ;',
  },
  whereas5: {
    en: 'Despite government initiatives to improve security screening automation [2], the backlog has not only failed to improve but has **worsened dramatically**, demonstrating failure of promised reforms;',
    zh: '尽管政府推动安全审查自动化[2]，积压不仅未见改善反而**急剧恶化**，表明承诺的改革失败；',
    fr: 'Malgré les initiatives gouvernementales pour améliorer l\'automatisation de l\'évaluation de sécurité [2], l\'arriéré n\'a pas seulement échoué à s\'améliorer mais s\'est **considérablement aggravé**, démontrant l\'échec des réformes promises ;',
  },
  whereas6: {
    en: 'These extreme delays — often **30-40 months or more** beyond published service standards — cause severe and documented harm to applicants and their families, including: **prolonged family separation** (parents unable to reunite with children, spouses living apart for years), **mental health crises** from years of uncertainty with no end date or communication, **loss of legal status and work authorization** leaving families unable to support themselves, **denial of healthcare access** under provincial health systems, **lost career opportunities** and professional stagnation, and **catastrophic financial burdens** including $130,000-$200,000 in excess international education costs for families with children, mounting legal fees, and inability to sponsor family members [3];',
    zh: '这些极端拖延——往往**超出公布的服务标准30–40个月或更久**——对申请人及其家庭造成严重且有据可查的伤害，包括：**长期家庭分离**（父母无法与子女团聚、配偶分居数年）、**心理健康危机**、**失去合法身份和工作许可**使家庭无法自持、**无法获得省级医疗**、**职业机会丧失**与职业停滞，以及**灾难性经济负担**——包括有子女家庭的国际教育超额成本13万–20万加元、不断增加的律师费、无法担保家庭成员[3]；',
    fr: 'Ces délais extrêmes — souvent **30 à 40 mois ou plus** au-delà des normes de service publiées — causent un préjudice grave et documenté aux demandeurs et à leurs familles, notamment : **séparation familiale prolongée** (parents incapables de rejoindre leurs enfants, conjoints vivant séparés pendant des années), **crises de santé mentale**, **perte du statut légal et du permis de travail** laissant les familles incapables de subvenir à leurs besoins, **refus d\'accès aux soins** dans les régimes provinciaux, **opportunités professionnelles perdues** et stagnation, et **fardeaux financiers catastrophiques** dont 130 000 à 200 000 $ de frais d\'éducation internationale excessifs pour les familles avec enfants, frais juridiques croissants et impossibilité de parrainer les proches [3] ;',
  },
  whereas7: {
    en: 'Current processing times of "months, even years" beyond service standards violate applicants\' rights to timely administrative decisions as established in Canadian administrative law, and create a **discriminatory two-tier immigration system** where certain applicants — disproportionately from specific countries of origin — face indefinite delays while others from different backgrounds are processed within normal timeframes [4];',
    zh: '当前审理时间超出服务标准「数月甚至数年」侵犯了申请人在加拿大行政法下享有的及时行政决定权，并造成**歧视性的双轨移民制度**：部分申请人——不成比例地来自特定来源国——面临无限期拖延，而其他背景的申请人却在正常时限内获批[4]；',
    fr: 'Les délais de traitement actuels de « mois, voire des années » au-delà des normes de service violent le droit des demandeurs à des décisions administratives en temps opportun établi par le droit administratif canadien, et créent un **système d\'immigration discriminatoire à deux vitesses** où certains demandeurs — disproportionnellement de certains pays d\'origine — subissent des délais indéfinis tandis que d\'autres d\'origines différentes sont traités dans les délais normaux [4] ;',
  },
  whereas8: {
    en: 'Applicants have no access to transparent information about their cases, no meaningful recourse when service standards are violated by 300-500%, and no compensation for the financial and emotional harm caused by government failures that have been documented but not addressed [5].',
    zh: '申请人无法获得关于其案件的透明信息，在服务标准被违反300–500%时没有有意义的救济，也没有针对政府已记录却未纠正的失职所造成的经济与精神损害的赔偿[5]。',
    fr: 'Les demandeurs n\'ont pas accès à une information transparente sur leurs dossiers, aucun recours significatif lorsque les normes de service sont dépassées de 300 à 500 %, et aucune compensation pour le préjudice financier et moral causé par des manquements gouvernementaux documentés mais non corrigés [5].',
  },
  conclusionTitle: {
    en: 'This comprehensive three-pillar solution addresses a worsening crisis that is documented in the government\'s own official data and independent oversight reports. The evidence is undeniable:',
    zh: '这一全面三支柱方案针对的是政府自身官方数据和独立监督报告所记录的日益严重的危机。证据确凿：',
    fr: 'Cette solution complète en trois piliers répond à une crise aggravée documentée dans les données officielles du gouvernement et les rapports de surveillance indépendants. Les preuves sont indéniables :',
  },
  conclusion1: {
    en: '**The system is collapsing:** IRCC\'s own statistics show permanent residence backlogs have deteriorated from the 20% target achieved in 2023 to 55% in November 2025, with projections reaching 56% by January 2026 — proving the system CAN work but is currently failing due to inadequate resources and accountability.',
    zh: '**系统正在崩溃：** IRCC自身统计显示永久居民积压从2023年达到的20%目标恶化到2025年11月的55%，预计2026年1月达56%——证明系统本可以运转，却因资源和问责不足而正在失败。',
    fr: '**Le système s\'effondre :** les statistiques de l\'IRCC montrent que les arriérés de résidence permanente se sont détériorés de la cible de 20 % atteinte en 2023 à 55 % en novembre 2025, avec des projections à 56 % en janvier 2026 — prouvant que le système PEUT fonctionner mais échoue actuellement faute de ressources et de responsabilisation suffisantes.',
  },
  conclusion2: {
    en: '**Discrimination is documented:** Official NSIRA investigations, Auditor General reports, and Federal Court cases confirm that applicants from certain countries face discriminatory delays, with security screening criteria found "not justifiable on security grounds" and processing disparities documented across seven of eight PR programs.',
    zh: '**歧视已有记录：** NSIRA正式调查、审计长报告和联邦法院案件均确认，来自某些国家的申请人面临歧视性拖延，安全审查标准被认定「无法从安全角度证明合理」，八项PR计划中有七项存在审理差异。',
    fr: '**La discrimination est documentée :** les enquêtes officielles du NSIRA, les rapports du vérificateur général et les décisions de la Cour fédérale confirment que les demandeurs de certains pays subissent des délais discriminatoires, les critères d\'évaluation de sécurité ayant été jugés « non justifiables pour des raisons de sécurité » et les disparités de traitement documentées dans sept des huit programmes de RP.',
  },
  conclusion3: {
    en: '**Families are suffering with no recourse:** Applicants endure 30-40+ month delays causing family separation, mental health crises, and financial losses of $130,000-$200,000, yet have no access to transparent case information, no independent ombudsman to investigate delays, and no compensation for documented harm.',
    zh: '**家庭在承受痛苦且无救济：** 申请人忍受30–40个月以上的拖延，导致家庭分离、心理健康危机和13万–20万加元的经济损失，却无法获得透明的案件信息、没有独立监察专员调查拖延、也没有对已记录损害的赔偿。',
    fr: '**Les familles souffrent sans recours :** les demandeurs endurent des délais de 30 à 40 mois ou plus causant séparation familiale, crises de santé mentale et pertes financières de 130 000 à 200 000 $, sans accès à une information transparente sur leur dossier, sans ombudsman indépendant pour enquêter sur les délais et sans compensation pour le préjudice documenté.',
  },
  conclusion4: {
    en: '**Promised reforms have failed:** Despite government automation initiatives and repeated commitments to improve security screening, backlogs have worsened dramatically, demonstrating that voluntary measures are insufficient and enforceable standards with consequences are required.',
    zh: '**承诺的改革已失败：** 尽管政府推动自动化和一再承诺改善安全审查，积压却急剧恶化，表明自愿措施不足，必须实施带后果的可执行标准。',
    fr: '**Les réformes promises ont échoué :** malgré les initiatives d\'automatisation du gouvernement et les engagements répétés d\'améliorer l\'évaluation de sécurité, les arriérés se sont considérablement aggravés, démontrant que les mesures volontaires sont insuffisantes et que des normes exécutoires avec conséquences sont nécessaires.',
  },
  conclusionFinal: {
    en: '**We call on Parliament to act immediately. Thousands of families cannot wait another year while the crisis worsens.**',
    zh: '**我们呼吁国会立即行动。数千家庭无法在危机恶化中再等一年。**',
    fr: '**Nous demandons au Parlement d\'agir immédiatement. Des milliers de familles ne peuvent pas attendre une année de plus alors que la crise s\'aggrave.**',
  },
} as const;

/** Keys for the 8 WHEREAS bullets (used in index.astro). */
export const declarationWhereasKeys = ['whereas1', 'whereas2', 'whereas3', 'whereas4', 'whereas5', 'whereas6', 'whereas7', 'whereas8'] as const;

/** Petition-exact: "WE, THE UNDERSIGNED... call upon..." and three-pillar intro. */
export const demandsSection = {
  title: { en: 'What We Are Calling For', zh: '我们的诉求', fr: 'Nos revendications' },
  intro: { en: 'WE, THE UNDERSIGNED, residents of Canada, call upon the Government of Canada and the House of Commons to implement a comprehensive three-pillar solution:', zh: '我们，签署人，加拿大居民，呼吁加拿大政府和下议院落实全面三支柱方案：', fr: 'NOUS, SOUS-SIGNÉS, résidents du Canada, demandons au gouvernement du Canada et à la Chambre des communes de mettre en œuvre une solution complète en trois piliers :' },
  supportTitle: { en: 'Support Our Demands', zh: '支持我们的诉求', fr: 'Soutenez nos revendications' },
  supportDesc: { en: 'Add your voice to thousands of affected families. Join us at Parliament Hill.', zh: '与数千个受影响家庭一起发声。加入我们的国会山游行。', fr: 'Ajoutez votre voix à des milliers de familles touchées. Rejoignez-nous sur la Colline du Parlement.' },
  joinMovement: { en: 'Join the Movement', zh: '加入行动', fr: 'Rejoindre le mouvement' },
  expand: { en: 'Expand', zh: '展开', fr: 'Développer' },
  collapse: { en: 'Collapse', zh: '收起', fr: 'Réduire' },
} as const;

/** Petition-exact demand titles (verbatim from petition). */
export const demandTitles: Record<string, { en: string; zh: string; fr: string }> = {
  immediate: { en: 'Immediately Address the Backlog Crisis', zh: '立即化解积压危机', fr: 'Résoudre immédiatement la crise des arriérés' },
  equal: { en: 'Immediately Expedite Low-Risk Cases That Have Completed CSIS Screening', zh: '立即加速已完成CSIS审查的低风险案件', fr: 'Accélérer immédiatement les dossiers à faible risque ayant terminé le screening CSIS' },
  transparency: { en: 'Ensure Equal Treatment Regardless of Country of Origin', zh: '确保不论来源国平等对待', fr: 'Garantir un traitement égal quel que soit le pays d\'origine' },
  accountability: { en: 'Provide Transparency and Communication', zh: '提供透明与沟通', fr: 'Assurer la transparence et la communication' },
  humanitarian: { en: 'Create Independent Oversight', zh: '建立独立监督', fr: 'Créer un contrôle indépendant' },
  temporary: { en: 'Implement Interim Relief Measures', zh: '落实临时救济措施', fr: 'Mettre en œuvre des mesures de secours intérimaires' },
  mandamus: { en: 'Establish Parliamentary Oversight with Consequences', zh: '建立带问责的国会监督', fr: 'Établir un contrôle parlementaire avec conséquences' },
  apology: { en: 'Establish Mandatory Service Standards with Consequences', zh: '建立带问责的强制性服务标准', fr: 'Établir des normes de service obligatoires avec conséquences' },
};

/** Petition-exact demand bodies (verbatim from petition). */
export const demandBodies: Record<string, { en: string; zh: string; fr: string }> = {
  immediate: {
    en: 'Allocate emergency resources to reverse the worsening trend and clear the 515,000 PR applications in backlog within 12 months, bringing backlog levels back to the 20% target last achieved in 2023 — a level the government has already proven is achievable with proper resource allocation.',
    zh: '调配应急资源以扭转恶化趋势，在12个月内消化51.5万份PR积压申请，将积压率恢复至2023年曾达到的20%目标——政府已证明在适当资源下可以达到该水平。',
    fr: 'Allouer des ressources d\'urgence pour inverser la tendance à la détérioration et traiter les 515 000 demandes de RP en arriéré en 12 mois, ramenant le niveau d\'arriéré à la cible de 20 % atteinte en 2023 — niveau que le gouvernement a déjà prouvé atteignable avec une allocation adéquate.',
  },
  equal: {
    en: 'For applicants who have successfully completed CSIS security screening and whose CBSA security screening has exceeded published service standards, immediately expedite final processing to completion within 30 days, recognizing that the primary national security concerns have already been addressed and further delays are unjustifiable.',
    zh: '对已成功完成CSIS安全审查且CBSA安全审查已超过公布服务标准的申请人，立即在30天内完成最终审理，承认主要国家安全关切已得到处理，进一步拖延无正当理由。',
    fr: 'Pour les demandeurs ayant terminé avec succès l\'évaluation de sécurité du CSIS et dont l\'évaluation de sécurité de l\'ASFC dépasse les normes de service publiées, accélérer immédiatement le traitement final pour aboutir en 30 jours, en reconnaissant que les principales préoccupations de sécurité nationale ont déjà été traitées et que tout délai supplémentaire est injustifiable.',
  },
  transparency: {
    en: 'Immediately end discriminatory processing practices by conducting an independent audit of security screening processing times by country of origin, implementing corrective measures within 90 days to eliminate identified disparities, and publishing quarterly reports to Parliament on processing times broken down by applicant nationality to ensure ongoing accountability.',
    zh: '通过按申请人国籍对安全审查审理时间进行独立审计、90天内落实纠正措施以消除已发现的差异，并向国会按申请人国籍分列的审理时间季度报告，立即终止歧视性审理做法，确保持续问责。',
    fr: 'Mettre fin immédiatement aux pratiques de traitement discriminatoires en réalisant un audit indépendant des délais de traitement de l\'évaluation de sécurité par pays d\'origine, en mettant en œuvre des mesures correctives en 90 jours pour éliminer les disparités constatées, et en publiant des rapports trimestriels au Parlement sur les délais de traitement ventilés par nationalité des demandeurs pour assurer une responsabilisation continue.',
  },
  accountability: {
    en: 'Require IRCC, CSIS, and CBSA to provide proactive case updates every 90 days, including which agency is processing the file, what stage the case is at, and estimated completion timelines.',
    zh: '要求IRCC、CSIS和CBSA每90天主动提供案件更新，包括由哪一机构审理、案件处于何阶段以及预计完成时间。',
    fr: 'Exiger que l\'IRCC, le CSIS et l\'ASFC fournissent des mises à jour proactives tous les 90 jours, notamment quel organisme traite le dossier, à quel stade en est le dossier et les délais de complétion prévus.',
  },
  humanitarian: {
    en: 'Establish an independent immigration ombudsperson with authority to investigate IRCC processing delays and compel responses to applicant complaints; and create an independent oversight body for CBSA immigration security screening (equivalent to NSIRA\'s oversight of CSIS) with authority to investigate delays, compel agencies to explain processing failures, and order expedited processing for cases with demonstrated hardship.',
    zh: '设立独立移民监察专员，有权调查IRCC审理拖延并强制回应申请人投诉；并为CBSA移民安全审查建立独立监督机构（相当于NSIRA对CSIS的监督），有权调查拖延、强制机构解释审理失败并责令对证明存在困难的案件加速审理。',
    fr: 'Créer un ombudsman de l\'immigration indépendant ayant le pouvoir d\'enquêter sur les délais de traitement de l\'IRCC et d\'imposer des réponses aux plaintes des demandeurs ; et créer un organisme de contrôle indépendant pour l\'évaluation de sécurité en immigration de l\'ASFC (équivalent au contrôle du NSIRA sur le CSIS) avec pouvoir d\'enquêter sur les délais, d\'obliger les organismes à expliquer les échecs de traitement et d\'ordonner un traitement accéléré pour les dossiers avec difficultés démontrées.',
  },
  temporary: {
    en: 'For applicants waiting beyond 200% of service standards, immediately grant: (a) open work permits valid until final decision, (b) ability to sponsor immediate family members, and (c) temporary status documents to prevent life disruption.',
    zh: '对等待时间超过服务标准200%的申请人，立即给予：(a) 有效期至最终决定的开放工签，(b) 担保直系亲属的资格，(c) 临时身份文件以减少生活中断。',
    fr: 'Pour les demandeurs en attente au-delà de 200 % des normes de service, accorder immédiatement : (a) des permis de travail ouverts valides jusqu\'à la décision finale, (b) la possibilité de parrainer les membres de la famille immédiate, et (c) des documents de statut temporaire pour prévenir les bouleversements de la vie.',
  },
  mandamus: {
    en: 'Require the Minister of Immigration, Refugees and Citizenship Canada to appear before the Standing Committee on Citizenship and Immigration quarterly to answer specific questions on: (a) security screening backlogs and why they continue to worsen despite promised reforms, (b) processing time disparities by country of origin with plans to eliminate discrimination, (c) resource allocation and why automation investments have failed to improve outcomes; and mandate that if backlog levels exceed 30% or processing disparities by country are not reduced by 50% within 12 months, the Minister must table an emergency action plan with dedicated funding to Parliament for approval.',
    zh: '要求加拿大移民、难民及公民部长每季度出席公民与移民常设委员会，就以下具体问题作答：(a) 安全审查积压及为何在承诺改革后仍持续恶化，(b) 按来源国划分的审理时间差异及消除歧视的计划，(c) 资源分配及为何自动化投入未能改善结果；并规定若积压水平超过30%或12个月内按国家划分的审理差异未减少50%，部长须向国会提交带专项资金的紧急行动计划供批准。',
    fr: 'Exiger que le ministre de l\'Immigration, des Réfugiés et de la Citoyenneté du Canada comparaisse devant le Comité permanent de la citoyenneté et de l\'immigration chaque trimestre pour répondre à des questions précises sur : (a) les arriérés d\'évaluation de sécurité et pourquoi ils continuent de s\'aggraver malgré les réformes promises, (b) les disparités de délais de traitement par pays d\'origine et les plans pour éliminer la discrimination, (c) l\'allocation des ressources et pourquoi les investissements en automatisation n\'ont pas amélioré les résultats ; et exiger que si les niveaux d\'arriéré dépassent 30 % ou si les disparités de traitement par pays ne sont pas réduites de 50 % en 12 mois, le ministre doive déposer un plan d\'action d\'urgence avec financement dédié au Parlement pour approbation.',
  },
  apology: {
    en: 'Implement enforceable service standards with automatic escalation and ministerial review for any case exceeding service standards by more than 100%.',
    zh: '实施可执行的服务标准，对超过服务标准100%以上的任何案件实行自动升级及部长审查。',
    fr: 'Mettre en œuvre des normes de service exécutoires avec escalade automatique et examen ministériel pour tout dossier dépassant les normes de service de plus de 100 %.',
  },
};

export const storiesSection = {
  title: { en: 'Our Stories', zh: '我们的故事', fr: 'Nos témoignages' },
  subtitle: {
    en: 'Real people, real families, real consequences. These are the human costs of indefinite security screening delays. The stories below are just some of them.',
    zh: '真实的人、真实的家庭、真实的代价。这是无限期安全背景调查拖延带来的人道代价。下面所载，只是其中一部分故事。',
    fr: 'De vraies personnes, de vraies familles, de vraies conséquences. Voici le coût humain des délais indéfinis de l\'évaluation de sécurité. Les récits ci-dessous n\'en sont qu\'une partie.',
  },
  /** Stats line: use {count} and {months} as placeholders */
  statsLine: {
    en: '{count}+ families · {months}+ months of waiting',
    zh: '{count}+ 个家庭 · 累计 {months}+ 个月在等待',
    fr: '{count}+ familles · {months}+ mois d\'attente',
  },
  /** One line below the stats: these are shared so far, many more in same situation */
  statsSource: {
    en: 'These are the stories shared with us so far. Many more families are in the same situation.',
    zh: '这些是迄今为止与我们分享的故事。还有更多家庭正处在同样的境遇中。',
    fr: 'Ce sont les témoignages partagés avec nous jusqu\'à présent. Beaucoup d\'autres familles sont dans la même situation.',
  },
  moreStories: { en: 'More Stories Coming Soon', zh: '更多故事即将推出', fr: 'D\'autres témoignages à venir' },
  shareStory: { en: 'Share Your Story', zh: '分享你的故事', fr: 'Partagez votre histoire' },
  notIsolatedTitle: { en: 'These Are Not Isolated Cases', zh: '这些并非个案', fr: 'Ce ne sont pas des cas isolés' },
  notIsolatedDesc: {
    en: 'The families who shared their stories here are not alone. Many more PR applicants across Canada are in the same situation—some for even longer, with stories that have yet to be heard. Each story on this page represents a family in limbo, dreams deferred, and futures uncertain.',
    zh: '在此分享故事的家庭并不孤单。加拿大各地还有更多永久居民申请人处在同样的境遇中——有些人等待更久，他们的故事尚未被听见。本页的每一个故事，都代表一个悬而未决的家庭、被搁置的梦想与不确定的未来。',
    fr: 'Les familles qui ont partagé leur histoire ici ne sont pas seules. Beaucoup d\'autres demandeurs de RP partout au Canada vivent la même situation—certains depuis encore plus longtemps, avec des récits qui n\'ont pas encore été entendus. Chaque témoignage sur cette page représente une famille en suspens, des rêves reportés et un avenir incertain.',
  },
  notIsolatedTogether: {
    en: 'We are asking for fairness, transparency, and predictable timelines.',
    zh: '我们呼吁公平、透明和可预期的时间线。',
    fr: 'Nous demandons équité, transparence et des délais prévisibles.',
  },
} as const;

export const eventPhotosSection = {
  title: { en: 'Event Photos', zh: '活动照片', fr: 'Photos de l\'événement' },
  extendedTitle: {
    en: 'Extended gallery (March 2026)',
    zh: '更多现场照片（2026年3月）',
    fr: 'Galerie étendue (mars 2026)',
  },
  intro: { en: 'Photos from our movement will be added here after the event.', zh: '活动结束后，我们将在此添加我们运动的照片。', fr: 'Les photos de notre mouvement seront ajoutées ici après l\'événement.' },
  waitingMessage: { en: 'The event has not yet taken place. Photos will be added here after the procession on March 13, 2026. Please check back following the event.', zh: '活动尚未举行。2026年3月13日游行结束后，我们将在此添加照片。请于活动结束后再访。', fr: 'L\'événement n\'a pas encore eu lieu. Les photos seront ajoutées ici après la marche du 13 mars 2026. Merci de revenir après l\'événement.' },
  photosComingSoon: { en: 'Event photos coming soon', zh: '活动照片即将推出', fr: 'Photos de l\'événement à venir' },
  captionPreparing: { en: 'Preparing for the march', zh: '为游行做准备', fr: 'Préparation de la marche' },
  captionUnited: { en: 'United for justice', zh: '为公正团结一心', fr: 'Unis pour la justice' },
  captionStanding: { en: 'Standing together for justice', zh: '为公正并肩而立', fr: 'Debout ensemble pour la justice' },
  captionMonths: { en: '40+ months and counting', zh: '40多个月仍在等待', fr: 'Plus de 40 mois et ça continue' },
  captionProcession: { en: 'Procession to Parliament Hill', zh: '国会山游行', fr: 'Marche vers la Colline du Parlement' },
} as const;

export const eventPage = {
  title: { en: 'VAN501 — Vancouver Action Recap', zh: 'VAN501 — 温哥华行动回顾', fr: 'VAN501 — Bilan de l’action de Vancouver' },
  intro: { en: 'The same movement continues in Vancouver. Join us to demand real, timely action on PR security-screening delays.', zh: '同一场运动来到温哥华。加入我们，要求就PR安调拖延采取真正、及时的行动。', fr: 'Le même mouvement continue à Vancouver. Joignez-vous à nous pour exiger des actions réelles et rapides contre les retards de filtrage de sécurité des demandes de RP.' },
  bannerTitle: { en: 'Past Event: VAN501 — End Indefinite PR Delays', zh: '过往活动：VAN501 — 终结PR无限期拖延', fr: 'Événement passé : VAN501 — Mettre fin aux délais indéfinis de RP' },
  bannerTagline: { en: 'End Discriminatory Security Screening Delays', zh: '终结歧视性安全背景调查拖延', fr: 'Mettons fin aux délais discriminatoires de l\'évaluation de sécurité' },
  joinCampaign: { en: 'JOIN THE CAMPAIGN', zh: '加入行动', fr: 'REJOINDRE LA CAMPAGNE' },
  quickInfoDate: { en: 'Event concluded', zh: '活动已结束', fr: 'Événement terminé' },
  quickInfoTime: { en: '9:00 AM – 12:00 PM', zh: '上午9:00 – 中午12:00', fr: '9 h 00 – 12 h 00' },
  quickInfoPlace: { en: 'Vancouver Art Gallery → IRCC Vancouver Office', zh: '温哥华美术馆 → IRCC 温哥华办公室', fr: 'Vancouver Art Gallery → Bureau IRCC de Vancouver' },
  pressReleasePill: {
    en: 'Read the 3.13 Ottawa press conference release',
    zh: '查看 3.13 渥太华发布会通稿',
    fr: 'Lire le communiqué de presse d’Ottawa du 13 mars',
  },
  whatToBringTitle: { en: 'What to Bring', zh: '携带物品', fr: 'À apporter' },
  whatToBring1: { en: 'Signs or banners (approved — we\'ll provide some)', zh: '标语或横幅（已批准 — 我们会提供部分）', fr: 'Pancartes ou bannières (approuvées — nous en fournirons)' },
  whatToBring2: { en: 'Flyers (approved — we\'ll provide printouts)', zh: '传单（已批准 — 我们会提供印刷品）', fr: 'Tracts (approuvés — nous fournirons des imprimés)' },
  whatToBring3: { en: 'Warm clothing (March in Ottawa — dress for cold)', zh: '保暖衣物（渥太华三月 — 注意防寒）', fr: 'Vêtements chauds (mars à Ottawa — prévoir le froid)' },
  whatToBring4: { en: 'Water and snacks', zh: '水和零食', fr: 'Eau et collations' },
  whatToBring5: { en: 'Your CBSA/GCMS notes (optional, for media)', zh: '您的CBSA/GCMS notes（可选，供媒体）', fr: 'Vos notes CBSA/GCMS (optionnel, pour les médias)' },
  whatToBring6: { en: 'A copy of your story (for journalists)', zh: '您的故事副本（供记者）', fr: 'Une copie de votre témoignage (pour les journalistes)' },
  whatToBring7: { en: 'Positive energy and determination', zh: '积极的态度和决心', fr: 'Énergie positive et détermination' },
  guidelinesTitle: { en: 'Important Guidelines (Per Permit)', zh: '重要须知（按许可要求）', fr: 'Directives importantes (selon le permis)' },
  guidelines1: { en: 'Peaceful & Respectful: This is a peaceful, permitted demonstration', zh: '和平与尊重：这是一次和平、经许可的示威活动', fr: 'Pacifique et respectueux : Il s\'agit d\'une manifestation pacifique et autorisée' },
  guidelines2: { en: 'Keep Sidewalks Clear: The main sidewalk must remain unimpeded for Parliamentarians and the public', zh: '保持人行道畅通：主通道须保持畅通，供议员和公众使用', fr: 'Garder les trottoirs dégagés : Le trottoir principal doit rester libre pour les parlementaires et le public' },
  guidelines3: { en: 'No Fundraising: No fundraising activities on Parliament Hill', zh: '禁止筹款：国会山禁止筹款活动', fr: 'Pas de collecte de fonds : Aucune activité de financement sur la Colline du Parlement' },
  guidelines4: { en: 'No Structures: No props, chairs, or tables — signs, banners, and flyers only', zh: '禁止搭建：禁止道具、椅子或桌子 — 仅标语、横幅和传单', fr: 'Pas de structures : Pas d\'accessoires, chaises ou tables — uniquement pancartes, bannières et tracts' },
  guidelines5: { en: 'Clean Up: Our group is responsible for cleaning the area after the event', zh: '清理：我们负责活动结束后清理场地', fr: 'Nettoyage : Notre groupe est responsable du nettoyage de la zone après l\'événement' },
  guidelines6: { en: 'Be Flexible: Due to construction, we may be asked to relocate — follow all instructions', zh: '保持灵活：因施工我们可能被要求转移 — 请遵守一切指示', fr: 'Rester flexible : En raison des travaux, nous pourrions devoir nous déplacer — suivez toutes les instructions' },
  guidelines7: { en: 'Media Ready: Be prepared to share your story with press', zh: '配合媒体：准备好向媒体分享您的故事', fr: 'Prêt pour les médias : Soyez prêt à partager votre témoignage avec la presse' },
  ctaTitle: { en: 'Will You Stand With Us?', zh: '您会与我们站在一起吗？', fr: 'Tiendrez-vous avec nous ?' },
  ctaText: { en: 'Your presence matters. Every person who shows up sends a message that we will not accept discriminatory treatment.', zh: '您的参与很重要。每一个到场的人都在传递我们不会接受歧视性对待的信息。', fr: 'Votre présence compte. Chaque personne qui se présente envoie un message que nous n\'accepterons pas le traitement discriminatoire.' },
} as const;

export const joinPage = {
  title: { en: 'Join Our Movement', zh: '加入我们', fr: 'Rejoignez notre mouvement' },
  intro: { en: 'Together we are stronger. Add your voice to thousands demanding fair treatment.', zh: '团结力量大。与数千人一起发声，要求公平对待。', fr: 'Ensemble nous sommes plus forts. Ajoutez votre voix à des milliers de personnes exigeant un traitement équitable.' },
  shareStory: { en: 'Share Your Story', zh: '分享你的故事', fr: 'Partagez votre histoire' },
  stayConnected: { en: 'Stay Connected', zh: '保持联系', fr: 'Restez connecté' },
  speakOut: { en: 'Speak Out', zh: '发声', fr: 'Parlez' },
  donateTitle: { en: 'Donate', zh: '捐款', fr: 'Faire un don' },
  donateMethod: { en: 'We accept e-Transfer (Canada only). Send to:', zh: '我们接受电子转账（仅限加拿大）。请发送至：', fr: 'Nous acceptons les virements Interac (Canada seulement). Envoyer à :' },
  donateEmail: { en: 'voicesforfairscreening@gmail.com', zh: 'voicesforfairscreening@gmail.com', fr: 'voicesforfairscreening@gmail.com' },
  donateNoReceipt: { en: 'We cannot provide donation tax credit receipts at this time.', zh: '我们目前无法提供捐款抵税收据。', fr: 'Nous ne pouvons pas fournir de reçus d\'impôt pour dons pour le moment.' },
} as const;

/** E-petition banner and "How to sign" modal (priority: e-7341). */
export const petitionBanner = {
  title: {
    en: 'Petition to the House of Commons — sign e‑petition e‑7341',
    zh: '致加拿大下议院请愿 — 请签署电子请愿 e‑7341',
    fr: 'Pétition à la Chambre des communes — signez la pétition électronique e‑7341',
  },
  intro: {
    en: 'e‑7341 asks Parliament to examine immigration security screening delays and establish clear accountability, transparency, and risk-based resource allocation.',
    zh: 'e‑7341 呼吁国会审查移民安全背景调查拖延问题，并建立明确问责、透明机制和基于风险的资源配置。',
    fr: 'La pétition e‑7341 demande au Parlement d’examiner les retards du filtrage de sécurité en immigration et d’établir une responsabilisation claire, de la transparence et une allocation des ressources fondée sur le risque.',
  },
  signBtn: { en: 'Sign the e‑petition', zh: '签署电子请愿', fr: 'Signer la pétition électronique' },
  helpBtn: { en: 'How to sign (step‑by‑step)', zh: '如何签署（分步说明）', fr: 'Comment signer' },
  meta: {
    en: 'Current priority petition: e‑7341 (Citizenship and Immigration).',
    zh: '当前优先请愿：e‑7341（公民与移民部/IRCC）。',
    fr: 'Pétition prioritaire actuelle : e‑7341 (Citoyenneté et Immigration).',
  },
  goal: {
    en: 'Call upon the House to request a Public Safety Committee study on screening delays, with concrete recommendations for resources, accountability, triage, and independent review.',
    zh: '呼吁下议院要求公共安全与国家安全常设委员会就安调拖延开展研究，并就资源、问责、分流机制和独立审查提出具体建议。',
    fr: 'Demander à la Chambre de charger le Comité permanent de la sécurité publique d’étudier les retards de filtrage et de recommander des mesures concrètes sur les ressources, la responsabilisation, le triage et l’examen indépendant.',
  },
  mpRole: { en: 'Member of Parliament', zh: '国会议员', fr: 'Députée' },
  mpDetails: {
    en: 'Waterloo · Liberal Caucus · Ontario',
    zh: '滑铁卢选区 · 自由党党团 · 安大略省',
    fr: 'Waterloo · Caucus libéral · Ontario',
  },
  mpCredit: {
    en: 'Sponsor of e‑petition e‑7341 (Citizenship and Immigration)',
    zh: '电子请愿 e‑7341 赞助人（公民与移民）',
    fr: 'Marraine de la pétition électronique e‑7341 (Citoyenneté et Immigration)',
  },
  whyMatters: {
    en: 'Why this petition matters',
    zh: '为何这项请愿重要',
    fr: 'Pourquoi cette pétition compte',
  },
  whereas1: {
    en: 'Prolonged security screening for applicants residing in Canada may create avoidable public-safety risks by delaying identification and resolution of cases, including high-risk cases;',
    zh: '在加拿大境内申请人的安全背景调查长期拖延，可能因延误案件（包括高风险案件）的识别与处置而带来可避免的公共安全风险；',
    fr: 'Le prolongement du filtrage de sécurité des demandeurs résidant au Canada peut créer des risques évitables pour la sécurité publique en retardant l’identification et le traitement des dossiers, y compris les cas à haut risque ;',
  },
  whereas2: {
    en: 'No single authority is held accountable for timeliness and service standards across the multi-agency screening process;',
    zh: '在多机构参与的审查流程中，尚无单一责任主体对时效与服务标准承担明确问责；',
    fr: 'Aucune autorité unique n’est tenue responsable du respect des délais et des normes de service dans ce processus multi-agences ;',
  },
  whereas3: {
    en: 'Significant and persistent backlogs suggest a structural mismatch between referral volumes and screening capacity;',
    zh: '显著且持续的积压表明，转介量与审查能力之间存在结构性不匹配；',
    fr: 'Des arriérés importants et persistants indiquent un décalage structurel entre le volume des renvois et la capacité de filtrage ;',
  },
  whereas4: {
    en: 'High favourable outcomes suggest inefficient use of limited resources, with lower-risk cases receiving extensive review while higher-risk cases may not receive timely attention.',
    zh: '较高的“有利结果”比例表明有限资源存在配置低效：低风险案件被过度审查，而高风险案件可能未能获得及时关注。',
    fr: 'Le taux élevé de résultats favorables laisse croire à une utilisation inefficace des ressources limitées : des dossiers à faible risque font l’objet d’un examen étendu, tandis que des cas à haut risque pourraient ne pas recevoir une attention rapide.',
  },
  modalTitle: {
    en: 'How to sign the e‑petition (step‑by‑step)',
    zh: '如何签署电子请愿（分步说明）',
    fr: 'Comment signer la pétition électronique (étape par étape)',
  },
  modalNote: {
    en: 'You need to be a Canadian citizen or a resident of Canada and confirm your email for your signature to count.',
    zh: '重要提示：只有点击确认邮件中的链接后，您的签名才算有效，请不要在提交表格后就停下。您须为加拿大公民或加拿大居民（包括持工签、学签等在加合法居留者），并在确认邮箱后签名才有效。',
    fr: 'Important : votre signature ne compte qu’après avoir cliqué sur le lien dans le courriel de confirmation. Ne vous arrêtez pas après avoir soumis le formulaire. Vous devez aussi être citoyen canadien ou résident du Canada et confirmer votre courriel pour que votre signature compte.',
  },
  step1Title: { en: 'Open the petition page.', zh: '打开请愿页面。', fr: 'Ouvrez la page de la pétition.' },
  step1GoTo: { en: 'Go to ', zh: '在浏览器中打开 ', fr: 'Allez sur ' },
  step1InBrowser: { en: ' in your browser.', zh: '。', fr: ' dans votre navigateur.' },
  tip1Label: { en: 'Step 1 – Personal info', zh: '步骤 1 – 个人信息', fr: 'Étape 1 – Renseignements personnels' },
  tip1Text: {
    en: 'Type your first name, last name and a real email you can check right away.',
    zh: '填写您的姓名以及能立即查收的真实邮箱。',
    fr: 'Indiquez votre prénom, nom et une adresse courriel que vous pouvez consulter tout de suite.',
  },
  tip2Label: { en: 'Step 2 – Address', zh: '步骤 2 – 地址', fr: 'Étape 2 – Adresse' },
  tip2Text: {
    en: 'Choose your province and enter the same postal code you use in daily life.',
    zh: '选择您的省份并填写日常使用的邮政编码。',
    fr: 'Choisissez votre province et entrez le code postal que vous utilisez au quotidien.',
  },
  tip3Label: { en: 'Step 3 – Eligibility box', zh: '步骤 3 – 资格选项', fr: 'Étape 3 – Case d\'admissibilité' },
  tip3Text: {
    en: 'Tick “I am a Canadian citizen or a resident of Canada” if this is true for you.',
    zh: '若您符合条件，请勾选「我是加拿大公民或加拿大居民」。',
    fr: 'Cochez « Je suis citoyen canadien ou résident du Canada » si cela s\'applique à vous.',
  },
  step2Title: {
    en: 'Fill in your details carefully.',
    zh: '仔细填写您的信息。',
    fr: 'Remplissez vos coordonnées avec soin.',
  },
  step2Body: {
    en: 'On the form, complete your personal information, address and eligibility checkbox, then click “Sign”.',
    zh: '在表格中填写个人信息、地址并勾选资格选项框，然后点击 “Sign”（签署）。',
    fr: 'Dans le formulaire, remplissez vos renseignements personnels, votre adresse et la case d’admissibilité, puis cliquez sur « Sign ».',
  },
  step3Title: { en: 'Submit the form and wait for the email.', zh: '提交表格并等待邮件。', fr: 'Soumettez le formulaire et attendez le courriel.' },
  step3List1: { en: 'First and last name (must match your ID);', zh: '姓名（须与证件一致）；', fr: 'Prénom et nom (doivent correspondre à votre pièce d\'identité) ;' },
  step3List2: { en: 'Email address (one you can access immediately);', zh: '邮箱（能立即查收的）；', fr: 'Adresse courriel (accessible immédiatement) ;' },
  step3List3: { en: 'City, province, and postal code;', zh: '城市、省份和邮政编码；', fr: 'Ville, province et code postal ;' },
  step3List4: { en: 'Status (Canadian citizen or resident in Canada).', zh: '身份（加拿大公民或加拿大居民）。', fr: 'Statut (citoyen canadien ou résident au Canada).' },
  step3Consent: {
    en: 'Read the declaration and check the consent box if you agree, then click Submit.',
    zh: '阅读声明，若同意请勾选同意框，然后点击提交。',
    fr: 'Lisez la déclaration, cochez la case de consentement si vous êtes d\'accord, puis cliquez sur Soumettre.',
  },
  step4Title: { en: 'Open the confirmation email.', zh: '打开确认邮件。', fr: 'Ouvrez le courriel de confirmation.' },
  step4Body: {
    en: 'Within a few minutes you should receive a message from the House of Commons petitions system. Click “Please confirm your support to complete process”.',
    zh: '几分钟内您会收到国会下议院请愿系统的邮件。点击其中的 “Please confirm your support to complete process”。',
    fr: 'Sous peu vous recevrez un message du système de pétitions de la Chambre des communes. Cliquez sur « Please confirm your support to complete process ».',
  },
  step5Title: { en: 'Make sure your signature is confirmed.', zh: '确保您的签名已确认。', fr: 'Assurez-vous que votre signature est confirmée.' },
  step5Body: {
    en: 'Your signature only counts after you click the link in the confirmation email. If you don’t see the email, check your spam / junk folder.',
    zh: '只有点击确认邮件中的链接后，签名才有效。若未收到邮件，请查看垃圾邮件文件夹。',
    fr: 'Votre signature ne compte qu\'après avoir cliqué sur le lien dans le courriel de confirmation. Si vous ne voyez pas le courriel, vérifiez les indésirables / courrier indésirable.',
  },
  shareAsk: {
    en: 'After confirming, please share the petition with friends, family, and colleagues who are Canadian citizens or residents in Canada. Every confirmed signature helps.',
    zh: '确认后请将请愿分享给加拿大公民或加拿大居民的朋友、家人和同事。每一份确认的签名都有帮助。',
    fr: 'Après confirmation, merci de partager la pétition avec des amis, la famille et des collègues qui sont citoyens canadiens ou résidents au Canada. Chaque signature confirmée compte.',
  },
  shortStepsZh: {
    en: 'Short steps: Open the petition link → Click Sign → Enter name, city, province, email, status → Check the consent box and Submit → Click the confirmation link in the email to complete.',
    zh: '简要步骤：打开请愿链接，点击签名按钮 → 填写姓名、城市、省份、邮箱、身份 → 勾选同意并提交 → 到邮箱点击确认链接，签名才算成功 ✅',
    fr: 'En bref : Ouvrez le lien de la pétition → Cliquez sur Signer → Saisissez nom, ville, province, courriel, statut → Cochez la case et Soumettre → Cliquez sur le lien de confirmation dans le courriel pour valider ✅',
  },
  officialPage: { en: 'the official e‑7341 page', zh: 'e‑7341 官方页面', fr: 'la page officielle e‑7341' },
} as const;

export type Lang = 'en' | 'zh' | 'fr';
