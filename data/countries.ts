// data/countries.ts

export interface Country {
    id: string;
    name: string;
    code: string;
    flag: string;
}

export const countries: Country[] = [
    {
        id: "iran",
        name: "ایران",
        code: "IR",
        flag: "🇮🇷",
    },
    {
        id: "china",
        name: "چین",
        code: "CN",
        flag: "🇨🇳",
    },
    {
        id: "germany",
        name: "آلمان",
        code: "DE",
        flag: "🇩🇪",
    },
    {
        id: "italy",
        name: "ایتالیا",
        code: "IT",
        flag: "🇮🇹",
    },
    {
        id: "turkey",
        name: "ترکیه",
        code: "TR",
        flag: "🇹🇷",
    },
    {
        id: "india",
        name: "هند",
        code: "IN",
        flag: "🇮🇳",
    },
    {
        id: "south-korea",
        name: "کره جنوبی",
        code: "KR",
        flag: "🇰🇷",
    },
    {
        id: "japan",
        name: "ژاپن",
        code: "JP",
        flag: "🇯🇵",
    },
    {
        id: "usa",
        name: "ایالات متحده آمریکا",
        code: "US",
        flag: "🇺🇸",
    },
    {
        id: "spain",
        name: "اسپانیا",
        code: "ES",
        flag: "🇪🇸",
    },
];