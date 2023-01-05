const Projects = [
  {
    id: 1,
    name: 'DreamScholars',
    overview: 'dreamScholars.overview',
    description: 'dreamScholars.description',
    moreDetails: 'dreamScholars.moreDetails',
    techUsed: ['react', 'typescript', 'mui', 'jest', 'firebase'],
    type: 'web',
    link: 'https://dreamscholars.org/',
    mainImg: '/images/projects/dreamscholars.jpg',
    secondImg: '/images/projects/dreamscholars2.jpg',
    mainImgAltText:
      'A tablet and iphone showcasing the home page of the scholarship website',
    secondImgAltText:
      'Various views of the website displaying the filters, schoalrship page, and scholarship form',
  },
  {
    id: 2,
    name: 'Nedflix',
    overview: 'nedflix.overview',
    description: 'nedflix.description',
    moreDetails: 'nedflix.moreDetails',
    techUsed: ['react', 'js', 'css', 'firebase'],
    type: 'web',
    link: 'https://nedflix-2c9c4.web.app/',
    mainImg: '/images/projects/nedflix.jpg',
    secondImg: '/images/projects/nedflix2.jpg',
    mainImgAltText:
      'A tablet and iphone displaying a movie banner followed by movie posters to explore',
    secondImgAltText:
      'Various screens displaying the my list, sign-in, search and movie page',
  },
  {
    id: 3,
    name: 'Casa Magda',
    overview: 'casaMagda.overview',
    description: 'casaMagda.description',
    moreDetails: 'casaMagda.moreDetails',
    techUsed: ['js', 'jquery', 'html', 'css', 'figma'],
    type: 'web',
    link: 'https://casamagda-b1768.web.app/',
    mainImg: '/images/projects/casamagda.jpg',
    secondImg: '/images/projects/casamagda2.jpg',
    mainImgAltText:
      'An iphone and mackbook displaying the landing page of the website',
    secondImgAltText:
      '2 screens showing the landing page, about us, our services, locations and contact form sections of the website',
  },
  {
    id: 4,
    name: 'TRAPD',
    overview: 'trapd.overview',
    description: 'trapd.description',
    moreDetails: 'trapd.moreDetails',
    techUsed: ['unity', 'csharp', 'illustrator', 'photoshop'],
    type: 'game',
    link: 'https://play.google.com/store/apps/details?id=com.Edlo.Trapd&hl=en_US&gl=US',
    mainImg: '/images/projects/trapd.jpg',
    secondImg: '/images/projects/trapd2.jpg',
    mainImgAltText: 'A mobile phone showcasing the main menu of the TRAPD game',
    secondImgAltText:
      'Multiple phones displaying the shop, creatures, highscores, game over and gameplay screens',
  },
  {
    id: 5,
    name: 'Pacific Marine App',
    overview: 'pacificMarineApp.overview',
    description: 'pacificMarineApp.description',
    moreDetails: 'pacificMarineApp.moreDetails',
    techUsed: ['unity', 'csharp', 'illustrator', 'photoshop'],
    type: 'game',
    link: 'https://github.com/edwingl10/Pacific-Marine-App',
    mainImg: '/images/projects/pmmc.jpg',
    secondImg: '/images/projects/pmmc2.jpg',
    mainImgAltText:
      'A tablet showing a seal with an inventory of tools below it',
    secondImgAltText:
      'Multiple tablets showing different seals being treated and rehabilited by the tools in the inventory',
  },
  {
    id: 6,
    name: 'Party Bash Companion',
    overview: 'A companion application to a board game I created.',
    description:
      'Party bash consists of players moving along a game board, trying to reach the finish line first. Each board square contains an event such as winning/losing coins, buying actions, winning prizes, challenging and stealing coins from others.',
    moreDetails:
      'The app allows players to roll dice, switch turns, and perform calculations that would otherwise be tedious. Calculations include coin management, winning random prizes, challenging players, and purchasing perks.',
    techUsed: ['unity', 'csharp', 'illustrator', 'photoshop'],
    type: 'game',
    link: 'https://github.com/edwingl10/PartyBashCompanion',
    mainImg: '/images/projects/partybash.jpg',
    secondImg: '/images/projects/partybash2.jpg',
    mainImgAltText:
      'A phone displaying the menu of the game, with 2 players ready to play',
    secondImgAltText:
      'Numerous phones showcasing the coins, shop, wheel, challenge and dice roll screens',
  },
  {
    id: 7,
    name: 'Search-ED',
    overview:
      'A search engine of the web pages for the Information & Computer Sciences from UCI.',
    description:
      'Search-ED is a search engine for navigating web pages from the Informations & Computer Sciences department from UCI. The program displays the top results from a given query.',
    moreDetails:
      'The search engine utilizes tokenization, term frequency, inverse document frequency and weighted tags for page scoring. The BeautifulSoup library was used to parse the corpus of the entire ICS web pages from UCI. Python was used to write the program, MongoDB for the database and TKinter for the GUI.',
    techUsed: ['python', 'mongodb', 'pycharm'],
    type: 'other',
    link: 'https://github.com/edwingl10/Search-ED',
    mainImg: '/images/projects/search-ed.jpg',
    secondImg: '/images/projects/search-ed2.jpg',
    mainImgAltText:
      'A laptop displaying a split screen with 2 Python code files open',
    secondImgAltText:
      '2 monitors displaying the search field followed by the results and a mongodb database',
  },
  {
    id: 8,
    name: 'Fault Localization',
    overview:
      'A program that finds which lines of code are most likely to break unit tests.',
    description:
      'This program implements the Tarantula approach to perform fault localization and locate which lines of code are most suspect of breaking the unit-tests from an open-source project on Github.',
    moreDetails:
      'This program contains over 4 thousand XML files with code coverage analysis. For this algorithm, we look at the test cases that cover each line in the program and compare the ratio of succeeding and failing test cases. The higher the ratio of failing tests cases compared to successful ones, the higher the suspiciousness of that line. Suspiciousness is a number between 0 and 1, where a higher number means a higher chance that the line caused a test to fail.',
    techUsed: ['python', 'terminal', 'pycharm'],
    type: 'other',
    link: 'https://github.com/edwingl10/fault-localization',
    mainImg: '/images/projects/fault-local.jpg',
    secondImg: '/images/projects/fault-local2.jpg',
    mainImgAltText:
      'A laptop displaying a split screen with 2 Python code files open',
    secondImgAltText:
      'A monitor with a split screen of a csv file with scores and a code file open next to it',
  },
  {
    id: 9,
    name: 'Operating System GUI',
    overview:
      'A simple operating system that simulates users writing to disks and printing files.',
    description:
      'This program mimics a simple OS system by managing reading, writing and printing requests by users. A GUI is used to display the requests of users, statuses of the disks and printers and the contents of the directory manager.',
    moreDetails:
      'The program supports a dynamic number of users, printers and disks and uses parallelism and threads to execute commands from user files. When the save command is executed, a disk resource is requested, and the file contents are written to the disk until the end command is found. The end command also stores the disk number, starting sector and file length. A new entry is then created in the directory, and the disk resource is released. Lastly, the print command looks up the file name in the directory manager, gets a free printer, and prints the data to an external file.',
    techUsed: ['java', 'eclipse'],
    type: 'other',
    link: 'https://github.com/edwingl10/OSGui',
    mainImg: '/images/projects/osgui.jpg',
    secondImg: '/images/projects/osgui2.jpg',
    mainImgAltText:
      'A laptop displaying a split screen with 2 Java code files open',
    secondImgAltText:
      'A monitor with a python file open and q GUI next to it showcasing the users, disks, printers and directory manager status',
  },
  {
    id: 10,
    name: 'Info Weather',
    overview:
      'A website to search and view weather information from various locations.',
    description:
      'Info Weather is a simple website that displays the current weather and forecast of any given location.',
    moreDetails:
      'Info Weather is written with React and fetches the information from the OpenWeather API and displays the information in a minimalistic way. In addition, the site determines the appropriate icons based on the weather.',
    techUsed: ['react', 'js', 'css'],
    type: 'web',
    link: 'https://edwingl10.github.io/infoweather/',
    mainImg: '/images/projects/infoweather.jpg',
    secondImg: '/images/projects/infoweather2.jpg',
    mainImgAltText: 'A phone and tablet displaying weather information',
    secondImgAltText: 'A website screen of weather information',
  },
];

export default Projects;
