const state = {
  lang: localStorage.getItem('babyCareLang') || 'zh',
  filter: 'all'
};

const UCSF_INFO_URL = 'https://www.ucsfhealth.org/patients-visitors/support-services/great-expectations-pregnancy-classes';

const i18n = {
  zh: {
    title: '妈妈爸爸奶奶宝宝照护计划',
    subtitle: '6个月分工、UCSF已报名课程、课程详情与完成进度追踪',
    reset: '重置进度',
    courseProgressLabel: '课程完成度',
    tabRoles: '6个月分工', tabEnrolled: 'UCSF已报名', tabCourses: '课程详情', tabSafety: '安全红线', tabDeploy: '中国部署',
    rolesEyebrow: 'Care model', rolesTitle: '出生后6个月简单分工',
    outsourcingTitle: '家务外包/自动化边界',
    outsourceFood: '大人的饭有订阅送餐；月子餐可以另外订；爸爸公司包午餐和晚餐。',
    outsourceGrocery: '买菜主要靠配送；临时缺东西楼下5分钟有超市。',
    outsourceLaundry: '公寓有公共洗衣房，随时下去洗；奶瓶用自动清洗消毒机器。',
    outsourceCleaning: '家里有扫地机器人和吸尘器；需要时可以请清洁工。',
    outsourceTransport: '出门不用开车，可以坐 Waymo 或打车。',
    enrolledEyebrow: 'Booked classes', enrolledTitle: 'UCSF 已报名课程',
    enrolledNote: '这些是妈妈和爸爸已经报名的 UCSF 线下课程，按日期排序。',
    coursesEyebrow: 'Training library', coursesTitle: '课程详情',
    coursesNote: '中文资源和英文资源分开列出。已删除 Stanford Digital Medic 中文链接，因为 Mandarin Chinese 页面目前主要显示 COVID 内容，不适合当母婴课程。YouTube 资源可打开字幕或自动翻译中文；中国大陆网络环境下，YouTube 本身可能无法直接访问。',
    filterAll: '全部', filterZh: '中文资源', filterEn: '英文资源', filterReq: '必修',
    safetyEyebrow: 'Non-negotiables', safetyTitle: '奶奶版冰箱安全红线',
    deployTitle: '中国可访问部署建议',
    deploy1: '最稳妥：上传整个文件夹到阿里云 OSS、腾讯云 COS 或华为云 OBS 的静态网站托管。',
    deploy2: '只需要三个核心文件：index.html、styles.css、app.js；不依赖外部字体、外部 JS 或嵌入视频。',
    deploy3: '如果用中国大陆服务器/对象存储并绑定自有域名，通常需要做 ICP 备案。',
    deploy4: '课程视频不要嵌入页面，保持为普通链接；这样网站本身在中国更稳，外部平台可用性单独处理。',
    footer: '进度只保存在当前浏览器本地，不上传。',
    who: '谁该看', time: '建议时间', summary: '概要', takeaway: '课程总结', open: '打开链接', done: '已完成', required: '必修', optional: '选修', tbd: '链接待定',
    date: '日期', hours: '时间', location: '地点', attendees: '人数', status: '状态', classType: '类型'
  },
  en: {
    title: 'Baby Care Plan for Mother, Father, and Grandmother',
    subtitle: '6-month roles, enrolled UCSF classes, course details, and completion tracking',
    reset: 'Reset progress',
    courseProgressLabel: 'Course progress',
    tabRoles: '6-Month Roles', tabEnrolled: 'UCSF Booked', tabCourses: 'Course Details', tabSafety: 'Safety Rules', tabDeploy: 'China Hosting',
    rolesEyebrow: 'Care model', rolesTitle: 'Simple 6-month family care plan',
    outsourcingTitle: 'Household outsourcing / automation boundary',
    outsourceFood: 'Adult meals are covered by meal delivery; postpartum meals can be ordered; father has lunch and dinner at work.',
    outsourceGrocery: 'Groceries are mostly delivered; urgent items can be bought at the supermarket 5 minutes downstairs.',
    outsourceLaundry: 'The apartment has shared laundry rooms available anytime; bottles are handled by an automatic bottle washer/sterilizer.',
    outsourceCleaning: 'Robot vacuums and a Dyson handle routine cleaning; cleaners can be hired when needed.',
    outsourceTransport: 'No driving needed; Waymo or rideshare can be used.',
    enrolledEyebrow: 'Booked classes', enrolledTitle: 'UCSF Enrolled Classes',
    enrolledNote: 'These are the in-person UCSF classes already booked for mother and father, sorted by date.',
    coursesEyebrow: 'Training library', coursesTitle: 'Course Details',
    coursesNote: 'Chinese and English resources are separated. Stanford Digital Medic Chinese was removed because the Mandarin Chinese page currently mainly shows COVID content, not maternal/newborn training. YouTube resources can use Chinese captions/auto-translate, but YouTube itself may not be directly reachable from mainland China.',
    filterAll: 'All', filterZh: 'Chinese', filterEn: 'English', filterReq: 'Required',
    safetyEyebrow: 'Non-negotiables', safetyTitle: 'Fridge Safety Rules for Grandmother',
    deployTitle: 'China-accessible deployment plan',
    deploy1: 'Most stable option: upload this folder to Alibaba Cloud OSS, Tencent Cloud COS, or Huawei Cloud OBS static website hosting.',
    deploy2: 'The core files are index.html, styles.css, and app.js; there are no external fonts, external JavaScript, or embedded videos.',
    deploy3: 'If you use mainland China hosting/object storage with your own domain, ICP filing is usually required.',
    deploy4: 'Keep course videos as ordinary links rather than embedded players; this keeps the site itself stable while each external platform is handled separately.',
    footer: 'Progress is saved only in this browser via localStorage. Nothing is uploaded.',
    who: 'Who should watch', time: 'Best time', summary: 'Summary', takeaway: 'Takeaway', open: 'Open link', done: 'Done', required: 'Required', optional: 'Optional', tbd: 'Link TBD',
    date: 'Date', hours: 'Time', location: 'Location', attendees: 'Attendees', status: 'Status', classType: 'Type'
  }
};

