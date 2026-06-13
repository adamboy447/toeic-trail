const lessons = [
  {
    id: "part5-foundation",
    title: "Part 5 基礎",
    icon: "P5",
    area: "文法",
    questions: [
      q("文法", "Part 5｜介系詞", "The manager asked the team to submit the report ------- Friday.", ["by", "in", "on", "at"], "by", "by Friday 表示最晚在週五前完成。"),
      q("文法", "Part 5｜副詞", "The new software will ------- improve productivity.", ["significant", "significantly", "significance", "signify"], "significantly", "修飾動詞 improve 要用副詞。"),
      q("文法", "Part 5｜連接詞", "The meeting was postponed ------- the presenter was unavailable.", ["because", "although", "unless", "despite"], "because", "後面是完整子句，且語意是原因。"),
      q("文法", "Part 5｜名詞片語", "All ------- must wear identification badges in the building.", ["visitors", "visit", "visiting", "visited"], "visitors", "all 後接可數複數名詞。"),
      q("文法", "輸入題｜高頻片語", "請輸入「準時」的英文片語。", null, "on time", "on time 是多益常見片語，表示準時。")
    ]
  },
  {
    id: "part5-advanced",
    title: "Part 5 進階",
    icon: "G+",
    area: "文法",
    questions: [
      q("文法", "Part 5｜分詞構句", "The application, ------- last week, is now available to all users.", ["updated", "updating", "updates", "update"], "updated", "application 被更新，用過去分詞。"),
      q("文法", "Part 5｜假設語氣", "If the shipment ------- earlier, we would have avoided the delay.", ["had arrived", "arrives", "arrive", "will arrive"], "had arrived", "would have avoided 搭配過去完成式。"),
      q("文法", "Part 5｜關係代名詞", "The consultant ------- prepared the proposal will attend the meeting.", ["who", "which", "where", "when"], "who", "先行詞 consultant 是人。"),
      q("文法", "Part 5｜被動語態", "The budget report must be ------- by the finance director.", ["approved", "approving", "approval", "approves"], "approved", "must be 後接過去分詞形成被動。"),
      q("文法", "輸入題｜商務片語", "請輸入「負責」的英文片語。", null, "in charge of", "in charge of 表示負責某事。")
    ]
  },
  {
    id: "word-forms",
    title: "詞性判斷",
    icon: "Aa",
    area: "字彙",
    questions: [
      q("字彙", "Part 5｜詞性", "The ------- of the new policy will take place next month.", ["implementation", "implement", "implemented", "implementing"], "implementation", "the 後方需要名詞。"),
      q("字彙", "Part 5｜形容詞", "The sales figures were ------- higher than expected.", ["considerably", "considerable", "consideration", "consider"], "considerably", "修飾 higher 需用副詞。"),
      q("字彙", "Part 5｜名詞", "Please contact customer ------- if you need assistance.", ["service", "serve", "serving", "served"], "service", "customer service 是固定搭配。"),
      q("字彙", "Part 5｜動詞", "The company plans to ------- its operations overseas.", ["expand", "expansion", "expansive", "expanded"], "expand", "plans to 後接原形動詞。"),
      q("字彙", "輸入題｜詞性家族", "請輸入「有效率的」英文。", null, "efficient", "efficient 是形容詞，efficiency 是名詞。")
    ]
  },
  {
    id: "business-vocab",
    title: "商務字彙",
    icon: "💼",
    area: "字彙",
    questions: [
      q("字彙", "字彙題｜商務", "The company will ------- a new product next month.", ["launch", "borrow", "repair", "divide"], "launch", "launch a product 表示推出產品。"),
      q("字彙", "同義詞", "Which word is closest in meaning to purchase?", ["buy", "sell", "cancel", "delay"], "buy", "purchase 和 buy 都是購買。"),
      q("字彙", "搭配詞", "The marketing team conducted a customer -------.", ["survey", "machine", "departure", "receipt"], "survey", "customer survey 是顧客調查。"),
      q("字彙", "語意題", "The contract will ------- automatically at the end of the year.", ["expire", "hire", "deliver", "install"], "expire", "contract expire 表示合約到期。"),
      q("字彙", "輸入題｜商務單字", "請輸入「會議」的英文。", null, "meeting", "meeting 是多益辦公室場景高頻字。")
    ]
  },
  {
    id: "listening-response",
    title: "Part 2 回應",
    icon: "L2",
    area: "聽力",
    questions: [
      q("聽力", "Part 2｜最佳回應", "Could you send me the updated schedule?", ["Sure, I will email it this afternoon.", "No, the train is late.", "It costs twenty dollars.", "At the main entrance."], "Sure, I will email it this afternoon.", "問題是請你寄時程，回覆應承接 send/email。"),
      q("聽力", "Part 2｜間接回應", "Who is leading the training session?", ["Ms. Chen from HR.", "At 9 a.m.", "For three days.", "In the lobby."], "Ms. Chen from HR.", "who 問人。"),
      q("聽力", "Part 2｜時間題", "When does the conference begin?", ["At 8:30 tomorrow morning.", "In the main hall.", "The sales department.", "Because it was delayed."], "At 8:30 tomorrow morning.", "when 問時間。"),
      q("聽力", "Part 2｜地點題", "Where should visitors check in?", ["At the reception desk.", "By next Friday.", "Three copies.", "The updated invoice."], "At the reception desk.", "where 問地點。"),
      q("聽力", "輸入題｜聽力關鍵字", "請輸入「接待櫃台」的英文。", null, "reception desk", "reception desk 常出現在辦公室與訪客場景。")
    ]
  },
  {
    id: "part3-dialogues",
    title: "Part 3 對話",
    icon: "L3",
    area: "聽力",
    questions: [
      q("聽力", "Part 3｜目的題", "Dialogue: A customer asks if a laptop can be repaired before Friday. What does the customer need?", ["A repair completed soon", "A hotel reservation", "A new invoice", "A job interview"], "A repair completed soon", "repair before Friday 是關鍵。"),
      q("聽力", "Part 3｜建議題", "A woman says the conference room is already booked. What will the speakers most likely do?", ["Find another room", "Cancel the invoice", "Hire a new employee", "Print brochures"], "Find another room", "會議室被訂走，最合理是找別間。"),
      q("聽力", "Part 3｜問題題", "A man says the shipment has not arrived yet. What is the problem?", ["A delivery delay", "A broken printer", "A missing badge", "A low budget"], "A delivery delay", "shipment not arrived 指出貨延遲。"),
      q("聽力", "Part 3｜下一步", "A woman asks for the updated price list. What will the man probably do next?", ["Send a document", "Reserve a table", "Board a plane", "Clean the lobby"], "Send a document", "price list 是文件，下一步通常是寄送。"),
      q("聽力", "輸入題｜常見動詞", "請輸入「確認」的英文動詞。", null, "confirm", "confirm 在預約、付款、會議中都很常見。")
    ]
  },
  {
    id: "email-reading",
    title: "Part 7 郵件",
    icon: "✉",
    area: "閱讀",
    questions: [
      q("閱讀", "Part 7｜主旨題", "Email: Please review the attached invoice and confirm payment by Monday. What is the purpose of the email?", ["To request payment confirmation", "To invite someone to lunch", "To announce a new office", "To cancel a meeting"], "To request payment confirmation", "invoice、confirm payment 指向付款確認。"),
      q("閱讀", "Part 7｜細節題", "Memo: The training session has been moved from Room 4B to Room 6A. Where will the session be held?", ["Room 6A", "Room 4B", "The cafeteria", "The lobby"], "Room 6A", "moved from A to B，新的地點是 B。"),
      q("閱讀", "Part 7｜推論題", "Message: Your order has shipped and should arrive within three business days. What can be inferred?", ["The item is on its way.", "The order was canceled.", "Payment failed.", "The item is out of stock."], "The item is on its way.", "has shipped 表示已出貨。"),
      q("閱讀", "Part 7｜對象題", "Notice: Employees must submit travel receipts to Accounting by the 10th. Who is this notice for?", ["Employees who traveled for work", "Hotel guests", "New customers", "Job applicants"], "Employees who traveled for work", "travel receipts 和 Accounting 指出差報帳。"),
      q("閱讀", "輸入題｜郵件字彙", "請輸入「附件」的英文。", null, "attachment", "attachment 是 email 題常見字。")
    ]
  },
  {
    id: "notices-memos",
    title: "公告備忘錄",
    icon: "📌",
    area: "閱讀",
    questions: [
      q("閱讀", "公告｜細節題", "Notice: The cafeteria will be closed on Friday for maintenance. What will happen Friday?", ["The cafeteria will not open.", "A product will launch.", "Invoices are due.", "A train will depart."], "The cafeteria will not open.", "closed on Friday 是直接線索。"),
      q("閱讀", "備忘錄｜原因題", "Memo: Due to increased demand, the store will extend its weekend hours. Why are hours being extended?", ["Demand has increased.", "Staff are unavailable.", "Rent is lower.", "The printer broke."], "Demand has increased.", "due to increased demand 表示原因。"),
      q("閱讀", "公告｜地點題", "Announcement: The awards ceremony will take place in the main auditorium. Where is the ceremony?", ["The main auditorium", "The warehouse", "The reception desk", "The airport"], "The main auditorium", "take place in 指舉辦地點。"),
      q("閱讀", "備忘錄｜行動題", "Memo: Please update your emergency contact information by June 15. What are employees asked to do?", ["Update contact information", "Attend a seminar", "Review a menu", "Pay an invoice"], "Update contact information", "Please update 是要求的動作。"),
      q("閱讀", "輸入題｜公告單字", "請輸入「維修」的英文。", null, "maintenance", "maintenance 是公告題常見原因。")
    ]
  },
  {
    id: "part6-completion",
    title: "Part 6 補文",
    icon: "P6",
    area: "閱讀",
    questions: [
      q("閱讀", "Part 6｜語意銜接", "We appreciate your patience during the renovation. -------, the store will reopen on Monday.", ["As a result", "However", "For example", "Instead"], "As a result", "前後是因果與結果。"),
      q("閱讀", "Part 6｜句子插入", "The new policy will reduce paperwork. ------- Employees can submit forms online.", ["This change will save time.", "The weather was excellent.", "The meal was expensive.", "Tickets are sold out."], "This change will save time.", "online forms 與 save time 語意連貫。"),
      q("閱讀", "Part 6｜時態", "The supplier has confirmed that the replacement parts ------- tomorrow.", ["will arrive", "arrived", "arriving", "to arrive"], "will arrive", "tomorrow 搭配未來式。"),
      q("閱讀", "Part 6｜代名詞", "The printer is under warranty. Please return ------- to the service center.", ["it", "them", "they", "itself"], "it", "printer 是單數物。"),
      q("閱讀", "輸入題｜補文關鍵字", "請輸入「因此」的英文轉折詞。", null, "therefore", "therefore 表示因此，常用於補文邏輯。")
    ]
  },
  {
    id: "travel-service",
    title: "旅行服務",
    icon: "✈",
    area: "字彙",
    questions: [
      q("字彙", "情境字彙｜旅行", "Passengers should arrive at the airport two hours before -------.", ["departure", "discount", "department", "deadline"], "departure", "departure 是出發、起飛。"),
      q("閱讀", "公告理解｜細節題", "Notice: Breakfast is served daily from 6:30 to 9:30 in the lobby. Where is breakfast served?", ["In the lobby", "At the airport", "In Room 630", "At the station"], "In the lobby", "題目直接指出 in the lobby。"),
      q("字彙", "飯店場景", "Guests who need extra towels should contact -------.", ["housekeeping", "accounting", "engineering", "marketing"], "housekeeping", "housekeeping 是房務部。"),
      q("字彙", "旅行搭配", "Please make a ------- before visiting the restaurant on weekends.", ["reservation", "shipment", "brochure", "survey"], "reservation", "make a reservation 是預約。"),
      q("字彙", "輸入題｜旅行單字", "請輸入「預約」的英文名詞。", null, "reservation", "reservation 是飯店、餐廳與交通題常見字。")
    ]
  },
  {
    id: "finance-hr",
    title: "財務人資",
    icon: "$",
    area: "字彙",
    questions: [
      q("字彙", "財務｜發票", "The accounting department will process the ------- by Friday.", ["invoice", "luggage", "agenda", "survey"], "invoice", "accounting 與 process invoice 是財務場景。"),
      q("字彙", "人資｜招募", "The company is looking for a ------- candidate with five years of experience.", ["qualified", "delayed", "damaged", "optional"], "qualified", "qualified candidate 表示合格候選人。"),
      q("字彙", "財務｜預算", "The project was canceled because it exceeded the -------.", ["budget", "venue", "warranty", "itinerary"], "budget", "exceed the budget 表示超出預算。"),
      q("字彙", "人資｜福利", "Employees can enroll in the new health ------- plan next month.", ["benefits", "deliveries", "repairs", "departures"], "benefits", "health benefits plan 是員工福利。"),
      q("字彙", "輸入題｜人資單字", "請輸入「申請人」的英文。", null, "applicant", "applicant 是求職者、申請人。")
    ]
  },
  {
    id: "mini-mock-900",
    title: "900 模考組",
    icon: "★",
    area: "模考",
    questions: [
      q("模考", "Part 5｜綜合題", "All employees are required to wear identification badges while ------- the building.", ["entering", "entered", "entry", "enters"], "entering", "while 後可接 V-ing 表示正在進入時。"),
      q("模考", "Part 7｜推論題", "Message: Your replacement item has been dispatched and tracking details are attached. What can be inferred?", ["The customer can monitor delivery.", "The item was refunded.", "The order was rejected.", "The office moved."], "The customer can monitor delivery.", "tracking details attached 表示可追蹤配送。"),
      q("模考", "Part 2｜最佳回應", "Would you like me to reserve a projector for the seminar?", ["Yes, that would be helpful.", "It starts at Gate 4.", "The invoice is attached.", "She is from accounting."], "Yes, that would be helpful.", "Would you like me to... 是提供協助。"),
      q("模考", "Part 6｜語意", "The shipment was delayed. -------, customers will receive a discount on their next order.", ["Therefore", "Nevertheless", "Before", "Such as"], "Therefore", "延遲導致折扣補償，是結果。"),
      q("模考", "輸入題｜核心字", "請輸入「發票」的英文。", null, "invoice", "invoice 是商務閱讀與 email 題高頻字。")
    ]
  }
];

