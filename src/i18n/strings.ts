/**
 * UI strings for English, Chinese (Simplified), and French.
 * Use with .lang-en / .lang-zh / .lang-fr and html[data-lang] to show the right language.
 */
export const nav = {
  brand: { en: 'PR Justice Now', zh: 'PR 公正行动', fr: 'Justice PR Maintenant' },
  declaration: { en: 'Declaration', zh: '宣言', fr: 'Déclaration' },
  demands: { en: 'Our Demands', zh: '我们的诉求', fr: 'Nos revendications' },
  stories: { en: 'Stories', zh: '故事', fr: 'Témoignages' },
  event: { en: 'Event', zh: '活动', fr: 'Événement' },
  joinUs: { en: 'Join Us', zh: '加入我们', fr: 'Rejoignez-nous' },
} as const;

export const announcement = {
  event: { en: 'Procession to Parliament Hill — March 13, 2026 — Ottawa, Ontario', zh: '国会山游行 — 2026年3月13日 — 渥太华，安大略省', fr: 'Marche vers la Colline du Parlement — 13 mars 2026 — Ottawa, Ontario' },
} as const;

export const hero = {
  eventTitle: { en: 'Procession to Parliament Hill', zh: '国会山游行', fr: 'Marche vers la Colline du Parlement' },
  eventDetails: { en: 'Friday, March 13, 2026 · 8:30 AM – 4:30 PM · Ottawa, Ontario', zh: '2026年3月13日 周五 · 上午8:30 – 下午4:30 · 渥太华，安大略省', fr: 'Vendredi 13 mars 2026 · 8 h 30 – 16 h 30 · Ottawa, Ontario' },
  eventDetailsLink: { en: 'Event Details', zh: '活动详情', fr: 'Détails de l\'événement' },
  joinMovement: { en: 'Join Our Movement', zh: '加入我们', fr: 'Rejoignez le mouvement' },
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
  copyright: { en: '© 2026 Justice for Chinese PR Applicants.', zh: '© 2026 华人PR申请人公正维权。', fr: '© 2026 Justice pour les demandeurs de RP chinois.' },
  footerNote: { en: 'We advocate for fair policy, not against any group or nation. We believe in Canada\'s values of equality and justice.', zh: '我们倡导公平政策，不针对任何群体或国家。我们认同加拿大平等与公正的价值观。', fr: 'Nous prônons des politiques équitables, sans nous opposer à aucun groupe ni pays. Nous croyons aux valeurs d\'égalité et de justice du Canada.' },
  ircc: { en: 'IRCC Website', zh: 'IRCC 官网', fr: 'Site IRCC' },
  processingTimes: { en: 'Processing Times', zh: '审理时间', fr: 'Délais de traitement' },
  gcms: { en: 'Order GCMS Notes', zh: '申请 GCMS  notes', fr: 'Commander les notes GCMS' },
  findMP: { en: 'Find Your MP', zh: '查找您的国会议员', fr: 'Trouver votre député' },
} as const;

