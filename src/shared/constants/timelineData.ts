export enum Teg {
	'Teg1' = 'Teg1',
	'Teg2' = 'Teg2',
	'Teg3' = 'Teg3',
	'Teg4' = 'Teg4',
	'Teg5' = 'Teg5',
	'Teg6' = 'Teg6',
}

export interface IEvent {
	year: number;
	description: string;
	teg: Teg;
}

export interface TimelineData {
	start: number;
	end: number;
	events: IEvent[];
}

export const timelineData: TimelineData[] = [
	{
		start: 1993,
		end: 1998,
		events: [
			{
				year: 1993,
				description: 'Важное политическое соглашение подписано',
				teg: Teg.Teg1,
			},
			{
				year: 1994,
				description: 'Открытие крупного научного центра',
				teg: Teg.Teg2,
			},
			{
				year: 1995,
				description: 'Запуск глобальной экологической инициативы',
				teg: Teg.Teg3,
			},
			{
				year: 1996,
				description: 'Прорыв в области телекоммуникаций',
				teg: Teg.Teg4,
			},
			{
				year: 1997,
				description: 'Проведение масштабного культурного фестиваля',
				teg: Teg.Teg5,
			},
			{
				year: 1998,
				description: 'Экономический кризис в Юго-Восточной Азии',
				teg: Teg.Teg6,
			},
		],
	},
	{
		start: 1999,
		end: 2004,
		events: [
			{
				year: 1999,
				description: 'Создание крупнейшего международного альянса',
				teg: Teg.Teg1,
			},
			{
				year: 2000,
				description: 'Празднование нового тысячелетия',
				teg: Teg.Teg2,
			},
			{
				year: 2001,
				description: 'Революционное открытие в генетике',
				teg: Teg.Teg3,
			},
			{
				year: 2002,
				description: 'Запуск первой коммерческой космической миссии',
				teg: Teg.Teg4,
			},
			{
				year: 2003,
				description: 'Глобальная кампания по борьбе с бедностью',
				teg: Teg.Teg5,
			},
			{
				year: 2004,
				description: 'Крупное землетрясение в Индийском океане',
				teg: Teg.Teg6,
			},
		],
	},
	{
		start: 2005,
		end: 2010,
		events: [
			{
				year: 2005,
				description: 'Прорыв в использовании возобновляемых источников энергии',
				teg: Teg.Teg1,
			},
			{
				year: 2006,
				description: 'Глобальный финансовый кризис',
				teg: Teg.Teg2,
			},
			{
				year: 2007,
				description: 'Проведение исторических Олимпийских игр',
				teg: Teg.Teg3,
			},
			{ year: 2008, description: 'Пандемия нового вируса', teg: Teg.Teg4 },
			{
				year: 2009,
				description: 'Крупное экологическое бедствие в океане',
				teg: Teg.Teg5,
			},
			{
				year: 2010,
				description: 'Революционные события на Ближнем Востоке',
				teg: Teg.Teg6,
			},
		],
	},
];
