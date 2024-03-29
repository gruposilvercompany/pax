// ** I18N

// Calendar SK language
// Author: Peter Valach (pvalach@gmx.net)
// Encoding: utf-8
// Last update: 2003/10/29
// Distributed under the same terms as the calendar itself.

// full day names
Calendar._DN = new Array
("NedeÃÄŸa",
 "Pondelok",
 "Utorok",
 "Streda",
 "Ä¹Â tvrtok",
 "Piatok",
 "Sobota",
 "NedeÃÄŸa");

// short day names
Calendar._SDN = new Array
("Ned",
 "Pon",
 "Uto",
 "Str",
 "Ä¹Â tv",
 "Pia",
 "Sob",
 "Ned");

// full month names
Calendar._MN = new Array
("JanuÄËr",
 "FebruÄËr",
 "Marec",
 "AprÄÂ­l",
 "MÄËj",
 "JÄÅn",
 "JÄÅl",
 "August",
 "September",
 "OktÄÅber",
 "November",
 "December");

// short month names
Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "MÄËj",
 "JÄÅn",
 "JÄÅl",
 "Aug",
 "Sep",
 "Okt",
 "Nov",
 "Dec");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O kalendÄËri";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2003\n" +
"PoslednÄÅ verziu nÄËjdete na: http://dynarch.com/mishoo/calendar.epl\n" +
"DistribuovanÄÂ© pod GNU LGPL.  ViÃÅ¹ http://gnu.org/licenses/lgpl.html pre detaily." +
"\n\n" +
"VÄËber dÄËtumu:\n" +
"- PouÄ¹ÄŸite tlaÃÅ€idlÄË \xab, \xbb pre vÄËber roku\n" +
"- PouÄ¹ÄŸite tlaÃÅ€idlÄË " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " pre vÄËber mesiaca\n" +
"- Ak ktorÄÂ©koÃÄŸvek z tÄËchto tlaÃÅ€idiel podrÄ¹ÄŸÄÂ­te dlhÄ¹Ëie, zobrazÄÂ­ sa rÄËchly vÄËber.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"VÄËber ÃÅ€asu:\n" +
"- Kliknutie na niektorÄÅ poloÄ¹ÄŸku ÃÅ€asu ju zvÄËÄ¹Ëi\n" +
"- Shift-klik ju znÄÂ­Ä¹ÄŸi\n" +
"- Ak podrÄ¹ÄŸÄÂ­te tlaÃÅ€ÄÂ­tko stlaÃÅ€enÄÂ©, posÄÅvanÄÂ­m menÄÂ­te hodnotu.";

Calendar._TT["PREV_YEAR"] = "PredoÄ¹ËlÄË rok (podrÄ¹ÄŸte pre menu)";
Calendar._TT["PREV_MONTH"] = "PredoÄ¹ËlÄË mesiac (podrÄ¹ÄŸte pre menu)";
Calendar._TT["GO_TODAY"] = "PrejsÄ¹Ä na dneÄ¹Ëok";
Calendar._TT["NEXT_MONTH"] = "Nasl. mesiac (podrÄ¹ÄŸte pre menu)";
Calendar._TT["NEXT_YEAR"] = "Nasl. rok (podrÄ¹ÄŸte pre menu)";
Calendar._TT["SEL_DATE"] = "ZvoÃÄŸte dÄËtum";
Calendar._TT["DRAG_TO_MOVE"] = "PodrÄ¹ÄŸanÄÂ­m tlaÃÅ€ÄÂ­tka zmenÄÂ­te polohu";
Calendar._TT["PART_TODAY"] = " (dnes)";
Calendar._TT["MON_FIRST"] = "ZobraziÄ¹Ä pondelok ako prvÄË";
Calendar._TT["SUN_FIRST"] = "ZobraziÄ¹Ä nedeÃÄŸu ako prvÄÅ";
Calendar._TT["CLOSE"] = "ZavrieÄ¹Ä";
Calendar._TT["TODAY"] = "Dnes";
Calendar._TT["TIME_PART"] = "(Shift-)klik/Ä¹Äahanie zmenÄÂ­ hodnotu";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "$d. %m. %Y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %e. %b";

Calendar._TT["WK"] = "tÄËÄ¹ÄŸ";