export const declarationSection = {
  title: { en: 'Declaration of Justice', zh: '公正宣言', fr: 'Déclaration pour la justice' },
  introTitle: { en: 'We Stand for Fair Immigration Processing', zh: '我们主张公平的移民审理', fr: 'Nous défendons un traitement équitable de l\'immigration' },
  introParagraph: {
    en: 'We are Chinese immigrants, students, workers, and families who have followed every rule, paid every fee, and waited patiently for our Permanent Residence applications to be processed. Yet we face unprecedented delays of 40+ months due to prolonged security screening—while IRCC\'s estimated processing time is 12 months (last updated: January 14, 2026).',
    zh: '我们是华人移民、学生、工作者和家庭，遵守了每一项规则，缴纳了每一项费用，耐心等待永久居民申请得到审理。然而，由于漫长的安全背景调查，我们面临超过40个月的空前拖延——而IRCC公布的审理时间约为12个月（最后更新：2026年1月14日）。',
    fr: 'Nous sommes des immigrants chinois, des étudiants, des travailleurs et des familles qui avons respecté toutes les règles, payé tous les frais et attendu patiemment que nos demandes de résidence permanente soient traitées. Pourtant, nous faisons face à des délais sans précédent de plus de 40 mois en raison d\'une évaluation de sécurité prolongée—alors que le délai de traitement estimé par l\'IRCC est de 12 mois (dernière mise à jour : 14 janvier 2026).',
  },
  declareThat: { en: 'We Declare That:', zh: '我们声明：', fr: 'Nous déclarons que :' },
  declareEquality: {
    en: 'We deserve the same processing standards and timelines as applicants from other countries. Current delays disproportionately affect Chinese applicants.',
    zh: '我们理应与其他国家申请人享有相同的审理标准和时限。目前的拖延对华人申请人影响尤为严重。',
    fr: 'Nous méritons les mêmes normes et délais de traitement que les demandeurs d\'autres pays. Les délais actuels affectent de manière disproportionnée les demandeurs chinois.',
  },
  declareTransparency: {
    en: 'We have the right to know why security screening takes 3-5+ years when all admissibility requirements are already met. We deserve clear explanations, not indefinite silence.',
    zh: '当所有准入要求均已满足时，我们有权知悉为何安全背景调查需要3至5年以上。我们理应得到明确解释，而非无限期的沉默。',
    fr: 'Nous avons le droit de savoir pourquoi l\'évaluation de sécurité prend 3 à 5 ans et plus lorsque toutes les exigences d\'admissibilité sont déjà remplies. Nous méritons des explications claires, pas un silence indéfini.',
  },
  declareFairness: {
    en: 'Security screening should not be used as a tool for discrimination. Thorough security checks are reasonable; indefinite delays without explanation are not.',
    zh: '安全背景调查不应被用作歧视工具。严格的安全审查是合理的；无解释的无限期拖延则不是。',
    fr: 'L\'évaluation de sécurité ne doit pas servir d\'outil de discrimination. Des contrôles de sécurité rigoureux sont raisonnables ; des délais indéfinis sans explication ne le sont pas.',
  },
  declareAccountability: {
    en: 'IRCC\'s pattern of missed deadlines and broken promises shows systematic failure. We demand accountability for these delays that destroy lives and futures.',
    zh: 'IRCC一再错过期限、违背承诺，显示出系统性的失败。我们要求对这些摧毁生活和未来的拖延追究责任。',
    fr: 'La tendance de l\'IRCC à manquer les échéances et à ne pas tenir ses promesses montre un échec systémique. Nous exigeons une responsabilisation pour ces délais qui détruisent des vies et des avenirs.',
  },
  declareHumanDignity: {
    en: 'We are not case numbers. We are human beings with families, careers, children, and dreams. Our lives are on hold while bureaucracy fails us.',
    zh: '我们不是档案编号。我们是有家庭、事业、子女和梦想的人。在官僚体制辜负我们的同时，我们的人生被搁置。',
    fr: 'Nous ne sommes pas des numéros de dossier. Nous sommes des êtres humains avec des familles, des carrières, des enfants et des rêves. Nos vies sont en attente alors que la bureaucratie nous fait défaut.',
  },
  humanCost: { en: 'The Human Cost', zh: '人道代价', fr: 'Le coût humain' },
  impactIntro: { en: 'These delays have severe consequences:', zh: '这些拖延造成严重后果：', fr: 'Ces délais ont de graves conséquences :' },
  impactTuition: {
    en: 'Children lose eligibility for domestic tuition ($130,000-200,000 per child)',
    zh: '子女失去国内学费资格（每名子女约13万至20万加元）',
    fr: 'Les enfants perdent l\'éligibilité aux frais de scolarité nationaux (130 000 à 200 000 $ par enfant)',
  },
  impactReunite: {
    en: 'Families cannot reunite with elderly parents',
    zh: '家庭无法与年迈父母团聚',
    fr: 'Les familles ne peuvent pas se réunir avec leurs parents âgés',
  },
  impactCareers: {
    en: 'Careers are stalled and opportunities lost',
    zh: '职业停滞，机会丧失',
    fr: 'Les carrières sont bloquées et les opportunités perdues',
  },
  impactMentalHealth: {
    en: 'Mental health suffers from years of uncertainty',
    zh: '多年不确定性损害心理健康',
    fr: 'La santé mentale souffre d\'années d\'incertitude',
  },
  impactWorkPermits: {
    en: 'Work permits expire, forcing families to leave Canada',
    zh: '工签到期，迫使家庭离开加拿大',
    fr: 'Les permis de travail expirent, forçant les familles à quitter le Canada',
  },
  impactMedicalExams: {
    en: 'Repeated medical exams and police certificates cost thousands',
    zh: '重复体检和无犯罪证明花费数千加元',
    fr: 'Les examens médicaux et certificats de police répétés coûtent des milliers de dollars',
  },
  conclusion: { en: 'We have waited long enough. We demand action now.', zh: '我们已等待太久。我们要求立即行动。', fr: 'Nous avons assez attendu. Nous exigeons des mesures maintenant.' },
} as const;

