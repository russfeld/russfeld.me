# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-10-02T19:51:03.500Z
> Files: 501 tracked | Anatomy hits: 0 | Misses: 0

> Project structure index. Auto-maintained by OpenWolf hooks and daemon.
> Run `openwolf scan` to generate, or wait for the first Claude Code session.
> Status: Pending initial scan

## ./

- `.gitignore` — Git ignore rules (~50 tok)
- `.gitmodules` (~59 tok)
- `config.toml` (~880 tok)
- `deploy.sh` (~16 tok)
- `Dockerfile` — Docker container definition (~58 tok)
- `LICENSE` — Project license (~100 tok)
- `russ.feldhausen.me.conf` (~406 tok)
- `russfeld.me.conf` (~399 tok)
- `todo2.txt` (~1348 tok)

## .devcontainer/

- `compose.yml` — Docker Compose: 2 services (~456 tok)
- `devcontainer-lock.json` (~275 tok)
- `devcontainer.json` — For format details, see https://aka.ms/devcontainer.json. For config options, see the (~542 tok)
- `Dockerfile` — Docker container definition (~158 tok)

## .github/

- `dependabot.yml` (~80 tok)

## .github/workflows/

- `docker-image.yml` — CI: Docker Image CI (~400 tok)

## archetypes/

- `default.md` (~21 tok)
- `recipe.md` — imagecredit: https://placekitten.com/600/800 # URL to image source page, website, or creator (~847 tok)

## assets/js/

- `jquery.flexslider-min.js` — e: a, i (~6597 tok)
- `list-toggle.js` — resize: showList, showGrid (~330 tok)

## assets/scss/

- `hugo-toc.scss` — Hugo {{ .TableOfContents }} (~260 tok)
- `tocbot.scss` — Styles: 6 rules (~133 tok)

## assets/scss/hyde-hyde/

- `_base.scss` — Styles: 4 rules (~762 tok)
- `_list.scss` — for the list of posts (~885 tok)
- `_post.scss` — Styles: 13 rules, 1 media queries (~731 tok)
- `_sidebar.scss` — Styles: 11 rules (~376 tok)
- `_taxonomies.scss` — Styles: 5 rules (~388 tok)
- `_variables.scss` (~843 tok)

## assets/scss/poole/

- `_base.scss` — Body resets (~333 tok)
- `_layout.scss` — Layout (~69 tok)
- `_posts.scss` — Posts and pages (~286 tok)

## content/

- `_index.md` (~632 tok)

## content/about/

- `_index.md` — My Background (~2254 tok)
- `cv.md` — Education (~8179 tok)
- `projects.md` — 2023 (~1174 tok)

## content/areas/

- `_index.md` (~8 tok)

## content/blog/

- `_index.md` (~70 tok)
- `2016-01-07-book-reviews-2015.md` — Introverts Unite (~2252 tok)
- `2016-11-09-political-discourse.md` (~1156 tok)
- `2016-12-09-culinary-adventures.md` (~415 tok)
- `2017-03-11-book-reviews-2016.md` — Flying Through the Mists (~2481 tok)
- `2017-03-12-homemade-hamburgers.md` (~390 tok)
- `2017-07-10-podcasts.md` (~1067 tok)
- `2018-01-05-book-reviews-2017.md` — Life before death. Strength before weakness. Journey before destination (~5786 tok)
- `2018-07-03-yellowstone-vacation.md` — Day 1 - Headed North (~768 tok)
- `2019-08-11-book-reviews-2018.md` — Book Club Picks (~8392 tok)
- `2020-06-18-dnd-orc-trials.md` — Setting: Orc Tribe (~4033 tok)
- `2021-08-24-book-reviews-2019.md` — Sequels (~5865 tok)
- `2021-08-25-book-reviews-2020.md` — Series (~3441 tok)
- `2021-11-12-new-infrastructure.md` (~171 tok)
- `2023-01-30-book-reviews-2021.md` — Fiction (~1746 tok)
- `2023-01-31-book-reviews-2022.md` — Fiction (~1437 tok)
- `2026-01-10-book-reviews-2023-2025.md` — Fiction (~4677 tok)

## content/categories/

- `_index.md` (~9 tok)

## content/cuisines/

- `_index.md` (~7 tok)

## content/projects/

- `_index.md` (~56 tok)
- `beattie.md` (~213 tok)
- `euler.md` (~195 tok)
- `mdcf.md` (~442 tok)

## content/projects/advising/

- `index.md` — Declares schedules (~294 tok)

## content/projects/openhouse/

- `creativity.html` — CIS 190 Spring 2015 (~3547 tok)
- `index.md` (~2597 tok)
- `intro.html` — CIS Open House 2014 (~2354 tok)
- `intro2015.html` — CIS Open House 2014 (~2534 tok)

## content/projects/recording/

- `education.json` (~14533 tok)
- `index.md` — Layout & Lighting (~3595 tok)

## content/projects/rubiks/

- `index.md` (~593 tok)

## content/recipes/

- `_index.md` (~112 tok)
- `basmati-rice.md` (~781 tok)
- `better-bolognese.md` (~778 tok)
- `bolognese.md` (~522 tok)
- `brioche-burger-buns.md` (~597 tok)
- `chili.md` (~760 tok)
- `cornish-pasties.md` (~860 tok)
- `creamy-coleslaw.md` (~394 tok)
- `homemade-mayonnaise.md` (~485 tok)
- `homemade-pasta.md` (~851 tok)
- `pastry-dough.md` (~563 tok)
- `peppernuts.md` (~996 tok)
- `pork-carnitas.md` (~401 tok)
- `refrigerator-pickles.md` (~541 tok)
- `smashburgers.md` (~515 tok)
- `tuna-salad.md` (~370 tok)
- `turtle-cheesecake.md` (~640 tok)
- `twice-fried-fries.md` (~642 tok)
- `updated-bolognese.md` — imagecredit: https://placekitten.com/600/800 # URL to image source page, website, or creator (~822 tok)
- `verde-chicken-enchiladas.md` (~1142 tok)

## content/sections/

- `_index.md` (~9 tok)

## content/tags/

- `_index.md` (~6 tok)

## content/talks/

- `_index.md` (~97 tok)

## content/talks/continuouslearningcs2020/

- `index.md` (~159 tok)

## content/talks/devops-cis640-s22/

- `index.md` (~340 tok)

## content/talks/haveabyte2019/

- `index.md` — Declares sizes (~2385 tok)

