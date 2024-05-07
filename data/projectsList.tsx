import { Project, ProjectCategory, UrlType } from '../models/project'

export const projectsList: Project[] = [
  {
    id: 1,
    name: "Manga Online",
    description: "It's an Android app for reading Asian manga. A simple yet effective app that provides a great reading experience Simplicity and speed in downloading chapters. 500k+ downloads on Google play with a 4.2 rate.",
    imagePath: "/screenshots/covers/manga.jpg",
    category: ProjectCategory.flutter,
    url: "https://play.google.com/store/apps/details?id=zxc.laitooo.manga.online",
    urlType: UrlType.googlePlay,
    screenshots: ["/screenshots/manga/1.jpg", "/screenshots/manga/2.jpg", "/screenshots/manga/3.jpg", "/screenshots/manga/4.png",
      "/screenshots/manga/5.jpg",]
  },
  {
    id: 11,
    name: "Werewolf Online",
    description: "A multiplayer startegy game for android, that has two teams (werewolfs and villagers) competing to kill each other , the team that all his members dies first lose the game. It contains feature like firends chats, groups and voice chat.",
    imagePath: "/screenshots/covers/werewolf.jpg",
    category: ProjectCategory.android,
    url: "https://github.com/laitooo/Werewolf-Online",
    urlType: UrlType.github,
    screenshots: ["/screenshots/werewolf/1.jpg", "/screenshots/werewolf/2.jpg", "/screenshots/werewolf/3.jpg", "/screenshots/werewolf/4.jpg",
    "/screenshots/werewolf/5.jpg",],
  },
  {
    id: 6,
    name: "Plants vs zombies clone",
    description: "A 3d clone to the famous Plants vs zombies game, It's a game where you try to stop the zombies from eating the brains using plants. Developed using Unity with C#.",
    imagePath: "/screenshots/covers/pvz.jpg",
    category: ProjectCategory.unity,
    url: "https://www.youtube.com/watch?v=vn2zIqOBnsc",
    urlType: UrlType.youtube,
    screenshots: ["/screenshots/pvz/1.JPG", "/screenshots/pvz/2.JPG", "/screenshots/pvz/3.JPG", "/screenshots/pvz/4.JPG",],
  },
  {
    id: 13,
    name: "Riwayat space",
    description: "This is an Android app that offers you novels to read with a professional Arabic translation. It has several features like Ease and simplicity of use, a fast and easy application to navigate between novels and chapters.",
    imagePath: "/screenshots/covers/novels.jpg",
    category: ProjectCategory.flutter,
    url: "https://play.google.com/store/apps/details?id=zxc.laitooo.flutter.riwayat_space",
    urlType: UrlType.none,
    screenshots: ["/screenshots/novels/1.png", "/screenshots/novels/2.png", "/screenshots/novels/3.png", "/screenshots/novels/4.png",
    "/screenshots/novels/5.png",],
  },
  {
    id: 7,
    name: "Flutter manga scrapper",
    description: "A flutter mobile application for scraping and downloading manga from Manga town.",
    imagePath: "/screenshots/covers/scrapper.jpg",
    category: ProjectCategory.flutter,
    url: "https://github.com/laitooo/flutter_manga_scraper",
    urlType: UrlType.github,
    screenshots: ["/screenshots/scrapper/1.png", "/screenshots/scrapper/2.png", "/screenshots/scrapper/3.png", "/screenshots/scrapper/4.png",],
  },
  {
    id: 15,
    name: "Sudoku",
    description: "The famous sudoku game developed into mobile app using Flutter with dart.",
    imagePath: "/screenshots/covers/sudoku.jpg",
    category: ProjectCategory.flutter,
    url: "https://github.com/laitooo/Sudoku",
    urlType: UrlType.github,
    screenshots: ["/screenshots/sudoku/1.png", "/screenshots/sudoku/2.png",],
  },
  {
    id: 14,
    name: "Space shooter",
    description: "Simple Space Shooter game developed using C# with Unity. The game theme is 'The game is a liar'.",
    imagePath: "/screenshots/covers/space.JPG",
    category: ProjectCategory.unity,
    url: "https://laitooo.github.io/Space-Shooter/",
    urlType: UrlType.website,
    screenshots: ["/screenshots/space/1.JPG", "/screenshots/space/2.JPG", "/screenshots/space/3.JPG", "/screenshots/space/4.JPG",],
  },
  {
    id: 7,
    name: "Simsimy Launcher",
    description: "A home launcher for kids tablets used to set limits and control the child's action. developed using Android with Java.",
    imagePath: "/screenshots/covers/simsimy.jpg",
    category: ProjectCategory.android,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/simsimy/1.JPG", "/screenshots/simsimy/2.JPG", "/screenshots/simsimy/3.JPG", "/screenshots/simsimy/4.JPG",],
  },
  {
    id: 8,
    name: "Simsimy Parent control",
    description: "An android app for parents to control the child phone home launcher settings.",
    imagePath: "/screenshots/covers/parent.jpg",
    category: ProjectCategory.android,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/parent/1.JPG", "/screenshots/parent/2.JPG", "/screenshots/parent/3.JPG", "/screenshots/parent/4.JPG",],
  },
  {
    id: 12,
    name: "Endless runner",
    description: "A simple endless runner game developed using Unity with C#",
    imagePath: "/screenshots/covers/runner.jpg",
    category: ProjectCategory.unity,
    url: "https://www.youtube.com/watch?v=EYJWT7bjwu0",
    urlType: UrlType.youtube,
    screenshots: ["/screenshots/runner/1.png", "/screenshots/runner/2.png", "/screenshots/runner/3.png", "/screenshots/runner/4.png",],
  },  
  {
    id: 10,
    name: "Forward",
    description: "Forward is a website to a productivity juggernaut, tasks and weekly planner in one place, developed using Flutter with dart.",
    imagePath: "/screenshots/covers/forward.jpg",
    category: ProjectCategory.flutter,
    url: "https://todo-app-b95a0.web.app/#/",
    urlType: UrlType.website,
    screenshots: ["/screenshots/forward/1.JPG", "/screenshots/forward/2.JPG", "/screenshots/forward/3.JPG", "/screenshots/forward/4.JPG",],
  },
  {
    id: 16,
    name: "Killed by Fekra",
    description: "It's the Graveyard of a list of a great projects that started in Fekra tech company and was not continued or published.",
    imagePath: "/screenshots/covers/fekra.png",
    category: ProjectCategory.nextJs,
    url: "https://killedbyfekra.vercel.app",
    urlType: UrlType.website,
    screenshots: ["/screenshots/fekra/1.png", "/screenshots/fekra/2.png", "/screenshots/fekra/3.png", "/screenshots/fekra/4.png"],
  },
  {
    id: 9,
    name: "Bibliotheque",
    description: "A bookshop mobile app, This project implements all logic and ui using Mock data repository.",
    imagePath: "/screenshots/covers/bibliotheque.jpg",
    category: ProjectCategory.flutter,
    url: "https://github.com/laitooo/bibliotheque",
    urlType: UrlType.github,
    screenshots: ["/screenshots/bibliothque/1.jpg", "/screenshots/bibliothque/2.jpg", "/screenshots/bibliothque/3.jpg",
    "/screenshots/bibliothque/4.jpg", "/screenshots/bibliothque/5.jpg", "/screenshots/bibliothque/6.jpg",
    "/screenshots/bibliothque/7.jpg", "/screenshots/bibliothque/8.jpg"],
  },
  {
    id: 2,
    name: "Soqia",
    description: "A water donation mobile app, that helps by making the donation task easier providing instant and scheduled orders.",
    imagePath: "/screenshots/covers/soqia.png",
    category: ProjectCategory.flutter,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/soqia/1.jpg", "/screenshots/soqia/2.jpg", "/screenshots/soqia/3.jpg",
    "/screenshots/soqia/4.jpg", "/screenshots/soqia/5.jpg", "/screenshots/soqia/6.jpg",
    "/screenshots/soqia/7.jpg", "/screenshots/soqia/8.jpg", "/screenshots/soqia/9.jpg",
    "/screenshots/soqia/10.jpg"],
  },
  {
    id: 4,
    name: "Doctor Base",
    description: "A Tele-Health mobile app that provide flexible virtual visits with doctors with diffent specialities.",
    imagePath: "/screenshots/covers/doctorBase.png",
    category: ProjectCategory.flutter,
    url: "https://play.google.com/store/apps/details?id=com.exitfunds.medicalonlineservice.beta",
    urlType: UrlType.googlePlay,
    screenshots: ["/screenshots/doctorBase/1.png", "/screenshots/doctorBase/2.png", "/screenshots/doctorBase/3.png",
    "/screenshots/doctorBase/4.png"],
  },
  {
    id: 5,
    name: "Shrek",
    description: "Service providing mobile app that offer customers a pack of different types of services, mostly house and cleaning services.",
    imagePath: "/screenshots/covers/shrek.png",
    category: ProjectCategory.flutter,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/shrek/1.jpg", "/screenshots/shrek/2.jpg", "/screenshots/shrek/3.jpg",
    "/screenshots/shrek/4.jpg", "/screenshots/shrek/5.jpg", "/screenshots/shrek/6.jpg", 
    "/screenshots/shrek/7.jpg", "/screenshots/shrek/8.jpg", "/screenshots/shrek/9.jpg", 
    "/screenshots/shrek/10.jpg", "/screenshots/shrek/11.jpg", "/screenshots/shrek/12.jpg", 
    "/screenshots/shrek/13.jpg" ],
  },
  {
    id: 3,
    name: "Soqia driver",
    description: "A delivery guy mobile app for related to the Soqia project.",
    imagePath: "/screenshots/covers/driver.png",
    category: ProjectCategory.flutter,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/driver/1.jpg", "/screenshots/driver/2.jpg", "/screenshots/driver/3.jpg",
    "/screenshots/driver/4.jpg", "/screenshots/driver/5.jpg", "/screenshots/driver/6.jpg", 
    "/screenshots/driver/7.jpg", "/screenshots/driver/8.jpg", "/screenshots/driver/9.jpg", 
    "/screenshots/driver/10.jpg"],
  }
]