const roles = [
  {
    monthZh: '第1个月', monthEn: 'Month 1',
    titleZh: '恢复 + 建立奶量 + 适应新生儿', titleEn: 'Recovery, milk supply, newborn adjustment',
    momZh: '恢复身体、建立奶量、挤奶/喂奶、和宝宝建立联系。', momEn: 'Recover, establish supply, nurse/pump, and bond with baby.',
    dadZh: '1个月不受打扰陪产假；夜里多承担换尿布、拍嗝、安抚、交接。', dadEn: 'One uninterrupted month of leave; take more night diapering, burping, soothing, and handoffs.',
    grandmaZh: '照顾妈妈和宝宝：抱宝宝、哄宝宝、换尿布、看宝宝安全睡觉，帮助妈妈恢复。', grandmaEn: 'Support mother and baby: holding, soothing, diapering, watching safe sleep, and helping mother recover.'
  },
  {
    monthZh: '第2-5个月', monthEn: 'Months 2-5',
    titleZh: '稳定节奏 + 保护妈妈睡眠', titleEn: 'Stabilize rhythm and protect mother’s sleep',
    momZh: '白天主领宝宝喂养、陪伴和日常节奏。', momEn: 'Daytime lead for feeding, interaction, and routine.',
    dadZh: '恢复工作；下班后和周末分担。需要时可短时间回家支援。', dadEn: 'Back to work; cover evenings and weekends. Can come home briefly if needed.',
    grandmaZh: '晚上主领照护，让妈妈尽量睡好、休息好。', grandmaEn: 'Nighttime lead to help mother sleep and recover.'
  },
  {
    monthZh: '第6个月', monthEn: 'Month 6',
    titleZh: '妈妈复工 + 奶奶白天主领', titleEn: 'Mother returns to work; grandmother leads daytime care',
    momZh: '恢复工作，保留关键亲子时间和喂养/泵奶节奏。', momEn: 'Return to work while preserving bonding and feeding/pumping rhythm.',
    dadZh: '晚上和周末继续分担，协助复工过渡。', dadEn: 'Continue evenings/weekends and support return-to-work transition.',
    grandmaZh: '白天主领照护，按安全睡眠、喂养、外出、清洁规则执行。', grandmaEn: 'Daytime lead; follow safe-sleep, feeding, outing, and hygiene rules.'
  }
];