## content/talks/lecturetime2021/

- `index.md` (~98 tok)
- `slides.html` — Lecture Time (~1661 tok)

## content/talks/oersummit2022/

- `index.md` (~275 tok)

## content/teaching/

- `_index.md` (~81 tok)

## content/teaching/cis115fall2013/

- `index.md` — Class Content (~1060 tok)

## content/teaching/cis115fall2014/

- `index.md` — Class Content (~1205 tok)

## content/teaching/cis115fall2015/

- `index.md` — Declares progresses (~1226 tok)

## content/teaching/cis115fall2016/

- `index.md` — Declares progresses (~1689 tok)

## content/teaching/cis115fall2016scholars/

- `index.md` — Declares progresses (~1408 tok)

## content/teaching/cis115spring2013/

- `index.md` — Declares progresses (~792 tok)

## content/teaching/cis115spring2014/

- `index.md` — Declares progresses (~982 tok)

## content/teaching/cis115spring2015/

- `index.md` — Declares progresses (~1053 tok)

## content/teaching/cis115spring2016/

- `index.md` — Declares progresses (~1082 tok)

## content/teaching/cis115spring2017/

- `index.md` — Declares progresses (~1186 tok)

## content/teaching/cis190spring2016/

- `index.md` — Declares progresses (~241 tok)

## content/teaching/cis190spring2017/

- `index.md` — Declares progresses (~242 tok)

## content/teaching/cis225fall2013/

- `index.md` — Declares progresses (~887 tok)

## content/teaching/cis225fall2014/

- `index.md` — Declares progresses (~886 tok)

## content/teaching/cis225fall2015/

- `index.md` — Declares progresses (~4226 tok)

## content/teaching/cis225fall2016/

- `index.md` — Declares progresses (~4708 tok)

## content/teaching/cis527online/

- `index.md` (~96 tok)

## content/teaching/cis527spring2014/

- `index.md` — Declares progresses (~765 tok)

## content/teaching/cis527spring2015/

- `index.md` — Declares progresses (~883 tok)

## content/teaching/cis527spring2016/

- `index.md` — Declares progresses (~4567 tok)

## content/teaching/cis527spring2017/

- `index.md` — Declares progresses (~4509 tok)

## layouts/

- `index.html` (~557 tok)

## layouts/_default/

- `baseof.html` (~89 tok)
- `list.html` (~60 tok)
- `single.html` (~90 tok)

## layouts/about/

- `list.html` (~90 tok)
- `single.html` (~90 tok)

## layouts/partials/

- `header.html` (~199 tok)
- `sidebar.html` (~137 tok)

## layouts/partials/header/

- `meta.html` — {{ $.Scratch.Get "theTitle" | safeHTML }} (~276 tok)
- `styles.html` (~291 tok)
- `web-fonts.html` (~99 tok)

## layouts/partials/homepage/

- `posts-grid.html` (~254 tok)
- `posts-list.html` (~210 tok)

## layouts/partials/page-list/

- `content.html` (~121 tok)
- `footer.html` (~109 tok)
- `posts-list.html` (~483 tok)

## layouts/partials/page-single/

- `chowdown-meta.html` (~810 tok)
- `chowdown.html` (~622 tok)
- `content.html` (~462 tok)
- `footer.html` (~379 tok)
- `post-meta.html` (~429 tok)
- `recipe-meta.html` (~468 tok)
- `recipe.html` (~462 tok)

## layouts/partials/sidebar/

- `about.html` (~246 tok)
- `copyright.html` (~143 tok)
- `social.html` (~734 tok)

## layouts/partials/tag-list/

- `cloud.html` (~57 tok)
- `content.html` (~59 tok)
- `footer.html` (~50 tok)
- `tagcloud.html` (~87 tok)
- `tags-list.html` (~370 tok)

## layouts/recipes/

- `chowdown.html` (~90 tok)
- `single.html` (~90 tok)

## layouts/tags/

- `terms.html` (~62 tok)

## layouts/taxonomy/

- `list.html` (~62 tok)

## russ.feldhausen.me/

- `index.html` (~49 tok)

## static/assets/oldimpress/cis115fall2013/

- `lecture1.html` — CIS 115 Fall 2013 Lecture 1 (~2487 tok)
- `lecture10.html` — CIS 115 Fall 2013 Lecture 10 (~4408 tok)
- `lecture11.html` — CIS 115 Fall 2013 Lecture 11 (~5006 tok)
- `lecture13.html` — CIS 115 Fall 2013 Lecture 13 (~2790 tok)
- `lecture14.html` — CIS 115 Fall 2013 Lecture 14 (~3640 tok)
- `lecture15.html` — CIS 115 Fall 2013 Lecture 15 (~3196 tok)
- `lecture16.html` — CIS 115 Fall 2013 Lecture 16 (~3630 tok)
- `lecture17.html` — CIS 115 Fall 2013 Lecture 17 (~3907 tok)
- `lecture18.html` — CIS 115 Fall 2013 Lecture 18 (~4225 tok)
- `lecture2.html` — CIS 115 Fall 2013 Lecture 2 (~3223 tok)
- `lecture21.html` — CIS 115 Fall 2013 Lecture 21 (~3351 tok)
- `lecture23.html` — CIS 115 Fall 2013 Lecture 23 (~7395 tok)
- `lecture24.html` — CIS 115 Fall 2013 Lecture 24 (~4383 tok)
- `lecture26.html` — CIS 115 Fall 2013 Lecture 26 (~5540 tok)
- `lecture28.html` — CIS 115 Fall 2013 Lecture 28 (~4250 tok)
- `lecture3.html` — CIS 115 Fall 2013 Lecture 3 (~2850 tok)
- `lecture30.html` — CIS 115 Fall 2013 Lecture 30 (~2347 tok)
- `lecture4.html` — CIS 115 Fall 2013 Lecture 4 (~8612 tok)
- `lecture5.html` — CIS 115 Fall 2013 Lecture 5 (~5341 tok)
- `lecture6.html` — CIS 115 Fall 2013 Lecture 6 (~3386 tok)
- `lecture7.html` — CIS 115 Fall 2013 Lecture 7 (~4737 tok)
- `lecture8.html` — CIS 115 Fall 2013 Lecture 8 (~11006 tok)
- `lecture9.html` — CIS 115 Fall 2013 Lecture 9 (~4488 tok)
- `syllabus.html` — CIS 115 Fall 2013 Syllabus Overview (~1742 tok)

## static/assets/oldimpress/cis115fall2014/