lessons.forEach((lesson) => {
  lesson.questions.forEach((question, index) => {
    question.id = `${lesson.id}-${index + 1}`;
    question.lessonId = lesson.id;
  });
});

const privateContent = loadPrivateContent();
const words = [...buildWordBank(), ...privateContent.words];
const allQuestions = [...lessons.flatMap((lesson) => lesson.questions), ...buildGeneratedQuestionBank(words), ...privateContent.questions];

const bookCompanions = [
  {
    id: "vocab-book",
    className: "vocab",
    title: "新制多益單字大全",
    subtitle: "Vocabulary Companion",
    mode: "book-vocab",
    bullets: ["高頻商務、職場、財務、人資、物流字庫", "片語與搭配詞循環複習", "熟練度標記與搜尋"],
    note: "使用 App 內原創字庫與題庫，不複製書籍原文。"
  },
  {
    id: "listening-book",
    className: "listening",
    title: "新制多益聽力題庫大全",
    subtitle: "Listening Companion",
    mode: "book-listening",
    bullets: ["Part 2 最佳回應", "Part 3 職場對話", "聽力關鍵字與場景推論"],
    note: "以原創聽力情境題訓練，不含書籍或官方音檔。"
  },
  {
    id: "reading-book",
    className: "reading",
    title: "新制多益閱讀題庫大全",
    subtitle: "Reading Companion",
    mode: "book-reading",
    bullets: ["Part 5 文法與詞性", "Part 6 補文邏輯", "Part 7 郵件、公告、備忘錄"],
    note: "使用原創閱讀題庫，不搬運出版書題目。"
  }
];

const scoreRoadmap = [
  {
    band: "300 → 500",
    title: "補地基",
    focus: "每天 40 張基礎字卡 + 20 題短句文法 + 10 題聽力問句",
    target: "看懂簡短通知、聽懂 who/where/when 問句"
  },
  {
    band: "500 → 700",
    title: "題型穩定",
    focus: "Part 5 詞性/時態/介系詞，Part 7 單篇閱讀定位",
    target: "正確率拉到 70%，錯題不重複犯"
  },
  {
    band: "700 → 850",
    title: "速度訓練",
    focus: "每日 30-60 題混合題，Part 7 掃讀與同義改寫",
    target: "閱讀不逐字翻，聽力抓轉折與下一步"
  },
  {
    band: "850 → 900+",
    title: "模考修正",
    focus: "每週 2 回模考，整理弱點、同義詞、易混搭配",
    target: "正確率穩定 88-92%，時間壓力下不崩"
  }
];

const badges = [
  { id: "first", title: "開刷第一題", text: "完成第一組多益題", icon: "✓" },
  { id: "thirty", title: "每日 30 題", text: "累積答題 30 題", icon: "🔥" },
  { id: "unit", title: "900 起跑線", text: "完成整個多益衝刺路徑", icon: "★" },
  { id: "accuracy", title: "準確率上升", text: "答題正確率達 80%", icon: "◎" },
  { id: "words", title: "字庫啟動", text: "已解鎖 5000+ 核心學習卡", icon: "Aa" },
  { id: "xp", title: "刷題續航", text: "累積 300 XP", icon: "💎" }
];

const mockSessions = Array.from({ length: 8 }, (_, index) => ({
  id: `mock-${index + 1}`,
  title: `第 ${index + 1} 回模考`,
  detail: index < 4 ? "聽力 30 題｜閱讀 30 題" : "聽力 45 題｜閱讀 45 題"
}));

const grammarTopics = [
  { id: "present-simple", title: "現在簡單式", desc: "現在簡單式不等於正在發生，先抓習慣、事實、規則。" },
  { id: "present-progressive", title: "現在進行式", desc: "多益聽力常用來描述正在進行的動作與照片狀態。" },
  { id: "present-perfect", title: "現在完成式", desc: "has/have p.p.、for/since、already/yet 是高頻考點。" },
  { id: "past-future", title: "過去與未來", desc: "used to、be going to、will、would 的時間線差異。" },
  { id: "passive", title: "被動語態", desc: "be p.p.、by、受詞變主詞，常見於公告與商務句。" },
  { id: "modals", title: "助動詞", desc: "must、should、may、could 的語氣與義務強度。" },
  { id: "prepositions", title: "介系詞", desc: "at/on/in/for/by/with 的商務搭配。" },
  { id: "conjunctions", title: "連接詞", desc: "although、because、therefore、however 的語意關係。" },
  { id: "word-forms", title: "詞性判斷", desc: "名詞、動詞、形容詞、副詞位置一次整理。" },
  { id: "part6-context", title: "Part 6 文意", desc: "不只看空格，還要看前後句語氣與段落功能。" }
];

const state = {
  xp: 0,
  hearts: 5,
  streak: 7,
  completed: [],
  answered: 0,
  correct: 0,
  areaStats: {},
  mistakes: [],
  masteredWords: [],
  favoriteQuestions: [],
  mockHistory: {},
  grammarDone: [],
  targetScore: 900,
  examDate: "",
  currentLesson: null,
  questionIndex: 0,
  selectedAnswer: "",
  checked: false,
  mode: "lesson"
};

const saved = JSON.parse(localStorage.getItem("toeicTrailState") || "{}");
Object.assign(state, saved);
state.completed ||= [];
state.mistakes ||= [];
state.areaStats ||= {};
state.answered ||= 0;
state.correct ||= 0;
state.masteredWords ||= [];
state.favoriteQuestions ||= [];
state.mockHistory ||= {};
state.grammarDone ||= [];
state.targetScore ||= 900;
state.examDate ||= "";

