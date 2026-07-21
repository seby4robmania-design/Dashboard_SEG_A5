// ============================================================
// FOOD PRICE DATA
// ============================================================
// Every number below comes straight from Statistics Canada's
// Consumer Price Index (CPI) for food - Table 18-10-0004-01.
// https://www.statcan.gc.ca/en/topics-start/food-price
//
// I pulled 13 months of numbers (May 2025 to May 2026, index
// base year 2002 = 100) for a handful of categories and items,
// then just wrote the values here as plain objects. That way the
// page never has to fetch anything over the network - it just
// reads this file, the same way index.html reads it with a
// normal <script src="foodPriceData.js"> tag (no import/export,
// no build step, just plain globals like the rest of my sites).
// ============================================================

// The 13 months shown along the bottom of both charts.
const MONTHS = [
  { key: '2025-05', en: 'May 2025', ro: 'Mai 2025' },
  { key: '2025-06', en: 'Jun 2025', ro: 'Iun 2025' },
  { key: '2025-07', en: 'Jul 2025', ro: 'Iul 2025' },
  { key: '2025-08', en: 'Aug 2025', ro: 'Aug 2025' },
  { key: '2025-09', en: 'Sep 2025', ro: 'Sep 2025' },
  { key: '2025-10', en: 'Oct 2025', ro: 'Oct 2025' },
  { key: '2025-11', en: 'Nov 2025', ro: 'Noi 2025' },
  { key: '2025-12', en: 'Dec 2025', ro: 'Dec 2025' },
  { key: '2026-01', en: 'Jan 2026', ro: 'Ian 2026' },
  { key: '2026-02', en: 'Feb 2026', ro: 'Feb 2026' },
  { key: '2026-03', en: 'Mar 2026', ro: 'Mar 2026' },
  { key: '2026-04', en: 'Apr 2026', ro: 'Apr 2026' },
  { key: '2026-05', en: 'May 2026', ro: 'Mai 2026' },
];

// Broad categories -> feed the bar chart (compare categories for ONE month).
const CATEGORIES = [
  {
    key: 'meat', en: 'Meat', ro: 'Carne',
    values: { '2025-05': 221.2, '2025-06': 221.5, '2025-07': 222.8, '2025-08': 227.8, '2025-09': 228.2, '2025-10': 231.2, '2025-11': 232.4, '2025-12': 232.0, '2026-01': 234.1, '2026-02': 230.7, '2026-03': 232.7, '2026-04': 235.4, '2026-05': 234.4 },
  },
  {
    key: 'fish', en: 'Fish', ro: 'Pește',
    values: { '2025-05': 184.6, '2025-06': 186.2, '2025-07': 185.7, '2025-08': 187.3, '2025-09': 183.2, '2025-10': 185.2, '2025-11': 187.1, '2025-12': 191.5, '2026-01': 191.8, '2026-02': 189.8, '2026-03': 191.2, '2026-04': 191.2, '2026-05': 191.9 },
  },
  {
    key: 'dairy', en: 'Dairy products', ro: 'Produse lactate',
    values: { '2025-05': 171.5, '2025-06': 172.2, '2025-07': 171.3, '2025-08': 173.1, '2025-09': 172.1, '2025-10': 172.3, '2025-11': 172.2, '2025-12': 172.4, '2026-01': 174.2, '2026-02': 174.7, '2026-03': 177.1, '2026-04': 174.3, '2026-05': 176.1 },
  },
  {
    key: 'eggs', en: 'Eggs', ro: 'Ouă',
    values: { '2025-05': 229.1, '2025-06': 229.4, '2025-07': 229.3, '2025-08': 229.2, '2025-09': 227.8, '2025-10': 226.7, '2025-11': 221.9, '2025-12': 223.8, '2026-01': 222.9, '2026-02': 222.9, '2026-03': 225.1, '2026-04': 223.4, '2026-05': 222.8 },
  },
  {
    key: 'bakery', en: 'Bakery products', ro: 'Produse de panificație',
    values: { '2025-05': 211.1, '2025-06': 209.8, '2025-07': 210.6, '2025-08': 212.6, '2025-09': 212.7, '2025-10': 212.1, '2025-11': 218.2, '2025-12': 219.8, '2026-01': 217.5, '2026-02': 219.5, '2026-03': 217.8, '2026-04': 216.5, '2026-05': 217.1 },
  },
  {
    key: 'fruit', en: 'Fresh fruit', ro: 'Fructe proaspete',
    values: { '2025-05': 167.4, '2025-06': 166.9, '2025-07': 167.5, '2025-08': 158.7, '2025-09': 159.8, '2025-10': 156.7, '2025-11': 163.7, '2025-12': 167.8, '2026-01': 163.0, '2026-02': 164.0, '2026-03': 162.8, '2026-04': 164.8, '2026-05': 176.3 },
  },
  {
    key: 'vegetables', en: 'Vegetables and vegetable preparations', ro: 'Legume și preparate din legume',
    values: { '2025-05': 193.4, '2025-06': 186.6, '2025-07': 191.2, '2025-08': 188.1, '2025-09': 192.8, '2025-10': 183.6, '2025-11': 194.0, '2025-12': 196.8, '2026-01': 200.0, '2026-02': 202.4, '2026-03': 205.2, '2026-04': 198.9, '2026-05': 207.4 },
  },
];