- `_index.md` — Class Content (~993 tok)
- `lecture1.html` — CIS 115 Fall 2014 Lecture 1 (~2553 tok)
- `lecture10.html` — CIS 115 Fall 2014 Lecture 10 (~7870 tok)
- `lecture11.html` — CIS 115 Fall 2014 Lecture 11 (~5809 tok)
- `lecture13.html` — CIS 115 Fall 2014 Lecture 13 (~3570 tok)
- `lecture14.html` — CIS 115 Fall 2014 Lecture 14 (~3976 tok)
- `lecture15.html` — CIS 115 Fall 2014 Lecture 15 (~4073 tok)
- `lecture17.html` — CIS 115 Fall 2014 Lecture 17 (~4000 tok)
- `lecture2.html` — CIS 115 Fall 2014 Lecture 2 (~3291 tok)
- `lecture25.html` — CIS 115 Fall 2014 Lecture 25 (~3405 tok)
- `lecture26.html` — CIS 115 Fall 2014 Lecture 26 (~4336 tok)
- `lecture27.html` — CIS 115 Fall 2014 Lecture 27 (~7396 tok)
- `lecture3.html` — CIS 115 Fall 2014 Lecture 3 (~2919 tok)
- `lecture30.html` — CIS 115 Fall 2014 Lecture 30 (~2339 tok)
- `lecture4.html` — CIS 115 Fall 2014 Lecture 4 (~8610 tok)
- `lecture5.html` — CIS 115 Fall 2014 Lecture 5 (~5335 tok)
- `lecture6.html` — CIS 115 Fall 2014 Lecture 6 (~3385 tok)
- `lecture7.html` — CIS 115 Fall 2014 Lecture 7 (~4806 tok)
- `lecture8.html` — CIS 115 Fall 2014 Lecture 8 (~12250 tok)
- `lecture9.html` — CIS 115 Fall 2014 Lecture 9 (~6294 tok)
- `syllabus.html` — CIS 115 Fall 2014 Syllabus Overview (~2270 tok)

## static/assets/oldimpress/cis115fall2015/

- `_index.md` — Declares progresses (~1022 tok)

## static/assets/oldimpress/cis115fall2015/0syllabus/

- `index.html` — CIS 115 Syllabus Overview (~2389 tok)

## static/assets/oldimpress/cis115fall2015/10hci/

- `index.html` — CIS 115 - Human Computer Interaction (~5364 tok)

## static/assets/oldimpress/cis115fall2015/11internethistory/

- `index.html` — CIS 115 - History of the Internet (~3695 tok)

## static/assets/oldimpress/cis115fall2015/12softwareengg/

- `index.html` — CIS 115 - Software Engineering (~3540 tok)

## static/assets/oldimpress/cis115fall2015/17internettech/

- `index.html` — CIS 115 - How the Internet Works (~4024 tok)

## static/assets/oldimpress/cis115fall2015/18web/

- `index.html` — CIS 115 - Programming for the Web (~4278 tok)

## static/assets/oldimpress/cis115fall2015/1whatiscs/

- `index.html` — CIS 115 - What is Computing Science? (~2628 tok)

## static/assets/oldimpress/cis115fall2015/20cryptography/

- `index.html` — CIS 115 - Cryptography (~4424 tok)

## static/assets/oldimpress/cis115fall2015/21informatics/

- `lecture18.html` — CIS 115 Spring 2015 Lecture 18 (~2801 tok)
- `lecture28.html` — CIS 115 Spring 2015 Lecture 28 (~7285 tok)

## static/assets/oldimpress/cis115fall2015/22ai/

- `index.html` — CIS 115 - Artificial Intelligence (~5186 tok)

## static/assets/oldimpress/cis115fall2015/23graphics/

- `index.html` — CIS 115 - Computer Graphics (~5009 tok)

## static/assets/oldimpress/cis115fall2015/25robotics/

- `index.html` — CIS 115 - Robotics (~4563 tok)

## static/assets/oldimpress/cis115fall2015/27cybersecurity/

- `index.html` — CIS 115 - Cyber Security (~7286 tok)

## static/assets/oldimpress/cis115fall2015/2teams/

- `index.html` — CIS 115 - Teams, Projects and Success (~3350 tok)

## static/assets/oldimpress/cis115fall2015/30future/

- `index.html` — CIS 115 - The Future (~2396 tok)

## static/assets/oldimpress/cis115fall2015/3early/

- `index.html` — CIS 115 - Early Computing Machines (~2848 tok)

## static/assets/oldimpress/cis115fall2015/4boolean/

- `index.html` — CIS 115 - Bits and Boolean Algebra (~8807 tok)

## static/assets/oldimpress/cis115fall2015/5programming/

- `index.html` — CIS 115 - Programming (~5902 tok)

## static/assets/oldimpress/cis115fall2015/6universal/

- `index.html` — CIS 115 - Universal Computers (~3556 tok)

## static/assets/oldimpress/cis115fall2015/7algorithms/

- `index.html` — CIS 115 - Algorithms (~4868 tok)

## static/assets/oldimpress/cis115fall2015/8encoding/

- `index.html` — CIS 115 - Encoding Data (~12334 tok)

## static/assets/oldimpress/cis115fall2015/9embedded/

- `index.html` — CIS 115 - Embedded Systems, Computer Architecture & Finite State Machines (~6407 tok)

## static/assets/oldimpress/cis115fall2016/

- `_index.md` — Declares progresses (~1451 tok)
- `scholars.md` — Declares progresses (~1170 tok)

## static/assets/oldimpress/cis115fall2016/0Ssyllabus/

- `index.html` — CIS 115 Syllabus Overview (~2522 tok)

## static/assets/oldimpress/cis115fall2016/0syllabus/

- `index.html` — CIS 115 Syllabus Overview (~2701 tok)

## static/assets/oldimpress/cis115fall2016/10hci/

- `index.html` — CIS 115 - Human Computer Interaction (~5335 tok)

## static/assets/oldimpress/cis115fall2016/11internethistory/

- `index.html` — CIS 115 - History of the Internet (~3711 tok)

## static/assets/oldimpress/cis115fall2016/12hpc/

- `index.html` — CIS 115 - High Performance Computing (~1107 tok)

## static/assets/oldimpress/cis115fall2016/13internettech/

- `index.html` — CIS 115 - How the Internet Works (~4370 tok)

## static/assets/oldimpress/cis115fall2016/14web/

- `index.html` — CIS 115 - Programming for the Web (~4606 tok)