const els = {
  streakValue: document.querySelector("#streakValue"),
  xpValue: document.querySelector("#xpValue"),
  heartValue: document.querySelector("#heartValue"),
  screenTitle: document.querySelector("#screenTitle"),
  lessonMap: document.querySelector("#lessonMap"),
  unitPercent: document.querySelector("#unitPercent"),
  unitBar: document.querySelector("#unitBar"),
  coachTitle: document.querySelector("#coachTitle"),
  coachText: document.querySelector("#coachText"),
  modal: document.querySelector("#lessonModal"),
  lessonTitle: document.querySelector("#lessonTitle"),
  questionMeta: document.querySelector("#questionMeta"),
  promptType: document.querySelector("#promptType"),
  questionPrompt: document.querySelector("#questionPrompt"),
  promptActions: document.querySelector("#promptActions"),
  answerArea: document.querySelector("#answerArea"),
  feedbackBar: document.querySelector("#feedbackBar"),
  feedbackText: document.querySelector("#feedbackText"),
  checkButton: document.querySelector("#checkButton"),
  wordList: document.querySelector("#wordList"),
  wordSearch: document.querySelector("#wordSearch"),
  wordCount: document.querySelector("#wordCount"),
  mockGrid: document.querySelector("#mockGrid"),
  mistakeList: document.querySelector("#mistakeList"),
  mistakeSearch: document.querySelector("#mistakeSearch"),
  mistakeNewest: document.querySelector("#mistakeNewest"),
  mistakeOnlyWrong: document.querySelector("#mistakeOnlyWrong"),
  mistakeOnlyFav: document.querySelector("#mistakeOnlyFav"),
  reviewMistakesButton: document.querySelector("#reviewMistakesButton"),
  grammarPath: document.querySelector("#grammarPath"),
  grammarPercent: document.querySelector("#grammarPercent"),
  targetScoreInput: document.querySelector("#targetScoreInput"),
  examDateInput: document.querySelector("#examDateInput"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  scoreRingText: document.querySelector("#scoreRingText"),
  analysisUnlockCount: document.querySelector("#analysisUnlockCount"),
  badges: document.querySelector("#badges"),
  levelValue: document.querySelector("#levelValue"),
  planStrip: document.querySelector("#planStrip"),
  roadmapGrid: document.querySelector("#roadmapGrid"),
  bookGrid: document.querySelector("#bookGrid"),
  importFile: document.querySelector("#privateImportFile"),
  importStatus: document.querySelector("#importStatus"),
  clearPrivateContent: document.querySelector("#clearPrivateContent"),
  analyticsPanel: document.querySelector("#analyticsPanel"),
  studyPlan: document.querySelector("#studyPlan"),
  installCard: document.querySelector("#installCard"),
  installButton: document.querySelector("#installButton")
};

let installPrompt = null;
let activeWordFilter = "all";
let activeMistakeFilter = "all";

function q(area, type, prompt, choices, answer, explanation) {
  return { area, type, prompt, choices, answer, explanation };
}

function buildWordBank() {
  const data = {
    foundation: [
      ["ask", "詢問、要求", "Please ask the receptionist for assistance."],
      ["bring", "帶來", "Bring your identification badge to the meeting."],
      ["buy", "購買", "Customers can buy tickets online."],
      ["call", "打電話", "Please call the supplier this afternoon."],
      ["change", "改變、更改", "The schedule may change tomorrow."],
      ["check", "檢查、確認", "Check the address before sending the package."],
      ["choose", "選擇", "Choose the best answer."],
      ["clean", "清潔", "The lobby is cleaned every morning."],
      ["close", "關閉", "The store will close at 8 p.m."],
      ["come", "來", "Please come to the office by nine."],
      ["cost", "花費", "The repair will cost fifty dollars."],
      ["do", "做", "Do the assignment before Friday."],
      ["find", "找到", "Find the invoice number on the receipt."],
      ["get", "取得", "You can get a copy at reception."],
      ["give", "給", "Give the report to your supervisor."],
      ["go", "去", "Go to Room 6A for training."],
      ["have", "有", "The hotel has a fitness center."],
      ["help", "幫助", "Customer service can help you."],
      ["keep", "保留", "Keep the receipt for your records."],
      ["know", "知道", "Do you know the meeting time?"],
      ["leave", "離開、留下", "The train leaves at noon."],
      ["look", "看、尋找", "Look at the attached schedule."],
      ["make", "製作、安排", "Make a reservation before Friday."],
      ["meet", "會面", "We will meet in the conference room."],
      ["need", "需要", "Guests need a parking permit."],
      ["open", "開放、打開", "The office opens at 8:30."],
      ["pay", "付款", "Please pay the invoice by Monday."],
      ["put", "放置", "Put the forms on the desk."],
      ["read", "閱讀", "Read the notice carefully."],
      ["receive", "收到", "You will receive a confirmation email."],
      ["repair", "修理", "The printer needs to be repaired."],
      ["return", "歸還、返回", "Return the equipment after use."],
      ["send", "寄送", "Send the updated file today."],
      ["show", "展示、出示", "Show your ticket at the entrance."],
      ["start", "開始", "The seminar starts at ten."],
      ["take", "拿、搭乘", "Take the shuttle to the hotel."],
      ["talk", "談話", "Talk to your manager first."],
      ["tell", "告訴", "Tell the customer about the delay."],
      ["try", "嘗試", "Try the new software."],
      ["use", "使用", "Use the online form."],
      ["visit", "拜訪、參觀", "Visit our website for details."],
      ["wait", "等待", "Please wait in the lobby."],
      ["want", "想要", "The client wants a revised quote."],
      ["work", "工作、運作", "The machine does not work."],
      ["write", "寫", "Write your name on the form."]
    ],
    business: [
      ["acquire", "取得、收購", "The company plans to acquire a smaller competitor."],
      ["agreement", "協議", "Both parties signed the agreement."],
      ["annual", "年度的", "The annual report is available online."],
      ["approve", "核准", "The director approved the proposal."],
      ["client", "客戶", "The client requested a revised estimate."],
      ["contract", "合約", "The contract expires in December."],
      ["deadline", "截止日期", "The deadline has been extended."],
      ["department", "部門", "Please contact the sales department."],
      ["launch", "推出", "The company will launch a new service."],
      ["negotiate", "協商", "They will negotiate the final price."],
      ["policy", "政策", "The refund policy has changed."],
      ["proposal", "提案", "The proposal was accepted."],
      ["purchase", "購買", "Customers can purchase tickets online."],
      ["quote", "報價", "We received a quote from the supplier."],
      ["representative", "代表", "A representative will call you soon."],
      ["retail", "零售", "Retail sales increased this quarter."],
      ["supplier", "供應商", "The supplier delivered the parts."],
      ["warranty", "保固", "The laptop is still under warranty."],
      ["wholesale", "批發", "Wholesale prices are listed below."],
      ["vendor", "廠商", "The vendor sent a catalog."]
    ],
    office: [
      ["agenda", "議程", "The agenda includes three presentations."],
      ["appointment", "預約、約會", "I have an appointment at 10 a.m."],
      ["attachment", "附件", "The file is included as an attachment."],
      ["colleague", "同事", "A colleague will join the meeting."],
      ["conference", "會議", "The conference begins on Monday."],
      ["equipment", "設備", "The office equipment needs repair."],
      ["extension", "分機、延期", "Please dial extension 204."],
      ["facility", "設施", "The facility will close for maintenance."],
      ["memo", "備忘錄", "The memo explains the new policy."],
      ["minutes", "會議紀錄", "She prepared the meeting minutes."],
      ["notify", "通知", "Please notify your supervisor."],
      ["printer", "印表機", "The printer is out of paper."],
      ["reception", "接待處", "Visitors should check in at reception."],
      ["schedule", "時程", "The schedule has been updated."],
      ["seminar", "研討會", "The seminar is free for employees."],
      ["staff", "員工", "All staff must attend training."],
      ["stationery", "文具", "We ordered stationery for the office."],
      ["supervisor", "主管", "Ask your supervisor for approval."],
      ["update", "更新", "Please update your contact information."],
      ["workshop", "工作坊", "The workshop starts at 2 p.m."]
    ],
    travel: [
      ["accommodation", "住宿", "Accommodation is included in the package."],
      ["arrival", "抵達", "Arrival time is listed on the ticket."],
      ["baggage", "行李", "Baggage claim is on the first floor."],
      ["boarding", "登機", "Boarding begins at Gate 12."],
      ["brochure", "手冊", "The travel brochure includes a map."],
      ["cancellation", "取消", "Cancellation fees may apply."],
      ["departure", "出發", "Arrive two hours before departure."],
      ["destination", "目的地", "Tokyo is our final destination."],
      ["fare", "票價", "The fare includes taxes."],
      ["itinerary", "行程", "The itinerary has been revised."],
      ["lobby", "大廳", "Breakfast is served in the lobby."],
      ["passenger", "乘客", "Passengers should show identification."],
      ["reservation", "預約", "I made a dinner reservation."],
      ["shuttle", "接駁車", "A shuttle runs every 20 minutes."],
      ["terminal", "航廈", "The flight leaves from Terminal 2."],
      ["tour", "導覽、旅遊", "The city tour lasts three hours."],
      ["vacancy", "空房", "The hotel has no vacancies."],
      ["vehicle", "車輛", "The vehicle must be returned by noon."],
      ["venue", "場地", "The venue is near the station."],
      ["visa", "簽證", "A visa is required for entry."]
    ],
    finance: [
      ["accounting", "會計", "Accounting will process the payment."],
      ["balance", "餘額", "Check your account balance."],
      ["budget", "預算", "The project exceeded its budget."],
      ["charge", "收費", "There is no extra charge."],
      ["deposit", "訂金、存款", "A deposit is required."],
      ["expense", "費用", "Travel expenses will be reimbursed."],
      ["fee", "費用", "The registration fee is nonrefundable."],
      ["invoice", "發票", "Please review the attached invoice."],
      ["payment", "付款", "Payment is due by Friday."],
      ["payroll", "薪資名冊", "Payroll is processed twice a month."],
      ["profit", "利潤", "Profits increased this year."],
      ["receipt", "收據", "Keep the receipt for your records."],
      ["refund", "退款", "The refund will be issued soon."],
      ["reimburse", "報銷", "The company will reimburse travel costs."],
      ["revenue", "營收", "Revenue rose by 12 percent."],
      ["statement", "報表", "The bank statement was mailed."],
      ["tax", "稅", "The price includes tax."],
      ["transaction", "交易", "The transaction was completed online."],
      ["withdraw", "提領", "You can withdraw cash at the ATM."],
      ["yield", "收益", "The investment yielded strong returns."]
    ],
    hr: [
      ["applicant", "申請人", "The applicant has five years of experience."],
      ["benefits", "福利", "The benefits package includes insurance."],
      ["candidate", "候選人", "Three candidates were interviewed."],
      ["compensation", "薪酬", "Compensation will be discussed later."],
      ["eligible", "符合資格的", "Eligible employees may enroll."],
      ["employee", "員工", "Employees must complete the form."],
      ["hire", "雇用", "The company will hire two assistants."],
      ["interview", "面試", "The interview is scheduled for Tuesday."],
      ["orientation", "新員工訓練", "Orientation begins at 9 a.m."],
      ["position", "職位", "The position requires travel."],
      ["qualified", "合格的", "We need a qualified technician."],
      ["recruit", "招募", "The firm is recruiting engineers."],
      ["reference", "推薦人", "Please provide two references."],
      ["resign", "辭職", "The manager resigned last week."],
      ["resume", "履歷", "Submit your resume online."],
      ["salary", "薪水", "The salary is competitive."],
      ["shift", "班次", "The evening shift starts at 5."],
      ["training", "訓練", "Training is mandatory."],
      ["vacation", "休假", "Vacation requests need approval."],
      ["workforce", "勞動力", "The workforce has expanded."]
    ],
    logistics: [
      ["carrier", "承運商", "The carrier will deliver the package."],
      ["courier", "快遞", "A courier picked up the documents."],
      ["deliver", "遞送", "We deliver orders within two days."],
      ["dispatch", "派送", "The parts were dispatched yesterday."],
      ["freight", "貨運", "Freight costs have increased."],
      ["inventory", "庫存", "Inventory is checked weekly."],
      ["load", "裝載", "Workers loaded the truck."],
      ["logistics", "物流", "Logistics costs were reduced."],
      ["package", "包裹", "The package arrived damaged."],
      ["postpone", "延後", "The delivery was postponed."],
      ["warehouse", "倉庫", "The warehouse is closed today."],
      ["shipment", "貨件", "The shipment arrived late."],
      ["stock", "庫存", "The item is out of stock."],
      ["storage", "儲存", "Storage fees apply."],
      ["tracking", "追蹤", "Tracking details are attached."],
      ["transfer", "轉移", "The goods were transferred to another site."],
      ["unload", "卸貨", "They unloaded the truck quickly."],
      ["vehicle", "車輛", "Delivery vehicles park outside."],
      ["weight", "重量", "The weight limit is 20 kilograms."],
      ["fragile", "易碎的", "Fragile items need special packaging."]
    ]
  };

  const core = Object.entries(data).flatMap(([tag, entries]) =>
    entries.map(([en, zh, example]) => ({ en, zh, tag, example }))
  );
  return expandWordBank(core);
}

function expandWordBank(core) {
  const adjectivePacks = {
    foundation: [["basic", "基本的"], ["daily", "日常的"], ["short", "簡短的"], ["common", "常見的"], ["simple", "簡單的"], ["clear", "清楚的"], ["new", "新的"], ["next", "下一個"], ["early", "早的"], ["late", "晚的"], ["ready", "準備好的"], ["available", "可用的"]],
    business: [["annual", "年度的"], ["revised", "修訂的"], ["official", "正式的"], ["detailed", "詳細的"], ["strategic", "策略性的"], ["regional", "區域的"], ["potential", "潛在的"], ["preferred", "偏好的"], ["exclusive", "獨家的"], ["long-term", "長期的"], ["reliable", "可靠的"], ["competitive", "具競爭力的"]],
    office: [["updated", "更新的"], ["mandatory", "強制的"], ["scheduled", "排定的"], ["internal", "內部的"], ["weekly", "每週的"], ["confidential", "機密的"], ["available", "可取得的"], ["temporary", "暫時的"], ["additional", "額外的"], ["digital", "數位的"], ["printed", "印刷的"], ["shared", "共用的"]],
    travel: [["confirmed", "已確認的"], ["round-trip", "來回的"], ["domestic", "國內的"], ["delayed", "延誤的"], ["international", "國際的"], ["nearby", "附近的"], ["complimentary", "免費附贈的"], ["overnight", "過夜的"], ["reserved", "已預訂的"], ["available", "可取得的"], ["direct", "直達的"], ["scheduled", "排定的"]],
    finance: [["outstanding", "未付的"], ["monthly", "每月的"], ["estimated", "估計的"], ["additional", "額外的"], ["annual", "年度的"], ["final", "最終的"], ["itemized", "逐項列出的"], ["electronic", "電子的"], ["overdue", "逾期的"], ["approved", "核准的"], ["projected", "預估的"], ["accurate", "準確的"]],
    hr: [["qualified", "合格的"], ["full-time", "全職的"], ["eligible", "符合資格的"], ["prospective", "潛在的"], ["experienced", "有經驗的"], ["temporary", "臨時的"], ["newly hired", "新聘的"], ["senior", "資深的"], ["available", "可用的"], ["required", "必要的"], ["successful", "成功的"], ["internal", "內部的"]],
    logistics: [["delayed", "延遲的"], ["damaged", "受損的"], ["outbound", "出貨的"], ["incoming", "進貨的"], ["fragile", "易碎的"], ["international", "國際的"], ["domestic", "國內的"], ["urgent", "緊急的"], ["bulk", "大量的"], ["secure", "安全的"], ["scheduled", "排定的"], ["overnight", "隔夜的"]]
  };

  const collocationCards = core.flatMap((word) =>
    (adjectivePacks[word.tag] || adjectivePacks.business).map(([adjective, adjectiveZh]) => ({
      en: `${adjective} ${word.en}`,
      zh: `${adjectiveZh}${word.zh}`,
      tag: word.tag,
      example: `The ${adjective} ${word.en} was mentioned in the TOEIC-style notice.`
    }))
  );

  const phrasePacks = [
    {
      tag: "foundation",
      verbs: [["check", "確認"], ["send", "寄送"], ["make", "安排"], ["call", "打電話"], ["bring", "帶來"], ["read", "閱讀"], ["return", "歸還"], ["get", "取得"]],
      objects: [["email", "電子郵件"], ["form", "表格"], ["file", "檔案"], ["ticket", "票"], ["copy", "副本"], ["message", "訊息"], ["room key", "房卡"], ["receipt", "收據"]]
    },
    {
      tag: "business",
      verbs: [["approve", "核准"], ["review", "審閱"], ["submit", "提交"], ["revise", "修改"], ["finalize", "完成"], ["negotiate", "協商"], ["renew", "續約"], ["confirm", "確認"]],
      objects: [["proposal", "提案"], ["contract", "合約"], ["estimate", "估價"], ["agreement", "協議"], ["policy", "政策"], ["order", "訂單"], ["request", "請求"], ["schedule", "時程"]]
    },
    {
      tag: "office",
      verbs: [["arrange", "安排"], ["attend", "參加"], ["cancel", "取消"], ["reschedule", "重新安排"], ["prepare", "準備"], ["organize", "籌辦"], ["reserve", "預訂"], ["update", "更新"]],
      objects: [["meeting", "會議"], ["workshop", "工作坊"], ["seminar", "研討會"], ["presentation", "簡報"], ["agenda", "議程"], ["conference room", "會議室"], ["training session", "訓練課程"], ["appointment", "預約"]]
    },
    {
      tag: "finance",
      verbs: [["process", "處理"], ["issue", "開立"], ["pay", "支付"], ["refund", "退款"], ["reimburse", "報銷"], ["calculate", "計算"], ["reduce", "降低"], ["increase", "增加"]],
      objects: [["invoice", "發票"], ["payment", "付款"], ["expense", "費用"], ["fee", "費用"], ["budget", "預算"], ["revenue", "營收"], ["deposit", "訂金"], ["receipt", "收據"]]
    },
    {
      tag: "hr",
      verbs: [["hire", "雇用"], ["interview", "面試"], ["train", "訓練"], ["evaluate", "評估"], ["promote", "升遷"], ["recruit", "招募"], ["notify", "通知"], ["assign", "指派"]],
      objects: [["applicant", "申請人"], ["candidate", "候選人"], ["employee", "員工"], ["supervisor", "主管"], ["team member", "團隊成員"], ["technician", "技術人員"], ["consultant", "顧問"], ["manager", "經理"]]
    },
    {
      tag: "travel",
      verbs: [["book", "預訂"], ["confirm", "確認"], ["cancel", "取消"], ["change", "更改"], ["reserve", "預約"], ["board", "登上"], ["miss", "錯過"], ["check", "確認"]],
      objects: [["flight", "班機"], ["reservation", "預約"], ["hotel room", "飯店房間"], ["itinerary", "行程"], ["ticket", "票"], ["shuttle bus", "接駁車"], ["rental car", "租車"], ["departure time", "出發時間"]]
    },
    {
      tag: "logistics",
      verbs: [["ship", "運送"], ["deliver", "遞送"], ["dispatch", "派送"], ["track", "追蹤"], ["load", "裝載"], ["unload", "卸貨"], ["inspect", "檢查"], ["store", "儲存"]],
      objects: [["shipment", "貨件"], ["package", "包裹"], ["inventory", "庫存"], ["equipment", "設備"], ["materials", "材料"], ["supplies", "用品"], ["container", "貨櫃"], ["order", "訂單"]]
    }
  ];

  const phraseCards = phrasePacks.flatMap((pack) =>
    pack.verbs.flatMap(([verb, verbZh]) =>
      pack.objects.map(([object, objectZh]) => ({
        en: `${verb} ${articleFor(object)}${object}`,
        zh: `${verbZh}${objectZh}`,
        tag: pack.tag,
        example: `Please ${verb} ${articleFor(object)}${object} by the end of the day.`
      }))
    )
  );

  const connectors = [
    ["in accordance with", "依照", "business"],
    ["as soon as possible", "盡快", "office"],
    ["ahead of schedule", "提前", "office"],
    ["behind schedule", "進度落後", "office"],
    ["due to unexpected circumstances", "由於不可預期情況", "business"],
    ["prior to departure", "出發前", "travel"],
    ["subject to approval", "須經核准", "business"],
    ["available upon request", "可依要求提供", "business"],
    ["at your earliest convenience", "方便時儘早", "office"],
    ["for your reference", "供您參考", "office"],
    ["out of stock", "缺貨", "logistics"],
    ["under warranty", "在保固內", "business"],
    ["within walking distance", "步行可達", "travel"],
    ["on a regular basis", "定期地", "office"],
    ["in response to", "回應", "business"],
    ["with regard to", "關於", "business"],
    ["in the meantime", "同時、在此期間", "office"],
    ["at no additional cost", "不另收費", "finance"],
    ["for a limited time", "限時", "business"],
    ["until further notice", "直到另行通知", "office"]
  ].map(([en, zh, tag]) => ({
    en,
    zh,
    tag,
    example: `${capitalize(en)} is a common TOEIC phrase.`
  }));

  const contextCards = core.flatMap((word) => {
    const frames = [
      ["definition", `${word.en} in a notice`, `公告中的 ${word.zh}`, `A notice may use "${word.en}" to refer to ${word.zh}.`],
      ["email", `${word.en} in an email`, `郵件中的 ${word.zh}`, `An email may mention "${word.en}" when making a request.`],
      ["memo", `${word.en} in a memo`, `備忘錄中的 ${word.zh}`, `A memo may include "${word.en}" as an important detail.`],
      ["conversation", `${word.en} in a conversation`, `對話中的 ${word.zh}`, `A speaker may ask about "${word.en}" in a workplace conversation.`],
      ["part5", `${word.en} word form`, `${word.zh} 的詞性判斷`, `"${word.en}" may appear in a Part 5 vocabulary question.`],
      ["part7", `${word.en} reading clue`, `${word.zh} 的閱讀線索`, `"${word.en}" is often a key clue in Part 7.`],
      ["synonym", `${word.en} meaning check`, `${word.zh} 意思檢查`, `Choose the option closest in meaning to "${word.en}".`],
      ["collocation", `${word.en} collocation`, `${word.zh} 搭配詞`, `Learn common collocations around "${word.en}".`],
      ["request", `request about ${word.en}`, `關於${word.zh}的請求`, `A request about "${word.en}" may appear in e-mail questions.`],
      ["problem", `problem with ${word.en}`, `${word.zh}相關問題`, `A problem with "${word.en}" may be the reason for a call.`],
      ["deadline", `${word.en} deadline`, `${word.zh}截止時間`, `A deadline involving "${word.en}" is common in Part 7.`],
      ["change", `${word.en} change`, `${word.zh}變更`, `Changes related to "${word.en}" often appear in notices.`],
      ["confirmation", `${word.en} confirmation`, `${word.zh}確認`, `Confirmation of "${word.en}" is common in business e-mails.`],
      ["delay", `${word.en} delay`, `${word.zh}延遲`, `A delay involving "${word.en}" often appears in logistics topics.`],
      ["approval", `${word.en} approval`, `${word.zh}核准`, `Approval related to "${word.en}" often appears in office memos.`],
      ["cost", `${word.en} cost`, `${word.zh}費用`, `Cost details for "${word.en}" may appear in finance questions.`],
      ["location", `${word.en} location`, `${word.zh}地點`, `Location details involving "${word.en}" are common detail questions.`],
      ["schedule", `${word.en} schedule`, `${word.zh}時程`, `Schedules involving "${word.en}" are common in TOEIC passages.`],
      ["responsibility", `${word.en} responsibility`, `${word.zh}責任歸屬`, `Responsibility for "${word.en}" may be tested in inference questions.`],
      ["instruction", `${word.en} instruction`, `${word.zh}指示`, `Instructions about "${word.en}" often appear in workplace notices.`],
      ["requirement", `${word.en} requirement`, `${word.zh}要求`, `A requirement involving "${word.en}" can be a key detail.`],
      ["customer", `${word.en} customer issue`, `${word.zh}客戶問題`, `Customer issues involving "${word.en}" appear in Part 3 and Part 7.`],
      ["department", `${word.en} department note`, `${word.zh}部門通知`, `A department note about "${word.en}" may ask for an action.`],
      ["comparison", `${word.en} comparison`, `${word.zh}比較`, `Compare details about "${word.en}" when reading answer choices.`],
      ["purpose", `${word.en} purpose clue`, `${word.zh}目的線索`, `"${word.en}" may reveal the purpose of a message.`],
      ["inference", `${word.en} inference clue`, `${word.zh}推論線索`, `"${word.en}" may help infer what happens next.`]
    ];
    return frames.map(([kind, en, zh, example]) => ({
      en,
      zh,
      tag: word.tag,
      example,
      base: word.en,
      kind
    }));
  });

  const merged = [...core, ...collocationCards, ...phraseCards, ...connectors, ...contextCards];
  const unique = [];
  const seen = new Set();
  merged.forEach((word) => {
    if (seen.has(word.en)) return;
    seen.add(word.en);
    unique.push(word);
  });
  return unique;
}

function articleFor(object) {
  return object.includes(" ") || object.endsWith("s") ? "" : "a ";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildGeneratedQuestionBank(wordBank) {
  const vocabularyQuestions = wordBank.map((word, index) => {
    const candidates = wordBank.filter((item) => item.tag === word.tag && item.en !== word.en);
    const distractors = shuffle(candidates).slice(0, 3).map((item) => item.en);
    return {
      id: `auto-vocab-${index + 1}`,
      lessonId: "adaptive-bank",
      area: tagToArea(word.tag),
      type: "題庫｜單字與搭配",
      prompt: word.example.includes(word.en)
        ? word.example.replace(word.en, "-------")
        : `Which expression means「${word.zh}」?`,
      choices: shuffle([word.en, ...distractors]).slice(0, 4),
      answer: word.en,
      explanation: `${word.en}：${word.zh}。例句：${word.example}`
    };
  });

  const grammarTemplates = [
    ["The report must be ------- by noon.", ["submitted", "submitting", "submission", "submit"], "submitted", "must be 後接過去分詞。"],
    ["The workshop is intended ------- new employees.", ["for", "to", "by", "with"], "for", "be intended for 表示為某對象設計。"],
    ["Please contact us if you have ------- questions.", ["any", "some", "much", "each"], "any", "疑問句/條件句常用 any questions。"],
    ["The office will remain closed ------- Monday morning.", ["until", "during", "since", "throughout"], "until", "until Monday morning 表示直到週一早上。"],
    ["The product is ------- available in selected stores.", ["currently", "current", "currency", "currents"], "currently", "修飾 available 要用副詞 currently。"],
    ["Employees ------- complete the safety training before Friday.", ["must", "ought", "need", "able"], "must", "must 後接原形動詞。"],
    ["The proposal was approved ------- the budget was reduced.", ["although", "because", "unless", "therefore"], "although", "前後語意轉折。"],
    ["Ms. Lopez is responsible ------- coordinating the event.", ["for", "of", "at", "by"], "for", "be responsible for 是固定搭配。"],
    ["The shipment arrived ------- than expected.", ["earlier", "early", "earliest", "earliness"], "earlier", "than 需要比較級。"],
    ["The invoice ------- yesterday has not been paid.", ["sent", "sending", "sends", "send"], "sent", "invoice 被寄出，用過去分詞修飾。"]
  ];

  const grammarQuestions = Array.from({ length: 1500 }, (_, index) => {
    const [prompt, choices, answer, explanation] = grammarTemplates[index % grammarTemplates.length];
    return {
      id: `auto-grammar-${index + 1}`,
      lessonId: "grammar-bank",
      area: "文法",
      type: "題庫｜Part 5 文法",
      prompt,
      choices: shuffle(choices),
      answer,
      explanation
    };
  });

  const readingQuestions = wordBank.map((word, index) => ({
    id: `auto-reading-${index + 1}`,
    lessonId: "reading-bank",
    area: "閱讀",
    type: "題庫｜Part 7 細節",
    prompt: `Notice: ${word.example} What is the notice mainly related to?`,
    choices: shuffle([word.zh, "員工餐會", "天氣預報", "私人旅遊"]).slice(0, 4),
    answer: word.zh,
    explanation: `關鍵字是 ${word.en}，意思是「${word.zh}」。`
  }));

  const listeningQuestions = wordBank.slice(0, 2500).map((word, index) => ({
    id: `auto-listening-${index + 1}`,
    lessonId: "listening-bank",
    area: "聽力",
    type: "題庫｜聽力情境",
    prompt: `Speaker: The manager mentioned "${word.en}" during the meeting. What topic is the speaker referring to?`,
    choices: shuffle([word.zh, "晚餐菜單", "私人假期", "天氣狀況"]).slice(0, 4),
    answer: word.zh,
    explanation: `聽力關鍵字 ${word.en} 對應「${word.zh}」。`
  }));

  return [...vocabularyQuestions, ...grammarQuestions, ...readingQuestions, ...listeningQuestions];
}

function tagToArea(tag) {
  return {
    foundation: "字彙",
    business: "字彙",
    office: "字彙",
    travel: "字彙",
    finance: "字彙",
    hr: "字彙",
    logistics: "字彙"
  }[tag] || "字彙";
}

function loadPrivateContent() {
  const saved = JSON.parse(localStorage.getItem("toeicTrailPrivateContent") || "{}");
  const words = Array.isArray(saved.words) ? saved.words : [];
  const questions = Array.isArray(saved.questions) ? saved.questions : [];
  return { words, questions };
}

function savePrivateContent(content) {
  localStorage.setItem("toeicTrailPrivateContent", JSON.stringify(content));
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function rowsToPrivateContent(rows) {
  const headers = rows[0].map((item) => item.trim());
  const entries = rows.slice(1).map((row) =>
    Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]))
  );
  const importedWords = [];
  const importedQuestions = [];

  entries.forEach((entry, index) => {
    const kind = (entry.kind || "").toLowerCase();
    if (kind === "word" && entry.en && entry.zh) {
      importedWords.push({
        en: entry.en,
        zh: entry.zh,
        tag: entry.tag || "business",
        example: entry.example || entry.en,
        source: entry.book || "私人教材"
      });
    }

    if (kind === "question" && entry.prompt && entry.answer) {
      const choices = [entry.choice1, entry.choice2, entry.choice3, entry.choice4].filter(Boolean);
      importedQuestions.push({
        id: `private-${Date.now()}-${index}`,
        lessonId: "private-import",
        area: entry.area || "閱讀",
        type: entry.book ? `私人教材｜${entry.book}` : "私人教材",
        prompt: entry.prompt,
        choices: choices.length ? choices : null,
        answer: entry.answer,
        explanation: entry.explanation || "私人匯入內容。",
        source: entry.book || "私人教材"
      });
    }
  });

  return { words: importedWords, questions: importedQuestions };
}

