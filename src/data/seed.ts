// Seeded sample data for Shaale Namma Pride PWA.
// English + Kannada labels so the language toggle has something to swap.

export type Bilingual = { en: string; kn: string };

export type Meal = {
  day: Bilingual;
  date: string;
  items: Bilingual[];
  calories: number;
};

export type Facility = {
  id: string;
  name: Bilingual;
  description: Bilingual;
  emoji: string;
};

export type Student = {
  id: string;
  name: string;
  grade: string;
  achievement: Bilingual;
  emoji: string;
};

export type Notice = {
  id: string;
  title: Bilingual;
  body: Bilingual;
  date: string;
  views: number;
};

export type Feedback = {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
};

export const meals: Meal[] = [
  {
    day: { en: "Monday", kn: "ಸೋಮವಾರ" },
    date: "2026-05-18",
    items: [
      { en: "Rice & Sambar", kn: "ಅನ್ನ ಮತ್ತು ಸಾಂಬಾರ್" },
      { en: "Boiled Egg", kn: "ಬೇಯಿಸಿದ ಮೊಟ್ಟೆ" },
      { en: "Banana", kn: "ಬಾಳೆಹಣ್ಣು" },
    ],
    calories: 520,
  },
  {
    day: { en: "Tuesday", kn: "ಮಂಗಳವಾರ" },
    date: "2026-05-19",
    items: [
      { en: "Bisi Bele Bath", kn: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್" },
      { en: "Curd", kn: "ಮೊಸರು" },
      { en: "Jaggery", kn: "ಬೆಲ್ಲ" },
    ],
    calories: 480,
  },
  {
    day: { en: "Wednesday", kn: "ಬುಧವಾರ" },
    date: "2026-05-20",
    items: [
      { en: "Vegetable Pulao", kn: "ತರಕಾರಿ ಪುಲಾವ್" },
      { en: "Raita", kn: "ರಾಯ್ತಾ" },
      { en: "Apple", kn: "ಸೇಬು" },
    ],
    calories: 540,
  },
  {
    day: { en: "Thursday", kn: "ಗುರುವಾರ" },
    date: "2026-05-21",
    items: [
      { en: "Chapati & Dal", kn: "ಚಪಾತಿ ಮತ್ತು ದಾಲ್" },
      { en: "Mixed Veg Curry", kn: "ಮಿಶ್ರ ತರಕಾರಿ" },
      { en: "Sweet Pongal", kn: "ಸಿಹಿ ಪೊಂಗಲ್" },
    ],
    calories: 560,
  },
  {
    day: { en: "Friday", kn: "ಶುಕ್ರವಾರ" },
    date: "2026-05-22",
    items: [
      { en: "Lemon Rice", kn: "ನಿಂಬೆ ಅನ್ನ" },
      { en: "Peanut Chutney", kn: "ಶೇಂಗಾ ಚಟ್ನಿ" },
      { en: "Milk", kn: "ಹಾಲು" },
    ],
    calories: 500,
  },
];

export const facilities: Facility[] = [
  { id: "f1", name: { en: "Library", kn: "ಗ್ರಂಥಾಲಯ" }, description: { en: "Over 3,000 books in Kannada and English.", kn: "3000ಕ್ಕೂ ಹೆಚ್ಚು ಪುಸ್ತಕಗಳು." }, emoji: "📚" },
  { id: "f2", name: { en: "Science Lab", kn: "ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ" }, description: { en: "Equipped lab for grades 6–10 experiments.", kn: "6–10 ತರಗತಿಗಳ ಪ್ರಯೋಗಗಳಿಗೆ." }, emoji: "🔬" },
  { id: "f3", name: { en: "Computer Room", kn: "ಕಂಪ್ಯೂಟರ್ ಕೊಠಡಿ" }, description: { en: "20 computers with internet for digital literacy.", kn: "20 ಕಂಪ್ಯೂಟರ್‌ಗಳು, ಇಂಟರ್ನೆಟ್." }, emoji: "💻" },
  { id: "f4", name: { en: "Playground", kn: "ಆಟದ ಮೈದಾನ" }, description: { en: "Cricket, kabaddi and athletics track.", kn: "ಕ್ರಿಕೆಟ್, ಕಬಡ್ಡಿ, ಓಟ." }, emoji: "🏏" },
  { id: "f5", name: { en: "Mid-day Meal Kitchen", kn: "ಅಕ್ಷಯ ಪಾತ್ರೆ ಅಡುಗೆಮನೆ" }, description: { en: "Hot, nutritious meals cooked daily on premises.", kn: "ಪ್ರತಿದಿನ ತಾಜಾ ಊಟ." }, emoji: "🍲" },
  { id: "f6", name: { en: "Smart Classroom", kn: "ಸ್ಮಾರ್ಟ್ ತರಗತಿ" }, description: { en: "Projector-enabled learning for all sections.", kn: "ಪ್ರೊಜೆಕ್ಟರ್ ಸಹಿತ ತರಗತಿ." }, emoji: "🖥️" },
];

export const students: Student[] = [
  { id: "s1", name: "Ananya R.", grade: "Grade 9", achievement: { en: "District Math Olympiad — 1st place", kn: "ಜಿಲ್ಲಾ ಗಣಿತ ಒಲಿಂಪಿಯಾಡ್ — 1ನೇ ಸ್ಥಾನ" }, emoji: "🏆" },
  { id: "s2", name: "Karthik M.", grade: "Grade 10", achievement: { en: "State-level Kabaddi player", kn: "ರಾಜ್ಯ ಮಟ್ಟದ ಕಬಡ್ಡಿ ಆಟಗಾರ" }, emoji: "🥇" },
  { id: "s3", name: "Bhoomika S.", grade: "Grade 7", achievement: { en: "Won Kannada essay contest", kn: "ಕನ್ನಡ ಪ್ರಬಂಧ ಸ್ಪರ್ಧೆ ವಿಜೇತೆ" }, emoji: "✍️" },
  { id: "s4", name: "Rahul P.", grade: "Grade 8", achievement: { en: "Built a working solar lamp", kn: "ಸೌರ ದೀಪ ತಯಾರಿಸಿದ ವಿದ್ಯಾರ್ಥಿ" }, emoji: "🔆" },
  { id: "s5", name: "Divya N.", grade: "Grade 10", achievement: { en: "100% attendance for 3 years", kn: "3 ವರ್ಷಗಳ 100% ಹಾಜರಾತಿ" }, emoji: "⭐" },
];

export const notices: Notice[] = [
  {
    id: "n1",
    title: { en: "Annual Day on May 28", kn: "ಮೇ 28 ರಂದು ವಾರ್ಷಿಕೋತ್ಸವ" },
    body: { en: "All parents are invited at 5pm in the school auditorium.", kn: "ಎಲ್ಲ ಪೋಷಕರಿಗೆ ಸಂಜೆ 5 ಗಂಟೆಗೆ ಆಮಂತ್ರಣ." },
    date: "2026-05-15",
    views: 142,
  },
  {
    id: "n2",
    title: { en: "Free health checkup camp", kn: "ಉಚಿತ ಆರೋಗ್ಯ ಶಿಬಿರ" },
    body: { en: "Doctors from PHC will visit on May 22 for all students.", kn: "ಮೇ 22 ರಂದು ಎಲ್ಲ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಪಾಸಣೆ." },
    date: "2026-05-12",
    views: 98,
  },
  {
    id: "n3",
    title: { en: "New library books arrived", kn: "ಹೊಸ ಪುಸ್ತಕಗಳು ಬಂದಿವೆ" },
    body: { en: "200 new Kannada storybooks added to the library.", kn: "200 ಹೊಸ ಕನ್ನಡ ಕಥಾಪುಸ್ತಕಗಳು." },
    date: "2026-05-10",
    views: 76,
  },
];

export const initialFeedback: Feedback[] = [
  { id: "fb1", name: "Lakshmi (parent)", message: "Mid-day meals have really improved this year. Thank you!", rating: 5, date: "2026-05-08" },
  { id: "fb2", name: "Suresh (parent)", message: "Please add more sports equipment for the playground.", rating: 4, date: "2026-05-05" },
  { id: "fb3", name: "Anonymous", message: "Computer lab classes are excellent.", rating: 5, date: "2026-05-02" },
];

export const schoolStats = {
  students: 412,
  teachers: 18,
  classrooms: 14,
  established: 1978,
};