## static/assets/oldimpress/cis115fall2016/15web/

- `index.html` — CIS 115 - Interactive Web Programming (~3800 tok)

## static/assets/oldimpress/cis115fall2016/16softwareengg/

- `index.html` — CIS 115 - Software Engineering (~3794 tok)

## static/assets/oldimpress/cis115fall2016/1whatiscs/

- `index.html` — CIS 115 - What is Computing Science? (~2690 tok)

## static/assets/oldimpress/cis115fall2016/20graphics/

- `index.html` — CIS 115 - Computer Graphics (~5190 tok)

## static/assets/oldimpress/cis115fall2016/21inforetrieve/

- `index.html` — CIS 115 - Searching & Information Retrieval (~6782 tok)

## static/assets/oldimpress/cis115fall2016/22cryptography/

- `index.html` — CIS 115 - Cryptography (~4509 tok)

## static/assets/oldimpress/cis115fall2016/24ai/

- `index.html` — CIS 115 - Artificial Intelligence (~5179 tok)

## static/assets/oldimpress/cis115fall2016/25compresserror/

- `index.html` — CIS 115 - Compressions & Error Checking (~5137 tok)

## static/assets/oldimpress/cis115fall2016/26cybersecurity/

- `index.html` — CIS 115 - Cyber Security (~7392 tok)

## static/assets/oldimpress/cis115fall2016/27informatics/

- `index.html` — CIS 115 - Big Data & Informatics (~3237 tok)
- `lecture18.html` — CIS 115 Spring 2015 Lecture 18 (~2801 tok)
- `lecture28.html` — CIS 115 Spring 2015 Lecture 28 (~7377 tok)

## static/assets/oldimpress/cis115fall2016/28robotics/

- `index.html` — CIS 115 - Robotics (~4574 tok)

## static/assets/oldimpress/cis115fall2016/2teams/

- `index.html` — CIS 115 - Teams, Projects and Success (~3362 tok)

## static/assets/oldimpress/cis115fall2016/30future/

- `index.html` — CIS 115 - The Future (~2518 tok)

## static/assets/oldimpress/cis115fall2016/3early/

- `index.html` — CIS 115 - Early Computing Machines (~2876 tok)

## static/assets/oldimpress/cis115fall2016/4boolean/

- `index.html` — CIS 115 - Bits and Boolean Algebra (~8520 tok)

## static/assets/oldimpress/cis115fall2016/5programming/

- `index.html` — CIS 115 - Programming (~5988 tok)

## static/assets/oldimpress/cis115fall2016/6universal/

- `index.html` — CIS 115 - Universal Computers (~3502 tok)

## static/assets/oldimpress/cis115fall2016/7algorithms/

- `index.html` — CIS 115 - Algorithms (~4798 tok)

## static/assets/oldimpress/cis115fall2016/8encoding/

- `index.html` — CIS 115 - Encoding Data (~12272 tok)

## static/assets/oldimpress/cis115fall2016/9embedded/

- `index.html` — CIS 115 - Embedded Systems, Computer Architecture & Finite State Machines (~6386 tok)

## static/assets/oldimpress/cis115spring2013/

- `lecture11videos.html` (~427 tok)
- `lecture12videos.html` (~135 tok)
- `lecture15videos.html` (~146 tok)
- `lecture1videos.html` (~140 tok)
- `lecture2videos.html` (~277 tok)
- `lecture3videos.html` (~139 tok)

## static/assets/oldimpress/cis115spring2014/

- `lecture1.html` — CIS 115 Spring 2014 Lecture 1 (~2488 tok)
- `lecture11.html` — CIS 115 Spring 2014 Lecture 11 (~4120 tok)
- `lecture12.html` — CIS 115 Spring 2014 Lecture 12 (~3594 tok)
- `lecture13.html` — CIS 115 Spring 2014 Lecture 13 (~3994 tok)
- `lecture14.html` — CIS 115 Spring 2014 Lecture 14 (~4300 tok)
- `lecture16.html` — CIS 115 Spring 2014 Lecture 16 (~3536 tok)
- `lecture17.html` — CIS 115 Spring 2014 Lecture 17 (~6268 tok)
- `lecture2.html` — CIS 115 Spring 2014 Lecture 2 (~3265 tok)
- `lecture22.html` — CIS 115 Spring 2014 Lecture 22 (~4703 tok)
- `lecture23.html` — CIS 115 Spring 2014 Lecture 23 (~4074 tok)
- `lecture25.html` — CIS 115 Spring 2014 Lecture 25 (~7408 tok)
- `lecture27.html` — CIS 115 Spring 2014 Lecture 27 (~4303 tok)
- `lecture28.html` — CIS 115 Spring 2014 Lecture 28 (~2338 tok)
- `lecture3.html` — CIS 115 Spring 2014 Lecture 3 (~2846 tok)
- `lecture4.html` — CIS 115 Spring 2014 Lecture 4 (~8624 tok)
- `lecture5.html` — CIS 115 Spring 2014 Lecture 5 (~5339 tok)
- `lecture6.html` — CIS 115 Spring 2014 Lecture 6 (~3405 tok)
- `lecture7.html` — CIS 115 Spring 2014 Lecture 7 (~4739 tok)
- `lecture8.html` — CIS 115 Spring 2014 Lecture 8 (~11878 tok)
- `lecture9.html` — CIS 115 Fall 2013 Lecture 9 (~6172 tok)
- `syllabus.html` — CIS 115 Spring 2014 Syllabus Overview (~1807 tok)

## static/assets/oldimpress/cis115spring2015/