function persist() {
  localStorage.setItem("toeicTrailState", JSON.stringify({
    xp: state.xp,
    hearts: state.hearts,
    streak: state.streak,
    completed: state.completed,
    answered: state.answered,
    correct: state.correct,
    areaStats: state.areaStats,
    mistakes: state.mistakes,
    masteredWords: state.masteredWords,
    favoriteQuestions: state.favoriteQuestions,
    mockHistory: state.mockHistory,
    grammarDone: state.grammarDone,
    targetScore: state.targetScore,
    examDate: state.examDate
  }));
}

function estimateScore() {
  const accuracy = state.answered ? state.correct / state.answered : 0;
  const completion = state.completed.length / lessons.length;
  const score = 420 + accuracy * 260 + completion * 190 + Math.min(state.xp / 900, 1) * 120;
  return Math.min(990, Math.max(250, Math.round(score / 5) * 5));
}

function renderStats() {
  els.streakValue.textContent = `${state.streak}天`;
  els.xpValue.textContent = state.xp;
  els.heartValue.textContent = estimateScore();
  els.levelValue.textContent = Math.max(1, Math.floor((estimateScore() - 250) / 90));
}

function isUnlocked(index) {
  return index === 0 || state.completed.includes(lessons[index - 1].id);
}

function renderLessons() {
  els.lessonMap.innerHTML = "";
  const firstOpenIndex = lessons.findIndex((lesson) => !state.completed.includes(lesson.id));

  lessons.forEach((lesson, index) => {
    const node = document.createElement("div");
    const complete = state.completed.includes(lesson.id);
    const unlocked = isUnlocked(index);
    node.className = `lesson-node ${unlocked ? "unlocked" : ""} ${complete ? "complete" : ""} ${index === firstOpenIndex ? "current" : ""}`;

    const button = document.createElement("button");
    button.className = "node-button";
    button.type = "button";
    button.textContent = complete ? "✓" : lesson.icon;
    button.disabled = !unlocked;
    button.title = unlocked ? lesson.title : "先完成前一組題";
    button.addEventListener("click", () => startLesson(lesson.id));

    const label = document.createElement("span");
    label.className = "node-label";
    label.textContent = lesson.title;

    node.append(button, label);
    els.lessonMap.appendChild(node);
  });

  const percent = Math.round((state.completed.length / lessons.length) * 100);
  els.unitPercent.textContent = `${percent}%`;
  els.unitBar.style.width = `${percent}%`;
  if (els.coachTitle) els.coachTitle.textContent = percent === 100 ? "衝刺路徑已完成" : "今天至少 30 題";
  if (els.coachText) {
    els.coachText.textContent = percent === 100
      ? "接下來要提高模考量，目標是穩定 90% 正確率。"
      : "900 分需要速度、穩定度和高頻字彙一起拉上來。";
  }
}

