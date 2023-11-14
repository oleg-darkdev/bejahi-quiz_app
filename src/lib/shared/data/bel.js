const data = {
	features: [
		{
			title: 'Lorem ipsum is placeholder 1',
			id: 0,
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		},
		{
			title: 'Lorem ipsum is placeholder 2',
			id: 1,

			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		},
		{
			title: 'Lorem ipsum is placeholder 3',
			id: 2,

			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		},
		{
			title: 'Lorem ipsum is placeholder 4',
			id: 3,

			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	],

	quiz: {
		mainTitle: 'Тэст па гісторыі Мінскага гета',
		steps: [
			{
				id: 1,
				img: `q1.jpg`,
				imgTitle: `Мал. Харальная сінагога. Г. Мінск, 1920-я гг.`,
				title: `Калі з'явіліся яўрэі на тэрыторыі Беларусі?`,
				desc: ``,
				options: [
					{
						text: `Канец XVIII стагоддзя, пасля ўвядзення «рысы яўрэйскай аседласці» з уваходжаннем беларускіх земляў у Расійскую імперыю.`,
						id: 1,
						answerText: [
							`Не, не адгадалі.`,
							`Значна раней, яшчэ ў XIV стагоддзі. Першым пісьмовым дакументам аб іх з'яўленні ў Вялікім Княстве Літоўскім з'яўляецца прывілей 1388 г. `
						]
					},
					{
						text: `XIV стагоддзе, яшчэ ў часы князя Вітаўта.`,
						id: 2,
						answerText: [
							`Так, вы маеце рацыю, першым пісьмовым дакументам аб іх з'яўленні ў Вялікім Княстве Літоўскім з'яўляецца прывілей 1388 г.`
						]
					},
					{
						text: `Пасля 1917 года, калі яўрэі пераехалі ў Беларусь у сувязі з неспакойнай абстаноўкай у Маскве і Петраградзе.`,
						id: 3,
						answerText: [
							`Не, не адгадалі.`,
							`Значна раней, яшчэ ў XIV стагоддзі. Першым пісьмовым дакументам аб іх з'яўленні ў Вялікім Княстве Літоўскім з'яўляецца прывілей 1388 г. `
						]
					}
				]
			},

			{
				id: 2,
				img: `q2.jpg`,
				imgTitle: `Мал. Шыльда на краме ў Беларусі пачатку ХХ стагоддзя.`,
				title: `Якое было становішча у мовы ідыш у міжваеннай БССР?`,
				desc: `Ідыш - яўрэйская мова германскай групы. З часоў Сярэднявечча яна з'яўлялася гутарковай мовай еўрапейскіх яўрэяў. Яна была роднай і для яўрэяў Беларусі пачатку ХХ стагоддзя.`,
				options: [
					{
						text: `Мова ідыш была забаронена, бо перашкаджала палітыцы беларусізацыі.`,
						id: 1,
						answerText: [
							`Няправільны адказ.`,
							`у гэты час яна з'яўлялася адной з чатырох дзяржаўных моў БССР. У 1920-м годзе (31 ліпеня) была прынятая Дэкларацыя незалежнасці Беларускай рэспублікі, у якой прадугледжвалася раўнапраўе такіх моў, як беларуская, руская, польская і ідыш, у адносінах з арганізацыямі і дзяржаўнымі органамі, у культуры і адукацыі.`
						]
					},
					{
						text: `Мова ідыш выкарыстоўвалася толькі для бытавой камунікацыі яўрэяў, якія пражывалі ў Беларусі таго часу.`,
						id: 2,
						answerText: [
							`Не зусім дакладна.`,
							`Так, гэта была родная мова для яўрэяў Беларусі ў пачатку ХХ стагоддзя, але ў БССР яе статус быў падвышаны, і яна стала адной з чатырох афіцыйных дзяржаўных моў.`
						]
					},
					{
						text: `Міжваенная БССР была адзінай савецкай рэспублікай, дзе ідыш стаў адной з чатырох дзяржаўных моў.`,
						id: 3,
						answerText: [
							`Правільны адказ`,
							`Пісьменнік з Варшавы Ісроэль-Іешуа Зінгер (1893 - 1944) пісаў пра Мінск 1926 годa:`,
							`"Чатыры мовы - беларуская, руская, польская і ідыш - сустрэлі мяне на вакзале. Яны глядзелі на мяне зверху, з шэрай сцяны ... Я сустракаўся з імі на кожным кроку, у кожным наркамаце, у кожнай канторы - паўсюль".`
						],
						img: `q2_3.jpg`
					}
				]
			},

			{
				id: 3,
				img: `q3.jpg`,
				imgTitle: `Мал. Нашыўка з надпісам па-нямецку «яўрэй», якую нямецкія ўлады падчас Другой сусветнай вайны прымушалі насіць прадстаўнікоў яўрэйскай нацыянальнасці.`,
				title: `Што такое Халакост?`,
				desc: ``,

				options: [
					{
						text: `Палітыка пераследу па нацыянальнай прыкмеце і знішчэння 6 мільёнаў яўрэяў нацыстамі і іх памагатымі.`,
						id: 1,
						answerText: [
							`Правільны адказ`,
							`Праводзілася ў 1933-1945 гг. пасля прыходу да ўлады Адольфа Гітлера і да заканчэння Другой сусветнай вайны. Можа яшчэ мець назву Шоа або Катастрофа.`
						]
					},
					{
						text: `Генацыд беларускага народа ў час Вялікай Айчыннай вайны.`,
						id: 2,
						answerText: [
							`Няслушна, вызначэнне тэрміна генацыду прадугледжвае пераслед па расавых, нацыянальных або рэлігійных прыкметах, што не можа быць у поўнай меры аднесена да злачынстваў у дачыненні да беларусаў.`,
							`Халакостам называюць палітыку пераследу і знішчэння 6 мільёнаў яўрэяў нацыстамі і іх памагатымі ў 1933-1945 гг. падчас прыходу да ўлады Адольфа Гітлера і да заканчэння Другой сусветнай вайны. `
						]
					},
					{
						text: `Дзень памяці ахвяр Другой сусветнай вайны.`,
						id: 3,
						answerText: [
							`Няслушна, Халакостам называюць палітыку пераследу і знішчэння 6 мільёнаў яўрэяў нацыстамі і іх памагатымі падчас прыходу да ўлады Адольфа Гітлера і да заканчэння Другой сусветнай вайны ў 1933-1945 гг.`
						],
						img: `q3_3.png`
					}
				]
			},

			{
				id: 4,
				img: `q4.jpg`,
				imgTitle: `Мал. Перасяленне яўрэяў у Мінскае гета.`,
				title: `Мал. Перасяленне яўрэяў у Мінскае гета.`,
				desc: ``,

				options: [
					{
						text: `20 ліпеня 1941 года.`,
						id: 1,
						answerText: [
							`Правільны адказ.`,
							`19 ліпеня 1941 году прыблізна праз тры тыдні пасля захопу нямецкімі войскамі сталіцы Беларусі, камендантам палявой камендатуры г. Мінска быў аддадзены загад аб стварэнні Мінскага гета. Дакумент быў апублікаваны 20 ліпеня.`,
							`Пасля чаго давалася ўсяго пяць дзён на перасяленне яўрэяў у гета – выдзеленую тэрыторыю, за межы якой яны маглі афіцыйна выходзіць толькі ў складзе рабочых калон.`
						]
					},
					{
						text: `2-3 сакавіка 1942 года`,
						id: 2,
						answerText: [
							`Няслушна, гета было створана 20 ліпеня 1941 года.`,
							`2-3 сакавіка 1942 году – іншая трагічная дата ў гісторыі Мінскага гета. У гэтыя дні прайшоў адзін з жудасных пагромаў, у выніку якога загінула каля 5 тысяч вязняў Мінскага гета. Менавіта ў гэтую дату кожны год у Мінску праходзяць жалобныя мерапрыемствы на Яме, дзе пахаваны ахвяры гэтага пагрому. `
						]
					},
					{
						text: `3 ліпеня 1944 года.`,
						id: 3,
						answerText: [
							`Няслушна, у гэты дзень Чырвоная Армія вызваліла горад Мінск ад акупацыі.`,
							`Гета было створана 20 ліпеня 1941 года, усяго прыкладна праз тры тыдні пасля акупацыі нацыстамі Мінска ў канцы чэрвеня. `
						]
					}
				]
			},

			{
				id: 5,
				img: `q5.jpg`,
				imgTitle: `Мал. 2. Калючы дрот, якая аддзяляе гета ад астатняй часткі горада, Мінск, 1941-1943 гг.`,
				title: `Ці было дазволена яўрэям пакідаць Мінскае гета?`,
				desc: ``,

				options: [
					{
						text: `Так, але толькі для выхаду на працу.`,
						id: 1,
						answerText: [
							`Пасля чаго давалася ўсяго пяць дзён на перасяленне яўрэяў у гета – выдзеленую тэрыторыю, за межы якой яны маглі афіцыйна выходзіць толькі ў складзе рабочых калон`,
							`Яўрэі маглі пакідаць гета толькі ў складзе яўрэйскіх рабочых каманд з адмысловым накіраваннем да месца працы. У адваротным выпадку за сыход з гета пагражала смяротнае пакаранне.`,
							`З успамінаў Абрама Рубенчыка: «Штодня з Юбілейнай плошчы яшчэ да світання пад канвоем адводзілі працоўныя калоны на прадпрыемствы і будоўлі горада і зацемна прыводзілі іх назад на плошчу»`
						]
					},
					{
						text: `Так, яўрэі маглі свабодна пакідаць гета, калі хацелі.`,
						id: 2,
						answerText: [
							`Не зусім дакладна.`,
							`Яўрэі адкрыта маглі пакідаць раён толькі ў складзе яўрэйскіх рабочых каманд з адмысловым накіраваннем да месца працы. У адваротным выпадку тым, хто сышоў, пагражала смяротнае пакаранне.`,
							`Але нягледзячы на гэта вязні таемна выбіраліся з тэрыторыі гета для таго, каб абмяняць хоць трохі рэчаў на ежу, чым ставілі пад пагрозу сваё жыццё.`,
							`Магчымасць часова выбрацца з гета ці нават сысці паўстала дзякуючы таму, што праз дрот, якім гета было акружана, былі шанцы пралезці, асабліва падлеткам або дзецям. `
						]
					},
					{
						text: `Не, ім ніколі не дазвалялася выходзіць.`,
						id: 3,
						answerText: [
							`Не зусім дакладна.`,
							`Адкрыта не дазвалялася выходзіць тым, хто не быў працаздольным і не быў вызначаны ў склад спецыяльных рабочых каманд. `,
							`Але тым, хто працаваў, удавалася такім чынам выбірацца, даставаць хоць нейкія прадукты для харчавання сям'і. `
						]
					}
				]
			},

			{
				id: 6,
				img: `q6.jpg`,
				imgTitle: `Мал. Фота рабочай калоны з Мінскага гета`,
				title: `Навошта яўрэйскае насельніцтва насіла падчас акупацыі жоўтую нашыўку?`,
				desc: ``,

				options: [
					{
						text: `Каб пазнаваць сваіх, хто належаў да яўрэйскай нацыянальнасці.`,
						id: 1,
						answerText: [
							`Няправільна.`,
							`Гэтая ініцыятыва належала нацыстам, каб ім было лягчэй вызначаць яўрэяў і выкарыстоўваць у дачыненні да іх законы нацысцкай расавай палітыкі, накіраваныя на выдаленне яўрэяў з усіх сфер жыцця грамадства, прыніжэнне іх праз статус "недалюдзей".`
						]
					},
					{
						text: `Для ўпрыгожвання адзення.`,
						id: 2,
						answerText: [
							`Няправільна.`,
							`Дадзеная нашыўка насіла прыніжальны характар, вылучаючы яўрэяў з супольнасці, што палягчала выкарыстанне ў адносінах да іх нацысцкіх законаў расавай палітыкі, накіраваных на выдаленне яўрэяў з усіх сфер жыцця грамадства, паўсядзённае іх прыніжэнне праз статус "недалюдзей". `
						]
					},
					{
						text: `Каб нацыстам было лягчэй вызначаць яўрэяў.`,
						id: 3,
						answerText: [
							`Правільны адказ.`,
							`Акупацыйныя ўлады выкарыстоўвалі дадзены спецыяльны адрозны знак яўрэяў, каб ужываць да іх законы нацысцкай расавай палітыкі, накіраваныя на выдаленне яўрэяў з усіх сфер жыцця грамадства, прыніжэнне іх праз статус "недачалавека" і ў далейшым знішчэнне. Асноўная форма нашыўкі зорка (па форме зоркі Давіда), але ў Мінску выкарыстоўваліся латы акруглай формы.`,
							`З часам для вязняў гета былі ўведзеныя таксама дадатковыя адметныя знакі - прастакутнікі чырвонага колеру для тых, хто працаваў, і зялёнага - для ўтрыманцаў.`,
							`З успамінаў Міхаіла Трэйсцера, 1927 г.н.: «У гета усё накіравана на тое, каб пазбавіць чалавека не толькі пачуцця ўласнай годнасці, але і чалавечага аблічча.`,
							`Голад, холад, лахманы, апазнавальныя знакі - латы і таблічкі з нумарамі дамоў на спіне і грудзях ... Хадзіць можна толькі па бруку. Згледзеўшы немца метраў за 15, здымаць шапку». `
						],
						img: `q6_3.jpg`
					}
				]
			},

			{
				id: 7,
				img: ``,
				imgTitle: ``,
				title: `Якія асноўныя прадукты харчавання былі ў Мінскім гета?`,
				desc: ``,

				options: [
					{
						text: `Вязням Мінскага гета акупацыйнымі ўладамі забяспечвалася рэгулярнае трохразовае харчаванне. У яго ўваходзілі свежыя гародніна, садавіна, крупы, мяса.`,
						id: 1,
						answerText: [
							`Няправільна.`,
							`Паёк з кавалка хлеба, крупы, солі або вадкага супу належыў у якасці аплаты толькі вязням Мінскага гета, якія працавалі праз біржу працы. Яго не хапала для харчавання. Як правіла, адзін рабочы падтрымліваў па 3-4 непрацаздольных, якіх таксама трэба было карміць.`,
							`Асноўнымі прадуктамі для вязняў гета сталі бульбяныя ачысткі, лупіны і іншыя адкіды, якія падбіраліся па дарозе на працу і назад у гета.`,
							`З успамінаў Іосіфа Грайфера, 1927 г.н.: «Я працаваў на расчыстцы вуліц, пераносцы розных грузаў, за што і атрымліваў, як правіла, 100 грам хлеба з прымешкам буракоў ці бульбы». `
						],
						img: 'q7_1.jpg'
					},
					{
						text: `Бульбяныя ачысткі, лупіны і іншыя адкіды, якія падбіраліся па дарозе на працу і назад у гета.`,
						id: 2,
						answerText: [
							`Правільны адказ.`,
							`Таксама вязням Мінскага гета, якія працавалі праз біржу працы, належыў у якасці аплаты паёк з кавалка хлеба, крупы, солі або вадкага супу. Яго не хапала для харчавання. Як правіла, адзін рабочы падтрымліваў па 3-4 непрацаздольных, якіх таксама трэба было карміць.`,
							`З успамінаў Міхаіла Трэйсцера, 1927 г.н.: «Дэлікатэсам лічыцца расол з селядцовых бочак. Ядуць аладкі з бульбяных ачыстак, сала, якое было саскрэбена са старых шкур на гарбарным заводзе, баланду, якая прыносіцца, калі атрымоўваецца, з працы». `
						],
						img: 'q7_2.jpg'
					},
					{
						text: `Усім, хто знаходзіўся ў Мінскім гета, належыў кожны дзень паёк з кавалка хлеба, крупы, солі або вадкага супу.`,
						id: 3,
						answerText: [
							`Не зусім дакладна.`,
							`Дадзеныя нормы належылі толькі тым вязням, якія былі ў складзе рабочых калон. Але гэта была вельмі невялікая колькасць ежы. Таму тыя, каму атрымлівалася трапіць за межы гета ці на працу, або таемна выйсці ў горад, шукалі магчымасці дастаць хоць нейкі пражытак.`,
							`Асноўнымі прадуктамі для вязняў гета сталі бульбяныя ачысткі, лупіны і іншыя адкіды.`,
							`З успамінаў Міхаіла Трэйсцера, 1927 г.н.: «Трэба неяк жыць, трэба ўладкоўвацца на працу, але хто возьме 14-гадовага пацана, ды яшчэ без спецыяльнасці. Значыць, мне 16 і я шавец.`,
							`Дакументы згарэлі. Такім чынам, я пад канвоем амаль два гады хадзіў у калоне на працу, дзе мяне жорстка эксплуатавалі за міску баланды і 150 грамаў глінападобнага хлеба».`
						],
						img: 'q7_3.jpg'
					}
				]
			},

			{
				id: 8,
				img: ``,
				imgTitle: ``,
				title: `Ці была магчымасць у неяўрэйскага насельніцтва супрацьстаяць палітыцы нацыстаў у дачыненні да яўрэяў?`,
				desc: ``,

				options: [
					{
						text: `Не, таму што інакш бы таго, хто дапамагаў, забілі нацысты.`,
						id: 1,
						answerText: [
							`Не зусім дакладна.`,
							`Сапраўды за дапамогу яўрэям пагражала смяротнае пакаранне, але нягледзячы на гэта знаходзіліся неабыякавыя, якія прыносілі ім ежу, хавалі іх, дапамагалі сысці ў партызаны. `
						]
					},
					{
						text: `Усе дапамагалі яўрэям.`,
						id: 2,
						answerText: [
							`Няправільна.`,
							`Палітыка нацыстаў была скіравана на тое, каб настроіць насельніцтва супраць яўрэяў. Адным з фактараў, які абмяжоўваў дапамогу яўрэям была пагроза смяротнага пакарання.`,
							`Шмат хто баяўся за жыццё сваіх дзяцей, таму занялі пазіцыю назіральнікаў. Некаторыя, на жаль, пайшлі па шляху супрацоўніцтва з акупантамі і маглі раскрываць месца сховішча яўрэяў, прысвойвалі іх рэчы.`,
							`Але былі і тыя, хто ўсё ж не пабаяўся садзейнічаць яўрэям і рызыкуючы жыццём дапамагаў прадуктамі, даваў магчымасць схавацца і нават перапраўляў у партызаны. Выбар залежаў ад ступені пагрозы і чалавечых якасцяў чалавека. `,
							`З успамінаў Ядзвігі Р., 1924 г.н.: «Так, усе ведалі, што іх вядуць забіваць. І немцы, і яўрэі ведалі, што іх вядуць расстрэльваць ... Я не магла [нічога зрабіць], я ж у акне сядзела і глядзела, як яны ідуць. І думаю, Божа мой, яны ж ідуць на смерць, чаму яны не ўцякаюць?» `
						],
						img: 'q8_2.jpg'
					},
					{
						text: `Мелася магчымасць некаторай дапамогі пры рызыцы быць расстраляным за гэта.`,
						id: 3,
						answerText: [
							`Правільны адказ`,
							`Адкрыты супраціў палітыцы нацыстаў мог прывесці да смерці. Аднак магла заставацца магчымасць дапамагчы яўрэям схавана. Хтосьці рашаўся дапамагчы са сховішчам, хтосьці прадуктамі і г.д. Ад чалавека залежала, ці ён заставаўся назіральнікам, ці актыўна дапамагаў пад страхам смерці, ці нават выдаваў гэтых людзей акупантам.`,
							`У сучасным свеце шырока абмяркоўваецца ступень віны не толькі злачынцы, але і так званага назіральніка (bystander) у сітуацыі, калі парушаюцца правы чалавека, як гэта адбывалася ў Халакост. Не злачынца, але і не ахвяра, назіральнік не прама быў задзейнічаны ў дзеяннях злачынцы, але меў магчымасць перашкодзіць, каб дапамагчы ахвяры. Выбар стратэгіі паводзін залежаў ад канкрэтнай сітуацыі і чалавека. `,
							` успамінаў Ядзвігі Р., 1924 г.н.: «[Яўрэяў] праз калгас вялі, дык там людзі павыходзілі. Ведаеце, усё глядзяць. Так калі разумная іншая [маці], так сваё дзіця туды ў натоўп ткне, разумееш? Каб выратаваць ... Людзі хавалі іх, забіралі ...`,
							`Я не магла [нічога зрабіць], я ж у акне сядзела і глядзела, як яны ідуць. І думаю, Божа мой, яны ж ідуць на смерць, чаму яны не ўцякаюць?`,
							`... яўрэйка адна ўцякла ў лес наш. А ў нас па суседстве ... адзін хлопец быў такі, аднагодак мне, Мішка яго клікалі. Так ён немцам падказаў: во, кажа, уцякла адна.`,
							`Немец дагнаў яе і застрэліў. А на ёй была шубка апранутая, хоць і цёпла было ... Так гэты хлопец потым гэтую шубку зняў, распрануў яе. Усё пазабіраў. Уяўляеш? Вось якія былі ... Усе ведалі, што ён нягоднік.»`
						],
						img: 'q8_3.jpg'
					}
				]
			},

			{
				id: 9,
				img: `q9.jpg`,
				imgTitle: `Мал. Афорт Лазара Рана "Дапамога"`,
				title: `Што такое «маліна» ў Мінскім гета?`,
				desc: ``,

				options: [
					{
						text: `Таемнае месца, уладкаванае вязнямі гета для часовага сховішча падчас акцый знішчэння яўрэйскага насельніцтва акупацыйнымі ўладамі.`,
						id: 1,
						answerText: [
							`Правільны адказ.`,
							`Гэтае слова паходзіць з іўрыту і значыць «сховішча». Вязні стараліся выжыць і для гэтага ўладкоўвалі падобныя таемныя схроны, дзе магчыма было схавацца. Гэта мог быць падвал, падземны ход, ніша за фальшывай унутранай сценкай шафы гарышча з таемным лазам. `,
							`Па ўспамінах Сімы Марголінай, 1931 г.н.: «У сховішча, разлічанае на 5-6 чалавек, забілася 10-12, сярод іх маленькія дзеці, старыя. Стаялі, цесна прыціснуўшыся адзін да аднаго. Зацякала цела, перасыхала ў роце, ніхто не мяняў позу, было гэта немагчыма». `
						],
						img: 'q9_1.png'
					},
					{
						text: `Месца, дзе ставілі тэатральныя пастаноўкі, якія вельмі любілі глядзець вязні.`,
						id: 2,
						answerText: [
							`Няслушна, «маліна» - гэта таемны схрон, дзе вязні хаваліся, таму што гэта магло дапамагчы ім выжыць.`,
							`Выкарыстоўвалі падвалы, падземныя хады, нішы за фальшывай унутранай сценкай шафы, гарышчы з таемным лазам.`,
							`У гісторыі Мінскага гета па ўспамінах сведкаў была вядомая толькі адна тэатральная пастаноўка, падрыхтаваная дэпартаванымі яўрэямі-акторамі з Брно ў 1941 г. для акупацыйнай адміністрацыі гета.`,
							`Па ўспамінах Сямена Добіна, 1931 г.н.: «На вуліцы Сухой у паўразбураным доме бацька знайшоў падвал, у якім абсталяваў нары і зрабіў замаскіраваны лаз. Паветра паступала праз комін.`,
							`Па ледзь бачнаму святлу, якое праз яго прабівалася, мы маглі бачыць змену дня і ночы. Мы імкнуліся спаць удзень і не спаць ноччу, каб звонку не было чуваць шуму». `
						],
						img: 'q9_2.png'
					},
					{
						text: `Пірог з ягад маліны, які рыхтавалі вязні Мінскага гета на святы.`,
						id: 3,
						answerText: [
							`Правільны адказ.`,
							`Гэтае слова паходзіць з іўрыту і значыць «сховішча».`,
							`Вязні стараліся выжыць і для гэтага ўладкоўвалі падобныя таемныя схроны, дзе магчыма было схавацца.`,
							`Гэта мог быць падвал, падземны ход, ніша за фальшывай унутранай сценкай шафы гарышча з таемным лазам.`,
							`Па ўспамінах Сімы Марголінай, 1931 г.н.: «У сховішча, разлічанае на 5-6 чалавек, забілася 10-12, сярод іх маленькія дзеці, старыя. Стаялі, цесна прыціснуўшыся адзін да аднаго. Зацякала цела, перасыхала ў роце, ніхто не мяняў позу, было гэта немагчыма».`
						],
						img: 'q9_3.png'
					}
				]
			},

			{
				id: 10,
				img: `q10.jpg`,
				imgTitle: `Мал. Памятны знак, прысвечаны Міхаілу Гебелеву, на вуліцы М. Гебелева ў Мінску`,
				title: `Ці быў супраціў у Мінскім гета?`,
				desc: ``,

				options: [
					{
						text: `Не, яўрэі з пакорай падпарадкаваліся волі акупантаў і спадзяваліся на лепшае.`,
						id: 1,
						answerText: [
							`Няправільна.`,
							`Умовы, у якіх апынуліся вязні Мінскага гета, ставілі іх на мяжу жыцця і смерці, аднак дух людзей не быў зламаны. Было арганізавана падполле на чале з Ісаем Казінцом. `,
							`З успаміна Фрыды Рэйзман (на фота ў цэнтры), 1935 г.н.: «Як толькі ў гета сталі арганізоўваць антыфашысцкае падполле, мой тата, Вульф Лосік, стаў яго ўдзельнікам. У яго ўваходзіў Гебелеў.`,
							`Ён сябраваў з татам з даваенных гадоў. Тата прыносіў дадому зброю: наганы, патроны, і клаў іх пад матрац. Я ляжала на гэтым месцы. Хтосьці з татавай падпольнай групы трапіў у гестапа. Ён павёў фашыстаў прама да нас у хату.`,
							`Тату папярэдзілі літаральна за некалькі хвілін да іх прыходу. Вульф Лосік паспеў вынесці зброю, якая захоўвалася ў нас. Немцы зайшлі і адразу ўдарылі маму па твары. Я схавалася пад зэдлік. Калі немцы заняліся ператрусам, я здолела выскачыць у двор і схавацца ў прыбіральні.`,
							`Падпольшчыкі ўвесь час сачылі за нашым домам. Яны і выратавалі нашу сям'ю. Калі мяне выцягнулі з прыбіральні і хто гэта зрабіў, я не ведаю. Мабыць, я ўжо замярзала і страціла прытомнасць, рукі счарнелі і распухлі.`,
							`Падпольшчыкі выратавалі мяне і затым перадалі маці». `
						],
						img: 'q10_1.png'
					},
					{
						text: `Так, у Мінскім гета быў супраціў.`,
						id: 2,
						answerText: [
							`Правільны адказ.`,
							`Умовы, у якіх апынуліся вязні Мінскага гета, ставілі іх на мяжу жыцця і смерці, аднак дух людзей не быў зламаны. Было арганізавана падполле на чале з Ісаем Казінцом.`,
							`Падпольшчыкі ставілі задачу наладзіць сувязь з горадам, збіраць зброю, медыкаменты, выводзіць вязняў за калючы дрот, весці разведвальную дзейнасць аб рыхтуемых немцамі пагромах.`,
							`«Мсціўцы гета» – так назваў сваіх таварышаў падпольшчык Гірш Смоляр, які выжыў у Мінскім гета.`
						],
						img: 'q10_2.jpg'
					},
					{
						text: `Так. Яго ўдзельнікі ўзнялі паўстанне, дзякуючы якому былі вызваленыя вязні Мінскага гета.`,
						id: 3,
						answerText: [
							`Не зусім дакладна.`,
							`Так, падполле было, але не займалася адкрытымі акцыямі супраціву. Яго задачай было наладзіць сувязь з горадам, збіраць зброю, медыкаменты, выводзіць вязняў за калючы дрот, весці разведвальную дзейнасць аб рыхтуемых немцамі пагромах.`
						]
					}
				]
			},

			{
				id: 11,
				img: `q11.jpg`,
				imgTitle: `Мал. Медаль Праведніка народаў свету`,
				title: `Каго называюць Праведнікамі народаў свету?`,
				desc: ``,

				options: [
					{
						text: ` Людзей неяўрэйскай нацыянальнасьці, якія свядома ратавалі яўрэяў у гады Халакосту.`,
						id: 1,
						answerText: [
							`Правільны адказ`,
							`Пры прыняцці рашэння Яд Вашэм (мемарыяльны комплекс гісторыі Халакоста ў Ізраілі) улічвае розныя віды дапамогі (напрыклад, выдачу фальшывых дакументаў, прадастаўленне прытулку і г.д.).`,
							`Выратавальнікамі, як правіла, станавіліся звычайныя людзі, якія самі адчувалі нястачу і пакуты з-за вайны. Іх адрознівала чалавечнасць, гатоўнасць прыйсці на дапамогу іншаму ў яго бядзе.`,
							`Пра подзвіг Праведнікаў ўспамінала Майя Крапіна-Левіна, 1935 г.н.: «З намі ў вёсцы Парэчча было каля 40 яўрэйскіх дзяцей. Партызаны не ведалі, што рабіць, і вырашылі пасяліць дзяцей у адным доме. Заслалі салому, на якой мы спалі ў вопратцы.`,
							`Кармілі ўсіх з аднаго карыта: налівалі вады, дадавалі мукі і рабілі нешта, што нагадвала зацірку. Калі партызаны зразумелі, што агульны дом для дзяцей не выйсце, нас раздалі "па хатах".`,
							`Уявіце, 40 яўрэйскіх дзяцей у вёсцы! Сюды стала наведваліся немцы, і ніхто не выдаў.`,
							`Калі немцы ладзілі чарговы "марафон", сяляне бралі ежу, дзяцей і хаваліся на балоце. Часам па два-тры дні там маглі сядзець». `
						],
						img: `q11_1.jpg`
					},
					{
						text: `Яўрэяў, якія выратаваліся ў Халакост.`,
						id: 2,
						answerText: [
							`Няправільна.`,
							`Людзям неяўрэйскай нацыянальнасці, якія свядома ратавалі яўрэяў у гады Халакосту. За тое, што яны нават пры пагрозе смерці змаглі захаваць чалавечнасць і дапамагчы бліжняму. `
						]
					},
					{
						text: `Партызан, якія змагаліся з акупантамі.`,
						id: 3,
						answerText: [
							`Няправільна.`,
							`Людзям неяўрэйскай нацыянальнасці, якія свядома ратавалі яўрэяў у гады Халакосту. За тое, што яны нават пры пагрозе смерці змаглі захаваць чалавечнасць і дапамагчы бліжняму.`,
							`З успаміну праведніцы Раісы Сямашка, 1930 г.н.: «Вайна назаўсёды звязала мяне з двума яўрэйскімі дзяўчынкамі, якія да вайны былі маімі аднакласніцамі. Іда засталася зусім адна: яе бацька, музыкант, напярэдадні вайны з'ехаў на гастролі, маці, супрацоўніцу НКУС, эвакуіравалі, ня дазволіўшы нават забегчы дадому за дзіцем.`,
							`Іда прыйшла да нас, і мама дазволіла ёй застацца. У ліпені 1941 года г. Ніна пайшла ў гета, дзе апынулася ў дзіцячым доме, бо у тых умовах ніхто з вязняў не мог яе ўзяць да сябе ў сям'ю. Лічылася яна там толькі намінальна, практычна ўвесь час Іда знаходзілася ў нас.`,
							`Я часта хадзіла ў гета, мама давала прадукты і я насіла іх нашым сябрам, былым суседзям. У гета я наведвала таксама сям'ю Ніны Цэйтлінай.`,
							`Пасля першых пагромаў яна стала прыходзіць да нас дадому. Падчас трэцяга пагрому мама і сястра Ніны загінулі, сама яна выжыла таму, што была ў нас. Так да 1943 г. дзяўчынкі жылі ў нашай сям'і». `
						],
						img: `q11_3.jpg`
					}
				]
			},

			{
				id: 12,
				img: `q12.jpg`,
				imgTitle: `Мал. Дэпартацыі з Заходняй Еўропы, Лістапад 1941 г.`,
				title: `Чаму яўрэяў з краін Заходняй Еўропы дэпартавалі для знішчэння менавіта на ўсход?`,
				desc: ``,

				options: [
					{
						text: `Не хапала месцаў для знішчэння ў Заходняй Еўропе.`,
						id: 1,
						answerText: [
							`Няслушна, іх дэпартавалі далей на ўсход Еўропы, бо не хацелі, каб простыя грамадзяне Трэцяга рэйха ведалі пра злачынную палітыку нацыстаў па забойстве яўрэяў. `,
							`З успамінаў Курта Маркса (1929 г.н.), чые бацькі былі забітыя ў Трасцянцы: «У 1942 годзе я атрымаў апошні ліст [ад маіх бацькоў]. Я не ведаў, што адбываецца, яны напісалі наступнае: "Мы выязджаем цяпер далёка, туды, дзе мы будзем працаваць, але куды дакладна, не ведаем". [...]`,
							`у 1942-м годзе мае бацькі прыехалі ў Мінск, у Малы Трасцянец. Пра гэта я даведаўся толькі ў 1994 годзе ... Гэта быў эшалон ад 20 ліпеня 1942 году.`,
							`Я атрымаў апошні ліст ад 19 ліпеня, за дзень да гэтага. Яны прыехалі на некалькі дзён пазней і адразу з вакзала [патрапілі] у Малы Трасцянец ...». `
						],
						img: `q12_1.jpg`
					},
					{
						text: `Дэпартуемыя самі хацелі ехаць на ўсход.`,
						id: 2,
						answerText: [
							`Няправільна.`,
							`Нацысты прымусілі яўрэяў да дэпартацыі. Але пры гэтым падтрымлівалі ілюзію, што гэта перасяленне на новае месца, дзе будзе магчымасць новага жыцця, дзе яны будуць запатрабаваныя. Тыя, хто ехаў, нават павінны былі купляць сабе квіток на цягнік, які вёз іх на знішчэнне.`,
							`З ліста Оскара Хофмана, дэпартаванага у Малы Трасцянец, сям'і Бернаўэр, у Траісдорф, штэмпель Гановера 28.7.42: «... Стаўленне падчас паездкі з боку суправаджальнага персаналу было цудоўным, недахопам была, на маю думку, дрэнная магчымасць паспаць у цягніку.`,
							`У пасажырскіх вагонах [Кёльнскі цягнік] мы былі размеркаваны ў вагонах па 8 чалавек. Пасля мы ў Волгоные [Ваўкавыск] былі перагружаны, нас разам з нашым багажом размясцілі да 50 чалавек у вагоне.`,
							`Разлічаны на нас правіянт да гэтага часу не паступіў. Як я чуў, ёсць несумненная магчымасць, што мы зможам працаваць па нашых прафесіях на тутэйшых прадпрыемствах. Калі магчыма, дашлі мне, калі ласка, мой атэстат, таму што тут ён можа быць ацэнены». `
						],
						img: `q12_2.jpg`
					},
					{
						text: `У ходзе вайны нацысты разглядалі акупаваную тэрыторыю СССР як месца для масавых знішчэнняў.`,
						id: 3,
						answerText: [
							`Правільны адказ.`,
							`З чэрвеня 1941 года немцы пачалі масавыя расстрэлы савецкіх яўрэяў. Але ў еўрапейскіх гарадах такі падыход быў практычна немагчымы. Тады нацысты прыдумалі дэпартацыі на ўсход. Адным з цэнтраў забойства дэпартаваных яўрэяў стаў Мінск.`,
							`Для дэпартацыі яўрэяў з месцаў іх пражывання ў краіны Усходняй Еўропы ўлады нацысцкай Германіі выкарыстоўвалі чыгунку. Выкарыстоўваліся як пасажырскія, так і таварныя вагоны. Як правіла, падчас дэпартацый нацысты не давалі людзям ежу і ваду, нават калі ім даводзілася днямі стаяць на адгалінаванні чыгункі ў чаканні, калі пройдуць іншыя цягнікі.`,
							`Заходнееўрапейскія яўрэі, департаваныя ў 1941 г. у Мінск, былі паселены ў Зондэргета Мінскага гета. Яны не ведалі мовы мясцовага насельніцтва, і ім было нашмат цяжэй прыстасавацца да цяжкага мясцовага побыту.`,
							`Тых, хто прыязджаў цягнікамі з мая па кастрычнік 1942 г., адпраўлялі прама ў Благаўшчыну каля Малога Трасцянца і забівалі. `
						]
					}
				]
			},
			{
				id: 13,
				img: `q13.jpg`,
				imgTitle: `Мал. Старонка з рэкламнага праспекта кампаніі «Гаубшат», якая выпускала кузавы для «душагубак» `,
				title: `Пра якія машыны ідзе гаворка?`,
				desc: ``,

				options: [
					{
						text: `Герметычны фургон (аўтамабіль), у якім нацысты арганізавалі забойства людзей з дапамогай угарнага газу (СО).`,
						id: 1,
						answerText: [
							`Правільны адказ.`,
							`Дадзеныя аўтамабілі мелі яшчэ назву Газваген (ням. Газавы аўтамабіль), таму што ўяўлялі сабой мабільную газавую камеру, якая выкарыстоўвалася для масавага забойства людзей.`,
							`У літаратуры і ўспамінах часта называюцца «душагубкамі».`,
							`Нацысты па меншай меры з восені 1939 г. ўжывалі угарны газ для забойства псіхічна хворых, разумова адсталых і фізічна непаўнавартасных людзей. `,
							`Па сведчанні відавочцаў, кузаў герметычнага фургона, у які падаваўся угарны газ (СО), умяшчаў да 100 чалавек. Ахвяры гінулі пакутлівай смерцю ад удушша. Забойствам людзей у такіх фургонах ў асноўным займаліся спецыяльныя каманды. `,
							`Мал. На карціне І. Гембіцкага 1944 г. намаляваны момант пасадкі ахвяр у машыны- «душагубкі». `
						],
						img: `q13_1.jpg`
					},
					{
						text: `Грузавы аўтамабіль.`,
						id: 2,
						answerText: [
							`Не зусім так.`,
							`Гэта аўтамабіль з фургонам для перавозкі людзей, абсталяваны сістэмай паступлення газу ў кузаў, пры ўключэнні якой ахвяры гінулі пакутлівай смерцю ад удушша. Жыхары акупаваных тэрыторый называлі гэтыя аўтамабілі «душагубкамі». `
						]
					},
					{
						text: `Машына хуткай дапамогі.`,
						id: 3,
						answerText: [
							`Няправільна.`,
							`Герметычны фургон (аўтамабіль), у якім нацысты арганізавалі забойства людзей з дапамогай угарнага газу (СО). `,
							`Майя Крапіна-Левіна, 1935 г.н. узгадвала: «21 кастрычніка 1943 г. у гета я выйшла з дому і ўбачыла вялікую колькасць немцаў, душагубак каля цэнтральных варот. Мы адразу здагадаліся, што гэта пагром.`,
							`Я падбегла да бальніцы і стала клікаць брата праз акно. Ён спусціўся з другога паверха па вадасцёкавай трубе.`,
							`Мы ведалі, што ўсе "маліны" ўжо перапоўненыя, і вырашылі бегчы праз яўрэйскія могілкі. Пералезлі пад дротам, сарвалі жоўтыя латы і ўбачылі, што за намі бягуць чалавек 15 дзяцей.`,
							`Брат сказаў, што ведае дарогу да партызанаў, і паабяцаў іншых рабят туды адвесці пры ўмове, што яны па чарзе будуць мяне, знясіленую, несці на плячах». `
						],
						img: `q13_3.jpg`
					}
				]
			},
			{
				id: 14,
				img: `q14.jpg`,
				imgTitle: `Мал. «Брама памяці». Мінск, 2015 г.`,
				title: `Чым вядомы Малы Трасцянец?`,
				desc: ``,

				options: [
					{
						text: `Месца прымусовага ўтрымання падчас акупацыі Мінска.`,
						id: 1,
						answerText: [
							`Няправільна.`,
							`Трасцянец вядомы тым, што гэта была зборная назва для трох месцаў знішчэння, у склад уваходзіў і працоўны лагер, дзе некаторы час маглі ўтрымліваць людзей. `
						]
					},
					{
						text: `Месца самай вядомай бітвы Вялікай Айчыннай вайны.`,
						id: 2,
						answerText: [
							`Няслушна, у ваколіцах вёскі Малы Трасцянец з канца красавіка-пачатку мая 1942 г. да ліпеня 1944 г. існаваў найбуйнейшы лагер смерці на акупаванай тэрыторыі СССР.`
						]
					},
					{
						text: `Найбуйнейшы лагер смерці на акупаванай тэрыторыі СССР.`,
						id: 3,
						answerText: [
							`Правільны адказ.`,
							`Існаваў у ваколіцах вёскі Малы Трасцянец з канца красавіка-пачатку мая 1942 г. да канца чэрвеня 1944 г. `
						]
					}
				]
			},
			{
				id: 15,
				img: `q15.jpg`,
				imgTitle: `Мал. Лазар Ран. За калючым дротам. З серыі «Мінскае гета». Афорт. 1962-1972 гг.`,
				title: `Калі было ліквідавана Мінскае гета?`,
				desc: ``,

				options: [
					{
						text: `3 ліпеня 1944 г. вызваліла Чырвоная Армія.`,
						id: 1,
						answerText: [
							`На жаль, не.`,
							`Апошні пагром прайшоў на працягу 21-23 кастрычніка 1943 г., пасля чаго Мінскае гета перастала існаваць.`
						]
					},
					{
						text: `21-23 кастрычніка 1943 г.`,
						id: 2,
						answerText: [
							`Правільны адказ `,
							`У гэтыя дні прайшоў апошні пагром, калі Мінскае гета было канчаткова ліквідавана.`
						]
					},
					{
						text: `7 лістапада 1941 г.`,
						id: 3,
						answerText: [
							`Няслушна, у гэты дзень быў першы з самых вядомых пагромаў.`,
							`Гета пасля гэтага існавала яшчэ прыкладна два гады да 23 кастрычніка 1943 г., калі было канчаткова ліквідавана, а яго жыхары забітыя.`,
							`З успамінаў Рубінчык Х. І. аб пагроме 7 лістапада 1941 года: «7 лістапада ў 5.30 раніцы пад'ехалі узброеныя рыдлёўкамі і агнястрэльнай зброяй групы. Узломвалі дзверы, урываліся ў дамы і ўсіх, хто знаходзіўся дома, выганялі на вуліцу.`,
							`Потым выстройвалі ў калоны і накіроўвалі ўсіх на Хлебную вуліцу. Там стаялі загадзя падрыхтаваныя аўтамашыны. Інвалідаў, якія не маглі рухацца, выносілі з кватэры і, як дровы, закідвалі ў аўтамашыны ... `,
							`У гэты дзень было вывезена прыкладна тысяч 10 яўрэяў. Вывозілі іх у Тучынку, на тэрыторыю цагляных заводаў. Так як машыны падвозілі хутчэй, чым кулямёты паспявалі расстрэльваць, то прывезеных людзей пакуль размяшчалі ў халодных бараках.`,
							`З гэтых баракаў іх выганялі па 10 чалавек да загадзя выкапаных ям, прымушалі распранацца і расстрэльвалі». `
						]
					}
				]
			},
			{
				id: 16,
				img: `q16.jpg`,
				imgTitle: `Мал. Артыкул у газеце «Праўда» і савецкая карыкатура на тэму «Справы яўрэйскіх урачоў»`,
				title: `Чаму многія яўрэі ў савецкі час не расказвалі пра тое, што былі вязнямі гета і нацысцкіх канцлагераў?`,
				desc: ``,

				options: [
					{
						text: `Лічылі гэта вопытам, за які было сорамна.`,
						id: 1,
						answerText: [
							`Няслушна, маўчанне было абумоўлена афіцыйнай палітыкай антысемітызму, калі прызнаваць сябе публічна яўрэем і праследаваным па нацыянальнай прыкмеце не было прынята, таму што магло пацягнуць праблемы ў паўсядзённым жыцці.`,
							`Таксама гэтаму садзейнічала нежаданне нагадваць пра ўнутраную траўму, бо многія выжылыя яўрэі Беларусі страцілі блізкіх у Халакост.`
						]
					},
					{
						text: `З-за нежадання нагадваць аб траўме, а таксама сутыкнуцца з праявамі антысемітызму і пераследам за знаходжанне на акупаванай тэрыторыі.`,
						id: 2,
						answerText: [
							`Правільны адказ.`,
							`Пасля вайны на дзяржаўным узроўні была прынятая палітыка антысемітызму. Праз т.зв. «пятую графу» у анкеце чыноўнікі даведваліся пра яўрэйскую нацыянальнасць чалавека, за што маглі пачацца абмежаванні ў прасоўванні па службе, праблемы з атрыманнем адукацыі і г.д. `,
							`Пры такой палітыцы дзяржава не была арыентавана на дапамогу яўрэям, ахвярам генацыду па нацыянальнай прыкмеце. Таксама абмежаванні ў кар'еры і адукацыі былі і для тых, хто ў анкеце пазначаў, што заставаўся на акупаванай тэрыторыі.`,
							`Галіна Кульчаева (1916 г.н.): «У 50-х гадах мяне выклікалі ў КДБ. Пыталіся: "Вось раскажыце, як вы засталіся жывыя?" `,
							`Я кажу: "А што, дрэнна, што я засталася жывая? Гэта хіба дрэнна?" `
						]
					},
					{
						text: `Ім было забаронена гаварыць пра гэта.`,
						id: 3,
						answerText: [
							`Няправільна.`,
							`Фармальна ніхто не забараняў, але і не заахвочваў.`,
							`Гэта было звязана з агульнай палітыкай антысемітызму ў Савецкім саюзе, наступствам якой было нежаданне ўладаў прызнаць факт генацыду яўрэйскага народа па нацыянальнай прыкмеце. `
						]
					}
				]
			},
			{
				id: 17,
				img: `q17.jpg`,
				imgTitle: `Мал. Скульптурная кампазіцыя "Апошні шлях", Мінск, 2000 г.`,
				title: `Якое месца на тэрыторыі былога Мінскага гета стала цэнтральным месцам памяці і сустрэч для тых, хто выжыў і страціў блізкіх?`,
				desc: ``,

				options: [
					{
						text: `Мемарыял «Яма».`,
						id: 1,
						answerText: [
							`Правільны адказ.`,
							`У 1947 г. вярнуліся пасля вайны яўрэі горада і ўвекавечылі памяць ахвяраў пагрому 2-3 сакавіка 1942 г., усталяваўшы адзін з першых у СССР помнікаў з надпісам на мове ідыш - «Чорны абеліск». І з таго часу каля яго ў гадавіну пагрому збіраліся тыя, хто захоўваў памяць аб загінулых у Мінскім гета.`,
							`У 2000 годзе створаны мемарыял са скульптурнай групай «Апошні шлях», праводзяцца жалобныя мерапрыемствы ў памяць пра ахвяраў Халакосту. `
						]
					},
					{
						text: `Плошча Перамогі.`,
						id: 2,
						answerText: [
							`Няправільна.`,
							`Гэта "Яма", дзе былі пахаваныя ахвяры пагрому 2-3 сакавіка 1942 г. Там ў 1947 г. быў усталяваны помнік, а ў 2000 - створаны мемарыял, дзе рэгулярна праводзяцца мерапрыемствы ў памяць пра ахвяраў Халакосту. `,
							`З успамінаў Рамана Мардаховіча: «Многія гады «Яма» была знакавым месцам для мінскіх яўрэяў. У 1970-1980-я кожны год 9 мая там збіраліся тысячы мінскіх яўрэяў.`,
							`Прыкладна з 11 гадзін раніцы немагчыма было прайсці па Ратамскай вуліцы. Гэта не было ні афіцыйным, ні самадзейным мітынгам, пра гэтую сустрэчу ніхто ніколі не аб'яўляў, але з году ў год колькасць людзей, якія туды прыходзілі, павялічвалася».`
						]
					},
					{
						text: `Былыя яўрэйскія могілкі.`,
						id: 3,
						answerText: [
							`Не зусім дакладна.`,
							`Гэта "Яма", дзе былі пахаваныя ахвяры пагрому 2-3 сакавіка 1942 г. Там ў 1947 г. быў усталяваны помнік ахвярам, а ў 2000 - створаны мемарыял, дзе часта праводзяцца мерапрыемствы ў памяць пра ахвяраў Халакосту. `,
							`Але трэба памятаць, што сапраўды на тэрыторыі былых яўрэйскіх могілак адбываліся расстрэлы ў час вайны і зараз знаходзяцца некалькі месцаў памяці - «Разбіты ачаг» і камяні ў памяць дэпартацыяў і іх ахвяр з розных гарадоў Цэнтральнай Еўропы. Там таксама праходзяць акцыі памяці пра ахвяр.`
						]
					}
				]
			}
		]
	}
};

export default data;