- `lecture1.html` — CIS 115 Spring 2015 Lecture 1 (~2554 tok)
- `lecture11.html` — CIS 115 Spring 2015 Lecture 11 (~5643 tok)
- `lecture12.html` — CIS 115 Spring 2015 Lecture 12 (~4236 tok)
- `lecture13.html` — CIS 115 Spring 2015 Lecture 13 (~3568 tok)
- `lecture14.html` — CIS 115 Spring 2015 Lecture 14 (~3970 tok)
- `lecture15.html` — CIS 115 Spring 2015 Lecture 15 (~4208 tok)
- `lecture17.html` — CIS 115 Spring 2015 Lecture 17 (~7513 tok)
- `lecture18.html` — CIS 115 Spring 2015 Lecture 18 (~2823 tok)
- `lecture19.html` — CIS 115 Spring 2015 Lecture 19 (~4851 tok)
- `lecture2.html` — CIS 115 Spring 2015 Lecture 2 (~3216 tok)
- `lecture24.html` — CIS 115 Spring 2015 Lecture 24 (~7354 tok)
- `lecture26.html` — CIS 115 Spring 2015 Lecture 26 (~3428 tok)
- `lecture27.html` — CIS 115 Spring 2015 Lecture 27 (~4338 tok)
- `lecture28.html` — CIS 115 Spring 2015 Lecture 28 (~7307 tok)
- `lecture3.html` — CIS 115 Spring 2015 Lecture 3 (~2771 tok)
- `lecture30.html` — CIS 115 Spring 2015 Lecture 30 (~2309 tok)
- `lecture4.html` — CIS 115 Spring 2015 Lecture 4 (~8747 tok)
- `lecture5.html` — CIS 115 Fall 2014 Lecture 5 (~5298 tok)
- `lecture6.html` — CIS 115 Spring 2015 Lecture 6 (~3384 tok)
- `lecture7.html` — CIS 115 Spring 2015 Lecture 7 (~4808 tok)
- `lecture8.html` — CIS 115 Spring 2015 Lecture 8 (~12251 tok)
- `lecture9.html` — CIS 115 Spring 2015 Lecture 9 (~6333 tok)
- `syllabus.html` — CIS 115 Spring 2015 Syllabus Overview (~1981 tok)

## static/assets/oldimpress/cis115spring2016/0syllabus/

- `index.html` — CIS 115 Syllabus Overview (~2422 tok)

## static/assets/oldimpress/cis115spring2016/10hci/

- `index.html` — CIS 115 - Human Computer Interaction (~5362 tok)

## static/assets/oldimpress/cis115spring2016/11internethistory/

- `index.html` — CIS 115 - History of the Internet (~3711 tok)

## static/assets/oldimpress/cis115spring2016/13internettech/

- `index.html` — CIS 115 - How the Internet Works (~4399 tok)

## static/assets/oldimpress/cis115spring2016/14web/

- `index.html` — CIS 115 - Programming for the Web (~4645 tok)

## static/assets/oldimpress/cis115spring2016/15web/

- `index.html` — CIS 115 - Programming for the Web (~3278 tok)

## static/assets/oldimpress/cis115spring2016/16softwareengg/

- `index.html` — CIS 115 - Software Engineering (~3794 tok)

## static/assets/oldimpress/cis115spring2016/1whatiscs/

- `index.html` — CIS 115 - What is Computing Science? (~2701 tok)

## static/assets/oldimpress/cis115spring2016/20graphics/

- `index.html` — CIS 115 - Computer Graphics (~5189 tok)

## static/assets/oldimpress/cis115spring2016/21inforetrieve/

- `index.html` — CIS 115 - Searching & Information Retrieval (~6539 tok)

## static/assets/oldimpress/cis115spring2016/22cryptography/

- `index.html` — CIS 115 - Cryptography (~4410 tok)

## static/assets/oldimpress/cis115spring2016/24ai/

- `index.html` — CIS 115 - Artificial Intelligence (~5175 tok)

## static/assets/oldimpress/cis115spring2016/25compresserror/

- `index.html` — CIS 115 - Compressions & Error Checking (~5123 tok)

## static/assets/oldimpress/cis115spring2016/26informatics/

- `lecture18.html` — CIS 115 Spring 2015 Lecture 18 (~2826 tok)
- `lecture28.html` — CIS 115 Spring 2015 Lecture 28 (~7310 tok)

## static/assets/oldimpress/cis115spring2016/27cybersecurity/

- `index.html` — CIS 115 - Cyber Security (~7387 tok)

## static/assets/oldimpress/cis115spring2016/29robotics/

- `index.html` — CIS 115 - Robotics (~4479 tok)

## static/assets/oldimpress/cis115spring2016/2teams/

- `index.html` — CIS 115 - Teams, Projects and Success (~3360 tok)

## static/assets/oldimpress/cis115spring2016/30future/

- `index.html` — CIS 115 - The Future (~2405 tok)

## static/assets/oldimpress/cis115spring2016/3early/

- `index.html` — CIS 115 - Early Computing Machines (~2881 tok)

## static/assets/oldimpress/cis115spring2016/4boolean/

- `index.html` — CIS 115 - Bits and Boolean Algebra (~8528 tok)

## static/assets/oldimpress/cis115spring2016/5programming/

- `index.html` — CIS 115 - Programming (~5908 tok)

## static/assets/oldimpress/cis115spring2016/6universal/

- `index.html` — CIS 115 - Universal Computers (~3526 tok)

## static/assets/oldimpress/cis115spring2016/7algorithms/

- `index.html` — CIS 115 - Algorithms (~4804 tok)

## static/assets/oldimpress/cis115spring2016/8encoding/

- `index.html` — CIS 115 - Encoding Data (~12281 tok)

## static/assets/oldimpress/cis115spring2016/9embedded/

- `index.html` — CIS 115 - Embedded Systems, Computer Architecture & Finite State Machines (~6394 tok)

## static/assets/oldimpress/cis115spring2017/0syllabus/

- `index.html` — CIS 115 Syllabus Overview (~2442 tok)

## static/assets/oldimpress/cis115spring2017/10hci/

- `index.html` — CIS 115 - Human Computer Interaction (~5335 tok)

## static/assets/oldimpress/cis115spring2017/11internethistory/

- `index.html` — CIS 115 - History of the Internet (~3711 tok)

## static/assets/oldimpress/cis115spring2017/12internettech/

- `index.html` — CIS 115 - How the Internet Works (~4158 tok)

## static/assets/oldimpress/cis115spring2017/13hpc/

- `index.html` — CIS 115 - High Performance Computing (~1370 tok)

## static/assets/oldimpress/cis115spring2017/14web/

- `index.html` — CIS 115 - Programming for the Web (~4611 tok)

## static/assets/oldimpress/cis115spring2017/15web/

- `index.html` — CIS 115 - Interactive Web Programming (~3804 tok)

## static/assets/oldimpress/cis115spring2017/16softwareengg/

- `index.html` — CIS 115 - Software Engineering (~3794 tok)

## static/assets/oldimpress/cis115spring2017/17graphics/

- `index.html` — CIS 115 - Computer Graphics (~5174 tok)

## static/assets/oldimpress/cis115spring2017/1whatiscs/

- `index.html` — CIS 115 - What is Computing Science? (~2690 tok)

## static/assets/oldimpress/cis115spring2017/22inforetrieve/