/** Labels for the "We Declare That" list (bold prefix before each paragraph). */
export const declarationListLabels = {
  equality: { en: 'Equality:', zh: '平等：', fr: 'Égalité :' },
  transparency: { en: 'Transparency:', zh: '透明：', fr: 'Transparence :' },
  fairness: { en: 'Fairness:', zh: '公平：', fr: 'Équité :' },
  accountability: { en: 'Accountability:', zh: '问责：', fr: 'Responsabilité :' },
  humanDignity: { en: 'Human Dignity:', zh: '人的尊严：', fr: 'Dignité humaine :' },
} as const;

export const demandsSection = {
  title: { en: 'What We Are Calling For', zh: '我们的诉求', fr: 'Nos revendications' },
  intro: { en: 'We call on the Canadian Government, Immigration Minister, and IRCC to take immediate action:', zh: '我们呼吁加拿大政府、移民部长及IRCC立即采取行动：', fr: 'Nous demandons au gouvernement canadien, au ministre de l\'Immigration et à l\'IRCC d\'agir immédiatement :' },
  supportTitle: { en: 'Support Our Demands', zh: '支持我们的诉求', fr: 'Soutenez nos revendications' },
  supportDesc: { en: 'Add your voice to thousands of affected families. Join us at Parliament Hill.', zh: '与数千个受影响家庭一起发声。加入我们的国会山游行。', fr: 'Ajoutez votre voix à des milliers de familles touchées. Rejoignez-nous sur la Colline du Parlement.' },
  joinMovement: { en: 'Join the Movement', zh: '加入行动', fr: 'Rejoindre le mouvement' },
} as const;

export const demandTitles: Record<string, { en: string; zh: string; fr: string }> = {
  immediate: { en: 'Immediate Processing', zh: '立即审理', fr: 'Traitement immédiat' },
  equal: { en: 'Equal Treatment', zh: '平等对待', fr: 'Traitement égal' },
  transparency: { en: 'Transparency & Communication', zh: '透明与沟通', fr: 'Transparence et communication' },
  accountability: { en: 'Accountability for Delays', zh: '对拖延负责', fr: 'Responsabilité des délais' },
  humanitarian: { en: 'Humanitarian Consideration', zh: '人道考量', fr: 'Considération humanitaire' },
  temporary: { en: 'Temporary Measures', zh: '临时措施', fr: 'Mesures temporaires' },
  mandamus: { en: 'Mandamus Reform', zh: '强制令改革', fr: 'Réforme du mandamus' },
  apology: { en: 'Public Apology', zh: '公开道歉', fr: 'Excuses publiques' },
};

export const demandBodies: Record<string, { en: string; zh: string; fr: string }> = {
  immediate: {
    en: 'Complete all security screenings for cases pending over 2 years within 90 days. No more indefinite delays.',
    zh: '在90天内完成所有积压超过2年的安全背景调查。不再无限期拖延。',
    fr: 'Terminer toutes les évaluations de sécurité pour les dossiers en attente depuis plus de 2 ans dans les 90 jours. Plus de délais indéfinis.',
  },
  equal: {
    en: 'Ensure Chinese applicants receive the same processing standards and timelines as applicants from other countries. End discriminatory practices.',
    zh: '确保华人申请人享有与其他国家申请人相同的审理标准和时限。终止歧视性做法。',
    fr: 'Garantir que les demandeurs chinois bénéficient des mêmes normes et délais de traitement que les demandeurs d\'autres pays. Mettre fin aux pratiques discriminatoires.',
  },
  transparency: {
    en: 'Provide clear explanations for security screening delays beyond 6 months. Give applicants specific information about their cases, not generic responses.',
    zh: '对超过6个月的安全背景调查拖延提供明确解释。向申请人提供其个案的具体信息，而非笼统回复。',
    fr: 'Fournir des explications claires pour les délais d\'évaluation de sécurité au-delà de 6 mois. Donner aux demandeurs des informations précises sur leur dossier, pas des réponses génériques.',
  },
  accountability: {
    en: 'Hold IRCC accountable for missed deadlines and processing failures. Establish enforceable timelines with consequences for non-compliance.',
    zh: '追究IRCC对错过期限和审理失败的责任。制定可执行的时限并对不遵守行为施加后果。',
    fr: 'Tenir l\'IRCC responsable des échéances manquées et des échecs de traitement. Établir des délais exécutoires avec des conséquences en cas de non-conformité.',
  },
  humanitarian: {
    en: 'Implement expedited processing for humanitarian cases: families with children in school, expired work permits, elderly parents, medical emergencies.',
    zh: '对人道主义个案实施加急审理：子女在学的家庭、工签过期、年迈父母、医疗紧急情况。',
    fr: 'Mettre en œuvre un traitement accéléré pour les cas humanitaires : familles avec enfants scolarisés, permis de travail expirés, parents âgés, urgences médicales.',
  },
  temporary: {
    en: 'Grant domestic tuition eligibility and temporary PR benefits to applicants who have passed all other requirements while security screening completes.',
    zh: '在安全背景调查完成期间，对已满足其他所有要求的申请人给予国内学费资格和临时PR福利。',
    fr: 'Accorder l\'éligibilité aux frais de scolarité nationaux et des avantages temporaires de RP aux demandeurs qui ont satisfait à toutes les autres exigences pendant que l\'évaluation de sécurité se termine.',
  },
  mandamus: {
    en: 'Support judicial remedies for unreasonable delays. Stop using "national security" as blanket justification to dismiss legitimate Mandamus applications.',
    zh: '支持对不合理拖延的司法救济。停止以「国家安全」为笼统理由驳回合法的强制令申请。',
    fr: 'Soutenir les recours judiciaires pour les délais déraisonnables. Cesser d\'utiliser la « sécurité nationale » comme justification générale pour rejeter les demandes de mandamus légitimes.',
  },
  apology: {
    en: 'Minister of Immigration must publicly acknowledge the disproportionate impact on Chinese applicants and commit to concrete solutions with timelines.',
    zh: '移民部长必须公开承认对华人申请人的不成比例影响，并承诺在有时限的前提下落实具体解决方案。',
    fr: 'Le ministre de l\'Immigration doit reconnaître publiquement l\'impact disproportionné sur les demandeurs chinois et s\'engager sur des solutions concrètes avec des échéanciers.',
  },
};