function startLesson(id, mode = "lesson") {
  const lesson = lessons.find((item) => item.id === id) || lessons[0];
  state.currentLesson = lesson;
  state.questionIndex = 0;
  state.selectedAnswer = "";
  state.checked = false;
  state.mode = mode;
  els.modal.classList.add("open");
  els.modal.setAttribute("aria-hidden", "false");
  renderQuestion();
}

function startPractice(mode) {
  const weak = weakestArea();
  let pool = [];
  let title = "每日 30 題";
  let meta = {};

  if (mode === "foundation") {
    pool = shuffle(allQuestions.filter((question) =>
      question.area === "文法" ||
      question.type.includes("單字") ||
      question.prompt.length < 120 ||
      question.explanation.includes("基本") ||
      question.explanation.includes("固定")
    )).slice(0, 30);
    title = "300 基礎補強";
  } else if (mode === "listening-core") {
    pool = shuffle(allQuestions.filter((question) => question.area === "聽力")).slice(0, 30);
    title = "聽力精聽";
  } else if (mode === "reading-core") {
    pool = shuffle(allQuestions.filter((question) => question.area === "閱讀")).slice(0, 30);
    title = "閱讀掃描";
  } else if (mode === "diagnostic") {
    pool = balancedQuestions(15);
    title = "程度診斷";
  } else if (mode === "mistakes") {
    const mistakeQuestions = state.mistakes.map((id) => allQuestions.find((question) => question.id === id)).filter(Boolean);
    pool = mistakeQuestions.length ? mistakeQuestions : allQuestions.filter((question) => question.area === weak).slice(0, 15);
    title = mistakeQuestions.length ? "錯題本" : `${weak}弱點強化`;
  } else if (mode === "selected-mistakes") {
    pool = currentMistakeQuestions();
    title = "複習以上題目";
  } else if (mode === "challenge") {
    pool = balancedQuestions(30);
    title = "900 模擬測驗";
  } else if (mode === "speed") {
    pool = balancedQuestions(30);
    title = "隨機刷題";
  } else if (mode === "custom") {
    pool = shuffle(allQuestions.filter((question) => question.area === "聽力" || question.area === "閱讀" || question.area === "文法")).slice(0, 30);
    title = "自選綜合練習";
  } else if (mode === "personalized") {
    pool = shuffle(allQuestions.filter((question) => question.area === weak)).slice(0, 30);
    title = `${weak}個人化弱點訓練`;
  } else if (mode.startsWith("mock-")) {
    const mock = mockSessions.find((item) => item.id === mode) || mockSessions[0];
    const size = Number(mode.split("-")[1]) > 4 ? 90 : 60;
    pool = balancedQuestions(size);
    title = mock.title;
    meta = { mockId: mode };
  } else if (mode.startsWith("grammar-topic-")) {
    const topicId = mode.replace("grammar-topic-", "");
    const topic = grammarTopics.find((item) => item.id === topicId);
    pool = shuffle(allQuestions.filter((question) => question.area === "文法" || question.type.includes("Part 5") || question.type.includes("Part 6"))).slice(0, 5);
    title = topic ? topic.title : "文法練習";
    meta = { grammarTopic: topicId };
  } else if (mode === "book-vocab") {
    pool = shuffle(allQuestions.filter((question) => question.type.includes("單字") || question.type.includes("字彙") || question.type.includes("搭配"))).slice(0, 40);
    title = "單字大全模式";
  } else if (mode === "book-listening") {
    pool = shuffle(allQuestions.filter((question) => question.area === "聽力")).slice(0, 40);
    title = "聽力題庫模式";
  } else if (mode === "book-reading") {
    pool = shuffle(allQuestions.filter((question) => question.area === "閱讀" || question.type.includes("Part 5") || question.type.includes("Part 6") || question.type.includes("Part 7"))).slice(0, 40);
    title = "閱讀題庫模式";
  } else {
    pool = balancedQuestions(30);
  }

  state.currentLesson = {
    id: `${mode}-session-${Date.now()}`,
    title,
    area: "混合",
    questions: pool.length ? pool : balancedQuestions(10),
    ...meta
  };
  state.questionIndex = 0;
  state.selectedAnswer = "";
  state.checked = false;
  state.mode = mode;
  els.modal.classList.add("open");
  els.modal.setAttribute("aria-hidden", "false");
  renderQuestion();
}