- `index.html` — CIS 115 - Searching & Information Retrieval (~6782 tok)

## static/assets/oldimpress/cis115spring2017/23cryptography/

- `index.html` — CIS 115 - Cryptography (~4508 tok)

## static/assets/oldimpress/cis115spring2017/24ai/

- `index.html` — CIS 115 - Artificial Intelligence (~5198 tok)

## static/assets/oldimpress/cis115spring2017/25compresserror/

- `index.html` — CIS 115 - Compressions & Error Checking (~5136 tok)

## static/assets/oldimpress/cis115spring2017/27informatics/

- `index.html` — CIS 115 - Big Data & Informatics (~3237 tok)
- `lecture18.html` — CIS 115 Spring 2015 Lecture 18 (~2826 tok)
- `lecture28.html` — CIS 115 Spring 2015 Lecture 28 (~7402 tok)

## static/assets/oldimpress/cis115spring2017/28cybersecurity/

- `index.html` — CIS 115 - Cyber Security (~7407 tok)

## static/assets/oldimpress/cis115spring2017/29robotics/

- `index.html` — CIS 115 - Robotics (~4572 tok)

## static/assets/oldimpress/cis115spring2017/2teams/

- `index.html` — CIS 115 - Teams, Projects and Success (~3323 tok)

## static/assets/oldimpress/cis115spring2017/30future/

- `index.html` — CIS 115 - The Future (~2518 tok)

## static/assets/oldimpress/cis115spring2017/3early/

- `index.html` — CIS 115 - Early Computing Machines (~2876 tok)

## static/assets/oldimpress/cis115spring2017/4boolean/

- `index.html` — CIS 115 - Bits and Boolean Algebra (~8520 tok)

## static/assets/oldimpress/cis115spring2017/5programming/

- `index.html` — CIS 115 - Programming (~5968 tok)

## static/assets/oldimpress/cis115spring2017/6universal/

- `index.html` — CIS 115 - Universal Computers (~3502 tok)

## static/assets/oldimpress/cis115spring2017/7algorithms/

- `index.html` — CIS 115 - Algorithms (~4798 tok)

## static/assets/oldimpress/cis115spring2017/8encoding/

- `index.html` — CIS 115 - Encoding Data (~12272 tok)

## static/assets/oldimpress/cis115spring2017/9embedded/

- `index.html` — CIS 115 - Embedded Systems, Computer Architecture & Finite State Machines (~6386 tok)

## static/assets/oldimpress/cis225fall2013/

- `lecture1.html` — CIS 225 Fall 2013 Lecture 1 (~3814 tok)
- `lecture10.html` — CIS 225 Fall 2013 Lecture 10 (~3269 tok)
- `lecture11.html` — CIS 225 Fall 2013 Lecture 11 (~2773 tok)
- `lecture12.html` — CIS 225 Fall 2013 Lecture 12 (~2092 tok)
- `lecture13.html` — CIS 225 Fall 2013 Lecture 13 (~2396 tok)
- `lecture14.html` — CIS 225 Fall 2013 Lecture 14 (~2187 tok)
- `lecture15.html` — CIS 225 Fall 2013 Lecture 15 (~2056 tok)
- `lecture16.html` — CIS 225 Fall 2013 Lecture 16 (~1893 tok)
- `lecture17.html` — CIS 225 Fall 2013 Lecture 17 (~3877 tok)
- `lecture18.html` — CIS 225 Fall 2013 Lecture 18 (~869 tok)
- `lecture19.html` — CIS 225 Fall 2013 Lecture 19 (~1684 tok)
- `lecture2.html` — CIS 225 Fall 2013 Lecture 2 (~3958 tok)
- `lecture21.html` — CIS 225 Fall 2013 Lecture 21 (~3049 tok)
- `lecture22.html` — CIS 225 Fall 2013 Lecture 22 (~6879 tok)
- `lecture23.html` — CIS 225 Fall 2013 Lecture 23 (~1317 tok)
- `lecture24.html` — CIS 225 Fall 2013 Lecture 24 (~2094 tok)
- `lecture26.html` — CIS 225 Fall 2013 Lecture 26 (~696 tok)
- `lecture3.html` — CIS 225 Fall 2013 Lecture 3 (~3251 tok)
- `lecture4.html` — CIS 225 Fall 2013 Lecture 4 (~1968 tok)
- `lecture5.html` — CIS 225 Fall 2013 Lecture 5 (~1351 tok)
- `lecture6.html` — CIS 225 Fall 2013 Lecture 6 (~1561 tok)
- `lecture7.html` — CIS 225 Fall 2013 Lecture 7 (~2280 tok)
- `lecture8.html` — CIS 225 Fall 2013 Lecture 8 (~2136 tok)

## static/assets/oldimpress/cis225fall2014/

- `lecture1.html` — CIS 225 Fall 2014 Lecture 1 (~3851 tok)
- `lecture10.html` — CIS 225 Fall 2014 Lecture 10 (~3253 tok)
- `lecture11.html` — CIS 225 Fall 2014 Lecture 11 (~2724 tok)
- `lecture12.html` — CIS 225 Fall 2014 Lecture 12 (~2092 tok)
- `lecture13.html` — CIS 225 Fall 2014 Lecture 13 (~2396 tok)
- `lecture14.html` — CIS 225 Fall 2014 Lecture 14 (~2187 tok)
- `lecture15.html` — CIS 225 Fall 2014 Lecture 15 (~2031 tok)
- `lecture16.html` — CIS 225 Fall 2014 Lecture 16 (~1894 tok)
- `lecture17.html` — CIS 225 Fall 2014 Lecture 17 (~3856 tok)
- `lecture18.html` — CIS 225 Fall 2014 Lecture 18 (~869 tok)
- `lecture19.html` — CIS 225 Fall 2014 Lecture 19 (~1481 tok)
- `lecture2.html` — CIS 225 Fall 2014 Lecture 2 (~3958 tok)
- `lecture21.html` — CIS 225 Fall 2014 Lecture 21 (~3054 tok)
- `lecture22.html` — CIS 225 Fall 2014 Lecture 22 (~6879 tok)
- `lecture23.html` — CIS 225 Fall 2014 Lecture 23 (~2966 tok)
- `lecture24.html` — CIS 225 Fall 2013 Lecture 24 (~2094 tok)
- `lecture26.html` — CIS 225 Fall 2014 Lecture 25 (~772 tok)
- `lecture3.html` — CIS 225 Fall 2014 Lecture 3 (~3258 tok)
- `lecture4.html` — CIS 225 Fall 2013 Lecture 4 (~1982 tok)
- `lecture5.html` — CIS 225 Fall 2014 Lecture 5 (~1357 tok)
- `lecture6.html` — CIS 225 Fall 2014 Lecture 6 (~1564 tok)
- `lecture7.html` — CIS 225 Fall 2014 Lecture 7 (~2280 tok)
- `lecture8.html` — CIS 225 Fall 2014 Lecture 8 (~2148 tok)