export const storiesSection = {
  title: { en: 'Our Stories', zh: '我们的故事', fr: 'Nos témoignages' },
  subtitle: { en: 'Real people, real families, real consequences. These are the human costs of indefinite security screening delays.', zh: '真实的人、真实的家庭、真实的代价。这是无限期安全背景调查拖延带来的人道代价。', fr: 'De vraies personnes, de vraies familles, de vraies conséquences. Voici le coût humain des délais indéfinis de l\'évaluation de sécurité.' },
  moreStories: { en: 'More Stories Coming Soon', zh: '更多故事即将推出', fr: 'D\'autres témoignages à venir' },
  shareStory: { en: 'Share Your Story', zh: '分享你的故事', fr: 'Partagez votre histoire' },
} as const;

export const eventPhotosSection = {
  title: { en: 'Event Photos', zh: '活动照片', fr: 'Photos de l\'événement' },
} as const;

export const eventPage = {
  title: { en: 'Procession to Parliament Hill', zh: '国会山游行', fr: 'Marche vers la Colline du Parlement' },
  intro: { en: 'Join us as we march for justice and demand action from the Canadian government.', zh: '加入我们，为公正而游行，要求加拿大政府采取行动。', fr: 'Rejoignez-nous pour marcher pour la justice et exiger des actions du gouvernement canadien.' },
  bannerTitle: { en: 'March for PR Justice', zh: '为PR公正而游行', fr: 'Marche pour la justice RP' },
  bannerTagline: { en: 'End Discriminatory Security Screening Delays', zh: '终结歧视性安全背景调查拖延', fr: 'Mettons fin aux délais discriminatoires de l\'évaluation de sécurité' },
  joinCampaign: { en: 'JOIN THE CAMPAIGN', zh: '加入行动', fr: 'REJOINDRE LA CAMPAGNE' },
} as const;

export const joinPage = {
  title: { en: 'Join Our Movement', zh: '加入我们', fr: 'Rejoignez notre mouvement' },
  intro: { en: 'Together we are stronger. Add your voice to thousands demanding fair treatment.', zh: '团结力量大。与数千人一起发声，要求公平对待。', fr: 'Ensemble nous sommes plus forts. Ajoutez votre voix à des milliers de personnes exigeant un traitement équitable.' },
  shareStory: { en: 'Share Your Story', zh: '分享你的故事', fr: 'Partagez votre histoire' },
  stayConnected: { en: 'Stay Connected', zh: '保持联系', fr: 'Restez connecté' },
  speakOut: { en: 'Speak Out', zh: '发声', fr: 'Parlez' },
} as const;

export type Lang = 'en' | 'zh' | 'fr';
