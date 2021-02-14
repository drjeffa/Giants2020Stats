const giants2020= [
    {
        k:0,pos:'Position',name:'Player',age: 'age',games:'Games',plateApp:'PA',atBats:'AB',runs:'Runs',hits:'Hits',doubles:'2B',triples:'3B',hr:'HR',rbi:'RBI',sb:'SB',cs:'CS',bb:'BB',so:'SO',ba:'BA',obp:'OBP',slugging:'Slug%',ops:'OPS',opsPlus:'OPS+',totalBases:'TB'},
    
    {	k	:	3	,	pos	:	"	2B	"	,	name	:	"	Donovan Solano	"	,	age	:	32	,	games	:	54	,	plateApp	:	203	,	atBats	:	190	,	runs	:	22	,	hits	:	62	,	doubles	:	15	,	triples	:	1	,	hr	:	3	,	rbi	:	29	,	sb	:	0	,	cs	:	0	,	bb	:	10	,	so	:	39	,	ba	:	0.326	,	obp	:	0.365	,	slugging	:	0.463	,	ops	:	0.828	,	opsPlus	:	128	,	totalBases	:	88	}	,
{	k	:	4	,	pos	:	"	SS	"	,	name	:	"	Brandon Crawford*	"	,	age	:	33	,	games	:	54	,	plateApp	:	193	,	atBats	:172	,	runs	:	26	,	hits	:	44	,	doubles	:	12	,	triples	:	0	,	hr	:	8	,	rbi	:	28	,	sb	:	1	,	cs	:	2	,	bb	:	15	,	so	:	47	,	ba	:	0.256	,	obp	:	0.326	,	slugging	:	0.465	,	ops	:	0.792	,	opsPlus	:	116	,	totalBases	:	80	}	,
{	k	:	5	,	pos	:	"	3B	"	,	name	:	"	Evan Longoria	"	,	age	:	34	,	games	:	53	,	plateApp	:	209	,	atBats	:	193	,	runs	:	26	,	hits	:	49	,	doubles	:	10	,	triples	:	1	,	hr	:	7	,	rbi	:	28	,	sb	:	0	,	cs	:	1	,	bb	:	11	,	so	:	39	,	ba	:	0.254	,	obp	:	0.297	,	slugging	:	0.425	,	ops	:	0.722	,	opsPlus	:	97	,	totalBases	:	82	}	,
{	k	:	6	,	pos	:	"	LF	"	,	name	:	"	Alex Dickerson*	"	,	age	:	30	,	games	:	52	,	plateApp	:	170	,	atBats	:	151	,	runs	:	28	,	hits	:	45	,	doubles	:	10	,	triples	:	1	,	hr	:	10	,	rbi	:	27	,	sb	:	0	,	cs	:	0	,	bb	:	16	,	so	:	30	,	ba	:	0.298	,	obp	:	0.371	,	slugging	:	0.576	,	ops	:	0.947	,	opsPlus	:	157	,	totalBases	:	87	}	,
{	k	:	7	,	pos	:	"	CF	"	,	name	:	"	Mauricio Dubon	"	,	age	:	25	,	games	:	54	,	plateApp	:	177	,	atBats	:	157	,	runs	:	21	,	hits	:	43	,	doubles	:	4	,	triples	:	1	,	hr	:	4	,	rbi	:	19	,	sb	:	2	,	cs	:	3	,	bb	:	15	,	so	:	36	,	ba	:	0.274	,	obp	:	0.337	,	slugging	:	0.389	,	ops	:	0.726	,	opsPlus	:	101	,	totalBases	:	61	}	,
{	k	:	8	,	pos	:	"	RF	"	,	name	:	"	Mike Yastrzemski*	"	,	age	:	29	,	games	:	54	,	plateApp	:	225	,	atBats	:	192	,	runs	:	39	,	hits	:	57	,	doubles	:	14	,	triples	:	4	,	hr	:	10	,	rbi	:	35	,	sb	:	2	,	cs	:	1	,	bb	:	30	,	so	:	55	,	ba	:	0.297	,	obp	:	0.4	,	slugging	:	0.568	,	ops	:	0.968	,	opsPlus	:	165	,	totalBases	:	109	}	,
{	k	:	9	,	pos	:	"	DH	"	,	name	:	"	Wilmer Flores	"	,	age	:	28	,	games	:	55	,	plateApp	:	213	,	atBats	:	198	,	runs	:	30	,	hits	:	53	,	doubles	:	11	,	triples	:	1	,	hr	:	12	,	rbi	:	32	,	sb	:	1	,	cs	:	0	,	bb	:	13	,	so	:	36	,	ba	:	0.268	,	obp	:	0.315	,	slugging	:	0.515	,	ops	:	0.83	,	opsPlus	:	125	,	totalBases	:	102	}	,
{	k	:	10	,	pos	:	"	DH	"	,	name	:	"	Austin Slater	"	,	age	:	27	,	games	:	31	,	plateApp	:	104	,	atBats	:	85	,	runs	:	18	,	hits	:	24	,	doubles	:	2	,	triples	:	1	,	hr	:	5	,	rbi	:	7	,	sb	:	8	,	cs	:	1	,	bb	:	16	,	so	:	22	,	ba	:	0.282	,	obp	:	0.408	,	slugging	:	0.506	,	ops	:	0.914	,	opsPlus	:	152	,	totalBases	:	43	}	,
{	k	:	11	,	pos	:	"	UT	"	,	name	:	"	Darin Ruf	"	,	age	:	33	,	games	:	40	,	plateApp	:	100	,	atBats	:	87	,	runs	:	11	,	hits	:	24	,	doubles	:	6	,	triples	:	0	,	hr	:	5	,	rbi	:	18	,	sb	:	1	,	cs	:	0	,	bb	:	13	,	so	:	23	,	ba	:	0.276	,	obp	:	0.37	,	slugging	:	0.517	,	ops	:	0.887	,	opsPlus	:	143	,	totalBases	:	45	}	,
{	k	:	12	,	pos	:	"	DH	"	,	name	:	"	Pablo Sandoval#	"	,	age	:	33	,	games	:	33	,	plateApp	:	90	,	atBats	:	82	,	runs	:	5	,	hits	:	18	,	doubles	:	1	,	triples	:	0	,	hr	:	1	,	rbi	:	6	,	sb	:	0	,	cs	:	0	,	bb	:	6	,	so	:	18	,	ba	:	0.22	,	obp	:	0.278	,	slugging	:	0.268	,	ops	:	0.546	,	opsPlus	:	53	,	totalBases	:	22	}	,
{	k	:	13	,	pos	:	"	C	"	,	name	:	"	Chadwick Tromp	"	,	age	:	25	,	games	:	24	,	plateApp	:	64	,	atBats	:	61	,	runs	:	11	,	hits	:	13	,	doubles	:	1	,	triples	:	0	,	hr	:	4	,	rbi	:	10	,	sb	:	0	,	cs	:	0	,	bb	:	1	,	so	:	20	,	ba	:	0.213	,	obp	:	0.219	,	slugging	:	0.426	,	ops	:	0.645	,	opsPlus	:	73	,	totalBases	:	26	}	,
{	k	:	14	,	pos	:	"	OF	"	,	name	:	"	Hunter Pence	"	,	age	:	37	,	games	:	17	,	plateApp	:	56	,	atBats	:	52	,	runs	:	4	,	hits	:	5	,	doubles	:	0	,	triples	:	1	,	hr	:	2	,	rbi	:	6	,	sb	:	0	,	cs	:	0	,	bb	:	3	,	so	:	15	,	ba	:	0.096	,	obp	:	0.161	,	slugging	:	0.25	,	ops	:	0.411	,	opsPlus	:	12	,	totalBases	:	13	}	,
{	k	:	15	,	pos	:	"	C	"	,	name	:	"	Tyler Heineman#	"	,	age	:	29	,	games	:	15	,	plateApp	:	50	,	atBats	:	42	,	runs	:	3	,	hits	:	8	,	doubles	:	1	,	triples	:	0	,	hr	:	0	,	rbi	:	1	,	sb	:	1	,	cs	:	0	,	bb	:	4	,	so	:	6	,	ba	:	0.19	,	obp	:	0.292	,	slugging	:	0.214	,	ops	:	0.506	,	opsPlus	:	44	,	totalBases	:	9	}	,
{	k	:	16	,	pos	:	"	OF	"	,	name	:	"	Steven Duggar*	"	,	age	:	26	,	games	:	21	,	plateApp	:	36	,	atBats	:	34	,	runs	:	3	,	hits	:	6	,	doubles	:	2	,	triples	:	0	,	hr	:	0	,	rbi	:	3	,	sb	:	1	,	cs	:	0	,	bb	:	1	,	so	:	11	,	ba	:	0.176	,	obp	:	0.222	,	slugging	:	0.235	,	ops	:	0.458	,	opsPlus	:	27	,	totalBases	:	8	}	,
{	k	:	17	,	pos	:	"	UT	"	,	name	:	"	Daniel Robertson	"	,	age	:	26	,	games	:	13	,	plateApp	:	24	,	atBats	:	21	,	runs	:	4	,	hits	:	7	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	2	,	sb	:	0	,	cs	:	0	,	bb	:	3	,	so	:	6	,	ba	:	0.333	,	obp	:	0.417	,	slugging	:	0.333	,	ops	:	0.75	,	opsPlus	:	113	,	totalBases	:	7	}	,
{	k	:	18	,	pos	:	"	OF	"	,	name	:	"	Luis Alexander Basabe#	"	,	age	:	23	,	games	:	9	,	plateApp	:	18	,	atBats	:	14	,	runs	:	5	,	hits	:	2	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	1	,	sb	:	2	,	cs	:	0	,	bb	:	4	,	so	:	5	,	ba	:	0.143	,	obp	:	0.333	,	slugging	:	0.143	,	ops	:	0.476	,	opsPlus	:	40	,	totalBases	:	2	}	,
{	k	:	19	,	pos	:	"	RF	"	,	name	:	"	Jaylin Davis	"	,	age	:	25	,	games	:	4	,	plateApp	:	12	,	atBats	:	12	,	runs	:	2	,	hits	:	2	,	doubles	:	0	,	triples	:	0	,	hr	:	1	,	rbi	:	1	,	sb	:	0	,	cs	:	0	,	bb	:	0	,	so	:	6	,	ba	:	0.167	,	obp	:	0.167	,	slugging	:	0.417	,	ops	:	0.583	,	opsPlus	:	54	,	totalBases	:	5	}	,
{	k	:	20	,	pos	:	"	OF	"	,	name	:	"	Joe McCarthy*	"	,	age	:	26	,	games	:	4	,	plateApp	:	10	,	atBats	:	10	,	runs	:	0	,	hits	:	0	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	0	,	sb	:	0	,	cs	:	0	,	bb	:	0	,	so	:	5	,	ba	:	0	,	obp	:	0	,	slugging	:	0	,	ops	:	0	,	opsPlus	:	-100	,	totalBases	:	0	}	,
{	k	:	21	,	pos	:	"	DH	"	,	name	:	"	Justin Smoak#	"	,	age	:	33	,	games	:	3	,	plateApp	:	6	,	atBats	:	6	,	runs	:	0	,	hits	:	0	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	0	,	sb	:	0	,	cs	:	0	,	bb	:	0	,	so	:	2	,	ba	:	0	,	obp	:	0	,	slugging	:	0	,	ops	:	0	,	opsPlus	:	-100	,	totalBases	:	0	}	,
{	k	:	22	,	pos	:	"	RF	"	,	name	:	"	Joey Rickard	"	,	age	:	29	,	games	:	4	,	plateApp	:	6	,	atBats	:	5	,	runs	:	1	,	hits	:	0	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	0	,	sb	:	0	,	cs	:	0	,	bb	:	1	,	so	:	1	,	ba	:	0	,	obp	:	0.167	,	slugging	:	0	,	ops	:	0.167	,	opsPlus	:	-47	,	totalBases	:	0	}	,
{	k	:	23	,	pos	:	"	C	"	,	name	:	"	Rob Brantly*	"	,	age	:	30	,	games	:	1	,	plateApp	:	3	,	atBats	:	3	,	runs	:	0	,	hits	:	0	,	doubles	:	0	,	triples	:	0	,	hr	:	0	,	rbi	:	0	,	sb	:	0	,	cs	:	0	,	bb	:	0	,	so	:	0	,	ba	:	0	,	obp	:	0	,	slugging	:	0	,	ops	:	0	,	opsPlus	:	-100	,	totalBases	:	0	}	
];

