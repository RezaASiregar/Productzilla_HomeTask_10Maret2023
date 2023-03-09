// === soal nomor 1
const epl = {
    Arsenal: 1, //number
    'Manchester City': 2, //number

    'Manchester United': 'GGMU', //string
    Liverpool: 'YNWA', //string

    big6: besar = { //object
        '1': 'Liverpool',
        '2': 'Manchester United',
        '3': 'Arsenal',
        '4': 'Chelsea',
        '5': 'Manchester City',
        '6': 'Tottenham'
    },
    
    topScore: ['Halland, Kane, Toney'], //array
};

const LaLiga = {
    Barcelona: 62,
    Madrid: 53,

    'Atletico Madrid': 'ATM',
    Sociedad: 'Soc',

    klasemen: liga = {
        '1': 'Barcelona',
        '2': 'Real Madrid',
        '3': 'Atletico Madrid',
        '4': 'Real Sociedad',
        '5': 'Betis',
    },

    topScore: ['Lewandowski, Joselu, Benzema'],
};

const seriaA = {
    napoli: 65,
    inter: 50,

    Milan: 'Forza Milan',
    Roma: 'Colosium',
    
    
    klasemen: liga = {
        '1': 'Napoli',
        '2': 'Inter',
        '3': 'Lazio',
        '4': 'Roma',
        '5': 'Milan',
    },

    topScore: ['Osimhen, Martinez, Lookman'],
}

const bundesliga = {
    Bayern: 49,
    Dortmund: 48,

    Schalke: 'Neuer',
    Leverkusen: 'Minamino',
    
    
    klasemen: liga = {
        '1': 'Munchen',
        '2': 'Dortmund',
        '3': 'Union Berlin',
        '4': 'Leipzig',
        '5': 'Freiburg',
    },

    topScore: ['Fullkrug, Nkunku, Grifo'],
}

const Ligue1 = {
    PSG: 63,
    Marseille: 55,

    Monaco: 'Peringkat 3',
    Lens: 'Peringkat 4',
    
    klasemen: liga = {
        '1': 'PSG',
        '2': 'Marseille',
        '3': 'Monaco',
        '4': 'Lens',
        '5': 'Rennes',
    },

    topScore: ['Mbappe, Yedder, David'],
};

console.log('========== 5 Liga Top Eropa ============');
console.log('== England ==');
console.log(epl);
console.log('== Spain ==');
console.log(LaLiga);
console.log('== Italy ==');
console.log(seriaA);
console.log('== Germany ==');
console.log(bundesliga);
console.log('== France ==');
console.log(Ligue1);

// === soal no 2

const aritmatika = {
    penjumlahan: function hasilHitung (x, y) {
        const hasil = (x + y)
        return hasil
    },

    pengurangan: function hasilHitung (x, y) {
        const hasil = (x - y)
        return hasil
    },

    perkalian: function hasilHitung (x, y) {
        const hasil = (x * y)
        return hasil
    },

    pembagian: function hasilHitung (x, y) {
        const hasil = (x / y)
        return hasil
    },

    perpangkatan: function hasilHitung (x, y) {
        const hasil = (x ** y)
        return hasil
    },

    modulus: function hasilHitung (x, y) {
        const hasil = (x % y)
        return hasil
    },
};

let x= 2, y=5
console.log(aritmatika);