function balancedQuestions(count) {
  const areas = ["文法", "字彙", "聽力", "閱讀", "模考"];
  const picks = [];
  areas.forEach((area) => {
    picks.push(...shuffle(allQuestions.filter((question) => question.area === area)).slice(0, Math.ceil(count / areas.length)));
  });
  return shuffle(picks).slice(0, count);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function weakestArea() {
  const areas = ["文法", "字彙", "聽力", "閱讀", "模考"];
  return areas
    .map((area) => {
      const stat = state.areaStats[area] || { answered: 0, correct: 0 };
      const rate = stat.answered ? stat.correct / stat.answered : 0;
      return { area, rate, answered: stat.answered };
    })
    .sort((a, b) => a.rate - b.rate || a.answered - b.answered)[0].area;
}

function questionPart(question) {
  const text = `${question.type || ""} ${question.prompt || ""}`;
  const match = text.match(/Part\s*[1-7]/i);
  if (match) return match[0].replace(/\s+/, " ");
  if (question.area === "聽力") return "Part 2";
  if (question.area === "閱讀") return "Part 7";
  if (question.area === "文法") return "Part 5";
  return "Part 5";
}

function findQuestionById(id) {
  return allQuestions.find((question) => question.id === id);
}

function currentMistakeQuestions() {
  const query = (els.mistakeSearch?.value || "").trim().toLowerCase();
  const onlyWrong = els.mistakeOnlyWrong?.checked ?? true;
  const onlyFav = els.mistakeOnlyFav?.checked ?? false;
  const ids = onlyWrong ? state.mistakes : [...new Set([...state.mistakes, ...state.favoriteQuestions])];
  let list = ids.map(findQuestionById).filter(Boolean);

  if (activeMistakeFilter !== "all") {
    list = list.filter((question) => questionPart(question) === activeMistakeFilter);
  }

  if (onlyFav) {
    list = list.filter((question) => state.favoriteQuestions.includes(question.id));
  }

  if (query) {
    list = list.filter((question) =>
      `${question.type} ${question.prompt} ${question.answer} ${question.explanation}`.toLowerCase().includes(query)
    );
  }

  if (els.mistakeNewest?.checked) list = list.reverse();
  return list;
}

function getQuestion() {
  return state.currentLesson.questions[state.questionIndex];
}

function renderQuestion() {
  const question = getQuestion();
  els.lessonTitle.textContent = state.currentLesson.title;
  els.questionMeta.textContent = `第 ${state.questionIndex + 1} / ${state.currentLesson.questions.length} 題`;
  els.promptType.textContent = question.type;
  els.questionPrompt.textContent = question.prompt;
  renderPromptActions(question);
  els.answerArea.innerHTML = "";
  els.feedbackBar.className = "feedback-bar";
  els.feedbackText.textContent = "選擇或輸入答案後檢查。";
  els.checkButton.textContent = "檢查";
  state.selectedAnswer = "";
  state.checked = false;

  if (question.choices) {
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice-button";
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", () => {
        if (state.checked) return;
        state.selectedAnswer = choice;
        document.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("selected"));
        button.classList.add("selected");
      });
      els.answerArea.appendChild(button);
    });
  } else {
    const input = document.createElement("input");
    input.className = "type-input";
    input.type = "text";
    input.autocomplete = "off";
    input.inputMode = "text";
    input.placeholder = "輸入英文答案";
    input.addEventListener("input", (event) => {
      state.selectedAnswer = event.target.value;
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkAnswer();
    });
    els.answerArea.appendChild(input);
    input.focus();
  }
}