let checkedPlayers = [];
let roster = [];
let selectedStats =[];

//Selection custom stat catagories
function handleSelectStats(){
    selectedStats.forEach((item)=>{
        item ==1   ? showAtBats()
        :item ==2  ? showAverage()
        :item ==3  ? showHits()
        :item ==4  ? showBB()
        :item ==5  ? showSO()
        :item ==6  ? showHR()
        :item ==7  ? showRBI()
        :item ==8  ? showPlateApp()
        :item ==9  ? showOBP()
        :item ==10 ? showOPS()
        :item ==11 ? showOPSPlus()
        :item ==12 ? showSB()
        :item ==13 ? showCS()
        :item ==14 ? showDoubles()
        :item ==15 ? showTriples()
        :item ==16 ? showTotalBases()
        :item ==17 ? showSlugging()
        :item ==18 ? showRuns()
        :item ==19 ? showGames()
        : console.log('none')
    })
}

const displayContainer = document.getElementById('displayStats');

//Show-Stats functions
function showAtBats(){     
    const statContainer1 = document.createElement('div');
    statContainer1.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer1);
    roster.forEach((item)=>{        
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const atBats = document.createElement('p');       
        atBats.setAttribute('class', 'info');
        atBats.textContent = giants2020[item].atBats;        
        statContainer1.appendChild(statCard);
        statCard.appendChild(atBats);
    })  
}

