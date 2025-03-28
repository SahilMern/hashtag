const woeidList = [
  { name: "Algeria", woeid: 23424740 },
  { name: "Argentina", woeid: 23424747 },
  { name: "Australia", woeid: 23424748 },
  { name: "Austria", woeid: 23424750 },
  { name: "Bahrain", woeid: 23424753 },
  { name: "Belarus", woeid: 23424765 },
  { name: "Belgium", woeid: 23424757 },
  { name: "Brazil", woeid: 23424768 },
  { name: "Canada", woeid: 23424775 },
  { name: "Chile", woeid: 23424782 },
  { name: "Colombia", woeid: 23424787 },
  { name: "Denmark", woeid: 23424796 },
  { name: "Dominican Republic", woeid: 23424800 },
  { name: "Ecuador", woeid: 23424801 },
  { name: "Egypt", woeid: 23424802 },
  { name: "France", woeid: 23424819 },
  { name: "Germany", woeid: 23424829 },
  { name: "Ghana", woeid: 23424824 },
  { name: "Greece", woeid: 23424833 },
  { name: "Guatemala", woeid: 23424834 },
  { name: "India", woeid: 23424848 },
  { name: "Indonesia", woeid: 23424846 },
  { name: "Ireland", woeid: 23424803 },
  { name: "Israel", woeid: 23424852 },
  { name: "Italy", woeid: 23424853 },
  { name: "Japan", woeid: 23424856 },
  { name: "Jordan", woeid: 23424860 },
  { name: "Kenya", woeid: 23424863 },
  { name: "Kuwait", woeid: 23424870 },
  { name: "Latvia", woeid: 23424874 },
  { name: "Lebanon", woeid: 23424873 },
  { name: "Malaysia", woeid: 23424901 },
  { name: "Mexico", woeid: 23424900 },
  { name: "Netherlands", woeid: 23424909 },
  { name: "New Zealand", woeid: 23424916 },
  { name: "Nigeria", woeid: 23424908 },
  { name: "Norway", woeid: 23424910 },
  { name: "Oman", woeid: 23424898 },
  { name: "Pakistan", woeid: 23424922 },
  { name: "Panama", woeid: 23424924 },
  { name: "Peru", woeid: 23424919 },
  { name: "Philippines", woeid: 23424934 },
  { name: "Poland", woeid: 23424923 },
  { name: "Portugal", woeid: 23424925 },
  { name: "Puerto Rico", woeid: 23424935 },
  { name: "Qatar", woeid: 23424930 },
  { name: "Russia", woeid: 23424936 },
  { name: "Saudi Arabia", woeid: 23424938 },
  { name: "Singapore", woeid: 23424948 },
  { name: "South Africa", woeid: 23424942 },
  { name: "South Korea", woeid: 23424868 },
  { name: "Spain", woeid: 23424950 },
  { name: "Sweden", woeid: 23424954 },
  { name: "Switzerland", woeid: 23424957 },
  { name: "Thailand", woeid: 23424960 },
  { name: "Turkey", woeid: 23424969 },
  { name: "Ukraine", woeid: 23424976 },
  { name: "United Arab Emirates", woeid: 23424738 },
  { name: "United Kingdom", woeid: 23424975 },
  { name: "United States", woeid: 23424977 },
  { name: "Venezuela", woeid: 23424982 },
  { name: "Vietnam", woeid: 23424984 },
  { name: "Worldwide", woeid: 1 },
];

// Function to get WOEID by country name
const getWoeidByName = (name) => {
  return woeidList.find(
    (location) => location.name.toLowerCase() === name.toLowerCase()
  );
};

// Function to get all WOEIDs
const getAllWoeids = () => woeidList;

module.exports = {
  getWoeidByName,
  getAllWoeids,
};

// const woeidList = [
//   { name: "Algeria", woeid: 23424740 },
//   { name: "Argentina", woeid: 23424747 },
//   { name: "Australia", woeid: 23424748 },
//   { name: "Austria", woeid: 23424750 },
// ];
// mai aaapko ek array of object dunga usko har min ek baar call karna hai or usse data base mai store karna hai lekin or jo naam hai usse releted data agar hoga jaise api se data aaya neche wale fromate mai 
// aaisa scehma banao 
// {
//   "_id": {
//     "$oid": "67e297b265d835700e162db7"
//   },
//   "location": "Algeria",
//   "trend_name": "حسام",
//   "tweet_count": 190200,
//   "timestamp": {
//     "$date": "2025-03-25T11:46:58.996Z"
//   },
//   "__v": 0
// }

// to jaise mujhe location mila Algeria to db mai jitne data hai vo find kare and delete kar fhir new data add kare and jab last value pahuche fhir wapasa start ho matalb array of object mai jo value hai waha pahuch jaye fhir start value par jaye and api call karte rahe ye api jo hai twitter ki hai har 15 mai hum 15 api he call kar akte hai to ye cheez ko dhyan rakhna 