// Mortgage persona data including creative briefs, profiles, and journey maps
export const personas = {
  firstTimeBuyer: {
    name: "First-Time Home Buyers",
    product: "Purchase - First Home",
    creativeBrief: {
      visualStyle: "Bright, optimistic, modern. Think Instagram aesthetic. Young couples/individuals. Urban/suburban settings. Aspirational but authentic.",
      colorPalette: "Vibrant blues, teals, coral accents. Avoid corporate navy/gray. Use gradients sparingly but effectively. HIGH CONTRAST essential for outdoor (research: 5:1 minimum ratio).",
      typography: "Modern sans-serif ONLY (Helvetica, Arial, Futura). Bold headlines (700-900 weight). For highway: 50+ inch letters minimum. Casual, friendly tone. Use emojis sparingly if appropriate for venue. NEVER script or thin fonts (blur at distance).",
      keyMessages: ["Stop renting, start owning (5 words ✓)", "$0 down programs exist (4 words ✓)", "Building equity vs. burning rent (5 words ✓)", "Easier than you think (4 words ✓)", "You're ready (2 words ✓)"],
      imagery: "Young professionals, modern apartments/condos, city life, keys, celebrating, moving boxes (positive context), first home pride. SINGLE dominant image per creative (research: multiple focal points decrease retention 45%).",
      tone: "Empowering, removing fear, 'you got this' energy, social proof, FOMO (friends are buying)",
      ctaStyle: "Action-oriented: 'Get Pre-Approved Now', 'Check Your Rate', 'Start Your Journey'. Keep to 3-4 words max.",
      videoApproach: "Fast-paced, trendy transitions. Show day-in-life progression: renting → searching → keys → celebrating. 15-20 second sweet spot. CRITICAL: Design for SOUND OFF (89% play muted). Burned-in captions mandatory.",
      avoid: "Corporate jargon, complex terms, fear-based messaging, showing only expensive homes, EXCEEDING 7 WORDS on any single message (recall drops 60%)",
      scienceApplication: "MERE EXPOSURE EFFECT: Young professionals pass same boards daily (10-20x/month) = subconscious familiarity builds over 4-6 weeks even without conscious recall. Keep message consistent across locations for brand recognition. Research shows: 5-7 exposures needed for unaided recall. Your repetition strategy IS your conversion strategy."
    },
    profile: {
      age: "26-34",
      income: "$75K-$120K household",
      employment: "Young professionals, dual income",
      lifestyle: "Active, social, digitally native",
      painPoints: ["Down payment concerns", "Credit uncertainty", "Process intimidation", "Student loan debt"]
    },
    persona: "Meet Sarah & Jake - Late 20s couple, both work in tech/marketing, rent a 1BR apartment, want to start a family soon, scrolling Zillow nightly",
    journey: [
      { time: "6:30 AM", location: "Home", activity: "Wake up, check phone", venue: "N/A", message: "Skip - they're barely awake", strategy: "", wordCount: 0, scienceNote: "" },
      { time: "7:00 AM", location: "Gym", activity: "Morning workout", venue: "Gym screens", message: "Own for LESS than rent. $0 down.", strategy: "High energy, motivational. Show payment comparisons to rent. 45-90 min dwell time = multiple exposures build familiarity (mere exposure effect). Achievement mindset = perfect for financial goals messaging.", wordCount: 7, scienceNote: "PERFECT length. 15-30 second spot allows full message. Design for sound OFF. Motion graphics work well here—gym-goers' attention already elevated." },
      { time: "8:15 AM", location: "Coffee Shop", activity: "Grab coffee on way to work", venue: "Coffee shop", message: "First home? Pre-approved in 10 minutes.", strategy: "QR code for instant pre-qual. Remove friction. Morning optimism = aspirational messaging. 5-15 min dwell, phones in hand. Portrait orientation—design like Instagram Stories.", wordCount: 6, scienceNote: "Under 7-word rule ✓. 8-15 second spot ideal. Vertical format requires different visual hierarchy. QR codes highly effective (71% have phones ready)." },
      { time: "8:45 AM", location: "Commute", activity: "Drive/transit to work", venue: "Roadside billboards", message: "Stop renting. Start building equity.", strategy: "Simple, emotional at 60 mph. Brand awareness during routine. 3-5 second viewing window. Needs 50+ inch letters, high contrast. Mere exposure effect: they'll see this 10-20x/month.", wordCount: 5, scienceNote: "HIGHWAY PERFECT: Under 7 words, 1-2 seconds to read. Single concept. 86% recall rate when done right. Repetition builds subconscious preference over time." },
      { time: "9:00 AM-12:00 PM", location: "Office", activity: "Work (distracted)", venue: "Office building", message: "Your coworkers are buying. You can too.", strategy: "Social proof. FOMO for office environment. Elevator = 30-second captive audience. Professional context = polished creative. They have phones—include QR.", wordCount: 7, scienceNote: "Hitting 7-word max perfectly. Elevator viewing = truly captive (can't look away). Portrait orientation. 15-30 seconds allows complete thought." },
      { time: "12:30 PM", location: "Lunch spot", activity: "Lunch break", venue: "Shopping mall", message: "First home. Zero down. Real.", strategy: "Longer dwell = can include URL or number. Educational approach OK with 2-4 hour mall visit. Multiple exposures during shopping trip build familiarity.", wordCount: 6, scienceNote: "Under limit ✓. Pedestrian/slow traffic = up to 15 words acceptable, but shorter is still better. Can include secondary info (URL)." },
      { time: "1:00-5:00 PM", location: "Office", activity: "Afternoon work", venue: "Office building", message: "Rent payment → House down payment.", strategy: "Elevator = 30 seconds captive. Simple math, visual comparison. Portrait screen. They're thinking about money (work context). Symbol (→) works—visual processing is faster.", wordCount: 5, scienceNote: "Arrow/symbol counts as ~1 word cognitively. Truly captive audience (most captive in OOH after gas pumps). Can process more complex ideas." },
      { time: "6:00 PM", location: "Grocery store", activity: "Pick up dinner ingredients", venue: "Grocery store", message: "Growing out of your rental? We'll help.", strategy: "Relatable, domestic mode. They're buying for home = thinking homeowner thoughts. 30-60 min shopping = 4-6 plays minimum. Repetition breeds trust.", wordCount: 7, scienceNote: "At 7-word max. Domestic context perfect for homeownership messaging. Long dwell time = multiple exposures trigger mere exposure effect within single visit." },
      { time: "7:30 PM", location: "Home", activity: "Zillow scrolling on couch", venue: "N/A", message: "Skip OOH - retarget digitally", strategy: "", wordCount: 0, scienceNote: "" },
      { time: "9:00 PM", location: "Bar/Restaurant", activity: "Weeknight social (2-3x/week)", venue: "Restaurant/bar", message: "Skip drinks. Buy the house. Seriously.", strategy: "Social context, young aspirational. 45-90 min dwell. Playful tone works in bar setting. They're relaxed, social, thinking about lifestyle choices.", wordCount: 6, scienceNote: "Under limit ✓. Long dwell time allows storytelling across multiple plays. Relaxed mindset = receptive to aspirational messaging." }
    ]
  },
  moveUpBuyer: {
    name: "Move-Up Buyers",
    product: "Purchase - Larger Home",
    creativeBrief: {
      visualStyle: "Family-focused, warm, aspirational. Show growth, space, comfort. Suburban homes with yards. More polished than first-time buyer creative.",
      colorPalette: "Warm neutrals with pops of family-friendly colors. Sage green, warm gray, soft blue. Homey, not sterile.",
      typography: "Professional but warm. Serif headers acceptable. Easy to read quickly (busy parents).",
      keyMessages: ["You've outgrown this", "Your equity = down payment", "Better schools, more space", "Room to grow", "No need to wait"],
      imagery: "Families with kids 4-12, yards, playrooms, home offices, school zones, minivans (embrace it), organized homes, family dinners",
      tone: "Empowering upgrade. Permission to want more. Practical but exciting. Focus on family needs.",
      ctaStyle: "Solution-focused: 'Explore Upgrade Options', 'Use Your Equity', 'Find More Space'",
      videoApproach: "Storytelling: cramped house → searching for space → finding perfect family home. Show actual family life chaos → organized new space. 20-30 seconds.",
      avoid: "Making current home seem 'bad', luxury mansion imagery, focusing only on material upgrades"
    },
    profile: {
      age: "35-45",
      income: "$120K-$200K household",
      employment: "Established careers, promotions",
      lifestyle: "Family-focused, busy parents, kid activities",
      painPoints: ["Timing sale + purchase", "Larger down payment", "School districts", "Upgrading without overstretching"]
    },
    persona: "Meet The Martins - Late 30s with 2 kids (ages 4 & 7), outgrowing their 3BR starter home, need home office space, concerned about rates",
    journey: [
      { time: "6:00 AM", location: "Home", activity: "Getting kids ready", venue: "N/A", message: "Skip - chaos mode", strategy: "", wordCount: 0, scienceNote: "" },
      { time: "7:45 AM", location: "School drop-off", activity: "Kid drop-off routine", venue: "Roadside billboards", message: "Better schools. Bigger yard. More space.", strategy: "Emotional triggers: family, space, education. They pass this 2x daily = 10x weekly exposure. Perfect for mere exposure effect. Thinking about kids' needs right now.", wordCount: 6, scienceNote: "Under 7 words ✓. School zone = slower speeds (5-8 sec viewing). Same parents see repeatedly = familiarity builds preference without conscious awareness." },
      { time: "8:30 AM", location: "Commute", activity: "Drive to work (alone time!)", venue: "Roadside billboards", message: "Outgrown your starter home? Bridge loans.", strategy: "Problem/solution. 60 mph = need bold, simple. 'Bridge loans' is solution (3 syllables max per word ideal). Their alone time = they can think.", wordCount: 6, scienceNote: "Perfect highway length. 50+ inch letters minimum. High contrast essential. 3-5 second viewing at speed. Single concept: outgrown = solution exists." },
      { time: "12:00 PM", location: "Lunch meeting", activity: "Business lunch", venue: "Restaurant/bar", message: "Move up without selling first. How?", strategy: "Professional context. Sophisticated products. Question format engages. 45-90 min lunch = multiple plays. QR code for 'how' answer.", wordCount: 7, scienceNote: "At 7-word limit. Restaurant dwell = can include secondary CTA. Question format increases engagement (brain seeks answers). Professional setting = polished creative." },
      { time: "3:30 PM", location: "School pickup", activity: "Pick up kids", venue: "Grocery store", message: "Your equity = Your bigger home.", strategy: "Simple math while thinking about kids/family. School zone 2x daily touchpoint. Equation format (=) processes faster than text. En route to errands = domestic mindset activated.", wordCount: 6, scienceNote: "Under limit. Symbol (=) is cognitive shortcut. Repetition: same route daily = 10x weekly = subconscious brand building over 4-6 weeks." },
      { time: "5:00 PM", location: "Kids' activities", activity: "Soccer/dance/gymnastics", venue: "Sports facilities", message: "Room for everyone. Yards for play.", strategy: "Parents waiting 45-90 min = most captive daytime OOH audience after elevators. They're watching kids, thinking about family needs. Multi-exposure per visit.", wordCount: 6, scienceNote: "Perfect length. LONG dwell time = can show 3-4 different messages rotating. Build narrative across practice time. Parents = highly receptive to family messaging here." },
      { time: "6:30 PM", location: "Grocery store", activity: "Dinner shopping with kids", venue: "Grocery store", message: "Growing family needs growing space. Easy.", strategy: "Contextual GOLD. Literally thinking 'we need more space' as they navigate crowded aisles with kids. Cart ads = 30-60 min exposure. Multiple screen plays during shop.", wordCount: 7, scienceNote: "At limit. Context perfect: tight spaces with kids = 'we need bigger house' thought naturally occurs. Cart ads have 100% attention (looking down at cart constantly)." },
      { time: "8:00 PM", location: "Home", activity: "Kids' bedtime routine", venue: "N/A", message: "Skip OOH", strategy: "", wordCount: 0, scienceNote: "" },
      { time: "9:30 PM", location: "Home", activity: "Finally relaxing, browsing homes", venue: "N/A", message: "Skip OOH - digital retargeting time", strategy: "", wordCount: 0, scienceNote: "" }
    ]
  },
  refinance: {
    name: "Refinance Prospects",
    product: "Rate & Term Refinance",
    creativeBrief: {
      visualStyle: "Clean, financial, trustworthy. Show calculators, graphs, clear before/after. Professional without being stuffy.",
      colorPalette: "Trust colors: navy, green (money), white. Use red for 'old rate' and green for 'new rate' comparisons.",
      typography: "Numbers should be HUGE. Clear, bold sans-serif. Make math visual and obvious.",
      keyMessages: ["Lower rate = Lower payment", "Refinance could save $X/month", "No cash out of pocket", "Takes 2 weeks", "Your rate is probably too high"],
      imagery: "Calculators, before/after payment comparisons, rate charts dropping, relieved homeowners, 'paid' stamps, checking accounts with more money",
      tone: "Urgent but not pushy. Make math emotional. 'Stop overpaying.' Financial empowerment.",
      ctaStyle: "Calculator-focused: 'Check Your Savings', 'Calculate New Payment', 'See If You Qualify'",
      videoApproach: "Animated numbers. Show interest rate ticker dropping. Before/after payment animations. Calculator interface. 15-20 seconds max.",
      avoid: "Over-promising, hiding costs, making it seem too complex, not showing actual numbers"
    },
    profile: {
      age: "30-55",
      income: "$80K-$180K",
      employment: "Stable, employed 2+ years",
      lifestyle: "Established homeowners, cost-conscious",
      painPoints: ["Current rate vs market rate", "Closing costs", "Credit improvement since purchase", "Break-even analysis"]
    },
    persona: "Meet David - 42, bought home in 2021 at 6.5%, paying $2,800/month, heard rates dropped, wondering if refinancing is worth it",
    journey: [
      { time: "7:00 AM", location: "Morning routine", activity: "Checking news/finance apps", venue: "N/A", message: "Skip - digital is better here", strategy: "", wordCount: 0, scienceNote: "" },
      { time: "7:45 AM", location: "Gym", activity: "Morning workout", venue: "Gym screens", message: "Paying 6%? Refi saves $400 monthly.", strategy: "Specific numbers grab attention. Calculator messaging. Achievement mindset + financial optimization = perfect match. 15-30 second spot allows math to sink in.", wordCount: 7, scienceNote: "At 7-word limit. Dollar amounts are HIGH attention grabbers. Motion graphics showing calculator/savings animation work well. Sound OFF design critical." },
      { time: "8:30 AM", location: "Commute", activity: "Drive to work, thinking about money", venue: "Gas station", message: "That 6% mortgage? We'll fix it.", strategy: "Simple problem-solution at 60 mph. Current rate pain point + solution promise. Commute = financial planning mindset. Will see 10x+ monthly = builds 'they can help' association.", wordCount: 7, scienceNote: "Perfect highway message. Question format engages brain. 'Fix' is action verb (1 syllable). High contrast essential: black on yellow or white on dark blue." },
      { time: "12:00 PM", location: "Lunch", activity: "Running errands", venue: "Shopping mall", message: "Lower rate. Lower payment. Check savings.", strategy: "Alliteration (Lower/Lower) aids memory. Call-to-action is specific. Near banks = financial context activated. Surface street = 5-8 seconds viewing OK.", wordCount: 6, scienceNote: "Under limit ✓. Repetition of 'Lower' = processing fluency (brain likes patterns). Near financial institutions = contextually relevant (72% shop on way home)." },
      { time: "3:00 PM", location: "Gas station", activity: "Filling up (thinking about costs)", venue: "Gas station", message: "Everything's expensive. Your NEW rate isn't.", strategy: "CONTEXTUAL BRILLIANCE. Watching dollars climb = cost consciousness peaks. 3-5 min captive = most valuable OOH audience. Can show savings calculator animation across full spot.", wordCount: 7, scienceNote: "PERFECT gas station psychology. Most captive audience (can't look away while pumping). Financial stress context = high receptivity. 30-sec spots allow storytelling." },
      { time: "5:30 PM", location: "Commute home", activity: "Drive home", venue: "Roadside billboards", message: "Refinance from 5.99%. No hidden fees.", strategy: "Lead with rate (decision time = evening commute). Transparency builds trust. Same commute route = 10-20x monthly exposure = subconscious familiarity compounds.", wordCount: 6, scienceNote: "Under limit. Specific rate number = credibility. 'No hidden fees' addresses objection. Evening commute = decision-making time (planning mode active)." },
      { time: "6:30 PM", location: "Home errands", activity: "Pharmacy/grocery pickup", venue: "Pharmacy", message: "Lower payment. Keep your home. Easy.", strategy: "Simple benefit statement. Domestic evening errands = thinking about household finances. Pharmacy/grocery = repeated weekly visits = frequency builds trust.", wordCount: 7, scienceNote: "At limit. 'Keep your home' = addresses cash-out concern. Evening domestic errands = receptive to home/financial messaging. Repetition critical here." },
      { time: "8:00 PM", location: "Home", activity: "Paying bills online, financial review", venue: "N/A", message: "Skip OOH - retarget digitally on finance sites", strategy: "", wordCount: 0, scienceNote: "" }
    ]
  },
  cashOutRefi: {
    name: "Cash-Out Refinance",
    product: "Cash-Out Refinance",
    creativeBrief: {
      visualStyle: "Before/after transformation. Show projects, improvements, debt payoff. Aspirational home spaces.",
      colorPalette: "Transformation palette: dark/light contrast. Before = dull/dark, After = bright/renovated. Use wood tones, stone, modern finishes.",
      typography: "Bold headlines with dollar amounts. Project-focused language. Clear benefit statements.",
      keyMessages: ["Your equity is an asset", "Fund renovations at 6% vs 22% credit card", "Turn equity into cash", "Low rate debt consolidation", "$50K at 6.5%"],
      imagery: "Home renovations, kitchen/bath remodels, before/after spaces, credit card scissors, paid-off debt, home improvement tools, beautiful finished spaces",
      tone: "Permission-giving. 'It's YOUR equity.' Educational about smart debt. Practical financial advice.",
      ctaStyle: "Project-focused: 'Fund Your Renovation', 'Calculate Your Equity', 'Turn Equity Into Cash'",
      videoApproach: "Before/after transformations. Show renovation timeline. Compare credit card rates to mortgage rates visually. 20-30 seconds.",
      avoid: "Encouraging overspending, showing only luxury upgrades, ignoring the debt aspect"
    },
    profile: {
      age: "35-60",
      income: "$90K-$200K",
      employment: "Established, equity-rich",
      lifestyle: "Home improvement focused, debt consolidation needs",
      painPoints: ["How much equity to tap", "Home improvement costs", "Credit card debt", "Kids' education expenses"]
    },
    persona: "Meet Jennifer - 48, has $200K equity, needs $50K for kitchen remodel + pool, current rate 4.5%, hesitant to touch equity",
    journey: [
      { time: "8:00 AM", location: "Commute", activity: "Driving, planning projects", venue: "Roadside billboards", message: "Your home equity IS an asset.", strategy: "Permission messaging. Equity education. Many don't realize equity = usable money. 60 mph = simple concept only. Repetition over weeks builds 'it's OK to use equity' mindset.", wordCount: 6, scienceNote: "Under 7-word limit ✓. Highway speed perfect for single mindset shift. Emphasis on 'IS' = assertive permission-giving. Bold typography essential." },
      { time: "10:00 AM", location: "Home improvement store", activity: "Weekend errands (Sat/Sun spike)", venue: "Hardware store", message: "Fund renovations with equity. From 6.2%.", strategy: "PERFECT CONTEXT. They're literally shopping for projects. This is THE moment. Multiple touchpoints: parking lot board + in-store screens. 30-90 min dwell = 6-8 plays minimum.", wordCount: 7, scienceNote: "At limit but worth it—rate specificity builds credibility. Hardware store context = highest conversion potential. They're holding project list, calculating costs RIGHT NOW." },
      { time: "12:00 PM", location: "Lunch/errands", activity: "Shopping areas", venue: "Shopping mall", message: "One low rate beats five cards.", strategy: "Debt consolidation angle. Mall shopping = credit card context. Simple math: 1 vs 5. 'Beats' is competitive, active verb. 2-4 hour mall visits = repetition builds familiarity.", wordCount: 6, scienceNote: "Under limit ✓. Mathematical comparison (1 vs 5) = cognitive ease. Retail environment = credit card awareness high. Multiple exposures per visit trigger mere exposure effect." },
      { time: "2:00 PM", location: "Home improvement store", activity: "Return trip (buying supplies)", venue: "Hardware store", message: "$40K project? Pull from equity, 6%.", strategy: "Second touchpoint same trip = reinforcement. Checkout = they've committed to project, now showing funding. Specific dollar amount = relatable project size (kitchen, bathroom, deck).", wordCount: 7, scienceNote: "At limit with numbers. Second exposure same visit = message reinforcement (repetition key to recall). Checkout = they've already decided to spend—now offer funding solution." },
      { time: "6:00 PM", location: "Grocery store", activity: "Shopping", venue: "Grocery store", message: "Stop using cards. Tap equity instead.", strategy: "Financial wellness in domestic setting. Weekend evening shopping = family together, thinking household. Action verbs: Stop/Tap. 30-60 min = multiple plays cement message.", wordCount: 6, scienceNote: "Perfect length. Imperative verbs (Stop/Tap) = action-oriented. Domestic context Sunday evening = household financial planning mindset active." }
    ]
  },
  heloc: {
    name: "HELOC Prospects",
    product: "Home Equity Line of Credit",
    creativeBrief: {
      visualStyle: "Sophisticated, flexible, opportunity-focused. Show investments, multiple projects, business growth. Professional but accessible.",
      colorPalette: "Professional: charcoal, sage, gold accents. Upscale without being pretentious. Modern, clean.",
      typography: "Modern, clean sans-serif or contemporary serif. Professional headings. Clear, straightforward body copy.",
      keyMessages: ["Ready capital when you need it", "Pay for what you use", "Flexible access to equity", "Business opportunities", "Rates from 7.5%"],
      imagery: "Multiple projects in progress, investment properties, business handshakes, renovation timelines, credit line graphics, 'available funds' visualizations",
      tone: "Financially savvy. Sophisticated. Opportunity-focused. Strategic financial tool positioning.",
      ctaStyle: "Strategic: 'Explore Your Credit Line', 'Calculate Available Equity', 'Open Your HELOC'",
      videoApproach: "Show flexibility: project 1 → draw funds → project 2 → draw funds. Animated credit line visualization. 25-30 seconds.",
      avoid: "Treating it like cash-out refi, over-simplifying the product, ignoring the business use case"
    },
    profile: {
      age: "40-65",
      income: "$100K-$250K",
      employment: "Established professionals, business owners",
      lifestyle: "Long-term homeowners, project-focused, financial savvy",
      painPoints: ["Ongoing project needs", "Flexible access to funds", "Rates vs cash-out", "Draw period understanding"]
    },
    persona: "Meet Robert & Linda - Mid-50s, owned home 15 years, want flexible access to equity for ongoing renovations + potential investment property",
    journey: [
      { time: "7:00 AM", location: "Gym", activity: "Morning workout", venue: "Gym screens", message: "Smart money: Unlock equity with HELOC.", strategy: "Aspirational, sophisticated audience. Financial wellness + achievement mindset. 'Smart money' = appeals to their financial savvy. 45-90 min dwell = multiple exposures build product awareness.", wordCount: 6, scienceNote: "Under limit ✓. 'Smart money' = aspirational language for upscale audience. Morning workout = peak mental clarity for financial messaging. Sound OFF essential." },
      { time: "9:00 AM", location: "Coffee shop", activity: "Business meetings/co-working", venue: "Coffee shop", message: "Business opportunity? HELOC = ready capital.", strategy: "Business/investment angle. Coffee shop meetings = entrepreneurial mindset. Equation format (=) = quick cognitive processing. Morning business hours = strategic planning time.", wordCount: 6, scienceNote: "Perfect for professional context. Equation processing faster than sentence. 8-15 second spots work. Portrait orientation—phones in hand for QR codes." },
      { time: "11:00 AM", location: "Home Depot/Lowe's", activity: "Project shopping (frequent)", venue: "Hardware store", message: "Pay as you go. HELOC. 7.5%.", strategy: "Perfect match: ongoing project mentality. HELOC flexibility = perfect for serial home improvers. They're here 2-4x monthly = high frequency builds familiarity over time.", wordCount: 7, scienceNote: "At limit. 'Pay as you go' = flexibility benefit clear. Multiple visits monthly = mere exposure effect compounds. They associate your brand with home projects." },
      { time: "1:00 PM", location: "Bank/financial district", activity: "Banking errands", venue: "Roadside billboards", message: "Your home = Your credit line.", strategy: "Financial sophistication messaging. Equation format. Near banks = high financial awareness context. Surface street = 5-8 seconds viewing. Professional demographic.", wordCount: 5, scienceNote: "Well under limit—perfect for financial district professionals. Equation = instant comprehension. High-income area = ideal HELOC demographic. Repetition with office workers." },
      { time: "5:00 PM", location: "Country club/golf", activity: "Networking, leisure", venue: "Restaurant/bar", message: "Flexible equity for life's opportunities. HELOC.", strategy: "Upmarket messaging. Investment focus. Country club context = affluent demographic. Long dwell time (2-3 hours) = can rotate multiple sophisticated messages.", wordCount: 6, scienceNote: "Under limit. Premium venue = can be slightly more sophisticated. Long dwell allows storytelling across multiple plays. Affluent audience receptive to investment messaging." }
    ]
  },
  vaLoan: {
    name: "VA Loan Buyers",
    product: "VA Purchase Loan",
    creativeBrief: {
      visualStyle: "Patriotic without being cheesy. Respectful, honor-focused. Show real veterans and families. Authentic, not stock military photos.",
      colorPalette: "Red, white, blue (use tastefully). Also: olive/military green, neutral grays. American flag imagery sparingly.",
      typography: "Strong, bold, confident. Sans-serif. Clear hierarchy. Easy to read.",
      keyMessages: ["You've earned this", "$0 down, no PMI", "Thank you for your service", "VA loan benefits", "Easier than you think"],
      imagery: "Veterans in civilian life, military families, American homes, keys, 'welcome home' themes, diverse service members, transitioning to civilian life",
      tone: "Respectful, grateful, benefit-focused. Educational (many don't know they qualify). Empowering.",
      ctaStyle: "Benefit-driven: 'Claim Your Benefits', 'Get Your $0 Down Loan', 'Learn About VA Loans'",
      videoApproach: "Testimonials work well. Show veteran's journey: service → home → family life. Honor service, celebrate homeownership. 20-30 seconds.",
      avoid: "Over-the-top patriotic imagery, assuming all vets are struggling, ignoring family members (spouses can use VA loans too)"
    },
    profile: {
      age: "25-45 (active), 50-70 (retired)",
      income: "$60K-$150K",
      employment: "Active military, veterans, civil service",
      lifestyle: "Patriotic, community-oriented, value-focused",
      painPoints: ["Don't know about VA benefits", "$0 down confusion", "Certificate of Eligibility", "Finding VA-friendly lenders"]
    },
    persona: "Meet Marcus - 32, Army veteran (4 years service), now works in logistics, renting, doesn't realize he qualifies for $0 down VA loan",
    journey: [
      { time: "5:30 AM", location: "Gym", activity: "Early morning workout", venue: "Gym screens", message: "Served your country. $0 down VA.", strategy: "Honor service. Clear benefit. Military mindset = discipline, early rising. 45-90 min workout = multiple exposures. On-base gyms = 100% target audience concentration.", wordCount: 6, scienceNote: "Perfect length. 'Served' = respectful acknowledgment. Early AM = peak military demographic. 15-30 second spots allow respectful tone + benefit." },
      { time: "7:00 AM", location: "Commute", activity: "Drive to work/base", venue: "Roadside billboards", message: "Veterans: $0 down. No PMI. Period.", strategy: "Geographic targeting critical. Near bases/VA hospitals = concentrated audience. Directional: 'Period' = definitive, military-style communication. They'll see daily = builds trust through repetition.", wordCount: 6, scienceNote: "Under limit ✓. Military communication style = direct, clear, no fluff. Near bases = geographic concentration (reach 1000s daily). 'Period' = authority tone." },
      { time: "12:00 PM", location: "Casual dining", activity: "Lunch break", venue: "Restaurant/bar", message: "Veteran? You qualify for $0 down.", strategy: "Many don't know benefits. Educational first, selling second. Near bases = target-rich environment. Lunch = relaxed, receptive. 45-60 min dwell = educational messaging works.", wordCount: 6, scienceNote: "Perfect educational message. Question format engages. Many veterans unaware they qualify = awareness first, conversion later. Dwell time allows follow-up messaging." },
      { time: "4:00 PM", location: "Gas station", activity: "Filling up", venue: "Gas station", message: "Thank you for service. VA loans.", strategy: "Respectful, benefit-focused. Gas station = 3-5 min captive. Near bases = geographic targeting. Simple acknowledgment + product name = brand awareness building through repetition.", wordCount: 6, scienceNote: "Under limit. Respectful tone critical. Most captive audience. Near military installations = highest ROI. Simple message repeated = mere exposure effect." },
      { time: "6:00 PM", location: "Grocery store", activity: "Shopping", venue: "Grocery store", message: "VA loan: $0 down. No PMI.", strategy: "Clear benefits, no jargon. Evening shopping = family time, thinking about home/stability. Near commissary = military family concentration. Repetition of benefits = recall.", wordCount: 6, scienceNote: "Benefits crystal clear. Military families = value-focused. 30-60 min shopping = multiple plays. '$0 down + No PMI' = concrete, believable benefits." },
      { time: "7:00 PM", location: "Home Depot", activity: "Weekend projects", venue: "Hardware store", message: "Veterans get the best loan terms.", strategy: "Direct, confident. Hardware store = homeowner mindset or aspiring homeowner. Weekend projects = thinking about home improvements/ownership. 'Best terms' = competitive advantage clear.", wordCount: 6, scienceNote: "Perfect for homeowner context. Direct claim ('best terms') = confidence builder. Hardware store weekend = aspiring homeowners present. Repetition builds association." }
    ]
  },
  reverse: {
    name: "Reverse Mortgage",
    product: "Reverse Mortgage / HECM",
    creativeBrief: {
      visualStyle: "Dignified, calm, trustworthy. Show seniors in their beloved homes. Safety, security, comfort. Nothing that could seem predatory.",
      colorPalette: "Soft, warm, reassuring. Sage, warm gray, soft blue, cream. Nothing too bright or harsh.",
      typography: "LARGE, high-contrast text. Serif acceptable for warmth. Excellent readability is critical. Slow transitions.",
      keyMessages: ["Stay in your home", "Tax-free income from equity", "No more mortgage payments", "Age 62+ benefits", "FHA-insured HECM"],
      imagery: "Seniors in comfortable homes, grandchildren visits, paid bill stamps, medical cost relief, aging in place, home sweet home, dignity and independence",
      tone: "Respectful, educational, security-focused. Combat stigma with facts. Trustworthy advisor positioning.",
      ctaStyle: "Low-pressure, educational: 'Learn How It Works', 'Free Information Kit', 'Speak to a Specialist'",
      videoApproach: "Slower pacing. Clear narration. Simple animations showing how it works. Real testimonials. 30-45 seconds acceptable.",
      avoid: "High-pressure tactics, ignoring heir concerns, complex financial jargon, making it seem 'too good to be true'"
    },
    profile: {
      age: "62-80",
      income: "Fixed income, $40K-$100K",
      employment: "Retired, living on SS + savings",
      lifestyle: "Age-in-place focused, healthcare costs, worried about outliving savings",
      painPoints: ["Stigma of reverse mortgages", "Complexity", "Protecting home for heirs", "Fixed income stress"]
    },
    persona: "Meet Barbara - 68, widow, paid-off home worth $450K, living on $3,200/month SS, worried about medical costs, wants to stay in home",
    journey: [
      { time: "8:00 AM", location: "Coffee shop", activity: "Morning coffee routine", venue: "Coffee shop", message: "62+? Home equity = Tax-free income.", strategy: "Direct benefit. Tax-free is powerful for retirees. Morning routine = daily touchpoint. 5-15 min dwell. Large fonts essential for 62+ demographic. Question format qualifies audience.", wordCount: 6, scienceNote: "Under limit ✓. CRITICAL: Text must be LARGE (seniors need high contrast, big fonts). 8-15 second spots. 'Tax-free' = high-value benefit for fixed income audience." },
      { time: "9:30 AM", location: "Grocery store", activity: "Morning shopping (when it's quiet)", venue: "Grocery store", message: "Stay home. Eliminate mortgage. Age 62+.", strategy: "Safety, security, aging-in-place. Morning shopping = senior preference (avoid crowds). Two benefits: stay + eliminate payment. Age qualifier = targets message. 30-60 min = multiple exposures.", wordCount: 6, scienceNote: "Perfect length. Seniors shop morning for quiet = concentrated demographic. 'Stay home' = addresses #1 concern (aging in place). Large, slow transitions critical." },
      { time: "11:00 AM", location: "Pharmacy", activity: "Prescription pickup", venue: "Pharmacy", message: "Healthcare costs rising? Access home equity.", strategy: "CONTEXTUAL GOLD. Pharmacy = thinking about medical costs. 'Rising' acknowledges their reality. 5-15 min wait = perfect dwell. Question format = engagement without pressure.", wordCount: 6, scienceNote: "Under limit. Healthcare context perfect = financial stress top of mind. Pharmacy screens = older demographic concentration. Question format less pushy (critical for seniors)." },
      { time: "1:00 PM", location: "Medical center", activity: "Doctor appointments", venue: "Medical center", message: "Retirement income from your paid-off home.", strategy: "Medical facility = healthcare cost context. 'Paid-off' = many 62+ have no mortgage. Waiting room = 15-60 min captive audience. Educational tone essential (combat stigma).", wordCount: 6, scienceNote: "Perfect length. Long dwell time allows educational approach. Medical context = financial worry heightened. 'Paid-off home' = qualifies audience immediately." },
      { time: "3:00 PM", location: "Bank", activity: "Banking errands", venue: "Office building", message: "Your home CAN pay you. HECM.", strategy: "Financial environment. 'CAN' = permission + possibility. Bank lobby = longer dwell (5-20 min). HECM = proper product name builds credibility. Seniors trust banks = good context.", wordCount: 6, scienceNote: "Under limit. Bank context = financial legitimacy. Long dwell in lobbies = can show educational content. 'CAN pay you' = reframes home as income source." },
      { time: "4:30 PM", location: "Grocery store", activity: "Afternoon shopping", venue: "Grocery store", message: "No mortgage payments. Ever. Age 62+.", strategy: "Simple benefit. 'Ever' = powerful permanence. Afternoon = second daily senior shopping peak. Age qualifier essential. Repeat exposure (AM + PM) = recognition building over weeks.", wordCount: 6, scienceNote: "Perfect. 'Ever' = single powerful word. Afternoon shopping = senior demographic peak #2. Multiple daily exposures accelerate mere exposure effect (familiarity = trust)." },
      { time: "6:00 PM", location: "Casual dining", activity: "Early dinner (senior discount time)", venue: "Restaurant/bar", message: "Paid off home? It pays you.", strategy: "Retirement lifestyle. Early bird timing = senior demographic. 'Pays you' = value flip. 45-90 min dwell = relaxed, social environment. Can rotate educational messages during meal.", wordCount: 6, scienceNote: "Under 7 words ✓. Early dinner = concentrated senior demographic. Long dwell allows multiple message exposures. Social context = relaxed, receptive mood for financial messaging." }
    ]
  }
};