function showAverage(){ 
    const statContainer2 = document.createElement('div');
    statContainer2.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer2);    
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const average = document.createElement('p');
        average.setAttribute('class', 'info');
        average.textContent = giants2020[item].ba;
        statContainer2.appendChild(statCard);
        statCard.appendChild(average);
    })
}
function showHits(){   
    const statContainer3 = document.createElement('div');
    statContainer3.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer3);    
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const hits = document.createElement('p');
        hits.setAttribute('class', 'info');
        hits.textContent = giants2020[item].hits;
        statContainer3.appendChild(statCard);
        statCard.appendChild(hits);
    })
}
function showBB(){
    const statContainer4 = document.createElement('div');
        statContainer4.setAttribute('class','statContainer');
        displayContainer.appendChild(statContainer4);
        roster.forEach((item)=>{
             const statCard = document.createElement('div');
             statCard.setAttribute('class', 'card');
 
             const bb = document.createElement('p');
             bb.setAttribute('class', 'info');
             bb.textContent = giants2020[item].bb;
 
             statContainer4.appendChild(statCard);
             statCard.appendChild(bb);
         })
}
function showSO(){
    const statContainer5 = document.createElement('div');
        statContainer5.setAttribute('class','statContainer');
        displayContainer.appendChild(statContainer5);
        roster.forEach((item)=>{
            const statCard = document.createElement('div');
            statCard.setAttribute('class', 'card');
            const so = document.createElement('p');
            so.setAttribute('class', 'info');
            so.textContent = giants2020[item].so;
            statContainer5.appendChild(statCard);
            statCard.appendChild(so);
         })
}
function showHR(){
    const statContainer6 = document.createElement('div');
    statContainer6.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer6);
    roster.forEach((item)=>{
        
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');

        const hr = document.createElement('p');
        hr.setAttribute('class', 'info');
        hr.textContent = giants2020[item].hr;
   
        statContainer6.appendChild(statCard);
        statCard.appendChild(hr);
     })
}
function showRBI(){
    const statContainer7 = document.createElement('div');
        statContainer7.setAttribute('class','statContainer');
        displayContainer.appendChild(statContainer7);
        roster.forEach((item)=>{
            const statCard = document.createElement('div');
            statCard.setAttribute('class', 'card');
 
            const rbi = document.createElement('p');
            rbi.setAttribute('class', 'info');
            rbi.textContent = giants2020[item].rbi;
 
            statContainer7.appendChild(statCard);
            statCard.appendChild(rbi);
         }) 
}
function showPlateApp(){
    const statContainer8 = document.createElement('div');
    statContainer8.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer8);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const plateApp = document.createElement('p');
        plateApp.setAttribute('class', 'info');
        plateApp.textContent = giants2020[item].plateApp;
        statContainer8.appendChild(statCard);
        statCard.appendChild(plateApp);       
    })
}
function showOBP(){
    const statContainer9 = document.createElement('div');
    statContainer9.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer9);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const obp = document.createElement('p');
        obp.setAttribute('class', 'info');
        obp.textContent = giants2020[item].obp;
        statContainer9.appendChild(statCard);
        statCard.appendChild(obp);
    })
}
function showOPS(){
    const statContainer10 = document.createElement('div');
    statContainer10.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer10);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const ops = document.createElement('p');
        ops.setAttribute('class', 'info');
        ops.textContent = giants2020[item].ops;
        statContainer10.appendChild(statCard);
        statCard.appendChild(ops);
    })
}
function showOPSPlus(){
    const statContainer11 = document.createElement('div');
    statContainer11.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer11);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const opsPlus = document.createElement('p');
        opsPlus.setAttribute('class', 'info');
        opsPlus.textContent = giants2020[item].opsPlus;
        statContainer11.appendChild(statCard);
        statCard.appendChild(opsPlus);
    })
}
function showSB(){
    const statContainer12 = document.createElement('div');
    statContainer12.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer12);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const sb = document.createElement('p');
        sb.setAttribute('class', 'info');
        sb.textContent = giants2020[item].sb;
        statContainer12.appendChild(statCard);
        statCard.appendChild(sb);
    })
}
function showCS(){
    const statContainer13 = document.createElement('div');
    statContainer13.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer13);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const cs = document.createElement('p');
        cs.setAttribute('class', 'info');
        cs.textContent = giants2020[item].cs;
        statContainer13.appendChild(statCard);
        statCard.appendChild(cs);
    })
}
function showDoubles(){
    const statContainer14 = document.createElement('div');
    statContainer14.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer14);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const doubles = document.createElement('p');
        doubles.setAttribute('class', 'info');
        doubles.textContent = giants2020[item].doubles;
        statContainer14.appendChild(statCard)
        statCard.appendChild(doubles);
    })
}
function showTriples(){
    const statContainer15 = document.createElement('div');
    statContainer15.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer15);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const triples = document.createElement('p');
        triples.setAttribute('class', 'info');
        triples.textContent = giants2020[item].triples;
        statContainer15.appendChild(statCard)
        statCard.appendChild(triples);
    })
}
function showTotalBases(){
    const statContainer16 = document.createElement('div');
    statContainer16.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer16);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const totalBases = document.createElement('p');
        totalBases.setAttribute('class', 'info');
        totalBases.textContent = giants2020[item].totalBases;
        statContainer16.appendChild(statCard)
        statCard.appendChild(totalBases);
    })
}
function showSlugging(){
    const statContainer17 = document.createElement('div');
    statContainer17.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer17);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const slugging = document.createElement('p');
        slugging.setAttribute('class', 'info');
        slugging.textContent = giants2020[item].slugging;
        statContainer17.appendChild(statCard)
        statCard.appendChild(slugging);
    })
}
function showRuns(){
    const statContainer18 = document.createElement('div');
    statContainer18.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer18);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const runs = document.createElement('p');
        runs.setAttribute('class', 'info');
        runs.textContent = giants2020[item].runs;
        statContainer18.appendChild(statCard)
        statCard.appendChild(runs);
    })
}
function showGames(){
    const statContainer19 = document.createElement('div');
    statContainer19.setAttribute('class','statContainer');
    displayContainer.appendChild(statContainer19);
    roster.forEach((item)=>{
        const statCard = document.createElement('div');
        statCard.setAttribute('class', 'card');
        const games = document.createElement('p');
        games.setAttribute('class', 'info');
        games.textContent = giants2020[item].games;
        statContainer19.appendChild(statCard)
        statCard.appendChild(games);
    })
}