const enrolled = [
  {
    id: 'ucsf-birth-center-tour-2026-06-09', typeZh: '参观', typeEn: 'Tour', statusZh: '已报名', statusEn: 'Enrolled',
    titleZh: 'Birth Center Tour', titleEn: 'Birth Center Tour',
    dateZh: '2026年6月9日（周二）', dateEn: 'Tue Jun 09, 2026', hoursZh: '4:46 PM', hoursEn: '4:46 PM',
    locationZh: 'Mission Bay, 1855 4th Street; Third Floor, Suite A3473', locationEn: 'Mission Bay, 1855 4th Street; Third Floor, Suite A3473',
    attendeesZh: '2人（妈妈、爸爸）', attendeesEn: '2 attendees: mother and father',
    summaryZh: '熟悉 UCSF Birth Center 到院路线、空间布局和临产到达流程。',
    summaryEn: 'Get familiar with the UCSF Birth Center location, layout, and arrival flow for labor.',
    takeawayZh: '参观后把“什么时候出发、从哪里进、去哪里报到、紧急情况怎么处理”写成家庭流程。',
    takeawayEn: 'After the tour, turn the arrival route, check-in point, and emergency pathway into a family SOP.'
  },
  {
    id: 'ucsf-new-nest-2026-08-12', typeZh: '线下课', typeEn: 'In-person class', statusZh: '已报名', statusEn: 'Enrolled',
    titleZh: 'The New Nest: From Partners to Parents', titleEn: 'The New Nest: From Partners to Parents',
    dateZh: '2026年8月12日（周三）', dateEn: 'Wed Aug 12, 2026', hoursZh: '6:00 PM - 7:30 PM', hoursEn: '6:00 PM - 7:30 PM',
    locationZh: '1855 4th Street; Third Floor, Suite A3473', locationEn: '1855 4th Street; Third Floor, Suite A3473',
    attendeesZh: '2人（妈妈、爸爸）', attendeesEn: '2 attendees: mother and father',
    summaryZh: '帮助妈妈爸爸从伴侣关系过渡到共同育儿关系，提前处理产后沟通、分工和冲突。',
    summaryEn: 'Helps mother and father transition from partners to co-parents and plan communication, roles, and conflict prevention.',
    takeawayZh: '上完课后确认夜间分工、访客边界、奶奶参与方式和妈妈恢复优先级。',
    takeawayEn: 'After class, confirm night shifts, visitor boundaries, grandmother’s role, and mother’s recovery priorities.'
  },
  {
    id: 'ucsf-childbirth-intensive-2026-08-22', typeZh: '线下课', typeEn: 'In-person class', statusZh: '已报名', statusEn: 'Enrolled',
    titleZh: 'Childbirth Preparation: Intensive', titleEn: 'Childbirth Preparation: Intensive',
    dateZh: '2026年8月22日（周六）', dateEn: 'Sat Aug 22, 2026', hoursZh: '9:30 AM - 5:00 PM', hoursEn: '9:30 AM - 5:00 PM',
    locationZh: '1855 4th Street; Third Floor, Suite A3473', locationEn: '1855 4th Street; Third Floor, Suite A3473',
    attendeesZh: '2人（妈妈、爸爸）', attendeesEn: '2 attendees: mother and father',
    summaryZh: '集中学习分娩阶段、呼吸放松、陪产支持、药物选择、剖腹产变化和产后即时护理。',
    summaryEn: 'A concentrated childbirth-prep class covering labor stages, breathing/relaxation, support, medications, cesarean variations, and immediate postpartum care.',
    takeawayZh: '上完课后整理 birth preference、医院包、爸爸陪产任务和“何时去医院”标准。',
    takeawayEn: 'After class, finalize birth preferences, hospital bag, father’s labor-support tasks, and when-to-go-to-hospital rules.'
  },
  {
    id: 'ucsf-breastfeeding-first-months-2026-09-19', typeZh: '线下课', typeEn: 'In-person class', statusZh: '已报名', statusEn: 'Enrolled',
    titleZh: 'Breastfeeding and the First Few Months', titleEn: 'Breastfeeding and the First Few Months',
    dateZh: '2026年9月19日（周六）', dateEn: 'Sat Sep 19, 2026', hoursZh: '9:30 AM - 2:30 PM', hoursEn: '9:30 AM - 2:30 PM',
    locationZh: '1855 4th Street; Third Floor, Suite A3473', locationEn: '1855 4th Street; Third Floor, Suite A3473',
    attendeesZh: '2人（妈妈、爸爸）', attendeesEn: '2 attendees: mother and father',
    summaryZh: '学习母乳生理、泌乳、含乳、姿势、建立奶量和处理常见哺乳挑战。',
    summaryEn: 'Covers breast physiology, milk production, latch, positioning, building supply, and common breastfeeding challenges.',
    takeawayZh: '上完课后建立喂养 Plan A/B/C：直喂、泵奶瓶喂、配方奶备用，并安排 IBCLC 支持路径。',
    takeawayEn: 'After class, build Feeding Plan A/B/C: nursing, pumped bottles, and formula backup, plus an IBCLC support path.'
  }
];