function renderPromptActions(question) {
  const speakable = /[A-Za-z]/.test(question.prompt);
  const favorite = question.id && state.favoriteQuestions.includes(question.id);
  const favoriteButton = question.id
    ? `<button type="button" data-favorite>${favorite ? "已收藏 ★" : "收藏 ☆"}</button>`
    : "";
  if (!speakable) {
    els.promptActions.innerHTML = favoriteButton;
    return;
  }

  const label = question.area === "聽力" ? "播放聽力" : "播放題幹";
  els.promptActions.innerHTML = `
    <button type="button" data-speak-rate="1">${label}</button>
    <button type="button" data-speak-rate="0.72">慢速</button>
    <button type="button" data-shadow>跟讀</button>
    ${favoriteButton}
  `;
}

function speakText(text, rate = 1) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    els.feedbackText.textContent = "這個瀏覽器不支援語音播放。";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/-------/g, "blank"));
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/[.!?。！？]/g, "");
}

function checkAnswer() {
  if (state.checked) {
    nextQuestion();
    return;
  }

  const question = getQuestion();
  if (!state.selectedAnswer.trim()) {
    els.feedbackText.textContent = "先選一個答案或輸入答案。";
    return;
  }

  const correct = normalize(state.selectedAnswer) === normalize(question.answer);
  state.checked = true;
  state.answered += 1;
  if (correct) state.correct += 1;

  const area = question.area || "混合";
  state.areaStats[area] ||= { answered: 0, correct: 0 };
  state.areaStats[area].answered += 1;
  if (correct) state.areaStats[area].correct += 1;

  if (correct) {
    state.mistakes = state.mistakes.filter((id) => id !== question.id);
  } else if (question.id && !state.mistakes.includes(question.id)) {
    state.mistakes.push(question.id);
  }

  els.feedbackBar.classList.add(correct ? "success" : "error");
  els.feedbackText.textContent = correct
    ? `答對了！+${state.mode === "challenge" ? 20 : 10} XP｜${question.explanation}`
    : `答案是：${question.answer}｜${question.explanation}`;
  els.checkButton.textContent = state.questionIndex === state.currentLesson.questions.length - 1 ? "完成" : "下一題";

  if (correct) {
    state.xp += state.mode === "challenge" ? 20 : 10;
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
  }

  document.querySelectorAll(".choice-button").forEach((button) => {
    if (normalize(button.textContent) === normalize(question.answer)) button.classList.add("correct");
    if (button.classList.contains("selected") && !correct) button.classList.add("wrong");
  });

  renderStats();
  persist();
}

function nextQuestion() {
  if (state.questionIndex < state.currentLesson.questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    return;
  }

  if (state.mode === "lesson" && !state.completed.includes(state.currentLesson.id)) {
    state.completed.push(state.currentLesson.id);
    state.xp += 25;
  }

  if (state.currentLesson.mockId) {
    state.mockHistory[state.currentLesson.mockId] = {
      score: estimateScore(),
      answered: state.currentLesson.questions.length,
      completedAt: new Date().toISOString()
    };
  }

  if (state.currentLesson.grammarTopic && !state.grammarDone.includes(state.currentLesson.grammarTopic)) {
    state.grammarDone.push(state.currentLesson.grammarTopic);
  }

  closeLesson();
  renderAll();
}

function closeLesson() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  els.modal.classList.remove("open");
  els.modal.setAttribute("aria-hidden", "true");
  state.currentLesson = null;
  persist();
}

function renderWords() {
  const query = els.wordSearch.value.trim().toLowerCase();
  const filtered = words.filter((word) => {
    const matchFilter = activeWordFilter === "all" || word.tag === activeWordFilter;
    const matchQuery = !query || word.en.includes(query) || word.zh.includes(query) || word.example.toLowerCase().includes(query);
    return matchFilter && matchQuery;
  });

  els.wordCount.textContent = `目前內建 ${words.length} 張單字、片語與搭配詞學習卡，顯示 ${filtered.length} 張。`;
  els.wordList.innerHTML = "";
  filtered.forEach((word) => {
    const mastered = state.masteredWords.includes(word.en);
    const card = document.createElement("article");
    card.className = "word-card";
    card.innerHTML = `
      <span class="word-tag">${tagLabel(word.tag)}</span>
      <strong>${word.en}</strong>
      <span>${word.zh}</span>
      <p>${word.example}</p>
      <button type="button" data-word="${word.en}">${mastered ? "已熟" : "標記已會"}</button>
    `;
    els.wordList.appendChild(card);
  });
}

function tagLabel(tag) {
  return {
    foundation: "基礎",
    business: "商務",
    office: "職場",
    travel: "旅行",
    finance: "財務",
    hr: "人資",
    logistics: "物流"
  }[tag] || tag;
}

function renderRoadmap() {
  els.roadmapGrid.innerHTML = scoreRoadmap.map((phase) => `
    <article class="roadmap-card">
      <em>${phase.band}</em>
      <strong>${phase.title}</strong>
      <span>${phase.focus}</span>
      <span>目標：${phase.target}</span>
    </article>
  `).join("");
}

function renderPlan() {
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  const planItems = [
    ["題庫池", `${allQuestions.length} 題`, "涵蓋文法、字彙、聽力情境、閱讀與模考"],
    ["每日題量", "30 題", "10 題文法、10 題閱讀、10 題聽力情境"],
    ["每日字庫", "40 張", "5000+ 核心字、片語、搭配詞與考試情境卡"],
    ["每週模考", "2 回", "第 2 個月開始計時練速度"],
    ["目前估分", `${estimateScore()}`, accuracy ? `正確率 ${accuracy}%` : "先做程度診斷"]
  ];
  els.planStrip.innerHTML = planItems.map(([label, value, detail]) => `
    <article class="plan-card">
      <strong>${value}</strong>
      <span>${label}｜${detail}</span>
    </article>
  `).join("");
}

function renderBookCompanions() {
  els.bookGrid.innerHTML = bookCompanions.map((book) => `
    <article class="book-card ${book.className}">
      <div class="book-cover">
        <span>${book.title}<br>${book.subtitle}</span>
      </div>
      <ul>
        ${book.bullets.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p>${book.note}</p>
      <button type="button" data-book-mode="${book.mode}">開始訓練</button>
    </article>
  `).join("");
}

function renderImportStatus() {
  els.importStatus.textContent = `私人教材：${privateContent.words.length} 張字卡、${privateContent.questions.length} 題。匯入後會重新載入 App。`;
}

function renderMockGrid() {
  if (!els.mockGrid) return;
  els.mockGrid.innerHTML = mockSessions.map((mock) => {
    const record = state.mockHistory[mock.id];
    const score = record ? `${record.score} 分` : "未作答";
    const date = record ? new Date(record.completedAt).toLocaleDateString("zh-TW") : "尚未完成";
    return `
      <article class="mock-card" data-start-mode="${mock.id}">
        <strong>${mock.title}</strong>
        <div class="mock-score-line">
          <span>聽力</span><span>${score}</span>
          <span>閱讀</span><span>${date}</span>
        </div>
        <p>${mock.detail}</p>
        <button type="button">開始模考</button>
      </article>
    `;
  }).join("");
}

