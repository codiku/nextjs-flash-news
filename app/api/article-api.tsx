export class ArticleAPI {
  static async fetchToday(): Promise<any> {
    return (
      await fetch(
        "https://newsdata.io/api/1/news?country=us&language=en&apikey=pub_3280569b014cbfc0b9a13f2b4fd6883c50139"
      )
    ).json();

    // return MOCK.fetchToday;
  }
}

const MOCK = {
  fetchToday: {
    status: "success",
    totalResults: 4152,
    results: [
      {
        article_id: "5472ddb5bdd6814dd38829b8b91a8744",
        title:
          "Cat Journey lets you rescue your kidnapped sister across a 2D action platformer, out now on iOS and Android",
        link: "https://www.pocketgamer.com/cat-journey/launch/",
        keywords: ["New Release"],
        creator: null,
        video_url: null,
        description:
          "Indie developer Sasha Mednis has announced the official launch of Cat Journey, letting players dive into a feline-themed action platformer on mobile. Out now for both iOS and Android devices, the game tasks you with rescuing your sister across challenging levels in a vibrant 2D world. In Cat Journey, you can look forward to unlocking a wide variety of spells and equipping unique weapons to aid you on your quest. The enemies are just as diverse, so you'll really have to put your platforming prowess to the test to ensure that you make it out of every stage unscathed. ... [MORE]",
        content:
          "Indie developer Sasha Mednis has announced the official launch of Cat Journey, letting players dive into a feline-themed action platformer on mobile. Out now for both iOS and Android devices, the game tasks you with rescuing your sister across challenging levels in a vibrant 2D world. In Cat Journey, you can look forward to unlocking a wide variety of spells and equipping unique weapons to aid you on your quest. The enemies are just as diverse, so you'll really have to put your platforming prowess to the test to ensure that you make it out of every stage unscathed. Does that sound like it's right up your alley and you're looking for more games where you can show off your leaping abilities? Why not take a look at our list of the to get your fill? While you're at it, our Pocket Gamer Awards 2023 are currently underway as well, so if you're eager to show your support for the platforming games that stood out to you over the past year, you can on our dedicated voting page. The game also features plenty of traps that you can fall into - thankfully, your enemies can fall prey to these dangerous devices too, so it's up to you to unleash your strategic thinking and use these to your advantage. The handcrafted background scores and kitty-themed sound effects add to the overall charm of the game as well. Cat Journey was created by a team of 2 people, and is the studio's first project. If you're keen on giving the new game a go yourself, you can do so by downloading Cat Journey on the and on the for Android devices. It's a free-to-play game with ads. You can also take a little sneak peek at the embedded clip above to get a feel of the game's vibes and visuals.",
        pubDate: "2023-11-27 08:06:00",
        image_url:
          "https://media.pocketgamer.com/artwork/na-35889-1701071451/cat-journey-ios-android-launch-cover.jpg",
        source_id: "pocketgamer",
        source_priority: 9021,
        country: ["united states of america"],
        category: ["technology"],
        language: "english",
      },
      {
        article_id: "fab3c5822e58ee9ab61034ed5b30ee47",
        title:
          "The Milton Berle Eagles, Baltimore’s Maddening Season, the Surging Broncos, and the Pathetic Patriots With Cousin Sal",
        link: "https://www.theringer.com/the-bill-simmons-podcast/2023/11/27/23977492/philadelphia-eagles-baltimore-ravens-maddening-season-surging-denver-broncos-pathetic-patriots",
        keywords: null,
        creator: ["Bill Simmons"],
        video_url: null,
        description: null,
        content:
          "The Ringer ’s Bill Simmons is joined by Cousin Sal to discuss a classic Chargers loss to the Ravens and the wild Bills-Eagles showdown (1:40). They also talk about the Patriots seemingly cementing a top-three draft pick after losing 10-7 to the Giants, Saints-Falcons, and Steelers-Bengals (23:12). They then discuss Browns-Broncos, Denver’s midseason turnaround, Texans-Jaguars, the Chiefs’ comeback win vs. the Raiders, Jets-Dolphins, the Thanksgiving games, and more (46:32) before guessing the lines for NFL Week 13 (1:03:28). They close the show with Parent Corner (1:19.30). Host: Bill Simmons Guest: Cousin Sal Producers: Kyle Crichton and Steve Ceruti Subscribe: Spotify / Apple Podcasts / Stitcher / RSS The Ringer ’s NFL Rankings",
        pubDate: "2023-11-27 07:25:00",
        image_url: null,
        source_id: "theringer",
        source_priority: 2702,
        country: ["united states of america"],
        category: ["sports"],
        language: "english",
      },
      {
        article_id: "d2c7b72836d222e0744415de3168fcab",
        title:
          "The DeVito Magic Continues, and Connor Rogers Talks the Jets’ Black Friday Disaster",
        link: "https://www.theringer.com/2023/11/27/23977491/tommy-devito-magic-connor-rogers-new-york-jets-black-friday-disaster",
        keywords: null,
        creator: ["John Jastremski"],
        video_url: null,
        description: null,
        content:
          "(0:55) — JETS: The Jets drop their fourth consecutive game and stray further from the AFC playoff picture following their 34-13 loss to the Dolphins on Black Friday. (9:51) — GIANTS: The Giants win their second straight game as they beat the Patriots 10-7, but do they want to lose their draft positioning with these wins? (15:04) — KNICKS: The Knicks climb back from 21 points down to get a chance to advance in the in-season tournament with their win over the Heat on Friday, and they lose a nail-biter against the Suns on Sunday. (18:34) — CALLS: Callers talk Giants, Jets, and Knicks. (33:04) — CONNOR ROGERS: SNY’s Connor Rogers returns to discuss how the Jets season fell apart, what they could do to avoid this next season, and Aaron Rodgers’s potential return. (56:15) — TRIVIA: JJ returns to test his trivia skills. We always want to hear from you! Leave JJ a message on the listener line at 917-382-1151 . Follow JJ on Twitter ! Host: John Jastremski Guest: Connor Rogers Producer: Stefan Anderson Subscribe: Spotify",
        pubDate: "2023-11-27 07:14:01",
        image_url: null,
        source_id: "theringer",
        source_priority: 2702,
        country: ["united states of america"],
        category: ["sports"],
        language: "english",
      },
      {
        article_id: "b97a85a66ed63c1d8a5c8ff69a9d76fd",
        title:
          "Adventure Friends lets you collect cute animal characters with a spin-based combat mechanic, out now in select regions",
        link: "https://www.pocketgamer.com/adventure-friends/soft-launch/",
        keywords: ["New Release"],
        creator: null,
        video_url: null,
        description:
          "PikPok has announced the launch of Adventure Friends, letting players in Australia, New Zealand, Malaysia, the Philippines, Singapore, Sweden and Ireland get first dibs on the colourful RPG on iOS and Android. You can look forward to a fun spin-based mechanic when it comes to doing battle, as you set off on an epic quest to search for the Fabled Treasure. In Adventure Friends, you can also expect to collect plenty of adorable characters as well as put your puzzle-solving prowess to the test. There are 20 of them to add to your team and upgrade, as you explore forests and deserts in bite-sized chunks across challenging and strategic levels. ... [MORE]",
        content:
          "PikPok has announced the launch of Adventure Friends, letting players in Australia, New Zealand, Malaysia, the Philippines, Singapore, Sweden and Ireland get first dibs on the colourful RPG on iOS and Android. You can look forward to a fun spin-based mechanic when it comes to doing battle, as you set off on an epic quest to search for the Fabled Treasure. In Adventure Friends, you can also expect to collect plenty of adorable characters as well as put your puzzle-solving prowess to the test. There are 20 of them to add to your team and upgrade, as you explore forests and deserts in bite-sized chunks across challenging and strategic levels. Does that sound like it's right up your alley, and are you eager for more role-playing mechanics where you can go adventuring out into the wild? Why not take a look at our list of the to get your fill? Set off on a whimsical treasure hunt with Adventure Friends! ???? Collect cute characters! ???? Explore enchanted vaults! ???? Enjoy unique, spin-based battles! Launching now in select countries. Download & start your adventure! ???? — PikPok (@PikPokGames) If you're keen on giving the new game a go yourself or you're curious about the spin-based combat, you can download Adventure Friends on the and on the for Android devices. It's a free-to-play game with in-app purchases. You can also visit the official to stay updated on all the latest developments, or join the community of followers on for more info on the game.",
        pubDate: "2023-11-27 06:56:00",
        image_url:
          "https://media.pocketgamer.com/artwork/na-35899-1701067878/adventure-friends-ios-android-launch-cover.jpg",
        source_id: "pocketgamer",
        source_priority: 9021,
        country: ["united states of america"],
        category: ["technology"],
        language: "english",
      },
      {
        article_id: "ca84dec3f75f5deb3fdb9cee6b0b8fb0",
        title:
          "DOJ Proposes Maximum Sentence for Binance’s Zhao Amid Travel Restrictions",
        link: "https://tokenhell.com/doj-proposes-maximum-sentence-for-binances-zhao-amid-travel-restrictions/?utm_source=rss&utm_medium=rss&utm_campaign=doj-proposes-maximum-sentence-for-binances-zhao-amid-travel-restrictions",
        keywords: ["Cryptocurrency", "Cryptocurrency Regulation", "News"],
        creator: ["Donald Haymatter"],
        video_url: null,
        description:
          "As the Department of Justice (DOJ) intensifies its legal actions against Changpeng ‘CZ’ Zhao, the leader of Binance, a proposal for a decade-long incarceration term has been put forth, alongside interim travel constraints. The situation has garnered commentary from ex-SEC official John Reed Stark, who notes the potential implications for the wider crypto sphere. Travel … The post DOJ Proposes Maximum Sentence for Binance’s Zhao Amid Travel Restrictions first appeared on Tokenhell.",
        content:
          "As the Department of Justice (DOJ) intensifies its legal actions against Changpeng ‘CZ’ Zhao, the leader of , a proposal for a decade-long incarceration term has been put forth, alongside interim travel constraints. The situation has garnered commentary from ex-SEC official John Reed Stark, who notes the potential implications for the wider sphere. In recent legal showdown, the DOJ has asserted a strict position on Zhao’s travel privileges. A recent document submitted on a late weekend evening by DOJ officials contends that Zhao should be confined to the domestic borders of the United States, countering his wish to return to the UAE, his place of residence. This direct opposition stems from a judgment by Magistrate Judge Brian Tsuchida, which had previously allowed Zhao the liberty to stay in the UAE up until a fortnight prior to his court sentencing. The DOJ’s reaction to Judge Tsuchida’s leniency is one of marked surprise, pointing out that it is uncommon for an individual in Zhao’s predicament – having acknowledged guilt and facing incarceration – to be granted freedom to travel. Zhao is embroiled in serious legal allegations, having been charged with infractions of the Bank Secrecy Act. This has led to a historic settlement for , amounting to $4.3 billion, setting a record for the largest fine ever imposed by the U.S. Treasury and FinCEN. The DOJ’s filing further suggests that Zhao’s limited connections to the U.S. and his established base in the UAE present a flight risk. His status as a UAE national, acquired through special invitation, could potentially hinder extradition to the U.S. should he choose to leave. This adds layers of complexity to the already high-stakes international legal scenario that Zhao and Binance are facing. In a startling development, the DOJ’s recent documentation hints at a possible push for the harshest sentence allowable under law for Zhao, deviating from the initial expectations of a sentence ranging from one to one and a half years. This aggressive stance by the DOJ underscores the severity with which they view Zhao’s case, reflecting the serious nature of the allegations against him, especially considering his pivotal role in the industry. With the sentencing of Binance’s founder anticipated for late February 2024, which may be subject to change, the crypto community is closely watching the outcome. The decision on Zhao’s pre-sentencing travel permissions is highly anticipated. The cloud of legal questions looming over Binance and Zhao’s future adds to the uncertainty of the exchange’s trajectory. It remains unclear if the DOJ will unveil new legal tactics or further investigative findings that may lead to additional indictable offenses. In the meantime, Binance is transitioning into a new phase of leadership. Richard Teng, with his deep financial industry expertise, has been named as the new figurehead following Zhao. Teng’s tenure is expected to be instrumental as Binance steers through the intricate legal challenges and adapts to the shifting regulatory environment of the crypto industry.",
        pubDate: "2023-11-27 06:45:26",
        image_url: null,
        source_id: "tokenhell",
        source_priority: 7529493,
        country: ["united states of america"],
        category: ["top"],
        language: "english",
      },
      {
        article_id: "47b2f34325c5f7b3389e6b79c3c9be31",
        title:
          "Nikola Jokic pays Victor Wembanyama respect after first matchup: “He’s gonna change the game, 100%”",
        link: "https://www.denverpost.com/2023/11/26/victor-wembanyama-nikola-jokic-compliment-nuggets-spurs/",
        keywords: [
          "Denver Nuggets",
          "Latest Headlines",
          "NBA",
          "Sports",
          "Aaron Gordon",
          "Ball Arena",
          "Denver",
          "injuries",
          "injury",
          "Julian Strawther",
          "LeBron James",
          "Michael Malone",
          "Michael Porter",
          "More Nuggets News",
          "Nikola Jokic",
          "Serbia",
          "The Denver Post",
          "Victor Wembanyama",
        ],
        creator: ["Bennett Durando"],
        video_url: null,
        description:
          "Julian Strawther's life practically flashed before his eyes. Michael Porter Jr. was staring up at someone for once. The Nuggets got their first dose of Victor Wembanyama, the rookie who Nikola Jokic believes can transform the NBA.",
        content:
          "Michael Malone commended Julian Strawther for his courage in the face of potential humiliation. But the truth is, the No. 29 draft pick didn’t even consider the possibility of a slam dunk attempt until it was too late, when the No. 1 draft pick was rising about four feet above him. Strawther avoided getting posterized into oblivion by fouling. Victor Wembanyama wasn’t able to finish the dunk through contact, leaving Strawther nervously laughing as Ball Arena applauded him. “He was really far out, so my initial mindset was, ‘OK, I’m gonna contest the layup here,'” Strawther told The Denver Post. “But when I saw him reach his arm back … at that point it was like, ‘Whatever happens happens. I’m here. There’s no going back. There’s no teleporting out of it.'” The building continued to buzz with amazement just from watching an “almost” sensational moment. That’s how awe-inspiring the 7-foot-4 San Antonio Spurs rookie is. Denver got its first up-close look at him Sunday night in a 132-120 Nuggets win. Wembanyama, whose pre-draft hype this summer was the loudest for any NBA prospect since LeBron James, was extraordinary in defeat: 22 points, 11 rebounds, six steals and four blocks. Man if that went down… — Wemby Muse (@Wemby_Muse) “Yeah, he’s tall,” said Michael Porter Jr., the Nuggets’ 6-foot-10 sharpshooter who looked like an undersized guard when matched up against Wembanyama early in the game. “He is 19 years old. He is not getting scared of getting tired. He’s playing hard,” Nikola Jokic said. “… He doesn’t take it for granted. He’s making mistakes, which is normal. I think the media around him doesn’t help him, but he’s gonna get used to it. He’s gonna change the game, 100%. And he’s already on that path.” The Spurs (3-14) might not be threatening when Wembanyama isn’t on the floor, but the rookie alone makes them one of the NBA’s must-watch teams at a time of exceptional league-wide parity. Post entry passes were a nightmare for the Nuggets whenever he was within reach, able to poke the ball away and create turnovers from seemingly impossible angles. Once in the first quarter, Jokic did something he rarely if ever does. He passed up a layup under the basket with nobody in his way because he could sense Wembanyama lurking somewhere behind him. Asked if he made any adjustments to how he plays because of that length, Jokic said: “I didn’t, so that’s why my shot got blocked a couple times. … I didn’t. But I was supposed to.” The two-time MVP also praised Wembanyama for growing accustomed to the challenge of defending through screens and being more versatile than most players his size at the defensive end of the floor. “The guy is guarding everybody on the floor. He can literally guard one through five,” Jokic said. “And I think that’s a good thing for him, just to learn every possible spot on the floor. Just experience-wise. I’m sure for him it’s hard to chase guys around, just because he was probably playing center back in France.” Porter empathized with Wembanyama for transitioning out of success in Europe into a situation where he has lost 12 consecutive games so early in his NBA career, noting his own experience dealing with high expectations as a former No. 1 high school recruit and projected No. 1 pick prior to injuries. Porter was Denver’s starting four with Aaron Gordon out due to a heel injury Sunday, and his length is the most comparable frame to Wembanyama that the Nuggets have. It led to Porter trying out an unusual experience: guarding an opponent significantly taller than him. “I think (I approach it) similar to what a guy would do to me who’s shorter than me,” Porter said. “It bothers me when defenders try to get underneath me and really just be physical. And I feel like being a 6-10 dude, you don’t usually get to do that on the defensive side. But when you’re playing someone who’s 7-4, you can use that same tactic against them.” Wembanyama scored San Antonio’s first seven points, but the Nuggets eventually slowed down his offense a bit and kept him to 7-for-17 from the field. Denver’s own rookie Strawther was determined to make him shoot free throws to collect his points, even when Strawther’s life was flashing before his eyes in the second half. “A lot of guys are getting out of the way,” Malone said. “People have a phobia of being on SportsCenter, getting dunked on. Victor Wembanyama, he’s gonna dunk on a lot of people. That guy is a hell of a player. He’s only going to get better. I think Julian having the balls to step in and take a foul, and not get out of the way because ‘I don’t want to get dunked on’ (is a positive).” Strawther will happily accept the credit. “Make him earn ’em on the line,” he said, “and everybody’s happy.”",
        pubDate: "2023-11-27 06:38:47",
        image_url:
          "https://www.denverpost.com/wp-content/uploads/2023/11/AP23331063368685-1.jpg?w=1400px&strip=all",
        source_id: "denverpost",
        source_priority: 3130,
        country: ["united states of america"],
        category: ["sports"],
        language: "english",
      },
      {
        article_id: "e9d9b00a1599c690ac08beb034c9a0ae",
        title: "Sealand: The micronation carving its own path",
        link: "https://www.cbsnews.com/video/sealand-the-micronation-carving-its-own-path/",
        keywords: null,
        creator: null,
        video_url: null,
        description:
          "This week on 60 Minutes, Jon Wertheim reported on Sealand, the tiny principality fueled by humor and determination. But first he had to get there.",
        content:
          "Sealand: The micronation carving its own path This week on 60 Minutes, Jon Wertheim reported on Sealand, the tiny principality fueled by humor and determination. But first he had to get there.",
        pubDate: "2023-11-27 06:23:58",
        image_url:
          "https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/27/1eb988b7-0d4d-4b03-af39-cfd10a4bcb22/thumbnail/60x60/9803e7ce7ecd85a5477c69a7aed53595/1126-60minutes-sealand-ot-2480166-640x360.jpg?v=5659e73acd91751548aa89950cf015b0",
        source_id: "dfwcbslocal",
        source_priority: 237564,
        country: ["united states of america"],
        category: ["top"],
        language: "english",
      },
      {
        article_id: "00c7870ca9fe274bd81fe9e3e0d66bd8",
        title: "Creatures of Sonaria codes for revive and growth tokens",
        link: "https://www.pocketgamer.com/creatures-of-sonaria/redeem-codes/",
        keywords: ["How To"],
        creator: null,
        video_url: null,
        description:
          "Updated on: November 27, 2023 - Checked for new codes Creatures of Sonaria has long been listed as one of the best-looking Roblox games. Featuring enticing creature-catching and breeding capabilities, you can groom a baby creature right from Day 1 by surviving tough landscapes, finding food and water, and exploring the wilderness. ... [MORE]",
        content:
          "Creatures of Sonaria has long been listed as one of the . Featuring enticing creature-catching and breeding capabilities, you can groom a baby creature right from Day 1 by surviving tough landscapes, finding food and water, and exploring the wilderness. We’ve dug up numerous helpful that are shared by the developers to promote the game. These codes are quite helpful for any player, regardless of your level or progression. They bring a ton of freebies to the table, aiding you on your adventures. There is a vast number of Roblox codes that we have collected. In case you're playing other Roblox experiences, you can try redeeming these , , and , to name a few. ACTIVE CREATURES OF SONARIA CODES - 2 revive tokens - 2 max growth tokens EXPIRED CODES How to redeem Creature of Sonaria codes? Open in Roblox, and log in to your account. Go to the “Game Menu” option located on the top right-hand side of the screen. Once the menu opens, you can see a “Gift Bag” icon located on the bottom left-hand side of the screen. This is the Redeem Code menu. Enter any of the above Creatures of Sonaria codes into the blank text box. Click on the “Redeem code” button. You will get the rewards instantly. How to get more codes?",
        pubDate: "2023-11-27 06:21:00",
        image_url:
          "https://media.pocketgamer.com/artwork/ra-95715-1696505071/creaturesofsonaria-redeemcodes-header-.jpg",
        source_id: "pocketgamer",
        source_priority: 9021,
        country: ["united states of america"],
        category: ["technology"],
        language: "english",
      },
      {
        article_id: "d2024e0d69b50f2e7027c1dd36d4dfd1",
        title:
          "Cosmos Hub Votes to Cap ATOM Inflation at 10%, Lowering Staking APR",
        link: "https://tokenhell.com/cosmos-hub-votes-to-cap-atom-inflation-at-10-lowering-staking-apr/?utm_source=rss&utm_medium=rss&utm_campaign=cosmos-hub-votes-to-cap-atom-inflation-at-10-lowering-staking-apr",
        keywords: [
          "Blockchain",
          "Cryptocurrency",
          "DeFi",
          "On-chain Data / Analysis",
          "Staking",
        ],
        creator: ["Donald Haymatter"],
        video_url: null,
        description:
          "On November 26, the Cosmos Hub community voted to approve a proposal significantly reducing the maximum inflation rate of its native cryptocurrency, ATOM, from 20% to a cap of 10%. Cosmos Hub Votes to Reduce ATOM Inflation and Staking APR On November 26, the Cosmos Hub community passed a significant proposal to lower the maximum … The post Cosmos Hub Votes to Cap ATOM Inflation at 10%, Lowering Staking APR first appeared on Tokenhell.",
        content:
          "On November 26, the Cosmos Hub community voted to approve a proposal significantly reducing the maximum inflation rate of its native , ATOM, from 20% to a cap of 10%. On November 26, the Cosmos Hub community passed a significant proposal to lower the maximum inflation rate of its native cryptocurrency, ATOM. This decision will decrease the maximum inflation parameter from 20% to 10%, directly impacting the current inflation rate of ATOM, which stands at approximately 14%. Additionally, this change will affect the Annual Percentage Rate (APR) for , reducing it from an estimated 19% to about 13.4%. The voting process for this proposal was closely contested, with 41.1% of votes in favor and 38.5% against. The proposal, which initially appeared likely to fail, witnessed a dramatic shift at the eleventh hour. A sudden influx of votes and some validators changing their positions resulted in a narrow victory for the reduction in inflation and APR. This move comes as part of a long-standing discussion within the Cosmos community to refine the inflation schedule for ATOM. The cryptocurrency currently uses a dynamic inflation model, with rates oscillating between a minimum of 7% and a maximum of 20%, based on the proportion of ATOMs staked. Under this system, if the staking ratio falls below two-thirds, the inflation rate increases, thereby encouraging more staking to enhance network security. Continuing with the recent developments in the Cosmos Hub, the bonded ratio for ATOM currently stands at 65.7%, which is slightly below the two-thirds threshold necessary to stabilize the inflation rate. As a result, the inflation rate has been gradually increasing. This situation is governed by a dynamic formula that will continue to drive the inflation rate upward unless a greater proportion of ATOMs are staked. The recently approved proposal addresses this issue by aiming to make ATOM’s future supply more sustainable and predictable. A key consideration in this adjustment is its potential impact on the Atom Economic Zone (AEZ) and the burgeoning ( ) ecosystem within the Cosmos network. By lowering the inflation rate of ATOM, the proposal seeks to bolster ATOM’s attractiveness as a security provider for consumer chains that are part of the Cosmos Hub. This move is especially critical given the expansion of the AEZ, as evidenced by the growing prominence of projects like Neutron and Stride within the Cosmos network. The recent proposal by the Cosmos Hub not only aims to adjust ATOM’s inflation but also underscores the need to ensure optimal network security. Historically, ATOM has maintained a higher inflation rate than its counterparts, which has presented challenges in building a strong monetary premium. Research from Blockworks indicates that the Cosmos Hub might have been overcompensating for security, a concern that this proposal seeks to address by reducing the inflation rate to alleviate the constant sell pressure on ATOM’s . Another critical aspect of the proposal involves the costs incurred by validators. Detailed analyses within the proposal consider different scenarios for validators, particularly those operating multiple consumer chains. With the proposed reduction in inflation, validators’ profitability is expected to be affected. The document provides insights into how these changes might influence validators financially, taking into account factors like commission rates and the number of consumer chains they manage. Significantly, this proposal is just the first in a series of three planned adjustments. Future proposals are anticipated to focus on lowering the minimum inflation parameter and increasing the inflation change parameter, which dictates how rapidly the inflation rate can vary on a per-block basis. These cumulative proposals are designed to refine the inflation mechanisms of ATOM, thereby contributing to a more sustainable and secure ecosystem for the Cosmos network. This strategic recalibration is essential for the network’s long-term health and its positioning within the wider cryptocurrency market.",
        pubDate: "2023-11-27 06:19:05",
        image_url: null,
        source_id: "tokenhell",
        source_priority: 7529493,
        country: ["united states of america"],
        category: ["top"],
        language: "english",
      },
      {
        article_id: "9d0f0716dae01bc4b92b5f3e4a766099",
        title: "Paradigm Criticizes Ethereum’s Layer-2 Network Blast Launch",
        link: "https://tokenhell.com/paradigm-criticizes-ethereums-layer-2-network-blast-launch/?utm_source=rss&utm_medium=rss&utm_campaign=paradigm-criticizes-ethereums-layer-2-network-blast-launch",
        keywords: ["Blockchain", "Ethereum (ETH)", "News", "Web3"],
        creator: ["Andrew Richard"],
        video_url: null,
        description:
          "Blast’s Rollout Criticized Since its announcement a few days ago, Blast, an Ethereum scaling solution developed by NFT marketplace Blur, has seen over $530 million worth of funds locked up by users looking to receive rewards and yields. However, the blockchain’s rollout has been criticized by many, including one of its investors, Paradigm. Yesterday, General … The post Paradigm Criticizes Ethereum’s Layer-2 Network Blast Launch first appeared on Tokenhell.",
        content:
          "Since its announcement a few days ago, Blast, an scaling solution developed by marketplace Blur, has seen over $530 million worth of funds locked up by users looking to receive rewards and yields. However, the ’s rollout has been criticized by many, including one of its investors, Paradigm. Yesterday, General Partner at Paradigm, Dan Robinson, took to X to slam the Blast launch. While he said he was excited about the future of the project, Robinson disapproved of the manner in which Blast was launched. He explained that Paradigm leadership was dissatisfied with the decision to roll out the bridge before the layer-2 network. It is worth mentioning that Blast isn’t live yet. So, early users have been depositing their funds into the project’s bridge, which is expected to connect and Blast. The committed funds cannot be accessed until the scaling solution goes live in February 2024. Given the rising cases of bridge attacks, Robinson and Paradigm have expressed concerns over the safety of user funds. Moreover, some crypto enthusiasts have labeled Blast as a “pure Ponzi scheme,” arguing that its referral and reward model is suspicious. Meanwhile, Blur and Blast co-founder Tieshun Roquerre has refuted claims that Blast is a shell game. In a long thread on X, he said yesterday he understood that the high yield promised by the layer-2 network felt too good to be true but claimed that his team was committed to ensuring Blast users receive high returns. Moreover, Roquerre wrote that Paradigm, the venture capital firm that injected $20 million into Blast a few months ago, had no say in the Layer-2 network’s launch plans. A few hours after the Blur co-founder had posted his thread, Robinson wrote another X post praising Roquerre for launching a marketplace that has disrupted the market. He then said Paradigm had already shared its concerns with the Blast team, which was willing to engage. Like Blur, Blast has been encouraging users to commit their funds with a promise of token in the future. When the layer-2 network goes live, users will be allowed to stake and Ethereum to earn yield.",
        pubDate: "2023-11-27 06:12:21",
        image_url: null,
        source_id: "tokenhell",
        source_priority: 7529493,
        country: ["united states of america"],
        category: ["top"],
        language: "english",
      },
    ],
    nextPage: "1701065541147324338",
  },
};