const courses = [
  {
    id: 'ucsf-great-expectations', lang: 'en', required: true,
    titleZh: 'UCSF Great Expectations 课程总入口',
    titleEn: 'UCSF Great Expectations Program Overview',
    url: UCSF_INFO_URL,
    whoZh: '妈妈、爸爸为主；奶奶可看课程总结。', whoEn: 'Mother and father primarily; grandmother can review the summary.',
    timeZh: '按已报名日期完成；总入口用于查看课程说明。', timeEn: 'Complete by the booked dates; use this page for class descriptions.',
    summaryZh: 'UCSF 体系课程，覆盖 pregnancy、birth、baby care、breastfeeding、parenting。',
    summaryEn: 'UCSF class set covering pregnancy, birth, baby care, breastfeeding, and parenting.',
    takeawayZh: '作为医院主线课，主要让妈妈爸爸理解产后护理、宝宝基础护理、母乳和育儿框架。',
    takeawayEn: 'Use this as the hospital-based foundation for postpartum care, newborn basics, breastfeeding, and parenting.'
  },
  {
    id: 'stanford-newborn-classes', lang: 'en', required: true,
    titleZh: 'Stanford Pregnancy and Newborn Classes',
    titleEn: 'Stanford Pregnancy and Newborn Classes',
    url: 'https://www.stanfordchildrens.org/en/classes/community/after-birth.html',
    whoZh: '妈妈、爸爸；奶奶可看 newborn care 部分。', whoEn: 'Mother and father; grandmother can review newborn-care parts.',
    timeZh: '孕晚期完成。', timeEn: 'Complete in the third trimester.',
    summaryZh: 'Stanford Medicine Children’s Health 面向准父母和家庭的新生儿相关课程。',
    summaryEn: 'Stanford Medicine Children’s Health classes for expectant parents and families adjusting to newborn care.',
    takeawayZh: '和 UCSF 课程互补，重点放在新生儿护理、喂养和家庭过渡。',
    takeawayEn: 'Complements UCSF; focus on newborn care, feeding, and the family transition.'
  },
  {
    id: 'injoy-eclass', lang: 'en', required: true,
    titleZh: 'InJoy eClass Suite 产前到育儿线上课',
    titleEn: 'InJoy eClass Suite: Pregnancy-to-Parenting Education',
    url: 'https://www.injoyonline.com/',
    whoZh: '妈妈、爸爸；奶奶可按购买模块中的中文材料/字幕学习。', whoEn: 'Mother and father; grandmother can use Chinese captions/materials if available through the purchased module.',
    timeZh: '孕中晚期作为系统性复习。', timeEn: 'Mid-to-late pregnancy as structured review.',
    summaryZh: '医院常用线上学习平台，适合把分娩、新生儿护理、母乳和产后恢复串起来。',
    summaryEn: 'Hospital-used online education platform linking birth, newborn care, breastfeeding, and postpartum recovery.',
    takeawayZh: '作为家里统一术语和流程的主课，适合反复看。',
    takeawayEn: 'Use it to standardize vocabulary and care routines for the family.'
  },
  {
    id: 'youtube-fruits-vegetables', lang: 'en', required: false,
    titleZh: 'Fruits & Vegetables: Protecting Foods for Healthy Families',
    titleEn: 'Fruits & Vegetables: Protecting Foods for Healthy Families',
    url: 'https://www.youtube.com/watch?v=t3ZQ6bHDCAc&list=PLuhZ6_ONjgInS1iUL4T9XGQ_ZR8HuPalh&index=1',
    whoZh: '奶奶、妈妈；用于月子营养餐和家庭饮食参考。', whoEn: 'Grandmother and mother; useful for postpartum meals and family nutrition.',
    timeZh: '产前完成；做月子餐前复看。', timeEn: 'Watch before birth; review before postpartum meal planning.',
    summaryZh: '母婴健康基础营养视频；YouTube 可开中文字幕或自动翻译中文。',
    summaryEn: 'Foundations of maternal-child-health nutrition video; YouTube supports Chinese captions/auto-translate.',
    takeawayZh: '月子餐可以重视蛋白质、蔬菜水果、水分和均衡，不需要过度依赖传统禁忌。',
    takeawayEn: 'Postpartum meals should prioritize protein, fruits/vegetables, hydration, and balance rather than rigid food taboos.'
  },
  {
    id: 'bilibili-user-chinese', lang: 'zh', required: true,
    titleZh: '用户指定 Bilibili 中文育儿视频',
    titleEn: 'User-selected Bilibili Chinese baby-care video',
    url: 'https://www.bilibili.com/video/BV1riYezaETh/?spm_id_from=333.337.search-card.all.click',
    whoZh: '奶奶必看；妈妈爸爸可看后统一规则。', whoEn: 'Required for grandmother; mother and father can review it to align rules.',
    timeZh: '奶奶来之前完成。', timeEn: 'Complete before grandmother arrives.',
    summaryZh: '中文平台视频，适合奶奶直接观看。',
    summaryEn: 'Chinese-platform video suitable for grandmother.',
    takeawayZh: '看完后要用本网站安全红线复核：睡眠、喂养、急救、药物和偏方不能按经验随意改。',
    takeawayEn: 'After watching, cross-check against this site’s safety rules: sleep, feeding, emergency care, medicines, and folk remedies must follow medical guidance.'
  },
  {
    id: 'cn-attachment-search', lang: 'zh', required: false,
    titleZh: '中文亲子关系/安全依恋视频资源（中国平台）',
    titleEn: 'Chinese parent-child relationship / secure-attachment video resources on a China-based platform',
    url: 'https://search.bilibili.com/all?keyword=%E5%AE%89%E5%85%A8%E4%BE%9D%E6%81%8B%20%E8%82%B2%E5%84%BF',
    whoZh: '妈妈、爸爸、奶奶；用于替代原来的 Circle of Security 英文网站。',
    whoEn: 'Mother, father, and grandmother; replaces the previous English Circle of Security website.',
    timeZh: '宝宝出生后 1-6 个月内，按具体中文课程选择观看。',
    timeEn: 'During months 1-6 after birth; choose specific Chinese videos/classes from the China-based platform.',
    summaryZh: '这是中国平台上的“安全依恋/育儿”搜索入口，不再使用英文 COSP 网站。',
    summaryEn: 'This is a China-based search entry for secure attachment / parenting content; the English COSP website is no longer used.',
    takeawayZh: '亲子关系课程的目标是稳定回应宝宝需求、建立安全感；具体视频需妈妈爸爸先筛选后给奶奶看。',
    takeawayEn: 'The goal is consistent, responsive caregiving and secure attachment; parents should screen specific videos before grandmother watches.'
  },
  {
    id: 'aha-infant-cpr', lang: 'en', required: true,
    titleZh: 'AHA Infant CPR Anytime 婴儿 CPR 和窒息处理',
    titleEn: 'AHA Infant CPR Anytime: Infant CPR and Choking Relief',
    url: 'https://cpr.heart.org/en/training-programs/community-programs/community-resources/infant-cpr',
    whoZh: '妈妈、爸爸、奶奶都必修。', whoEn: 'Required for mother, father, and grandmother.',
    timeZh: '产前 30-36 周完成；产后每月复习动作。', timeEn: 'Complete at 30-36 weeks; review skills monthly after birth.',
    summaryZh: 'AHA 面向新手家庭的婴儿 CPR 和 choking relief 学习项目。',
    summaryEn: 'AHA program teaching core infant CPR and choking-relief skills for families.',
    takeawayZh: '所有照护者必须知道什么时候打 911、如何处理窒息、如何做婴儿 CPR。',
    takeawayEn: 'Every caregiver must know when to call 911, how to respond to choking, and how to perform infant CPR.'
  },
  {
    id: 'redcross-cpr', lang: 'en', required: true,
    titleZh: 'American Red Cross 婴幼儿急救/CPR 课程入口',
    titleEn: 'American Red Cross Child and Baby First Aid/CPR/AED',
    url: 'https://www.redcross.org/take-a-class/cpr/cpr-training/cpr-online',
    whoZh: '妈妈、爸爸、奶奶都必修。', whoEn: 'Required for all three.',
    timeZh: '产前完成。', timeEn: 'Complete before birth.',
    summaryZh: '红十字急救课程入口，适合补充 CPR、AED、儿童/婴儿急救。',
    summaryEn: 'Red Cross training portal for CPR, AED, and child/baby first-aid options.',
    takeawayZh: '急救课必须选有认证或医学机构背景的课程，不要只看短视频。',
    takeawayEn: 'For emergency skills, use certified/medical-backed training; do not rely only on short videos.'
  },
  {
    id: 'local-chinese-cpr-tbd', lang: 'zh', required: true,
    titleZh: '中文线下成人与儿童急救 CPR 培训',
    titleEn: 'Local in-person Chinese adult and pediatric first-aid/CPR training',
    url: '',
    whoZh: '奶奶优先；妈妈爸爸如需要中文复习也可参加。', whoEn: 'Grandmother first; mother/father can join if Chinese review is useful.',
    timeZh: '产前完成；课程链接待定，必须选本地线下课。', timeEn: 'Complete before birth; link TBD, must be a local in-person course.',
    summaryZh: '这项不再放线上示例链接。目标是找本地、线下、有认证或医学机构背景的中文急救 CPR 课。',
    summaryEn: 'No generic online example link is used. The goal is a local, in-person Chinese CPR/first-aid course with certification or medical backing.',
    takeawayZh: '奶奶需要现场练习 CPR 和窒息处理动作；视频只能辅助，不能替代实操。',
    takeawayEn: 'Grandmother needs hands-on practice for CPR and choking relief; videos are supplemental, not a substitute.'
  },
  {
    id: 'aap-cdc-safe-sleep', lang: 'en', required: true,
    titleZh: 'CDC / AAP 安全睡眠规则',
    titleEn: 'CDC / AAP Safe Sleep Rules',
    url: 'https://www.cdc.gov/sudden-infant-death/sleep-safely/index.html',
    whoZh: '妈妈、爸爸、奶奶都必修。', whoEn: 'Required for mother, father, and grandmother.',
    timeZh: '产前完成；出生后贴冰箱反复看。', timeEn: 'Complete before birth; keep as fridge rules after birth.',
    summaryZh: '宝宝睡觉必须仰睡、独立睡眠空间、firm flat mattress、床内不放软物。',
    summaryEn: 'Baby sleeps on the back, in a separate sleep space, on a firm flat mattress, without soft objects.',
    takeawayZh: '不能同床睡、不能趴睡/侧睡、不能在摇椅/沙发/成人床上睡。',
    takeawayEn: 'No bed-sharing, no stomach/side sleeping, and no routine sleep in swings, sofas, or adult beds.'
  },
  {
    id: 'triple-p-baby', lang: 'en', required: false,
    titleZh: 'Triple P Online for Baby',
    titleEn: 'Triple P Online for Baby',
    url: 'https://www.triplep-parenting.com/us/parenting-courses/triple-p-online-for-baby/',
    whoZh: '妈妈爸爸优先；奶奶可看总结。', whoEn: 'Mother and father first; grandmother can review summaries.',
    timeZh: '宝宝出生后 0-3 个月开始。', timeEn: 'Start during months 0-3 after birth.',
    summaryZh: '循证育儿项目，关注宝宝哭闹、睡眠模式、父母情绪和家庭关系。',
    summaryEn: 'Evidence-based parenting program covering crying, sleep patterns, parental emotions, and family adjustment.',
    takeawayZh: '帮助父母用一致、可持续的方法应对新生儿阶段，而不是靠临时情绪反应。',
    takeawayEn: 'Helps parents respond consistently and sustainably rather than react emotionally in the moment.'
  }
];

