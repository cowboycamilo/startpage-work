const CONFIG = {
	// General
	name: 'WORK // CAMILO',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,
	timeZone: 'America/Bogota',

	// Greetings
	greetingMorning: 'Good morning, Professor!',
	greetingAfternoon: 'Good afternoon, Professor!',
	greetingEvening: 'Good evening,',
	greetingNight: 'Time to wrap up and rest!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '8b05d62206f459e1d298cbe5844d7d87',
	weatherIcons: 'Nord',
	weatherUnit: 'C',
	language: 'en',

	trackLocation: false,
	defaultLatitude: '4.624335',
	defaultLongitude: '-74.063644',

	// Autochange Theme
	autoChangeTheme: true,
	changeThemeByOS: true,
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// Buttons (Top Bar)
	firstButtonsContainer: [
		{ id: '1', name: 'GitHub', icon: 'github', link: 'https://github.com' },
		{ id: '2', name: 'Gmail', icon: 'mail', link: 'https://mail.google.com' },
		{ id: '3', name: 'Phidias', icon: 'graduation-cap', link: 'https://lcb.phidias.co' },
		{ id: '4', name: 'Calendar', icon: 'calendar', link: 'https://calendar.google.com' },
		{ id: '5', name: 'Overleaf', icon: 'file-text', link: 'https://www.overleaf.com' },
		{ id: '6', name: 'DeepL', icon: 'languages', link: 'https://www.deepl.com' },
	],

	secondButtonsContainer: [
		{ id: '1', name: 'Smartcat', icon: 'briefcase', link: 'https://smartcat.com' },
		{ id: '2', name: 'Drive', icon: 'hard-drive', link: 'https://drive.google.com' },
		{ id: '3', name: 'ChatGPT', icon: 'bot', link: 'https://chat.openai.com' },
		{ id: '4', name: 'TRMNL', icon: 'terminal', link: 'https://usetrmnl.com/recipes' },
	],

	// Lists (Main Body)
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{ name: 'Liceo Phidias', link: 'https://lcb.phidias.co' },
				{ name: 'Overleaf LaTeX', link: 'https://www.overleaf.com' },
				{ name: 'Smartcat Translation', link: 'https://smartcat.com' },
				{ name: 'TRMNL Recipes', link: 'https://usetrmnl.com/recipes' },
				{ name: 'DeepL Translator', link: 'https://www.deepl.com' },
				{ name: 'Google Drive', link: 'https://drive.google.com' },
			],
		},
		{
			icon: 'code-2',
			id: '2',
			links: [
				{ name: 'GitHub', link: 'https://github.com' },
				{ name: 'ChatGPT / AI', link: 'https://chat.openai.com' },
				{ name: 'Stack Overflow', link: 'https://stackoverflow.com' },
				{ name: 'MDN Web Docs', link: 'https://developer.mozilla.org' },
				{ name: 'Wolfram Alpha', link: 'https://www.wolframalpha.com' },
				{ name: 'PubMed Central', link: 'https://pubmed.ncbi.nlm.nih.gov' },
			],
		},
	],

	secondListsContainer: [
		{
			icon: 'briefcase',
			id: '1',
			links: [
				{ name: 'Gmail Workspace', link: 'https://mail.google.com' },
				{ name: 'Google Calendar', link: 'https://calendar.google.com' },
				{ name: 'Google Docs', link: 'https://docs.google.com' },
				{ name: 'Google Sheets', link: 'https://sheets.google.com' },
				{ name: 'Notion', link: 'https://notion.so' },
			],
		},
		{
			icon: 'book-open',
			id: '2',
			links: [
				{ name: 'arXiv Preprints', link: 'https://arxiv.org' },
				{ name: 'ResearchGate', link: 'https://www.researchgate.net' },
				{ name: 'Nature Journal', link: 'https://www.nature.com' },
				{ name: 'Biostatistics Tools', link: 'https://www.r-project.org' },
				{ name: 'Wikipedia', link: 'https://wikipedia.org' },
			],
		},
	],
};