// Individual items -> feed the line chart (track ONE item over all 13 months).
const ITEMS = [
  {
    key: 'tomatoes', en: 'Tomatoes', ro: 'Roșii',
    values: { '2025-05': 139.3, '2025-06': 130.5, '2025-07': 140.5, '2025-08': 145.1, '2025-09': 154.1, '2025-10': 143.8, '2025-11': 150.1, '2025-12': 154.8, '2026-01': 172.3, '2026-02': 184.5, '2026-03': 178.6, '2026-04': 186.5, '2026-05': 202.2 },
  },
  {
    key: 'potatoes', en: 'Potatoes', ro: 'Cartofi',
    values: { '2025-05': 163.5, '2025-06': 161.0, '2025-07': 161.5, '2025-08': 161.6, '2025-09': 155.4, '2025-10': 149.9, '2025-11': 152.3, '2025-12': 146.7, '2026-01': 156.1, '2026-02': 154.8, '2026-03': 153.5, '2026-04': 154.5, '2026-05': 160.8 },
  },
  {
    key: 'lettuce', en: 'Lettuce', ro: 'Salată verde',
    values: { '2025-05': 205.6, '2025-06': 195.6, '2025-07': 172.0, '2025-08': 168.6, '2025-09': 184.3, '2025-10': 189.5, '2025-11': 237.8, '2025-12': 237.3, '2026-01': 210.6, '2026-02': 211.1, '2026-03': 225.2, '2026-04': 216.1, '2026-05': 227.6 },
  },
  {
    key: 'apples', en: 'Apples', ro: 'Mere',
    values: { '2025-05': 218.6, '2025-06': 215.5, '2025-07': 216.0, '2025-08': 222.2, '2025-09': 219.3, '2025-10': 190.4, '2025-11': 185.8, '2025-12': 204.8, '2026-01': 203.2, '2026-02': 204.1, '2026-03': 207.4, '2026-04': 212.0, '2026-05': 224.0 },
  },
  {
    key: 'bananas', en: 'Bananas', ro: 'Banane',
    values: { '2025-05': 140.5, '2025-06': 140.3, '2025-07': 139.9, '2025-08': 139.7, '2025-09': 139.5, '2025-10': 139.7, '2025-11': 139.7, '2025-12': 139.8, '2026-01': 139.8, '2026-02': 149.3, '2026-03': 152.5, '2026-04': 153.4, '2026-05': 157.2 },
  },
  {
    key: 'bread', en: 'Bread, rolls and buns', ro: 'Pâine și chifle',
    values: { '2025-05': 219.7, '2025-06': 216.5, '2025-07': 214.9, '2025-08': 217.7, '2025-09': 220.3, '2025-10': 224.5, '2025-11': 225.4, '2025-12': 229.2, '2026-01': 225.4, '2026-02': 227.7, '2026-03': 227.1, '2026-04': 230.8, '2026-05': 225.5 },
  },
];

// Every bit of on-page text, in both languages. No separate resource
// file needed for a page this size (same call the assignment brief
// makes) - it's just one object, keyed by language code.
const TRANSLATIONS = {
  en: {
    siteTitle: 'Canadian Food Price Index Dashboard',
    siteSubtitle: 'An interactive look at how Statistics Canada’s Consumer Price Index (CPI) for food has moved over the last 13 months.',
    introText: 'The Consumer Price Index (CPI) tracks the price of a fixed basket of goods over time relative to a base year (2002 = 100). A rising index means prices are, on average, higher than they were in the base year. Use the controls below to explore how different food categories and individual items have moved.',
    barCardTitle: 'Compare food categories',
    barContext: 'Context: this chart compares the price index across seven broad food categories for one month at a time, so you can see which categories cost relatively more.',
    barMonthLabel: 'Month',
    barSortLabel: 'Sort by index (high to low)',
    barAxisCategory: 'Category',
    barAxisIndex: 'Price index (2002=100)',
    lineCardTitle: 'Track one item over time',
    lineContext: 'Context: this chart follows a single food item across 13 months, so you can see whether its price has been trending up, down, or holding steady.',
    lineItemLabel: 'Food item',
    lineAxisMonth: 'Month',
    lineAxisIndex: 'Price index (2002=100)',
    tooltipIndex: 'Index',
  },
  ro: {
    siteTitle: 'Tablou de bord al indicelui prețurilor alimentare din Canada',
    siteSubtitle: 'O privire interactivă asupra modului în care Indicele Prețurilor de Consum (IPC) pentru alimente al Statistics Canada a evoluat în ultimele 13 luni.',
    introText: 'Indicele Prețurilor de Consum (IPC) urmărește prețul unui coș fix de bunuri în timp, raportat la un an de bază (2002 = 100). Un indice în creștere înseamnă că prețurile sunt, în medie, mai mari decât în anul de bază. Folosiți comenzile de mai jos pentru a explora evoluția diferitelor categorii și produse alimentare.',
    barCardTitle: 'Comparați categoriile alimentare',
    barContext: 'Context: acest grafic compară indicele prețurilor pentru șapte categorii alimentare largi, pentru o singură lună la un moment dat, pentru a vedea care categorii costă relativ mai mult.',
    barMonthLabel: 'Luna',
    barSortLabel: 'Sortează după indice (descrescător)',
    barAxisCategory: 'Categorie',
    barAxisIndex: 'Indice de preț (2002=100)',
    lineCardTitle: 'Urmăriți un produs în timp',
    lineContext: 'Context: acest grafic urmărește un singur produs alimentar pe parcursul a 13 luni, pentru a vedea dacă prețul său a crescut, a scăzut sau a rămas stabil.',
    lineItemLabel: 'Produs alimentar',
    lineAxisMonth: 'Luna',
    lineAxisIndex: 'Indice de preț (2002=100)',
    tooltipIndex: 'Indice',
  },
};