const safety = [
  { zh: '宝宝每次睡觉都仰睡，睡在自己的 crib/bassinet，不和大人同床。', en: 'Baby sleeps on the back every time, in their own crib/bassinet, not in an adult bed.' },
  { zh: '床里只放 fitted sheet；不放枕头、毯子、毛绒玩具、防撞围、睡姿固定器。', en: 'Only a fitted sheet in the sleep space; no pillows, blankets, stuffed toys, bumpers, or positioners.' },
  { zh: '不让宝宝在沙发、摇椅、成人床、趴在大人身上睡觉。', en: 'No sleep on sofas, swings, adult beds, or sleeping on an adult’s body.' },
  { zh: '不喂水、蜂蜜、中药、偏方；药物必须问儿科医生。', en: 'No water, honey, herbal remedies, or folk remedies; medicines require pediatrician guidance.' },
  { zh: '新生儿发烧、呼吸异常、明显嗜睡、喂不进去、嘴唇发紫，按儿科医生/急救路径处理。', en: 'Fever, abnormal breathing, marked lethargy, inability to feed, or blue lips require pediatrician/emergency pathway.' },
  { zh: '照顾宝宝前洗手；不亲宝宝脸和手；生病的人不抱宝宝。', en: 'Wash hands before care; do not kiss baby’s face/hands; sick people should not hold baby.' }
];