function renderMistakes() {
  if (!els.mistakeList) return;
  const list = currentMistakeQuestions();
  els.reviewMistakesButton.textContent = list.length ? `複習以上題目 (${list.length})` : "目前沒有符合題目";
  els.reviewMistakesButton.disabled = !list.length;

  if (!list.length) {
    els.mistakeList.innerHTML = `
      <article class="mistake-card">
        <header><strong><span class="part-label">INFO</span>目前沒有錯題</strong></header>
        <div class="mistake-body">
          <p>先去刷題或模考，答錯的題目會自動收進這裡；收藏題也可以在這裡篩選。</p>
        </div>
      </article>
    `;
    return;
  }

  els.mistakeList.innerHTML = list.map((question) => {
    const favorite = state.favoriteQuestions.includes(question.id);
    const part = questionPart(question);
    return `
      <article class="mistake-card">
        <header>
          <strong><span class="part-label">${part}</span>${question.type}</strong>
          <button class="star-button" type="button" data-favorite-question="${question.id}" aria-label="收藏">${favorite ? "★" : "☆"}</button>
        </header>
        <div class="mistake-body">
          <p>${question.prompt}</p>
          <p><strong>答案：</strong>${question.answer}</p>
          <p>${question.explanation}</p>
          <button type="button" data-review-question="${question.id}">去複習</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderGrammar() {
  if (!els.grammarPath) return;
  const percent = Math.round((state.grammarDone.length / grammarTopics.length) * 100);
  els.grammarPercent.textContent = `${percent}%`;
  els.grammarPath.innerHTML = grammarTopics.map((topic, index) => {
    const done = state.grammarDone.includes(topic.id);
    const unlocked = index === 0 || state.grammarDone.includes(grammarTopics[index - 1].id);
    return `
      <article class="grammar-item ${done ? "done" : ""} ${unlocked ? "" : "locked"}">
        <h2>${topic.title}</h2>
        <p>${topic.desc}</p>
        <button type="button" data-start-mode="grammar-topic-${topic.id}" ${unlocked ? "" : "disabled"}>${done ? "再複習" : "開始 5 題"}</button>
      </article>
    `;
  }).join("");
}

function renderBadges() {
  const completedCount = state.completed.length;
  const accuracy = state.answered ? state.correct / state.answered : 0;
  const unlocked = {
    first: state.answered >= 1,
    thirty: state.answered >= 30,
    unit: completedCount === lessons.length,
    accuracy: accuracy >= 0.8 && state.answered >= 20,
    words: words.length >= 120,
    xp: state.xp >= 300
  };
  els.badges.innerHTML = "";
  badges.forEach((badge) => {
    const card = document.createElement("article");
    card.className = `badge-card ${unlocked[badge.id] ? "" : "locked"}`;
    card.innerHTML = `
      <span class="mode-icon">${badge.icon}</span>
      <h2>${badge.title}</h2>
      <p>${badge.text}</p>
    `;
    els.badges.appendChild(card);
  });
}

function renderAnalytics() {
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  const weak = weakestArea();
  const remainingPractice = Math.max(0, 4 - Object.keys(state.mockHistory).length - Math.floor(state.answered / 30));
  if (els.analysisUnlockCount) els.analysisUnlockCount.textContent = remainingPractice;
  if (els.scoreRingText) els.scoreRingText.textContent = state.answered >= 15 ? `${estimateScore()} 分` : "資訊不足";
  const areaText = ["文法", "字彙", "聽力", "閱讀", "模考"].map((area) => {
    const stat = state.areaStats[area] || { answered: 0, correct: 0 };
    const rate = stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0;
    return `${area} ${rate}%`;
  }).join("｜");

  els.analyticsPanel.innerHTML = `
    <article class="analysis-card"><strong>${state.answered}</strong><span>累積答題數</span></article>
    <article class="analysis-card"><strong>${accuracy}%</strong><span>目前正確率</span></article>
    <article class="analysis-card"><strong>${estimateScore()}</strong><span>粗估準備分數</span></article>
    <article class="analysis-card"><strong>${state.targetScore}</strong><span>目標分數</span></article>
    <article class="analysis-card"><strong>${weak}</strong><span>優先補強題型</span></article>
    <article class="analysis-card"><strong>${state.masteredWords.length}</strong><span>已熟字卡 / ${words.length}</span></article>
  `;

  els.studyPlan.innerHTML = `
    <article class="analysis-card">
      <strong>3 個月高強度</strong>
      <span>你目前約 300 多分、單字 2-3000：每天 90-120 分鐘。第 1 月補基礎字彙與 Part 5，第 2 月加入聽力精聽與 Part 7，第 3 月每週 2 回模考。</span>
    </article>
    <article class="analysis-card">
      <strong>6 個月穩扎</strong>
      <span>每天 45-75 分鐘。前 8 週把核心字庫補到 5000+，中段練 Part 2/3 與 Part 5/6，最後 8 週主攻 Part 7 速度與模考修正。${areaText}</span>
    </article>
  `;
}

function renderProfileInputs() {
  if (els.targetScoreInput) els.targetScoreInput.value = state.targetScore || "";
  if (els.examDateInput) els.examDateInput.value = state.examDate || "";
}

function switchView(view) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.querySelectorAll(".content-view").forEach((item) => {
    item.classList.toggle("active", item.id === `${view}View`);
  });
  els.screenTitle.textContent = {
    drill: "刷題",
    mock: "模擬考",
    mistakes: "錯題本",
    grammar: "多益必考文法",
    more: "更多"
  }[view];
  renderAll();
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    els.installCard.hidden = false;
  });

  els.installButton.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    els.installCard.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    els.installCard.hidden = true;
  });
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("sw.js");
  } catch (error) {
    console.info("Service worker registration skipped.", error);
  }
}

function renderAll() {
  renderStats();
  renderLessons();
  renderWords();
  renderMockGrid();
  renderMistakes();
  renderGrammar();
  renderPlan();
  renderRoadmap();
  renderBookCompanions();
  renderImportStatus();
  renderBadges();
  renderAnalytics();
  renderProfileInputs();
  persist();
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => switchView(item.dataset.view));
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-start-mode]");
  if (!trigger || trigger.classList.contains("nav-item")) return;
  if (trigger.disabled || trigger.querySelector?.("button:disabled")) return;
  startPractice(trigger.dataset.startMode);
});

els.bookGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-book-mode]");
  if (!button) return;
  startPractice(button.dataset.bookMode);
});

els.importFile.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  const rows = parseCsv(text);
  const imported = rowsToPrivateContent(rows);
  const merged = {
    words: [...privateContent.words, ...imported.words],
    questions: [...privateContent.questions, ...imported.questions]
  };
  savePrivateContent(merged);
  els.importStatus.textContent = `已匯入 ${imported.words.length} 張字卡、${imported.questions.length} 題，正在重新載入。`;
  location.reload();
});

els.clearPrivateContent.addEventListener("click", () => {
  localStorage.removeItem("toeicTrailPrivateContent");
  location.reload();
});

els.mistakeSearch?.addEventListener("input", renderMistakes);
els.mistakeNewest?.addEventListener("change", renderMistakes);
els.mistakeOnlyWrong?.addEventListener("change", renderMistakes);
els.mistakeOnlyFav?.addEventListener("change", renderMistakes);

document.querySelectorAll("[data-mistake-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mistake-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeMistakeFilter = button.dataset.mistakeFilter;
    renderMistakes();
  });
});

els.mistakeList?.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-question]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favoriteQuestion;
    if (state.favoriteQuestions.includes(id)) {
      state.favoriteQuestions = state.favoriteQuestions.filter((item) => item !== id);
    } else {
      state.favoriteQuestions.push(id);
    }
    renderAll();
    return;
  }

  const reviewButton = event.target.closest("[data-review-question]");
  if (reviewButton) {
    const question = findQuestionById(reviewButton.dataset.reviewQuestion);
    if (!question) return;
    state.currentLesson = {
      id: `review-${question.id}-${Date.now()}`,
      title: "單題複習",
      area: question.area,
      questions: [question]
    };
    state.questionIndex = 0;
    state.selectedAnswer = "";
    state.checked = false;
    state.mode = "mistakes";
    els.modal.classList.add("open");
    els.modal.setAttribute("aria-hidden", "false");
    renderQuestion();
  }
});

els.reviewMistakesButton?.addEventListener("click", () => {
  if (currentMistakeQuestions().length) startPractice("selected-mistakes");
});

els.saveProfileButton?.addEventListener("click", () => {
  const score = Number(els.targetScoreInput.value || 900);
  state.targetScore = Math.min(990, Math.max(300, Math.round(score / 5) * 5));
  state.examDate = els.examDateInput.value || "";
  persist();
  renderAll();
});

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeWordFilter = button.dataset.filter;
    renderWords();
  });
});

els.wordSearch.addEventListener("input", renderWords);
els.wordList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-word]");
  if (!button) return;
  const word = button.dataset.word;
  if (state.masteredWords.includes(word)) {
    state.masteredWords = state.masteredWords.filter((item) => item !== word);
  } else {
    state.masteredWords.push(word);
    state.xp += 2;
  }
  renderAll();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.xp = 0;
  state.hearts = 5;
  state.streak = 7;
  state.completed = [];
  state.answered = 0;
  state.correct = 0;
  state.areaStats = {};
  state.mistakes = [];
  state.masteredWords = [];
  state.favoriteQuestions = [];
  state.mockHistory = {};
  state.grammarDone = [];
  renderAll();
});

document.querySelector("#closeLesson").addEventListener("click", closeLesson);
els.checkButton.addEventListener("click", checkAnswer);
els.promptActions.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !state.currentLesson) return;
  const question = getQuestion();
  if (button.dataset.favorite !== undefined && question.id) {
    if (state.favoriteQuestions.includes(question.id)) {
      state.favoriteQuestions = state.favoriteQuestions.filter((id) => id !== question.id);
    } else {
      state.favoriteQuestions.push(question.id);
    }
    persist();
    renderPromptActions(question);
    renderMistakes();
    return;
  }
  if (button.dataset.shadow !== undefined) {
    speakText(question.prompt, 0.85);
    els.feedbackText.textContent = "跟讀模式：先聽一次，再模仿語調念出來。";
    return;
  }
  const rate = Number(button.dataset.speakRate || 1);
  speakText(question.prompt, rate);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.modal.classList.contains("open")) closeLesson();
});

setupInstallPrompt();
registerServiceWorker();
renderAll();
