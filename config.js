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
			icon: 'briefcase',
			id: '1',
			links: [
				{ name: 'Gym Campestre', link: 'https://campestre.edu.co/' },
				{ name: 'PhidiasHome', link: 'https://campestre.phidias.co/person/dashboard?person=23563' },
				{ name: 'Apps GC', link: 'https://apps.campestre.edu.co/' },
				{ name: 'Virtual Lybrary', link: 'https://campestre.microsite-ebooks724.com/v1/home/' },
				{ name: 'Bright Space', link: 'https://gimnasiocampestre.brightspace.com/d2l/home' },
				{ name: ' ', link: ' ' },
				{ name: 'Plan 10', link: 'https://campestre.phidias.co/academic/course/dashboard?course=4025&person=23563' },
				{ name: 'Plan 11', link: 'https://campestre.phidias.co/academic/course/dashboard?course=4026&person=23563' },
			],
		},
		{
			icon: 'shopping-bag',
			id: '2',
			links: [
				{ name: 'Word', link: 'https://word.cloud.microsoft/' },
				{ name: 'Excel', link: 'https://excel.cloud.microsoft/' },
				{ name: 'PowerPoint', link: 'https://powerpoint.cloud.microsoft/' },
				{ name: 'Canva', link: 'https://www.canva.com/' },
				{ name: 'OutLook Mail', link: 'https://outlook.office.com/calendar/view/workweek' },
				{ name: 'Classroom Cloud', link: 'https://portal.classroom.cloud/classes/1' },
				{ name: 'Forms', link: 'https://forms.office.com/' },
				{ name: 'OneDrive', link: 'https://gimnasiocampestre-my.sharepoint.com/my' },
				{ name: 'YouTube', link: 'https://www.youtube.com/' },
				{ name: '', link: '' },
				{ name: '', link: '' },
				{ name: '', link: '' },
				{ name: '', link: '' },
			],
		},
	],

	secondListsContainer: [
		{
			icon: 'users',
			id: '1',
			links: [
				{ name: 'Phi 10 A', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11575' },
				{ name: 'Phi 10 B', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11576' },
				{ name: 'Phi 10 C', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11577' },
				{ name: ' ', link: ' ' },
				{ name: 'Phi 11 A', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11578' },
				{ name: 'Phi 11 B', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11579' },
				{ name: 'Phi 11 C', link: 'https://campestre.phidias.co/v4/academic/course/group/manage?period=94&person=23563&group=11580' },
				{ name: ' ', link: ' ' },
				{ name: 'Prdct 1 10 A', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7o8g4mtxjv&academicGroupId=11575&periodId=94' },
				{ name: 'Prdct 1 10 B', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7o8g4mtxjv&academicGroupId=11576&periodId=94' },
				{ name: 'Prdct 1 10 C', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7o8g4mtxjv&academicGroupId=11577&periodId=94' },
                
				{ name: 'Prdct 1 11A', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7ocg54wib2&academicGroupId=11578&periodId=94' },
				{ name: 'Prdct 1 11B', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7ocg54wib2&academicGroupId=11579&periodId=94' },
				{ name: 'Prdct 1 11C', link: 'https://campestre.phidias.co/planeacion/unidad/grading?unidadProductoId=1a7ocg54wib2&academicGroupId=11580&periodId=94' },
				{ name: '', link: '' },
				{ name: '', link: '' },
			],
		},
		{
			icon: 'youtube',
			id: '2',
			links: [
				{ name: 'BrightSpace 10th',         link: 'https://gimnasiocampestre.brightspace.com/d2l/home/16842' },
				{ name: 'BrightSpace 10 Inbox',     link: 'https://gimnasiocampestre.brightspace.com/d2l/lms/dropbox/admin/folders_manage.d2l?ou=16842' },
				{ name: ' ', link: ' ' },
				{ name: 'BrightSpace 11th',         link: 'https://gimnasiocampestre.brightspace.com/d2l/le/lessons/16840/units/74204' },
				{ name: 'BrightSpace 11 Inbox ',    link: 'https://gimnasiocampestre.brightspace.com/d2l/lms/dropbox/admin/folders_manage.d2l?ou=16840' },
				{ name: ' ', link: ' ' },
				{ name: 'PAIRs',                    link: '' },
				{ name: '', link: '' },
				{ name: 'Anecdotario 10A',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11575&period=94' },
				{ name: 'Anecdotario 10B',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11576&period=94' },
				{ name: 'Anecdotario 10C',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11577&period=94' },
				{ name: '', link: '' },
				{ name: 'Anecdotario 11A',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11578&period=94' },
				{ name: 'Anecdotario 11B',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11579&period=94' },
				{ name: 'Anecdotario 11C',          link: 'https://campestre.phidias.co/poll/consolidate/people?poll=485&group=11580&period=94' },
				{ name: '', link: '' },
				{ name: '', link: '' },
				{ name: '', link: '' },
			],
		},
	],
};