function t(key) { return i18n[state.lang][key] || key; }
function getText(obj, base) { return obj[base + (state.lang === 'zh' ? 'Zh' : 'En')]; }
function key(prefix, id) { return `babyCare:${prefix}:${id}`; }

function renderStaticText() {
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById('langToggle').textContent = state.lang === 'zh' ? 'English' : '中文';
}

function renderRoles() {
  const root = document.getElementById('roleCards');
  root.innerHTML = roles.map(r => `
    <article class="card role-card">
      <span class="month">${getText(r, 'month')}</span>
      <h3>${getText(r, 'title')}</h3>
      <p class="person-row"><strong>${state.lang === 'zh' ? '妈妈' : 'Mother'}</strong>${getText(r, 'mom')}</p>
      <p class="person-row"><strong>${state.lang === 'zh' ? '爸爸' : 'Father'}</strong>${getText(r, 'dad')}</p>
      <p class="person-row"><strong>${state.lang === 'zh' ? '奶奶' : 'Grandmother'}</strong>${getText(r, 'grandma')}</p>
    </article>
  `).join('');
}

function renderEnrolled() {
  const root = document.getElementById('enrolledList');
  root.innerHTML = enrolled.map(c => {
    const checked = localStorage.getItem(key('enrolled', c.id)) === '1' ? 'checked' : '';
    return `
      <article class="card course-card enrolled-card" data-enrolled-id="${c.id}">
        <div class="course-top">
          <h3>${getText(c, 'title')}</h3>
          <label class="checkline"><input type="checkbox" class="enrolled-check" data-id="${c.id}" ${checked}> ${t('done')}</label>
        </div>
        <div class="badges">
          <span class="badge">UCSF</span>
          <span class="badge">${getText(c, 'status')}</span>
          <span class="badge">${getText(c, 'type')}</span>
        </div>
        <div class="detail-grid">
          <div class="detail-box"><strong>${t('date')}</strong><p>${getText(c, 'date')}</p></div>
          <div class="detail-box"><strong>${t('hours')}</strong><p>${getText(c, 'hours')}</p></div>
          <div class="detail-box"><strong>${t('location')}</strong><p>${getText(c, 'location')}</p></div>
          <div class="detail-box"><strong>${t('attendees')}</strong><p>${getText(c, 'attendees')}</p></div>
          <div class="detail-box"><strong>${t('summary')}</strong><p>${getText(c, 'summary')}</p></div>
          <div class="detail-box"><strong>${t('takeaway')}</strong><p>${getText(c, 'takeaway')}</p></div>
        </div>
        <div class="links"><a class="link-btn" href="${UCSF_INFO_URL}" target="_blank" rel="noopener noreferrer">${t('open')}</a></div>
      </article>
    `;
  }).join('');
  document.querySelectorAll('.enrolled-check').forEach(cb => {
    cb.addEventListener('change', e => { localStorage.setItem(key('enrolled', e.target.dataset.id), e.target.checked ? '1' : '0'); updateProgress(); });
  });
}

