export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Ginanjar Wahyu Hidayat',
            child: 'Putra ke 5',
            father: 'Kundiarto',
            mother: 'Kundarti',
            image: './src/assets/images/cowo.jpg'
        },
        P: {
            id: 2,
            name: 'Titin Marduani',
            child: 'Putri ke 2',
            father: 'Azhari',
            mother: 'Suryana',
            image: './src/assets/images/cewe.jpg'
        },

        couple: './src/assets/images/3.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '03',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: '10.00'
            }
        },
        reception: {
            year: '2026',
            month: 'Januari',
            date: '03',
            day: 'Sabtu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Ds. Praja, RT 12/ RW 06, Desa.Sriminosari, Kec.Labuhan Maringgai, Kab.Lampung Timur, Lampung'
    },

    link: {
        calendar: 'https://calendar.app.google/ZNnZRLQVqAffrTEo7',
        map: 'https://maps.app.goo.gl/trAhRqSExJcEBpK9A',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/cewe.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/.png'
        },
        {
            id: 5,
            image: './src/assets/images/.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'BRI',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Sinarmas',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyIZPm97dEqOFvEMevtN5t8yCpZk0BHfdLqEA-aKXy1gV420IIaXeue5aSI6bl1Ojw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
