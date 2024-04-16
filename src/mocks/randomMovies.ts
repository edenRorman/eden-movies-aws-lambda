import Movie from "../MovieDataModel";

const randomMovies: Movie[] = [
  {
    id: "tt10048342",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 491633,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
    genres: ["Drama"],
    title: "The Queen's Gambit",
    releaseYear: 2020,
    runtimeSec: 23700,
    plot: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
  },
  {
    id: "tt1442449",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 247958,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTEwZTM3MzUtMzk3Yy00YWI4LWI1ZTktOTc1MmRjZWM5ZDhmXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    genres: ["Action", "Adventure", "Biography", "Drama", "History", "Romance"],
    title: "Spartacus: Blood and Sand",
    releaseYear: 2010,
    runtimeSec: 3300,
    plot: "The life of Spartacus, the gladiator who lead a rebellion against the Romans. From his time as an ally of the Romans, to his betrayal and becoming a gladiator, to the rebellion he leads and its ultimate outcome.",
  },
  {
    id: "tt0106028",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 13374,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTVmZTRhNWItNmQ3Yi00MzNiLWJiZTctOWMyOWRlMDY4YWMyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
    title: "Homicide: Life on the Street",
    releaseYear: 1993,
    runtimeSec: 3600,
    plot: "Life on the Street is an American police procedural television series chronicling the work of a fictional version of the Baltimore Police Department's Homicide Unit.",
  },
  {
    id: "tt0268093",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 21704,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BODFjYWEyOTktMTU3OC00YTBhLWE4ZmEtNTJiYWUzYTYwMjIzXkEyXkFqcGdeQXVyNjU1NDgwMDg@._V1_.jpg",
    genres: ["Adventure", "Drama", "Family", "Musical", "War"],
    title: "Ramayan",
    releaseYear: 1987,
    runtimeSec: 1800,
    plot: "An adaptation of the ancient epic, in which the exiled Prince Rama and his brother Laxman set out to save Rama's wife, Sita, who has been kidnapped by the demon king of Lanka Ravana.",
  },
  {
    id: "tt7137906",
    ratingsSummary: {
      aggregateRating: 8.9,
      voteCount: 128186,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_.jpg",
    genres: ["Biography", "Crime", "Drama", "History"],
    title: "When They See Us",
    releaseYear: 2019,
    runtimeSec: 17760,
    plot: "Five teens from Harlem become trapped in a nightmare when they're falsely accused of a brutal attack in Central Park. Based on the true story.",
  },
  {
    id: "tt0303461",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 272206,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    title: "Firefly",
    releaseYear: 2002,
    runtimeSec: 2640,
    plot: "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
  },
  {
    id: "tt0237123",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 46541,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQzMDk1ODI2M15BMl5BanBnXkFtZTYwNjMyNDk4._V1_.jpg",
    genres: ["Comedy", "Romance"],
    title: "Coupling",
    releaseYear: 2000,
    runtimeSec: 1800,
    plot: "Six best friends talk about all aspects of sex and relationships on their never-ending quest to find true love.",
  },
  {
    id: "tt5555260",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 149909,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzYxYWY3YzctZjRiNS00MTViLTk5OTYtZDEyNzAwNGE5ODY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    title: "This Is Us",
    releaseYear: 2016,
    runtimeSec: 2700,
    plot: "A heartwarming and emotional story about a unique set of triplets, their struggles and their wonderful parents.",
  },
  {
    id: "tt0086831",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 12149,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDAyOTQ5YWUtNjNiZS00NmJiLTljNDItMzU2YWNjMjk4MTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Comedy"],
    title: "Yes, Prime Minister",
    releaseYear: 1986,
    runtimeSec: 1800,
    plot: "James Hacker was propelled along the corridors of power to the very pinnacle of politics - Number 10.",
  },
  {
    id: "tt0386676",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 643627,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    genres: ["Comedy"],
    title: "The Office",
    releaseYear: 2005,
    runtimeSec: 1320,
    plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
  },
  {
    id: "tt0106179",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 234829,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Crime", "Drama", "Mystery", "Sci-Fi", "Thriller"],
    title: "The X Files",
    releaseYear: 1993,
    runtimeSec: 2700,
    plot: "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.",
  },
  {
    id: "tt7908628",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 84840,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Comedy", "Fantasy", "Horror"],
    title: "What We Do in the Shadows",
    releaseYear: 2016,
    runtimeSec: 1800,
    plot: "A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.",
  },
  {
    id: "tt5753856",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 410128,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
    genres: ["Crime", "Drama", "Mystery", "Sci-Fi", "Thriller"],
    title: "Dark",
    releaseYear: 2017,
    runtimeSec: 3600,
    plot: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
  },
  {
    id: "tt6025022",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 17982,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTI3MjI1NTAtYjI2ZS00OTVlLTk0OTQtNTc5M2U3NmNmYjMzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Family", "Fantasy", "Sci-Fi"],
    title: "Justice League Unlimited",
    releaseYear: 2004,
    runtimeSec: 1380,
    plot: "A continuation of the Justice League animated series finds the original members of the team joined in their battle against crime and evil by dozens of other heroes from the DC comics universe.",
  },
  {
    id: "tt1513168",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 18067,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDhkMTY2NGQtMWY4Mi00ZjhmLWIzNGYtZDJhODkwNTM5NTIzXkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_.jpg",
    genres: ["Documentary"],
    title: "Through the Wormhole",
    releaseYear: 2010,
    runtimeSec: 3600,
    plot: "Hosted by Morgan Freeman, Through the Wormhole will explore the deepest mysteries of existence - the questions that have puzzled mankind for eternity. What are we made of? What was there before the beginning? Are we really alone? Is there a creator? These questions have been pondered by the most exquisite minds of the human race. Now, science has evolved to the point where hard facts and evidence may be able to provide us with answers instead of philosophical theories. Through the Wormhole will bring together the brightest minds and best ideas from the very edges of science - Astrophysics, Astrobiology, Quantum Mechanics, String Theory, and more - to reveal the extraordinary truth of our Universe.",
  },
  {
    id: "tt0472954",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 236118,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMzg3ODVjZTYtZTAyNC00MzVjLTk3NmUtMGI4ZjZmNGQ1NmY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    genres: ["Comedy"],
    title: "It's Always Sunny in Philadelphia",
    releaseYear: 2005,
    runtimeSec: 1320,
    plot: "Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.",
  },
  {
    id: "tt0403778",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 14647,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTAxNWFmMTktMDVjNC00YWFkLTg2NDQtNjQwODZlYmQ2YTA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Documentary", "Adventure"],
    title: "Long Way Round",
    releaseYear: 2004,
    runtimeSec: 18900,
    plot: "This documentary series follows actors Ewan McGregor and Charley Boorman on a motorcycle trip around the world. The two friends will travel through such places as Siberia, Kazakhstan, Mongolia, and Alaska, before finally ending the journey in New York. The filming will be done by on board cameras and one ride along cameraman.",
  },
  {
    id: "tt0149460",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 246468,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA2ZDk2ZTUtMWU2Yi00NDVmLTk1ODEtMmFmMjQyNWYzODI0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Sci-Fi"],
    title: "Futurama",
    releaseYear: 1999,
    runtimeSec: 1320,
    plot: "Philip J. Fry, a pizza delivery boy, is accidentally frozen in 1999 and thawed out on New Year's Eve 2999.",
  },
  {
    id: "tt0080306",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 15589,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjlkOGIyOWUtN2I2My00MzFjLTlhYTQtYmRkZjQ3Nzg1MWY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Comedy"],
    title: "Yes Minister",
    releaseYear: 1980,
    runtimeSec: 1800,
    plot: "The Right Honorable James Hacker has landed the plum job of Cabinet Minister to the Department of Administration. At last he is in a position of power and can carry out some long-needed reforms, or so he thinks.",
  },
  {
    id: "tt1190634",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 555717,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_.jpg",
    genres: ["Action", "Crime", "Drama", "Sci-Fi"],
    title: "The Boys",
    releaseYear: 2019,
    runtimeSec: 3600,
    plot: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
  },
  {
    id: "tt1489428",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 105777,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTgzNjQ4NjM1NF5BMl5BanBnXkFtZTcwNzQ4OTEzNw@@._V1_.jpg",
    genres: ["Action", "Crime", "Drama", "Mystery", "Thriller", "Western"],
    title: "Justified",
    releaseYear: 2010,
    runtimeSec: 2640,
    plot: "U.S. Marshal Raylan Givens is reassigned from Miami to his childhood home in the poor, rural coal mining towns of eastern Kentucky.",
  },
  {
    id: "tt1710308",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 50479,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM3MjYwODA3MV5BMl5BanBnXkFtZTcwOTc5Nzc4Nw@@._V1_.jpg",
    genres: [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi",
    ],
    title: "Regular Show",
    releaseYear: 2009,
    runtimeSec: 1380,
    plot: "The daily surreal adventures of a blue jay and raccoon duo that attempt to deal with their mundane jobs as groundskeepers at the local park.",
  },
  {
    id: "tt12343534",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 72989,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Fantasy", "Thriller"],
    title: "Jujutsu Kaisen",
    releaseYear: 2020,
    runtimeSec: 1440,
    plot: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
  },
  {
    id: "tt1353056",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 21786,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTcxOTg2ZTYtNWFlYi00YmJiLTgyNDMtMjUyYWE3Mzg2ZTYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Game-Show", "Reality-TV"],
    title: "RuPaul's Drag Race",
    releaseYear: 2009,
    runtimeSec: 3780,
    plot: "RuPaul searches for America's next drag superstar.",
  },
  {
    id: "tt1492966",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 80419,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg4NDE2NTEzM15BMl5BanBnXkFtZTgwMTc2MTExODE@._V1_.jpg",
    genres: ["Comedy", "Drama"],
    title: "Louie",
    releaseYear: 2010,
    runtimeSec: 1320,
    plot: "The life of Louie C.K., a divorced comedian living in New York with two kids.",
  },
  {
    id: "tt0367279",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 313224,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    genres: ["Comedy"],
    title: "Arrested Development",
    releaseYear: 2003,
    runtimeSec: 1320,
    plot: "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.",
  },
  {
    id: "tt12392504",
    ratingsSummary: {
      aggregateRating: 9.3,
      voteCount: 148421,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_.jpg",
    genres: ["Biography", "Crime", "Drama", "Thriller"],
    title: "Scam 1992: The Harshad Mehta Story",
    releaseYear: 2020,
    runtimeSec: 3240,
    plot: "Set in 1980's and 90's Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
  },
  {
    id: "tt1230180",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 15581,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzExNjRkZmItYzFlNi00ZWI5LWE2MTEtNTcyZDQ1Y2QyZjBiXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg",
    genres: ["Comedy", "Fantasy", "Sci-Fi"],
    title: "The Angry Video Game Nerd",
    releaseYear: 2004,
    runtimeSec: 2100,
    plot: "A foul-mouthed nerd reviews bad video games.",
  },
  {
    id: "tt0318871",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 44477,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWE1YTU4NmYtMTY2Ni00NDIxLTgwMzYtNWJjYWE4MDE5OTE1XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
    genres: [
      "Animation",
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Romance",
    ],
    title: "Kenpû Denki Berserk",
    releaseYear: 1997,
    runtimeSec: 1380,
    plot: "Guts is a skilled swordsman who joins forces with a mercenary group named 'The Band of the Hawk', lead by the charismatic Griffith, and fights with them as they battle their way into the royal court.",
  },
  {
    id: "tt0213338",
    ratingsSummary: {
      aggregateRating: 8.9,
      voteCount: 127187,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Sci-Fi"],
    title: "Kaubôi bibappu",
    releaseYear: 1998,
    runtimeSec: 1440,
    plot: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
  },
  {
    id: "tt0096697",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 418504,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Animation", "Short", "Comedy"],
    title: "The Simpsons",
    releaseYear: 1989,
    runtimeSec: 1320,
    plot: "The satiric adventures of a working-class family in the misfit city of Springfield.",
  },
  {
    id: "tt0187664",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 55978,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMmNjODUxNzctOWU2Zi00ZGU3LWI2MDEtMjZjNjE2MmJiMDZiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Action", "Comedy"],
    title: "Spaced",
    releaseYear: 1999,
    runtimeSec: 1500,
    plot: "Friends Tim and Daisy, 20-something North Londoners with uncertain futures, must pretend to be a couple to live in the only apartment they can afford.",
  },
  {
    id: "tt5421602",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 59664,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Drama", "Family"],
    title: "Anne",
    releaseYear: 2017,
    runtimeSec: 3600,
    plot: "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels.",
  },
  {
    id: "tt0158417",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 20573,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDZkZGUxNmEtOWM0MC00ODJkLWEyYzgtNDJjMzJkZWQ4MjdkXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
    genres: ["Adventure", "Drama", "History", "War"],
    title: "Mahabharat",
    releaseYear: 1988,
    runtimeSec: 2700,
    plot: "When differences between the Kaurava and the Pandava clans, who belong to the same family line, lead them to the threshold of war, Lord Krishna decides to step in and take control of the situation.",
  },
  {
    id: "tt1124373",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 307509,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    title: "Sons of Anarchy",
    releaseYear: 2008,
    runtimeSec: 2700,
    plot: "A biker struggles to balance being a father and being involved in an outlaw motorcycle club.",
  },
  {
    id: "tt0421357",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 73695,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDMwZjg5ODgtMjVhMS00ZmVkLWI2YTMtMmQzZDI3ZjMwMDIwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    genres: [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Sci-Fi",
    ],
    title: "Hagane no renkinjutsushi",
    releaseYear: 2003,
    runtimeSec: 1440,
    plot: "When a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can save them; the fabled philosopher's stone.",
  },
  {
    id: "tt1641384",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 43202,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTAwYzE4NzItY2Q3Zi00NjRmLWE5ZTAtMDM5OWIyMmQ3MTFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Crime", "Romance", "Sci-Fi"],
    title: "Young Justice",
    releaseYear: 2010,
    runtimeSec: 1380,
    plot: "Teenage superheroes strive to prove themselves as members of the Justice League.",
  },
  {
    id: "tt1910272",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 66770,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    genres: ["Animation", "Comedy", "Drama", "Romance", "Sci-Fi", "Thriller"],
    title: "Steins;Gate",
    releaseYear: 2011,
    runtimeSec: 1440,
    plot: "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
  },
  {
    id: "tt0407362",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 170289,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    title: "Battlestar Galactica",
    releaseYear: 2004,
    runtimeSec: 2640,
    plot: "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.",
  },
  {
    id: "tt0417349",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 33624,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjU4NGI4MjQtOTJlZC00Y2UxLWFiMDAtODJhZDFmYmVjMTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
    genres: ["Drama", "Romance"],
    title: "North & South",
    releaseYear: 2004,
    runtimeSec: 14100,
    plot: "North and South is a four part adaptation of Elizabeth Gaskell's love story of Margaret Hale, a middle class southerner who is forced to move to the northern town of Milton.",
  },
  {
    id: "tt0863046",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 63524,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTM4M2VhY2UtZTJmMi00YmFjLTk4OWItMzU2ZDA3NTUxZjYxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Comedy", "Music", "Musical"],
    title: "Flight of the Conchords",
    releaseYear: 2007,
    runtimeSec: 1680,
    plot: "Bret and Jemaine are Flight of the Conchords, a folk-rock band from New Zealand living in New York City in search of stardom.",
  },
  {
    id: "tt10541088",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 48189,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGNhMDBjY2EtOTg1ZC00NGYwLWJlZDgtMTUxYmQ3MmRiMWJjXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
    genres: ["Documentary", "Reality-TV"],
    title: "Clarkson's Farm",
    releaseYear: 2021,
    runtimeSec: 2700,
    plot: "Follow Jeremy Clarkson as he attempts to run a farm in the countryside.",
  },
  {
    id: "tt13991232",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 94356,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDZkZDdkMjYtMGI3Yi00MmVkLTkzZjQtMGI0NGViNzIzNjhjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
    genres: ["Drama", "Western"],
    title: "1883",
    releaseYear: 2021,
    runtimeSec: 3600,
    plot: "Follows the Dutton family on a journey west through the Great Plains toward the last bastion of uncolonised America.",
  },
  {
    id: "tt3398228",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 170127,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Animation", "Comedy", "Drama"],
    title: "BoJack Horseman",
    releaseYear: 2014,
    runtimeSec: 1500,
    plot: "BoJack Horseman was the star of the hit television show \"Horsin' Around\" in the '80s and '90s, but now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
  },
  {
    id: "tt20869502",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 19900,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTAzNzlhYjItN2MxZS00ZTg4LWFmZGQtN2I1ZWE5YjgzODY3XkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_.jpg",
    genres: ["Drama"],
    title: "Extraordinary Attorney Woo",
    releaseYear: 2022,
    runtimeSec: 4500,
    plot: "About an autistic 27-year-old lawyer. Due to her high IQ of 164, impressive memory, and creative thought process, the brilliant Woo Young Woo graduated at the top of her class from a prestigious law school.",
  },
  {
    id: "tt3230854",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 161246,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Drama", "Mystery", "Sci-Fi"],
    title: "The Expanse",
    releaseYear: 2015,
    runtimeSec: 3600,
    plot: "In the 24th century, a group of humans untangle a vast plot which threatens the Solar System's fragile state of detente.",
  },
  {
    id: "tt8420184",
    ratingsSummary: {
      aggregateRating: 9.1,
      voteCount: 135377,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Documentary", "Biography", "History", "Sport"],
    title: "The Last Dance",
    releaseYear: 2020,
    runtimeSec: 29460,
    plot: "Charting the rise of the 1990's Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.",
  },
  {
    id: "tt0185906",
    ratingsSummary: {
      aggregateRating: 9.4,
      voteCount: 485521,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_.jpg",
    genres: ["Drama", "History", "War"],
    title: "Band of Brothers",
    releaseYear: 2001,
    runtimeSec: 35640,
    plot: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
  },
  {
    id: "tt0421291",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 19855,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDEzNzk4YmQtYWRhMi00ZGRmLTg2M2YtZjM2YTY0MWE1YWYwXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
    genres: ["Comedy"],
    title: "Avrupa Yakasi",
    releaseYear: 2004,
    runtimeSec: 3600,
    plot: "The life and times of rather traditional Sutcuoglu family and their comedic struggles to adapt the high-profile contemporary life of Nisantasi.",
  },
  {
    id: "tt1305826",
    ratingsSummary: {
      aggregateRating: 8.6,
      voteCount: 101667,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGY2ZGFkYjctOWY2Ni00MGQ5LWE4OTItNjJhNzA5MWFmMjk1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    genres: [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi",
    ],
    title: "Adventure Time",
    releaseYear: 2010,
    runtimeSec: 660,
    plot: "A 12-year-old boy and his best friend, wise 28-year-old dog with magical powers, go on a series of surreal adventures with each other in a remote future.",
  },
  {
    id: "tt9419884",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 458344,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTQxN2YxMzEtMGNlZC00ODkyLThlOTYtZWUwNjBlOTQwM2FjXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Horror", "Sci-Fi"],
    title: "Doctor Strange in the Multiverse of Madness",
    releaseYear: 2022,
    runtimeSec: 7560,
    plot: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
  },
  {
    id: "tt10648342",
    ratingsSummary: {
      aggregateRating: 6.2,
      voteCount: 382562,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Romance", "Sci-Fi"],
    title: "Thor: Love and Thunder",
    releaseYear: 2022,
    runtimeSec: 7080,
    plot: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
  },
  {
    id: "tt13462900",
    ratingsSummary: {
      aggregateRating: 5.5,
      voteCount: 3888,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzdhODZhYzEtZjcxNy00MGYzLTlmZjAtZGYwOWVhOThlY2M1XkEyXkFqcGdeQXVyNDM1Nzc0MTI@._V1_.jpg",
    genres: ["Action", "Drama", "History", "War"],
    title: "Zhang jin hu",
    releaseYear: 2021,
    runtimeSec: 10560,
    plot: 'Set in the Second Phase Offensive of the Korean War, "The Battle at Lake Changjin" tells an epic historical tale: 71 years ago, the People\'s Volunteer Army (PVA) entered North Korea for battle. Under extreme freezing conditions, the troops on the Eastern Front pursued with fearless spirit and iron will, as they courageously fought the enemy at Lake Changjin (also known as Chosin Reservoir). The battle was a turning point in the Korean War and demonstrated the courage and resolve of the PVA.',
  },
  {
    id: "tt1454468",
    ratingsSummary: {
      aggregateRating: 7.7,
      voteCount: 850937,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
    genres: ["Action", "Drama", "Sci-Fi", "Thriller"],
    title: "Gravity",
    releaseYear: 2013,
    runtimeSec: 5460,
    plot: "Two astronauts work together to survive after an accident leaves them stranded in space.",
  },
  {
    id: "tt3371366",
    ratingsSummary: {
      aggregateRating: 5.2,
      voteCount: 164989,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Transformers: The Last Knight",
    releaseYear: 2017,
    runtimeSec: 9240,
    plot: "A deadly threat from Earth's history reappears and a hunt for a lost artifact takes place between Autobots and Decepticons, while Optimus Prime encounters his creator in space.",
  },
  {
    id: "tt0480249",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 795936,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genres: ["Action", "Drama", "Sci-Fi", "Thriller"],
    title: "I Am Legend",
    releaseYear: 2007,
    runtimeSec: 6060,
    plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
  },
  {
    id: "tt1981115",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 712207,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    title: "Thor: The Dark World",
    releaseYear: 2013,
    runtimeSec: 6720,
    plot: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
  },
  {
    id: "tt0381061",
    ratingsSummary: {
      aggregateRating: 8,
      voteCount: 682117,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    genres: ["Action", "Adventure", "Thriller"],
    title: "Casino Royale",
    releaseYear: 2006,
    runtimeSec: 8640,
    plot: "After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
  },
  {
    id: "tt2382320",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 431913,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    genres: ["Action", "Adventure", "Thriller"],
    title: "No Time to Die",
    releaseYear: 2021,
    runtimeSec: 9780,
    plot: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
  },
  {
    id: "tt10370822",
    ratingsSummary: {
      aggregateRating: 5.6,
      voteCount: 2438,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTdhMDY2OWQtZDBjOC00ZTJiLTkzMTktODA3MDJkMTJkOGJkXkEyXkFqcGdeQXVyNjkzMzA2Njk@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Mystery"],
    title: "Detective Chinatown 3",
    releaseYear: 2021,
    runtimeSec: 8160,
    plot: "A major crime occurs in Tokyo when detectives Tang Ren and Qin Feng are invited to investigate the crime. A battle between the strongest detectives in Asia is about to break out with bursts of laughter.",
  },
  {
    id: "tt2820852",
    ratingsSummary: {
      aggregateRating: 7.1,
      voteCount: 408327,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_.jpg",
    genres: ["Action", "Thriller"],
    title: "Fast & Furious 7",
    releaseYear: 2015,
    runtimeSec: 8220,
    plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
  },
  {
    id: "tt3748528",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 671949,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Star Wars: Rogue One",
    releaseYear: 2016,
    runtimeSec: 7980,
    plot: "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
  },
  {
    id: "tt0317705",
    ratingsSummary: {
      aggregateRating: 8,
      voteCount: 784814,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Family"],
    title: "The Incredibles",
    releaseYear: 2004,
    runtimeSec: 6900,
    plot: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
  },
  {
    id: "tt0145487",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 858624,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Spider-Man",
    releaseYear: 2002,
    runtimeSec: 7260,
    plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
  },
  {
    id: "tt1345836",
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 1786040,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
    genres: ["Action", "Crime", "Drama"],
    title: "The Dark Knight Rises",
    releaseYear: 2012,
    runtimeSec: 9840,
    plot: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
  },
  {
    id: "tt0234215",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 618970,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genres: ["Action", "Sci-Fi"],
    title: "The Matrix Reloaded",
    releaseYear: 2003,
    runtimeSec: 8280,
    plot: "Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.",
  },
  {
    id: "tt4912910",
    ratingsSummary: {
      aggregateRating: 7.7,
      voteCount: 367786,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg",
    genres: ["Action", "Adventure", "Thriller"],
    title: "Mission: Impossible - Fallout",
    releaseYear: 2018,
    runtimeSec: 8820,
    plot: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
  },
  {
    id: "tt8041270",
    ratingsSummary: {
      aggregateRating: 5.6,
      voteCount: 194409,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTNhYWExODctNmJjNi00MmU0LWJlY2EtZjg0ZmMxNDY1MWY1XkEyXkFqcGdeQXVyMTQ2NzY0MTM5._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    title: "Jurassic World: Dominion",
    releaseYear: 2022,
    runtimeSec: 8820,
    plot: "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
  },
  {
    id: "tt5433138",
    ratingsSummary: {
      aggregateRating: 5.2,
      voteCount: 156606,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
    genres: ["Action", "Crime", "Thriller"],
    title: "Fast & Furious 9",
    releaseYear: 2021,
    runtimeSec: 8580,
    plot: "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
  },
  {
    id: "tt1298650",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 552425,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    title: "Pirates of the Caribbean: On Stranger Tides",
    releaseYear: 2011,
    runtimeSec: 8220,
    plot: "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
  },
  {
    id: "tt3315342",
    ratingsSummary: {
      aggregateRating: 8.1,
      voteCount: 808934,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    genres: ["Action", "Drama", "Sci-Fi", "Thriller"],
    title: "Logan",
    releaseYear: 2017,
    runtimeSec: 8220,
    plot: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
  },
  {
    id: "tt1951265",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 482813,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    title: "The Hunger Games: Mockingjay - Part 1",
    releaseYear: 2014,
    runtimeSec: 7380,
    plot: "Katniss Everdeen is in District 13 after she shatters the games forever. Under the leadership of President Coin and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta and a nation moved by her courage.",
  },
  {
    id: "tt1477834",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 504653,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    title: "Aquaman",
    releaseYear: 2018,
    runtimeSec: 8580,
    plot: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
  },
  {
    id: "tt5433140",
    ratingsSummary: {
      aggregateRating: 5.8,
      voteCount: 101746,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"],
    title: "Fast X",
    releaseYear: 2023,
    runtimeSec: 8460,
    plot: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
  },
  {
    id: "tt10872600",
    ratingsSummary: {
      aggregateRating: 8.2,
      voteCount: 841498,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    title: "Spider-Man: No Way Home",
    releaseYear: 2021,
    runtimeSec: 8880,
    plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  },
  {
    id: "tt1300854",
    ratingsSummary: {
      aggregateRating: 7.1,
      voteCount: 884221,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Iron Man Three",
    releaseYear: 2013,
    runtimeSec: 7800,
    plot: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
  },
  {
    id: "tt7975244",
    ratingsSummary: {
      aggregateRating: 6.7,
      voteCount: 272465,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    title: "Jumanji: The Next Level",
    releaseYear: 2019,
    runtimeSec: 7380,
    plot: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
  },
  {
    id: "tt0468569",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 2798830,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genres: ["Action", "Crime", "Drama", "Thriller"],
    title: "The Dark Knight",
    releaseYear: 2008,
    runtimeSec: 9120,
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: "tt6878882",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 7756,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTViMmI4ZTEtMzY0Zi00NjMwLWJhMzAtMmU2OTE4N2M4MzI4XkEyXkFqcGdeQXVyNjc2NjA2NTE@._V1_.jpg",
    genres: ["Action", "Drama", "Thriller", "War"],
    title: "Hong hai xing dong",
    releaseYear: 2018,
    runtimeSec: 8520,
    plot: "PLA Navy Marine Corps launch a hostage rescue operation in the fictional Republic of Ihwea and undergo a fierce battle with rebellions and terrorism.",
  },
  {
    id: "tt1677720",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 468023,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Ready Player One",
    releaseYear: 2018,
    runtimeSec: 8400,
    plot: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
  },
  {
    id: "tt2109248",
    ratingsSummary: {
      aggregateRating: 5.6,
      voteCount: 327675,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Transformers: Age of Extinction",
    releaseYear: 2014,
    runtimeSec: 9900,
    plot: "When humanity allies with a bounty hunter in pursuit of Optimus Prime, the Autobots turn to a mechanic and his family for help.",
  },
  {
    id: "tt1409024",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 380253,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    title: "Men in Black 3",
    releaseYear: 2012,
    runtimeSec: 6360,
    plot: "Agent J travels in time to M.I.B.'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.",
  },
  {
    id: "tt1646971",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 355411,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Hoe Tem Je Een Draak 2",
    releaseYear: 2014,
    runtimeSec: 6120,
    plot: "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
  },
  {
    id: "tt0167261",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 1739800,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    title: "The Lord of the Rings: The Two Towers",
    releaseYear: 2002,
    runtimeSec: 10740,
    plot: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
  },
  {
    id: "tt1825683",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 819488,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Black Panther",
    releaseYear: 2018,
    runtimeSec: 8040,
    plot: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
  },
  {
    id: "tt4881806",
    ratingsSummary: {
      aggregateRating: 6.1,
      voteCount: 335869,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Jurassic World: Fallen Kingdom",
    releaseYear: 2018,
    runtimeSec: 7680,
    plot: "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
  },
  {
    id: "tt0974015",
    ratingsSummary: {
      aggregateRating: 6.1,
      voteCount: 471345,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    title: "Justice League",
    releaseYear: 2017,
    runtimeSec: 7200,
    plot: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
  },
  {
    id: "tt2488496",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 960165,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Star Wars: Episode VII - The Force Awakens",
    releaseYear: 2015,
    runtimeSec: 8280,
    plot: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  },
  {
    id: "tt4630562",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 248266,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_.jpg",
    genres: ["Action", "Crime", "Thriller"],
    title: "Fast & Furious 8",
    releaseYear: 2017,
    runtimeSec: 8160,
    plot: "When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.",
  },
  {
    id: "tt1596343",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 400401,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_.jpg",
    genres: ["Action", "Crime", "Thriller"],
    title: "Fast & Furious 5",
    releaseYear: 2011,
    runtimeSec: 7800,
    plot: "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
  },
  {
    id: "tt0417741",
    ratingsSummary: {
      aggregateRating: 7.6,
      voteCount: 578478,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg",
    genres: ["Action", "Adventure", "Family", "Fantasy", "Mystery"],
    title: "Harry Potter en de halfbloed prins",
    releaseYear: 2009,
    runtimeSec: 9180,
    plot: 'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort\'s dark past.',
  },
  {
    id: "tt7605074",
    ratingsSummary: {
      aggregateRating: 5.9,
      voteCount: 35096,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2NzZlMGItMzA4OS00ZjRiLTk3NzItMDRkOGFlZmNhYzJkXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    title: "Liu lang di qiu",
    releaseYear: 2019,
    runtimeSec: 7500,
    plot: "As the sun is dying out, people all around the world build giant planet thrusters to move Earth out of its orbit and sail Earth to a new star system. Yet the 2500-year journey comes with unexpected dangers, and in order to save humanity, a group of young people in this age of a wandering Earth fight hard for the survival of humankind.",
  },
  {
    id: "tt6320628",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 536191,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "Spider-Man: Far from Home",
    releaseYear: 2019,
    runtimeSec: 7740,
    plot: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
  },
  {
    id: "tt1302011",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 307265,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Kung Fu Panda 2",
    releaseYear: 2011,
    runtimeSec: 5400,
    plot: "Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.",
  },
  {
    id: "tt4154796",
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 1224453,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    title: "Avengers: Endgame",
    releaseYear: 2019,
    runtimeSec: 10860,
    plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    id: "tt6791350",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 339692,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    title: "Guardians of the Galaxy Vol. 3",
    releaseYear: 2023,
    runtimeSec: 9000,
    plot: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
  },
  {
    id: "tt1877830",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 741440,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    genres: ["Action", "Crime", "Drama", "Thriller"],
    title: "The Batman",
    releaseYear: 2022,
    runtimeSec: 10560,
    plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
  {
    id: "tt0119654",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 598125,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    title: "Men in Black",
    releaseYear: 1997,
    runtimeSec: 5880,
    plot: "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.",
  },
  {
    id: "tt1872181",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 525841,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    title: "The Amazing Spider-Man 2",
    releaseYear: 2014,
    runtimeSec: 8520,
    plot: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
  },
  {
    id: "tt1386697",
    ratingsSummary: {
      aggregateRating: 5.9,
      voteCount: 710828,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    title: "Suicide Squad",
    releaseYear: 2016,
    runtimeSec: 7380,
    plot: "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
  },
  {
    id: "tt2322441",
    ratingsSummary: {
      aggregateRating: 4.2,
      voteCount: 330732,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_.jpg",
    genres: ["Drama", "Romance", "Thriller"],
    title: "Fifty Shades of Grey",
    releaseYear: 2015,
    runtimeSec: 7500,
    plot: "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
  },
  {
    id: "tt0335345",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 245270,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDY1N2IyYWMtZTY4OS00OGM1LTkxNmUtOTQzYmM5MmI2YmVmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Drama"],
    title: "The Passion of the Christ",
    releaseYear: 2004,
    runtimeSec: 7620,
    plot: "Depicts the final twelve hours in the life of Jesus of Nazareth, on the day of his crucifixion in Jerusalem.",
  },
  {
    id: "tt0167404",
    ratingsSummary: {
      aggregateRating: 8.2,
      voteCount: 1030294,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
    genres: ["Drama", "Mystery", "Thriller"],
    title: "The Sixth Sense",
    releaseYear: 1999,
    runtimeSec: 6420,
    plot: "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
  },
  {
    id: "tt2096673",
    ratingsSummary: {
      aggregateRating: 8.1,
      voteCount: 759884,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy",
      "Sci-Fi",
    ],
    title: "Binnenstebuiten",
    releaseYear: 2015,
    runtimeSec: 5700,
    plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
  },
  {
    id: "tt2103281",
    ratingsSummary: {
      aggregateRating: 7.6,
      voteCount: 458797,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
    title: "Dawn of the Planet of the Apes",
    releaseYear: 2014,
    runtimeSec: 7800,
    plot: "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.",
  },
  {
    id: "tt1951264",
    ratingsSummary: {
      aggregateRating: 7.5,
      voteCount: 696781,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
    title: "The Hunger Games: Catching Fire",
    releaseYear: 2013,
    runtimeSec: 8760,
    plot: "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
  },
  {
    id: "tt0167260",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 1929275,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    title: "The Lord of the Rings: The Return of the King",
    releaseYear: 2003,
    runtimeSec: 12060,
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    id: "tt1745960",
    ratingsSummary: {
      aggregateRating: 8.3,
      voteCount: 639555,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Action", "Drama"],
    title: "Top Gun: Maverick",
    releaseYear: 2022,
    runtimeSec: 7800,
    plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
  },
  {
    id: "tt13364790",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 2653,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzBhZDgxYjctOGExNy00ODEzLTkzZjUtMjk5YmM4MGM4ZmNiXkEyXkFqcGdeQXVyMTMwNzM5MTg0._V1_.jpg",
    genres: ["Comedy", "Drama", "Fantasy"],
    title: "Ni hao, Li Huan Ying",
    releaseYear: 2021,
    runtimeSec: 7680,
    plot: "A woman travels back in time to befriend her own mother in an attempt to make her life better.",
  },
  {
    id: "tt1727824",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 572952,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg",
    genres: ["Biography", "Drama", "Music"],
    title: "Bohemian Rhapsody",
    releaseYear: 2018,
    runtimeSec: 8040,
    plot: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
  },
  {
    id: "tt0110357",
    ratingsSummary: {
      aggregateRating: 8.5,
      voteCount: 1113318,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    genres: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    title: "The Lion King",
    releaseYear: 1994,
    runtimeSec: 5280,
    plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
  },
  {
    id: "tt7131870",
    ratingsSummary: {
      aggregateRating: 5.9,
      voteCount: 8734,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY0NjU4NjE4Nl5BMl5BanBnXkFtZTgwNjk0ODY5MjI@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Thriller", "War"],
    title: "Zhan lang II",
    releaseYear: 2017,
    runtimeSec: 7380,
    plot: "China's deadliest special forces operative settles into a quiet life on the sea. When sadistic mercenaries begin targeting nearby civilians, he must leave his newfound peace behind and return to his duties as a soldier and protector.",
  },
  {
    id: "tt0454876",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 655383,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Fantasy"],
    title: "Life of Pi",
    releaseYear: 2012,
    runtimeSec: 7620,
    plot: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
  },
  {
    id: "tt4701660",
    ratingsSummary: {
      aggregateRating: 6.2,
      voteCount: 9946,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYzQzZGQxZTUtZWZhMC00ODE0LWI3N2EtOThiOTg0ZDYxYjEwXkEyXkFqcGdeQXVyNjU0NzY4ODU@._V1_.jpg",
    genres: ["Comedy", "Drama", "Fantasy", "Romance"],
    title: "Mei ren yu",
    releaseYear: 2016,
    runtimeSec: 5640,
    plot: "Shan, a mermaid, is sent to assassinate Xuan, a developer who threatens the ecosystem of her race, but ends up falling in love with him instead.",
  },
  {
    id: "tt0360717",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 439512,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Romance"],
    title: "King Kong",
    releaseYear: 2005,
    runtimeSec: 11220,
    plot: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
  },
  {
    id: "tt1324999",
    ratingsSummary: {
      aggregateRating: 4.9,
      voteCount: 250239,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BODgxNDE0OTAzOF5BMl5BanBnXkFtZTcwNzcwODE2Ng@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Fantasy", "Romance", "Thriller"],
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    releaseYear: 2011,
    runtimeSec: 7020,
    plot: "The Quileutes close in on expecting parents Edward and Bella, whose unborn child poses a threat to the Wolf Pack and the towns people of Forks.",
  },
  {
    id: "tt7286456",
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 1417996,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    title: "Joker",
    releaseYear: 2019,
    runtimeSec: 7320,
    plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
  },
  {
    id: "tt9114286",
    ratingsSummary: {
      aggregateRating: 6.7,
      voteCount: 289232,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Sci-Fi", "Thriller"],
    title: "Black Panther: Wakanda Forever",
    releaseYear: 2022,
    runtimeSec: 9660,
    plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
  },
  {
    id: "tt0120338",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 1252486,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Drama", "Romance"],
    title: "Titanic",
    releaseYear: 1997,
    runtimeSec: 11640,
    plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
  {
    id: "tt0120737",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 1956438,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    runtimeSec: 10680,
    plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    id: "tt3040964",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 287759,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_.jpg",
    genres: ["Adventure", "Drama", "Family", "Fantasy"],
    title: "The Jungle Book",
    releaseYear: 2016,
    runtimeSec: 6360,
    plot: "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo.",
  },
  {
    id: "tt1673434",
    ratingsSummary: {
      aggregateRating: 5.5,
      voteCount: 258657,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Fantasy", "Romance"],
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    releaseYear: 2012,
    runtimeSec: 6900,
    plot: "After the birth of Renesmee/Nessie, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
  },
  {
    id: "tt0448157",
    ratingsSummary: {
      aggregateRating: 6.4,
      voteCount: 503465,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_.jpg",
    genres: ["Action", "Drama", "Fantasy"],
    title: "Hancock",
    releaseYear: 2008,
    runtimeSec: 5520,
    plot: "Hancock is a superhero whose ill-considered behavior regularly causes damage in the millions. He changes when the person he saves helps him improve his public image.",
  },
  {
    id: "tt6105098",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 260956,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    genres: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    title: "The Lion King",
    releaseYear: 2019,
    runtimeSec: 7080,
    plot: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  },
  {
    id: "tt1259571",
    ratingsSummary: {
      aggregateRating: 4.8,
      voteCount: 295308,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Fantasy", "Romance"],
    title: "The Twilight Saga: New Moon",
    releaseYear: 2009,
    runtimeSec: 7800,
    plot: "Edward leaves Bella after an attack that nearly claimed her life, and, in her depression, she falls into yet another difficult relationship - this time with her close friend, Jacob Black.",
  },
  {
    id: "tt16194408",
    ratingsSummary: {
      aggregateRating: 5.6,
      voteCount: 1279,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGExYTE2ZTYtMGY2My00ZmNhLTg0M2EtNWI2YWMzZjNiMTljXkEyXkFqcGdeQXVyMTI5ODA1OTU0._V1_.jpg",
    genres: ["Action", "Drama", "History"],
    title: "Chang jin hu zhi shui men qiao",
    releaseYear: 2022,
    runtimeSec: 9180,
    plot: 'Sequel to "The Battle at Lake Changjin". Follows the Chinese People\'s Volunteers (CPV) soldiers on a new task, and now their battlefield is a crucial bridge on the retreat route of American troops.',
  },
  {
    id: "tt0816692",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 2009279,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    title: "Interstellar",
    releaseYear: 2014,
    runtimeSec: 10140,
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: "tt3659388",
    ratingsSummary: {
      aggregateRating: 8,
      voteCount: 899765,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    title: "The Martian",
    releaseYear: 2015,
    runtimeSec: 8640,
    plot: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.",
  },
  {
    id: "tt1325004",
    ratingsSummary: {
      aggregateRating: 5.1,
      voteCount: 256265,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance", "Thriller"],
    title: "The Twilight Saga: Eclipse",
    releaseYear: 2010,
    runtimeSec: 7440,
    plot: "As a string of mysterious killings grips Seattle, Bella, whose high school graduation is fast approaching, is forced to choose between her love for vampire Edward and her friendship with werewolf Jacob.",
  },
  {
    id: "tt0109830",
    ratingsSummary: {
      aggregateRating: 8.8,
      voteCount: 2194012,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Drama", "Romance"],
    title: "Forrest Gump",
    releaseYear: 1994,
    runtimeSec: 8520,
    plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  },
  {
    id: "tt1049413",
    ratingsSummary: {
      aggregateRating: 8.3,
      voteCount: 1097334,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Drama", "Family"],
    title: "Up",
    releaseYear: 2009,
    runtimeSec: 5760,
    plot: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
  },
  {
    id: "tt2245084",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 488879,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family", "Sci-Fi"],
    title: "Big Hero 6",
    releaseYear: 2014,
    runtimeSec: 6120,
    plot: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
  },
  {
    id: "tt1080016",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 258495,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    title: "Ice Age: Dawn of the Dinosaurs",
    releaseYear: 2009,
    runtimeSec: 5640,
    plot: "When Sid's attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.",
  },
  {
    id: "tt0892791",
    ratingsSummary: {
      aggregateRating: 6.3,
      voteCount: 219545,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Romance",
    ],
    title: "Shrek Forever After",
    releaseYear: 2010,
    runtimeSec: 5580,
    plot: "Rumpelstiltskin tricks a mid-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpelstiltskin rules supreme.",
  },
  {
    id: "tt2277860",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 294908,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    title: "Finding Dory",
    releaseYear: 2016,
    runtimeSec: 5820,
    plot: "Friendly but forgetful blue tang Dory begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
  },
  {
    id: "tt2380307",
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 562843,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Music",
      "Mystery",
    ],
    title: "Coco",
    releaseYear: 2017,
    runtimeSec: 6300,
    plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
  },
  {
    id: "tt0448694",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 187307,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Puss in Boots",
    releaseYear: 2011,
    runtimeSec: 5400,
    plot: "An outlaw cat, his childhood egg-friend and a seductive thief kitty set out in search for the eggs of the fabled Golden Goose to clear his name, restore his lost honor and regain the trust of his mother and town.",
  },
  {
    id: "tt2771200",
    ratingsSummary: {
      aggregateRating: 7.1,
      voteCount: 327211,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Musical", "Romance"],
    title: "Beauty and the Beast",
    releaseYear: 2017,
    runtimeSec: 7740,
    plot: "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
  },
  {
    id: "tt2294629",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 650478,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Musical",
    ],
    title: "Frozen",
    releaseYear: 2013,
    runtimeSec: 6120,
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
  },
  {
    id: "tt0398286",
    ratingsSummary: {
      aggregateRating: 7.7,
      voteCount: 481325,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Musical",
      "Romance",
    ],
    title: "Rapunzel",
    releaseYear: 2010,
    runtimeSec: 6000,
    plot: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
  },
  {
    id: "tt0438097",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 291260,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    title: "Ice Age: The Meltdown",
    releaseYear: 2006,
    runtimeSec: 5460,
    plot: "Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths.",
  },
  {
    id: "tt1216475",
    ratingsSummary: {
      aggregateRating: 6.2,
      voteCount: 209297,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Sport"],
    title: "Cars 2",
    releaseYear: 2011,
    runtimeSec: 6360,
    plot: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
  },
  {
    id: "tt0083866",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 428935,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Adventure", "Family", "Sci-Fi"],
    title: "E.T. the Extra-Terrestrial",
    releaseYear: 1982,
    runtimeSec: 6900,
    plot: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
  },
  {
    id: "tt0382932",
    ratingsSummary: {
      aggregateRating: 8.1,
      voteCount: 795344,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Ratatouille",
    releaseYear: 2007,
    runtimeSec: 6660,
    plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
  },
  {
    id: "tt0472181",
    ratingsSummary: {
      aggregateRating: 5.4,
      voteCount: 94950,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDUyMmFiYTctZDcyYS00OGY4LTk1ZmYtZjBmODBlZTc1NjU4XkEyXkFqcGdeQXVyNTk1MTAyODc@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "The Smurfs",
    releaseYear: 2011,
    runtimeSec: 6180,
    plot: "When the evil wizard Gargamel chases the tiny blue Smurfs out of their village, they tumble from their magical world into New York City.",
  },
  {
    id: "tt0477347",
    ratingsSummary: {
      aggregateRating: 6.5,
      voteCount: 368529,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQyOTM4MDMxN15BMl5BanBnXkFtZTcwODg5NTQzMw@@._V1_.jpg",
    genres: ["Adventure", "Comedy", "Family", "Fantasy"],
    title: "Night at the Museum",
    releaseYear: 2006,
    runtimeSec: 6480,
    plot: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.",
  },
  {
    id: "tt1049413",
    ratingsSummary: {
      aggregateRating: 8.3,
      voteCount: 1097334,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Drama", "Family"],
    title: "Up",
    releaseYear: 2009,
    runtimeSec: 5760,
    plot: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
  },
  {
    id: "tt6105098",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 260956,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    genres: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    title: "The Lion King",
    releaseYear: 2019,
    runtimeSec: 7080,
    plot: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  },
  {
    id: "tt2293640",
    ratingsSummary: {
      aggregateRating: 6.4,
      voteCount: 252876,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Sci-Fi"],
    title: "Minions",
    releaseYear: 2015,
    runtimeSec: 5460,
    plot: "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
  },
  {
    id: "tt0295297",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 672770,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Mystery"],
    title: "Harry Potter en de geheime kamer",
    releaseYear: 2002,
    runtimeSec: 9660,
    plot: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
  },
  {
    id: "tt0304141",
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 671759,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Mystery"],
    title: "Harry Potter en de gevangene van Azkaban",
    releaseYear: 2004,
    runtimeSec: 8520,
    plot: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
  },
  {
    id: "tt3183660",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 497282,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy"],
    title: "Fantastic Beasts and Where to Find Them",
    releaseYear: 2016,
    runtimeSec: 7920,
    plot: "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
  },
  {
    id: "tt4123430",
    ratingsSummary: {
      aggregateRating: 6.5,
      voteCount: 300966,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy"],
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    releaseYear: 2018,
    runtimeSec: 8040,
    plot: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
  },
  {
    id: "tt1014759",
    ratingsSummary: {
      aggregateRating: 6.4,
      voteCount: 433131,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Mystery"],
    title: "Alice in Wonderland",
    releaseYear: 2010,
    runtimeSec: 6480,
    plot: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
  },
  {
    id: "tt3040964",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 287759,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_.jpg",
    genres: ["Adventure", "Drama", "Family", "Fantasy"],
    title: "The Jungle Book",
    releaseYear: 2016,
    runtimeSec: 6360,
    plot: "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo.",
  },
  {
    id: "tt0479952",
    ratingsSummary: {
      aggregateRating: 6.6,
      voteCount: 241774,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzNlYjFmZTMtMGI1OS00YmQwLWI5M2EtMTllNmVhZjAyMmJjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    title: "Madagascar 2",
    releaseYear: 2008,
    runtimeSec: 5340,
    plot: "The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.",
  },
  {
    id: "tt0298148",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 492360,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Romance",
    ],
    title: "Shrek 2",
    releaseYear: 2004,
    runtimeSec: 5580,
    plot: "Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona's parents are King and Queen, to celebrate their marriage. When they arrive, they find they are not as welcome as they thought they would be.",
  },
  {
    id: "tt3521164",
    ratingsSummary: {
      aggregateRating: 7.6,
      voteCount: 364169,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Musical",
    ],
    title: "Vaiana",
    releaseYear: 2016,
    runtimeSec: 6420,
    plot: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
  },
  {
    id: "tt1690953",
    ratingsSummary: {
      aggregateRating: 7.3,
      voteCount: 417584,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Sci-Fi"],
    title: "Despicable Me 2",
    releaseYear: 2013,
    runtimeSec: 5880,
    plot: "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
  },
  {
    id: "tt2948356",
    ratingsSummary: {
      aggregateRating: 8,
      voteCount: 530557,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Mystery"],
    title: "Zootropolis",
    releaseYear: 2016,
    runtimeSec: 6480,
    plot: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
  },
  {
    id: "tt3470600",
    ratingsSummary: {
      aggregateRating: 7.1,
      voteCount: 184824,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_.jpg",
    genres: ["Animation", "Comedy", "Family", "Musical"],
    title: "Sing",
    releaseYear: 2016,
    runtimeSec: 6480,
    plot: "In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists find that their lives will never be the same.",
  },
  {
    id: "tt3469046",
    ratingsSummary: {
      aggregateRating: 6.2,
      voteCount: 147744,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Sci-Fi"],
    title: "Despicable Me 3",
    releaseYear: 2017,
    runtimeSec: 5340,
    plot: "Gru meets his long-lost, charming, cheerful, and more successful twin brother Dru, who wants to team up with him for one last criminal heist.",
  },
  {
    id: "tt1979376",
    ratingsSummary: {
      aggregateRating: 7.7,
      voteCount: 271152,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Toy Story 4",
    releaseYear: 2019,
    runtimeSec: 6000,
    plot: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
  },
  {
    id: "tt4520988",
    ratingsSummary: {
      aggregateRating: 6.8,
      voteCount: 187601,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Musical",
    ],
    title: "Frozen II",
    releaseYear: 2019,
    runtimeSec: 6180,
    plot: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
  },
  {
    id: "tt5113044",
    ratingsSummary: {
      aggregateRating: 6.5,
      voteCount: 80040,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Sci-Fi"],
    title: "Minions: The Rise of Gru",
    releaseYear: 2022,
    runtimeSec: 5220,
    plot: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
  },
  {
    id: "tt6718170",
    ratingsSummary: {
      aggregateRating: 7.1,
      voteCount: 202296,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTc4MTdlOGYtNzk3YS00ZTg0LTkyNTUtMjMzYmI3MjViNWE0XkEyXkFqcGdeQXVyMTUzMTQ0NzQz._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Super Mario Bros: Film",
    releaseYear: 2023,
    runtimeSec: 5520,
    plot: "A plumber named Mario travels through an underground labyrinth with his brother Luigi, trying to save a captured princess.",
  },
  {
    id: "tt9362722",
    ratingsSummary: {
      aggregateRating: 8.7,
      voteCount: 291041,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Family", "Fantasy", "Sci-Fi"],
    title: "Spider-Man: Across the Spider-Verse",
    releaseYear: 2023,
    runtimeSec: 8400,
    plot: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
  },
  {
    id: "tt0198781",
    ratingsSummary: {
      aggregateRating: 8.1,
      voteCount: 955443,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Monsters, Inc.",
    releaseYear: 2001,
    runtimeSec: 5520,
    plot: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
  },
  {
    id: "tt1587310",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 393701,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Romance"],
    title: "Maleficent",
    releaseYear: 2014,
    runtimeSec: 5820,
    plot: "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.",
  },
  {
    id: "tt10627720",
    ratingsSummary: {
      aggregateRating: 7.4,
      voteCount: 8297,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2FhOGU2ZTAtODQ0ZS00MWVlLWFiMWYtYmIyYjk5NTRhZTVmXkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_.jpg",
    genres: [
      "Animation",
      "Action",
      "Adventure",
      "Family",
      "Fantasy",
      "Thriller",
    ],
    title: "Ne Zha zhi mo tong jiang shi",
    releaseYear: 2019,
    runtimeSec: 6600,
    plot: "Born with unique powers, a boy is recruited to fight demons and save the community that fears him.",
  },
  {
    id: "tt0413267",
    ratingsSummary: {
      aggregateRating: 6.1,
      voteCount: 325211,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Romance",
    ],
    title: "Shrek the Third",
    releaseYear: 2007,
    runtimeSec: 5580,
    plot: "Reluctantly designated as the heir to the land of Far, Far Away, Shrek hatches a plan to install the rebellious Artie as the new king while Princess Fiona tries to fend off a coup d'état by the jilted Prince Charming.",
  },
  {
    id: "tt0266543",
    ratingsSummary: {
      aggregateRating: 8.2,
      voteCount: 1089445,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    title: "Finding Nemo",
    releaseYear: 2003,
    runtimeSec: 6000,
    plot: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
  },
  {
    id: "tt3606756",
    ratingsSummary: {
      aggregateRating: 7.6,
      voteCount: 320300,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_.jpg",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family", "Sci-Fi"],
    title: "Incredibles 2",
    releaseYear: 2018,
    runtimeSec: 7080,
    plot: "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
  },
  {
    id: "tt1453405",
    ratingsSummary: {
      aggregateRating: 7.2,
      voteCount: 380491,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_.jpg",
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    title: "Monsters University",
    releaseYear: 2013,
    runtimeSec: 6240,
    plot: 'A look at the relationship between Mike Wazowski (Billy Crystal) and James P. "Sully" Sullivan (John Goodman) during their days at Monsters University, when they weren\'t necessarily the best of friends.',
  },
  {
    id: "tt6139732",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 283561,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg",
    genres: ["Adventure", "Comedy", "Family", "Fantasy", "Musical", "Romance"],
    title: "Aladdin",
    releaseYear: 2019,
    runtimeSec: 7680,
    plot: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
  },
  {
    id: "tt0363771",
    ratingsSummary: {
      aggregateRating: 6.9,
      voteCount: 417718,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg",
    genres: ["Adventure", "Family", "Fantasy"],
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    releaseYear: 2005,
    runtimeSec: 8580,
    plot: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
  },
  {
    id: "tt2096673",
    ratingsSummary: {
      aggregateRating: 8.1,
      voteCount: 759884,
    },
    primaryImageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    genres: [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy",
      "Sci-Fi",
    ],
    title: "Binnenstebuiten",
    releaseYear: 2015,
    runtimeSec: 5700,
    plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
  },
];

export default randomMovies;