## static/assets/oldimpress/cis225fall2015/10software/

- `index.html` — CIS 225 - Software (~3947 tok)

## static/assets/oldimpress/cis225fall2015/11networking/

- `index.html` — CIS 225 - Networking (~5297 tok)

## static/assets/oldimpress/cis225fall2015/12cli/

- `index.html` — CIS 225 - Command Line Interfaces & Simple Scripts (~5199 tok)

## static/assets/oldimpress/cis225fall2015/14monitoring/

- `index.html` — CIS 225 - Troubleshooting & Maintenance (~3294 tok)

## static/assets/oldimpress/cis225fall2015/15cloud/

- `index.html` — CIS 225 - The Cloud (~3313 tok)

## static/assets/oldimpress/cis225fall2015/16backup/

- `index.html` — CIS 225 - Monitoring & Backups (~3367 tok)

## static/assets/oldimpress/cis225fall2015/17security/

- `index.html` — CIS 225 - Security & Best Practices (~1139 tok)

## static/assets/oldimpress/cis225fall2015/1intro/

- `index.html` — CIS 225 - Intro (~4020 tok)

## static/assets/oldimpress/cis225fall2015/2duties/

- `index.html` — CIS 225 - Duties of a System Administrator (~4504 tok)

## static/assets/oldimpress/cis225fall2015/3hardware/

- `index.html` — CIS 225 - Computer Hardware (~3395 tok)

## static/assets/oldimpress/cis225fall2015/4vminstall/

- `index.html` — CIS 225 - Virtual Machines & OS Installation (~2164 tok)

## static/assets/oldimpress/cis225fall2015/5windows/

- `index.html` — CIS 225 - Windows (~1776 tok)

## static/assets/oldimpress/cis225fall2015/6ubuntu/

- `index.html` — CIS 225 - Ubuntu (~2618 tok)

## static/assets/oldimpress/cis225fall2015/7users/

- `index.html` — CIS 225 - User Accont Management (~3238 tok)

## static/assets/oldimpress/cis225fall2015/8files/

- `index.html` — CIS 225 - File System Management (~3066 tok)

## static/assets/oldimpress/cis225fall2015/9services/

- `index.html` — CIS 225 - Service & Process Management (~2651 tok)

## static/assets/oldimpress/cis225fall2016/10services/

- `index.html` — CIS 225 - Service & Process Management (~2611 tok)

## static/assets/oldimpress/cis225fall2016/11software/

- `index.html` — CIS 225 - Software (~3946 tok)

## static/assets/oldimpress/cis225fall2016/12networking/

- `index.html` — CIS 225 - Networking (~5258 tok)

## static/assets/oldimpress/cis225fall2016/15cli/

- `index.html` — CIS 225 - Command Line Interfaces & Simple Scripts (~5186 tok)

## static/assets/oldimpress/cis225fall2016/19trouble/

- `index.html` — CIS 225 - Troubleshooting & Maintenance (~3267 tok)

## static/assets/oldimpress/cis225fall2016/1intro/

- `index.html` — CIS 225 - Intro (~4023 tok)

## static/assets/oldimpress/cis225fall2016/21cloud/

- `index.html` — CIS 225 - The Cloud (~3284 tok)

## static/assets/oldimpress/cis225fall2016/24backup/

- `index.html` — CIS 225 - Monitoring & Backups (~3334 tok)

## static/assets/oldimpress/cis225fall2016/26security/

- `index.html` — CIS 225 - Security & Best Practices (~1132 tok)

## static/assets/oldimpress/cis225fall2016/2duties/

- `index.html` — CIS 225 - Duties of a System Administrator (~4504 tok)

## static/assets/oldimpress/cis225fall2016/3hardware/

- `index.html` — CIS 225 - Computer Hardware (~3395 tok)

## static/assets/oldimpress/cis225fall2016/4vminstall/

- `index.html` — CIS 225 - Virtual Machines & OS Installation (~2164 tok)

## static/assets/oldimpress/cis225fall2016/6windows/

- `index.html` — CIS 225 - Windows (~1751 tok)

## static/assets/oldimpress/cis225fall2016/7ubuntu/

- `index.html` — CIS 225 - Ubuntu (~2599 tok)

## static/assets/oldimpress/cis225fall2016/8users/

- `index.html` — CIS 225 - User Accont Management (~3210 tok)

## static/assets/oldimpress/cis225fall2016/9files/

- `index.html` — CIS 225 - File System Management (~3065 tok)

## static/assets/oldimpress/cis527spring2014/

- `lecture1.html` — CIS 527 Spring 2014 Lecture 1 (~4626 tok)
- `lecture10.html` — CIS 527 Spring 2014 Lecture 10 (~2008 tok)
- `lecture13.html` — CIS 527 Spring 2014 Lecture 13 (~2995 tok)
- `lecture17.html` — CIS 527 Spring 2014 Lecture 17 (~3712 tok)
- `lecture2.html` — CIS 527 Spring 2014 Lecture 2 (~2482 tok)
- `lecture21.html` — CIS 527 Spring 2014 Lecture 21 (~2721 tok)
- `lecture25.html` — CIS 527 Spring 2014 Lecture 21 (~3410 tok)
- `lecture26.html` — CIS 527 Spring 2014 Lecture 26 (~1815 tok)
- `lecture3.html` — CIS 527 Spring 2014 Lecture 3 (~2887 tok)
- `lecture4.html` — CIS 527 Spring 2014 Lecture 4 (~3749 tok)
- `lecture5.html` — CIS 527 Spring 2014 Lecture 5 (~3382 tok)
- `lecture6.html` — CIS 527 Spring 2014 Lecture 6 (~2139 tok)
- `lecture7.html` — CIS 527 Spring 2014 Lecture 7 (~3755 tok)
- `lecture8.html` — CIS 527 Spring 2014 Lecture 8 (~3021 tok)
- `lecture9.html` — CIS 527 Spring 2014 Lecture 9 (~5442 tok)

