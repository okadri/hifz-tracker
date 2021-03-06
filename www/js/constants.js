// File for download
var quranPages = "http://android.quran.com/data/zips/images_800.zip";

var allThemes = [
	{ id: 1, name: "LIGHT", class: "stable" },
	{ id: 2, name: "DARK", class: "dark" }
];

var allLanguages = [
	{ id: 1, name: "العربية", code: "ar" },
	{ id: 2, name: "English", code: "en" }
];

// Wird types
var SURAH = 'SURAH';
var QUARTER = 'QUARTER'

var allWirds = [
	// Surahs
	{ id: 1001, type: SURAH, title: "Al-Fatihah", startPage: 1, endPage: 1 },
	{ id: 1002, type: SURAH, title: "Al-Baqarah", startPage: 2, endPage: 49 },
	{ id: 1003, type: SURAH, title: "Al-Imran", startPage: 50, endPage: 76 },
	{ id: 1004, type: SURAH, title: "An-Nisa'", startPage: 77, endPage: 106 },
	{ id: 1005, type: SURAH, title: "Al-Ma'idah", startPage: 106, endPage: 127 },
	{ id: 1006, type: SURAH, title: "Al-An'am", startPage: 128, endPage: 150 },
	{ id: 1007, type: SURAH, title: "Al-A'raf", startPage: 151, endPage: 176 },
	{ id: 1008, type: SURAH, title: "Al-Anfal", startPage: 177, endPage: 186 },
	{ id: 1009, type: SURAH, title: "At-Taubah", startPage: 187, endPage: 207 },
	{ id: 1010, type: SURAH, title: "Yunus", startPage: 208, endPage: 221 },
	{ id: 1011, type: SURAH, title: "Hud", startPage: 221, endPage: 235 },
	{ id: 1012, type: SURAH, title: "Yusuf", startPage: 235, endPage: 248 },
	{ id: 1013, type: SURAH, title: "Ar-Ra'd", startPage: 249, endPage: 255 },
	{ id: 1014, type: SURAH, title: "Ibrahim", startPage: 255, endPage: 261 },
	{ id: 1015, type: SURAH, title: "Al-Hijr", startPage: 262, endPage: 267 },
	{ id: 1016, type: SURAH, title: "An-Nahl", startPage: 267, endPage: 281 },
	{ id: 1017, type: SURAH, title: "Al-Isra", startPage: 282, endPage: 293 },
	{ id: 1018, type: SURAH, title: "Al-Kahf", startPage: 293, endPage: 304 },
	{ id: 1019, type: SURAH, title: "Maryam", startPage: 305, endPage: 312 },
	{ id: 1020, type: SURAH, title: "Ta Ha", startPage: 312, endPage: 321 },
	{ id: 1021, type: SURAH, title: "Al-Anbiya'", startPage: 322, endPage: 331 },
	{ id: 1022, type: SURAH, title: "Al-Hajj", startPage: 332, endPage: 341 },
	{ id: 1023, type: SURAH, title: "Al-Mu'minun", startPage: 342, endPage: 349 },
	{ id: 1024, type: SURAH, title: "An-Nur", startPage: 350, endPage: 359 },
	{ id: 1025, type: SURAH, title: "Al-Furqan", startPage: 359, endPage: 366 },
	{ id: 1026, type: SURAH, title: "Ash-Shu'ara'", startPage: 367, endPage: 376 },
	{ id: 1027, type: SURAH, title: "An-Naml", startPage: 377, endPage: 385 },
	{ id: 1028, type: SURAH, title: "Al-Qasas", startPage: 385, endPage: 396 },
	{ id: 1029, type: SURAH, title: "Al-'Ankabut", startPage: 396, endPage: 404 },
	{ id: 1030, type: SURAH, title: "Ar-Rum", startPage: 404, endPage: 410 },
	{ id: 1031, type: SURAH, title: "Luqman", startPage: 411, endPage: 414 },
	{ id: 1032, type: SURAH, title: "As-Sajdah", startPage: 415, endPage: 417 },
	{ id: 1033, type: SURAH, title: "Al-Ahzab", startPage: 418, endPage: 427 },
	{ id: 1034, type: SURAH, title: "Saba'", startPage: 428, endPage: 434 },
	{ id: 1035, type: SURAH, title: "Fatir", startPage: 434, endPage: 440 },
	{ id: 1036, type: SURAH, title: "Ya Sin", startPage: 440, endPage: 445 },
	{ id: 1037, type: SURAH, title: "As-Saffat", startPage: 446, endPage: 452 },
	{ id: 1038, type: SURAH, title: "Sad", startPage: 453, endPage: 458 },
	{ id: 1039, type: SURAH, title: "Az-Zumar", startPage: 458, endPage: 467 },
	{ id: 1040, type: SURAH, title: "Ghafir", startPage: 467, endPage: 476 },
	{ id: 1041, type: SURAH, title: "Fussilat", startPage: 477, endPage: 482 },
	{ id: 1042, type: SURAH, title: "Ash-Shura", startPage: 483, endPage: 489 },
	{ id: 1043, type: SURAH, title: "Az-Zukhruf", startPage: 489, endPage: 495 },
	{ id: 1044, type: SURAH, title: "Ad-Dukhan", startPage: 496, endPage: 498 },
	{ id: 1045, type: SURAH, title: "Al-Jathiyah", startPage: 499, endPage: 502 },
	{ id: 1046, type: SURAH, title: "Al-Ahqaf", startPage: 502, endPage: 506 },
	{ id: 1047, type: SURAH, title: "Muhammad", startPage: 507, endPage: 510 },
	{ id: 1048, type: SURAH, title: "Al-Fath", startPage: 511, endPage: 515 },
	{ id: 1049, type: SURAH, title: "Al-Hujurat", startPage: 515, endPage: 517 },
	{ id: 1050, type: SURAH, title: "Qaf", startPage: 518, endPage: 520 },
	{ id: 1051, type: SURAH, title: "Ad-Dhariyat", startPage: 520, endPage: 523 },
	{ id: 1052, type: SURAH, title: "At-Tur", startPage: 523, endPage: 525 },
	{ id: 1053, type: SURAH, title: "An-Najm", startPage: 526, endPage: 528 },
	{ id: 1054, type: SURAH, title: "Al-Qamar", startPage: 528, endPage: 531 },
	{ id: 1055, type: SURAH, title: "Ar-Rahman", startPage: 531, endPage: 534 },
	{ id: 1056, type: SURAH, title: "Al-Waqi'ah", startPage: 534, endPage: 537 },
	{ id: 1057, type: SURAH, title: "Al-Hadid", startPage: 537, endPage: 541 },
	{ id: 1058, type: SURAH, title: "Al-Mujadilah", startPage: 542, endPage: 545 },
	{ id: 1059, type: SURAH, title: "Al-Hashr", startPage: 545, endPage: 548 },
	{ id: 1060, type: SURAH, title: "Al-Mumtahanah", startPage: 549, endPage: 551 },
	{ id: 1061, type: SURAH, title: "As-Saff", startPage: 551, endPage: 552 },
	{ id: 1062, type: SURAH, title: "Al-Jumu'ah", startPage: 553, endPage: 554 },
	{ id: 1063, type: SURAH, title: "Al-Munafiqun", startPage: 554, endPage: 555 },
	{ id: 1064, type: SURAH, title: "At-Taghabun", startPage: 556, endPage: 557 },
	{ id: 1065, type: SURAH, title: "At-Talaq,", startPage: 558, endPage: 559 },
	{ id: 1066, type: SURAH, title: "At-Tahrim", startPage: 560, endPage: 561 },
	{ id: 1067, type: SURAH, title: "Al-Mulk", startPage: 562, endPage: 564 },
	{ id: 1068, type: SURAH, title: "Al-Qalam", startPage: 564, endPage: 566 },
	{ id: 1069, type: SURAH, title: "Al-Haqqah", startPage: 566, endPage: 568 },
	{ id: 1070, type: SURAH, title: "Al-Ma'arij", startPage: 568, endPage: 570 },
	{ id: 1071, type: SURAH, title: "Nuh", startPage: 570, endPage: 571 },
	{ id: 1072, type: SURAH, title: "Al-Jinn", startPage: 572, endPage: 573 },
	{ id: 1073, type: SURAH, title: "Al-Muzammil", startPage: 574, endPage: 575 },
	{ id: 1074, type: SURAH, title: "Al-Mudathir", startPage: 575, endPage: 577 },
	{ id: 1075, type: SURAH, title: "Al-Qiyamah", startPage: 577, endPage: 578 },
	{ id: 1076, type: SURAH, title: "Al-Insane", startPage: 578, endPage: 580 },
	{ id: 1077, type: SURAH, title: "Al-Mursalat", startPage: 580, endPage: 581 },
	{ id: 1078, type: SURAH, title: "An-Naba'", startPage: 582, endPage: 583 },
	{ id: 1079, type: SURAH, title: "An-Nazi'at", startPage: 583, endPage: 584 },
	{ id: 1080, type: SURAH, title: "'Abasa", startPage: 585, endPage: 586 },
	{ id: 1081, type: SURAH, title: "At-Takwir", startPage: 586, endPage: 586 },
	{ id: 1082, type: SURAH, title: "Al-Infitar", startPage: 587, endPage: 587 },
	{ id: 1083, type: SURAH, title: "Al-Mutaffifeen", startPage: 587, endPage: 589 },
	{ id: 1084, type: SURAH, title: "Al-Inshiqaq", startPage: 589, endPage: 590 },
	{ id: 1085, type: SURAH, title: "Al-Buruj", startPage: 590, endPage: 590 },
	{ id: 1086, type: SURAH, title: "At-Tariq", startPage: 591, endPage: 591 },
	{ id: 1087, type: SURAH, title: "Al-A'la", startPage: 591, endPage: 592 },
	{ id: 1088, type: SURAH, title: "Al-Ghashiya", startPage: 592, endPage: 593 },
	{ id: 1089, type: SURAH, title: "Al-Fajr", startPage: 593, endPage: 594 },
	{ id: 1090, type: SURAH, title: "Al-Balad", startPage: 594, endPage: 595 },
	{ id: 1091, type: SURAH, title: "Ash-Shams", startPage: 595, endPage: 595 },
	{ id: 1092, type: SURAH, title: "Al-Layl", startPage: 595, endPage: 596 },
	{ id: 1093, type: SURAH, title: "Ad-Duha", startPage: 596, endPage: 596 },
	{ id: 1094, type: SURAH, title: "Ash-Sharh", startPage: 596, endPage: 597 },
	{ id: 1095, type: SURAH, title: "At-Tin", startPage: 597, endPage: 597 },
	{ id: 1096, type: SURAH, title: "Al-'Alaq", startPage: 597, endPage: 598 },
	{ id: 1097, type: SURAH, title: "Al-qadr", startPage: 598, endPage: 598 },
	{ id: 1098, type: SURAH, title: "Al-Bayyinah", startPage: 598, endPage: 599 },
	{ id: 1099, type: SURAH, title: "Az-Zalzala", startPage: 599, endPage: 599 },
	{ id: 1100, type: SURAH, title: "Al-'Adiyat", startPage: 599, endPage: 600 },
	{ id: 1101, type: SURAH, title: "Al-Qari'ah", startPage: 600, endPage: 600 },
	{ id: 1102, type: SURAH, title: "At-Takathur", startPage: 600, endPage: 600 },
	{ id: 1103, type: SURAH, title: "Al-'Asr", startPage: 601, endPage: 601 },
	{ id: 1104, type: SURAH, title: "Al-Humazah", startPage: 601, endPage: 601 },
	{ id: 1105, type: SURAH, title: "Al-Fil", startPage: 601, endPage: 601 },
	{ id: 1106, type: SURAH, title: "Al-Quraish", startPage: 602, endPage: 602 },
	{ id: 1107, type: SURAH, title: "Al-Ma'un", startPage: 602, endPage: 602 },
	{ id: 1108, type: SURAH, title: "Al-Kauthar", startPage: 602, endPage: 602 },
	{ id: 1109, type: SURAH, title: "Al-Kafirun", startPage: 603, endPage: 603 },
	{ id: 1110, type: SURAH, title: "An-Nasr", startPage: 603, endPage: 603 },
	{ id: 1111, type: SURAH, title: "Al-Masad", startPage: 603, endPage: 603 },
	{ id: 1112, type: SURAH, title: "Al-Ikhlas", startPage: 604, endPage: 604 },
	{ id: 1113, type: SURAH, title: "Al-Falaq", startPage: 604, endPage: 604 },
	{ id: 1114, type: SURAH, title: "An-Nas", startPage: 604, endPage: 604 },
	// Quarters
	{ id: 2001, type: QUARTER, title: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", startPage: 1, endPage: 5 },
	{ id: 2002, type: QUARTER, title: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَن", startPage: 5, endPage: 7 },
	{ id: 2003, type: QUARTER, title: "أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ", startPage: 7, endPage: 9 },
	{ id: 2004, type: QUARTER, title: "وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ'", startPage: 9, endPage: 11 },
	{ id: 2005, type: QUARTER, title: "أَفَتَطْمَعُونَ أَن يُؤْمِنُوا لَكُمْ", startPage: 11, endPage: 14 },
	{ id: 2006, type: QUARTER, title: "وَلَقَدْ جَاءَكُم مُّوسَىٰ", startPage: 14, endPage: 16 },
	{ id: 2007, type: QUARTER, title: "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا", startPage: 17, endPage: 19 },
	{ id: 2008, type: QUARTER, title: "وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ", startPage: 19, endPage: 21 },
	{ id: 2009, type: QUARTER, title: "سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ", startPage: 22, endPage: 24 },
	{ id: 2010, type: QUARTER, title: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن", startPage: 24, endPage: 26 },
	{ id: 2011, type: QUARTER, title: "لَّيْسَ الْبِرَّ أَن تُوَلُّوا", startPage: 27, endPage: 29 },
	{ id: 2012, type: QUARTER, title: "يَسْأَلُونَكَ عَنِ الْأَهِلَّةِ ۖ قُلْ", startPage: 29, endPage: 31 },
	{ id: 2013, type: QUARTER, title: "وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ", startPage: 32, endPage: 34 },
	{ id: 2014, type: QUARTER, title: "يَسْأَلُونَكَ عَنِ الْخَمْرِ", startPage: 34, endPage: 37 },
	{ id: 2015, type: QUARTER, title: "وَالْوَالِدَاتُ يُرْضِعْنَ", startPage: 37, endPage: 39 },
	{ id: 2016, type: QUARTER, title: "أَلَمْ تَرَ إِلَى الَّذِينَ خَرَجُوا", startPage: 39, endPage: 41 },
	{ id: 2017, type: QUARTER, title: "تِلْكَ الرُّسُلُ فَضَّلْنَا", startPage: 42, endPage: 44 },
	{ id: 2018, type: QUARTER, title: "قَوْلٌ مَّعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ", startPage: 44, endPage: 46 },
	{ id: 2019, type: QUARTER, title: "لَّيْسَ عَلَيْكَ هُدَاهُمْ وَلَٰكِنَّ", startPage: 46, endPage: 48 },
	{ id: 2020, type: QUARTER, title: "وَإِن كُنتُمْ عَلَىٰ سَفَرٍ وَلَمْ", startPage: 49, endPage: 51 },
	{ id: 2021, type: QUARTER, title: "قُلْ أَؤُنَبِّئُكُم بِخَيْرٍ مِّن'", startPage: 51, endPage: 54 },
	{ id: 2022, type: QUARTER, title: "إِنَّ اللَّهَ اصْطَفَىٰ آدَمَ وَنُوحًا", startPage: 54, endPage: 56 },
	{ id: 2023, type: QUARTER, title: "فَلَمَّا أَحَسَّ عِيسَىٰ مِنْهُمُ", startPage: 56, endPage: 59 },
	{ id: 2024, type: QUARTER, title: "وَمِنْ أَهْلِ الْكِتَابِ مَنْ إِن", startPage: 59, endPage: 62 },
	{ id: 2025, type: QUARTER, title: "كُلُّ الطَّعَامِ كَانَ حِلًّا لِّبَنِي", startPage: 62, endPage: 64 },
	{ id: 2026, type: QUARTER, title: "لَيْسُوا سَوَاءً ۗ مِّنْ أَهْلِ", startPage: 64, endPage: 66 },
	{ id: 2027, type: QUARTER, title: "وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن", startPage: 67, endPage: 69 },
	{ id: 2028, type: QUARTER, title: "إِذْ تُصْعِدُونَ وَلَا تَلْوُونَ", startPage: 69, endPage: 72 },
	{ id: 2029, type: QUARTER, title: "يَسْتَبْشِرُونَ بِنِعْمَةٍ مِّنَ", startPage: 72, endPage: 74 },
	{ id: 2030, type: QUARTER, title: "لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ", startPage: 74, endPage: 76 },
	{ id: 2031, type: QUARTER, title: "يَا أَيُّهَا النَّاسُ اتَّقُوا", startPage: 77, endPage: 78 },
	{ id: 2032, type: QUARTER, title: "وَلَكُمْ نِصْفُ مَا تَرَكَ", startPage: 79, endPage: 81 },
	{ id: 2033, type: QUARTER, title: "وَالْمُحْصَنَاتُ مِنَ النِّسَاءِ", startPage: 82, endPage: 84 },
	{ id: 2034, type: QUARTER, title: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا'", startPage: 84, endPage: 87 },
	{ id: 2035, type: QUARTER, title: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن", startPage: 87, endPage: 89 },
	{ id: 2036, type: QUARTER, title: "فَلْيُقَاتِلْ فِي سَبِيلِ اللَّهِ", startPage: 89, endPage: 92 },
	{ id: 2037, type: QUARTER, title: "فَمَا لَكُمْ فِي الْمُنَافِقِينَ", startPage: 92, endPage: 94 },
	{ id: 2038, type: QUARTER, title: "وَمَن يُهَاجِرْ فِي سَبِيلِ اللَّهِ", startPage: 94, endPage: 96 },
	{ id: 2039, type: QUARTER, title: "لَّا خَيْرَ فِي كَثِيرٍ مِّن", startPage: 97, endPage: 99 },
	{ id: 2040, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا", startPage: 100, endPage: 101 },
	{ id: 2041, type: QUARTER, title: "لَّا يُحِبُّ اللَّهُ الْجَهْرَ", startPage: 102, endPage: 103 },
	{ id: 2042, type: QUARTER, title: "إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا", startPage: 104, endPage: 106 },
	{ id: 2043, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا", startPage: 106, endPage: 109 },
	{ id: 2044, type: QUARTER, title: "وَلَقَدْ أَخَذَ اللَّهُ مِيثَاقَ بَنِي", startPage: 109, endPage: 112 },
	{ id: 2045, type: QUARTER, title: "وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ", startPage: 112, endPage: 114 },
	{ id: 2046, type: QUARTER, title: "يَا أَيُّهَا الرَّسُولُ لَا يَحْزُنكَ", startPage: 114, endPage: 116 },
	{ id: 2047, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا", startPage: 117, endPage: 119 },
	{ id: 2048, type: QUARTER, title: "يَا أَيُّهَا الرَّسُولُ بَلِّغْ مَا", startPage: 119, endPage: 121 },
	{ id: 2049, type: QUARTER, title: "لَتَجِدَنَّ أَشَدَّ النَّاسِ", startPage: 121, endPage: 124 },
	{ id: 2050, type: QUARTER, title: "جَعَلَ اللَّهُ الْكَعْبَةَ الْبَيْتَ", startPage: 124, endPage: 125 },
	{ id: 2051, type: QUARTER, title: "يَوْمَ يَجْمَعُ اللَّهُ الرُّسُلَ", startPage: 126, endPage: 129 },
	{ id: 2052, type: QUARTER, title: "وَلَهُ مَا سَكَنَ فِي اللَّيْلِ", startPage: 129, endPage: 131 },
	{ id: 2053, type: QUARTER, title: "إِنَّمَا يَسْتَجِيبُ الَّذِينَ", startPage: 132, endPage: 134 },
	{ id: 2054, type: QUARTER, title: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا", startPage: 134, endPage: 136 },
	{ id: 2055, type: QUARTER, title: "وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ", startPage: 137, endPage: 139 },
	{ id: 2056, type: QUARTER, title: "إِنَّ اللَّهَ فَالِقُ الْحَبِّ", startPage: 140, endPage: 141 },
	{ id: 2057, type: QUARTER, title: "وَلَوْ أَنَّنَا نَزَّلْنَا إِلَيْهِمُ", startPage: 142, endPage: 144 },
	{ id: 2058, type: QUARTER, title: "لَهُمْ دَارُ السَّلَامِ عِندَ", startPage: 144, endPage: 146 },
	{ id: 2059, type: QUARTER, title: "وَهُوَ الَّذِي أَنشَأَ جَنَّاتٍ", startPage: 146, endPage: 148 },
	{ id: 2060, type: QUARTER, title: "قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ", startPage: 148, endPage: 150 },
	{ id: 2061, type: QUARTER, title: "المص", startPage: 151, endPage: 153 },
	{ id: 2062, type: QUARTER, title: "يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ", startPage: 154, endPage: 156 },
	{ id: 2063, type: QUARTER, title: "وَإِذَا صُرِفَتْ أَبْصَارُهُمْ", startPage: 156, endPage: 158 },
	{ id: 2064, type: QUARTER, title: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا", startPage: 158, endPage: 161 },
	{ id: 2065, type: QUARTER, title: "قَالَ الْمَلَأُ الَّذِينَ", startPage: 162, endPage: 164 },
	{ id: 2066, type: QUARTER, title: "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ", startPage: 164, endPage: 167 },
	{ id: 2067, type: QUARTER, title: "وَوَاعَدْنَا مُوسَىٰ ثَلَاثِينَ", startPage: 167, endPage: 169 },
	{ id: 2068, type: QUARTER, title: "وَاكْتُبْ لَنَا فِي هَٰذِهِ الدُّنْيَا", startPage: 170, endPage: 172 },
	{ id: 2069, type: QUARTER, title: "وَإِذْ نَتَقْنَا الْجَبَلَ فَوْقَهُمْ", startPage: 173, endPage: 175 },
	{ id: 2070, type: QUARTER, title: "هُوَ الَّذِي خَلَقَكُم مِّن نَّفْسٍ", startPage: 175, endPage: 176 },
	{ id: 2071, type: QUARTER, title: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ ۖ قُلِ", startPage: 177, endPage: 179 },
	{ id: 2072, type: QUARTER, title: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ", startPage: 179, endPage: 181 },
	{ id: 2073, type: QUARTER, title: "وَاعْلَمُوا أَنَّمَا غَنِمْتُم مِّن", startPage: 182, endPage: 184 },
	{ id: 2074, type: QUARTER, title: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ", startPage: 184, endPage: 186 },
	{ id: 2075, type: QUARTER, title: "بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ", startPage: 187, endPage: 189 },
	{ id: 2076, type: QUARTER, title: "أَجَعَلْتُمْ سِقَايَةَ الْحَاجِّ", startPage: 189, endPage: 192 },
	{ id: 2077, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّ", startPage: 192, endPage: 194 },
	{ id: 2078, type: QUARTER, title: "وَلَوْ أَرَادُوا الْخُرُوجَ", startPage: 194, endPage: 196 },
	{ id: 2079, type: QUARTER, title: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ", startPage: 196, endPage: 199 },
	{ id: 2080, type: QUARTER, title: "وَمِنْهُم مَّنْ عَاهَدَ اللَّهَ لَئِنْ", startPage: 199, endPage: 201 },
	{ id: 2081, type: QUARTER, title: "إِنَّمَا السَّبِيلُ عَلَى الَّذِينَ", startPage: 201, endPage: 204 },
	{ id: 2082, type: QUARTER, title: "إِنَّ اللَّهَ اشْتَرَىٰ مِنَ", startPage: 204, endPage: 206 },
	{ id: 2083, type: QUARTER, title: "وَمَا كَانَ الْمُؤْمِنُونَ", startPage: 206, endPage: 209 },
	{ id: 2084, type: QUARTER, title: "وَلَوْ يُعَجِّلُ اللَّهُ لِلنَّاسِ", startPage: 209, endPage: 211 },
	{ id: 2085, type: QUARTER, title: "لِّلَّذِينَ أَحْسَنُوا الْحُسْنَىٰ", startPage: 212, endPage: 214 },
	{ id: 2086, type: QUARTER, title: "وَيَسْتَنبِئُونَكَ أَحَقٌّ هُوَ ۖ قُلْ", startPage: 214, endPage: 216 },
	{ id: 2087, type: QUARTER, title: "وَاتْلُ عَلَيْهِمْ نَبَأَ نُوحٍ إِذْ", startPage: 217, endPage: 219 },
	{ id: 2088, type: QUARTER, title: "وَجَاوَزْنَا بِبَنِي إِسْرَائِيلَ", startPage: 219, endPage: 221 },
	{ id: 2089, type: QUARTER, title: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ", startPage: 222, endPage: 224 },
	{ id: 2090, type: QUARTER, title: "مَثَلُ الْفَرِيقَيْنِ كَالْأَعْمَىٰ", startPage: 224, endPage: 226 },
	{ id: 2091, type: QUARTER, title: "وَقَالَ ارْكَبُوا فِيهَا بِسْمِ", startPage: 226, endPage: 228 },
	{ id: 2092, type: QUARTER, title: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", startPage: 228, endPage: 231 },
	{ id: 2093, type: QUARTER, title: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", startPage: 231, endPage: 233 },
	{ id: 2094, type: QUARTER, title: "وَأَمَّا الَّذِينَ سُعِدُوا فَفِي", startPage: 233, endPage: 236 },
	{ id: 2095, type: QUARTER, title: "لَّقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ", startPage: 236, endPage: 238 },
	{ id: 2096, type: QUARTER, title: "وَقَالَ نِسْوَةٌ فِي الْمَدِينَةِ", startPage: 238, endPage: 241 },
	{ id: 2097, type: QUARTER, title: "وَمَا أُبَرِّئُ نَفْسِي ۚ إِنَّ", startPage: 242, endPage: 244 },
	{ id: 2098, type: QUARTER, title: "قَالُوا إِن يَسْرِقْ فَقَدْ سَرَقَ", startPage: 244, endPage: 247 },
	{ id: 2099, type: QUARTER, title: "رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ", startPage: 247, endPage: 249 },
	{ id: 2100, type: QUARTER, title: "وَإِن تَعْجَبْ فَعَجَبٌ قَوْلُهُمْ", startPage: 249, endPage: 251 },
	{ id: 2101, type: QUARTER, title: "أَفَمَن يَعْلَمُ أَنَّمَا أُنزِلَ", startPage: 252, endPage: 253 },
	{ id: 2102, type: QUARTER, title: "مَّثَلُ الْجَنَّةِ الَّتِي وُعِدَ", startPage: 254, endPage: 256 },
	{ id: 2103, type: QUARTER, title: "قَالَتْ رُسُلُهُمْ أَفِي اللَّهِ شَكٌّ", startPage: 256, endPage: 259 },
	{ id: 2104, type: QUARTER, title: "أَلَمْ تَرَ إِلَى الَّذِينَ بَدَّلُوا", startPage: 259, endPage: 261 },
	{ id: 2105, type: QUARTER, title: "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ", startPage: 262, endPage: 264 },
	{ id: 2106, type: QUARTER, title: "نَبِّئْ عِبَادِي أَنِّي أَنَا الْغَفُورُ الرَّحِيمُ", startPage: 264, endPage: 267 },
	{ id: 2107, type: QUARTER, title: "أَتَىٰ أَمْرُ اللَّهِ فَلَا", startPage: 267, endPage: 270 },
	{ id: 2108, type: QUARTER, title: "وَقِيلَ لِلَّذِينَ اتَّقَوْا مَاذَا", startPage: 270, endPage: 272 },
	{ id: 2109, type: QUARTER, title: "وَقَالَ اللَّهُ لَا تَتَّخِذُوا", startPage: 272, endPage: 275 },
	{ id: 2110, type: QUARTER, title: "ضَرَبَ اللَّهُ مَثَلًا عَبْدًا", startPage: 275, endPage: 277 },
	{ id: 2111, type: QUARTER, title: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ", startPage: 277, endPage: 279 },
	{ id: 2112, type: QUARTER, title: "يَوْمَ تَأْتِي كُلُّ نَفْسٍ تُجَادِلُ", startPage: 280, endPage: 281 },
	{ id: 2113, type: QUARTER, title: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ", startPage: 282, endPage: 284 },
	{ id: 2114, type: QUARTER, title: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا", startPage: 284, endPage: 286 },
	{ id: 2115, type: QUARTER, title: "قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا", startPage: 287, endPage: 289 },
	{ id: 2116, type: QUARTER, title: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ", startPage: 289, endPage: 292 },
	{ id: 2117, type: QUARTER, title: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي", startPage: 292, endPage: 295 },
	{ id: 2118, type: QUARTER, title: "وَتَرَى الشَّمْسَ إِذَا طَلَعَت", startPage: 295, endPage: 297 },
	{ id: 2119, type: QUARTER, title: "وَاضْرِبْ لَهُم مَّثَلًا رَّجُلَيْنِ", startPage: 297, endPage: 299 },
	{ id: 2120, type: QUARTER, title: "مَّا أَشْهَدتُّهُمْ خَلْقَ", startPage: 299, endPage: 301 },
	{ id: 2121, type: QUARTER, title: "قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن", startPage: 302, endPage: 304 },
	{ id: 2122, type: QUARTER, title: "وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ", startPage: 304, endPage: 306 },
	{ id: 2123, type: QUARTER, title: "فَحَمَلَتْهُ فَانتَبَذَتْ بِهِ", startPage: 306, endPage: 309 },
	{ id: 2124, type: QUARTER, title: "فَخَلَفَ مِن بَعْدِهِمْ خَلْفٌ", startPage: 309, endPage: 312 },
	{ id: 2125, type: QUARTER, title: "طه", startPage: 312, endPage: 315 },
	{ id: 2126, type: QUARTER, title: "مِنْهَا خَلَقْنَاكُمْ وَفِيهَا", startPage: 315, endPage: 317 },
	{ id: 2127, type: QUARTER, title: "وَمَا أَعْجَلَكَ عَن قَوْمِكَ يَا", startPage: 317, endPage: 319 },
	{ id: 2128, type: QUARTER, title: "وَعَنَتِ الْوُجُوهُ لِلْحَيِّ", startPage: 319, endPage: 321 },
	{ id: 2129, type: QUARTER, title: "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ", startPage: 322, endPage: 324 },
	{ id: 2130, type: QUARTER, title: "وَمَن يَقُلْ مِنْهُمْ إِنِّي إِلَٰهٌ", startPage: 324, endPage: 326 },
	{ id: 2131, type: QUARTER, title: "وَلَقَدْ آتَيْنَا إِبْرَاهِيمَ", startPage: 326, endPage: 329 },
	{ id: 2132, type: QUARTER, title: "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي", startPage: 329, endPage: 331 },
	{ id: 2133, type: QUARTER, title: "يَا أَيُّهَا النَّاسُ اتَّقُوا", startPage: 332, endPage: 334 },
	{ id: 2134, type: QUARTER, title: "هَٰذَانِ خَصْمَانِ اخْتَصَمُوا فِي", startPage: 334, endPage: 336 },
	{ id: 2135, type: QUARTER, title: "إِنَّ اللَّهَ يُدَافِعُ عَنِ الَّذِينَ", startPage: 336, endPage: 339 },
	{ id: 2136, type: QUARTER, title: "ذَٰلِكَ وَمَنْ عَاقَبَ بِمِثْلِ مَا", startPage: 339, endPage: 341 },
	{ id: 2137, type: QUARTER, title: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ", startPage: 342, endPage: 344 },
	{ id: 2138, type: QUARTER, title: "هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ", startPage: 344, endPage: 346 },
	{ id: 2139, type: QUARTER, title: "وَلَوْ رَحِمْنَاهُمْ وَكَشَفْنَا مَا", startPage: 347, endPage: 349 },
	{ id: 2140, type: QUARTER, title: "سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا", startPage: 350, endPage: 351 },
	{ id: 2141, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا", startPage: 352, endPage: 354 },
	{ id: 2142, type: QUARTER, title: "اللَّهُ نُورُ السَّمَاوَاتِ", startPage: 354, endPage: 356 },
	{ id: 2143, type: QUARTER, title: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ", startPage: 356, endPage: 359 },
	{ id: 2144, type: QUARTER, title: "تَبَارَكَ الَّذِي نَزَّلَ", startPage: 359, endPage: 361 },
	{ id: 2145, type: QUARTER, title: "وَقَالَ الَّذِينَ لَا يَرْجُونَ", startPage: 362, endPage: 364 },
	{ id: 2146, type: QUARTER, title: "وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ", startPage: 364, endPage: 366 },
	{ id: 2147, type: QUARTER, title: "طسم", startPage: 367, endPage: 369 },
	{ id: 2148, type: QUARTER, title: "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ", startPage: 369, endPage: 371 },
	{ id: 2149, type: QUARTER, title: "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ", startPage: 371, endPage: 374 },
	{ id: 2150, type: QUARTER, title: "أَوْفُوا الْكَيْلَ وَلَا تَكُونُوا", startPage: 374, endPage: 376 },
	{ id: 2151, type: QUARTER, title: "طس ۚ تِلْكَ آيَاتُ الْقُرْآنِ", startPage: 377, endPage: 379 },
	{ id: 2152, type: QUARTER, title: "قَالَ سَنَنظُرُ أَصَدَقْتَ أَمْ كُنتَ", startPage: 379, endPage: 381 },
	{ id: 2153, type: QUARTER, title: "فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا", startPage: 382, endPage: 384 },
	{ id: 2154, type: QUARTER, title: "وَإِذَا وَقَعَ الْقَوْلُ عَلَيْهِمْ", startPage: 384, endPage: 386 },
	{ id: 2155, type: QUARTER, title: "وَحَرَّمْنَا عَلَيْهِ الْمَرَاضِعَ", startPage: 386, endPage: 388 },
	{ id: 2156, type: QUARTER, title: "فَلَمَّا قَضَىٰ مُوسَى الْأَجَلَ", startPage: 389, endPage: 391 },
	{ id: 2157, type: QUARTER, title: "وَلَقَدْ وَصَّلْنَا لَهُمُ الْقَوْلَ", startPage: 392, endPage: 394 },
	{ id: 2158, type: QUARTER, title: "إِنَّ قَارُونَ كَانَ مِن قَوْمِ", startPage: 394, endPage: 396 },
	{ id: 2159, type: QUARTER, title: "الم", startPage: 396, endPage: 399 },
	{ id: 2160, type: QUARTER, title: "فَآمَنَ لَهُ لُوطٌ ۘ وَقَالَ إِنِّي", startPage: 399, endPage: 401 },
	{ id: 2161, type: QUARTER, title: "وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ", startPage: 402, endPage: 404 },
	{ id: 2162, type: QUARTER, title: "الم", startPage: 404, endPage: 407 },
	{ id: 2163, type: QUARTER, title: "مُنِيبِينَ إِلَيْهِ وَاتَّقُوهُ", startPage: 407, endPage: 410 },
	{ id: 2164, type: QUARTER, title: "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ", startPage: 410, endPage: 413 },
	{ id: 2165, type: QUARTER, title: "وَمَن يُسْلِمْ وَجْهَهُ إِلَى اللَّهِ", startPage: 413, endPage: 415 },
	{ id: 2166, type: QUARTER, title: "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ", startPage: 415, endPage: 417 },
	{ id: 2167, type: QUARTER, title: "يَا أَيُّهَا النَّبِيُّ اتَّقِ", startPage: 418, endPage: 420 },
	{ id: 2168, type: QUARTER, title: "قَدْ يَعْلَمُ اللَّهُ الْمُعَوِّقِينَ", startPage: 420, endPage: 421 },
	{ id: 2169, type: QUARTER, title: "وَمَن يَقْنُتْ مِنكُنَّ لِلَّهِ", startPage: 422, endPage: 424 },
	{ id: 2170, type: QUARTER, title: "تُرْجِي مَن تَشَاءُ مِنْهُنَّ", startPage: 425, endPage: 426 },
	{ id: 2171, type: QUARTER, title: "لَّئِن لَّمْ يَنتَهِ الْمُنَافِقُونَ", startPage: 426, endPage: 429 },
	{ id: 2172, type: QUARTER, title: "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا", startPage: 429, endPage: 431 },
	{ id: 2173, type: QUARTER, title: "قُلْ مَن يَرْزُقُكُم مِّنَ", startPage: 431, endPage: 433 },
	{ id: 2174, type: QUARTER, title: "قُلْ إِنَّمَا أَعِظُكُم بِوَاحِدَةٍ", startPage: 433, endPage: 436 },
	{ id: 2175, type: QUARTER, title: "يَا أَيُّهَا النَّاسُ أَنتُمُ", startPage: 436, endPage: 439 },
	{ id: 2176, type: QUARTER, title: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ", startPage: 439, endPage: 441 },
	{ id: 2177, type: QUARTER, title: "وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن", startPage: 442, endPage: 444 },
	{ id: 2178, type: QUARTER, title: "أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي", startPage: 444, endPage: 446 },
	{ id: 2179, type: QUARTER, title: "احْشُرُوا الَّذِينَ ظَلَمُوا", startPage: 446, endPage: 449 },
	{ id: 2180, type: QUARTER, title: "وَإِنَّ مِن شِيعَتِهِ لَإِبْرَاهِيمَ", startPage: 449, endPage: 451 },
	{ id: 2181, type: QUARTER, title: "فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ", startPage: 451, endPage: 454 },
	{ id: 2182, type: QUARTER, title: "وَهَلْ أَتَاكَ نَبَأُ الْخَصْمِ إِذْ", startPage: 454, endPage: 456 },
	{ id: 2183, type: QUARTER, title: "وَعِندَهُمْ قَاصِرَاتُ الطَّرْفِ", startPage: 456, endPage: 459 },
	{ id: 2184, type: QUARTER, title: "وَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَا", startPage: 459, endPage: 461 },
	{ id: 2185, type: QUARTER, title: "فَمَنْ أَظْلَمُ مِمَّن كَذَبَ عَلَى", startPage: 462, endPage: 464 },
	{ id: 2186, type: QUARTER, title: "قُلْ يَا عِبَادِيَ الَّذِينَ", startPage: 464, endPage: 467 },
	{ id: 2187, type: QUARTER, title: "حم", startPage: 467, endPage: 469 },
	{ id: 2188, type: QUARTER, title: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", startPage: 469, endPage: 471 },
	{ id: 2189, type: QUARTER, title: "ويا قوم مالي ادعوكم", startPage: 472, endPage: 474 },
	{ id: 2190, type: QUARTER, title: "قُلْ إِنِّي نُهِيتُ أَنْ أَعْبُدَ", startPage: 474, endPage: 477 },
	{ id: 2191, type: QUARTER, title: "قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ", startPage: 477, endPage: 479 },
	{ id: 2192, type: QUARTER, title: "وَقَيَّضْنَا لَهُمْ قُرَنَاءَ", startPage: 479, endPage: 481 },
	{ id: 2193, type: QUARTER, title: "إِلَيْهِ يُرَدُّ عِلْمُ السَّاعَةِ", startPage: 482, endPage: 484 },
	{ id: 2194, type: QUARTER, title: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا", startPage: 484, endPage: 486 },
	{ id: 2195, type: QUARTER, title: "وَلَوْ بَسَطَ اللَّهُ الرِّزْقَ", startPage: 486, endPage: 488 },
	{ id: 2196, type: QUARTER, title: "وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ", startPage: 488, endPage: 491 },
	{ id: 2197, type: QUARTER, title: "قَالَ أَوَلَوْ جِئْتُكُم بِأَهْدَىٰ", startPage: 491, endPage: 493 },
	{ id: 2198, type: QUARTER, title: "وَلَمَّا ضُرِبَ ابْنُ مَرْيَمَ مَثَلًا", startPage: 493, endPage: 496 },
	{ id: 2199, type: QUARTER, title: "وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ", startPage: 496, endPage: 499 },
	{ id: 2200, type: QUARTER, title: "اللَّهُ الَّذِي سَخَّرَ لَكُمُ", startPage: 499, endPage: 502 },
	{ id: 2201, type: QUARTER, title: "حم", startPage: 502, endPage: 504 },
	{ id: 2202, type: QUARTER, title: "وَاذْكُرْ أَخَا عَادٍ إِذْ أَنذَرَ", startPage: 505, endPage: 507 },
	{ id: 2203, type: QUARTER, title: "أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ", startPage: 507, endPage: 510 },
	{ id: 2204, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا", startPage: 510, endPage: 513 },
	{ id: 2205, type: QUARTER, title: "لَّقَدْ رَضِيَ اللَّهُ عَنِ", startPage: 513, endPage: 515 },
	{ id: 2206, type: QUARTER, title: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا", startPage: 515, endPage: 517 },
	{ id: 2207, type: QUARTER, title: "قَالَتِ الْأَعْرَابُ آمَنَّا ۖ قُل", startPage: 517, endPage: 519 },
	{ id: 2208, type: QUARTER, title: "قَالَ قَرِينُهُ رَبَّنَا مَا", startPage: 519, endPage: 521 },
	{ id: 2209, type: QUARTER, title: "قَالَ فَمَا خَطْبُكُمْ أَيُّهَا", startPage: 522, endPage: 524 },
	{ id: 2210, type: QUARTER, title: "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ", startPage: 524, endPage: 526 },
	{ id: 2211, type: QUARTER, title: "وَكَم مِّن مَّلَكٍ فِي السَّمَاوَاتِ", startPage: 526, endPage: 529 },
	{ id: 2212, type: QUARTER, title: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ", startPage: 529, endPage: 531 },
	{ id: 2213, type: QUARTER, title: "الرَّحْمَٰنُ", startPage: 531, endPage: 534 },
	{ id: 2214, type: QUARTER, title: "إِذَا وَقَعَتِ الْوَاقِعَةُ", startPage: 534, endPage: 536 },
	{ id: 2215, type: QUARTER, title: "فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ", startPage: 536, endPage: 539 },
	{ id: 2216, type: QUARTER, title: "أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَن", startPage: 539, endPage: 541 },
	{ id: 2217, type: QUARTER, title: "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي", startPage: 542, endPage: 544 },
	{ id: 2218, type: QUARTER, title: "أَلَمْ تَرَ إِلَى الَّذِينَ تَوَلَّوْا", startPage: 544, endPage: 547 },
	{ id: 2219, type: QUARTER, title: "أَلَمْ تَرَ إِلَى الَّذِينَ نَافَقُوا", startPage: 547, endPage: 550 },
	{ id: 2220, type: QUARTER, title: "عَسَى اللَّهُ أَن يَجْعَلَ بَيْنَكُمْ", startPage: 550, endPage: 552 },
	{ id: 2221, type: QUARTER, title: "يُسَبِّحُ لِلَّهِ مَا فِي", startPage: 553, endPage: 554 },
	{ id: 2222, type: QUARTER, title: "وَإِذَا رَأَيْتَهُمْ تُعْجِبُكَ", startPage: 554, endPage: 557 },
	{ id: 2223, type: QUARTER, title: "يَا أَيُّهَا النَّبِيُّ إِذَا", startPage: 558, endPage: 559 },
	{ id: 2224, type: QUARTER, title: "يَا أَيُّهَا النَّبِيُّ لِمَ", startPage: 560, endPage: 561 },
	{ id: 2225, type: QUARTER, title: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ", startPage: 562, endPage: 564 },
	{ id: 2226, type: QUARTER, title: "ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ", startPage: 564, endPage: 566 },
	{ id: 2227, type: QUARTER, title: "الْحَاقَّةُ", startPage: 566, endPage: 569 },
	{ id: 2228, type: QUARTER, title: "إِنَّ الْإِنسَانَ خُلِقَ هَلُوعًا", startPage: 569, endPage: 571 },
	{ id: 2229, type: QUARTER, title: "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ", startPage: 572, endPage: 574 },
	{ id: 2230, type: QUARTER, title: "إِنَّ رَبَّكَ يَعْلَمُ أَنَّكَ تَقُومُ", startPage: 575, endPage: 577 },
	{ id: 2231, type: QUARTER, title: "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ", startPage: 577, endPage: 579 },
	{ id: 2232, type: QUARTER, title: "وَيَطُوفُ عَلَيْهِمْ وِلْدَانٌ", startPage: 579, endPage: 581 },
	{ id: 2233, type: QUARTER, title: "عَمَّ يَتَسَاءَلُونَ", startPage: 582, endPage: 584 },
	{ id: 2234, type: QUARTER, title: "عَبَسَ وَتَوَلَّىٰ", startPage: 585, endPage: 586 },
	{ id: 2235, type: QUARTER, title: "إِذَا السَّمَاءُ انفَطَرَتْ", startPage: 587, endPage: 589 },
	{ id: 2236, type: QUARTER, title: "إِذَا السَّمَاءُ انشَقَّتْ", startPage: 589, endPage: 591 },
	{ id: 2237, type: QUARTER, title: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", startPage: 591, endPage: 594 },
	{ id: 2238, type: QUARTER, title: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ", startPage: 594, endPage: 596 },
	{ id: 2239, type: QUARTER, title: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", startPage: 596, endPage: 600 },
	{ id: 2240, type: QUARTER, title: "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا", startPage: 600, endPage: 604 }
];

var INIT_STATE = 'INIT_STATE';
var RATE_WIRD = 'RATE_WIRD';
var REMOVE_WIRD = 'REMOVE_WIRD';
var ADD_WIRD = 'ADD_WIRD';
var LOAD_MORE = 'LOAD_MORE';
var SAVE_USER = 'SAVE_USER';
var DELETE_USER = 'DELETE_USER';
var SWITCH_USER = 'SWITCH_USER';
var SET_LANGUAGE = 'SET_LANGUAGE';
var SET_THEME = 'SET_THEME';
var RESTORE_BACKUP = 'RESTORE_BACKUP';
var FILES_DOWNLOADED = 'FILES_DOWNLOADED';