function courseMatches(c) {
  if (state.filter === 'all') return true;
  if (state.filter === 'required') return c.required;
  return c.lang === state.filter;
}

function renderCourses() {
  const root = document.getElementById('courseList');
  root.innerHTML = courses.filter(courseMatches).map(c => {
    const checked = localStorage.getItem(key('course', c.id)) === '1' ? 'checked' : '';
    const linkHtml = c.url ? `<a class="link-btn" href="${c.url}" target="_blank" rel="noopener noreferrer">${t('open')}</a>` : `<span class="link-btn disabled">${t('tbd')}</span>`;
    return `
      <article class="card course-card" data-course-id="${c.id}">
        <div class="course-top">
          <h3>${getText(c, 'title')}</h3>
          <label class="checkline"><input type="checkbox" class="course-check" data-id="${c.id}" ${checked}> ${t('done')}</label>
        </div>
        <div class="badges">
          <span class="badge">${c.lang === 'zh' ? (state.lang === 'zh' ? '中文资源' : 'Chinese resource') : (state.lang === 'zh' ? '英文资源' : 'English resource')}</span>
          <span class="badge">${c.required ? t('required') : t('optional')}</span>
        </div>
        <div class="detail-grid">
          <div class="detail-box"><strong>${t('who')}</strong><p>${getText(c, 'who')}</p></div>
          <div class="detail-box"><strong>${t('time')}</strong><p>${getText(c, 'time')}</p></div>
          <div class="detail-box"><strong>${t('summary')}</strong><p>${getText(c, 'summary')}</p></div>
          <div class="detail-box"><strong>${t('takeaway')}</strong><p>${getText(c, 'takeaway')}</p></div>
        </div>
        <div class="links">${linkHtml}</div>
      </article>
    `;
  }).join('');
  document.querySelectorAll('.course-check').forEach(cb => {
    cb.addEventListener('change', e => { localStorage.setItem(key('course', e.target.dataset.id), e.target.checked ? '1' : '0'); updateProgress(); });
  });
}

function renderSafety() {
  const root = document.getElementById('safetyList');
  root.innerHTML = safety.map((s, i) => `
    <article class="card safety-item"><strong>${i + 1}</strong><p>${state.lang === 'zh' ? s.zh : s.en}</p></article>
  `).join('');
}

function updateProgress() {
  const courseDone = courses.filter(c => localStorage.getItem(key('course', c.id)) === '1').length;
  const enrolledDone = enrolled.filter(c => localStorage.getItem(key('enrolled', c.id)) === '1').length;
  const total = courses.length + enrolled.length;
  document.getElementById('courseProgress').textContent = `${Math.round((courseDone + enrolledDone) / total * 100)}%`;
}

function renderAll() {
  renderStaticText(); renderRoles(); renderEnrolled(); renderCourses(); renderSafety(); updateProgress();
}

document.getElementById('langToggle').addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('babyCareLang', state.lang);
  renderAll();
});

document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm(state.lang === 'zh' ? '确认重置所有完成记录？' : 'Reset all completion records?')) return;
  Object.keys(localStorage).filter(k => k.startsWith('babyCare:')).forEach(k => localStorage.removeItem(k));
  renderAll();
});

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    state.filter = btn.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
    renderCourses();
  });
});

renderAll();