//display basic stats  
function showBasicStatSet() {     
    showAtBats(); 
    showAverage();
    showHits();    
    showBB();
    showSO();
    showHR();
    showRBI();
}
//display advanced stats 
function showAdvancedStatSet() {
    showPlateApp();
    showOBP();
    showOPS();
    showOPSPlus();
    showSB();
    showCS();
      
 } 

//Display More Hitting Stats
function showMoreHittingStats(){
    showGames();
    showDoubles();
    showTriples();
    showTotalBases();
    showSlugging();
    showRuns();
}

//To show all players
function showAllPlayers(){    
    checkedPlayers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];  
    handleCheckedPlayers(checkedPlayers); 
 }

//to process player name list
function handleCheckedPlayers(){
    const container = document.getElementById('displayNames');  
    checkedPlayers.forEach((item)=>{          
        let player = giants2020[item].name;      
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        container.appendChild(card);
        const name = document.createElement('p');
        name.setAttribute('class', 'name');
        name.textContent= player;
        card.appendChild(name); 
    })
    roster = checkedPlayers; 
}

//all players or select players - radio btn input
function showPlayerSelector(){
    //display player list with checkboxes
    document.querySelector('.player-checkbox').setAttribute('class', 'player-checkbox-display');
    //get selected players from checkboxes
    document.getElementById('submit-players').addEventListener('click', (e)=> {
        event.preventDefault();
        let selectPlayers = document.getElementsByName('player-names');
        let playersArray = Array.from(selectPlayers);
        checkedPlayers.push(0);   
        for(let i = 0; i< playersArray.length; i++){
             playersArray[i].checked === true ? checkedPlayers.push(playersArray[i].value)        
            : console.log('no')
        }       
    handleCheckedPlayers(checkedPlayers); 
    })    
}
function showStatSelector(){
    document.querySelector('.stat-selector').setAttribute('class', 'stat-selector-show');
    //Process selected stat catagories
    document.getElementById('submit-statCat').addEventListener('click', (e)=>{
        event.preventDefault();
        let selectStat = document.getElementsByName('stat-cat');
        let statArray = Array.from(selectStat);   
        for(let i = 0; i< statArray.length; i++){
            statArray[i].checked === true ? selectedStats.push(statArray[i].value)        
            : console.log('no')
        } 
    handleSelectStats(selectedStats)
    })
}
document.getElementById('submit').addEventListener('click', (e)=> {
    event.preventDefault();
    let radiobuttons = document.getElementsByName('select');
    radiobuttons[0].checked ===true ?  
          showAllPlayers() 
         :showPlayerSelector()
})

// display stat stats or selected stats
document.getElementById('submit-stats').addEventListener('click', (e)=>{
    event.preventDefault();    
    let stat = document.querySelector('input[name="select-stats"]:checked');
        stat.value ==1  ? showBasicStatSet(roster)
        :stat.value ==2 ? showAdvancedStatSet(roster)       
        :stat.value ==3 ? showMoreHittingStats(roster) 
        :stat.value ==4 ? showStatSelector()  
        :console.log('no value')                                                                                                                                                                                             
})
 