## static/assets/oldimpress/cis527spring2015/

- `lecture1.html` — CIS 527 Spring 2015 Lecture 1 (~4679 tok)
- `lecture10.html` — CIS 527 Spring 2015 Lecture 10 (~5440 tok)
- `lecture11.html` — CIS 527 Spring 2015 Lecture 11 (~837 tok)
- `lecture14.html` — CIS 527 Spring 2015 Lecture 14 (~2990 tok)
- `lecture17.html` — CIS 527 Spring 2015 Lecture 17 (~3722 tok)
- `lecture18.html` — CIS 527 Spring 2015 Lecture 18 (~2712 tok)
- `lecture2.html` — CIS 527 Spring 2015 Lecture 2 (~2484 tok)
- `lecture21.html` — CIS 527 Spring 2015 Lecture 21 (~3588 tok)
- `lecture24.html` — CIS 527 Spring 2015 Lecture 24 (~2578 tok)
- `lecture25.html` — CIS 527 Spring 2015 Lecture 25 (~708 tok)
- `lecture26.html` — CIS 527 Spring 2015 Lecture 26 (~3490 tok)
- `lecture3.html` — CIS 527 Spring 2015 Lecture 3 (~2948 tok)
- `lecture4.html` — CIS 527 Spring 2015 Lecture 4 (~3749 tok)
- `lecture5.html` — CIS 527 Spring 2015 Lecture 5 (~3381 tok)
- `lecture6.html` — CIS 527 Spring 2015 Lecture 6 (~2207 tok)
- `lecture7.html` — CIS 527 Spring 2015 Lecture 7 (~3751 tok)
- `lecture8.html` — CIS 527 Spring 2015 Lecture 8 (~3032 tok)
- `lecture9.html` — CIS 527 Spring 2015 Lecture 8 (~2917 tok)

## static/assets/oldimpress/cis527spring2016/10wireshark/

- `index.html` — CIS 527 - Wireshark (~1039 tok)

## static/assets/oldimpress/cis527spring2016/11snmp/

- `index.html` — CIS 527 - SNMP (~1523 tok)

## static/assets/oldimpress/cis527spring2016/12protocols/

- `index.html` — CIS 527 - Other Application Protocols (~1994 tok)

## static/assets/oldimpress/cis527spring2016/13directory/

- `index.html` — CIS 527 - Directory Services (~3023 tok)

## static/assets/oldimpress/cis527spring2016/19cloud/

- `index.html` — CIS 527 - The Cloud (~2867 tok)

## static/assets/oldimpress/cis527spring2016/1intro/

- `index.html` — CIS 527 - Intro (~4918 tok)

## static/assets/oldimpress/cis527spring2016/20cloudconfig/

- `index.html` — CIS 527 - Configuration & Networking in The Cloud (~1812 tok)

## static/assets/oldimpress/cis527spring2016/21cloudapps/

- `index.html` — CIS 527 - Applications in The Cloud (~1365 tok)

## static/assets/oldimpress/cis527spring2016/22cloudscale/

- `index.html` — CIS 527 - Advanced Cloud Management (~1486 tok)

## static/assets/oldimpress/cis527spring2016/23appservers/

- `index.html` — CIS 527 - Application Servers Overview (~2746 tok)

## static/assets/oldimpress/cis527spring2016/24fileservers/

- `index.html` — CIS 527 - File Servers Overview (~3727 tok)

## static/assets/oldimpress/cis527spring2016/27backups/

- `index.html` — CIS 527 - Backups (~3720 tok)

## static/assets/oldimpress/cis527spring2016/28monitor/

- `index.html` — CIS 527 - Monitoring (~1899 tok)

## static/assets/oldimpress/cis527spring2016/29itil/

- `index.html` — CIS 527 - ITIL (~3632 tok)

## static/assets/oldimpress/cis527spring2016/2vmos/

- `index.html` — CIS 527 - Virtualization & Operating Systems (~4620 tok)

## static/assets/oldimpress/cis527spring2016/3cli/

- `index.html` — CIS 527 - Command Line Interfaces & Simple Scripts (~5090 tok)

## static/assets/oldimpress/cis527spring2016/4user/

- `index.html` — CIS 527 - Users & Permissions (~4188 tok)

## static/assets/oldimpress/cis527spring2016/5soft/

- `index.html` — CIS 527 - Services, Software & Security (~4626 tok)

## static/assets/oldimpress/cis527spring2016/6config/

- `index.html` — CIS 527 - Configuration Management (~2467 tok)

## static/assets/oldimpress/cis527spring2016/7puppet/

- `index.html` — CIS 527 - Using Puppet (~8268 tok)

## static/assets/oldimpress/cis527spring2016/8networking/

- `index.html` — CIS 527 - Networking Overview (~5440 tok)

## static/assets/oldimpress/cis527spring2016/9dhcpdns/

- `index.html` — CIS 527 - DHCP & DNS (~716 tok)

## static/assets/oldimpress/cis527spring2017/10wireshark/

- `index.html` — CIS 527 - Wireshark (~1039 tok)

## static/assets/oldimpress/cis527spring2017/11snmp/

- `index.html` — CIS 527 - SNMP (~1523 tok)

## static/assets/oldimpress/cis527spring2017/12protocols/

- `index.html` — CIS 527 - Other Application Protocols (~1994 tok)

## static/assets/oldimpress/cis527spring2017/13directory/

- `index.html` — CIS 527 - Directory Services (~3023 tok)

## static/assets/oldimpress/cis527spring2017/18cloud/

- `index.html` — CIS 527 - The Cloud (~2886 tok)

## static/assets/oldimpress/cis527spring2017/19cloudconfig/

- `index.html` — CIS 527 - Configuration & Networking in The Cloud (~1817 tok)

## static/assets/oldimpress/cis527spring2017/1intro/

- `index.html` — CIS 527 - Intro (~4931 tok)

## static/assets/oldimpress/cis527spring2017/21cloudapps/

- `index.html` — CIS 527 - Applications in The Cloud (~1366 tok)

## static/assets/oldimpress/cis527spring2017/22cloudscale/

- `index.html` — CIS 527 - Advanced Cloud Management (~1486 tok)

## static/assets/oldimpress/cis527spring2017/23appservers/

- `index.html` — CIS 527 - Application Servers Overview (~2746 tok)

## static/assets/oldimpress/cis527spring2017/24fileservers/

- `index.html` — CIS 527 - File Servers Overview (~3727 tok)
